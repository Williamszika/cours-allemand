/* /api/state — Sync de la progression + conversation + statut admin (Telegram requis). */
const { readJson, json, text, rateLimit, clientIp } = require("./_lib/http");
const { redis, loadUser, touchUser } = require("./_lib/store");
const tg = require("./_lib/tg");
const { mergeProg } = require("./_lib/util");
const { isOwner, isAdmin } = require("./_lib/auth");

module.exports = async function (req, res) {
  if (req.method !== "POST") return text(res, 405, "method");
  if (!tg.BOT_TOKEN) return text(res, 503, "state not configured");
  if (await rateLimit(redis, clientIp(req), "state", 240, 60)) return text(res, 429, "slow down");
  try {
    const body = await readJson(req);
    const v = tg.tgVerify(body.initData);
    if (!v || !v.user || !v.user.id) return text(res, 403, "bad initData");
    const id = String(v.user.id);
    const isNew = !(await loadUser(id));
    const usr = await touchUser(v, tg.tgName(v), function (us) {
      const ref2 = String(body.ref || v.start_param || "").replace(/[^0-9]/g, "");
      if (isNew && ref2 && ref2 !== id && !us.referredBy) us.referredBy = ref2;
      if (body.progress && typeof body.progress === "object") us.progress = mergeProg(us.progress, body.progress);
    });
    json(res, 200, { ok: true, isNew: isNew, name: usr.name || "", first: (v.user.first_name || ""), progress: usr.progress || {}, conv: usr.conv || { messages: [] }, isAdmin: await isAdmin(id), isOwner: isOwner(id) });
  } catch (e) { console.error("[state]", e && e.message); text(res, 500, "state error"); }
};
