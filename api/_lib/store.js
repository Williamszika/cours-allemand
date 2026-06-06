/* =====================================================================
   _lib/store.js — Stockage des paiements et du statut Premium
   Utilise Vercel KV / Upstash Redis via leur API REST si les variables
   KV_REST_API_URL + KV_REST_API_TOKEN sont définies. Sinon, repli sur
   une mémoire volatile (pratique en local ; NON persistante en prod).
   Aucune dépendance npm : on parle au REST avec fetch (Node 18+).
   ===================================================================== */
const REST_URL = process.env.KV_REST_API_URL;
const REST_TOKEN = process.env.KV_REST_API_TOKEN;
const hasKV = !!(REST_URL && REST_TOKEN);

const PAYMENTS_KEY = "ca:payments"; // liste Redis (LPUSH) de paiements JSON
const premiumKey = (id) => "ca:premium:" + id;

// Repli mémoire (réinitialisé à chaque démarrage de fonction)
const mem = { payments: [], premium: new Set() };

/* Exécute une commande Redis via le REST Upstash/Vercel KV.
   Format : POST <url>  body=["SET","clé","valeur"]  ->  { result } */
async function redis(command) {
  const r = await fetch(REST_URL, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + REST_TOKEN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });
  const j = await r.json();
  if (j && j.error) throw new Error(j.error);
  return j ? j.result : null;
}

async function addPayment(payment) {
  const value = JSON.stringify(payment);
  if (hasKV) {
    await redis(["LPUSH", PAYMENTS_KEY, value]);
    await redis(["LTRIM", PAYMENTS_KEY, "0", "999"]); // borne l'historique
  } else {
    mem.payments.unshift(payment);
    if (mem.payments.length > 1000) mem.payments.pop();
  }
}

async function listPayments(limit) {
  limit = limit || 200;
  if (hasKV) {
    const arr = await redis(["LRANGE", PAYMENTS_KEY, "0", String(limit - 1)]);
    return (arr || [])
      .map((s) => {
        try {
          return typeof s === "string" ? JSON.parse(s) : s;
        } catch (e) {
          return null;
        }
      })
      .filter(Boolean);
  }
  return mem.payments.slice(0, limit);
}

async function setPremium(userId, on) {
  if (!userId) return;
  if (hasKV) {
    if (on) await redis(["SET", premiumKey(userId), "1"]);
    else await redis(["DEL", premiumKey(userId)]);
  } else {
    if (on) mem.premium.add(String(userId));
    else mem.premium.delete(String(userId));
  }
}

async function isPremium(userId) {
  if (!userId) return false;
  if (hasKV) return (await redis(["GET", premiumKey(userId)])) === "1";
  return mem.premium.has(String(userId));
}

module.exports = { hasKV, addPayment, listPayments, setPremium, isPremium };
