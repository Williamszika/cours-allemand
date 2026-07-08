/* api/_lib/util.js — utilitaires purs (progression, niveaux, nettoyage messages). */
const ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
function clampN(x, a, b) { x = Math.round(+x || 0); return x < a ? a : (x > b ? b : x); }
function lvlMax(a, b) { var i = Math.max(ORDER.indexOf(a), ORDER.indexOf(b)); return i >= 0 ? ORDER[i] : (b || a || null); }
function derivedLevel(p) {
  p = p || {}; var t = p.tests || {};
  function ok(k) { return !!(t[k] && t[k].reussi); }
  var bo = 0; if (ok("a1")) bo = 1; if (ok("final")) bo = 2; if (ok("b1")) bo = 3; if (ok("finalb")) bo = 4; if (ok("c1")) bo = 5;
  var di = Math.max(ORDER.indexOf(p.niveau || "A1"), 0);
  return ORDER[Math.max(di, bo)] || "A1";
}
function mergeProg(a, b) {
  a = a || {}; b = b || {}; var out = Object.assign({}, a, b);
  var al = a.lecons || {}, bl = b.lecons || {}, L = {};
  Object.keys(al).concat(Object.keys(bl)).forEach(function (id) {
    if (L[id]) return; var x = al[id] || {}, y = bl[id] || {}, ex = {};
    Object.keys(x.exercices || {}).concat(Object.keys(y.exercices || {})).forEach(function (k) { ex[k] = !!((x.exercices && x.exercices[k]) || (y.exercices && y.exercices[k])); });
    L[id] = { exercices: ex, termine: !!(x.termine || y.termine), score: Math.max(x.score || 0, y.score || 0) };
  });
  out.lecons = L;
  var at = a.tests || {}, bt = b.tests || {}, T = {};
  Object.keys(at).concat(Object.keys(bt)).forEach(function (id) {
    if (T[id]) return; var x = at[id] || {}, y = bt[id] || {};
    T[id] = { meilleur: Math.max(x.meilleur || 0, y.meilleur || 0), reussi: !!(x.reussi || y.reussi), dernier: (y.dernier != null ? y.dernier : x.dernier) };
  });
  out.tests = T;
  var am = a.temps || {}, bm = b.temps || {}, TM = {};
  Object.keys(am).concat(Object.keys(bm)).forEach(function (d) { TM[d] = Math.max(am[d] || 0, bm[d] || 0); });
  out.temps = TM;
  out.niveau = lvlMax(a.niveau, b.niveau);
  out.reglages = Object.assign({}, a.reglages || {}, b.reglages || {});
  if ((a.reglages && a.reglages.langueChoisie) || (b.reglages && b.reglages.langueChoisie)) out.reglages.langueChoisie = true;
  out.streak = Math.max(a.streak || 0, b.streak || 0);
  out.lastStudy = [a.lastStudy, b.lastStudy].filter(Boolean).sort().pop() || null;
  out.derniereVisite = [a.derniereVisite, b.derniereVisite].filter(Boolean).sort().pop() || null;
  out.lastNotified = [a.lastNotified, b.lastNotified].filter(Boolean).sort().pop() || null;
  return out;
}
function clean(msgs) {
  if (!Array.isArray(msgs)) return [];
  return msgs.slice(-20).map(function (m) { return { role: (m && m.role === "assistant") ? "assistant" : "user", content: String((m && m.content) || "").slice(0, 4000) }; }).filter(function (m) { return m.content; });
}
module.exports = { ORDER, clampN, lvlMax, derivedLevel, mergeProg, clean };
