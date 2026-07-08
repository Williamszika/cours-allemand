/* api/_lib/eleven.js — ElevenLabs : synthèse vocale (TTS) et transcription (STT). */
const crypto = require("crypto");
const KEY = (process.env.ELEVENLABS_API_KEY || "").trim();
const MODEL = (process.env.ELEVENLABS_MODEL || "eleven_multilingual_v2").trim();
const STTMODEL = (process.env.ELEVENLABS_STT_MODEL || "scribe_v1").trim();
const CONFIG_VOICE = (process.env.ELEVENLABS_VOICE_ID || "").trim();
const FREE = ["JBFqnCBsd6RMkjVDRZzb", "EXAVITQu4vr4xnSDxMaL", "FGY2WhTYpPnrIDTdsKH5", "nPczCjzI2devNBz1zQrb", "XB0fDUnXU5powFXDhCwa", "onwK4e9ZLuTAKqWW03F9"];

function ckey(v, t) { return crypto.createHash("sha256").update(v + "|" + MODEL + "|" + t).digest("hex"); }

async function ttsOne(v, t) {
  const r = await fetch("https://api.elevenlabs.io/v1/text-to-speech/" + v + "?output_format=mp3_44100_128", {
    method: "POST",
    headers: { "xi-api-key": KEY, "content-type": "application/json", "accept": "audio/mpeg" },
    body: JSON.stringify({ text: t, model_id: MODEL, voice_settings: { stability: 0.5, similarity_boost: 0.75, use_speaker_boost: true } }),
  });
  const buf = Buffer.from(await r.arrayBuffer());
  return { status: r.status, buf: buf };
}
// Voix demandée puis repli sur la liste des voix gratuites (l'état ne persiste
// pas entre invocations serverless : on retente à chaque fois si nécessaire).
async function synth(rv, t) {
  const v = rv || CONFIG_VOICE || FREE[0];
  let r = await ttsOne(v, t);
  if (r.status >= 200 && r.status < 300) return r;
  if (r.status === 401) return r;
  for (const id of FREE) { if (id === v) continue; const r2 = await ttsOne(id, t); if (r2.status >= 200 && r2.status < 300) return r2; }
  return r;
}
async function stt(audio, ctype) {
  const b = "----b" + crypto.randomBytes(8).toString("hex");
  const pre = Buffer.from("--" + b + "\r\nContent-Disposition: form-data; name=\"model_id\"\r\n\r\n" + STTMODEL + "\r\n--" + b + "\r\nContent-Disposition: form-data; name=\"file\"; filename=\"a.webm\"\r\nContent-Type: " + (ctype || "audio/webm") + "\r\n\r\n");
  const post = Buffer.from("\r\n--" + b + "--\r\n");
  const body = Buffer.concat([pre, audio, post]);
  const r = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
    method: "POST",
    headers: { "xi-api-key": KEY, "content-type": "multipart/form-data; boundary=" + b },
    body: body,
  });
  const buf = Buffer.from(await r.arrayBuffer());
  return { status: r.status, buf: buf };
}
async function listVoices() {
  try {
    const r = await fetch("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": KEY, "accept": "application/json" } });
    if (!r.ok) return [];
    const j = await r.json();
    return Array.isArray(j.voices) ? j.voices : [];
  } catch (e) { return []; }
}
module.exports = { KEY, MODEL, CONFIG_VOICE, FREE, ckey, synth, stt, listVoices };
