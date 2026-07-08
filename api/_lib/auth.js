/* api/_lib/auth.js — droits admin (créateur = ADMIN_ID/ADMIN_TOKEN ; admins délégués). */
const { loadAdmins } = require("./store");
const ADMIN_ID = (process.env.ADMIN_ID || "").trim();
const ADMIN_TOKEN = (process.env.ADMIN_TOKEN || "").trim();
function isOwner(id, key) { return !!((ADMIN_TOKEN && key && key === ADMIN_TOKEN) || (ADMIN_ID && id && String(id) === String(ADMIN_ID))); }
async function isAdmin(id, key) { if (isOwner(id, key)) return true; if (!id) return false; const a = await loadAdmins(); return !!a[String(id)]; }
module.exports = { ADMIN_ID, ADMIN_TOKEN, isOwner, isAdmin };
