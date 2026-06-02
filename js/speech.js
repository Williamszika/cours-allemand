/* =====================================================================
   speech.js — Synthèse vocale allemande (prononciation)
   Utilise l'API Web Speech du navigateur. Choisit automatiquement
   une voix allemande (de-DE) si disponible.
   ===================================================================== */
window.Speech = (function () {
  let germanVoice = null;
  let voicesLoaded = false;

  // Pas d'attribut « genre » dans l'API : on devine via le nom de la voix.
  // On privilégie une voix ALLEMANDE, MASCULINE et NATURELLE (neural/online).
  const MALE_HINTS = ["conrad", "stefan", "bernd", "christoph", "killian", "klaus", "ralf", "markus", "yannick", "hans", "daniel", "viktor", "wolfgang", "florian", "jan", "male", "mann", "männl"];
  const NATURAL_HINTS = ["neural", "natural", "online", "premium", "wavenet", "enhanced", "google"];
  const FEMALE_HINTS = ["anna", "petra", "katja", "vicki", "amala", "marlene", "hedda", "female", "frau", "weibl"];

  function scoreVoice(v) {
    const n = (v.name || "").toLowerCase();
    let s = 0;
    if (MALE_HINTS.some((k) => n.indexOf(k) >= 0)) s += 5;
    if (FEMALE_HINTS.some((k) => n.indexOf(k) >= 0)) s -= 3;
    if (NATURAL_HINTS.some((k) => n.indexOf(k) >= 0)) s += 2;
    if (v.lang === "de-DE") s += 1;
    return s;
  }

  function pickGermanVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;
    const de = voices.filter((v) => v.lang && v.lang.toLowerCase().indexOf("de") === 0);
    if (!de.length) { germanVoice = null; voicesLoaded = true; return; }
    de.sort((a, b) => scoreVoice(b) - scoreVoice(a));
    germanVoice = de[0]; // meilleure voix allemande masculine/naturelle disponible
    voicesLoaded = true;
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
    window.speechSynthesis.speak(u);
    return true;
  }

  function isSupported() {
    return "speechSynthesis" in window;
  }

  function hasGermanVoice() {
    return !!germanVoice;
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

  return { speak, isSupported, hasGermanVoice, recognitionSupported, recognize };
})();
