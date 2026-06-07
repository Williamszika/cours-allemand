/* =====================================================================
   sync.js - Synchronisation de la progression
   1) Telegram CloudStorage : partage entre les appareils de l'utilisateur.
   2) Serveur (/api/state)  : memoire centrale (le tuteur se souvient, le
      dashboard admin, et la LANGUE/progression persistent meme si le cache
      local est vide - donc on ne redemande plus la langue).

   - Fusion " union " non destructive : une lecon terminee, un niveau atteint
     ou la langue choisie sur un appareil le reste partout ; scores = max.
   - La fusion preserve TOUS les champs (reglages, niveau, temps, faiblesses...).
   Sans effet hors de Telegram (l'app utilise alors le localStorage seul).
   ===================================================================== */
window.Sync = (function () {
  const PREFIX = "st_";
  const CHUNK = 3500;
  const DEBOUNCE = 1500;
  let timer = null;
  let lastCount = 0;
  let suspend = false; // evite de re-pousser pendant qu'on applique le distant

  function cs() {
    const tg = window.TG && window.TG.tg;
    return tg && tg.CloudStorage ? tg.CloudStorage : null;
  }
  function available() {
    const store = cs();
    return !!(window.TG && window.TG.isInside() && store && typeof store.getItem === "function");
  }
  function tgInitData() {
    try { const tg = window.TG && window.TG.tg; return (window.TG && window.TG.isInside() && tg && tg.initData) ? tg.initData : null; } catch (e) { return null; }
  }
  function serverAvailable() { return !!tgInitData(); }
  function startParam() {
    try { const tg = window.TG && window.TG.tg; return (tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param) || ""; } catch (e) { return ""; }
  }

  /* ---------- Fusions non destructives ---------- */
  const ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
  function lvlMax(a, b) { const i = Math.max(ORDER.indexOf(a), ORDER.indexOf(b)); return i >= 0 ? ORDER[i] : (b || a || null); }
  function mergeProgress(a, b) {
    a = a || {}; b = b || {};
    const out = Object.assign({}, a, b); // conserve tous les champs (niveau, faiblesses, lastNotified, reglages...)
    const al = a.lecons || {}, bl = b.lecons || {}, L = {};
    new Set(Object.keys(al).concat(Object.keys(bl))).forEach((id) => {
      const x = al[id] || {}, y = bl[id] || {}, ex = {};
      new Set(Object.keys(x.exercices || {}).concat(Object.keys(y.exercices || {}))).forEach((k) => {
        ex[k] = !!((x.exercices && x.exercices[k]) || (y.exercices && y.exercices[k]));
      });
      L[id] = { exercices: ex, termine: !!(x.termine || y.termine), score: Math.max(x.score || 0, y.score || 0) };
    });
    out.lecons = L;
    const at = a.tests || {}, bt = b.tests || {}, T = {};
    new Set(Object.keys(at).concat(Object.keys(bt))).forEach((id) => {
      const x = at[id] || {}, y = bt[id] || {};
      T[id] = { meilleur: Math.max(x.meilleur || 0, y.meilleur || 0), reussi: !!(x.reussi || y.reussi), dernier: y.dernier != null ? y.dernier : x.dernier };
    });
    out.tests = T;
    const am = a.temps || {}, bm = b.temps || {}, TM = {};
    new Set(Object.keys(am).concat(Object.keys(bm))).forEach((d) => { TM[d] = Math.max(am[d] || 0, bm[d] || 0); });
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
  function mergeSrs(a, b) {
    a = a || {}; b = b || {};
    const out = {};
    new Set(Object.keys(a).concat(Object.keys(b))).forEach((id) => {
      const x = a[id] || {}, y = b[id] || {};
      out[id] = { box: Math.max(x.box || 1, y.box || 1), due: Math.max(x.due || 0, y.due || 0), vu: Math.max(x.vu || 0, y.vu || 0) };
    });
    return out;
  }

  function chunk(str) {
    const arr = [];
    for (let i = 0; i < str.length; i += CHUNK) arr.push(str.slice(i, i + CHUNK));
    return arr.length ? arr : [""];
  }

  /* ---------- Ecriture (differee) ---------- */
  function scheduleSave() {
    if (suspend || (!available() && !serverAvailable())) return;
    clearTimeout(timer);
    timer = setTimeout(saveNow, DEBOUNCE);
  }

  function saveNow() {
    if (available()) {
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
        for (let i = parts.length; i < lastCount; i++) store.removeItem(PREFIX + i, function () {});
        lastCount = parts.length;
      } catch (e) {}
    }
    pushServer();
  }

  function pushServer() {
    const initData = tgInitData();
    if (!initData || suspend) return;
    try {
      fetch("/api/state", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ initData: initData, progress: window.Progress ? window.Progress.load() : {} })
      }).catch(function () {});
    } catch (e) {}
  }

  /* ---------- Lecture + fusion au demarrage ---------- */
  function load(cb) {
    cb = cb || function () {};
    if (available()) {
      const store = cs();
      store.getItem(PREFIX + "meta", function (err, meta) {
        const n = parseInt(meta || "0", 10);
        if (err || !n) return afterCloud(false);
        const keys = [];
        for (let i = 0; i < n; i++) keys.push(PREFIX + i);
        store.getItems(keys, function (err2, vals) {
          if (err2 || !vals) return afterCloud(false);
          let json = "";
          for (let i = 0; i < n; i++) json += vals[PREFIX + i] || "";
          let cloud;
          try { cloud = JSON.parse(json); } catch (e) { return afterCloud(false); }
          lastCount = n;
          afterCloud(applyMerge(cloud));
        });
      });
    } else {
      afterCloud(false);
    }
    function afterCloud(changedCloud) {
      loadServer(function (changedSrv) { cb(!!(changedCloud || changedSrv)); });
    }
  }

  // Charge la memoire serveur (memoire centrale), fusionne, et renvoie si ca a change.
  function loadServer(cb) {
    cb = cb || function () {};
    const initData = tgInitData();
    if (!initData) return cb(false);
    const body = JSON.stringify({ initData: initData, ref: startParam(), progress: window.Progress ? window.Progress.load() : {} });
    fetch("/api/state", { method: "POST", headers: { "content-type": "application/json" }, body: body })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        // Mémorise le statut admin renvoyé par le serveur : le menu pourra
        // alors afficher (ou non) l'accès au tableau de bord.
        if (j) { try { window.__ME = { isAdmin: !!j.isAdmin, isOwner: !!j.isOwner }; } catch (e) {} }
        if (!j || !j.progress) return cb(false);
        let changed = false;
        suspend = true;
        try {
          if (window.Progress) {
            const before = JSON.stringify(window.Progress.load());
            const merged = mergeProgress(window.Progress.load(), j.progress);
            window.Progress.save(merged);
            if (before !== JSON.stringify(merged)) changed = true;
          }
        } catch (e) {}
        suspend = false;
        scheduleSave(); // fait converger cloud + serveur vers l'union
        cb(changed);
      })
      .catch(function () { cb(false); });
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
    scheduleSave(); // pousse l'union fusionnee (les appareils convergent)
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

  return { available, serverAvailable, load, loadServer, scheduleSave, saveNow, pushServer, clear, mergeProgress, mergeSrs };
})();
