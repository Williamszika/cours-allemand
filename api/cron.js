/* /api/cron — Tâche planifiée : corrige les examens échus + envoie les rappels.
   Déclenchée par le Cron Vercel (Authorization: Bearer CRON_SECRET) OU par un
   cron gratuit externe (cron-job.org) via ?key=CRON_SECRET. */
const ai = require("./_lib/ai");

module.exports = async function (req, res) {
  const secret = (process.env.CRON_SECRET || "").trim();
  if (secret) {
    const auth = String((req.headers && req.headers.authorization) || "");
    let key = "";
    try { key = new URL(req.url, "http://x").searchParams.get("key") || ""; } catch (e) {}
    if (auth !== "Bearer " + secret && key !== secret) { res.statusCode = 401; return res.end("unauthorized"); }
  }
  try {
    const graded = await ai.scanPendingExams();
    const reminders = await ai.sendReminders();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true, graded: graded, reminders: reminders }));
  } catch (e) { console.error("[cron]", e && e.message); res.statusCode = 500; res.end("cron error"); }
};
