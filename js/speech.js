/* =====================================================================
   speech.js — Synthèse vocale allemande (prononciation)
   Utilise l'API Web Speech du navigateur. Choisit automatiquement
   une voix allemande (de-DE) si disponible.
   ===================================================================== */
window.Speech = (function () {
  let germanVoice = null;
  let voicesLoaded = false;

  // Pas d'attribut « genre » dans l'API : on devine via le nom de la voix.
  // PRIORITÉ À LA NATURALITÉ (voix neuronales/online), puis langue, puis genre.
  const MALE_HINTS = ["conrad", "stefan", "bernd", "christoph", "killian", "klaus", "ralf", "markus", "yannick", "hans", "daniel", "viktor", "wolfgang", "florian", "jan", "male", "mann", "männl"];
  const NATURAL_HINTS = ["neural", "natural", "online", "premium", "wavenet", "enhanced", "google", "siri"];
  const LOWQ_HINTS = ["espeak", "compact", "pico", "embedded"];
  const FEMALE_HINTS = ["anna", "petra", "katja", "vicki", "amala", "marlene", "hedda", "female", "frau", "weibl"];

  function scoreVoice(v) {
    const n = (v.name || "").toLowerCase();
    let s = 0;
    if (NATURAL_HINTS.some((k) => n.indexOf(k) >= 0)) s += 12; // la naturalité prime
    if (LOWQ_HINTS.some((k) => n.indexOf(k) >= 0)) s -= 8;     // voix robotiques connues
    if (v.localService === false) s += 3;                       // voix « online » (souvent neuronales)
    if (v.lang === "de-DE") s += 2;
    if (MALE_HINTS.some((k) => n.indexOf(k) >= 0)) s += 2;      // genre = simple départage
    else if (FEMALE_HINTS.some((k) => n.indexOf(k) >= 0)) s += 1;
    return s;
  }

  function preferredVoiceName() { try { return localStorage.getItem("deutsch-voix") || null; } catch (e) { return null; } }

  function pickGermanVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;
    const de = voices.filter((v) => v.lang && v.lang.toLowerCase().indexOf("de") === 0);
    if (!de.length) { germanVoice = null; voicesLoaded = true; return; }
    const pref = preferredVoiceName();
    const chosen = pref ? de.filter((v) => v.name === pref)[0] : null;
    de.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    germanVoice = chosen || de[0]; // voix choisie par l'utilisateur, sinon la plus naturelle
    voicesLoaded = true;
  }

  // Permet à l'utilisateur de choisir sa voix allemande préférée (persistée).
  function setVoice(name) {
    try { if (name) localStorage.setItem("deutsch-voix", name); else localStorage.removeItem("deutsch-voix"); } catch (e) {}
    voicesLoaded = false; pickGermanVoice();
  }

  if ("speechSynthesis" in window) {
    pickGermanVoice();
    window.speechSynthesis.onvoiceschanged = pickGermanVoice;
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!("speechSynthesis" in window)) {
      console.warn("Synthèse vocale non supportée par ce navigateur.");
      return false;
    }
    // Nettoie le texte (enlève les emojis et parenthèses de traduction)
    const clean = String(text)
      .replace(/\([^)]*\)/g, "")
      .replace(/[🔊✓✗→—]/g, "")
      .trim();
    if (!clean) return false;

    window.speechSynthesis.cancel();
    if (!voicesLoaded) pickGermanVoice();

    const u = new SpeechSynthesisUtterance(clean);
    u.lang = "de-DE";
    if (germanVoice) u.voice = germanVoice;
    u.rate = opts.rate || 0.9; // un peu plus lent pour l'apprentissage
    u.pitch = opts.pitch || 1;
    if (opts.onend) u.onend = opts.onend;
    if (opts.onerror) u.onerror = opts.onerror;
    window.speechSynthesis.speak(u);
    return true;
  }

  function isSupported() {
    return "speechSynthesis" in window;
  }

  function hasGermanVoice() {
    return !!germanVoice;
  }

  // Voix allemande actuellement choisie (masculine/naturelle si dispo)
  function voice() {
    if (!voicesLoaded) pickGermanVoice();
    return germanVoice;
  }

  // Liste des voix allemandes, triées (meilleures d'abord) — pour le multi-voix
  function voices() {
    if (!("speechSynthesis" in window)) return [];
    const all = window.speechSynthesis.getVoices() || [];
    const de = all.filter((v) => v.lang && v.lang.toLowerCase().indexOf("de") === 0);
    de.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    return de;
  }

  /* ---------- Reconnaissance vocale (pour la production orale) ---------- */
  function recognitionSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  }

  // Démarre une écoute en allemand. onResult reçoit un tableau d'alternatives
  // (transcriptions). Renvoie l'objet de reconnaissance (ou null si non supporté).
  function recognize(onResult, onError, onEnd) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      onError && onError("unsupported");
      return null;
    }
    try {
      const r = new SR();
      r.lang = "de-DE";
      r.interimResults = false;
      r.maxAlternatives = 3;
      r.onresult = (e) => {
        const res = e.results[0];
        const alts = [];
        for (let i = 0; i < res.length; i++) alts.push(res[i].transcript);
        onResult && onResult(alts);
      };
      r.onerror = (e) => onError && onError(e.error || "error");
      r.onend = () => onEnd && onEnd();
      r.start();
      return r;
    } catch (e) {
      onError && onError("error");
      return null;
    }
  }

  return { speak, isSupported, hasGermanVoice, voice, voices, setVoice, recognitionSupported, recognize };
})();
