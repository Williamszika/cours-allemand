/* /api/notify — Abonnement aux rappels quotidiens (on/off + heure). */
const { readJson, json, text } = require("./_lib/http");
const tg = require("./_lib/tg");
const { loadSubs, saveSubs } = require("./_lib/store");

module.exports = async function (req, res) {
  if (req.method !== "POST") return text(res, 405, "method");
  if (!tg.BOT_TOKEN) return text(res, 503, "notify not configured");
  try {
    const body = await readJson(req);
    const id = tg.tgUserId(body.initData);
    if (!id) return text(res, 403, "bad initData");
    const subs = await loadSubs();
    if (body.action === "off") { delete subs[id]; }
    else { subs[id] = { heure: String(body.heure || "19:00").slice(0, 5), last: (subs[id] && subs[id].last) || "" }; }
    await saveSubs(subs);
    json(res, 200, { ok: true, sub: body.action !== "off" });
  } catch (e) { console.error("[notify]", e && e.message); text(res, 500, "notify error"); }
};
