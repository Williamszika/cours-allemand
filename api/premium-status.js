/* =====================================================================
   GET /api/premium-status
   Renvoie l'état Premium pour l'utilisateur courant (Mini App).
   - configured : le backend est-il prêt (bot + stockage) ?
   - premium    : cet utilisateur a-t-il l'accès Premium ?
   - isOwner    : est-ce le propriétaire (OWNER_TELEGRAM_ID) ?
   Volontairement tolérant : ne bloque jamais l'interface (pas de 401 dur).
   ===================================================================== */
const { validateInitData } = require("./_lib/telegram");
const { isPremium, hasKV } = require("./_lib/store");

module.exports = async (req, res) => {
  const botToken = process.env.BOT_TOKEN;
  const ownerId = String(process.env.OWNER_TELEGRAM_ID || "");
  const price = parseInt(process.env.PREMIUM_PRICE_STARS || "150", 10);
  const title = process.env.PREMIUM_TITLE || "Accès Premium — Allemand A1";
  const configured = !!botToken && hasKV;

  const initData =
    req.headers["x-telegram-init-data"] || (req.query && req.query.initData) || "";

  let premium = false;
  let isOwner = false;
  if (botToken && initData) {
    const v = validateInitData(initData, botToken);
    if (v.ok && v.user) {
      isOwner = !!ownerId && String(v.user.id) === ownerId;
      try {
        premium = await isPremium(v.user.id);
      } catch (e) {
        /* stockage indisponible : on renvoie premium=false */
      }
      if (isOwner) premium = true; // le propriétaire accède à tout
    }
  }

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ ok: true, configured, premium, isOwner, price, currency: "XTR", title });
};
