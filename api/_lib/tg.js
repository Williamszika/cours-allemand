/* api/_lib/tg.js — Telegram : vérification initData (HMAC), envoi de messages. */
const crypto = require("crypto");
const BOT_TOKEN = (process.env.TELEGRAM_BOT_TOKEN || "").trim();

function tgVerify(initData) {
  try {
    if (!BOT_TOKEN || !initData) return null;
    const p = new URLSearchParams(initData);
    const hash = p.get("hash"); p.delete("hash");
    const a = []; p.forEach(function (v, k) { a.push(k + "=" + v); }); a.sort();
    const dcs = a.join("\n");
    const secret = crypto.createHmac("sha256", "WebAppData").update(BOT_TOKEN).digest();
    const calc = crypto.createHmac("sha256", secret).update(dcs).digest("hex");
    if (calc !== hash) return null;
    return { user: JSON.parse(p.get("user") || "{}"), start_param: p.get("start_param") || "" };
  } catch (e) { return null; }
}
function tgUserId(initData) { const v = tgVerify(initData); return (v && v.user && v.user.id) ? String(v.user.id) : null; }
function tgName(v) {
  try { const u = (v && v.user) || {}; return ([u.first_name, u.last_name].filter(Boolean).join(" ") || u.username || "").slice(0, 60); }
  catch (e) { return ""; }
}
async function tgSend(chat, text) {
  if (!BOT_TOKEN) return;
  try {
    await fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage", {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text: text }),
    });
  } catch (e) {}
}
async function getMe() {
  if (!BOT_TOKEN) return null;
  try { const r = await fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/getMe"); const j = await r.json(); return (j && j.ok && j.result) ? j.result : null; }
  catch (e) { return null; }
}
module.exports = { BOT_TOKEN, tgVerify, tgUserId, tgName, tgSend, getMe };
