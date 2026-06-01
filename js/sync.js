/* =====================================================================
   sync.js — Synchronisation de la progression via Telegram CloudStorage
   Sauvegarde la progression (leçons, scores de tests) ET l'état de
   révision espacée dans le cloud Telegram, partagé entre les appareils
   de l'utilisateur.

   - Fusion « union » (non destructive) : une leçon terminée ou un mot
     appris sur un appareil le reste partout ; les scores prennent le max.
   - Découpage en morceaux car chaque valeur CloudStorage est limitée
     (~4096 caractères).
   Sans effet hors de Telegram (l'app utilise alors le localStorage seul).
   ===================================================================== */
window.Sync = (function () {
  const PREFIX = "st_";
  const CHUNK = 3500;
  const DEBOUNCE = 1500;
  let timer = null;
  let lastCount = 0;
  let suspend = false; // évite de re-pousser pendant qu'on applique le cloud

  function cs() {
    const tg = window.TG && window.TG.tg;
    return tg && tg.CloudStorage ? tg.CloudStorage : null;
  }
  function available() {
    const store = cs();
    return !!(window.TG && window.TG.isInside() && store && typeof store.getItem === "function");
  }

  /* ---------- Fusions non destructives ---------- */
  function mergeProgress(a, b) {
    a = a || {}; b = b || {};
    const out = { lecons: {}, tests: {}, derniereVisite: null, streak: 0 };
    const al = a.lecons || {}, bl = b.lecons || {};
    new Set(Object.keys(al).concat(Object.keys(bl))).forEach((id) => {
      const la = al[id] || {}, lb = bl[id] || {};
      const ex = {};
      new Set(Object.keys(la.exercices || {}).concat(Object.keys(lb.exercices || {}))).forEach((k) => {
        ex[k] = !!(la.exercices && la.exercices[k]) || !!(lb.exercices && lb.exercices[k]);
      });
      out.lecons[id] = {
        exercices: ex,
        termine: !!(la.termine || lb.termine),
        score: Math.max(la.score || 0, lb.score || 0)
      };
    });
    const at = a.tests || {}, bt = b.tests || {};
    new Set(Object.keys(at).concat(Object.keys(bt))).forEach((id) => {
      const ta = at[id] || {}, tb = bt[id] || {};
      out.tests[id] = {
        meilleur: Math.max(ta.meilleur || 0, tb.meilleur || 0),
        reussi: !!(ta.reussi || tb.reussi),
        dernier: tb.dernier != null ? tb.dernier : ta.dernier
      };
    });
    out.streak = Math.max(a.streak || 0, b.streak || 0);
    out.derniereVisite = [a.derniereVisite, b.derniereVisite].filter(Boolean).sort().pop() || null;
    return out;
  }
  function mergeSrs(a, b) {
    a = a || {}; b = b || {};
    const out = {};
    new Set(Object.keys(a).concat(Object.keys(b))).forEach((id) => {
      const x = a[id] || {}, y = b[id] || {};
      out[id] = {
        box: Math.max(x.box || 1, y.box || 1),
        due: Math.max(x.due || 0, y.due || 0),
        vu: Math.max(x.vu || 0, y.vu || 0)
      };
    });
    return out;
  }

  function chunk(str) {
    const arr = [];
    for (let i = 0; i < str.length; i += CHUNK) arr.push(str.slice(i, i + CHUNK));
    return arr.length ? arr : [""];
  }

  /* ---------- Écriture vers le cloud (différée) ---------- */
  function scheduleSave() {
    if (suspend || !available()) return;
    clearTimeout(timer);
    timer = setTimeout(saveNow, DEBOUNCE);
  }

  function saveNow() {
    if (!available()) return;
    const store = cs();
    const state = {
      v: 1,
      updatedAt: Date.now(),
      progress: window.Progress ? window.Progress.load() : {},
      srs: window.Revision ? window.Revision.exportState() : {}
    };
    const parts = chunk(JSON.stringify(state));
    try {
      store.setItem(PREFIX + "meta", String(parts.length), function () {});
      parts.forEach((p, i) => store.setItem(PREFIX + i, p, function () {}));
      // supprime d'éventuels morceaux résiduels d'une sauvegarde plus grande
      for (let i = parts.length; i < lastCount; i++) store.removeItem(PREFIX + i, function () {});
      lastCount = parts.length;
    } catch (e) {}
  }

  /* ---------- Lecture + fusion au démarrage ---------- */
  function load(cb) {
    cb = cb || function () {};
    if (!available()) return cb(false);
    const store = cs();
    store.getItem(PREFIX + "meta", function (err, meta) {
      const n = parseInt(meta || "0", 10);
      if (err || !n) return cb(false);
      const keys = [];
      for (let i = 0; i < n; i++) keys.push(PREFIX + i);
      store.getItems(keys, function (err2, vals) {
        if (err2 || !vals) return cb(false);
        let json = "";
        for (let i = 0; i < n; i++) json += vals[PREFIX + i] || "";
        let cloud;
        try { cloud = JSON.parse(json); } catch (e) { return cb(false); }
        lastCount = n;
        cb(applyMerge(cloud));
      });
    });
  }

  function applyMerge(cloud) {
    if (!cloud) return false;
    let changed = false;
    suspend = true; // n'enclenche pas de push pendant l'application
    try {
      if (window.Progress) {
        const before = JSON.stringify(window.Progress.load());
        const merged = mergeProgress(window.Progress.load(), cloud.progress);
        window.Progress.save(merged);
        if (before !== JSON.stringify(merged)) changed = true;
      }
      if (window.Revision) {
        const before = JSON.stringify(window.Revision.exportState());
        const merged = mergeSrs(window.Revision.exportState(), cloud.srs);
        window.Revision.importState(merged);
        if (before !== JSON.stringify(merged)) changed = true;
      }
    } catch (e) {}
    suspend = false;
    // pousse l'union fusionnée vers le cloud (les deux appareils convergent)
    scheduleSave();
    return changed;
  }

  function clear(cb) {
    cb = cb || function () {};
    if (!available()) return cb();
    const store = cs();
    store.getKeys(function (err, keys) {
      const k = (keys || []).filter((x) => x.indexOf(PREFIX) === 0);
      if (!k.length) return cb();
      try { store.removeItems(k, function () { cb(); }); } catch (e) { cb(); }
      lastCount = 0;
    });
  }

  return { available, load, scheduleSave, saveNow, clear, mergeProgress, mergeSrs };
})();
