/* =====================================================================
   GET /api/payments  — Liste des paiements (RÉSERVÉ AU PROPRIÉTAIRE)
   Authentifie via initData puis vérifie que l'utilisateur est bien
   OWNER_TELEGRAM_ID. Renvoie l'historique + un total des Stars.
   ===================================================================== */
const { validateInitData } = require("./_lib/telegram");
const { listPayments } = require("./_lib/store");

module.exports = async (req, res) => {
  const botToken = process.env.BOT_TOKEN;
  const ownerId = String(process.env.OWNER_TELEGRAM_ID || "");

  if (!botToken || !ownerId) {
    res.status(200).json({ ok: false, error: "not_configured" });
    return;
  }

  const initData =
    req.headers["x-telegram-init-data"] || (req.query && req.query.initData) || "";
  const v = validateInitData(initData, botToken, 86400); // valable 24 h
  if (!v.ok || !v.user) {
    res.status(401).json({ ok: false, error: "auth" });
    return;
  }
  if (String(v.user.id) !== ownerId) {
    res.status(403).json({ ok: false, error: "forbidden" });
    return;
  }

  try {
    const payments = await listPayments(200);
    const totalStars = payments.reduce((s, p) => s + (p.amount || 0), 0);
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json({ ok: true, count: payments.length, totalStars, payments });
  } catch (e) {
    res.status(200).json({ ok: false, error: "store" });
  }
};
