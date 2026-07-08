/* /api/admin — Tableau de bord : stats, utilisateurs, diffusion, DM, modération.
   Réservé au créateur (ADMIN_ID/ADMIN_TOKEN) et aux admins délégués. */
const { readJson, json, text, rateLimit, clientIp } = require("./_lib/http");
const store = require("./_lib/store");
const tg = require("./_lib/tg");
const { ADMIN_ID, isOwner, isAdmin } = require("./_lib/auth");
const { derivedLevel } = require("./_lib/util");
const ai = require("./_lib/ai");

module.exports = async function (req, res) {
  if (req.method !== "POST") return text(res, 405, "method");
  if (await rateLimit(store.redis, clientIp(req), "admin", 120, 60)) return text(res, 429, "slow down");
  try {
    const body = await readJson(req);
    const id = tg.tgUserId(body.initData);
    const owner = isOwner(id, body.key);
    const admin = owner || (await isAdmin(id, body.key));
    if (!admin) return json(res, 403, { error: "forbidden", viewerId: id || null, adminConfigured: !!(ADMIN_ID || process.env.ADMIN_TOKEN) });

    const act = body.action ? String(body.action) : "";

    if (act === "admin-add" || act === "admin-remove") {
      if (!owner) return json(res, 403, { error: "owner_only" });
      const atgt = String(body.target || "").replace(/[^0-9]/g, ""); if (!atgt) return json(res, 400, { error: "no target" });
      const adm = await store.loadAdmins();
      if (act === "admin-add") {
        if (ADMIN_ID && atgt === String(ADMIN_ID)) return json(res, 400, { error: "already_owner" });
        const au = (await store.loadUser(atgt)) || {};
        adm[atgt] = { addedBy: id || "token", addedAt: new Date().toISOString(), name: au.name || "", username: au.username || "" };
        await store.saveAdmins(adm); await store.logAction(id, "admin-add", atgt);
        return json(res, 200, { ok: true, action: "admin-add", target: atgt });
      }
      delete adm[atgt]; await store.saveAdmins(adm); await store.logAction(id, "admin-remove", atgt);
      return json(res, 200, { ok: true, action: "admin-remove", target: atgt });
    }

    if (act === "broadcast") {
      if (!tg.BOT_TOKEN) return json(res, 503, { error: "bot non configure" });
      const bmsg = String(body.message || "").slice(0, 4000); if (!bmsg.trim()) return json(res, 400, { error: "message vide" });
      const bflt = body.filter || {}; const bnow = Date.now();
      const bids = (await store.listUsers()).filter(function (bu) {
        if (!bu || !bu.id || bu.blocked) return false;
        const bp = bu.progress || {};
        if (bflt.level && derivedLevel(bp) !== bflt.level) return false;
        const blg = (bp.reglages && bp.reglages.langue) || bu.tgLang || "?";
        if (bflt.lang && blg !== bflt.lang) return false;
        const bls = Date.parse(bu.lastSeen || "") || 0; const bh = bls ? (bnow - bls) / 3600000 : 1e9;
        if (bflt.activity === "actif" && !(bh <= 48)) return false;
        if (bflt.activity === "peu" && !(bh > 48 && bh <= 168)) return false;
        if (bflt.activity === "inactif" && !(bh > 168)) return false;
        if (bflt.inactiveDays && !(bh > (+bflt.inactiveDays || 0) * 24)) return false;
        return true;
      }).map(function (bu) { return String(bu.id); });
      await store.logAction(id, "broadcast", bids.length + " destinataires");
      json(res, 200, { ok: true, action: "broadcast", count: bids.length });
      for (let i = 0; i < bids.length; i++) { try { await tg.tgSend(bids[i], bmsg); } catch (e) {} }
      return;
    }

    if (act === "dm") {
      if (!tg.BOT_TOKEN) return json(res, 503, { error: "bot non configure" });
      const dtgt = String(body.target || "").replace(/[^0-9]/g, ""); const dmsg = String(body.message || "").slice(0, 4000);
      if (!dtgt || !dmsg.trim()) return json(res, 400, { error: "cible ou message manquant" });
      await tg.tgSend(dtgt, dmsg); await store.logAction(id, "dm", "-> " + dtgt);
      return json(res, 200, { ok: true, action: "dm", target: dtgt });
    }

    if (act === "delete" || act === "block" || act === "unblock") {
      const tgt = String(body.target || "").replace(/[^0-9]/g, ""); if (!tgt) return json(res, 400, { error: "no target" });
      if (act === "delete") { await store.delUser(tgt); await store.logAction(id, "delete", tgt); return json(res, 200, { ok: true, action: "delete", target: tgt }); }
      const tu = await store.loadUser(tgt); if (!tu) return json(res, 404, { error: "not found" });
      tu.blocked = (act === "block"); await store.saveUser(tgt, tu); await store.logAction(id, act, tgt);
      return json(res, 200, { ok: true, action: act, target: tgt, blocked: tu.blocked });
    }

    if (act) return json(res, 400, { error: "unknown action" });

    // Pas d'action → renvoyer le tableau de bord (stats + users + audit).
    const users = await store.listUsers();
    const d7 = Date.now() - 7 * 864e5;
    const byLevel = {}, byLang = {}, refCount = {}; let total = users.length, new7 = 0, act7 = 0, msgs = 0;
    const rows = users.map(function (u2) {
      const p = u2.progress || {}; const lv = derivedLevel(p); let sm = 0; const tp = p.temps || {};
      Object.keys(tp).forEach(function (d) { sm += (+tp[d] || 0); });
      byLevel[lv] = (byLevel[lv] || 0) + 1;
      const lg = (p.reglages && p.reglages.langue) || u2.tgLang || "?"; byLang[lg] = (byLang[lg] || 0) + 1;
      if (u2.referredBy) refCount[u2.referredBy] = (refCount[u2.referredBy] || 0) + 1;
      const c = Date.parse(u2.createdAt || "") || 0; if (c > d7) new7++;
      const s = Date.parse(u2.lastSeen || "") || 0; if (s > d7) act7++;
      const m = (u2.conv && u2.conv.messages && u2.conv.messages.length) || 0; msgs += m;
      return { id: u2.id, name: u2.name || "", username: u2.username || "", lvl: lv, lang: lg, streak: p.streak || 0, lastSeen: u2.lastSeen || "", createdAt: u2.createdAt || "", msgs: m, referredBy: u2.referredBy || "", blocked: !!u2.blocked, done: Object.keys(p.lecons || {}).filter(function (k) { return p.lecons[k] && p.lecons[k].termine; }).length, exams: Object.keys(p.tests || {}).filter(function (k) { return p.tests[k] && p.tests[k].reussi; }).length, studyMin: sm };
    });
    const byId = {}; rows.forEach(function (r) { byId[r.id] = r; r.invited = 0; });
    Object.keys(refCount).forEach(function (k) { if (byId[k]) byId[k].invited = refCount[k]; });
    rows.sort(function (a, b) { return (Date.parse(b.lastSeen || "") || 0) - (Date.parse(a.lastSeen || "") || 0); });
    const topRef = Object.keys(refCount).map(function (k) { return { id: k, name: (byId[k] && byId[k].name) || "", count: refCount[k] }; }).sort(function (a, b) { return b.count - a.count; }).slice(0, 10);
    const adm = await store.loadAdmins();
    const admList = await Promise.all(Object.keys(adm).map(async function (aid) { const d = adm[aid] || {}; const lu = (await store.loadUser(aid)) || {}; return { id: aid, name: d.name || lu.name || "", username: d.username || lu.username || "", addedAt: d.addedAt || "" }; }));
    const auditLog = (await store.loadAudit()).slice(-60).reverse();
    return json(res, 200, { ok: true, isOwner: owner, ownerId: String(ADMIN_ID || ""), admins: admList, stats: { total: total, new7: new7, active7: act7, messages: msgs, byLevel: byLevel, byLang: byLang, topReferrers: topRef, competences: ai.compStats(users) }, users: rows, auditLog: auditLog });
  } catch (e) { console.error("[admin]", e && e.message); text(res, 500, "admin error"); }
};
