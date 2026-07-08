/* /api/chat — Tuteur IA (Anthropic). Vérifie l'origine + (optionnel) l'initData Telegram. */
const { originInfo, readJson, json, text, rateLimit, clientIp } = require("./_lib/http");
const { redis, loadUser, touchUser } = require("./_lib/store");
const tg = require("./_lib/tg");
const { clean } = require("./_lib/util");
const ai = require("./_lib/ai");

module.exports = async function (req, res) {
  if (req.method !== "POST") return text(res, 405, "method");
  if (!ai.ANTHKEY) return text(res, 503, "chat not configured (ANTHROPIC_API_KEY manquante)");
  if (!originInfo(req).strict) return text(res, 403, "forbidden");
  if (await rateLimit(redis, clientIp(req), "chat", 120, 60)) return text(res, 429, "slow down");
  try {
    const body = await readJson(req);
    const msgs = clean(body.messages);
    if (!msgs.length) return text(res, 400, "no messages");
    const v = tg.tgVerify(body.initData);
    if (v && v.user && v.user.id) {
      const bu = await loadUser(String(v.user.id));
      if (bu && bu.blocked) return json(res, 200, { reply: "Ton acces au tuteur a ete suspendu par l'administration." });
    }
    let sys = ai.sysPrompt(body.niveau, body.niveauParle, body.langue, body.mode, body.oral, body.unclear);
    if (v && v.user && v.user.first_name) sys += "L'apprenant s'appelle " + String(v.user.first_name).slice(0, 40) + "; utilise son prenom de temps en temps, chaleureusement. ";
    const r = await ai.anthropic(sys, msgs);
    if (r.status < 200 || r.status >= 300) { console.warn("[chat] upstream " + r.status); return text(res, r.status === 401 ? 503 : 502, "chat upstream " + r.status); }
    const j = JSON.parse(r.buf.toString());
    const reply = (j.content && j.content[0] && j.content[0].text) ? j.content[0].text : "";
    json(res, 200, { reply: reply });
    try {
      if (v && v.user && v.user.id) {
        await touchUser(v, tg.tgName(v), function (us) {
          us.conv = us.conv || { messages: [] };
          const lastU = msgs[msgs.length - 1];
          if (lastU && lastU.role === "user") us.conv.messages.push({ role: "user", content: lastU.content, ts: Date.now() });
          us.conv.messages.push({ role: "assistant", content: String(reply).slice(0, 4000), ts: Date.now() });
          if (us.conv.messages.length > 80) us.conv.messages = us.conv.messages.slice(-80);
          us.conv.updatedAt = new Date().toISOString();
          if (body.mode) us.lastMode = String(body.mode);
        });
      }
    } catch (e) { console.warn("[chat-persist]", e && e.message); }
  } catch (e) { console.error("[chat]", e && e.message); if (!res.headersSent) text(res, 500, "chat error"); }
};
