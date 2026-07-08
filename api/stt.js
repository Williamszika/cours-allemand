/* /api/stt — Reconnaissance vocale (ElevenLabs Scribe). Corps ≤ ~4,5 Mo (limite Vercel). */
const { originInfo, readRaw, json, text, rateLimit, clientIp } = require("./_lib/http");
const { redis } = require("./_lib/store");
const eleven = require("./_lib/eleven");

module.exports = async function (req, res) {
  if (req.method !== "POST") return text(res, 405, "method");
  if (!eleven.KEY) return text(res, 503, "stt not configured");
  if (!originInfo(req).strict) return text(res, 403, "forbidden");
  if (await rateLimit(redis, clientIp(req), "stt", 60, 60)) return text(res, 429, "slow down");
  try {
    const audio = await readRaw(req, 9000000);
    if (!audio.length) return text(res, 400, "no audio");
    const r = await eleven.stt(audio, req.headers["content-type"]);
    if (r.status < 200 || r.status >= 300) { console.warn("[stt] upstream " + r.status); return text(res, r.status === 401 ? 503 : 502, "stt upstream " + r.status); }
    const out = { text: "", words: [] };
    try {
      const jj = JSON.parse(r.buf.toString());
      out.text = jj.text || "";
      if (Array.isArray(jj.words)) out.words = jj.words.filter(function (w) { return w && w.type === "word"; }).map(function (w) { return { w: w.text, lp: (typeof w.logprob === "number") ? +w.logprob.toFixed(3) : 0 }; });
    } catch (e) {}
    json(res, 200, out);
  } catch (e) { console.error("[stt]", e && e.message); text(res, 500, "stt error"); }
};
