/* =====================================================================
   api/_lib/store.js — Stockage sur Upstash Redis (offre gratuite).
   Remplace les fichiers locaux du serveur (server/data/users/*.json…).
   Clés : user:<id> (JSON) · set "users" (index des ids) · subs · admins · audit.
   Variables d'env (injectées par l'intégration Vercel/Upstash, ou à coller) :
     KV_REST_API_URL / KV_REST_API_TOKEN  (ou UPSTASH_REDIS_REST_URL / _TOKEN)
   ===================================================================== */
const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

function norm(id) { return String(id == null ? "" : id).replace(/[^0-9]/g, ""); }

async function loadUser(id) {
  id = norm(id); if (!id) return null;
  try { return (await redis.get("user:" + id)) || null; }
  catch (e) { console.warn("[store] loadUser", e && e.message); return null; }
}
async function saveUser(id, o) {
  id = norm(id); if (!id) return;
  await redis.set("user:" + id, o);
  await redis.sadd("users", id);
}
async function delUser(id) {
  id = norm(id); if (!id) return;
  await redis.del("user:" + id);
  await redis.srem("users", id);
}
async function listUsers() {
  try {
    const ids = await redis.smembers("users");
    if (!ids || !ids.length) return [];
    const keys = ids.map(function (i) { return "user:" + i; });
    const vals = await redis.mget(...keys);
    return (vals || []).filter(Boolean);
  } catch (e) { console.warn("[store] listUsers", e && e.message); return []; }
}
async function loadSubs() { try { return (await redis.get("subs")) || {}; } catch (e) { return {}; } }
async function saveSubs(o) { await redis.set("subs", o); }
async function loadAdmins() { try { return (await redis.get("admins")) || {}; } catch (e) { return {}; } }
async function saveAdmins(o) { await redis.set("admins", o); }
async function loadAudit() { try { return (await redis.get("audit")) || []; } catch (e) { return []; } }
async function logAction(by, action, detail) {
  try {
    const nm = by ? ((await loadUser(by)) || {}).name || "" : "";
    const l = await loadAudit();
    l.push({ at: new Date().toISOString(), by: String(by || "token"), byName: nm, action: String(action || ""), detail: String(detail || "") });
    await redis.set("audit", l.slice(-300));
  } catch (e) {}
}

/* Crée/rafraîchit un utilisateur à partir des données Telegram vérifiées.
   `nameOf` = nom affiché déjà calculé ; `extra` = mutateur (sync ou async). */
async function touchUser(v, nameOf, extra) {
  if (!v || !v.user || !v.user.id) return null;
  const id = String(v.user.id), now = new Date().toISOString();
  const u = (await loadUser(id)) || { id: id, createdAt: now, progress: {}, conv: { messages: [] }, referredBy: null };
  u.id = id;
  u.name = nameOf || u.name || "";
  u.username = v.user.username || u.username || "";
  u.tgLang = v.user.language_code || u.tgLang || "";
  u.lastSeen = now;
  if (extra) await extra(u);
  await saveUser(id, u);
  return u;
}

module.exports = { redis, norm, loadUser, saveUser, delUser, listUsers, loadSubs, saveSubs, loadAdmins, saveAdmins, loadAudit, logAction, touchUser };
