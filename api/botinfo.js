/* /api/botinfo — Nom d'utilisateur du bot Telegram (pour les liens de partage). */
const tg = require("./_lib/tg");

module.exports = async function (req, res) {
  let username = (process.env.BOT_USERNAME || "").trim();
  if (!username) { const me = await tg.getMe(); if (me && me.username) username = me.username; }
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.end(JSON.stringify({ username: username || "" }));
};
