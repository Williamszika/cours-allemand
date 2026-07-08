/* /api/translate — Traduction fiable côté serveur (Google gtx, gratuit, sans clé).
   Le navigateur bloque souvent l'appel direct (CORS) ; côté serveur il passe.
   GET ?text=...&to=<lang>&from=<lang>  → { text: "<traduction>" }
   Utilisé par js/i18n.js (interface + gloses des romans) → tout s'affiche
   dans la langue choisie par l'utilisateur. */
const { originInfo, json, text: sendText, rateLimit, clientIp } = require("./_lib/http");
const { redis } = require("./_lib/store");

module.exports = async function (req, res) {
  if (!originInfo(req).ok) return sendText(res, 403, "forbidden");
  let q = "", to = "en", from = "fr";
  try {
    const u = new URL(req.url, "http://x");
    q = (u.searchParams.get("text") || "").slice(0, 2000);
    to = (u.searchParams.get("to") || "en").replace(/[^a-zA-Z-]/g, "").slice(0, 8);
    from = (u.searchParams.get("from") || "fr").replace(/[^a-zA-Z-]/g, "").slice(0, 8);
  } catch (e) {}
  if (!q || to === from) return json(res, 200, { text: q });
  if (await rateLimit(redis, clientIp(req), "tr", 800, 60)) return sendText(res, 429, "slow down");
  try {
    const r = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=" + from + "&tl=" + to + "&q=" + encodeURIComponent(q));
    if (!r.ok) return json(res, 200, { text: "" });
    const j = await r.json();
    const out = (j && j[0] && j[0].length) ? j[0].map(function (s) { return s && s[0] ? s[0] : ""; }).join("") : "";
    res.setHeader("Cache-Control", "public, max-age=86400");
    return json(res, 200, { text: out });
  } catch (e) { return json(res, 200, { text: "" }); }
};
