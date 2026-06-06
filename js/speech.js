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
  const FEMALE_HINTS = ["petra", "katja", "vicki", "amala", "marlene", "hedda", "female", "frau", "weibl"];
  // Voix exclues du sélecteur et du choix automatique : la voix compacte « Anna »
  // d'Apple (robotique). Le défaut bascule alors sur la meilleure voix / ElevenLabs.
  const EXCLUDED_VOICES = ["anna"];
  function allowedVoice(v) { const n = ((v && v.name) || "").toLowerCase().trim(); return !EXCLUDED_VOICES.some((k) => n.indexOf(k) === 0); }

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
  // Préférence explicite, en ignorant une voix désormais exclue (ex. « Anna ») → automatique.
  function preferredVoice() { const p = preferredVoiceName(); return (p && allowedVoice({ name: p })) ? p : null; }

  function pickGermanVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;
    const de = voices.filter((v) => v.lang && v.lang.toLowerCase().indexOf("de") === 0 && allowedVoice(v));
    if (!de.length) { germanVoice = null; voicesLoaded = true; return; }
    const pref = preferredVoice();
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

  // ---- Voix naturelles en ligne (ElevenLabs via /api/tts) ----
  let cloudAudio = null;
  function cloudEnabled() { try { var v = localStorage.getItem("deutsch-tts-cloud"); return v === null ? true : v === "1"; } catch (e) { return true; } }
  function setCloud(on) { try { localStorage.setItem("deutsch-tts-cloud", on ? "1" : "0"); } catch (e) {} }
  function stopSpeak() {
    try { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); } catch (e) {}
    if (cloudAudio) { try { cloudAudio.pause(); } catch (e) {} cloudAudio = null; }
  }
  function cleanText(text) {
    return String(text).replace(/\([^)]*\)/g, "").replace(/[🔊✓✗→—]/g, "").trim();
  }
  function deviceSpeak(clean, opts) {
    if (!("speechSynthesis" in window)) return false;
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
  function cloudSpeak(clean, opts) {
    if (cloudAudio) { try { cloudAudio.pause(); } catch (e) {} cloudAudio = null; }
    let settled = false;
    const a = new Audio(); cloudAudio = a;
    try { a.preservesPitch = a.mozPreservesPitch = a.webkitPreservesPitch = true; } catch (e) {}
    a.playbackRate = opts.rate || 1;
    function fallback() { if (settled) return; settled = true; if (cloudAudio === a) cloudAudio = null; deviceSpeak(clean, opts); } // repli voix de l'appareil
    a.onended = function () { if (settled) return; settled = true; if (cloudAudio === a) cloudAudio = null; if (opts.onend) opts.onend(); };
    a.onerror = fallback;
    a.src = "/api/tts?text=" + encodeURIComponent(clean) + (opts.voice ? "&v=" + encodeURIComponent(opts.voice) : "");
    const pr = a.play(); if (pr && pr.catch) pr.catch(fallback);
    return true;
  }
  function speak(text, opts) {
    opts = opts || {};
    const clean = cleanText(text);
    if (!clean) return false;
    if (cloudEnabled() && navigator.onLine) return cloudSpeak(clean, opts);
    return deviceSpeak(clean, opts);
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
    const de = all.filter((v) => v.lang && v.lang.toLowerCase().indexOf("de") === 0 && allowedVoice(v));
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

  return { speak, isSupported, hasGermanVoice, voice, voices, setVoice, preferredVoice, cloudEnabled, setCloud, stopSpeak, recognitionSupported, recognize };
})();
