/* =====================================================================
   revision.js — Répétition espacée (système de Leitner)
   Construit un jeu de cartes (flashcards) à partir du vocabulaire de
   toutes les leçons. Chaque carte progresse de boîte en boîte ; plus la
   boîte est haute, plus l'intervalle de révision est long.
   État sauvegardé dans le localStorage.
   ===================================================================== */
window.Revision = (function () {
  const KEY = "cours-allemand-a1-srs-v1";
  const JOUR = 86400000; // ms dans une journée
  // Intervalle (en jours) avant la prochaine révision selon la boîte
  const INTERVALLES = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16, 6: 35, 7: 90 };
  const SESSION_MAX = 20;

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
    if (window.Sync) window.Sync.scheduleSave();
  }

  function buildPool(cours) {
    const pool = [];
    cours.modules.forEach((m) =>
      m.lecons.forEach((l) =>
        (l.vocabulaire || []).forEach((v, i) =>
          pool.push({ id: l.id + ":" + i, de: v.de, fr: v.fr, ex: v.ex, lecon: l.numero, leconId: l.id })
        )
      )
    );
    return pool;
  }

  function estDue(card, state, now) {
    const st = state[card.id];
    return !st || st.due == null || st.due <= now;
  }

  // Cartes à réviser maintenant (nouvelles + échues), limitées à la session.
  function getDue(cours, limit) {
    const now = Date.now();
    const state = load();
    const pool = buildPool(cours);
    const due = pool.filter((c) => estDue(c, state, now));
    // Priorité : d'abord les cartes déjà vues et échues, puis les nouvelles
    due.sort((a, b) => {
      const sa = state[a.id],
        sb = state[b.id];
      const da = sa && sa.due != null ? sa.due : Infinity; // nouvelles à la fin
      const db = sb && sb.due != null ? sb.due : Infinity;
      return da - db;
    });
    return due.slice(0, limit || SESSION_MAX);
  }

  function rate(id, known) {
    const state = load();
    const st = state[id] || { box: 1 };
    st.box = known ? Math.min(7, (st.box || 1) + 1) : 1;
    st.due = Date.now() + INTERVALLES[st.box] * JOUR;
    st.vu = (st.vu || 0) + 1;
    state[id] = st;
    save(state);
    return st;
  }

  function stats(cours) {
    const now = Date.now();
    const state = load();
    const pool = buildPool(cours);
    let due = 0,
      apprises = 0,
      vues = 0;
    pool.forEach((c) => {
      const st = state[c.id];
      if (estDue(c, state, now)) due++;
      if (st && st.box >= 4) apprises++;
      if (st && st.vu) vues++;
    });
    return { total: pool.length, due, apprises, vues };
  }

  function reset() {
    save({});
  }

  // Pour la synchronisation cloud
  function exportState() {
    return load();
  }
  function importState(obj) {
    save(obj || {});
  }

  return { getDue, rate, stats, reset, buildPool, SESSION_MAX, exportState, importState };
})();
