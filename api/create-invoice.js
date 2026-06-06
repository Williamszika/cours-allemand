/* =====================================================================
   POST /api/create-invoice
   Crée un lien de facture Telegram Stars (XTR) pour l'accès Premium et
   le renvoie au client, qui l'ouvre via Telegram.WebApp.openInvoice().
   L'utilisateur est authentifié par son initData signé.
   ===================================================================== */
const { validateInitData, tgApi } = require("./_lib/telegram");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  const botToken = process.env.BOT_TOKEN;
  const price = parseInt(process.env.PREMIUM_PRICE_STARS || "150", 10);
  const title = process.env.PREMIUM_TITLE || "Accès Premium — Allemand A1";
  const description =
    process.env.PREMIUM_DESC ||
    "Débloque tout le module A1.2 (verbes modaux, Perfekt, datif, adjectifs…) et soutient le cours. Accès à vie.";

  if (!botToken) {
    res.status(200).json({ ok: false, error: "not_configured" });
    return;
  }

  const initData =
    req.headers["x-telegram-init-data"] || (req.body && req.body.initData) || "";
  const v = validateInitData(initData, botToken);
  if (!v.ok || !v.user) {
    res.status(401).json({ ok: false, error: "auth" });
    return;
  }

  const payload = JSON.stringify({ uid: v.user.id, p: "premium", t: Date.now() });

  try {
    const r = await tgApi(
      "createInvoiceLink",
      {
        title: title.slice(0, 32), // limites Telegram
        description: description.slice(0, 255),
        payload,
        currency: "XTR", // Telegram Stars (aucun prestataire requis)
        prices: [{ label: "Premium A1.2", amount: price }]
      },
      botToken
    );
    if (!r || !r.ok) {
      res.status(200).json({ ok: false, error: "telegram", detail: r && r.description });
      return;
    }
    res.status(200).json({ ok: true, link: r.result });
  } catch (e) {
    res.status(200).json({ ok: false, error: "exception" });
  }
};
