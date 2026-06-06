/* =====================================================================
   POST /api/webhook  — Webhook du bot Telegram
   - pre_checkout_query      : on confirme (answerPreCheckoutQuery) sous 10 s.
   - message.successful_payment : on enregistre le paiement et on accorde
     l'accès Premium au payeur.
   Sécurité : vérifie l'en-tête secret défini lors du setWebhook.
   Réf. paiements : https://core.telegram.org/bots/payments
   ===================================================================== */
const { tgApi } = require("./_lib/telegram");
const { addPayment, setPremium } = require("./_lib/store");

module.exports = async (req, res) => {
  const botToken = process.env.BOT_TOKEN;
  const secret = process.env.WEBHOOK_SECRET;

  // Si un secret est configuré, il doit correspondre à l'en-tête Telegram.
  if (secret && req.headers["x-telegram-bot-api-secret-token"] !== secret) {
    res.status(401).end();
    return;
  }
  if (!botToken) {
    res.status(200).json({ ok: true });
    return;
  }

  const update = req.body || {};
  try {
    if (update.pre_checkout_query) {
      await tgApi(
        "answerPreCheckoutQuery",
        { pre_checkout_query_id: update.pre_checkout_query.id, ok: true },
        botToken
      );
    } else if (update.message && update.message.successful_payment) {
      const m = update.message;
      const sp = m.successful_payment;
      const from = m.from || {};
      const payment = {
        userId: from.id,
        name: [from.first_name, from.last_name].filter(Boolean).join(" ") || null,
        username: from.username || null,
        amount: sp.total_amount, // nombre d'étoiles pour la devise XTR
        currency: sp.currency, // "XTR"
        payload: sp.invoice_payload,
        chargeId: sp.telegram_payment_charge_id,
        date: Date.now()
      };
      await addPayment(payment);
      if (from.id) await setPremium(from.id, true);
    }
  } catch (e) {
    /* On journalise côté Vercel mais on renvoie 200 pour éviter les renvois en boucle. */
  }
  res.status(200).json({ ok: true });
};
