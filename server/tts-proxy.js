/* =====================================================================
   server/tts-proxy.js — Mini proxy ElevenLabs (voix naturelles), à faire
   tourner SUR TON SERVEUR (derrière Caddy). Aucune dépendance npm.
   Node 14+ suffit (utilise le module https intégré).

   La clé reste sur le serveur (variable d'environnement), jamais dans le
   code ni dans l'app publique :
     ELEVENLABS_API_KEY   (obligatoire)
     ELEVENLABS_VOICE_ID  (optionnel — sinon voix par défaut)
     TTS_PORT             (optionnel — défaut 3001 ; écoute sur 127.0.0.1)

   Caddy renvoie /api/* vers ce service (voir server/TTS-PROXY.md).
   ===================================================================== */
const http = require("http");
const https = require("https");

const PORT = parseInt(process.env.TTS_PORT || "3001", 10);
const DEFAULT_VOICE = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM"; // « Rachel » (multilingue)
const KEY = process.env.ELEVENLABS_API_KEY || "";

// Anti-abus simple : limite par IP (le point d'accès est public).
const HITS = new Map();
function tooMany(ip) {
  const now = Date.now(), w = 60000, max = 80;
  const e = HITS.get(ip) || { n: 0, t: now };
  if (now - e.t > w) { e.n = 0; e.t = now; }
  e.n++; HITS.set(ip, e);
  return e.n > max;
}

function elevenlabs(voice, text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.75, use_speaker_boost: true }
    });
    const req = https.request({
      hostname: "api.elevenlabs.io",
      path: "/v1/text-to-speech/" + voice + "?output_format=mp3_44100_128",
      method: "POST",
      headers: {
        "xi-api-key": KEY,
        "content-type": "application/json",
        "accept": "audio/mpeg",
        "content-length": Buffer.byteLength(body)
      }
    }, (r) => {
      const chunks = [];
      r.on("data", (d) => chunks.push(d));
      r.on("end", () => resolve({ status: r.statusCode || 500, buf: Buffer.concat(chunks) }));
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method !== "GET") { res.writeHead(405); return res.end("method"); }
    const u = new URL(req.url, "http://localhost");
    if (!/\/tts\/?$/.test(u.pathname)) { res.writeHead(404); return res.end("not found"); } // /api/tts ou /tts

    const text = (u.searchParams.get("text") || "").slice(0, 1000).trim();
    const voice = (u.searchParams.get("v") || DEFAULT_VOICE).replace(/[^a-zA-Z0-9]/g, "");
    if (!text) { res.writeHead(400); return res.end("missing text"); }
    if (!KEY) { res.writeHead(503); return res.end("tts not configured (ELEVENLABS_API_KEY manquante)"); }

    // Origine : on n'accepte que l'app
    const ref = String(req.headers.origin || req.headers.referer || "");
    if (ref && ref.indexOf("sprachakademie.app") < 0 && ref.indexOf("localhost") < 0 && ref.indexOf("127.0.0.1") < 0) {
      res.writeHead(403); return res.end("forbidden");
    }
    const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "?").split(",")[0].trim();
    if (tooMany(ip)) { res.writeHead(429); return res.end("slow down"); }

    const r = await elevenlabs(voice, text);
    if (r.status < 200 || r.status >= 300) { res.writeHead(r.status === 401 ? 503 : 502); return res.end("tts upstream " + r.status); }

    res.writeHead(200, { "Content-Type": "audio/mpeg", "Cache-Control": "public, max-age=31536000, immutable" });
    return res.end(r.buf);
  } catch (e) {
    res.writeHead(500); return res.end("error");
  }
});

server.listen(PORT, "127.0.0.1", () => console.log("TTS proxy ElevenLabs → http://127.0.0.1:" + PORT + " (clé " + (KEY ? "OK" : "MANQUANTE") + ")"));
