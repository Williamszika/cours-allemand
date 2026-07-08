/* api/_lib/http.js — helpers requête/réponse pour les fonctions Vercel. */
const ALLOW = (process.env.ALLOW_ORIGIN || "sprachakademie.app").trim();

function originInfo(req) {
  const ref = String((req.headers && (req.headers.origin || req.headers.referer)) || "");
  const match = ref.indexOf(ALLOW) >= 0 || ref.indexOf("localhost") >= 0 || ref.indexOf("127.0.0.1") >= 0 || ref.indexOf(".vercel.app") >= 0;
  return { ref: ref, ok: !ref || match, strict: !!ref && match };
}
function readJson(req) {
  if (req.body != null) {
    if (typeof req.body === "object" && !Buffer.isBuffer(req.body)) return Promise.resolve(req.body);
    if (typeof req.body === "string") { try { return Promise.resolve(JSON.parse(req.body || "{}")); } catch (e) { return Promise.resolve({}); } }
    if (Buffer.isBuffer(req.body)) { try { return Promise.resolve(JSON.parse(req.body.toString("utf8") || "{}")); } catch (e) { return Promise.resolve({}); } }
  }
  return new Promise(function (resolve) {
    let data = "";
    req.on("data", function (d) { data += d; if (data.length > 400000) { try { req.destroy(); } catch (e) {} } });
    req.on("end", function () { try { resolve(JSON.parse(data || "{}")); } catch (e) { resolve({}); } });
    req.on("error", function () { resolve({}); });
  });
}
function readRaw(req, max) {
  max = max || 9000000;
  if (Buffer.isBuffer(req.body)) return Promise.resolve(req.body);
  if (typeof req.body === "string") return Promise.resolve(Buffer.from(req.body));
  return new Promise(function (resolve) {
    const chunks = []; let len = 0;
    req.on("data", function (d) { chunks.push(d); len += d.length; if (len > max) { try { req.destroy(); } catch (e) {} } });
    req.on("end", function () { resolve(Buffer.concat(chunks)); });
    req.on("error", function () { resolve(Buffer.alloc(0)); });
  });
}
function json(res, code, obj) {
  res.statusCode = code;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(obj));
}
function text(res, code, s) { res.statusCode = code; res.end(String(s)); }
async function rateLimit(redis, ip, bucket, max, windowSec) {
  try {
    const k = "rl:" + bucket + ":" + (ip || "?");
    const n = await redis.incr(k);
    if (n === 1) await redis.expire(k, windowSec || 60);
    return n > (max || 120);
  } catch (e) { return false; }
}
function clientIp(req) { return String((req.headers && req.headers["x-forwarded-for"]) || (req.socket && req.socket.remoteAddress) || "?").split(",")[0].trim(); }
module.exports = { ALLOW, originInfo, readJson, readRaw, json, text, rateLimit, clientIp };
