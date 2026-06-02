/* =====================================================================
   progress.js — Suivi de progression (sauvegarde locale)
   Mémorise les leçons terminées, les scores d'exercices et la série
   d'apprentissage (streak) dans le localStorage du navigateur.
   ===================================================================== */
window.Progress = (function () {
  const KEY = "cours-allemand-a1-progress-v1";

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      const data = JSON.parse(raw);
      return Object.assign(defaults(), data);
    } catch (e) {
      return defaults();
    }
  }

  function defaults() {
    return {
      lecons: {}, // { l01: { exercices: {0:true,...}, termine: bool, score: n } }
      tests: {}, // { "a1-1": { meilleur: n, reussi: bool } }
      niveau: null, // niveau de départ choisi/déterminé (A1..C2)
      derniereVisite: null,
      streak: 0
    };
  }

  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      /* stockage indisponible — on ignore silencieusement */
    }
    if (window.Sync) window.Sync.scheduleSave();
  }

  function touchStreak(data) {
    const today = new Date().toISOString().slice(0, 10);
    if (data.derniereVisite === today) return;
    const yesterday = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    data.streak = data.derniereVisite === yesterday ? (data.streak || 0) + 1 : 1;
    data.derniereVisite = today;
    save(data);
  }

  function getLecon(id) {
    const data = load();
    return data.lecons[id] || { exercices: {}, termine: false, score: 0 };
  }

  function setExercice(leconId, index, reussi) {
    const data = load();
    if (!data.lecons[leconId]) data.lecons[leconId] = { exercices: {}, termine: false, score: 0 };
    data.lecons[leconId].exercices[index] = !!reussi;
    save(data);
  }

  function marquerTermine(leconId, score) {
    const data = load();
    if (!data.lecons[leconId]) data.lecons[leconId] = { exercices: {}, termine: false, score: 0 };
    data.lecons[leconId].termine = true;
    if (typeof score === "number") data.lecons[leconId].score = score;
    save(data);
  }

  function estTermine(id) {
    return !!getLecon(id).termine;
  }

  function resumeGlobal(cours) {
    const data = load();
    let total = 0,
      faites = 0;
    cours.modules.forEach((m) =>
      m.lecons.forEach((l) => {
        total += 1;
        if (data.lecons[l.id] && data.lecons[l.id].termine) faites += 1;
      })
    );
    return { total, faites, pourcent: total ? Math.round((faites / total) * 100) : 0, streak: data.streak || 0 };
  }

  function setTestScore(moduleId, score, reussi) {
    const data = load();
    if (!data.tests) data.tests = {};
    const prev = data.tests[moduleId] || { meilleur: 0, reussi: false };
    data.tests[moduleId] = {
      meilleur: Math.max(prev.meilleur || 0, score),
      reussi: prev.reussi || reussi,
      dernier: score
    };
    save(data);
  }

  function getTestScore(moduleId) {
    const data = load();
    return (data.tests && data.tests[moduleId]) || null;
  }

  function getNiveau() {
    return load().niveau || null;
  }

  function setNiveau(code) {
    const data = load();
    data.niveau = code;
    save(data);
  }

  function reset() {
    save(defaults());
  }

  return {
    load, save, touchStreak, getLecon, setExercice, marquerTermine,
    estTermine, resumeGlobal, setTestScore, getTestScore,
    getNiveau, setNiveau, reset
  };
})();
