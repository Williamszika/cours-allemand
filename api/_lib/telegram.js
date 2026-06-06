/* =====================================================================
   _lib/telegram.js — Utilitaires côté serveur pour Telegram
   - validateInitData : authentifie l'utilisateur d'une Mini App à partir
     de l'« initData » signé (méthode officielle HMAC-SHA256).
   - tgApi : petit client pour l'API Bot Telegram (via fetch global, Node 18+).
   ===================================================================== */
const crypto = require("crypto");

/* Valide l'initData transmis par la Mini App.
   Renvoie { ok, user } où user est l'objet décodé du champ `user`.
   Réf. : https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app */
function validateInitData(initData, botToken, maxAgeSeconds) {
  if (!initData || !botToken) return { ok: false };
  let params;
  try {
    params = new URLSearchParams(initData);
  } catch (e) {
    return { ok: false };
  }
  const hash = params.get("hash");
  if (!hash) return { ok: false };

  // data_check_string : toutes les paires (sauf hash) triées, jointes par \n
  const pairs = [];
  params.forEach((value, key) => {
    if (key !== "hash") pairs.push(key + "=" + value);
  });
  pairs.sort();
  const dataCheckString = pairs.join("\n");

  // secret_key = HMAC_SHA256(key="WebAppData", data=botToken)
  const secretKey = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();
  const computed = crypto.createHmac("sha256", secretKey).update(dataCheckString).digest("hex");

  // comparaison à temps constant
  const a = Buffer.from(computed, "hex");
  const b = Buffer.from(hash, "hex");
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return { ok: false };

  // fraîcheur (optionnelle) : rejette un initData trop ancien
  if (maxAgeSeconds) {
    const authDate = parseInt(params.get("auth_date") || "0", 10);
    if (!authDate || Date.now() / 1000 - authDate > maxAgeSeconds) {
      return { ok: false, stale: true };
    }
  }

  let user = null;
  try {
    user = JSON.parse(params.get("user") || "null");
  } catch (e) {
    /* champ user absent ou illisible */
  }
  return { ok: true, user };
}

/* Appel POST à l'API Bot Telegram. Renvoie l'objet JSON de réponse. */
async function tgApi(method, payload, botToken) {
  const r = await fetch("https://api.telegram.org/bot" + botToken + "/" + method, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload || {})
  });
  return r.json();
}

module.exports = { validateInitData, tgApi };
