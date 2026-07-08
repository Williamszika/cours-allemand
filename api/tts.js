/* =====================================================================
   /api/tts — Proxy ElevenLabs (voix naturelles).
   La clé reste secrète, côté serveur : variable d'environnement Vercel
   ELEVENLABS_API_KEY (et, en option, ELEVENLABS_VOICE_ID pour choisir la voix).
   Appel client : GET /api/tts?text=...&v=<voiceId?>  → renvoie un MP3.
   ===================================================================== */
module.exports = async function handler(req, res) {
  try {
    const DEFAULT_VOICE = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM"; // « Rachel » (modèle multilingue)
    const u = new URL(req.url, "http://localhost");
    const text = (u.searchParams.get("text") || "").slice(0, 1000).trim();
    const voice = (u.searchParams.get("v") || DEFAULT_VOICE).replace(/[^a-zA-Z0-9]/g, "");
    if (!text) { res.statusCode = 400; return res.end("missing text"); }

    // Anti-abus : on exige une origine connue (Origin/Referer). Une requête SANS
    // en-tête d'origine est désormais refusée — ferme l'appel direct hors de l'app
    // (cURL, scripts). Domaine configurable via ALLOW_ORIGIN (défaut sprachakademie.app).
    const ALLOW = (process.env.ALLOW_ORIGIN || "sprachakademie.app").trim();
    const ref = String(req.headers.origin || req.headers.referer || "");
    const ok = !!ref && (ref.indexOf(ALLOW) >= 0 || ref.indexOf(".vercel.app") >= 0 || ref.indexOf("localhost") >= 0 || ref.indexOf("127.0.0.1") >= 0);
    if (!ok) { res.statusCode = 403; return res.end("forbidden"); }

    const key = process.env.ELEVENLABS_API_KEY;
    if (!key) { res.statusCode = 503; return res.end("tts not configured"); }

    const r = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + voice + "?output_format=mp3_44100_128", {
      method: "POST",
      headers: { "xi-api-key": key, "content-type": "application/json", "accept": "audio/mpeg" },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.0, use_speaker_boost: true }
      })
    });
    if (!r.ok) { res.statusCode = r.status === 401 ? 503 : r.status; return res.end("tts upstream error"); }

    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable"); // chaque texte = 1 seul appel, puis cache
    res.statusCode = 200;
    return res.end(buf);
  } catch (e) {
    res.statusCode = 500; return res.end("error");
  }
};
