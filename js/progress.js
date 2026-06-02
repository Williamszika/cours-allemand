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
      temps: {}, // temps d'étude par jour { "2026-06-02": secondes }
      reglages: { theme: "auto", rappel: false, rappelHeure: "19:00" },
      lastStudy: null, // date du dernier jour étudié (pour le streak/rappels)
      lastNotified: null, // date du dernier rappel envoyé
      derniereVisite: null,
      streak: 0
    };
  }

  function todayStr() { return new Date().toISOString().slice(0, 10); }

  function ajouterTemps(secondes) {
    const data = load();
    if (!data.temps) data.temps = {};
    const t = todayStr();
    data.temps[t] = (data.temps[t] || 0) + secondes;
    data.lastStudy = t;
    save(data);
  }

  function statsTemps() {
    const data = load();
    const temps = data.temps || {};
    const t = todayStr();
    let total = 0, semaine = 0;
    const last7 = [];
    const semaineSet = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 864e5).toISOString().slice(0, 10);
      last7.push({ date: d, sec: temps[d] || 0 });
      semaineSet[d] = 1;
    }
    Object.keys(temps).forEach((d) => { total += temps[d]; if (semaineSet[d]) semaine += temps[d]; });
    return { aujourdhui: temps[t] || 0, semaine: semaine, total: total, last7: last7, joursActifs: Object.keys(temps).length };
  }

  function getReglages() { return Object.assign({ theme: "auto", rappel: false, rappelHeure: "19:00", objectifMin: 10 }, load().reglages || {}); }
  function setReglages(obj) { const data = load(); data.reglages = Object.assign(getReglages(), obj); save(data); }
  function getLastStudy() { return load().lastStudy; }
  function getLastNotified() { return load().lastNotified; }
  function markNotified() { const data = load(); data.lastNotified = todayStr(); save(data); }

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

  function getFaiblesses() {
    return load().faiblesses || [];
  }

  function setFaiblesses(arr) {
    const data = load();
    data.faiblesses = Array.isArray(arr) ? arr : [];
    save(data);
  }

  function reset() {
    save(defaults());
  }

  return {
    load, save, touchStreak, getLecon, setExercice, marquerTermine,
    estTermine, resumeGlobal, setTestScore, getTestScore,
    getNiveau, setNiveau, getFaiblesses, setFaiblesses,
    ajouterTemps, statsTemps, getReglages, setReglages,
    getLastStudy, getLastNotified, markNotified, reset
  };
})();
