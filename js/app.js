/* =====================================================================
   app.js — Application principale (SPA)
   Routage par hash : #/ (aperçu) et #/lecon/<id> (leçon).
   Construit l'aperçu du programme et le rendu des leçons.
   ===================================================================== */
(function () {
  const COURS = window.COURS;
  const app = document.getElementById("app");

  /* Index plat des leçons (pour navigation préc./suiv.) */
  const flat = [];
  COURS.modules.forEach((m) => m.lecons.forEach((l) => flat.push({ module: m, lecon: l })));
  function leconIndex(id) {
    return flat.findIndex((x) => x.lecon.id === id);
  }
  /* Parcours séquentiel : une leçon se débloque quand la précédente est terminée. */
  function examPasse(id) {
    const t = window.Progress.getTestScore(id);
    return !!(t && t.reussi);
  }
  function niveauTermine(n) {
    return flat.filter((f) => f.lecon.niveau === n).every((f) => window.Progress.estTermine(f.lecon.id));
  }
  /* Exercices RATÉS (répondus mais faux) d'un niveau → rattrapage avant l'examen. */
  function exercicesRatesNiveau(niv) {
    const res = [];
    flat.filter((f) => f.lecon.niveau === niv).forEach((f) => {
      const ex = (window.Progress.getLecon(f.lecon.id) || {}).exercices || {};
      let rates = 0; Object.keys(ex).forEach((k) => { if (ex[k] === false) rates++; });
      if (rates > 0) res.push({ lecon: f.lecon, rates: rates });
    });
    return res;
  }
  const EXAM_NIVEAUX = { a1: ["A1"], a2: ["A2"], final: ["A1", "A2"], b1: ["B1"], b2: ["B2"], finalb: ["B1", "B2"], c1: ["C1"], c2: ["C2"], finalc: ["C1", "C2"] };
  function ratesAvantExamen(code) {
    let res = []; (EXAM_NIVEAUX[code] || []).forEach((n) => { res = res.concat(exercicesRatesNiveau(n)); });
    return res;
  }
  /* Écran de rattrapage : liste les leçons contenant des exercices ratés à
     corriger avant de pouvoir passer l'examen du niveau. */
  function renderRattrapage(code, lecons) {
    const totalRates = lecons.reduce((s, x) => s + x.rates, 0);
    app.innerHTML = ""; const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">🔁 Rattrapage</span>';
    frag.appendChild(top);
    const head = el("header", "lesson-head");
    head.innerHTML = '<div class="lesson-num">Avant l\'examen</div><h1>🔁 Rattrapage</h1><p class="lesson-theme">Tu as <strong>' + totalRates + '</strong> exercice' + (totalRates > 1 ? "s" : "") + ' à corriger avant de passer l\'examen. Ouvre chaque leçon, refais l\'exercice marqué en rouge, valide-le, puis reviens ici.</p>';
    frag.appendChild(head);
    const sec = el("section", "lesson-section");
    lecons.forEach((x) => {
      const card = el("a", "menu-card"); card.href = "#/lecon/" + x.lecon.id;
      card.innerHTML = '<div class="menu-ic">📝</div><div class="menu-card-body"><h2>Leçon ' + x.lecon.numero + " — " + delfEsc(x.lecon.titre) + '</h2><p>' + x.rates + " exercice" + (x.rates > 1 ? "s" : "") + ' à corriger</p></div><span class="menu-go">→</span>';
      sec.appendChild(card);
    });
    frag.appendChild(sec);
    const row = el("div", "rev-actions");
    const recheck = el("button", "btn btn-primary", "J'ai corrigé — vérifier ✓"); recheck.type = "button";
    recheck.addEventListener("click", () => {
      const rest = ratesAvantExamen(code);
      if (!rest.length) location.hash = "#/examen/" + code;
      else { toast("Il reste " + rest.reduce((s, x) => s + x.rates, 0) + " exercice(s) à corriger."); renderRattrapage(code, rest); }
    });
    row.appendChild(recheck);
    frag.appendChild(row);
    app.appendChild(frag);
    try { localizeUI(app); } catch (e) {}
    if (window.TG) { try { window.TG.showBackButton(() => { location.hash = "#/"; }); if (window.TG.hideMainButton) window.TG.hideMainButton(); } catch (e) {} }
    window.scrollTo(0, 0);
  }
  function isUnlocked(idx) {
    if (idx <= 0) return true;
    const l = flat[idx].lecon;
    const prevOk = window.Progress.estTermine(flat[idx - 1].lecon.id);
    // Les leçons A2 ne s'ouvrent qu'après avoir RÉUSSI l'examen A1
    if (l.niveau === "A2") return prevOk && examPasse("a1");
    // Les leçons B1 ne s'ouvrent qu'après l'examen final A1 + A2
    if (l.niveau === "B1") return prevOk && examPasse("final");
    // Les leçons B2 ne s'ouvrent qu'après avoir RÉUSSI l'examen B1
    if (l.niveau === "B2") return prevOk && examPasse("b1");
    // Les leçons C1 ne s'ouvrent qu'après l'examen combiné B1 + B2
    if (l.niveau === "C1") return prevOk && examPasse("finalb");
    // Les leçons C2 ne s'ouvrent qu'après avoir RÉUSSI l'examen C1
    if (l.niveau === "C2") return prevOk && examPasse("c1");
    return prevOk;
  }
  function allLessonsDone() {
    return flat.every((f) => window.Progress.estTermine(f.lecon.id));
  }
  /* Prochaine étape gardée du parcours (leçon ou examen) → hash */
  function prochaineEtape() {
    for (const f of flat) if (f.lecon.niveau === "A1" && !window.Progress.estTermine(f.lecon.id)) return "#/lecon/" + f.lecon.id;
    if (!examPasse("a1")) return "#/examen/a1";
    for (const f of flat) if (f.lecon.niveau === "A2" && !window.Progress.estTermine(f.lecon.id)) return "#/lecon/" + f.lecon.id;
    if (!examPasse("a2")) return "#/examen/a2";
    if (!examPasse("final")) return "#/examen/final";
    for (const f of flat) if (f.lecon.niveau === "B1" && !window.Progress.estTermine(f.lecon.id)) return "#/lecon/" + f.lecon.id;
    if (!examPasse("b1")) return "#/examen/b1";
    for (const f of flat) if (f.lecon.niveau === "B2" && !window.Progress.estTermine(f.lecon.id)) return "#/lecon/" + f.lecon.id;
    if (!examPasse("b2")) return "#/examen/b2";
    if (!examPasse("finalb")) return "#/examen/finalb";
    for (const f of flat) if (f.lecon.niveau === "C1" && !window.Progress.estTermine(f.lecon.id)) return "#/lecon/" + f.lecon.id;
    if (!examPasse("c1")) return "#/examen/c1";
    for (const f of flat) if (f.lecon.niveau === "C2" && !window.Progress.estTermine(f.lecon.id)) return "#/lecon/" + f.lecon.id;
    if (!examPasse("c2")) return "#/examen/c2";
    if (!examPasse("finalc")) return "#/examen/finalc";
    return "#/";
  }
  /* Étape après une leçon : leçon suivante du même niveau, sinon examen du niveau */
  function etapeApresLecon(idx) {
    const l = flat[idx].lecon;
    const next = flat[idx + 1];
    if (next && next.lecon.niveau === l.niveau) return "#/lecon/" + next.lecon.id;
    return "#/examen/" + (l.niveau === "A1" ? "a1" : l.niveau === "A2" ? "a2" : l.niveau === "B1" ? "b1" : l.niveau === "B2" ? "b2" : l.niveau === "C1" ? "c1" : "c2");
  }
  /* Placement : ouvre le parcours jusqu'au niveau choisi/déterminé, en
     marquant les niveaux antérieurs comme acquis (leçons + examens-verrous). */
  const ORDRE_NIVEAUX = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const NIVEAU_LABELS = { A1: "Débutant", A2: "Élémentaire", B1: "Intermédiaire", B2: "Avancé", C1: "Autonome", C2: "Maîtrise" };
  const EXAMENS_AVANT = {
    A1: [], A2: ["a1"], B1: ["a1", "a2", "final"], B2: ["a1", "a2", "final", "b1"],
    C1: ["a1", "a2", "final", "b1", "b2", "finalb"], C2: ["a1", "a2", "final", "b1", "b2", "finalb", "c1"]
  };
  function placerAuNiveau(code) {
    const idx = ORDRE_NIVEAUX.indexOf(code);
    if (idx < 0) return;
    flat.forEach((f) => { if (ORDRE_NIVEAUX.indexOf(f.lecon.niveau) < idx) window.Progress.marquerTermine(f.lecon.id, 100); });
    (EXAMENS_AVANT[code] || []).forEach((k) => window.Progress.setTestScore(k, 100, true));
    window.Progress.setNiveau(code);
  }
  function besoinOnboarding() {
    if (window.Progress.getNiveau()) return false;
    return window.Progress.resumeGlobal(COURS).faites === 0;
  }
  /* Catégorie d'un exercice : comp (compréhension), appro (approfondi), prod (production) */
  function exoCat(ex) {
    if (ex.cat) return ex.cat;
    if (ex.type === "production" || ex.type === "oral") return "prod";
    if (ex.type === "ecoute" || ex.type === "association") return "comp";
    return "appro";
  }
  function lessonPhoto(id, w, h) {
    return window.photoUrl ? window.photoUrl(id, w, h) : "";
  }

  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function speakButton(text, label) {
    const b = el("button", "btn-audio", "🔊" + (label ? " " + label : ""));
    b.type = "button";
    b.setAttribute("aria-label", "Écouter : " + text);
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      window.Speech && window.Speech.speak(text);
    });
    return b;
  }

  /* ---- Rendu pédagogique : mise en forme (gras, surlignage, genres) ---- */
  function escapeHtml(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function mdLite(s) {
    let t = escapeHtml(s);
    t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/\*([^*\n]+?)\*/g, "<em>$1</em>");
    t = t.replace(/«\s*([^»]+?)\s*»/g, '<span class="hl-de">«&nbsp;$1&nbsp;»</span>');
    return t;
  }
  function stripMd(s) { return String(s).replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*([^*\n]+?)\*/g, "$1"); }
  /* Rend un texte (rédigé en français) dans la langue d'explication `ex`
     (immersion : voir I18N.explication). fr → tel quel ; sinon traduction
     automatique du navigateur si dispo, repli « Traduire avec Google ». */
  function localizeInto(node, text, ex) {
    node.innerHTML = mdLite(text);
    if (!text || !window.I18N) return node;
    const target = ex.lang;
    if (target === "fr") return node;
    node.classList.add("xl");
    // On protège les EXEMPLES allemands (entre « » ou en *italique*) avec des
    // marqueurs, on traduit seulement l'explication française, puis on les
    // remet en place. Ainsi l'explication passe dans la langue choisie mais
    // les exemples restent en allemand.
    const ph = [];
    const keep = (m) => { ph.push(m); return " [[" + (ph.length - 1) + "]] "; };
    let masked = String(text).replace(/«[^»]*»/g, keep);   // 1) exemples allemands « … »
    masked = masked.replace(/\*\*(.+?)\*\*/g, "$1");          // 2) gras français → à traduire
    masked = masked.replace(/\*[^*\n]+\*/g, keep);           // 3) mots allemands en *italique*
    window.I18N.translate(masked, target, "fr").then((out) => {
      if (!out || out === masked) return;
      let restored = out.replace(/\[\[\s*(\d+)\s*\]\]/g, (m, n) => (ph[+n] != null ? ph[+n] : ""));
      restored = restored.replace(/\[\[\s*\d+\s*\]\]/g, ""); // nettoie d'éventuels marqueurs résiduels
      node.innerHTML = mdLite(restored);
      node.appendChild(el("span", "xl-tag", "🌐 " + window.I18N.t("auto_translated")));
    });
    return node;
  }
  window.localizeInto = localizeInto; // pont pour exercises.js (jeu de rôle)
  window.mdLite = mdLite; // pour le rendu direct (allemand) dans exercises.js

  /* Traduction de TOUTE l'interface française dans la langue choisie.
     Approche « opt-out » : on traduit chaque nœud de texte, SAUF le contenu
     allemand à apprendre (vocabulaire, exemples, dialogues, réponses
     d'exercices) et ce qui est déjà localisé. */
  // HARD : contenu purement allemand (la langue à apprendre) ou saisies —
  // JAMAIS traduit par localizeUI.
  const NOLOC = [
    ".voc-de", ".voc-nom", ".art", ".voc-ex", ".cours-ex-de", ".cours-ex-gl-de", ".hl-de", ".conv-de", ".conv-loc",
    ".rp-de", ".rp-opt", ".lecon-de", ".de", ".tag", ".pflege-de", ".dictee-ref",
    ".roman-de", ".roman-mot", ".roman-fn", ".roman-texte", ".roman-quiz-w", ".roman-quiz-opt",
    ".loc-keep", ".peda-de", ".cours-tag-body", ".cours-art-titre", ".cours-art-p", ".cours-points",
    ".qcm-opt", ".qcm-options", ".assoc-tile", ".conj-input", ".conj-pron", ".ordre-chip", ".ordre-pool", ".ordre-answer",
    ".trou-input", ".trou-phrase", ".trad-input", ".trad-flag", ".production-modele", ".production-input", ".oral-transcript",
    ".xl", ".rp-fr", ".rp-bubble", ".rp-scene", ".rp-intro", ".gp-pts", ".stat-n", ".goal-num", ".nc-code", ".lang-name", ".lang-flag", ".voice-select", ".badge-ic", ".comp-score",
    "code", "input", "textarea", "[contenteditable]"
  ].join(",");
  // SOFT : conteneurs MIXTES (allemand + français) — tableaux, légendes, énoncés
  // d'exercices, phrase à traduire, bannière d'immersion. On y traduit
  // uniquement le texte clairement FRANÇAIS et on garde l'allemand intact.
  const SOFTLOC = [
    ".cours-table", "table", ".genre-legende", ".exo-question", ".trad-source", ".immersion-banner"
  ].join(",");
  // L'allemand n'utilise jamais é/è/ê/ç/à… ; ces accents + des mots-outils
  // français propres signalent du français à traduire (sans déclencher sur
  // des mots allemands comme « du », « des », « die »).
  const FR_RE = /[éèêëàâîïôûùçœÉÈÊËÀÂÎÔÛÙÇŒ]|\b(je|tu|il|elle|on|nous|vous|ils|elles|est|sont|suis|avez|avec|pour|dans|sur|sous|votre|vos|mon|mes|ton|tes|ses|leur|leurs|ne|pas|que|qui|quoi|aux|mais|ou|cette|ces|cet|ce|la|le|les|une|phrase|phrases|salutation|collegue|appropriee|nom|prenom|pays|ville|pronom|traduction|masculin|feminin|neutre|vrai|faux|familier|pluriel|singulier|poli|verbe|mot|mots|reponse|correcte|correct|choisissez|completez|associez|ecoutez|exemple|exemples|reponses|matin|soir)\b/i;
  const _l10nDone = (typeof WeakSet !== "undefined") ? new WeakSet() : null;
  function localizeUI(root) {
    if (!root || !window.I18N) return;
    const lang = window.I18N.uiLang ? window.I18N.uiLang() : window.I18N.lang();
    if (lang === "fr") return;
    let walker;
    try { walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null); } catch (e) { return; }
    const groups = {};
    let n;
    while ((n = walker.nextNode())) {
      const raw = n.nodeValue;
      if (!raw || !/[A-Za-zÀ-ÿ]/.test(raw)) continue;
      if (_l10nDone && _l10nDone.has(n)) continue;
      const p = n.parentElement;
      if (!p || (p.closest && p.closest(NOLOC))) continue;
      // Conteneurs mixtes (tableaux, énoncés…) : on ne traduit que le français
      // clair ; le reste (allemand) est conservé tel quel.
      if (p.closest && p.closest(SOFTLOC) && !FR_RE.test(raw)) continue;
      if (_l10nDone) _l10nDone.add(n);
      const t = raw.trim();
      (groups[t] = groups[t] || []).push(n);
    }
    Object.keys(groups).forEach((t) => {
      window.I18N.translate(t, lang, "fr").then((out) => {
        if (out && out !== t) groups[t].forEach((node) => { node.nodeValue = node.nodeValue.replace(t, function () { return out; }); });
      });
    });
    // Attributs textuels (placeholders d'exercices, etc.) — pas captés par le TreeWalker.
    try {
      Array.prototype.forEach.call(root.querySelectorAll("[placeholder], [data-placeholder]"), function (e) {
        [["placeholder", e.getAttribute("placeholder")], ["data-placeholder", e.getAttribute("data-placeholder")]].forEach(function (pair) {
          const attr = pair[0], v = pair[1];
          if (!v || !/[A-Za-zÀ-ÿ]/.test(v) || e.getAttribute("data-l10n-" + attr) === "1") return;
          e.setAttribute("data-l10n-" + attr, "1");
          const tt = v.trim();
          window.I18N.translate(tt, lang, "fr").then(function (out) { if (out && out !== tt) e.setAttribute(attr, v.replace(tt, function () { return out; })); });
        });
      });
    } catch (e) {}
  }
  window.localizeUI = localizeUI;
  function exLabel(ex, key, vars) { return ex && ex.de ? window.I18N.tIn("de", key, vars) : window.I18N.t(key, vars); }
  function vocDeHtml(de) {
    const m = String(de).match(/^(der|die|das)\s+(.+)$/);
    if (m) return '<span class="art art-' + m[1] + '">' + m[1] + '</span> <strong class="voc-nom">' + escapeHtml(m[2]) + "</strong>";
    return '<strong class="voc-nom">' + escapeHtml(de) + "</strong>";
  }
  function buildExemples(arr, ex) {
    const box = el("div", "cours-exemples");
    const head = el("div", "cours-ex-head");
    head.appendChild(el("span", "cours-tag loc-keep", "✅ " + exLabel(ex, "examples")));
    if (window.Speech && window.Speech.isSupported()) {
      const playAll = el("button", "btn-audio small", "🔊 " + exLabel(ex, "listen_all"));
      playAll.type = "button";
      playAll.addEventListener("click", () => playSequence(arr.map((e) => e.de)));
      head.appendChild(playAll);
    }
    box.appendChild(head);
    arr.forEach((e, i) => {
      const row = el("div", "cours-ex-row");
      row.appendChild(el("span", "cours-ex-num", i + 1 + "."));
      const body = el("div", "cours-ex-body");
      const de = el("div", "cours-ex-de");
      de.appendChild(el("span", "", e.de));
      de.appendChild(speakButton(e.de));
      body.appendChild(de);
      if (e.fr) {
        if (ex && ex.de) {
          // Immersion B1+ : la glose est en allemand (niveau précédent) → rendu brut, jamais traduit.
          const gl = el("div", "cours-ex-fr cours-ex-gl-de");
          gl.innerHTML = window.mdLite ? window.mdLite(e.fr) : e.fr;
          body.appendChild(gl);
        } else {
          body.appendChild(el("div", "cours-ex-fr", e.fr));
        }
      }
      row.appendChild(body);
      box.appendChild(row);
    });
    return box;
  }
  function deriveExemples(tableau) {
    if (!tableau || !tableau.entetes) return null;
    let idx = -1;
    tableau.entetes.forEach((h, i) => { if (idx < 0 && /exemple|beispiel|satz/i.test(h)) idx = i; });
    if (idx < 0) return null;
    const out = [];
    tableau.lignes.forEach((row) => { const de = row[idx]; if (de && /\s/.test(de)) out.push({ de: de, fr: "" }); });
    return out.length ? out : null;
  }
  // Réunit les exemples rédigés (traduits) ET ceux du tableau, sans doublon.
  function mergeExemples(g) {
    const out = [], seen = {};
    (g.exemples || []).forEach((e) => { if (e && e.de && !seen[e.de]) { seen[e.de] = 1; out.push(e); } });
    (deriveExemples(g.tableau) || []).forEach((e) => { if (e && e.de && !seen[e.de]) { seen[e.de] = 1; out.push(e); } });
    return out.slice(0, 6);
  }
  function renderGrammarBlock(g, niveau) {
    const ex = window.I18N ? window.I18N.explication(niveau || "A1") : { lang: "fr", de: false };
    function callout(cls, icon, key, text) {
      const box = el("div", cls);
      box.appendChild(el("span", "cours-tag loc-keep", icon + " " + exLabel(ex, key)));
      const d = el("div", "cours-tag-body");
      localizeInto(d, text, ex);
      box.appendChild(d);
      return box;
    }
    const block = el("div", "gram-block cours-block");
    block.appendChild(el("h3", "cours-titre", g.titre + (g.titreDE ? " · " + g.titreDE : "")));
    if (g.regle) {
      block.appendChild(callout("cours-regle", "📘", "the_rule", g.regle));
      if (g.intro) { const p = el("p", "cours-text"); localizeInto(p, g.intro, ex); block.appendChild(p); }
    } else if (g.intro && g.tableau) {
      // bloc de grammaire d'une leçon thématique (sans « regle ») : on met l'explication en avant
      block.appendChild(callout("cours-regle", "📘", "the_essential", g.intro));
    } else if (g.intro) {
      const p = el("p", "cours-text"); localizeInto(p, g.intro, ex); block.appendChild(p);
    }
    if (g.points && g.points.length) { const ul = el("ul", "cours-points"); g.points.forEach((pt) => { const li = el("li", ""); localizeInto(li, pt, ex); ul.appendChild(li); }); block.appendChild(ul); }
    if (g.tableau) block.appendChild(buildTable(g.tableau));
    if (g.schemas) block.appendChild(buildSchemas(g.schemas));
    const exs = mergeExemples(g);
    if (exs && exs.length) block.appendChild(buildExemples(exs, ex));
    if (g.note) block.appendChild(callout("cours-astuce", "💡", "good_to_know", g.note));
    if (g.attention) block.appendChild(callout("cours-attention", "⚠️", "attention", g.attention));
    return block;
  }

  /* ====================================================================
     APERÇU DU PROGRAMME (page d'accueil)
     ==================================================================== */
  function renderHome() {
    const s = COURS.stats;
    const res = window.Progress.resumeGlobal(COURS);
    const frag = document.createDocumentFragment();

    /* --- Hero --- */
    const niveauActuel = window.Progress.getNiveau();
    const badge = niveauActuel
      ? '<div class="niveau-actuel">🎯 Ton niveau actuel : <strong>' + niveauActuel + "</strong> <span>" + (NIVEAU_LABELS[niveauActuel] || "") + '</span><a class="niveau-actuel-link" href="#/start">↺ changer</a></div>'
      : "";
    const hero = el("header", "hero");
    hero.innerHTML =
      '<div class="hero-flag" aria-hidden="true"><span></span><span></span><span></span></div>' +
      badge +
      '<p class="hero-eyebrow">' + COURS.cadre + "</p>" +
      "<h1>" + COURS.titre + "</h1>" +
      '<p class="hero-slogan">' + COURS.slogan + "</p>" +
      '<p class="hero-desc">' + COURS.description + "</p>";

    const statsRow = el("div", "stats-row");
    [
      ["📚", s.modules, "modules"],
      ["📖", s.lecons, "leçons"],
      ["🗂️", s.mots, "mots de vocabulaire"],
      ["✍️", s.exercices, "exercices interactifs"],
      ["⏱️", "~" + s.heures + " h", "de cours"]
    ].forEach(([ic, n, lab]) => {
      const c = el("div", "stat");
      c.innerHTML = '<span class="stat-ic">' + ic + '</span><span class="stat-n">' + n + '</span><span class="stat-l">' + lab + "</span>";
      statsRow.appendChild(c);
    });
    hero.appendChild(statsRow);

    /* Barre de progression globale */
    const prog = el("div", "global-prog");
    prog.innerHTML =
      '<div class="global-prog-head"><span>Votre progression</span><span>' +
      res.faites + "/" + res.total + " leçons" +
      (res.streak ? '  ·  🔥 ' + res.streak + " j" : "") +
      "</span></div>" +
      '<div class="bar"><div class="bar-fill" style="width:' + res.pourcent + '%"></div></div>';
    hero.appendChild(prog);

    /* Lien retour vers le menu (hub) — placé en tête de l'aperçu du cours. */
    const menuBar = el("div", "lesson-top");
    menuBar.innerHTML = '<a class="btn-link" href="#/menu">← Menu</a>';
    frag.appendChild(menuBar);

    /* Progression DANS le niveau en cours */
    const etapeN = prochaineEtape();
    let curNiv = niveauActuel;
    const mNiv = etapeN.match(/^#\/lecon\/([a-z0-9]+)/);
    if (mNiv) { const fi = flat[leconIndex(mNiv[1])]; if (fi) curNiv = fi.lecon.niveau; }
    if (!curNiv) { const undone = flat.find((f) => !window.Progress.estTermine(f.lecon.id)); curNiv = undone ? undone.lecon.niveau : "C2"; }
    if (curNiv) {
      const lecNiv = flat.filter((f) => f.lecon.niveau === curNiv);
      const faitsNiv = lecNiv.filter((f) => window.Progress.estTermine(f.lecon.id)).length;
      const pctNiv = lecNiv.length ? Math.round((faitsNiv / lecNiv.length) * 100) : 0;
      const mColor = (COURS.modules.find((m) => (m.niveau || "A1") === curNiv) || {}).couleur || "#2563eb";
      const progN = el("div", "global-prog niveau-prog");
      progN.style.setProperty("--np", mColor);
      progN.innerHTML =
        '<div class="global-prog-head"><span>📈 Niveau ' + curNiv + " (" + (NIVEAU_LABELS[curNiv] || "") + ")</span><span>" +
        faitsNiv + "/" + lecNiv.length + " leçons</span></div>" +
        '<div class="bar"><div class="bar-fill" style="width:' + pctNiv + "%;background:" + mColor + '"></div></div>';
      hero.appendChild(progN);
    }

    /* Points (XP), objectif quotidien, badges */
    const gamif = el("div", "hero-gamif");
    gamif.appendChild(objectifRing());
    const pts = calcPoints();
    const nbBadges = badgesGagnes().filter((x) => x.gagne).length;
    const gp = el("a", "gamif-pts");
    gp.href = "#/stats";
    gp.innerHTML = '<div class="gp-pts">⭐ ' + pts + ' <span class="gp-rang">' + rangPoints(pts) + "</span></div>" +
      '<div class="gp-lab">points · 🏅 ' + nbBadges + "/" + BADGES.length + " badges · voir le détail →</div>";
    gamif.appendChild(gp);
    hero.appendChild(gamif);

    const cta = el("div", "hero-cta");
    const etape = prochaineEtape();
    const btn = el("a", "btn btn-primary big");
    btn.href = etape;
    btn.textContent =
      etape === "#/" ? "🎉 Parcours A1 → C2 terminé !"
      : /examen\/a1/.test(etape) ? "🎓 Passer l'examen A1"
      : /examen\/a2/.test(etape) ? "🎓 Passer l'examen A2"
      : /examen\/finalb/.test(etape) ? "🎓 Passer l'examen B1 + B2"
      : /examen\/finalc/.test(etape) ? "🏆 Passer l'examen C1 + C2"
      : /examen\/final/.test(etape) ? "🎓 Passer l'examen final A1+A2"
      : /examen\/b1/.test(etape) ? "🎓 Passer l'examen B1"
      : /examen\/b2/.test(etape) ? "🎓 Passer l'examen B2"
      : /examen\/c1/.test(etape) ? "🎓 Passer l'examen C1"
      : /examen\/c2/.test(etape) ? "🎓 Passer l'examen C2"
      : res.faites > 0 ? "▶ Continuer le parcours" : "▶ Commencer la leçon 1";
    cta.appendChild(btn);

    // Actions secondaires : révision espacée
    const srs = window.Revision.stats(COURS);
    const secondRow = el("div", "hero-secondary");
    const revBtn = el("a", "btn btn-ghost");
    revBtn.href = "#/revision";
    revBtn.innerHTML = "🔁 Réviser" + (srs.due ? ' <span class="pill">' + srs.due + "</span>" : "");
    secondRow.appendChild(revBtn);
    const statsBtn = el("a", "btn btn-ghost", "📊 Statistiques");
    statsBtn.href = "#/stats";
    secondRow.appendChild(statsBtn);
    const niveauBtn = el("a", "btn btn-ghost", "🎯 Tester / changer mon niveau");
    niveauBtn.href = "#/start";
    secondRow.appendChild(niveauBtn);
    const installBtn = el("button", "btn btn-ghost install-btn", "📲 Installer l'app");
    installBtn.type = "button";
    installBtn.addEventListener("click", promptInstall);
    secondRow.appendChild(installBtn);
    const themeBtn = el("button", "btn btn-ghost", Theme.label());
    themeBtn.type = "button";
    themeBtn.addEventListener("click", () => { Theme.cycle(); themeBtn.textContent = Theme.label(); });
    secondRow.appendChild(themeBtn);
    cta.appendChild(secondRow);

    const audioInfo = el("p", "hero-audio-info", window.Speech && window.Speech.isSupported()
      ? "🔊 Prononciation audio allemande activée"
      : "ℹ️ Activez le son de votre navigateur pour la prononciation");
    cta.appendChild(audioInfo);
    hero.appendChild(cta);
    frag.appendChild(hero);
    if (window.Objectif && window.Objectif.panel) { try { var __opan = window.Objectif.panel(COURS); if (__opan) frag.appendChild(__opan); } catch (e) {} }
    if (window.Adaptatif && window.Adaptatif.panel) { try { var __apan = window.Adaptatif.panel(COURS, { nextHref: prochaineEtape(), due: (window.Revision ? window.Revision.stats(COURS).due : 0) }); if (__apan) frag.appendChild(__apan); } catch (e) {} }

    /* --- Conseil de Zika (points faibles repérés au test) --- */
    const faibles = window.Progress.getFaiblesses();
    if (faibles && faibles.length) {
      const tip = el("section", "section");
      const tc = el("div", "zika-conseil");
      tc.appendChild(el("span", "cours-tag", "💡 Le conseil de Zika"));
      const msg = el("div", "zika-conseil-msg");
      localizeInto(msg, "D'après ton test, travaille en priorité : " + faibles.map((f) => "**" + f + "**").join(", ") + ".", { lang: window.I18N ? (window.I18N.uiLang ? window.I18N.uiLang() : window.I18N.lang()) : "fr", de: false });
      tc.appendChild(msg);
      const rev = el("a", "btn btn-ghost small", "🔁 Réviser maintenant");
      rev.href = "#/revision"; rev.style.marginTop = "10px";
      tc.appendChild(rev);
      tip.appendChild(tc);
      frag.appendChild(tip);
    }

    /* --- Méthode --- */
    const meth = el("section", "section");
    meth.appendChild(el("h2", "section-title", "🧠 Une méthode intensive"));
    const methGrid = el("div", "method-grid");
    COURS.methode.forEach((m) => {
      const c = el("div", "method-card");
      c.innerHTML = '<div class="method-ic">' + m.icone + "</div><h3>" + m.titre + "</h3><p>" + m.texte + "</p>";
      methGrid.appendChild(c);
    });
    meth.appendChild(methGrid);
    frag.appendChild(meth);

    /* --- Parcours par niveau (leçons + examens-verrous) --- */
    function carteLecon(l) {
      const gidx = leconIndex(l.id);
      const done = window.Progress.estTermine(l.id);
      const unlocked = isUnlocked(gidx);
      const tags = (l.grammairePoints || []).slice(0, 2).map((g) => '<span class="tag">' + g + "</span>").join("");
      const banner =
        '<div class="lecon-banner">' +
        '<img loading="lazy" src="' + lessonPhoto(l.id, 400, 220) + '" alt="" onerror="this.style.display=\'none\'">' +
        (unlocked ? "" : '<span class="lock-badge" title="Étape précédente à terminer">🔒</span>') + "</div>";
      const body =
        '<div class="lecon-body">' +
        '<div class="lecon-row"><span class="lecon-num">' + l.numero + (done ? ' <span class="check">✓</span>' : "") + "</span>" +
        '<div class="lecon-titles"><h3>' + l.titre + '</h3><p class="lecon-de">' + l.titreDE + "</p></div></div>" +
        '<div class="lecon-tags">' + tags + "</div>" +
        '<div class="lecon-meta"><span>⏱️ ' + l.duree + " min</span><span>" +
        (l.type === "grammaire" ? "📐 grammaire" : "🗂️ " + (l.vocabulaire || []).length + " mots") +
        "</span><span>✍️ " + l.exercices.length + "</span></div></div>";
      let card;
      if (unlocked) { card = el("a", "lecon-card" + (done ? " done" : "") + (l.type === "grammaire" ? " grammaire" : "")); card.href = "#/lecon/" + l.id; }
      else card = el("div", "lecon-card locked" + (l.type === "grammaire" ? " grammaire" : ""));
      card.innerHTML = banner + body;
      return card;
    }
    /* Carte spéciale des examens DELF (A1, A2…) : à passer / en correction / corrigé. */
    function carteDelf(code, unlocked, lockText) {
      const CODE = delfName(code), base = "#/examen/" + code;
      const ts = window.Progress.getTestScore(code);
      const local = delfLocalGet(code) || {};
      const passed = !!(ts && ts.reussi);
      const pending = local.status === "pending" && !passed;
      const card = el("div", "examen-final delf-card " + (unlocked ? "unlocked" : "locked") + (passed ? " reussi" : "") + (pending ? " pending" : ""));
      let inner = '<div class="examen-ic">' + (passed ? "🏅" : pending ? "⏳" : unlocked ? "🎓" : "🔒") + '</div><h2>🎓 Examen DELF ' + CODE + "</h2>";
      if (!unlocked) { inner += "<p>" + lockText + "</p>"; card.innerHTML = inner; return card; }
      if (pending) inner += "<p>⏳ <strong>Copie en correction.</strong> Votre note /100, votre copie corrigée et votre PDF arrivent sous 24 h (notification Telegram).</p>";
      else if (passed) inner += "<p>Examen blanc complet (4 épreuves /100). Meilleur score : <strong>" + (ts.meilleur || 0) + "/100</strong> — réussi ✅</p>";
      else inner += "<p>Examen blanc DELF " + CODE + " complet : écouter, lire, écrire, parler (/100). Corrigé par l'IA sous 24 h." + (ts ? " Dernier score : <strong>" + (ts.dernier != null ? ts.dernier : ts.meilleur) + "/100</strong>." : "") + "</p>";
      card.innerHTML = inner;
      const row = el("div", "examen-actions");
      if (pending) { const r = el("a", "btn btn-primary big", "Voir l'état de ma copie"); r.href = base + "/resultat"; row.appendChild(r); }
      else {
        const b = el("a", "btn btn-primary big", ts ? "Repasser l'examen" : "🎓 Passer l'examen DELF " + CODE); b.href = base; row.appendChild(b);
        if (ts) { const r = el("a", "btn btn-ghost", "📊 Ma copie / résultat"); r.href = base + "/resultat"; row.appendChild(r); }
      }
      card.appendChild(row);
      return card;
    }
    /* Carte spéciale des examens telc (B1, B2…) : deux parties, certificat. */
    function carteTelc(code, unlocked, lockText) {
      const CODE = telcName(code);
      const ts = window.Progress.getTestScore(code);
      const loc = telcLocalGet(code) || {};
      const certified = !!(ts && ts.reussi);
      const card = el("div", "examen-final telc-card " + (unlocked ? "unlocked" : "locked") + (certified ? " reussi" : ""));
      let inner = '<div class="examen-ic">' + (certified ? "🏅" : unlocked ? "📜" : "🔒") + '</div><h2>📜 Examen telc ' + CODE + "</h2>";
      if (!unlocked) { inner += "<p>" + lockText + "</p>"; card.innerHTML = inner; return card; }
      function tag(pkey, label) { const s = loc[pkey] || {}; const p = certified || s.passed; return label + " " + (p ? "✅" : (s.status === "pending" ? "⏳" : "—")); }
      if (certified) inner += "<p>Certificat " + CODE + " obtenu ✅ — écrit + oral validés. La suite est débloquée.</p>";
      else inner += "<p>Deux parties à réussir (≥ 60 % chacune). " + tag("schriftlich", "Écrit") + " · " + tag("muendlich", "Oral") + ".</p>";
      card.innerHTML = inner;
      const row = el("div", "examen-actions");
      const b = el("a", "btn btn-primary big", certified ? "Revoir l'examen" : "📜 Ouvrir l'examen telc " + CODE); b.href = "#/examen/" + code; row.appendChild(b);
      card.appendChild(row); return card;
    }
    function carteExamen(examId, titre, unlocked, sousTitre, lockText) {
      if (examId === "a1" || examId === "a2" || examId === "final") return carteDelf(examId, unlocked, lockText);
      if (examId === "b1" || examId === "b2" || examId === "c1" || examId === "c2" || examId === "finalb" || examId === "finalc") return carteTelc(examId, unlocked, lockText);
      const ts = window.Progress.getTestScore(examId);
      const card = el("div", "examen-final " + (unlocked ? "unlocked" : "locked") + (ts && ts.reussi ? " reussi" : ""));
      card.innerHTML =
        '<div class="examen-ic">' + (ts && ts.reussi ? "🏅" : unlocked ? "🎓" : "🔒") + "</div><h2>" + titre + "</h2>" +
        (unlocked
          ? "<p>" + sousTitre + (ts ? ' Meilleur score : <strong>' + ts.meilleur + "%</strong>" + (ts.reussi ? " — réussi ✅" : "") : "") + "</p>"
          : "<p>" + lockText + "</p>");
      if (unlocked) {
        const b = el("a", "btn btn-primary big", ts ? "Repasser l'examen" : "🎓 Passer l'examen");
        b.href = "#/examen/" + examId;
        card.appendChild(b);
      }
      return card;
    }
    function carteDictee(mod) {
      const done = (mod.lecons || []).length > 0 && mod.lecons.every((l) => window.Progress.estTermine(l.id));
      const ts = window.Progress.getTestScore("dictee-" + mod.id);
      const niveau = mod.niveau || "A1";
      const P = DICTEE_PARAMS[niveau] || DICTEE_PARAMS.A1;
      const card = el(done ? "a" : "div", "dictee-card" + (ts && ts.reussi ? " done" : "") + (done ? "" : " locked"));
      if (done) card.href = "#/dictee/" + mod.id;
      card.innerHTML = '<span class="dictee-card-ic">✍️</span><div class="dictee-card-body"><strong>Dictée du module · ' + niveau + "</strong><span>" +
        (done ? (ts ? "Meilleur score : " + ts.meilleur + "% — réécoute et améliore" : P.min + " min · " + P.vitesse + " · " + P.ecoutes + (P.ecoutes > 1 ? " écoutes" : " écoute")) : "Termine les leçons du module pour débloquer la dictée") +
        "</span></div><span class=\"menu-go\">" + (ts && ts.reussi ? "✓" : (done ? "→" : "🔒")) + "</span>";
      return card;
    }

    /* Rendu générique d'un niveau : séparateur + modules + carte d'examen */
    function renderNiveau(niv) {
      const prevPassed = niv.prevExam ? examPasse(niv.prevExam) : true;
      const sep = el("section", "section niveau-sep");
      sep.innerHTML = '<h2 class="niveau-titre">Niveau ' + niv.code +
        (!prevPassed ? ' <span class="niveau-lock">🔒 réussissez ' + niv.prevLabel + ' pour débloquer</span>' : "") + "</h2>";
      frag.appendChild(sep);

      COURS.modules.filter((m) => (m.niveau || "A1") === niv.code).forEach((mod) => {
        const sec = el("section", "section module");
        sec.style.setProperty("--mod-color", mod.couleur);
        const headM = el("div", "module-head");
        headM.innerHTML = '<div class="module-badge">' + mod.titre + "</div><h2>" + mod.sousTitre + "</h2><p>" + mod.description + "</p>";
        sec.appendChild(headM);
        const grid = el("div", "lecon-grid");
        mod.lecons.forEach((l) => grid.appendChild(carteLecon(l)));
        sec.appendChild(grid);
        if (window.DICTEES && window.DICTEES[mod.id]) sec.appendChild(carteDictee(mod));
        frag.appendChild(sec);
      });

      const unlocked = niveauTermine(niv.code) && prevPassed;
      const lockText = !prevPassed
        ? ("Réussissez d'abord " + niv.prevLabel + ".")
        : ("Terminez les leçons du niveau " + niv.code + " pour passer l'examen.");
      const examSec = el("section", "section");
      examSec.appendChild(carteExamen(niv.exam, "Examen du niveau " + niv.code, unlocked, niv.examSous, lockText));
      frag.appendChild(examSec);
    }

    /* --- Bibliothèque : romans éducatifs par niveau --- */
    const romansDispo = ROMAN_ORDER.filter(function (c) { return !!romanData(c); });
    if (romansDispo.length) {
      const ouverts = romansDispo.filter(romanUnlocked).length;
      const bib = el("section", "section");
      const bc = el("a", "roman-home-card");
      bc.href = "#/romans";
      bc.innerHTML = '<span class="roman-home-ic">📚</span><div class="roman-home-body"><strong>Romans éducatifs — la bibliothèque</strong><span>' +
        romansDispo.length + " romans par niveau (A1 → C2) : mots colorés, vocabulaire expliqué en bas de page dans votre langue. " +
        ouverts + " / " + romansDispo.length + ' ouverts.</span></div><span class="menu-go">→</span>';
      bib.appendChild(bc);
      frag.appendChild(bib);
    }

    renderNiveau({ code: "A1", exam: "a1", prevExam: null, prevLabel: null,
      examSous: "Examen blanc DELF A1 (4 épreuves /100), corrigé par l'IA sous 24 h. Réussissez-le pour débloquer le niveau A2 !" });
    renderNiveau({ code: "A2", exam: "a2", prevExam: "a1", prevLabel: "l'examen A1",
      examSous: "Examen blanc DELF A2 (4 épreuves /100), corrigé par l'IA sous 24 h. Réussissez-le pour débloquer l'examen final." });

    /* --- Examen final A1 + A2 (verrou vers le B1) --- */
    const finalSec = el("section", "section");
    finalSec.appendChild(carteExamen("final", "🎓 Examen final A1 + A2", examPasse("a2"),
      "30 questions tirées de tout l'A1 et l'A2 · seuil " + COURS.seuilReussite + "%. La consécration !",
      "Réussissez l'examen du niveau A2 pour débloquer l'examen final."));
    frag.appendChild(finalSec);

    /* --- Niveau B1 (débloqué après l'examen final A1 + A2) --- */
    renderNiveau({ code: "B1", exam: "b1", prevExam: "final", prevLabel: "l'examen final A1 + A2",
      examSous: "Examen blanc telc B1 (écrit /225 + oral /75), corrigé par l'IA sous 24 h. Réussissez les deux parties pour débloquer le B2 !" });

    /* --- Niveau B2 (débloqué après l'examen B1) --- */
    renderNiveau({ code: "B2", exam: "b2", prevExam: "b1", prevLabel: "l'examen B1",
      examSous: "Examen blanc telc B2 (écrit /225 + oral /75), corrigé par l'IA sous 24 h. Réussissez les deux parties pour débloquer la suite !" });

    /* --- Examen combiné B1 + B2 (verrou vers le C1) --- */
    const finalbSec = el("section", "section");
    finalbSec.appendChild(carteExamen("finalb", "🎓 Examen B1 + B2", examPasse("b2"),
      "30 questions tirées de tout le B1 et le B2 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour accéder au C1 !",
      "Réussissez l'examen du niveau B2 pour débloquer l'examen B1 + B2."));
    frag.appendChild(finalbSec);

    /* --- Niveau C1 (débloqué après l'examen B1 + B2) --- */
    renderNiveau({ code: "C1", exam: "c1", prevExam: "finalb", prevLabel: "l'examen B1 + B2",
      examSous: "Examen blanc telc C1 (écrit /166 + oral /48), corrigé par l'IA sous 24 h. Réussissez les deux parties pour accéder au niveau C2 !" });

    /* --- Niveau C2 (débloqué après l'examen C1) --- */
    renderNiveau({ code: "C2", exam: "c2", prevExam: "c1", prevLabel: "l'examen C1",
      examSous: "Examen blanc telc C2 (écrit /225 + oral /75), corrigé par l'IA sous 24 h. Le sommet du parcours !" });

    /* --- Examen combiné C1 + C2 (consécration finale) --- */
    const finalcSec = el("section", "section");
    finalcSec.appendChild(carteExamen("finalc", "🏆 Examen C1 + C2", examPasse("c2"),
      "30 questions tirées de tout le C1 et le C2 · seuil " + COURS.seuilReussite + "%. L'épreuve ultime !",
      "Réussissez l'examen du niveau C2 pour débloquer l'examen C1 + C2."));
    frag.appendChild(finalcSec);

    /* --- Parcours achevé (A1 → C2) --- */
    const doneAll = examPasse("finalc");
    const c2Sec = el("section", "section");
    const c2 = el("div", "examen-final " + (doneAll ? "unlocked reussi" : "locked"));
    c2.innerHTML = '<div class="examen-ic">' + (doneAll ? "🏆" : "🔒") + "</div><h2>Cadre européen — maîtrise complète</h2>" +
      (doneAll
        ? "<p>🎉 Félicitations ! Vous avez parcouru <strong>tout le Cadre européen, de A1 à C2</strong>. Respekt!</p>"
        : "<p>Réussissez l'examen C1 + C2 pour achever l'intégralité du parcours (A1 → C2).</p>");
    c2Sec.appendChild(c2);
    frag.appendChild(c2Sec);

    /* --- Aperçu grammaire --- */
    const gram = el("section", "section");
    gram.appendChild(el("h2", "section-title", "📐 Les bases de grammaire (fondations A1)"));
    const gg = el("div", "gram-grid");
    Object.keys(COURS.grammaireGlobale).forEach((k) => {
      const col = el("div", "gram-col");
      col.appendChild(el("h3", "", k));
      const ul = el("ul", "");
      COURS.grammaireGlobale[k].forEach((g) => ul.appendChild(el("li", "", g)));
      col.appendChild(ul);
      gg.appendChild(col);
    });
    gram.appendChild(gg);
    frag.appendChild(gram);

    /* --- Compétences CECRL --- */
    const comp = el("section", "section comp");
    comp.appendChild(el("h2", "section-title", "🎓 Dès le niveau A1, vous saurez…"));
    const ul = el("ul", "comp-list");
    COURS.competences.forEach((c) => ul.appendChild(el("li", "", c)));
    comp.appendChild(ul);
    frag.appendChild(comp);

    const footer = el("footer", "footer");
    const synced = window.Sync && window.Sync.available();
    footer.innerHTML =
      "<p>Cours d'allemand intensif · Niveau A1 · Méthode communicative (CECRL)</p>" +
      (synced ? '<p class="sync-badge">☁️ Progression synchronisée avec votre compte Telegram</p>' : "") +
      '<p class="footer-legal" style="margin-top:8px;font-size:12px;opacity:.85">' + '<a class="btn-link" href="#/impressum">Impressum</a> | <a class="btn-link" href="#/datenschutz">Datenschutz</a> | <a class="btn-link" href="#/agb">AGB</a> | <a class="btn-link" href="#/widerruf">Widerruf</a>' + '</p>' + '<button class="btn-link" id="reset-prog">Réinitialiser ma progression</button>';
    frag.appendChild(footer);

    app.innerHTML = "";
    app.appendChild(frag);
    const rb = document.getElementById("reset-prog");
    if (rb)
      rb.addEventListener("click", () => {
        if (confirm("Effacer toute votre progression ?")) {
          window.Progress.reset();
          if (window.Revision) window.Revision.reset();
          if (window.Sync) window.Sync.clear();
          renderHome();
        }
      });

    if (window.TG) {
      window.TG.hideBackButton();
      window.TG.closingConfirmation(false);
      const et = prochaineEtape();
      const label = et === "#/" ? "🎉 Terminé"
        : /examen/.test(et) ? "🎓 Passer l'examen"
        : res.faites > 0 ? "▶ Continuer" : "▶ Commencer la leçon 1";
      window.TG.setMainButton(label, () => { location.hash = et === "#/" ? "#/" : et; });
    }
    window.scrollTo(0, 0);
  }

  function nextLeconId(res) {
    for (const f of flat) if (!window.Progress.estTermine(f.lecon.id)) return f.lecon.id;
    return flat[0].lecon.id;
  }

  /* ====================================================================
     RENDU D'UNE LEÇON
     ==================================================================== */
  function revisionExpress(max) {
    if (!window.Revision || !window.Revision.getDue || !window.COURS) return null;
    var cards = window.Revision.getDue(window.COURS, max || 5);
    if (!cards.length) return null;
    var box = el("section", "lesson-section");
    box.appendChild(el("h2", "", "🔁 Révision express (" + cards.length + ")"));
    box.appendChild(el("p", "exo-group-sub", "Rafraîchis ces mots vus avant, puis attaque la leçon."));
    var holder = el("div", ""); box.appendChild(holder);
    var i = 0, known = 0, unknown = 0;
    function done() { holder.innerHTML = ""; holder.appendChild(el("p", "exo-group-sub", "✅ Révision faite - " + known + " su(s), " + unknown + " à revoir. Bonne leçon !")); }
    function show() {
      if (i >= cards.length) return done();
      var c = cards[i]; holder.innerHTML = "";
      holder.appendChild(el("div", "exo-group-sub", "Carte " + (i + 1) + " / " + cards.length));
      var fc = el("div", "flashcard");
      var deRow = el("div", "fc-de"); deRow.appendChild(el("span", "", c.de)); deRow.appendChild(speakButton(c.de)); fc.appendChild(deRow);
      var back = el("div", "fc-back hidden"); back.appendChild(el("div", "fc-fr", c.fr)); if (c.ex) back.appendChild(el("p", "fc-ex", "« " + c.ex + " »")); fc.appendChild(back);
      holder.appendChild(fc);
      var rateRow = el("div", "rev-rate");
      var flip = el("button", "btn btn-ghost small", "🔄 Réponse"); flip.type = "button";
      var ok = el("button", "btn-self ok", "✅ Su"); ok.type = "button"; ok.style.display = "none";
      var ko = el("button", "btn-self ko", "❌ À revoir"); ko.type = "button"; ko.style.display = "none";
      flip.addEventListener("click", function () { back.classList.remove("hidden"); flip.style.display = "none"; ok.style.display = ""; ko.style.display = ""; if (window.TG) window.TG.haptic("selection"); });
      ok.addEventListener("click", function () { window.Revision.rate(c.id, true); if (window.TG) window.TG.haptic("success"); known++; i++; show(); });
      ko.addEventListener("click", function () { window.Revision.rate(c.id, false); if (window.TG) window.TG.haptic("light"); unknown++; i++; show(); });
      rateRow.appendChild(flip); rateRow.appendChild(ok); rateRow.appendChild(ko); holder.appendChild(rateRow);
    }
    show();
    return box;
  }

  function renderLecon(id) {
    const idx = leconIndex(id);
    if (idx < 0) return renderHome();
    const { module: mod, lecon: l } = flat[idx];
    if (window.I18N && window.I18N.setImmersionCtx) window.I18N.setImmersionCtx(l.niveau);

    /* Garde séquentielle : leçon verrouillée tant que la précédente n'est pas terminée */
    if (!isUnlocked(idx)) {
      const prev = flat[idx - 1].lecon;
      app.innerHTML = "";
      const top = el("div", "lesson-top");
      top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a>';
      app.appendChild(top);
      const lock = el("section", "lesson-section locked-notice");
      lock.innerHTML =
        '<div class="comp-emoji">🔒</div><h2>Leçon verrouillée</h2>' +
        "<p>Pour suivre le cours pas à pas, terminez d'abord la <strong>leçon " + prev.numero + " — " + prev.titre + "</strong>.</p>";
      const goPrev = el("a", "btn btn-primary", "→ Aller à la leçon " + prev.numero);
      goPrev.href = "#/lecon/" + prev.id;
      lock.appendChild(goPrev);
      app.appendChild(lock);
      if (window.TG) {
        window.TG.showBackButton(() => { location.hash = "#/"; });
        window.TG.setMainButton("→ Leçon " + prev.numero, () => { location.hash = "#/lecon/" + prev.id; });
      }
      window.scrollTo(0, 0);
      return;
    }

    const frag = document.createDocumentFragment();

    /* Barre supérieure */
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a>' +
      '<span class="lesson-top-mod">' + mod.titre + "</span>";
    frag.appendChild(top);

    /* En-tête */
    const estGram = l.type === "grammaire";
    const hasVoc = !!(l.vocabulaire && l.vocabulaire.length);
    const hasDlg = !!(l.dialogue && l.dialogue.lignes);
    const head = el("header", "lesson-head");
    head.style.setProperty("--mod-color", mod.couleur);
    head.innerHTML =
      '<div class="lesson-hero"><img loading="lazy" src="' + lessonPhoto(l.id, 900, 320) + '" alt="" onerror="this.style.display=\'none\'"></div>' +
      '<div class="lesson-num">' + (estGram ? "📐 Grammaire · Leçon " : "Leçon ") + l.numero + "</div>" +
      "<h1>" + l.titre + ' <span class="de">· ' + l.titreDE + "</span></h1>" +
      '<p class="lesson-theme">Thème : ' + l.theme + '  ·  ⏱️ ' + l.duree + " min</p>" +
      (window.introFor && window.introFor(l.id) ? '<p class="lesson-intro">' + window.introFor(l.id) + "</p>" : "");
    const obj = el("div", "objectifs");
    obj.appendChild(el("h3", "", "🎯 Objectifs"));
    const ulo = el("ul", "");
    l.objectifs.forEach((o) => ulo.appendChild(el("li", "", o)));
    obj.appendChild(ulo);
    head.appendChild(obj);
    frag.appendChild(head);

    /* Navigation par onglets (ancres) */
    var __rx = revisionExpress(5); if (__rx) frag.appendChild(__rx);
    const tabs = el("nav", "lesson-tabs");
    tabs.innerHTML =
      (hasVoc ? '<a href="#voc">🗂️ Vocabulaire</a>' : "") +
      '<a href="#gram">📐 Grammaire</a>' +
      (hasDlg ? '<a href="#dlg">💬 Dialogue</a>' : "") +
      '<a href="#exo">✍️ Exercices</a>';
    frag.appendChild(tabs);

    /* --- Vocabulaire (absent pour les leçons de grammaire) --- */
    if (hasVoc) {
    const voc = el("section", "lesson-section cours");
    voc.id = "voc";
    const vocHead = el("div", "ls-head");
    vocHead.appendChild(el("h2", "", "🗂️ Cours de vocabulaire"));
    const playAll = el("button", "btn btn-ghost small", "🔊 Tout écouter");
    playAll.type = "button";
    playAll.addEventListener("click", () => playSequence(l.vocabulaire.map((v) => v.de)));
    vocHead.appendChild(playAll);
    voc.appendChild(vocHead);
    voc.appendChild(el("p", "exo-group-sub", "🔊 Écoute chaque mot et répète-le à voix haute. Apprends toujours le mot avec son article : il donne le genre. Les couleurs t'aident à mémoriser."));
    const leg = el("div", "genre-legende");
    leg.innerHTML = '<span class="art art-der">der</span> masculin&nbsp;&nbsp;·&nbsp;&nbsp;<span class="art art-die">die</span> féminin&nbsp;&nbsp;·&nbsp;&nbsp;<span class="art art-das">das</span> neutre';
    voc.appendChild(leg);

    /* Cours de vocabulaire long-format (mémorisation, faux-amis, registres,
       champs lexicaux…). Immersion : A1/A2 dans la langue de l'apprenant,
       B1+ en allemand gradué (vocCoursDE) rendu tel quel. */
    const vEx = window.I18N ? window.I18N.explication(l.niveau) : { lang: "fr", de: false };
    const vNatifDE = vEx.de && l.vocCoursDE && l.vocCoursDE.length;
    const vArr = vNatifDE ? l.vocCoursDE : l.vocCours;
    if (vArr && vArr.length) {
      const vart = el("article", "cours-article voc-article");
      vArr.forEach((p) => { const pe = el("p", "cours-art-p"); if (vNatifDE) pe.innerHTML = mdLite(p); else localizeInto(pe, p, vEx); vart.appendChild(pe); });
      voc.appendChild(vart);
    }

    const vocGrid = el("div", "voc-grid");
    l.vocabulaire.forEach((v) => {
      const c = el("div", "voc-card");
      const gm = String(v.de).match(/^(der|die|das)\s/);
      if (gm) c.classList.add("genre-" + gm[1]);
      const top2 = el("div", "voc-top");
      const deWrap = el("div", "voc-de");
      const span = el("span", "");
      span.innerHTML = vocDeHtml(v.de);
      deWrap.appendChild(span);
      deWrap.appendChild(speakButton(v.de));
      top2.appendChild(deWrap);
      c.appendChild(top2);
      c.appendChild(el("div", "voc-fr", v.fr));
      if (v.ex) { const ex = el("div", "voc-ex"); ex.innerHTML = "« " + escapeHtml(v.ex) + " »"; c.appendChild(ex); }
      vocGrid.appendChild(c);
    });
    voc.appendChild(vocGrid);
    frag.appendChild(voc);
    }

    /* --- Grammaire (cours pédagogique) --- */
    const gEx = window.I18N ? window.I18N.explication(l.niveau) : { lang: "fr", de: false, niveau: null };
    const gram = el("section", "lesson-section cours");
    gram.id = "gram";
    gram.appendChild(el("h2", "", "📐 " + exLabel(gEx, "course")));
    gram.appendChild(el("p", "exo-group-sub", "Lis l'explication et observe les exemples colorés avant de passer aux exercices."));
    /* Immersion : à partir de B1, Zika explique en allemand du niveau précédent */
    if (gEx.de && window.I18N) {
      const imm = el("div", "immersion-banner");
      imm.innerHTML = "🇩🇪 <strong>" + window.I18N.tIn("de", "immersion_on") + "</strong> — " + window.I18N.t("immersion_notice", { lvl: gEx.niveau });
      gram.appendChild(imm);
    }
    /* Cours long-format (texte détaillé) : nouvelle pédagogie « vrai cours ».
       En immersion (B1+), on privilégie une version rédigée en allemand
       gradué (coursDE) rendue telle quelle ; sinon le cours (français) est
       affiché dans la langue de l'utilisateur (traduction si besoin). */
    if (l.einstieg) {
      var __eb = el("div", "cours-block peda-block peda-einstieg");
      __eb.appendChild(el("span", "cours-tag", "🎯 Découverte"));
      if (l.einstieg.intro) { var __ei = el("p", "cours-art-p"); localizeInto(__ei, l.einstieg.intro, gEx); __eb.appendChild(__ei); }
      if (l.einstieg.exemples && l.einstieg.exemples.length) __eb.appendChild(buildExemples(l.einstieg.exemples, gEx));
      if (l.einstieg.question) { var __eq = el("p", "peda-question"); localizeInto(__eq, l.einstieg.question, gEx); __eb.appendChild(__eq); }
      gram.appendChild(__eb);
    }
    const coursNatifDE = gEx.de && l.coursDE && l.coursDE.length;
    const coursArr = coursNatifDE ? l.coursDE : l.cours;
    if (coursArr && coursArr.length) {
      const art = el("article", "cours-article");
      art.appendChild(el("h3", "cours-art-titre", "📖 " + exLabel(gEx, "course")));
      coursArr.forEach((p) => {
        const pe = el("p", "cours-art-p");
        if (coursNatifDE) pe.innerHTML = mdLite(p); else localizeInto(pe, p, gEx);
        art.appendChild(pe);
      });
      gram.appendChild(art);
    }
    l.grammaire.forEach((g) => gram.appendChild(renderGrammarBlock(g, l.niveau)));
    if (l.merke && l.merke.length) {
      var __mb = el("div", "cours-block peda-block peda-merke");
      __mb.appendChild(el("span", "cours-tag", "🧠 À retenir"));
      var __mul = el("ul", "peda-list");
      l.merke.forEach(function (pt) { var __li = el("li", ""); localizeInto(__li, pt, gEx); __mul.appendChild(__li); });
      __mb.appendChild(__mul);
      gram.appendChild(__mb);
    }
    if (l.achtung && l.achtung.length) {
      var __ab = el("div", "cours-block peda-block peda-achtung");
      __ab.appendChild(el("span", "cours-tag", "⚠️ Pièges fréquents"));
      l.achtung.forEach(function (a) {
        var __it = el("div", "peda-achtung-item");
        if (a.erreur) { var __er = el("div", "peda-err peda-de"); __er.innerHTML = "❌ " + mdLite(a.erreur); __it.appendChild(__er); }
        if (a.correct) { var __co = el("div", "peda-ok peda-de"); __co.innerHTML = "✅ " + mdLite(a.correct); __it.appendChild(__co); }
        if (a.explication) { var __ax = el("p", "peda-expl"); localizeInto(__ax, a.explication, gEx); __it.appendChild(__ax); }
        __ab.appendChild(__it);
      });
      gram.appendChild(__ab);
    }
    if (l.kontrast) {
      var __kb = el("div", "cours-block peda-block peda-kontrast");
      __kb.appendChild(el("span", "cours-tag", "🔗 " + (l.kontrast.titre || "Contraste FR / DE")));
      if (l.kontrast.similitudes && l.kontrast.similitudes.length) {
        var __ks = el("div", "peda-kontrast-grp"); __ks.appendChild(el("h4", "peda-kontrast-h", "✓ Points communs"));
        var __ksu = el("ul", "peda-list"); l.kontrast.similitudes.forEach(function (s) { var __li = el("li", ""); localizeInto(__li, s, gEx); __ksu.appendChild(__li); }); __ks.appendChild(__ksu); __kb.appendChild(__ks);
      }
      if (l.kontrast.differences && l.kontrast.differences.length) {
        var __kd = el("div", "peda-kontrast-grp"); __kd.appendChild(el("h4", "peda-kontrast-h", "≠ Différences clés"));
        var __kdu = el("ul", "peda-list"); l.kontrast.differences.forEach(function (d) { var __li = el("li", ""); localizeInto(__li, d, gEx); __kdu.appendChild(__li); }); __kd.appendChild(__kdu); __kb.appendChild(__kd);
      }
      gram.appendChild(__kb);
    }
    /* Bloc « plus d'exemples en contexte » (enrichissement) */
    if (l.exemplesPlus && l.exemplesPlus.length) {
      const ep = el("div", "gram-block cours-block exemples-plus");
      const h = el("h3", "cours-titre");
      if (gEx.de) {
        // Immersion B1+ : titre en allemand soigné, jamais traduit.
        h.classList.add("cours-ex-gl-de");
        h.textContent = "💬 " + window.I18N.tIn("de", "more_examples");
      } else {
        localizeInto(h, "💬 Plus d'exemples en contexte", gEx);
      }
      ep.appendChild(h);
      ep.appendChild(buildExemples(l.exemplesPlus, gEx));
      gram.appendChild(ep);
    }
    frag.appendChild(gram);

    /* --- Dialogue (absent pour les leçons de grammaire) --- */
    if (hasDlg) {
    const dlg = el("section", "lesson-section");
    dlg.id = "dlg";
    const dHead = el("div", "ls-head");
    dHead.appendChild(el("h2", "", "💬 Dialogue — " + l.dialogue.titre));
    const playDlg = el("button", "btn btn-ghost small", "🎭 Jouer le dialogue (multi-voix)");
    playDlg.type = "button";
    playDlg.addEventListener("click", () => playDialogue(l.dialogue.lignes));
    dHead.appendChild(playDlg);
    dlg.appendChild(dHead);
    if (l.dialogue.lieu) dlg.appendChild(el("p", "dlg-lieu", "📍 " + l.dialogue.lieu));
    const conv = el("div", "conv");
    l.dialogue.lignes.forEach((line, i) => {
      const row = el("div", "conv-row " + (i % 2 ? "right" : "left"));
      const bubble = el("div", "bubble");
      bubble.appendChild(el("div", "conv-loc", line.loc));
      const deLine = el("div", "conv-de");
      deLine.appendChild(el("span", "", line.de));
      deLine.appendChild(speakButton(line.de));
      bubble.appendChild(deLine);
      bubble.appendChild(el("div", "conv-fr", line.fr));
      row.appendChild(bubble);
      conv.appendChild(row);
    });
    dlg.appendChild(conv);
    frag.appendChild(dlg);
    }

    /* --- Exercices --- */
    const exo = el("section", "lesson-section");
    exo.id = "exo";
    exo.appendChild(el("h2", "", "✍️ Exercices interactifs"));
    const seuil = COURS.seuilLecon || 70;
    exo.appendChild(el("p", "exo-group-sub", "Fais <strong>tous</strong> les exercices pour valider la leçon (la suivante se débloque). Les exercices ratés seront à <strong>refaire avant l'examen du niveau</strong>."));
    const exProg = el("div", "exo-progress");
    const bar = el("div", "bar");
    const fill = el("div", "bar-fill");
    bar.appendChild(fill);
    const label = el("span", "exo-progress-label", "");
    exProg.appendChild(label);
    exProg.appendChild(bar);
    exo.appendChild(exProg);

    // Exercices de la leçon + (si présent) le jeu de rôle avec Zika, exigé lui aussi.
    const allEx = l.exercices.slice();
    if (l.rp && l.rp.tours && l.rp.tours.length) allEx.push({ type: "rp", scene: l.rp.scene, intro: l.rp.intro, tours: l.rp.tours, fin: l.rp.fin, _niveau: l.niveau, _rp: true });
    const total = allEx.length;
    const done = new Set();
    const success = new Set();
    (function () { var sv = (window.Progress.getLecon(l.id) || {}).exercices || {}; Object.keys(sv).forEach(function (k) { var i = +k; if (i >= 0 && i < total) { done.add(i); if (sv[k]) success.add(i); } }); })();
    let completionShown = window.Progress.estTermine(l.id);
    let unlockNext = function () {}; // activé quand la leçon est validée (défini plus bas)
    function refresh() {
      // La leçon suivante se débloque dès que TOUS les exercices sont FAITS.
      // Les exercices ratés (rouge) restent à refaire avant l'examen du niveau (rattrapage).
      const tousJustes = total > 0 && success.size === total;
      const aRevoir = total - success.size;
      label.textContent = success.size + "/" + total + " réussis"
        + (done.size < total ? " · encore " + (total - done.size) + " à faire" : (tousJustes ? " · parfait ✅" : " · " + aRevoir + " à refaire avant l'examen"));
      fill.style.width = total ? (done.size / total) * 100 + "%" : "0%";
      if (done.size === total && total > 0) {
        const score = Math.round((success.size / total) * 100);
        window.Progress.marquerTermine(l.id, score);
        unlockNext();
        if (!completionShown) { completionShown = true; showCompletion(exo, score, idx, true); }
      }
    }

    const groupDefs = {
      comp: ["📖 Exercices de compréhension", "Vérifiez que vous avez bien compris le dialogue et le sens."],
      appro: ["🎯 Exercices approfondis", "Grammaire et application, pour ancrer la leçon."],
      prod: ["✍️ Production écrite & orale", "À votre tour de produire en allemand."],
      rp: ["🎭 Jeu de rôle avec Zika", "Joue la scène : réponds à Zika. S'il te corrige, réessaie — tu vas y arriver !"]
    };
    const groups = {};
    function groupOf(cat) {
      if (!groups[cat]) {
        const g = el("div", "exo-group exo-group-" + cat);
        g.appendChild(el("h3", "exo-group-title", groupDefs[cat][0]));
        g.appendChild(el("p", "exo-group-sub", groupDefs[cat][1]));
        groups[cat] = g;
      }
      return groups[cat];
    }
    allEx.forEach((ex, i) => {
      const node = window.Exercises.render(ex, i, (ok) => {
        done.add(i);
        if (ok) success.add(i);
        else success.delete(i);
        window.Progress.setExercice(l.id, i, ok);
        refresh();
      });
      groupOf(ex._rp ? "rp" : exoCat(ex)).appendChild(node);
    });
    ["comp", "appro", "prod", "rp"].forEach((cat) => { if (groups[cat]) exo.appendChild(groups[cat]); });
    refresh();
    frag.appendChild(exo);

    /* --- Mini-défi : pratique libre (production écrite auto-évaluée) --- */
    let modele = "";
    const gb0 = (l.grammaire || [])[0];
    if (gb0) { const me = mergeExemples(gb0); if (me && me.length) modele = me[0].de; }
    if (!modele && l.dialogue && l.dialogue.lignes && l.dialogue.lignes[0]) modele = l.dialogue.lignes[0].de;
    if (!modele && l.vocabulaire && l.vocabulaire[0] && l.vocabulaire[0].ex) modele = l.vocabulaire[0].ex;
    if (!modele) modele = "Ich lerne Deutsch.";
    const prat = el("section", "lesson-section cours");
    prat.appendChild(el("h2", "", "🎯 À toi de jouer"));
    prat.appendChild(el("p", "exo-group-sub", "Réutilise ce que tu viens d'apprendre : écris tes propres phrases, vérifie, puis compare avec le modèle (auto-évaluation)."));
    const practiceEx = { type: "production", prompt: "Écris 2 ou 3 phrases en allemand en réutilisant « " + l.titre + " ».", attendus: [], modele: modele };
    prat.appendChild(window.Exercises.render(practiceEx, 0, null, {}));
    frag.appendChild(prat);

    /* --- Navigation préc / suiv --- */
    const nav = el("div", "lesson-nav");
    if (idx > 0) {
      const prev = el("a", "btn btn-ghost", "← " + flat[idx - 1].lecon.titre);
      prev.href = "#/lecon/" + flat[idx - 1].lecon.id;
      nav.appendChild(prev);
    } else nav.appendChild(el("span", ""));
    const suite = etapeApresLecon(idx);
    const suiteExamen = /examen/.test(suite);
    const suiteLabel = suiteExamen ? "🎓 Examen du niveau " + flat[idx].lecon.niveau + " →" : flat[idx + 1].lecon.titre + " →";
    // Verrou : on ne passe à la suite qu'une fois la leçon validée
    // (tous les exercices faits + score requis). Pas de saut de leçon.
    const dejaValide = window.Progress.estTermine(l.id);
    const next = el("a", "btn btn-primary" + (dejaValide ? "" : " is-locked"), dejaValide ? suiteLabel : "🔒 Termine tous les exercices");
    if (dejaValide) next.href = suite;
    else next.addEventListener("click", (e) => { e.preventDefault(); document.getElementById("exo") && document.getElementById("exo").scrollIntoView({ behavior: "smooth" }); toast("Fais tous les exercices de la leçon pour débloquer la suite. 💪"); });
    nav.appendChild(next);
    unlockNext = function () {
      next.classList.remove("is-locked");
      next.textContent = suiteLabel;
      next.href = suite;
      if (window.TG) window.TG.setMainButton(suiteExamen ? "🎓 Examen " + flat[idx].lecon.niveau : "Suivant →", () => { location.hash = suite; });
    };
    frag.appendChild(nav);

    app.innerHTML = "";
    app.appendChild(frag);
    window.Progress.touchStreak(window.Progress.load());

    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.closingConfirmation(false);
      if (dejaValide) window.TG.setMainButton(suiteExamen ? "🎓 Examen " + flat[idx].lecon.niveau : "Suivant →", () => { location.hash = suite; });
      else window.TG.setMainButton("🔒 Fais tous les exercices", () => { toast("Fais tous les exercices pour continuer. 💪"); });
    }
    window.scrollTo(0, 0);
  }

  function showCompletion(container, score, idx, passed) {
    const old = container.querySelector(".completion");
    if (old) old.remove();
    const seuil = COURS.seuilLecon || 70;
    const c = el("div", "completion " + (passed ? "ok" : "ko"));

    /* --- Échec : pas assez de points → reprendre --- */
    if (!passed) {
      c.innerHTML =
        '<div class="comp-emoji">📚</div>' +
        "<h3>Presque !</h3>" +
        '<p>Votre score : <span class="comp-score ko">' + score + "%</span> — il faut <strong>" + seuil +
        "%</strong> pour valider la leçon et débloquer la suivante.</p>" +
        "<p>Reprenez les exercices (surtout ceux marqués en rouge) pour gagner les points.</p>";
      const retry = el("button", "btn btn-primary", "🔁 Recommencer la leçon");
      retry.type = "button";
      retry.addEventListener("click", () => renderLecon(flat[idx].lecon.id));
      c.appendChild(retry);
      container.appendChild(c);
      try { localizeUI(app); } catch (e) {}
      if (window.TG) { window.TG.haptic("warning"); window.TG.setMainButton("🔁 Recommencer", () => renderLecon(flat[idx].lecon.id)); }
      c.scrollIntoView({ behavior: "smooth" });
      return;
    }

    /* --- Réussite : leçon validée → passage automatique --- */
    const target = etapeApresLecon(idx);
    const versExamen = /examen/.test(target);
    const cible = versExamen ? "l'examen du niveau " + flat[idx].lecon.niveau + " 🎓" : "la leçon suivante";
    c.innerHTML =
      '<div class="comp-emoji">🎉</div>' +
      "<h3>Leçon validée !</h3>" +
      '<p>Score : <span class="comp-score">' + score + "%</span> — " +
      (score < 100 ? "les exercices ratés seront à refaire avant l'examen. " : "parfait, tout est juste ! ") +
      (versExamen ? "passez l'examen du niveau " + flat[idx].lecon.niveau + " !" : "leçon suivante débloquée !") + "</p>" +
      '<p class="comp-auto">➡️ Ouverture de ' + cible + ' dans <span id="cd">4</span> s…</p>';
    const actions = el("div", "rev-actions");
    const now = el("button", "btn btn-primary", "Continuer maintenant →");
    const stay = el("button", "btn btn-ghost", "Rester ici");
    now.type = stay.type = "button";
    actions.appendChild(now);
    actions.appendChild(stay);
    c.appendChild(actions);
    container.appendChild(c);
    try { localizeUI(app); } catch (e) {}
    if (window.TG) window.TG.haptic("success");

    let n = 4, timer;
    const cd = c.querySelector("#cd");
    const go = () => { clearInterval(timer); location.hash = target; };
    timer = setInterval(() => { n--; if (cd) cd.textContent = n; if (n <= 0) go(); }, 1000);
    now.addEventListener("click", go);
    stay.addEventListener("click", () => {
      clearInterval(timer);
      const a = c.querySelector(".comp-auto");
      if (a) a.textContent = "✅ " + (versExamen ? "Examen débloqué" : "Leçon suivante débloquée") + " — continuez quand vous voulez.";
      now.textContent = "Continuer →";
    });
    c.scrollIntoView({ behavior: "smooth" });
  }

  /* Lecture séquentielle (mots ou dialogue) */
  function playSequence(list) {
    if (!window.Speech || !window.Speech.isSupported()) return;
    let i = 0;
    (function next() {
      if (i >= list.length) return;
      const txt = String(list[i]).replace(/\([^)]*\)/g, "").trim();
      i++;
      // via Speech.speak → profite des voix naturelles (ElevenLabs) si activées
      window.Speech.speak(txt, { rate: 0.9, onend: () => setTimeout(next, 250), onerror: () => setTimeout(next, 250) });
    })();
  }

  /* Lecture d'un dialogue avec une VOIX DIFFÉRENTE par interlocuteur. */
  function playDialogue(lignes) {
    if (!window.Speech || !window.Speech.isSupported()) { return; }
    const voices = (window.Speech.voices && window.Speech.voices()) || [];
    // Attribue à chaque locuteur une voix (ou, à défaut, un timbre/pitch distinct)
    const speakers = [];
    lignes.forEach((l) => { const k = l.loc || "?"; if (speakers.indexOf(k) < 0) speakers.push(k); });
    const profil = {};
    speakers.forEach((k, idx) => {
      const v = voices.length ? voices[idx % voices.length] : null;
      // si peu de voix distinctes, on différencie par le pitch
      const pitch = voices.length > 1 ? 1 : (idx % 2 === 0 ? 0.85 : 1.25);
      profil[k] = { voice: v, pitch: pitch };
    });
    let i = 0;
    function next() {
      if (i >= lignes.length) return;
      const ligne = lignes[i]; i++;
      const txt = String(ligne.de || "").replace(/\([^)]*\)/g, "").trim();
      if (!txt) { return next(); }
      const p = profil[ligne.loc || "?"] || {};
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = "de-DE";
      if (p.voice) u.voice = p.voice;
      u.rate = 0.92;
      u.pitch = p.pitch || 1;
      u.onend = () => setTimeout(next, 320);
      window.speechSynthesis.speak(u);
    }
    window.speechSynthesis.cancel();
    next();
  }

  function buildTable(t) {
    const wrap = el("div", "table-wrap");
    const table = el("table", "gram-table");
    const thead = el("thead");
    const trh = el("tr");
    t.entetes.forEach((h) => trh.appendChild(el("th", "", h)));
    thead.appendChild(trh);
    table.appendChild(thead);
    const tbody = el("tbody");
    t.lignes.forEach((row) => {
      const tr = el("tr");
      row.forEach((cell, ci) => {
        const td = el("td", ci === 0 ? "first" : "");
        td.innerHTML = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    return wrap;
  }

  /* Schémas colorés de structure de phrase (sujet/verbe/complément/fin…) */
  function buildSchemas(schemas) {
    const wrap = el("div", "schemas");
    schemas.forEach((s) => {
      if (s.legende) wrap.appendChild(el("p", "schema-legende", s.legende));
      const row = el("div", "schema-phrase");
      (s.mots || []).forEach((seg) => {
        const box = el("div", "schema-box " + (seg.c || "neutre"));
        box.innerHTML = '<span class="schema-mot">' + seg.m + '</span><span class="schema-role">' + (seg.r || "") + "</span>";
        row.appendChild(box);
      });
      wrap.appendChild(row);
    });
    // Légende des couleurs
    const lg = el("div", "schema-legendecouleur");
    lg.innerHTML =
      '<span class="schema-tag sujet">sujet</span>' +
      '<span class="schema-tag verbe">verbe conjugué</span>' +
      '<span class="schema-tag fin">élément en fin</span>' +
      '<span class="schema-tag conj">connecteur</span>';
    wrap.appendChild(lg);
    return wrap;
  }

  /* ====================================================================
     MODE RÉVISION (répétition espacée — flashcards)
     ==================================================================== */
  /* ====================================================================
     TABLEAU DE BORD — statistiques par compétence
     ==================================================================== */
  function profilCompetences() {
    const K = window.COMPETENCES; if (!K || !window.Progress) return [];
    const agg = {};
    (flat || []).forEach(function (f) {
      const lec = f.lecon; if (!lec) return;
      const codesLec = (lec.competences && lec.competences.length) ? lec.competences : K.of(lec.id);
      if (!codesLec || !codesLec.length) return;
      const lp = window.Progress.getLecon(lec.id);
      (lec.exercices || []).forEach(function (ex, i) {
        if (!(lp.exercices && i in lp.exercices)) return;
        const ok = !!lp.exercices[i];
        var codes = K.forExercice(ex, lec.id); if (!codes || !codes.length) codes = codesLec;
        codes.forEach(function (c) {
          if (c === "lexique" || c === "gram_divers") return;
          agg[c] = agg[c] || { seen: 0, ok: 0 };
          agg[c].seen++; if (ok) agg[c].ok++;
        });
      });
    });
    return Object.keys(agg).map(function (c) {
      const x = agg[c], info = K.info(c);
      return { code: c, seen: x.seen, ok: x.ok, score: x.seen ? x.ok / x.seen : 0, label: info.label, cat: info.cat, niveau: info.niveau };
    }).sort(function (p, q) { return p.score - q.score; });
  }
  function competencesSection() {
    const sec = el("section", "lesson-section");
    sec.appendChild(el("h2", "", "🧩 Mes compétences"));
    const prof = (typeof profilCompetences === "function") ? profilCompetences().filter(function (p) { return p.seen >= 1; }) : [];
    if (!prof.length) {
      sec.appendChild(el("p", "exo-group-sub", "Fais quelques exercices de grammaire et tes points forts / points faibles apparaîtront ici. 🧩"));
      const go = el("a", "btn btn-ghost small", "▶️ Commencer des exercices"); go.href = "#/"; go.style.marginTop = "8px"; sec.appendChild(go);
      return sec;
    }
    const maitrisees = prof.filter(function (p) { return p.seen >= 3 && p.score >= 0.8; });
    const enCours = prof.filter(function (p) { return p.score >= 0.5 && p.score < 0.8; }).length;
    const aRevoir = prof.filter(function (p) { return p.seen >= 2 && p.score < 0.5; });
    const row = el("div", "stats-row");
    [["✅", maitrisees.length, "maîtrisées"], ["📈", enCours, "en cours"], ["⚠️", aRevoir.length, "à revoir"]].forEach(function (t) {
      const c = el("div", "stat");
      c.innerHTML = '<span class="stat-ic">' + t[0] + '</span><span class="stat-n">' + t[1] + '</span><span class="stat-l">' + t[2] + '</span>';
      row.appendChild(c);
    });
    sec.appendChild(row);
    function bar(p) {
      const pct = Math.round(p.score * 100);
      const col = p.score >= 0.8 ? "#16a34a" : (p.score >= 0.5 ? "#d97706" : "#dc2626");
      const line = el("div", "comp-line");
      line.style.cssText = "display:flex;align-items:center;gap:8px;margin:6px 0;font-size:14px";
      line.innerHTML = '<span style="flex:1">' + String(p.label).replace(/&/g, "&amp;") + ' <span style="opacity:.55;font-size:12px">(' + p.niveau + ')</span></span>' +
        '<span style="flex:0 0 90px;height:8px;background:rgba(127,127,127,.2);border-radius:5px;overflow:hidden"><span style="display:block;height:100%;width:' + pct + '%;background:' + col + '"></span></span>' +
        '<span style="flex:0 0 36px;text-align:right;font-weight:700">' + pct + '%</span>';
      return line;
    }
    function subhead(t) { const d = el("div", "", "<strong>" + t + "</strong>"); d.style.cssText = "margin:12px 0 2px;font-size:13px;opacity:.8"; return d; }
    const faibles = (aRevoir.length ? prof.filter(function (p) { return p.seen >= 2; }) : prof).slice(0, 8);
    sec.appendChild(subhead("À renforcer"));
    faibles.forEach(function (p) { sec.appendChild(bar(p)); });
    if (maitrisees.length) {
      sec.appendChild(subhead("Points forts"));
      maitrisees.slice().reverse().slice(0, 5).forEach(function (p) { sec.appendChild(bar(p)); });
    }
    sec.appendChild(el("p", "exo-group-sub", aRevoir.length ? "Travaille en priorité les compétences en rouge/orange." : "Beau travail ! Continue pour consolider."));
    const rev = el("a", "btn btn-ghost small", "🔁 Réviser"); rev.href = "#/revision"; rev.style.marginTop = "8px"; sec.appendChild(rev);
    return sec;
  }

  function renderDashboard() {
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">📊 Mes statistiques</span><a class="btn btn-ghost small dash-home" href="#/">🏠 Accueil</a>';
    frag.appendChild(top);

    const res = window.Progress.resumeGlobal(COURS);
    const srs = window.Revision.stats(COURS);
    const exam = window.Progress.getTestScore("final");

    // Agrégation par compétence (à partir des réponses enregistrées)
    const cats = {
      comp: { a: 0, ok: 0, label: "📖 Compréhension" },
      appro: { a: 0, ok: 0, label: "🎯 Grammaire / Approfondi" },
      prod: { a: 0, ok: 0, label: "✍️ Production" }
    };
    flat.forEach((f) => {
      const lp = window.Progress.getLecon(f.lecon.id);
      (f.lecon.exercices || []).forEach((ex, i) => {
        const cat = exoCat(ex);
        if (lp.exercices && i in lp.exercices) { cats[cat].a++; if (lp.exercices[i]) cats[cat].ok++; }
      });
    });

    const head = el("header", "lesson-head");
    head.innerHTML =
      '<div class="lesson-num">Tableau de bord</div><h1>Ma progression</h1>' +
      '<p class="lesson-theme">Suivi détaillé de ton allemand, de A1 à C2.</p>';
    frag.appendChild(head);

    // Vue d'ensemble
    const cards = el("div", "stats-row");
    [
      ["⭐", calcPoints(), "points (" + rangPoints(calcPoints()) + ")"],
      ["📖", res.faites + "/" + res.total, "leçons validées"],
      ["📈", res.pourcent + "%", "du parcours"],
      ["🔥", res.streak + " j", "série"],
      ["🗂️", srs.apprises + "/" + srs.total, "mots maîtrisés"],
      ["🎓", exam ? exam.meilleur + "%" : "—", "examen final"]
    ].forEach(([ic, n, l]) => {
      const c = el("div", "stat");
      c.innerHTML = '<span class="stat-ic">' + ic + '</span><span class="stat-n">' + n + '</span><span class="stat-l">' + l + "</span>";
      cards.appendChild(c);
    });
    const sec1 = el("section", "lesson-section");
    sec1.appendChild(el("h2", "", "🌍 Vue d'ensemble"));
    sec1.appendChild(cards);
    frag.appendChild(sec1);
    var __cs = competencesSection(); if (__cs) frag.appendChild(__cs);
    var __rs = romanStatsSection(); if (__rs) frag.appendChild(__rs);

    // Temps d'étude (aujourd'hui / semaine / total + 7 derniers jours)
    const st = window.Progress.statsTemps();
    const secT = el("section", "lesson-section");
    secT.appendChild(el("h2", "", "⏱️ Temps d'étude"));
    const goalWrap = el("div", "goal-wrap");
    goalWrap.appendChild(objectifRing());
    const objMin = window.Progress.getReglages().objectifMin || 10;
    const todayMin = Math.round((st.aujourdhui || 0) / 60);
    goalWrap.appendChild(el("div", "goal-text", todayMin >= objMin
      ? "🎉 Objectif du jour atteint (" + objMin + " min) ! Bravo."
      : "Objectif du jour : encore " + (objMin - todayMin) + " min. Tu peux le faire 💪"));
    secT.appendChild(goalWrap);
    const tcards = el("div", "stats-row");
    [["📅", formatDuree(st.aujourdhui), "aujourd'hui"], ["🗓️", formatDuree(st.semaine), "cette semaine"], ["⏳", formatDuree(st.total), "au total"], ["📆", st.joursActifs + " j", "jours actifs"]].forEach((x) => {
      const c = el("div", "stat");
      c.innerHTML = '<span class="stat-ic">' + x[0] + '</span><span class="stat-n">' + x[1] + '</span><span class="stat-l">' + x[2] + "</span>";
      tcards.appendChild(c);
    });
    secT.appendChild(tcards);
    const maxSec = Math.max.apply(null, [60].concat(st.last7.map((d) => d.sec)));
    const chart = el("div", "time-chart");
    st.last7.forEach((d) => {
      const jour = new Date(d.date).toLocaleDateString("fr-FR", { weekday: "short" }).slice(0, 2);
      const h = Math.round((d.sec / maxSec) * 100);
      const col = el("div", "tc-col");
      col.innerHTML = '<div class="tc-bar-wrap"><div class="tc-bar' + (d.sec ? "" : " vide") + '" style="height:' + Math.max(4, h) + '%"></div></div>' +
        '<span class="tc-val">' + (d.sec ? formatDuree(d.sec) : "—") + '</span><span class="tc-day">' + jour + "</span>";
      chart.appendChild(col);
    });
    secT.appendChild(chart);
    secT.appendChild(el("p", "exo-group-sub", "Temps d'étude actif des 7 derniers jours."));
    frag.appendChild(secT);

    // Progression par niveau (A1 → C2)
    const secN = el("section", "lesson-section");
    secN.appendChild(el("h2", "", "📊 Progression par niveau"));
    ORDRE_NIVEAUX.forEach((code) => {
      const lec = flat.filter((f) => f.lecon.niveau === code);
      if (!lec.length) return;
      const done = lec.filter((f) => window.Progress.estTermine(f.lecon.id)).length;
      const pct = Math.round((done / lec.length) * 100);
      const color = (COURS.modules.find((m) => (m.niveau || "A1") === code) || {}).couleur || "#2563eb";
      const row = el("div", "stat-bar");
      row.innerHTML =
        '<div class="stat-bar-head"><span>' + code + " — " + (NIVEAU_LABELS[code] || "") + "</span><span>" + done + "/" + lec.length + " leçons</span></div>" +
        '<div class="bar"><div class="bar-fill" style="width:' + pct + "%;background:" + color + '"></div></div>';
      secN.appendChild(row);
    });
    frag.appendChild(secN);

    // Réussite par compétence
    const sec2 = el("section", "lesson-section");
    sec2.appendChild(el("h2", "", "🎯 Réussite par compétence"));
    Object.keys(cats).forEach((k) => {
      const c = cats[k];
      const pct = c.a ? Math.round((c.ok / c.a) * 100) : 0;
      const row = el("div", "stat-bar");
      row.innerHTML =
        '<div class="stat-bar-head"><span>' + c.label + "</span><span>" +
        (c.a ? pct + "% (" + c.ok + "/" + c.a + ")" : "pas encore") + "</span></div>" +
        '<div class="bar"><div class="bar-fill" style="width:' + pct + '%"></div></div>';
      sec2.appendChild(row);
    });
    sec2.appendChild(el("p", "exo-group-sub", "Calculé à partir de vos réponses aux exercices. Refaites une leçon pour améliorer un score."));
    frag.appendChild(sec2);
    /* 3.5 Suivi visible : maitrise par competence fine (Adaptatif.competenceScores) */
    if (window.Adaptatif && window.COMPETENCES && window.Adaptatif.competenceScores) {
      var __cs = window.Adaptatif.competenceScores(COURS);
      var __codes = Object.keys(__cs).filter(function (c) { return __cs[c].a > 0; });
      if (__codes.length) {
        var __nM = 0, __nC = 0, __nR = 0;
        __codes.forEach(function (c) { var r = __cs[c].rate; if (r >= 0.85) __nM++; else if (r >= 0.67) __nC++; else __nR++; });
        var secCF = el("section", "lesson-section");
        secCF.appendChild(el("h2", "", "🧩 Compétences détaillées"));
        secCF.appendChild(el("p", "exo-group-sub", "<b>" + __nM + "</b> maîtrisées · <b>" + __nC + "</b> en cours · <b>" + __nR + "</b> à revoir"));
        var __cats = {};
        __codes.forEach(function (c) { var cat = window.COMPETENCES.info(c).cat || "Autre"; (__cats[cat] = __cats[cat] || []).push(c); });
        Object.keys(__cats).sort().forEach(function (cat) {
          secCF.appendChild(el("div", "stats-niv-sep", cat));
          __cats[cat].sort(function (a, b) { return __cs[a].rate - __cs[b].rate; }).forEach(function (c) {
            var s = __cs[c], p = Math.round(s.rate * 100);
            var col = s.rate >= 0.85 ? "#16a34a" : (s.rate >= 0.67 ? "#f59e0b" : "#dc2626");
            var row = el("div", "stat-bar");
            row.innerHTML = '<div class="stat-bar-head"><span>' + escapeHtml(window.COMPETENCES.label(c)) + '</span><span>' + p + "% (" + s.ok + "/" + s.a + ")</span></div>" + '<div class="bar"><div class="bar-fill" style="width:' + p + "%;background:" + col + '"></div></div>';
            secCF.appendChild(row);
          });
        });
        secCF.appendChild(el("p", "exo-group-sub", "Maîtrise calculée à partir de tes réponses (vert ≥ 85 %, orange ≥ 67 %, rouge à revoir). Refais une leçon pour progresser."));
        frag.appendChild(secCF);
      }
    }

    // Examens du parcours
    const secE = el("section", "lesson-section");
    secE.appendChild(el("h2", "", "🎓 Examens"));
    const exGrid = el("div", "exam-stats");
    COURS.examens.forEach((e) => {
      const t = window.Progress.getTestScore(e.id);
      const cell = el("div", "exam-stat " + (t && t.reussi ? "ok" : t ? "part" : "todo"));
      cell.innerHTML =
        '<span class="es-niv">' + e.niveau + '</span><span class="es-score">' + (t ? t.meilleur + "%" : "—") + "</span>" +
        '<span class="es-etat">' + (t ? (t.reussi ? "✅ réussi" : "à retenter") : "à passer") + "</span>";
      exGrid.appendChild(cell);
    });
    secE.appendChild(exGrid);
    frag.appendChild(secE);

    // Points faibles repérés au test de placement
    const faibles = window.Progress.getFaiblesses();
    if (faibles && faibles.length) {
      const secF = el("section", "section");
      const tc = el("div", "zika-conseil");
      tc.innerHTML = '<span class="cours-tag">💡 À travailler (d\'après ton test)</span><div>' + faibles.map(escapeHtml).join(", ") +
        '</div><a class="btn btn-ghost small" href="#/revision" style="margin-top:10px">🔁 Réviser</a>';
      secF.appendChild(tc);
      frag.appendChild(secF);
    }

    // Détail des leçons
    const sec3 = el("section", "lesson-section");
    sec3.appendChild(el("h2", "", "📚 Détail des leçons"));
    const list = el("div", "stats-lecons");
    let curNivDetail = null;
    flat.forEach((f, idx) => {
      if (f.lecon.niveau !== curNivDetail) {
        curNivDetail = f.lecon.niveau;
        list.appendChild(el("div", "stats-niv-sep", "Niveau " + curNivDetail));
      }
      const lp = window.Progress.getLecon(f.lecon.id);
      const done = window.Progress.estTermine(f.lecon.id);
      const unlocked = isUnlocked(idx);
      let etat, cls;
      if (done) { etat = "✅ validée · " + (lp.score || 0) + "%"; cls = "ok"; }
      else if (!unlocked) { etat = "🔒 verrouillée"; cls = "lock"; }
      else { etat = "▶️ à faire"; cls = "todo"; }
      const row = el(unlocked ? "a" : "div", "stats-lecon " + cls);
      if (unlocked) row.href = "#/lecon/" + f.lecon.id;
      row.innerHTML =
        '<span class="sl-num">' + f.lecon.numero + '</span><span class="sl-titre">' + f.lecon.titre +
        '</span><span class="sl-etat">' + etat + "</span>";
      list.appendChild(row);
    });
    sec3.appendChild(list);
    frag.appendChild(sec3);

    // Badges / récompenses
    const bg = badgesGagnes();
    const secB = el("section", "lesson-section");
    secB.appendChild(el("h2", "", "🏅 Badges (" + bg.filter((x) => x.gagne).length + "/" + BADGES.length + ")"));
    const bgrid = el("div", "badge-grid");
    bg.forEach((x) => {
      const cell = el("div", "badge " + (x.gagne ? "on" : "off"));
      cell.innerHTML = '<span class="badge-ic">' + (x.gagne ? x.b.ic : "🔒") + '</span><span class="badge-t">' + x.b.t + '</span><span class="badge-d">' + x.b.d + "</span>";
      bgrid.appendChild(cell);
    });
    secB.appendChild(bgrid);
    frag.appendChild(secB);

    // Niveaux validés (certificats)
    const secL = el("section", "lesson-section");
    secL.appendChild(el("h2", "", "🎖️ Niveaux validés"));
    const lgrid = el("div", "niv-grid");
    niveauxValides().forEach((n) => {
      const cell = el("div", "niv-cert " + (n.valide ? "on" : "off"));
      cell.innerHTML = '<span class="nc-medal">' + (n.valide ? "🎖️" : "🔒") + '</span><span class="nc-code">' + n.code + '</span><span class="nc-lab">' + (n.valide ? "Validé" : "À valider") + "</span>";
      if (n.valide) {
        const sh = el("button", "btn-link nc-share", "Partager");
        sh.type = "button";
        sh.addEventListener("click", () => partager("🎉 J'ai validé le niveau " + n.code + " en allemand avec le coach Zika ! 🇩🇪 À ton tour 👇"));
        cell.appendChild(sh);
      }
      lgrid.appendChild(cell);
    });
    secL.appendChild(lgrid);
    frag.appendChild(secL);

    // Partage & amis
    const secP = el("section", "lesson-section");
    secP.appendChild(el("h2", "", "📤 Partage & amis"));
    const prow = el("div", "share-row");
    const shareBtn = el("button", "btn btn-primary", "📣 Partager ma progression");
    shareBtn.type = "button"; shareBtn.addEventListener("click", partagerProgression);
    const inviteBtn = el("button", "btn btn-ghost", "👥 Inviter des amis");
    inviteBtn.type = "button"; inviteBtn.addEventListener("click", inviterAmis);
    const exportBtn = el("button", "btn btn-ghost", "⬇️ Exporter ma sauvegarde");
    exportBtn.type = "button"; exportBtn.addEventListener("click", exporterProgression);
    prow.appendChild(shareBtn); prow.appendChild(inviteBtn); prow.appendChild(exportBtn);
    secP.appendChild(prow);
    secP.appendChild(el("p", "exo-group-sub", "Partage tes progrès ou invite un ami. « Exporter » télécharge une sauvegarde de ta progression (fichier .json)."));
    frag.appendChild(secP);

    // Réglages : objectif quotidien + thème + rappel
    const secR = el("section", "lesson-section");
    secR.appendChild(el("h2", "", "⚙️ Réglages"));
    const objRow = el("div", "setting-row");
    objRow.appendChild(el("span", "setting-label", "🎯 Objectif quotidien (minutes)"));
    const objCtrl = el("div", "setting-ctrl");
    const objInput = el("input", "time-input num");
    objInput.type = "number"; objInput.min = "1"; objInput.max = "240"; objInput.step = "5";
    objInput.value = window.Progress.getReglages().objectifMin || 10;
    objInput.addEventListener("change", () => { const v = Math.max(1, Math.min(240, parseInt(objInput.value, 10) || 10)); window.Progress.setReglages({ objectifMin: v }); objInput.value = v; toast("🎯 Objectif : " + v + " min/jour"); });
    objCtrl.appendChild(objInput);
    objRow.appendChild(objCtrl);
    secR.appendChild(objRow);
    if (window.I18N) {
      const langRow = el("div", "setting-row");
      langRow.appendChild(el("span", "setting-label", "🌐 " + window.I18N.t("language")));
      const langCtrl = el("div", "setting-ctrl");
      const li = window.I18N.info();
      const langBtn = el("button", "btn btn-ghost small", li.f + " " + li.n);
      langBtn.type = "button";
      langBtn.addEventListener("click", () => { location.hash = "#/langue"; });
      langCtrl.appendChild(langBtn);
      langRow.appendChild(langCtrl);
      secR.appendChild(langRow);
    }
    const themeRow = el("div", "setting-row");
    themeRow.appendChild(el("span", "setting-label", "🎨 Thème de l'application"));
    const themeSel = el("button", "btn btn-ghost small", Theme.label());
    themeSel.type = "button";
    themeSel.addEventListener("click", () => { Theme.cycle(); themeSel.textContent = Theme.label(); });
    themeRow.appendChild(themeSel);
    secR.appendChild(themeRow);

    const rg = window.Progress.getReglages();
    const remRow = el("div", "setting-row");
    remRow.appendChild(el("span", "setting-label", "⏰ Rappel quotidien"));
    const ctrl = el("div", "setting-ctrl");
    const timeInput = el("input", "time-input");
    timeInput.type = "time"; timeInput.value = rg.rappelHeure || "19:00";
    timeInput.addEventListener("change", () => { window.Progress.setReglages({ rappelHeure: timeInput.value }); Reminders.syncState(); });
    const toggle = el("button", "btn btn-ghost small", rg.rappel ? "✅ Activé" : "Activer");
    toggle.type = "button";
    toggle.addEventListener("click", async () => {
      if (window.Progress.getReglages().rappel) { Reminders.disable(); toggle.textContent = "Activer"; }
      else { toggle.textContent = "…"; const ok = await Reminders.enable(); toggle.textContent = ok ? "✅ Activé" : "Refusé"; }
    });
    ctrl.appendChild(timeInput); ctrl.appendChild(toggle);
    remRow.appendChild(ctrl);
    secR.appendChild(remRow);
    secR.appendChild(el("p", "exo-group-sub", Reminders.supported()
      ? "Zika t'enverra un rappel chaque jour à l'heure choisie (par le bot Telegram, ou en notification si tu as installé l'app). Tu peux le désactiver quand tu veux."
      : "Les notifications ne sont pas disponibles sur ce navigateur."));
    frag.appendChild(secR);

    const nav = el("div", "lesson-nav lesson-nav-3");
    const aHome = el("a", "btn btn-ghost", "🏠 Accueil");
    aHome.href = "#/";
    nav.appendChild(aHome);
    const a1 = el("a", "btn btn-ghost", "🔁 Réviser le vocabulaire");
    a1.href = "#/revision";
    nav.appendChild(a1);
    const etapeDash = prochaineEtape();
    const a2 = el("a", "btn btn-primary", etapeDash === "#/" ? "✅ Terminé" : /examen/.test(etapeDash) ? "🎓 Passer l'examen" : "▶ Continuer");
    a2.href = etapeDash;
    nav.appendChild(a2);
    frag.appendChild(nav);

    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.hideMainButton();
      window.TG.closingConfirmation(false);
    }
    window.scrollTo(0, 0);
  }

  function renderRevision() {
    const cards = window.Revision.getDue(COURS, window.Revision.SESSION_MAX);
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">🔁 Révision espacée</span>';
    frag.appendChild(top);
    const wrap = el("section", "revision");
    frag.appendChild(wrap);
    app.innerHTML = "";
    app.appendChild(frag);
    window.scrollTo(0, 0);
    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.hideMainButton();
      window.TG.closingConfirmation(false);
    }

    if (!cards.length) {
      wrap.innerHTML =
        '<div class="revision-empty"><div class="comp-emoji">🎉</div>' +
        "<h2>Tout est à jour !</h2>" +
        "<p>Aucune carte à réviser pour l'instant. La répétition espacée vous proposera de nouvelles cartes plus tard.</p>" +
        '<a class="btn btn-primary" href="#/">Retour à l\'aperçu</a></div>';
      return;
    }

    let i = 0,
      known = 0,
      unknown = 0;

    function showSummary() {
      wrap.innerHTML =
        '<div class="revision-empty"><div class="comp-emoji">✅</div>' +
        '<h2>Session terminée !</h2>' +
        '<p class="rev-summary"><span class="su">' + known + ' sue(s)</span> · <span class="arev">' + unknown + ' à revoir</span></p>' +
        '<p>Les cartes réussies reviendront plus tard, celles à revoir très bientôt.</p>' +
        '<div class="rev-actions"><a class="btn btn-ghost" href="#/">Retour à l\'aperçu</a>' +
        '<button class="btn btn-primary" id="rev-again">Réviser encore</button></div></div>';
      const again = document.getElementById("rev-again");
      if (again) again.addEventListener("click", renderRevision);
    }

    function showCard() {
      if (i >= cards.length) return showSummary();
      const c = cards[i];
      wrap.innerHTML = "";
      const head = el("div", "revision-head");
      head.innerHTML = "<span>Carte " + (i + 1) + " / " + cards.length + "</span><span>Leçon " + c.lecon + "</span>";
      wrap.appendChild(head);
      const bar = el("div", "bar");
      const fill = el("div", "bar-fill");
      fill.style.width = (i / cards.length) * 100 + "%";
      bar.appendChild(fill);
      wrap.appendChild(bar);

      const fc = el("div", "flashcard");
      const front = el("div", "fc-front");
      const deRow = el("div", "fc-de");
      deRow.appendChild(el("span", "", c.de));
      deRow.appendChild(speakButton(c.de));
      front.appendChild(deRow);
      front.appendChild(el("p", "fc-hint", "Que signifie ce mot ?"));
      fc.appendChild(front);

      const back = el("div", "fc-back hidden");
      back.appendChild(el("div", "fc-fr", c.fr));
      if (c.ex) back.appendChild(el("p", "fc-ex", "« " + c.ex + " »"));
      fc.appendChild(back);
      wrap.appendChild(fc);

      const flip = el("button", "btn btn-primary big", "🔄 Retourner la carte");
      flip.type = "button";
      const rateRow = el("div", "rev-rate hidden");
      const koBtn = el("button", "btn-self ko big", "❌ Je ne savais pas");
      const okBtn = el("button", "btn-self ok big", "✅ Je savais");
      koBtn.type = okBtn.type = "button";
      rateRow.appendChild(koBtn);
      rateRow.appendChild(okBtn);

      flip.addEventListener("click", () => {
        back.classList.remove("hidden");
        flip.classList.add("hidden");
        rateRow.classList.remove("hidden");
        if (window.TG) window.TG.haptic("selection");
      });
      okBtn.addEventListener("click", () => {
        window.Revision.rate(c.id, true);
        if (window.TG) window.TG.haptic("success");
        known++;
        i++;
        showCard();
      });
      koBtn.addEventListener("click", () => {
        window.Revision.rate(c.id, false);
        if (window.TG) window.TG.haptic("light");
        unknown++;
        i++;
        showCard();
      });
      wrap.appendChild(flip);
      wrap.appendChild(rateRow);

      // Immersion : prononce le mot allemand à l'affichage
      if (window.Speech && window.Speech.isSupported()) window.Speech.speak(c.de);
    }

    showCard();
  }

  /* ====================================================================
     TEST DE FIN DE MODULE (noté)
     ==================================================================== */
  function pickExamCoverage(poolE, N, niveaux) {
    var sh = window.Exercises.shuffle;
    var allEx = poolE.map(function (p) { return p.ex; });
    if (!window.COMPETENCES || !poolE.length) return sh(allEx).slice(0, N);
    var byComp = {};
    poolE.forEach(function (p) { (p.comps || []).forEach(function (c) { (byComp[c] = byComp[c] || []).push(p.ex); }); });
    var comps = Object.keys(byComp);
    if (!comps.length) return sh(allEx).slice(0, N);
    comps.sort(function (a, b) {
      var pa = niveaux.indexOf(window.COMPETENCES.niveau(a)) >= 0 ? 0 : 1;
      var pb = niveaux.indexOf(window.COMPETENCES.niveau(b)) >= 0 ? 0 : 1;
      if (pa !== pb) return pa - pb;
      return byComp[b].length - byComp[a].length;
    });
    var quota = Math.min(comps.length, Math.floor(N / 2));
    var chosen = [], used = [];
    function isUsed(ex) { return used.indexOf(ex) >= 0; }
    for (var i = 0; i < comps.length && chosen.length < quota; i++) {
      var cand = sh(byComp[comps[i]]);
      for (var k = 0; k < cand.length; k++) { if (!isUsed(cand[k])) { chosen.push(cand[k]); used.push(cand[k]); break; } }
    }
    var rest = sh(allEx);
    for (var j = 0; j < rest.length && chosen.length < N; j++) { if (!isUsed(rest[j])) { chosen.push(rest[j]); used.push(rest[j]); } }
    return sh(chosen).slice(0, N);
  }

  function renderTest(key) {
    // key ∈ a1 | a2 | final | b1 | b2 | finalb | c1 | c2 | finalc — examens du parcours
    const POOLS = { a1: ["A1"], a2: ["A2"], final: ["A1", "A2"], b1: ["B1"], b2: ["B2"], finalb: ["B1", "B2"], c1: ["C1"], c2: ["C2"], finalc: ["C1", "C2"] };
    const GUARD = {
      a1: () => niveauTermine("A1"),
      a2: () => examPasse("a1") && niveauTermine("A2"),
      final: () => examPasse("a2"),
      b1: () => examPasse("final") && niveauTermine("B1"),
      b2: () => examPasse("b1") && niveauTermine("B2"),
      finalb: () => examPasse("b2"),
      c1: () => examPasse("finalb") && niveauTermine("C1"),
      c2: () => examPasse("c1") && niveauTermine("C2"),
      finalc: () => examPasse("c2")
    };
    const TITRE = { a1: "Examen du niveau A1", a2: "Examen du niveau A2", final: "Examen final A1 + A2", b1: "Examen du niveau B1", b2: "Examen du niveau B2", finalb: "Examen B1 + B2", c1: "Examen du niveau C1", c2: "Examen du niveau C2", finalc: "Examen C1 + C2" };
    const COULEUR = { a1: "#1d4ed8", a2: "#0e7490", final: "#7c3aed", b1: "#9333ea", b2: "#db2777", finalb: "#7c3aed", c1: "#ea580c", c2: "#047857", finalc: "#047857" };
    if (!POOLS[key] || !GUARD[key]()) { location.hash = "#/"; return; }

    const niveaux = POOLS[key];
    const lecons = flat.filter((f) => niveaux.indexOf(f.lecon.niveau) >= 0).map((f) => f.lecon);
    const titre = TITRE[key];
    const couleur = COULEUR[key];

    const poolE = [];
    lecons.forEach((l) => { const comps = ((window.COMPETENCES && (l.competences && l.competences.length ? l.competences : window.COMPETENCES.of(l.id))) || []).filter((c) => c !== "lexique" && c !== "gram_divers"); l.exercices.forEach((ex) => { if (window.Exercises.GRADABLE.indexOf(ex.type) >= 0) poolE.push({ ex: ex, comps: comps }); }); });
    const N = Math.min(key === "a1" || key === "a2" ? 20 : key === "b1" ? 25 : 30, poolE.length);
    const chosen = pickExamCoverage(poolE, N, niveaux);

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">🎓 ' + titre + "</span>";
    frag.appendChild(top);

    const head = el("header", "test-head");
    head.style.setProperty("--mod-color", couleur);
    head.innerHTML =
      '<div class="lesson-num">' + titre + "</div><h1>Évaluation notée</h1>" +
      "<p>" + N + " questions · seuil de réussite : <strong>" + COURS.seuilReussite +
      "%</strong>. Répondez à tout, puis cliquez sur « Terminer ». Les corrections s'afficheront à la fin.</p>";
    frag.appendChild(head);

    const list = el("div", "test-list");
    const nodes = [];
    chosen.forEach((ex, i) => {
      const node = window.Exercises.render(ex, i, null, { testMode: true, label: "Question " + (i + 1) });
      nodes.push(node);
      list.appendChild(node);
    });
    frag.appendChild(list);

    const result = el("div", "test-result hidden");
    const submit = el("button", "btn btn-primary big", "Terminer l'examen");
    submit.type = "button";
    const submitRow = el("div", "test-submit");
    submitRow.appendChild(submit);
    frag.appendChild(submitRow);
    frag.appendChild(result);

    function messageReussite() {
      if (key === "a1") return "🎉 Examen A1 réussi ! Le <strong>niveau A2</strong> est débloqué.";
      if (key === "a2") return "🎉 Examen A2 réussi ! L'<strong>examen final A1 + A2</strong> est débloqué.";
      if (key === "final") return "🚀 Bravo ! Vous validez <strong>A1 + A2</strong> — le <strong>niveau B1</strong> est débloqué !";
      if (key === "b1") return "🚀 Magnifique ! Vous validez le <strong>niveau B1</strong> — le <strong>niveau B2</strong> est débloqué !";
      if (key === "b2") return "🎓 Bravo ! L'<strong>examen B1 + B2</strong> est débloqué !";
      if (key === "finalb") return "🚀 Excellent ! Vous validez <strong>B1 + B2</strong> — le <strong>niveau C1</strong> est débloqué !";
      if (key === "c1") return "🏆 Exceptionnel ! Vous validez le <strong>niveau C1</strong> — le <strong>niveau C2</strong> est débloqué !";
      if (key === "c2") return "🎓 Superbe ! L'<strong>examen final C1 + C2</strong> est débloqué !";
      return "🏆 Chapeau ! Vous avez achevé <strong>tout le Cadre européen, de A1 à C2</strong>. Respekt!";
    }

    submit.addEventListener("click", () => {
      let correct = 0, wrong = 0, blank = 0;
      nodes.forEach((node) => { const res = node._grade(true); if (res.ok === true) correct++; else if (res.ok === false) wrong++; else blank++; });
      const score = Math.round((correct / N) * 100);
      const reussi = score >= COURS.seuilReussite;
      window.Progress.setTestScore(key, score, reussi);
      const suite =
        (key === "a1" || key === "final" || key === "b1" || key === "finalb" || key === "c1") ? prochaineEtape()
        : key === "a2" ? "#/examen/final"
        : key === "b2" ? "#/examen/finalb"
        : key === "c2" ? "#/examen/finalc"
        : "#/";

      result.className = "test-result " + (reussi ? "pass" : "fail");
      result.innerHTML =
        '<div class="score-ring ' + (reussi ? "pass" : "fail") + '"><span>' + score + "%</span></div>" +
        "<h2>" + (reussi ? "🎓 " + titre + " réussi !" : "📚 Encore un effort") + "</h2>" +
        '<p class="score-detail">✓ ' + correct + " correct(s) · ✗ " + wrong + " erreur(s)" + (blank ? " · ⊘ " + blank + " sans réponse" : "") + "</p>" +
        "<p>" + (reussi ? messageReussite() : "Il faut " + COURS.seuilReussite + "%. Revoyez les questions en rouge, révisez, puis recommencez.") + "</p>" +
        '<div class="rev-actions">' +
        (reussi && suite !== "#/" ? '<a class="btn btn-primary" href="' + suite + '">Continuer →</a>' : '<a class="btn btn-primary" href="#/">Retour à l\'aperçu</a>') +
        '<a class="btn btn-ghost" href="#/revision">🔁 Réviser</a>' +
        '<button class="btn btn-ghost" id="test-again">Recommencer</button>' +
        "</div>";
      result.classList.remove("hidden");
      submit.disabled = true;
      submit.textContent = "Examen terminé";
      const again = document.getElementById("test-again");
      if (again) again.addEventListener("click", () => renderTest(key));
      if (window.TG) {
        window.TG.haptic(reussi ? "success" : "warning");
        window.TG.closingConfirmation(false);
        if (reussi && suite !== "#/") window.TG.setMainButton("Continuer →", () => { location.hash = suite; });
        else window.TG.setMainButton("Retour à l'aperçu", () => { location.hash = "#/"; });
      }
      result.scrollIntoView({ behavior: "smooth" });
    });

    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.closingConfirmation(true);
      window.TG.setMainButton("Terminer l'examen", () => submit.click());
    }
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     EXAMEN DELF A2 — simulation officielle, correction différée (24 h)
     4 épreuves chronométrées et séquencées (CO, CE, EE, EO), notées /25.
     Aucune correction pendant l'examen ; la copie est remise au serveur,
     corrigée par l'IA après 24 h, puis le résultat + PDF reviennent ici.
     ==================================================================== */
  function delfInitData() { try { return (window.TG && window.TG.tg && window.TG.tg.initData) || ""; } catch (e) { return ""; } }
  function delfData(code) { return window["DELF_" + String(code).toUpperCase()]; }
  function delfName(code) { return code === "final" ? "A1 + A2 (combiné)" : String(code).toUpperCase(); }
  function delfLocalGet(code) { try { return JSON.parse(localStorage.getItem("delf_" + code) || "null"); } catch (e) { return null; } }
  function delfLocalSet(code, o) { try { localStorage.setItem("delf_" + code, JSON.stringify(o || {})); } catch (e) {} }
  /* Brouillon d'examen EN COURS : sauvegardé après chaque épreuve terminée, pour
     reprise après fermeture/déconnexion. Effacé à la remise de la copie. */
  function examDraftGet(key) { try { return JSON.parse(localStorage.getItem("draft_" + key) || "null"); } catch (e) { return null; } }
  function examDraftSet(key, o) { try { localStorage.setItem("draft_" + key, JSON.stringify(o || {})); } catch (e) {} }
  function examDraftClear(key) { try { localStorage.removeItem("draft_" + key); } catch (e) {} }
  function examResume(brand, label, onResume, onRestart) {
    app.innerHTML = ""; const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top"); top.innerHTML = '<a class="btn-link" href="#/">← Aperçu</a><span class="lesson-top-mod">' + brand + "</span>"; frag.appendChild(top);
    const c = el("div", "completion ok");
    c.innerHTML = '<div class="comp-emoji">⏸️</div><h2>Reprendre l\'examen ?</h2><p>Vous avez un examen en cours' + (label ? " (" + label + ")" : "") + '. Vous pouvez reprendre là où vous vous êtes arrêté(e), ou tout recommencer. <strong>Vos épreuves déjà terminées sont conservées.</strong></p>';
    const row = el("div", "rev-actions");
    const b1 = el("button", "btn btn-primary", "▶️ Reprendre"); b1.type = "button"; b1.addEventListener("click", onResume);
    const b2 = el("button", "btn btn-ghost", "↺ Recommencer"); b2.type = "button"; b2.addEventListener("click", onRestart);
    row.appendChild(b1); row.appendChild(b2); c.appendChild(row); frag.appendChild(c); app.appendChild(frag);
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/"; }); window.TG.setMainButton("▶️ Reprendre", onResume); } catch (e) {} }
    window.scrollTo(0, 0);
  }
  function delfGuardOK(code) { if (code === "a1") return niveauTermine("A1"); if (code === "a2") return examPasse("a1") && niveauTermine("A2"); if (code === "final") return examPasse("a2"); return false; }
  function delfEsc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function delfFmt(s) { return delfEsc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>"); }

  /* =====================  ROMANS ÉDUCATIFS (bibliothèque)  =====================
     Un roman par niveau (A1→C2), sans images, découpé en chapitres et paginé
     automatiquement (~1 écran = 1 page ; 50+ pages par roman). Les mots
     importants sont colorés (bleu = der, rose = die, vert = das, violet =
     autres) et expliqués en bas de page dans la langue de l'utilisateur.
     Syntaxe dans le texte : [[forme affichée|forme de base|explication fr]]
     ou [[mot|explication fr]]. */
  const ROMAN_ORDER = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const ROMAN_EMOJI = { a1: "📕", a2: "📗", b1: "📘", b2: "📙", c1: "📔", c2: "📒" };
  const ROMAN_RATE = { a1: 0.85, a2: 0.9, b1: 0.95, b2: 1, c1: 1, c2: 1 };
  const ROMAN_PAGE_CHARS = 1200;
  const ROMAN_GLOSS_RE = /\[\[([^\]|]+)\|([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  function romanData(code) { return window["ROMAN_" + String(code || "").toUpperCase()] || null; }
  function romanUnlocked(code) {
    const req = { a1: null, a2: "a1", b1: "final", b2: "b1", c1: "finalb", c2: "c1" }[code];
    return !req || examPasse(req);
  }
  function romanLockText(code) {
    const t = { a2: "l'examen A1", b1: "l'examen final A1 + A2", b2: "l'examen B1", c1: "l'examen B1 + B2", c2: "l'examen C1" }[code];
    return t ? "🔒 Réussissez " + t + " pour ouvrir ce roman." : "";
  }
  function romanEtatGet(code) { try { return JSON.parse(localStorage.getItem("roman_" + code) || "{}"); } catch (e) { return {}; } }
  function romanEtatSet(code, o) { try { localStorage.setItem("roman_" + code, JSON.stringify(o || {})); } catch (e) {} }
  function romanPlain(s) { return String(s || "").replace(ROMAN_GLOSS_RE, "$1"); }
  /* Pagination : les paragraphes d'un chapitre sont regroupés en pages
     d'environ ROMAN_PAGE_CHARS caractères ; une page ne mélange jamais
     deux chapitres (comme dans un vrai livre). */
  function romanPages(R) {
    if (R.__pages) return R.__pages;
    const pages = [];
    (R.chapitres || []).forEach(function (ch, ci) {
      const paras = String(ch.texte || "").split(/\n\s*\n/).map(function (s) { return s.trim(); }).filter(Boolean);
      let cur = [], len = 0;
      paras.forEach(function (p) {
        const l = romanPlain(p).length;
        if (cur.length && len + l > ROMAN_PAGE_CHARS) { pages.push({ ch: ci, paras: cur, debut: false }); cur = []; len = 0; }
        cur.push(p); len += l;
      });
      if (cur.length) pages.push({ ch: ci, paras: cur, debut: false });
    });
    let prev = -1;
    pages.forEach(function (p) { p.debut = p.ch !== prev; prev = p.ch; });
    R.__pages = pages;
    return pages;
  }
  function romanGenreCls(base) {
    if (/^der\s/.test(base)) return "g-der";
    if (/^die\s/.test(base)) return "g-die";
    if (/^das\s/.test(base)) return "g-das";
    return "g-x";
  }
  /* Explications de bas de page : stockées en français, traduites à la volée
     dans la langue de l'utilisateur (même en immersion B1+ : le vocabulaire
     doit rester compréhensible — demande explicite). */
  function romanLocalizeNotes(box) {
    const lang = window.I18N && window.I18N.lang && window.I18N.lang();
    if (!lang || lang === "fr" || !window.I18N.translate) return;
    box.querySelectorAll(".roman-fn-tr, .roman-tr").forEach(function (s) {
      const fr = s.textContent;
      window.I18N.translate(fr, lang, "fr").then(function (out) { if (out && out !== fr) s.textContent = out; });
    });
  }

  /* ---- Vocabulaire d'un roman (pour les quiz) ---- */
  function romanGloss(texte) {
    const out = [], seen = {};
    String(texte || "").replace(ROMAN_GLOSS_RE, function (m, a, b, c) {
      const base = (c ? b : a).trim(), expl = (c ? c : b).trim(), key = base.toLowerCase();
      if (!seen[key]) { seen[key] = 1; out.push({ base: base, expl: expl }); }
      return m;
    });
    return out;
  }
  function romanChapterGloss(R, ci) { return romanGloss(((R.chapitres || [])[ci] || {}).texte); }
  function romanAllGloss(R) {
    const seen = {}, out = [];
    (R.chapitres || []).forEach(function (ch) { romanGloss(ch.texte).forEach(function (g) { const k = g.base.toLowerCase(); if (!seen[k]) { seen[k] = 1; out.push(g); } }); });
    return out;
  }
  function romanShuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* Quiz de vocabulaire en fin de chapitre : QCM « mot allemand → sens »,
     construit à partir des mots glosés du chapitre (distracteurs tirés du
     reste du roman). Sens affichés dans la langue de l'utilisateur. */
  function renderRomanQuiz(code, ci) {
    const R = romanData(code); if (!R || !romanUnlocked(code)) { location.hash = "#/romans"; return; }
    const ch = (R.chapitres || [])[ci] || {};
    const pool = romanChapterGloss(R, ci), distract = romanAllGloss(R);
    if (pool.length < 3) { renderRoman(code); return; }
    const qs = romanShuffle(pool).slice(0, Math.min(8, pool.length));
    app.innerHTML = ""; const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/romans/' + code + '">← Lecture</a><span class="lesson-top-mod">🧩 Quiz · ' + R.niveau + "</span>";
    frag.appendChild(top);
    const head = el("header", "roman-head");
    head.innerHTML = '<div class="lesson-num loc-keep">' + delfEsc(ch.titre || "") + '</div><h1>🧩 Quiz de vocabulaire</h1><p>Touchez la bonne traduction. ' + qs.length + " mots de ce chapitre.</p>";
    frag.appendChild(head);
    const form = el("div", "roman-quiz"); frag.appendChild(form);
    const items = qs.map(function (q) {
      const wrongs = romanShuffle(distract.filter(function (g) { return g.base.toLowerCase() !== q.base.toLowerCase() && g.expl !== q.expl; })).slice(0, 3);
      const opts = romanShuffle([{ expl: q.expl, ok: true }].concat(wrongs.map(function (w) { return { expl: w.expl, ok: false }; })));
      return { q: q, opts: opts, answered: false, correct: false };
    });
    items.forEach(function (item) {
      const card = el("div", "roman-quiz-q");
      const wrow = el("div", "roman-quiz-wrow");
      wrow.innerHTML = '<span class="roman-quiz-w roman-de ' + romanGenreCls(item.q.base) + '">' + delfEsc(item.q.base) + "</span>";
      const spk = el("button", "btn btn-ghost small", "🔊"); spk.type = "button";
      spk.addEventListener("click", function () { if (window.Speech) window.Speech.speak(item.q.base.replace(/\s*\([^)]*\)\s*$/, ""), { rate: 0.9 }); });
      wrow.appendChild(spk); card.appendChild(wrow);
      const optsWrap = el("div", "roman-quiz-opts");
      item.opts.forEach(function (o, oi) {
        const b = el("button", "roman-quiz-opt"); b.type = "button";
        b.innerHTML = '<span class="roman-tr">' + delfEsc(o.expl) + "</span>";
        b.addEventListener("click", function () {
          if (item.answered) return;
          item.answered = true; item.correct = !!o.ok;
          optsWrap.querySelectorAll(".roman-quiz-opt").forEach(function (x, xi) { x.classList.add("done"); if (item.opts[xi].ok) x.classList.add("ok"); });
          if (!o.ok) b.classList.add("ko");
          maybeFinish();
        });
        optsWrap.appendChild(b);
      });
      card.appendChild(optsWrap); form.appendChild(card);
    });
    const resBox = el("div", "roman-quiz-result"); frag.appendChild(resBox);
    app.appendChild(frag);
    romanLocalizeNotes(app);
    try { localizeUI(app); } catch (e) {}
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/romans/" + code; }); if (window.TG.hideMainButton) window.TG.hideMainButton(); } catch (e) {} }
    window.scrollTo(0, 0);
    function maybeFinish() {
      if (!items.every(function (s) { return s.answered; })) return;
      const score = items.filter(function (s) { return s.correct; }).length, n = items.length;
      const s2 = romanEtatGet(code); s2.quiz = s2.quiz || {}; s2.quiz[ci] = Math.max(s2.quiz[ci] || 0, score); romanEtatSet(code, s2);
      const good = score === n, ok = score >= Math.ceil(n * 0.6);
      resBox.innerHTML = '<div class="completion ' + (ok ? "ok" : "ko") + '"><div class="comp-emoji">' + (good ? "🏆" : ok ? "👍" : "📚") + '</div>' +
        "<h2>" + score + " / " + n + "</h2><p>" + (good ? "Parfait — tout le vocabulaire du chapitre est acquis !" : ok ? "Bien joué ! Revois les mots manqués et continue." : "Continue à lire : relis le chapitre puis retente le quiz.") + "</p></div>";
      const row = el("div", "rev-actions");
      const again = el("button", "btn btn-ghost", "↻ Recommencer"); again.type = "button"; again.addEventListener("click", function () { renderRomanQuiz(code, ci); });
      const cont = el("a", "btn btn-primary", "Continuer la lecture →"); cont.href = "#/romans/" + code;
      row.appendChild(again); row.appendChild(cont); resBox.appendChild(row);
      try { localizeUI(resBox); } catch (e) {}
      resBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  /* Section « Lecture » du tableau de bord : pages lues, romans terminés, quiz. */
  function romanStatsSection() {
    const codes = ROMAN_ORDER.filter(function (c) { return !!romanData(c); });
    if (!codes.length) return null;
    let lues = 0, total = 0, finis = 0, quiz = 0;
    const rows = codes.map(function (c) {
      const R = romanData(c), tot = romanPages(R).length, s = romanEtatGet(c);
      const l = Math.min((s.lu && s.lu.length) || 0, tot);
      lues += l; total += tot; if (s.done) finis++; quiz += s.quiz ? Object.keys(s.quiz).length : 0;
      return { c: c, R: R, l: l, tot: tot, done: !!s.done, open: romanUnlocked(c) };
    });
    const sec = el("section", "lesson-section");
    sec.appendChild(el("h2", "", "📚 Lecture (romans)"));
    const cards = el("div", "stats-row");
    [["📖", lues, "pages lues"], ["📕", finis + "/" + codes.length, "romans terminés"], ["🧩", quiz, "quiz faits"], ["📚", total, "pages au total"]].forEach(function (x) {
      const cc = el("div", "stat");
      cc.innerHTML = '<span class="stat-ic">' + x[0] + '</span><span class="stat-n">' + x[1] + '</span><span class="stat-l">' + x[2] + "</span>";
      cards.appendChild(cc);
    });
    sec.appendChild(cards);
    const list = el("div", "roman-stat-list");
    rows.forEach(function (r) {
      const pct = r.tot ? Math.round(r.l / r.tot * 100) : 0;
      const row = el(r.open ? "a" : "div", "roman-stat" + (r.open ? "" : " locked"));
      if (r.open) row.href = "#/romans/" + r.c;
      row.innerHTML = '<span class="roman-stat-ic">' + (r.open ? ROMAN_EMOJI[r.c] : "🔒") + '</span>' +
        '<span class="roman-stat-body"><b class="roman-de">' + delfEsc(r.R.titre) + '</b>' +
        '<span class="roman-stat-bar"><span style="width:' + pct + '%"></span></span></span>' +
        '<span class="roman-stat-n loc-keep">' + r.l + "/" + r.tot + (r.done ? " ✓" : "") + "</span>";
      list.appendChild(row);
    });
    sec.appendChild(list);
    return sec;
  }

  function renderRomans() {
    app.innerHTML = "";
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu</a><span class="lesson-top-mod">📚 Bibliothèque</span>';
    frag.appendChild(top);
    const head = el("header", "test-head");
    head.innerHTML = '<div class="lesson-num">Romans éducatifs</div><h1>📚 La bibliothèque</h1><p>Un roman par niveau, écrit pour apprendre : les mots importants sont <strong>colorés</strong> et expliqués <strong>en bas de page</strong> dans votre langue. Sans images — des chapitres, des pages, une histoire.</p>';
    frag.appendChild(head);
    const legend = el("p", "roman-legende loc-keep");
    legend.innerHTML = '<span class="g-der">■ der</span> <span class="g-die">■ die</span> <span class="g-das">■ das</span> <span class="g-x">■ verbes & expressions</span>';
    frag.appendChild(legend);
    const sec = el("section", "section roman-grid");
    ROMAN_ORDER.forEach(function (code) {
      const R = romanData(code);
      if (!R) return;
      const open = romanUnlocked(code);
      const nb = romanPages(R).length;
      const st = romanEtatGet(code);
      const card = el(open ? "a" : "div", "roman-card" + (open ? "" : " locked") + (st.done ? " done" : ""));
      if (open) card.href = "#/romans/" + code;
      const status = !open ? romanLockText(code)
        : st.done ? "✓ Terminé — relisez-le quand vous voulez"
        : (st.p > 0 ? "📖 Reprendre à la page " + (st.p + 1) + " / " + nb : nb + " pages · " + (R.chapitres || []).length + " chapitres");
      card.innerHTML = '<span class="roman-ic">' + (open ? ROMAN_EMOJI[code] : "🔒") + '</span><div class="roman-card-body">' +
        '<span class="roman-niv loc-keep">' + R.niveau + '</span>' +
        '<strong class="roman-de">' + delfEsc(R.titre) + '</strong>' +
        (R.sousTitre ? '<em class="roman-de">' + delfEsc(R.sousTitre) + "</em>" : "") +
        "<p>" + delfEsc(R.resume || "") + '</p><span class="roman-status">' + status + "</span></div>" +
        '<span class="menu-go">' + (open ? (st.done ? "✓" : "→") : "🔒") + "</span>";
      sec.appendChild(card);
    });
    frag.appendChild(sec);
    app.appendChild(frag);
    try { localizeUI(app); } catch (e) {}
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/"; }); if (window.TG.hideMainButton) window.TG.hideMainButton(); } catch (e) {} }
    window.scrollTo(0, 0);
  }

  function renderRoman(code) {
    const R = romanData(code);
    if (!R || !romanUnlocked(code)) { location.hash = "#/romans"; return; }
    const pages = romanPages(R);
    const st = romanEtatGet(code);
    let idx = Math.min(Math.max(0, st.p || 0), pages.length - 1);

    app.innerHTML = "";
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/romans">← Bibliothèque</a><span class="lesson-top-mod">' + ROMAN_EMOJI[code] + " Roman · " + R.niveau + "</span>";
    frag.appendChild(top);
    const head = el("header", "roman-head");
    head.innerHTML = '<h1 class="roman-de">' + delfEsc(R.titre) + "</h1>" + (R.sousTitre ? '<p class="roman-de roman-sous">' + delfEsc(R.sousTitre) + "</p>" : "");
    frag.appendChild(head);
    const bar = el("div", "roman-bar"); const fill = el("div", "roman-bar-fill"); bar.appendChild(fill); frag.appendChild(bar);
    const kap = el("div", "roman-kap-row"); frag.appendChild(kap);
    const texte = el("div", "roman-texte"); texte.setAttribute("dir", "ltr"); frag.appendChild(texte);
    const legend = el("p", "roman-legende loc-keep");
    legend.innerHTML = '<span class="g-der">■ der</span> <span class="g-die">■ die</span> <span class="g-das">■ das</span> <span class="g-x">■ verbes & expressions</span> · 👆 touchez un mot coloré pour la traduction';
    frag.appendChild(legend);
    const quizRow = el("div", "roman-quiz-row"); frag.appendChild(quizRow);
    // Bulle de traduction : apparaît au clic sur un mot coloré (comme une liseuse).
    const pop = el("div", "roman-pop"); pop.style.display = "none"; frag.appendChild(pop);
    let popOpen = false;
    function hidePop() { pop.style.display = "none"; popOpen = false; }
    function showPop(wEl, base, expl) {
      pop.innerHTML = '<button class="roman-pop-x" type="button" aria-label="Fermer">×</button><div class="roman-pop-de ' + romanGenreCls(base) + '">' + delfEsc(base) + '</div><div class="roman-tr">' + delfEsc(expl) + '</div><button class="roman-pop-spk" type="button">🔊 Écouter</button>';
      pop.style.display = "block"; popOpen = true;
      pop.querySelector(".roman-pop-x").addEventListener("click", function (e) { e.stopPropagation(); hidePop(); });
      pop.querySelector(".roman-pop-spk").addEventListener("click", function (e) { e.stopPropagation(); if (window.Speech) window.Speech.speak(base.replace(/\s*\([^)]*\)\s*$/, ""), { rate: 0.9 }); });
      romanLocalizeNotes(pop);
      const r = wEl.getBoundingClientRect(), pwid = pop.offsetWidth, ph = pop.offsetHeight;
      let left = Math.max(10, Math.min(r.left + r.width / 2 - pwid / 2, window.innerWidth - pwid - 10));
      let top = r.bottom + 8;
      if (top + ph > window.innerHeight - 10) top = Math.max(10, r.top - ph - 8);
      pop.style.left = left + "px"; pop.style.top = top + "px";
    }
    if (window.__romanPopCleanup) window.__romanPopCleanup();
    const onDocClick = function (e) { if (popOpen && !(e.target.closest && (e.target.closest(".roman-pop") || e.target.closest(".roman-mot")))) hidePop(); };
    const onScroll = function () { if (popOpen) hidePop(); };
    document.addEventListener("click", onDocClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.__romanPopCleanup = function () { document.removeEventListener("click", onDocClick, true); window.removeEventListener("scroll", onScroll); };
    const listen = el("button", "btn btn-ghost small roman-listen", "🔊 Écouter la page"); listen.type = "button";
    frag.appendChild(listen);
    const nav = el("div", "roman-nav");
    const prev = el("button", "btn btn-ghost", "◀ Page"); prev.type = "button";
    const pageLbl = el("span", "roman-page loc-keep", "");
    const next = el("button", "btn btn-primary", "Page ▶"); next.type = "button";
    nav.appendChild(prev); nav.appendChild(pageLbl); nav.appendChild(next);
    frag.appendChild(nav);
    app.appendChild(frag);

    function show(i, scroll) {
      idx = Math.min(Math.max(0, i), pages.length - 1);
      const s2 = romanEtatGet(code); s2.p = idx; s2.lu = s2.lu || []; if (s2.lu.indexOf(idx) < 0) s2.lu.push(idx); romanEtatSet(code, s2);
      const pg = pages[idx]; const ch = (R.chapitres || [])[pg.ch] || {};
      kap.innerHTML = '<span class="roman-kap roman-de">' + delfEsc(ch.titre || "") + "</span>" + (pg.debut ? "" : ' <span class="roman-suite">(suite)</span>');
      const notes = [];
      texte.innerHTML = pg.paras.map(function (p) {
        return "<p>" + delfEsc(p).replace(ROMAN_GLOSS_RE, function (m, a, b, c) {
          const shown = a, base = c ? b : a, expl = c ? c : b;
          notes.push({ base: base, expl: expl });
          return '<span class="roman-mot ' + romanGenreCls(base) + '" data-fn="' + (notes.length - 1) + '">' + shown + "</span>";
        }) + "</p>";
      }).join("");
      hidePop();
      texte.querySelectorAll(".roman-mot").forEach(function (w) {
        w.addEventListener("click", function (e) {
          e.stopPropagation();
          const o = notes[+w.getAttribute("data-fn")]; if (!o) return;
          if (window.Speech) window.Speech.speak(o.base.replace(/\s*\([^)]*\)\s*$/, ""), { rate: 0.9 });
          showPop(w, o.base, o.expl);
        });
      });
      quizRow.innerHTML = "";
      const isChapEnd = idx === pages.length - 1 || (pages[idx + 1] && pages[idx + 1].ch !== pg.ch);
      const chGloss = romanChapterGloss(R, pg.ch);
      if (isChapEnd && chGloss.length >= 3) {
        const best = (romanEtatGet(code).quiz || {})[pg.ch];
        const qb = el("button", "btn btn-quiz", "🧩 Quiz du chapitre" + (best != null ? " · " + best + "/" + Math.min(8, chGloss.length) + " ✓" : ""));
        qb.type = "button";
        qb.addEventListener("click", function () { renderRomanQuiz(code, pg.ch); });
        quizRow.appendChild(qb);
      }
      fill.style.width = Math.round(((idx + 1) / pages.length) * 100) + "%";
      pageLbl.textContent = "Page " + (idx + 1) + " / " + pages.length;
      prev.disabled = idx === 0;
      const last = idx === pages.length - 1;
      next.textContent = last ? "✓ Terminer le roman" : "Page ▶";
      if (scroll !== false) window.scrollTo(0, 0);
    }
    prev.addEventListener("click", function () { show(idx - 1); });
    next.addEventListener("click", function () {
      if (idx === pages.length - 1) {
        const s2 = romanEtatGet(code); s2.done = true; romanEtatSet(code, s2);
        toast("📚 Bravo ! Roman terminé — " + pages.length + " pages lues.");
        location.hash = "#/romans"; return;
      }
      show(idx + 1);
    });
    listen.addEventListener("click", function () {
      const pg = pages[idx];
      if (window.Speech) window.Speech.speak(pg.paras.map(romanPlain).join(" "), { rate: ROMAN_RATE[code] || 1 });
    });
    show(idx, false);
    try { localizeUI(app); } catch (e) {}
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/romans"; }); if (window.TG.hideMainButton) window.TG.hideMainButton(); } catch (e) {} }
    window.scrollTo(0, 0);
  }

  let delfTimer = null;
  function makeDelfTimer(seconds, onExpire) {
    const box = el("div", "delf-timer");
    let left = seconds, stopped = false, iv = null;
    function fmt(s) { const m = Math.floor(s / 60), ss = s % 60; return m + ":" + (ss < 10 ? "0" : "") + ss; }
    function render() { box.textContent = "⏳ " + fmt(Math.max(0, left)); box.classList.toggle("warn", left <= 60); box.classList.toggle("crit", left <= 10); }
    function stop() { stopped = true; if (iv) { clearInterval(iv); iv = null; } }
    function tick() { if (stopped) return; left--; render(); if (left <= 0) { stop(); if (onExpire) onExpire(); } }
    render(); iv = setInterval(tick, 1000);
    return { el: box, stop: stop };
  }

  function delfScreen(opts) {
    if (delfTimer) { delfTimer.stop(); delfTimer = null; }
    app.innerHTML = "";
    const frag = document.createDocumentFragment();
    const hp = opts.hashPrefix || "#/examen/a2";
    const backHash = opts.backHash || "#/";
    let finished = false, btn = null, timer = null;
    // Quitter l'examen : on stoppe le minuteur et on revient à l'accueil/au hub.
    // Le brouillon est conservé → l'examen pourra être repris là où il s'est arrêté.
    function leave() {
      finished = true; if (timer) timer.stop(); delfTimer = null;
      if (window.TG) { try { window.TG.closingConfirmation(false); } catch (e) {} }
      location.hash = backHash;
    }
    function confirmLeave() { if (window.confirm("Quitter l'examen ? Vous pourrez le reprendre plus tard, là où vous vous êtes arrêté(e).")) leave(); }
    const top = el("div", "lesson-top");
    const quit = el("a", "btn-link delf-quit", "✕ Quitter"); quit.href = backHash;
    quit.addEventListener("click", function (ev) { ev.preventDefault(); confirmLeave(); });
    top.appendChild(quit);
    top.appendChild(el("span", "lesson-top-mod", opts.brand || "🎓 DELF A2"));
    frag.appendChild(top);
    const head = el("header", "test-head delf-head");
    head.innerHTML = '<div class="lesson-num">' + (opts.phase || "DELF A2") + "</div><h1>" + (opts.icone ? opts.icone + " " : "") + opts.titre + "</h1>" + (opts.intro ? "<p>" + opts.intro + "</p>" : "");
    frag.appendChild(head);
    function finish() {
      if (finished) return;
      // L'utilisateur a quitté l'examen (back) → ne pas re-rendre par-dessus.
      if (location.hash.indexOf(hp) !== 0) { if (timer) timer.stop(); return; }
      finished = true; if (timer) timer.stop(); delfTimer = null; if (btn) btn.disabled = true;
      if (opts.onPrimary) opts.onPrimary();
    }
    if (opts.timerSeconds) { timer = makeDelfTimer(opts.timerSeconds, function () { toast("⏰ Temps écoulé pour cette épreuve."); finish(); }); delfTimer = timer; const tw = el("div", "delf-timer-wrap"); tw.appendChild(timer.el); frag.appendChild(tw); }
    if (opts.body) frag.appendChild(opts.body);
    const submitRow = el("div", "test-submit");
    btn = el("button", "btn btn-primary big", opts.primary || "Continuer →"); btn.type = "button";
    btn.addEventListener("click", finish);
    submitRow.appendChild(btn);
    frag.appendChild(submitRow);
    app.appendChild(frag);
    if (window.TG) { try { window.TG.closingConfirmation(true); window.TG.showBackButton(confirmLeave); window.TG.setMainButton(opts.primary || "Continuer →", finish); } catch (e) {} }
    window.scrollTo(0, 0);
  }

  /* Compréhension (CO audio / CE texte) : QCM en capture seule (aucune correction). */
  function delfQCM(documents, kind) {
    const wrap = el("div", "delf-docs");
    const all = [];
    documents.forEach(function (doc) {
      const card = el("div", "delf-doc");
      card.appendChild(el("h3", "delf-doc-t", delfEsc(doc.titre)));
      if (kind === "co") {
        let plays = 0;
        const b = el("button", "btn btn-audio", "🔊 Écouter (2 max)"); b.type = "button";
        b.addEventListener("click", function () {
          if (plays >= 2) { toast("Vous avez déjà écouté ce document 2 fois."); return; }
          plays++; if (window.Speech) window.Speech.speak(doc.audio, { rate: 0.95 });
          const rest = 2 - plays; b.textContent = rest > 0 ? "🔊 Réécouter (" + rest + " restante" + (rest > 1 ? "s" : "") + ")" : "🔇 Écoutes épuisées";
          if (plays >= 2) b.disabled = true;
        });
        card.appendChild(b);
      } else {
        const t = el("div", "delf-text"); t.textContent = doc.texte; card.appendChild(t);
      }
      doc.questions.forEach(function (q) {
        const qc = el("div", "delf-q");
        qc.appendChild(el("p", "delf-q-t", delfEsc(q.q)));
        const opts = el("div", "qcm-options"); let sel = -1;
        q.options.forEach(function (o, i) {
          const ob = el("button", "qcm-opt", delfEsc(o)); ob.type = "button";
          ob.addEventListener("click", function () { sel = i; opts.querySelectorAll(".qcm-opt").forEach(function (x) { x.classList.remove("sel"); }); ob.classList.add("sel"); });
          opts.appendChild(ob);
        });
        qc.appendChild(opts); card.appendChild(qc);
        all.push({ q: q, getSel: function () { return sel; } });
      });
      wrap.appendChild(card);
    });
    function collect() {
      const items = all.map(function (a) { return { q: a.q.q, options: a.q.options, correct: a.q.correct, selected: a.getSel() }; });
      const total = items.length || 1;
      const correct = items.filter(function (it) { return it.selected === it.correct; }).length;
      return { score25: Math.round(correct / total * 25), correct: correct, total: items.length, items: items };
    }
    return { el: wrap, collect: collect };
  }

  /* Production écrite : zones de texte (aucune correction pendant l'examen). */
  /* Compteur de mots partagé (productions écrites DELF EE + telc Schreiben).
     Décompte vif + objectif ; vert dans la fourchette, ambre au-dessus de la
     limite haute quand elle est connue (DELF « X à Y mots », telc « X–Y »). */
  function wordMeter(ta, minMots, maxMots) {
    const meta = el("div", "production-meta");
    const c = el("span", "wordcount", ""); meta.appendChild(c);
    let target = "";
    if (minMots && maxMots) target = "objectif : " + minMots + "–" + maxMots + " mots";
    else if (minMots) target = "objectif : ≥ " + minMots + " mots";
    else if (maxMots) target = "objectif : ≤ " + maxMots + " mots";
    if (target) meta.appendChild(el("span", "wordmin", target));
    function upd() {
      const w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      c.textContent = w + (w > 1 ? " mots" : " mot");
      const over = !!(maxMots && w > maxMots), okMin = !minMots || w >= minMots;
      c.classList.toggle("ok", okMin && !over);
      c.classList.toggle("over", over);
    }
    ta.addEventListener("input", upd); upd();
    return meta;
  }

  /* Récap de la copie avant remise (audit L3) : résumé visuel NON correctif —
     questions répondues et longueur des productions — puis confirmation. */
  function recapWC(s) { s = String(s == null ? "" : s).trim(); return s ? s.split(/\s+/).length : 0; }
  function recapMots(n) { return n + (n > 1 ? " mots" : " mot"); }
  function recapAnswered(items) { return (items || []).filter(function (it) { return it && it.selected >= 0; }).length; }
  function recapQcmRow(rows, label, items) { const n = (items || []).length; if (!n) return; const a = recapAnswered(items); rows.push({ label: label, value: a + " / " + n + " répondues", warn: a < n }); }
  function examRecap(SC, rows, onConfirm) {
    const body = el("div", "exam-recap");
    body.appendChild(el("p", "delf-q-t", "Récapitulatif de votre copie. Rien n'est encore corrigé : vérifiez que tout est complet. La remise est définitive ; la correction (IA) arrive sous 24 h."));
    const ul = el("ul", "recap-list");
    rows.forEach(function (r) {
      const li = el("li", "recap-item" + (r.warn ? " warn" : ""));
      li.appendChild(el("span", "recap-label", r.label));
      li.appendChild(el("span", "recap-val", r.value));
      ul.appendChild(li);
    });
    body.appendChild(ul);
    delfScreen(Object.assign({}, SC, { phase: "Remise de la copie", icone: "🧾", titre: "Vérifiez votre copie", intro: "", body: body, primary: "Confirmer la remise ✅", onPrimary: onConfirm }));
  }

  function delfEE(taches) {
    const wrap = el("div", "delf-ee"); const fields = [];
    taches.forEach(function (t) {
      const card = el("div", "delf-doc");
      card.appendChild(el("h3", "delf-doc-t", delfEsc(t.titre)));
      card.appendChild(el("p", "delf-q-t", delfEsc(t.consigne)));
      const ta = el("textarea", "production-input"); ta.rows = 5; ta.setAttribute("placeholder", "Schreiben Sie hier auf Deutsch…");
      card.appendChild(ta); card.appendChild(wordMeter(ta, t.minMots, t.maxMots)); wrap.appendChild(card);
      fields.push({ t: t, ta: ta });
    });
    function collect() { return fields.map(function (f) { return { id: f.t.id, consigne: f.t.consigne, text: f.ta.value.trim() }; }); }
    return { el: wrap, collect: collect };
  }

  /* Production orale : enregistrement micro (→ /api/stt) avec repli clavier. */
  /* Dialogue oral examinateur ↔ candidat (100 % voix). L'examinateur (IA, mode
     "examinateur") joue son rôle, pose des questions et conteste, mais NE CORRIGE
     JAMAIS. Le candidat parle (micro → STT) ou écrit. Tout le dialogue est capturé
     et noté seulement 24 h après. */
  function delfDialog(task, niveau) {
    const niv = niveau || "B1";
    const lang = (window.I18N && window.I18N.lang && window.I18N.lang()) || "fr";
    const card = el("div", "delf-doc delf-dialog");
    card.appendChild(el("h3", "delf-doc-t", delfEsc(task.titre)));
    card.appendChild(el("p", "delf-q-t", delfEsc(task.consigne)));
    if (task.scenario) card.appendChild(el("p", "delf-q-t", "🎭 " + delfEsc(task.scenario)));
    if (task.points && task.points.length) { const ul = el("ul", "delf-points"); task.points.forEach(function (p) { const li = el("li", null); li.textContent = p; ul.appendChild(li); }); card.appendChild(ul); }
    const conv = el("div", "delf-conv"); card.appendChild(conv);
    const status = el("span", "delf-rec-status", "");
    const history = [], turns = [];
    let busy = false;
    const retryBtn = el("button", "btn btn-ghost small delf-retry", "↻ Réessayer"); retryBtn.type = "button"; retryBtn.style.display = "none";
    retryBtn.addEventListener("click", function () { if (busy) return; examinerTurn(); });
    function bubble(role, text) { const b = el("div", "delf-bubble " + (role === "user" ? "me" : "ex")); b.appendChild(el("span", "delf-bubble-who", role === "user" ? "Vous" : "🧑‍🏫 Examinateur")); const tx = el("div", "delf-bubble-t"); tx.textContent = text; b.appendChild(tx); conv.appendChild(b); conv.scrollTop = conv.scrollHeight; }
    function pushExaminer(text) { history.push({ role: "assistant", content: text }); turns.push({ role: "assistant", content: text }); bubble("assistant", text); if (window.Speech) window.Speech.speak(text, { rate: 0.98 }); }
    function pushUser(text) { history.push({ role: "user", content: text }); turns.push({ role: "user", content: text }); bubble("user", text); }
    function examinerTurn() {
      busy = true; status.textContent = "🧑‍🏫 …"; retryBtn.style.display = "none";
      fetch("/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: history.slice(-16), mode: "examinateur", niveau: niv, niveauParle: niv, langue: lang, initData: delfInitData() || undefined }) })
        .then(function (r) { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
        .then(function (j) { busy = false; status.textContent = ""; pushExaminer((j && j.reply) || "Bitte, sprechen Sie weiter."); })
        .catch(function () { busy = false; status.textContent = "⚠️ Connexion perdue — appuyez sur ↻ pour réessayer."; retryBtn.style.display = ""; });
    }
    function userSays(text) { text = (text || "").trim(); if (!text || busy) return; pushUser(text); examinerTurn(); }
    const row = el("div", "delf-rec-row");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) {
      const mic = el("button", "btn btn-mic", "🎤 Parler"); mic.type = "button";
      let mr = null, chunks = [], recording = false;
      mic.addEventListener("click", function () {
        if (busy) return;
        if (recording) { if (mr) mr.stop(); return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          chunks = []; try { mr = new MediaRecorder(stream); } catch (e) { status.textContent = "⚠️ Micro non supporté — écrivez."; stream.getTracks().forEach(function (x) { x.stop(); }); return; }
          mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          mr.onstop = function () {
            recording = false; mic.classList.remove("listening"); mic.textContent = "🎤 Parler"; stream.getTracks().forEach(function (x) { x.stop(); });
            const blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || "audio/webm" }); status.textContent = "⏳ Transcription…";
            fetch("/api/stt", { method: "POST", headers: { "content-type": blob.type || "audio/webm" }, body: blob })
              .then(function (r) { return r.ok ? r.json() : null; })
              .then(function (j) { status.textContent = ""; if (j && j.text) userSays(j.text); else status.textContent = "⚠️ Rien compris — réessayez ou écrivez."; })
              .catch(function () { status.textContent = "⚠️ Hors-ligne — écrivez."; });
          };
          mr.start(); recording = true; mic.classList.add("listening"); mic.textContent = "⏹️ Arrêter"; status.textContent = "🎙️ Parlez…";
        }).catch(function () { status.textContent = "⚠️ Micro indisponible — écrivez ci-dessous."; });
      });
      row.appendChild(mic);
    }
    const replay = el("button", "btn btn-ghost small", "🔁 Réécouter"); replay.type = "button";
    replay.addEventListener("click", function () { const last = turns.filter(function (h) { return h.role === "assistant"; }).pop(); if (last && window.Speech) window.Speech.speak(last.content, { rate: 0.98 }); });
    row.appendChild(replay); row.appendChild(retryBtn); row.appendChild(status); card.appendChild(row);
    const inp = el("input", "production-input delf-typed"); inp.type = "text"; inp.setAttribute("placeholder", "…ou écrivez votre réponse, puis Entrée");
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); const v = inp.value; inp.value = ""; userSays(v); } });
    card.appendChild(inp);
    if (task.opener) pushExaminer(task.opener);
    else { history.push({ role: "user", content: "[Du bist Pruefer in einer muendlichen Pruefung. Aufgabe: " + (task.consigne || "") + (task.scenario ? " Szenario: " + task.scenario : "") + ". Eroeffne die Pruefung mit EINER kurzen, passenden Frage oder Replik auf Deutsch.]" }); examinerTurn(); }
    function collect() { return { id: task.id, consigne: task.consigne + (task.scenario ? " (" + task.scenario + ")" : ""), transcript: turns.map(function (h) { return (h.role === "user" ? "Candidat : " : "Examinateur : ") + h.content; }).join("\n"), candidate: turns.filter(function (h) { return h.role === "user"; }).map(function (h) { return h.content; }).join("\n") }; }
    return { el: card, collect: collect };
  }

  function delfEO(taches, niveau) {
    const wrap = el("div", "delf-eo"); const fields = [];
    const DIALOG = ["dialog", "jeuderole", "info", "thema", "planen", "diskussion", "problemloesung", "anschlussfragen"];
    const recOK = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    taches.forEach(function (t) {
      if (t.mode === "dialog" || DIALOG.indexOf(t.type) >= 0) { const d = delfDialog(t, niveau); wrap.appendChild(d.el); fields.push(d.collect); return; }
      const card = el("div", "delf-doc");
      card.appendChild(el("h3", "delf-doc-t", delfEsc(t.titre)));
      card.appendChild(el("p", "delf-q-t", delfEsc(t.consigne)));
      if (t.points && t.points.length) { const ul = el("ul", "delf-points"); t.points.forEach(function (p) { const li = el("li", null); li.textContent = p; ul.appendChild(li); }); card.appendChild(ul); }
      const ta = el("textarea", "production-input"); ta.rows = 4; ta.setAttribute("placeholder", "Was Sie sagen würden (oder Aufnahme oben)…");
      if (recOK) {
        const row = el("div", "delf-rec-row");
        const rec = el("button", "btn btn-mic", "🎤 Enregistrer"); rec.type = "button";
        const status = el("span", "delf-rec-status", "");
        let mr = null, chunks = [], recording = false;
        rec.addEventListener("click", function () {
          if (recording) { if (mr) mr.stop(); return; }
          navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
            chunks = []; try { mr = new MediaRecorder(stream); } catch (e) { status.textContent = "⚠️ Enregistrement non supporté — écrivez ci-dessous."; stream.getTracks().forEach(function (x) { x.stop(); }); return; }
            mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
            mr.onstop = function () {
              recording = false; rec.classList.remove("listening"); rec.textContent = "🎤 Enregistrer"; stream.getTracks().forEach(function (x) { x.stop(); });
              const blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || "audio/webm" });
              status.textContent = "⏳ Transcription…";
              fetch("/api/stt", { method: "POST", headers: { "content-type": blob.type || "audio/webm" }, body: blob })
                .then(function (r) { return r.ok ? r.json() : null; })
                .then(function (j) { if (j && j.text) { ta.value = (ta.value ? ta.value + " " : "") + j.text; status.textContent = "✓ Transcrit — vérifiez et complétez."; } else status.textContent = "⚠️ Transcription indisponible — écrivez ci-dessous."; })
                .catch(function () { status.textContent = "⚠️ Hors-ligne — écrivez ci-dessous."; });
            };
            mr.start(); recording = true; rec.classList.add("listening"); rec.textContent = "⏹️ Arrêter"; status.textContent = "🎙️ Enregistrement…";
          }).catch(function () { status.textContent = "⚠️ Micro indisponible — écrivez ci-dessous."; });
        });
        row.appendChild(rec); row.appendChild(status); card.appendChild(row);
      }
      card.appendChild(ta); wrap.appendChild(card);
      fields.push(function () { return { id: t.id, consigne: t.consigne, transcript: ta.value.trim() }; });
    });
    function collect() { return fields.map(function (f) { return f(); }); }
    return { el: wrap, collect: collect };
  }

  /* Dictée : audio (synthèse) lu 2× max, saisie libre, score auto mot-à-mot.
     Composante auto-corrigée de l'écrit (examens combinés). Aucune correction
     affichée pendant l'épreuve. */
  function delfDictee(dictee) {
    const sur = dictee.sur || 25;
    const card = el("div", "delf-doc delf-dictee");
    card.appendChild(el("h3", "delf-doc-t", "✒️ " + delfEsc(dictee.titre || "Dictée")));
    card.appendChild(el("p", "delf-q-t", delfEsc(dictee.intro || "Écoutez (2 fois maximum) et écrivez exactement le texte entendu.")));
    const segs = (String(dictee.texte || "").match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [dictee.texte || ""]).map(function (s) { return s.trim(); }).filter(Boolean);
    let plays = 0, speaking = false;
    function speakSegs(i) { if (i >= segs.length || !window.Speech) { speaking = false; return; } speaking = true; window.Speech.speak(segs[i], { rate: 0.9 }); setTimeout(function () { speakSegs(i + 1); }, Math.max(2600, segs[i].length * 95)); }
    const b = el("button", "btn btn-audio", "🔊 Écouter la dictée (2 max)"); b.type = "button";
    b.addEventListener("click", function () { if (speaking) return; if (plays >= 2) { toast("Vous avez déjà écouté 2 fois."); return; } plays++; speakSegs(0); const rest = 2 - plays; b.textContent = rest > 0 ? "🔁 Réécouter (" + rest + ")" : "🔇 Écoutes épuisées"; if (plays >= 2) b.disabled = true; });
    card.appendChild(b);
    const ta = el("textarea", "production-input"); ta.rows = 6; ta.setAttribute("placeholder", "Schreiben Sie hier den gehörten Text…"); card.appendChild(ta);
    function norm(s) { return String(s || "").toLowerCase().replace(/[.,;:!?"«»()\[\]\-–—…]/g, " ").replace(/\s+/g, " ").trim(); }
    function score() {
      const ref = norm(dictee.texte).split(" ").filter(Boolean), got = norm(ta.value).split(" ").filter(Boolean);
      if (!ref.length) return 0;
      // Plus longue sous-séquence commune (ordre respecté) ; dénominateur = max(réf, saisie)
      // → pénalise à la fois les omissions, le désordre ET les mots en trop.
      const n = ref.length, m = got.length, dp = new Array(m + 1).fill(0);
      for (let i = 1; i <= n; i++) { let prev = 0; for (let j = 1; j <= m; j++) { const tmp = dp[j]; dp[j] = (ref[i - 1] === got[j - 1]) ? prev + 1 : Math.max(dp[j], dp[j - 1]); prev = tmp; } }
      return Math.round(dp[m] / Math.max(n, m) * 100);
    }
    function collect() { const pct = score(); return { score: pct, points: Math.round(pct * sur / 100), sur: sur, texte: dictee.texte, saisie: ta.value.trim() }; }
    return { el: card, collect: collect };
  }

  function renderDelf(code) {
    const D = delfData(code);
    if (!D || !delfGuardOK(code)) { location.hash = "#/"; return; }
    const base = "#/examen/" + code, CODE = delfName(code);
    const SC = { brand: "🎓 DELF " + CODE, hashPrefix: base, backHash: "#/" };
    const passed = !!((window.Progress.getTestScore(code) || {}).reussi);
    const loc = delfLocalGet(code) || {};
    if (loc.status === "pending" && !passed) { location.hash = base + "/resultat"; return; }
    // Rattrapage : corriger les exercices ratés du niveau avant l'examen.
    if (!passed) { const rr = ratesAvantExamen(code); if (rr.length) return renderRattrapage(code, rr); }
    const state = { co: null, ce: null, ee: [], eo: [], dictee: null };
    const E = D.epreuves;

    function runCO() { const ep = E.co; const r = delfQCM(ep.documents, "co"); delfScreen(Object.assign({}, SC, { phase: "Épreuve 1 / 4 · collective", icone: ep.icone, titre: ep.titre, intro: ep.intro, body: r.el, timerSeconds: ep.duree, primary: "Terminer l'épreuve →", onPrimary: function () { state.co = r.collect(); examDraftSet(code, { state: state, step: "ce" }); runCE(); } })); }
    function runCE() { const ep = E.ce; const r = delfQCM(ep.documents, "ce"); delfScreen(Object.assign({}, SC, { phase: "Épreuve 2 / 4 · collective", icone: ep.icone, titre: ep.titre, intro: ep.intro, body: r.el, timerSeconds: ep.duree, primary: "Terminer l'épreuve →", onPrimary: function () { state.ce = r.collect(); examDraftSet(code, { state: state, step: "ee" }); runEE(); } })); }
    function runEE() { const ep = E.ee; const r = delfEE(ep.taches); delfScreen(Object.assign({}, SC, { phase: "Épreuve 3 / 4 · collective", icone: ep.icone, titre: ep.titre, intro: ep.intro, body: r.el, timerSeconds: ep.duree, primary: "Terminer l'épreuve →", onPrimary: function () { state.ee = r.collect(); examDraftSet(code, { state: state, step: D.dictee ? "dictee" : "eoprep" }); (D.dictee ? runDictee() : runEOPrep()); } })); }
    function runDictee() { const r = delfDictee(D.dictee); delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · dictée", icone: "✒️", titre: D.dictee.titre || "Dictée", intro: "Niveau " + (D.dictee.niveau || "") + " — écoutez (2× max) et écrivez exactement. Aucune correction ne s'affiche.", body: r.el, timerSeconds: D.dictee.duree || 600, primary: "Terminer la dictée →", onPrimary: function () { state.dictee = r.collect(); examDraftSet(code, { state: state, step: "eoprep" }); runEOPrep(); } })); }
    function runEOPrep() {
      const ep = E.eo; const body = el("div", "delf-eo-prep");
      ep.taches.forEach(function (t) { const c = el("div", "delf-doc"); c.appendChild(el("h3", "delf-doc-t", delfEsc(t.titre))); c.appendChild(el("p", "delf-q-t", delfEsc(t.consigne))); if (t.points) { const ul = el("ul", "delf-points"); t.points.forEach(function (p) { const li = el("li", null); li.textContent = p; ul.appendChild(li); }); c.appendChild(ul); } body.appendChild(c); });
      body.appendChild(el("p", "delf-q-t", "📝 Préparez vos parties. L'enregistrement commence ensuite."));
      const note = el("textarea", "production-input"); note.rows = 4; note.setAttribute("placeholder", "Brouillon / vos idées (non noté)…"); body.appendChild(note);
      delfScreen(Object.assign({}, SC, { phase: "Épreuve 4 / 4 · préparation (" + Math.round(ep.prep / 60) + " min)", icone: ep.icone, titre: ep.titre + " — préparation", intro: "Vous avez " + Math.round(ep.prep / 60) + " minutes pour préparer.", body: body, timerSeconds: ep.prep, primary: "Je suis prêt(e) — parler →", onPrimary: function () { examDraftSet(code, { state: state, step: "eo" }); runEO(); } }));
    }
    function runEO() { const ep = E.eo; const r = delfEO(ep.taches, CODE); delfScreen(Object.assign({}, SC, { phase: "Épreuve 4 / 4 · passation orale", icone: ep.icone, titre: ep.titre, intro: "Parlez au micro avec l'examinateur (ou écrivez). Aucune correction ne s'affiche.", body: r.el, timerSeconds: ep.duree, primary: "Remettre ma copie ✅", onPrimary: function () { state.eo = r.collect(); doSubmit(); } })); }

    function doSubmit() {
      const rows = [];
      recapQcmRow(rows, "🎧 Compréhension de l'oral", state.co && state.co.items);
      recapQcmRow(rows, "📖 Compréhension des écrits", state.ce && state.ce.items);
      (state.ee || []).forEach(function (t, i) { const w = recapWC(t.text); rows.push({ label: "✍️ Production écrite — ex. " + (i + 1), value: recapMots(w), warn: w === 0 }); });
      if (state.dictee) { const w = recapWC(state.dictee.saisie); rows.push({ label: "✒️ Dictée", value: recapMots(w) + " saisis", warn: w === 0 }); }
      (state.eo || []).forEach(function (t, i) { const w = recapWC(t.candidate || t.transcript); rows.push({ label: "🗣️ Production orale — partie " + (i + 1), value: w > 0 ? recapMots(w) : "non enregistrée", warn: w === 0 }); });
      examRecap(SC, rows, doSubmitNow);
    }
    function doSubmitNow() {
      if (window.TG) { try { window.TG.closingConfirmation(false); } catch (e) {} }
      const copy = { co: (state.co && state.co.items) || [], ce: (state.ce && state.ce.items) || [], ee: state.ee || [], eo: state.eo || [] };
      const payload = { langue: (window.I18N && window.I18N.lang && window.I18N.lang()) || "fr", co25: (state.co && state.co.score25) || 0, ce25: (state.ce && state.ce.score25) || 0, copy: copy };
      if (state.dictee) { copy.dictee = { texte: state.dictee.texte, saisie: state.dictee.saisie, score: state.dictee.score, sur: state.dictee.sur }; payload.dictee = state.dictee.points; payload.dicteeSur = state.dictee.sur; }
      app.innerHTML = ""; const frag = document.createDocumentFragment();
      const top = el("div", "lesson-top"); top.innerHTML = '<span class="btn-link" style="visibility:hidden">·</span><span class="lesson-top-mod">🎓 DELF ' + CODE + '</span>'; frag.appendChild(top);
      const head = el("header", "test-head delf-head"); head.innerHTML = '<div class="lesson-num">Remise de la copie</div><h1>📨 Envoi en cours…</h1>'; frag.appendChild(head);
      app.appendChild(frag); window.scrollTo(0, 0);
      const initData = delfInitData();
      if (!initData) { showSubmitted(null, "no-server"); return; }
      fetch("/api/exam", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ initData: initData, action: "submit", exam: code, payload: payload }) })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (j) { if (j && j.status === "pending") { delfLocalSet(code, { status: "pending", submittedAt: j.submittedAt, availableAt: j.availableAt }); examDraftClear(code); showSubmitted(j, null); } else showSubmitted(null, "error"); })
        .catch(function () { showSubmitted(null, "error"); });
    }
    function showSubmitted(j, err) {
      app.innerHTML = ""; const frag = document.createDocumentFragment();
      const top = el("div", "lesson-top"); top.innerHTML = '<a class="btn-link" href="#/">← Aperçu</a><span class="lesson-top-mod">🎓 DELF ' + CODE + '</span>'; frag.appendChild(top);
      const c = el("div", "completion " + (err ? "ko" : "ok") + " delf-submitted");
      if (err === "no-server") c.innerHTML = '<div class="comp-emoji">📋</div><h2>Examen terminé</h2><p>La remise et la correction par l\'IA nécessitent l\'application dans <strong>Telegram</strong>. Ouvrez le cours depuis le bot pour passer l\'examen officiel et recevoir votre résultat sous 24 h.</p>';
      else if (err === "error") c.innerHTML = '<div class="comp-emoji">⚠️</div><h2>Remise impossible</h2><p>La connexion a échoué. Vérifiez votre réseau, puis réessayez.</p>';
      else { const when = (j && j.availableAt) ? new Date(j.availableAt) : null; c.innerHTML = '<div class="comp-emoji">📨</div><h2>Copie remise !</h2><p>Votre examen est enregistré. <strong>Le coach Zika (IA) corrige votre copie</strong> et vous enverra votre <strong>note /100</strong>, votre <strong>copie corrigée</strong> et votre <strong>PDF</strong>' + (when ? " vers le <strong>" + when.toLocaleString() + "</strong>" : " sous 24 h") + ".</p><p>📲 Vous recevrez une <strong>notification Telegram</strong> dès que le résultat est prêt.</p>"; }
      const actions = el("div", "rev-actions");
      if (err === "error") { const again = el("button", "btn btn-primary", "Réessayer"); again.type = "button"; again.addEventListener("click", doSubmitNow); actions.appendChild(again); }
      const home = el("a", "btn " + (err ? "btn-ghost" : "btn-primary"), "Retour à l'aperçu"); home.href = "#/"; actions.appendChild(home);
      if (!err) { const stb = el("a", "btn btn-ghost", "Voir l'état de ma copie"); stb.href = base + "/resultat"; actions.appendChild(stb); }
      c.appendChild(actions); frag.appendChild(c); app.appendChild(frag);
      if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/"; }); window.TG.setMainButton("Retour à l'aperçu", function () { location.hash = "#/"; }); } catch (e) {} }
      window.scrollTo(0, 0);
    }

    function showIntro() {
      const dCO = Math.round(E.co.duree / 60), dCE = Math.round(E.ce.duree / 60), dEE = Math.round(E.ee.duree / 60), dEP = Math.round(E.eo.prep / 60), dEO = Math.round(E.eo.duree / 60);
      const intro = el("div", "delf-intro-body");
      intro.innerHTML =
        '<div class="delf-rules">' +
        "<p>Cet examen blanc reproduit le <strong>DELF " + CODE + "</strong> officiel : 4 épreuves notées chacune sur 25 (<strong>total /100</strong>).</p>" +
        '<ul class="delf-epreuves">' +
        "<li>🎧 Compréhension de l'oral — <strong>" + dCO + " min</strong></li>" +
        "<li>📖 Compréhension des écrits — <strong>" + dCE + " min</strong></li>" +
        "<li>✍️ Production écrite — <strong>" + dEE + " min</strong></li>" +
        "<li>🗣️ Production orale — <strong>" + dEP + " min de préparation + " + dEO + " min</strong></li>" +
        "</ul>" +
        "<p>⚠️ <strong>Aucune correction</strong> ne s'affiche pendant l'examen : toutes vos réponses sont acceptées. <strong>Votre note, votre copie corrigée et votre PDF arrivent 24 h après la remise</strong>, par notification Telegram.</p>" +
        "<p>✅ Réussite : <strong>≥ 50/100</strong> et aucune épreuve sous <strong>5/25</strong> (note éliminatoire). Réussir débloque la suite du parcours ; sinon, vous pourrez repasser.</p>" +
        "<p>⏱️ Chaque épreuve est chronométrée ; un examen interrompu peut être <strong>repris</strong> là où vous l'avez laissé.</p>" +
        "</div>";
      delfScreen(Object.assign({}, SC, { phase: "Présentation", icone: "🎓", titre: "Examen blanc DELF " + CODE, intro: "", body: intro, primary: "Commencer l'examen →", onPrimary: runCO }));
    }
    const draft = examDraftGet(code);
    if (draft && draft.state && draft.step && !passed && loc.status !== "pending") {
      const resumeMap = { co: runCO, ce: runCE, ee: runEE, dictee: runDictee, eoprep: runEOPrep, eo: runEO };
      const rfn = resumeMap[draft.step];
      if (rfn) { try { Object.keys(draft.state).forEach(function (k) { state[k] = draft.state[k]; }); } catch (e) {} examResume(SC.brand, "DELF " + CODE, rfn, function () { examDraftClear(code); state.co = null; state.ce = null; state.ee = []; state.eo = []; state.dictee = null; showIntro(); }); return; }
    }
    showIntro();
  }

  /* ---- Résultat de l'examen DELF (copie corrigée + PDF) ---- */
  function renderDelfResult(code) {
    const base = "#/examen/" + code, CODE = delfName(code);
    app.innerHTML = ""; const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top"); top.innerHTML = '<a class="btn-link" href="#/">← Aperçu</a><span class="lesson-top-mod">🎓 DELF ' + CODE + '</span>'; frag.appendChild(top);
    const head = el("header", "test-head delf-head"); head.innerHTML = '<div class="lesson-num">DELF ' + CODE + '</div><h1>📊 Mon résultat</h1>'; frag.appendChild(head);
    const box = el("div", "delf-result-box"); box.innerHTML = '<p class="delf-loading">Chargement…</p>'; frag.appendChild(box);
    app.appendChild(frag); window.scrollTo(0, 0);
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/"; }); window.TG.setMainButton("Retour à l'aperçu", function () { location.hash = "#/"; }); } catch (e) {} }
    const initData = delfInitData();
    if (!initData) { box.innerHTML = "<p>Votre résultat est disponible dans l'application Telegram.</p>"; return; }
    fetch("/api/exam", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ initData: initData, action: "result", exam: code }) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { renderDelfResultInto(box, j, code); })
      .catch(function () { box.innerHTML = "<p>Connexion impossible. Réessayez plus tard.</p>"; });
  }
  function delfGauge(label, n) { const cls = n < 5 ? "elim" : (n >= 15 ? "good" : "mid"); return '<div class="delf-gauge ' + cls + '"><div class="delf-gauge-n">' + n + "<span>/25</span></div><div class=\"delf-gauge-l\">" + label + "</div></div>"; }
  function renderDelfResultInto(box, j, code) {
    const base = "#/examen/" + code, CODE = delfName(code);
    if (!j || j.status === "none") { box.innerHTML = '<div class="completion"><div class="comp-emoji">🎓</div><h2>Aucune copie</h2><p>Vous n\'avez pas encore passé l\'examen DELF ' + CODE + '.</p><div class="rev-actions"><a class="btn btn-primary" href="' + base + '">Passer l\'examen</a></div></div>'; return; }
    if (j.status === "pending") {
      const when = j.availableAt ? new Date(j.availableAt) : null;
      const hleft = j.availableAt ? Math.max(0, Math.ceil((j.availableAt - Date.now()) / 3600000)) : null;
      delfLocalSet(code, { status: "pending", submittedAt: j.submittedAt, availableAt: j.availableAt });
      box.innerHTML = '<div class="completion"><div class="comp-emoji">⏳</div><h2>Copie en correction</h2><p>Votre examen est bien remis. L\'IA rend votre résultat ' + (when ? "vers le <strong>" + when.toLocaleString() + "</strong>" + (hleft != null ? " (dans ~" + hleft + " h)" : "") : "sous 24 h") + '.</p><p>📲 Vous recevrez une notification Telegram dès que c\'est prêt. 🎓</p><div class="rev-actions"><a class="btn btn-primary" href="#/">Retour à l\'aperçu</a></div></div>';
      return;
    }
    const res = j.result || {}, copy = j.copy || {};
    if (window.Progress && window.Progress.setTestScore) window.Progress.setTestScore(code, Math.round((res.total || 0) / (res.sur || 100) * 100), !!res.reussi);
    if (window.Sync && window.Sync.saveNow) { try { window.Sync.saveNow(); } catch (e) {} }
    delfLocalSet(code, { status: "graded", total: res.total, reussi: !!res.reussi });
    box.innerHTML = "";
    const card = el("div", "delf-scorecard");
    const dsur = res.sur || 100, dseuil = res.seuil || 50, dpct = Math.round(res.total / dsur * 100);
    const verdict = res.reussi
      ? '<div class="delf-verdict pass">🎓 Réussi — ' + res.total + "/" + dsur + "</div>"
      : (res.eliminatoire ? '<div class="delf-verdict fail">❌ Éliminatoire — ' + res.total + "/" + dsur + "<br><small>Une épreuve est sous 5/25.</small></div>" : '<div class="delf-verdict fail">📚 Non réussi — ' + res.total + "/" + dsur + "<br><small>Il faut au moins " + dseuil + "/" + dsur + ".</small></div>");
    card.innerHTML =
      '<div class="score-ring ' + (res.reussi ? "pass" : "fail") + '"><span>' + dpct + "%</span></div>" +
      '<div class="delf-gauges">' + delfGauge("🎧 CO", res.co25) + delfGauge("📖 CE", res.ce25) + delfGauge("✍️ EE", res.ee25) + delfGauge("🗣️ EO", res.eo25) + (res.dictee != null ? telcGauge("✒️ Dictée", res.dictee, res.dicteeSur || 25) : "") + "</div>" +
      verdict +
      (res.reussi ? '<p class="delf-next">Bravo ! La suite du parcours est débloquée. 🎉</p>' : '<p class="delf-next">Courage — révisez et repassez l\'examen quand vous voulez. 💪</p>');
    box.appendChild(card);
    box.appendChild(buildDelfCopy(copy, res));
    const row = el("div", "rev-actions delf-pdf-row");
    const pdf = el("button", "btn btn-primary", "📄 Télécharger le PDF"); pdf.type = "button"; pdf.addEventListener("click", function () { exportDelfPDF(res, copy, pdf, code); }); row.appendChild(pdf);
    const cont = el("a", "btn btn-ghost", res.reussi ? "Continuer →" : "Retour à l'aperçu"); cont.href = res.reussi ? (prochaineEtape() || "#/") : "#/"; row.appendChild(cont);
    if (!res.reussi) { const again = el("a", "btn btn-ghost", "🔁 Repasser l'examen"); again.href = base; row.appendChild(again); }
    box.appendChild(row);
  }
  function buildDelfCopy(copy, res) {
    const w = el("div", "delf-copy");
    w.appendChild(el("h2", "delf-copy-h", "📝 Ma copie corrigée"));
    function qcmSec(title, items) {
      if (!items || !items.length) return;
      const s = el("div", "delf-copy-sec"); s.appendChild(el("h3", null, title));
      items.forEach(function (it, i) {
        const ok = it.selected === it.correct;
        const yours = it.selected >= 0 ? it.options[it.selected] : "(sans réponse)";
        const q = el("div", "delf-copy-q " + (ok ? "ok" : "ko"));
        q.innerHTML = '<p class="dq">' + (i + 1) + ". " + delfEsc(it.q) + '</p><p class="da">' + (ok ? "✓" : "✗") + " Votre réponse : <strong>" + delfEsc(yours) + "</strong>" + (ok ? "" : " — Correct : <strong>" + delfEsc(it.options[it.correct]) + "</strong>") + "</p>";
        s.appendChild(q);
      });
      w.appendChild(s);
    }
    qcmSec("🎧 Compréhension de l'oral — " + res.co25 + "/25", copy.co);
    qcmSec("📖 Compréhension des écrits — " + res.ce25 + "/25", copy.ce);
    function prodSec(title, arr, fb, getTxt) {
      if (!arr || !arr.length) return;
      const s = el("div", "delf-copy-sec"); s.appendChild(el("h3", null, title));
      arr.forEach(function (t) { const q = el("div", "delf-copy-prod"); q.innerHTML = '<p class="dc">' + delfEsc(t.consigne) + '</p><div class="dp">' + (delfEsc(getTxt(t)) || "<em>(rien)</em>") + "</div>"; s.appendChild(q); });
      if (fb) { const f = el("div", "delf-copy-fb"); f.innerHTML = "<strong>✨ Correction du coach Zika :</strong><br>" + delfFmt(fb); s.appendChild(f); }
      w.appendChild(s);
    }
    prodSec("✍️ Production écrite — " + res.ee25 + "/25", copy.ee, res.eeFeedback, function (t) { return t.text; });
    prodSec("🗣️ Production orale — " + res.eo25 + "/25", copy.eo, res.eoFeedback, function (t) { return t.transcript; });
    if (copy.dictee) {
      const s = el("div", "delf-copy-sec"); s.appendChild(el("h3", null, "✒️ Dictée — " + res.dictee + "/" + (res.dicteeSur || 25) + " (" + Math.round((res.dictee || 0) / (res.dicteeSur || 25) * 100) + "% de mots justes)"));
      const ref = el("div", "delf-copy-prod"); ref.innerHTML = '<p class="dc">Texte attendu :</p><div class="dp">' + delfEsc(copy.dictee.texte) + "</div>";
      const got = el("div", "delf-copy-prod"); got.innerHTML = '<p class="dc">Votre dictée :</p><div class="dp">' + (delfEsc(copy.dictee.saisie) || "<em>(rien)</em>") + "</div>";
      s.appendChild(ref); s.appendChild(got); w.appendChild(s);
    }
    return w;
  }
  function loadJsPDF() {
    return new Promise(function (resolve, reject) {
      if (window.jspdf && window.jspdf.jsPDF) return resolve(window.jspdf.jsPDF);
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      s.onload = function () { if (window.jspdf && window.jspdf.jsPDF) resolve(window.jspdf.jsPDF); else reject(new Error("jsPDF")); };
      s.onerror = function () { reject(new Error("cdn")); };
      document.head.appendChild(s);
    });
  }
  function exportDelfPDF(res, copy, btn, code) {
    const CODE = String(code || "a2").toUpperCase();
    const old = btn.textContent; btn.disabled = true; btn.textContent = "Préparation…";
    loadJsPDF().then(function (JsPDF) {
      try {
        const doc = new JsPDF({ unit: "pt", format: "a4" }); const M = 40; let y = M; const PW = doc.internal.pageSize.getWidth(), PH = doc.internal.pageSize.getHeight(), W = PW - 2 * M;
        function line(txt, size, style, color) { doc.setFont("helvetica", style || "normal"); doc.setFontSize(size || 11); doc.setTextColor(color ? color[0] : 25, color ? color[1] : 25, color ? color[2] : 25); doc.splitTextToSize(String(txt == null ? "" : txt), W).forEach(function (l) { if (y > PH - M) { doc.addPage(); y = M; } doc.text(l, M, y); y += (size || 11) + 4; }); }
        line("Examen DELF " + CODE + " — Allemand", 18, "bold"); y += 2;
        line("Résultat : " + res.total + "/100 — " + (res.reussi ? "RÉUSSI" : (res.eliminatoire ? "ÉLIMINATOIRE" : "NON RÉUSSI")), 13, "bold", res.reussi ? [21, 128, 61] : [185, 28, 28]);
        line("CO " + res.co25 + "/25   ·   CE " + res.ce25 + "/25   ·   EE " + res.ee25 + "/25   ·   EO " + res.eo25 + "/25", 11); y += 8;
        function qcm(title, items) { if (!items || !items.length) return; line(title, 13, "bold"); items.forEach(function (it, i) { const ok = it.selected === it.correct; line((i + 1) + ". " + it.q, 11, "bold"); line("→ Votre réponse : " + (it.selected >= 0 ? it.options[it.selected] : "(sans réponse)") + (ok ? "  [correct]" : "  [faux] · correct : " + it.options[it.correct]), 10, "normal", ok ? [21, 128, 61] : [185, 28, 28]); }); y += 6; }
        qcm("Comprehension de l'oral (" + res.co25 + "/25)", copy.co);
        qcm("Comprehension des ecrits (" + res.ce25 + "/25)", copy.ce);
        function prod(title, arr, fb, key) { if (!arr || !arr.length) return; line(title, 13, "bold"); arr.forEach(function (t) { line("Consigne : " + t.consigne, 10, "italic"); line(t[key] || "(rien)", 11); y += 2; }); if (fb) line("Correction IA : " + String(fb).replace(/\*\*/g, ""), 10, "normal", [70, 70, 70]); y += 6; }
        prod("Production ecrite (" + res.ee25 + "/25)", copy.ee, res.eeFeedback, "text");
        prod("Production orale (" + res.eo25 + "/25)", copy.eo, res.eoFeedback, "transcript");
        if (copy.dictee) { line("Dictee (" + res.dictee + "/" + (res.dicteeSur || 25) + (copy.dictee.score != null ? ", " + copy.dictee.score + "% justes" : "") + ")", 13, "bold"); line("Texte attendu : " + copy.dictee.texte, 10, "italic"); line("Votre dictee : " + (copy.dictee.saisie || "(rien)"), 11); y += 6; }
        doc.save("DELF_" + CODE + "_resultat.pdf");
        btn.textContent = "✓ PDF téléchargé";
      } catch (e) { delfPrintFallback(res, copy, code); btn.textContent = old; }
      setTimeout(function () { btn.disabled = false; btn.textContent = old; }, 1800);
    }).catch(function () { delfPrintFallback(res, copy, code); btn.disabled = false; btn.textContent = old; });
  }
  function delfPrintFallback(res, copy, code) {
    const CODE = String(code || "a2").toUpperCase();
    let h = '<html><head><meta charset="utf-8"><title>DELF ' + CODE + ' — résultat</title><style>body{font-family:sans-serif;max-width:760px;margin:24px auto;padding:0 16px;color:#111}h1{font-size:22px}h3{margin:18px 0 6px}.ko{color:#b91c1c}.ok{color:#15803d}.p{background:#f3f4f6;padding:8px;border-radius:6px;white-space:pre-wrap}</style></head><body>';
    h += "<h1>Examen DELF " + CODE + " — " + res.total + "/100 — " + (res.reussi ? "RÉUSSI" : (res.eliminatoire ? "ÉLIMINATOIRE" : "NON RÉUSSI")) + "</h1>";
    h += "<p>CO " + res.co25 + "/25 · CE " + res.ce25 + "/25 · EE " + res.ee25 + "/25 · EO " + res.eo25 + "/25</p>";
    function qcm(title, items) { if (!items || !items.length) return; h += "<h3>" + title + "</h3>"; items.forEach(function (it, i) { const ok = it.selected === it.correct; h += "<p class='" + (ok ? "ok" : "ko") + "'>" + (i + 1) + ". " + delfEsc(it.q) + "<br>Votre réponse : " + delfEsc(it.selected >= 0 ? it.options[it.selected] : "(sans réponse)") + (ok ? " ✓" : " ✗ — correct : " + delfEsc(it.options[it.correct])) + "</p>"; }); }
    qcm("Compréhension de l'oral", copy.co); qcm("Compréhension des écrits", copy.ce);
    function prod(title, arr, fb, key) { if (!arr || !arr.length) return; h += "<h3>" + title + "</h3>"; arr.forEach(function (t) { h += "<p><em>" + delfEsc(t.consigne) + "</em></p><div class='p'>" + delfEsc(t[key] || "(rien)") + "</div>"; }); if (fb) h += "<p><strong>Correction IA :</strong><br>" + delfFmt(fb) + "</p>"; }
    prod("Production écrite", copy.ee, res.eeFeedback, "text"); prod("Production orale", copy.eo, res.eoFeedback, "transcript");
    h += "</body></html>";
    const w = window.open("", "_blank"); if (!w) { toast("Activez les pop-ups pour générer le PDF, ou faites une capture d'écran."); return; }
    w.document.write(h); w.document.close(); w.focus(); setTimeout(function () { try { w.print(); } catch (e) {} }, 400);
  }

  /* ====================================================================
     EXAMEN telc B1 — deux parties indépendantes (écrit /225, oral /75),
     ≥ 60 % à chacune, bénéfice gardé. Réutilise le moteur DELF (timer,
     écrans séquencés, QCM/EE/EO, remise différée 24 h, PDF).
     ==================================================================== */
  function telcData(code) { return window["TELC_" + String(code).toUpperCase()]; }
  function telcName(code) { return code === "finalb" ? "B1 + B2 (combiné)" : code === "finalc" ? "C1 + C2 (combiné)" : String(code).toUpperCase(); }
  function telcLocalGet(code) { try { return JSON.parse(localStorage.getItem("telc_" + code) || "null"); } catch (e) { return null; } }
  function telcLocalSet(code, o) { try { localStorage.setItem("telc_" + code, JSON.stringify(o || {})); } catch (e) {} }
  function telcLang() { return (window.I18N && window.I18N.lang && window.I18N.lang()) || "fr"; }
  function telcGuardOK(code) { const G = { b1: ["final", "B1"], b2: ["b1", "B2"], c1: ["finalb", "C1"], c2: ["c1", "C2"], finalb: ["b2", null], finalc: ["c2", null] }, g = G[code] || G.b1; return examPasse(g[0]) && (g[1] ? niveauTermine(g[1]) : true); }

  function renderTelcHub(code) {
    const T = telcData(code);
    if (!T || !telcGuardOK(code)) { location.hash = "#/"; return; }
    const base = "#/examen/" + code, CODE = telcName(code);
    app.innerHTML = ""; const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top"); top.innerHTML = '<a class="btn-link" href="#/">← Aperçu</a><span class="lesson-top-mod">📜 telc ' + CODE + '</span>'; frag.appendChild(top);
    const head = el("header", "test-head delf-head"); head.innerHTML = '<div class="lesson-num">Examen telc Deutsch ' + CODE + '</div><h1>📜 telc ' + CODE + '</h1><p>Deux parties à réussir séparément (≥ 60 % chacune). Le bénéfice d\'une partie réussie est conservé : vous ne repassez que la partie manquée.</p>'; frag.appendChild(head);
    const loc = telcLocalGet(code) || {};
    const certified = !!((window.Progress.getTestScore(code) || {}).reussi);
    function partCard(pkey, label, icone, route, sur, seuil, desc) {
      const s = loc[pkey] || {}; const passed = certified || !!s.passed; const st = passed ? "passed" : (s.status || "none");
      const card = el("div", "delf-doc telc-part " + (passed ? "ok" : (st === "pending" ? "pending" : "")));
      let status;
      if (passed) status = "✅ Réussie" + (s.total != null ? " — " + s.total + "/" + sur : "");
      else if (st === "pending") status = "⏳ En correction (résultat sous 24 h)";
      else if (s.total != null) status = "📚 Non réussie — " + s.total + "/" + sur + " (il faut " + seuil + ")";
      else status = "À passer";
      card.innerHTML = '<h3 class="delf-doc-t">' + icone + " " + label + " — /" + sur + '</h3><p class="delf-q-t">' + desc + '</p><p><strong>' + status + "</strong></p>";
      const row = el("div", "examen-actions");
      if (st === "pending" && !passed) { const b = el("a", "btn btn-primary", "Voir l'état de ma copie"); b.href = base + "/resultat/" + route; row.appendChild(b); }
      else {
        const b = el("a", "btn " + (passed ? "btn-ghost" : "btn-primary"), passed ? "Repasser cette partie" : "🎓 Passer cette partie"); b.href = base + "/" + route; row.appendChild(b);
        if (s.status === "graded" || passed) { const r = el("a", "btn btn-ghost", "📊 Résultat"); r.href = base + "/resultat/" + route; row.appendChild(r); }
      }
      card.appendChild(row); return card;
    }
    const P = T.parts; const sec = el("section", "section");
    sec.appendChild(partCard("schriftlich", "Épreuve écrite", "📝", "ecrit", P.schriftlich.sur, P.schriftlich.seuil, "Compréhension écrite/orale + production(s) écrite(s)."));
    sec.appendChild(partCard("muendlich", "Épreuve orale", "🗣️", "oral", P.muendlich.sur, P.muendlich.seuil, "3 parties, notées par l'IA (préparation 20 min)."));
    frag.appendChild(sec);
    const cert = el("div", "delf-verdict " + (certified ? "pass" : "fail"));
    cert.innerHTML = certified ? "🏅 Certificat telc " + CODE + " obtenu — la suite du parcours est débloquée !" : "🎓 Réussissez les DEUX parties (≥ 60 % chacune) pour obtenir le certificat " + CODE + ".";
    const cs = el("section", "section"); cs.appendChild(cert); frag.appendChild(cs);
    app.appendChild(frag);
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = "#/"; }); window.TG.setMainButton("Retour à l'aperçu", function () { location.hash = "#/"; }); } catch (e) {} }
    window.scrollTo(0, 0);
  }

  function renderTelcPart(code, part) {
    const T = telcData(code);
    if (!T || !telcGuardOK(code)) { location.hash = "#/"; return; }
    const base = "#/examen/" + code, CODE = telcName(code);
    const pkey = part === "muendlich" ? "muendlich" : "schriftlich";
    const route = pkey === "muendlich" ? "oral" : "ecrit";
    const dkey = code + "-" + pkey;
    const loc0 = telcLocalGet(code) || {};
    if (loc0[pkey] && loc0[pkey].status === "pending" && !loc0[pkey].passed) { location.hash = base + "/resultat/" + route; return; }
    // Rattrapage : corriger les exercices ratés du niveau avant l'examen.
    if (!(loc0[pkey] && loc0[pkey].passed)) { const rr = ratesAvantExamen(code); if (rr.length) return renderRattrapage(code, rr); }
    const SC = { brand: "📜 telc " + CODE, hashPrefix: base, backHash: base };

    function submitPart(key, payload) {
      if (window.TG) { try { window.TG.closingConfirmation(false); } catch (e) {} }
      app.innerHTML = ""; const frag = document.createDocumentFragment();
      const top = el("div", "lesson-top"); top.innerHTML = '<span class="btn-link" style="visibility:hidden">·</span><span class="lesson-top-mod">📜 telc ' + CODE + '</span>'; frag.appendChild(top);
      const head = el("header", "test-head delf-head"); head.innerHTML = '<div class="lesson-num">Remise de la copie</div><h1>📨 Envoi en cours…</h1>'; frag.appendChild(head); app.appendChild(frag); window.scrollTo(0, 0);
      const initData = delfInitData();
      if (!initData) { telcSubmitted(null, "no-server"); return; }
      fetch("/api/exam", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ initData: initData, action: "submit", exam: key, payload: payload }) })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (j) { if (j && j.status === "pending") { const lc = telcLocalGet(code) || {}; lc[pkey] = { status: "pending", submittedAt: j.submittedAt, availableAt: j.availableAt }; telcLocalSet(code, lc); examDraftClear(dkey); telcSubmitted(j, null); } else telcSubmitted(null, "error"); })
        .catch(function () { telcSubmitted(null, "error"); });
    }
    function telcSubmitted(j, err) {
      app.innerHTML = ""; const frag = document.createDocumentFragment();
      const top = el("div", "lesson-top"); top.innerHTML = '<a class="btn-link" href="' + base + '">← telc ' + CODE + '</a><span class="lesson-top-mod">📜 telc ' + CODE + '</span>'; frag.appendChild(top);
      const c = el("div", "completion " + (err ? "ko" : "ok") + " delf-submitted");
      const pn = pkey === "muendlich" ? "orale" : "écrite";
      if (err === "no-server") c.innerHTML = '<div class="comp-emoji">📋</div><h2>Partie ' + pn + ' terminée</h2><p>La remise et la correction par l\'IA nécessitent l\'application dans <strong>Telegram</strong>.</p>';
      else if (err === "error") c.innerHTML = '<div class="comp-emoji">⚠️</div><h2>Remise impossible</h2><p>La connexion a échoué. Vérifiez votre réseau et réessayez.</p>';
      else { const when = (j && j.availableAt) ? new Date(j.availableAt) : null; c.innerHTML = '<div class="comp-emoji">📨</div><h2>Copie ' + pn + ' remise !</h2><p>Le coach Zika (IA) corrige votre copie et vous enverra le résultat' + (when ? " vers le <strong>" + when.toLocaleString() + "</strong>" : " sous 24 h") + ', par notification Telegram.</p>'; }
      const actions = el("div", "rev-actions");
      const hub = el("a", "btn btn-primary", "Retour à telc " + CODE); hub.href = base; actions.appendChild(hub);
      if (!err) { const stb = el("a", "btn btn-ghost", "Voir l'état de ma copie"); stb.href = base + "/resultat/" + route; actions.appendChild(stb); }
      c.appendChild(actions); frag.appendChild(c); app.appendChild(frag);
      if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = base; }); window.TG.setMainButton("Retour à telc " + CODE, function () { location.hash = base; }); } catch (e) {} }
      window.scrollTo(0, 0);
    }

    if (pkey === "schriftlich") {
      const P = T.parts.schriftlich;
      if (P.format === "c2") {
        // C2 : Leseverstehen (auto) → Hören und Schreiben (synthèse, IA) → Schriftlicher Ausdruck (IA).
        const st2 = { lesenPts: 0, lesenItems: [], hs: [], schreiben: [] };
        const c2subNow = function () { submitPart(code + "-schriftlich", { langue: telcLang(), lesen: st2.lesenPts, copy: { lesen: st2.lesenItems, hoerenSchreiben: st2.hs, schreiben: st2.schreiben } }); };
        const c2sub = function () {
          const rows = [];
          recapQcmRow(rows, "📖 Leseverstehen", st2.lesenItems);
          const hw = recapWC(st2.hs[0] && st2.hs[0].text); rows.push({ label: "🎧✍️ Hören und Schreiben", value: recapMots(hw), warn: hw === 0 });
          const sw = recapWC(st2.schreiben[0] && st2.schreiben[0].text); rows.push({ label: "✍️ Schriftlicher Ausdruck", value: recapMots(sw), warn: sw === 0 });
          examRecap(SC, rows, c2subNow);
        };
        const c2write = function (Tk, rows, ph, phase, primary, onDone) {
          const body = el("div", "delf-ee"); const card = el("div", "delf-doc");
          card.appendChild(el("h3", "delf-doc-t", delfEsc(Tk.titre || P.schreiben.titre)));
          card.appendChild(el("p", "delf-q-t", delfEsc(Tk.consigne)));
          if (Tk.leitpunkte) { const ul = el("ul", "delf-points"); Tk.leitpunkte.forEach(function (p) { const li = el("li", null); li.textContent = p; ul.appendChild(li); }); card.appendChild(ul); }
          const ta = el("textarea", "production-input"); ta.rows = rows; ta.setAttribute("placeholder", ph);
          const meta = wordMeter(ta, Tk.minMots, Tk.maxMots);
          return { card: card, body: body, ta: ta, meta: meta };
        };
        const c2_3 = function () {
          const Tk = P.schreiben.tache; const u = c2write(Tk, 10, "Schreiben Sie hier Ihren Essay…");
          u.card.appendChild(u.ta); u.card.appendChild(u.meta); u.body.appendChild(u.card);
          delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · 3 / 3", icone: "✍️", titre: P.schreiben.titre, intro: Math.round(P.durees.schreiben / 60) + " min — rédigez votre essai à partir des sources.", body: u.body, timerSeconds: P.durees.schreiben, primary: "Remettre la copie écrite ✅", onPrimary: function () { st2.schreiben = [{ id: Tk.id, consigne: Tk.consigne, text: u.ta.value.trim() }]; examDraftSet(dkey, { state: st2, step: "submit" }); c2sub(); } }));
        };
        const c2pause = function () {
          const body = el("div", "completion");
          body.innerHTML = '<div class="comp-emoji">☕</div><h2>Pause obligatoire — ' + Math.round(P.durees.pause / 60) + ' min</h2><p>Comme à l\'examen officiel telc C2, une pause est prévue avant l\'épreuve de production écrite. Reposez-vous, puis reprenez. Le minuteur passe automatiquement à la suite à la fin de la pause — vous pouvez aussi reprendre dès que vous êtes prêt(e).</p>';
          delfScreen(Object.assign({}, SC, { phase: "Pause obligatoire", icone: "☕", titre: "Pause", intro: "", body: body, timerSeconds: P.durees.pause, primary: "Reprendre l'examen →", onPrimary: function () { examDraftSet(dkey, { state: st2, step: "c2_3" }); c2_3(); } }));
        };
        const c2_2 = function () {
          const HS = P.hoerenSchreiben; const u = c2write(HS.tache, 7, "Ihre Zusammenfassung…");
          const card = el("div", "delf-doc"); card.appendChild(el("h3", "delf-doc-t", delfEsc(HS.titre))); card.appendChild(el("p", "delf-q-t", delfEsc(HS.intro)));
          HS.audios.forEach(function (a) { let plays = 0; const b = el("button", "btn btn-audio", "🔊 " + a.titre + " (2 max)"); b.type = "button"; b.addEventListener("click", function () { if (plays >= 2) { toast("Vous avez déjà écouté 2 fois."); return; } plays++; if (window.Speech) window.Speech.speak(a.audio, { rate: 0.98 }); const rest = 2 - plays; b.textContent = rest > 0 ? "🔊 Réécouter (" + rest + ")" : "🔇 Écoutes épuisées"; if (plays >= 2) b.disabled = true; }); card.appendChild(b); });
          card.appendChild(el("p", "delf-q-t", delfEsc(HS.tache.consigne))); card.appendChild(u.ta); card.appendChild(u.meta);
          const body = el("div", "delf-ee"); body.appendChild(card);
          delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · 2 / 3", icone: HS.icone, titre: HS.titre, intro: Math.round(P.durees.hoerenSchreiben / 60) + " min — écoutez (2× max) puis rédigez votre synthèse.", body: body, timerSeconds: P.durees.hoerenSchreiben, primary: "Terminer cette partie →", onPrimary: function () { st2.hs = [{ id: HS.tache.id, consigne: HS.tache.consigne, text: u.ta.value.trim() }]; examDraftSet(dkey, { state: st2, step: P.durees.pause ? "pause" : "c2_3" }); (P.durees.pause ? c2pause() : c2_3()); } }));
        };
        const c2_1 = function () {
          const lesenR = delfQCM(P.lesen.blocs, "ce");
          const body = el("div", "section-x"); body.appendChild(el("p", "delf-q-t", delfEsc(P.lesen.intro))); body.appendChild(lesenR.el);
          delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · 1 / 3", icone: "📖", titre: "Leseverstehen", intro: Math.round(P.durees.lesen / 60) + " min — lisez et répondez ; aucune correction.", body: body, timerSeconds: P.durees.lesen, primary: "Terminer cette partie →", onPrimary: function () { const lc = lesenR.collect(); st2.lesenPts = Math.round(lc.correct / (lc.total || 1) * P.lesen.sur); st2.lesenItems = lc.items; examDraftSet(dkey, { state: st2, step: "c2_2" }); c2_2(); } }));
        };
        const showIntroC2 = function () {
          const intro2 = el("div", "delf-intro-body");
          intro2.innerHTML = '<div class="delf-rules"><p>Épreuve écrite telc ' + CODE + ' — <strong>/' + P.sur + '</strong> (réussite ≥ ' + P.seuil + '). Trois temps :</p><ul class="delf-epreuves"><li>📖 Leseverstehen — <strong>' + Math.round(P.durees.lesen / 60) + ' min</strong></li><li>🎧✍️ Hören und Schreiben — <strong>' + Math.round(P.durees.hoerenSchreiben / 60) + ' min</strong></li><li>✍️ Schriftlicher Ausdruck — <strong>' + Math.round(P.durees.schreiben / 60) + ' min</strong></li></ul><p>Aucune correction pendant l\'épreuve ; résultat + copie corrigée + PDF sous 24 h. Un examen interrompu peut être <strong>repris</strong>.</p></div>';
          delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite", icone: "📝", titre: "Schriftliche Prüfung", intro: "", body: intro2, primary: "Commencer l'épreuve écrite →", onPrimary: c2_1 }));
        };
        const draftC2 = examDraftGet(dkey);
        if (draftC2 && draftC2.state && draftC2.step) {
          const rmap2 = { c2_2: c2_2, pause: c2pause, c2_3: c2_3, submit: c2sub }, rfn2 = rmap2[draftC2.step];
          if (rfn2) { examResume(SC.brand, "telc " + CODE + " — écrit", function () { try { Object.keys(draftC2.state).forEach(function (k) { st2[k] = draftC2.state[k]; }); } catch (e) {} rfn2(); }, function () { examDraftClear(dkey); showIntroC2(); }); return; }
        }
        showIntroC2();
        return;
      }
      const st = { lesenPts: 0, sbPts: 0, hoerenPts: 0, lesenItems: [], sbItems: [], hoerenItems: [], schreiben: [], dictee: null };
      const dLS = Math.round(P.durees.leseSb / 60), dH = Math.round(P.durees.hoeren / 60), dS = Math.round(P.durees.schreiben / 60);
      const doSubmitWNow = function () { const payload = { langue: telcLang(), lesen: st.lesenPts, sprachbausteine: st.sbPts, hoeren: st.hoerenPts, copy: { lesen: st.lesenItems, sprachbausteine: st.sbItems, hoeren: st.hoerenItems, schreiben: st.schreiben } }; if (st.dictee) { payload.dictee = st.dictee.points; payload.dicteeSur = st.dictee.sur; payload.copy.dictee = { texte: st.dictee.texte, saisie: st.dictee.saisie, score: st.dictee.score, sur: st.dictee.sur }; } submitPart(code + "-schriftlich", payload); };
      const doSubmitW = function () {
        const rows = [];
        recapQcmRow(rows, "📖 Leseverstehen", st.lesenItems);
        recapQcmRow(rows, "🧩 Sprachbausteine", st.sbItems);
        recapQcmRow(rows, "🎧 Hörverstehen", st.hoerenItems);
        const sw = recapWC(st.schreiben[0] && st.schreiben[0].text); rows.push({ label: "✍️ Schreiben", value: recapMots(sw), warn: sw === 0 });
        if (st.dictee) { const dw = recapWC(st.dictee.saisie); rows.push({ label: "✒️ Dictée", value: recapMots(dw) + " saisis", warn: dw === 0 }); }
        examRecap(SC, rows, doSubmitWNow);
      };
      const sDictee = function () { const r = delfDictee(P.dictee); delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · dictée", icone: "✒️", titre: P.dictee.titre || "Dictée", intro: "Niveau " + (P.dictee.niveau || "") + " — écoutez (2× max) et écrivez exactement. Aucune correction.", body: r.el, timerSeconds: P.dictee.duree || 900, primary: "Terminer la dictée →", onPrimary: function () { st.dictee = r.collect(); examDraftSet(dkey, { state: st, step: "submit" }); doSubmitW(); } })); };
      const s3 = function () {
        const Tk = P.schreiben.tache;
        const body = el("div", "delf-ee"); const card = el("div", "delf-doc");
        card.appendChild(el("h3", "delf-doc-t", delfEsc(Tk.titre)));
        card.appendChild(el("p", "delf-q-t", delfEsc(Tk.consigne)));
        const ul = el("ul", "delf-points"); Tk.leitpunkte.forEach(function (p) { const li = el("li", null); li.textContent = p; ul.appendChild(li); }); card.appendChild(ul);
        const ta = el("textarea", "production-input"); ta.rows = 8; ta.setAttribute("placeholder", "Schreiben Sie hier auf Deutsch…");
        card.appendChild(ta); card.appendChild(wordMeter(ta, Tk.minMots, Tk.maxMots)); body.appendChild(card);
        delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · 3 / 3", icone: "✍️", titre: "Schriftlicher Ausdruck", intro: dS + " min — rédigez votre texte (la correction viendra plus tard).", body: body, timerSeconds: P.durees.schreiben, primary: "Remettre la copie écrite ✅", onPrimary: function () {
          st.schreiben = [{ id: Tk.id, consigne: Tk.consigne, text: ta.value.trim() }];
          examDraftSet(dkey, { state: st, step: P.dictee ? "dictee" : "submit" }); (P.dictee ? sDictee() : doSubmitW());
        } }));
      };
      const s2 = function () {
        const hR = delfQCM(P.hoeren.documents, "co");
        const body = el("div", "section-x"); body.appendChild(el("p", "delf-q-t", delfEsc(P.hoeren.intro))); body.appendChild(hR.el);
        delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · 2 / 3", icone: "🎧", titre: "Hörverstehen", intro: dH + " min.", body: body, timerSeconds: P.durees.hoeren, primary: "Terminer cette partie →", onPrimary: function () { const hc = hR.collect(); st.hoerenPts = Math.round(hc.correct / (hc.total || 1) * P.hoeren.sur); st.hoerenItems = hc.items; examDraftSet(dkey, { state: st, step: "s3" }); s3(); } }));
      };
      const s1 = function () {
        const lesenR = delfQCM(P.lesen.blocs, "ce");
        const sbDoc = { titre: P.sprachbausteine.titre, texte: P.sprachbausteine.intro, questions: P.sprachbausteine.questions };
        const sbR = delfQCM([sbDoc], "ce");
        const body = el("div", "section-x");
        body.appendChild(el("h2", "delf-copy-h", "📖 " + P.lesen.titre + " (/" + P.lesen.sur + ")"));
        body.appendChild(el("p", "delf-q-t", delfEsc(P.lesen.intro)));
        body.appendChild(lesenR.el);
        body.appendChild(el("h2", "delf-copy-h", "🧩 " + P.sprachbausteine.titre + " (/" + P.sprachbausteine.sur + ")"));
        body.appendChild(sbR.el);
        delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite · 1 / 3", icone: "📖", titre: "Leseverstehen & Sprachbausteine", intro: dLS + " min — lisez et répondez ; aucune correction ne s'affiche.", body: body, timerSeconds: P.durees.leseSb, primary: "Terminer cette partie →", onPrimary: function () {
          const lc = lesenR.collect(), sc = sbR.collect();
          st.lesenPts = Math.round(lc.correct / (lc.total || 1) * P.lesen.sur); st.lesenItems = lc.items;
          st.sbPts = Math.round(sc.correct / (sc.total || 1) * P.sprachbausteine.sur); st.sbItems = sc.items;
          examDraftSet(dkey, { state: st, step: "s2" }); s2();
        } }));
      };
      const showIntroS = function () {
        const intro = el("div", "delf-intro-body");
        intro.innerHTML = '<div class="delf-rules"><p>Épreuve écrite telc ' + CODE + ' — <strong>/' + P.sur + '</strong> (réussite ≥ ' + P.seuil + '). Trois temps enchaînés :</p><ul class="delf-epreuves"><li>📖 Leseverstehen &amp; 🧩 Sprachbausteine — <strong>' + dLS + ' min</strong></li><li>🎧 Hörverstehen — <strong>' + dH + ' min</strong></li><li>✍️ Schriftlicher Ausdruck — <strong>' + dS + ' min</strong></li></ul><p>Aucune correction pendant l\'épreuve ; votre note, votre copie corrigée et votre PDF arrivent sous 24 h. Un examen interrompu peut être <strong>repris</strong>.</p></div>';
        delfScreen(Object.assign({}, SC, { phase: "Épreuve écrite", icone: "📝", titre: "Schriftliche Prüfung", intro: "", body: intro, primary: "Commencer l'épreuve écrite →", onPrimary: s1 }));
      };
      const draftS = examDraftGet(dkey);
      if (draftS && draftS.state && draftS.step) {
        const rmap = { s2: s2, s3: s3, dictee: sDictee, submit: doSubmitW }, rfn = rmap[draftS.step];
        if (rfn) { examResume(SC.brand, "telc " + CODE + " — écrit", function () { try { Object.keys(draftS.state).forEach(function (k) { st[k] = draftS.state[k]; }); } catch (e) {} rfn(); }, function () { examDraftClear(dkey); showIntroS(); }); return; }
      }
      showIntroS();
    } else {
      const P = T.parts.muendlich;
      const passation = function () {
        const r = delfEO(P.taches, CODE);
        delfScreen(Object.assign({}, SC, { phase: "Épreuve orale · passation", icone: "🗣️", titre: "Mündliche Prüfung", intro: "Présentation au micro + discussion en direct avec l'examinateur. Aucune correction pendant l'épreuve.", body: r.el, timerSeconds: P.duree, primary: "Remettre la copie orale ✅", onPrimary: function () { const oral = r.collect(); const rows = oral.map(function (t, i) { const w = recapWC(t.candidate || t.transcript); return { label: "🗣️ Partie " + (i + 1), value: w > 0 ? recapMots(w) : "non enregistrée", warn: w === 0 }; }); examRecap(SC, rows, function () { submitPart(code + "-muendlich", { langue: telcLang(), copy: { oral: oral } }); }); } }));
      };
      const prep = function () {
        const body = el("div", "delf-eo-prep");
        P.taches.forEach(function (t) { const c = el("div", "delf-doc"); c.appendChild(el("h3", "delf-doc-t", delfEsc(t.titre))); c.appendChild(el("p", "delf-q-t", delfEsc(t.consigne))); if (t.points) { const ul = el("ul", "delf-points"); t.points.forEach(function (p) { const li = el("li", null); li.textContent = p; ul.appendChild(li); }); c.appendChild(ul); } body.appendChild(c); });
        body.appendChild(el("p", "delf-q-t", "📝 20 minutes de préparation. Notez vos idées, puis enregistrez-vous."));
        const note = el("textarea", "production-input"); note.rows = 4; note.setAttribute("placeholder", "Brouillon (non noté)…"); body.appendChild(note);
        delfScreen(Object.assign({}, SC, { phase: "Épreuve orale · préparation (20 min)", icone: "🗣️", titre: "Vorbereitung", intro: "Préparez les 3 parties.", body: body, timerSeconds: P.prep, primary: "Je suis prêt(e) — parler →", onPrimary: function () { examDraftSet(dkey, { state: {}, step: "passation" }); passation(); } }));
      };
      const draftM = examDraftGet(dkey);
      if (draftM && draftM.step === "passation") { examResume(SC.brand, "telc " + CODE + " — oral", passation, function () { examDraftClear(dkey); prep(); }); }
      else prep();
    }
  }

  function renderTelcResult(code, routePart) {
    const part = routePart === "oral" ? "muendlich" : "schriftlich";
    const key = code + "-" + part, base = "#/examen/" + code, CODE = telcName(code);
    app.innerHTML = ""; const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top"); top.innerHTML = '<a class="btn-link" href="' + base + '">← telc ' + CODE + '</a><span class="lesson-top-mod">📜 telc ' + CODE + '</span>'; frag.appendChild(top);
    const head = el("header", "test-head delf-head"); head.innerHTML = '<div class="lesson-num">telc ' + CODE + '</div><h1>📊 Résultat — ' + (part === "muendlich" ? "oral" : "écrit") + "</h1>"; frag.appendChild(head);
    const box = el("div", "delf-result-box"); box.innerHTML = '<p class="delf-loading">Chargement…</p>'; frag.appendChild(box);
    app.appendChild(frag); window.scrollTo(0, 0);
    if (window.TG) { try { window.TG.closingConfirmation(false); window.TG.showBackButton(function () { location.hash = base; }); window.TG.setMainButton("Retour à telc " + CODE, function () { location.hash = base; }); } catch (e) {} }
    const initData = delfInitData();
    if (!initData) { box.innerHTML = "<p>Votre résultat est disponible dans l'application Telegram.</p>"; return; }
    fetch("/api/exam", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ initData: initData, action: "result", exam: key }) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { renderTelcResultInto(box, j, part, code); })
      .catch(function () { box.innerHTML = "<p>Connexion impossible. Réessayez plus tard.</p>"; });
  }
  function renderTelcResultInto(box, j, part, code) {
    const route = part === "muendlich" ? "oral" : "ecrit", base = "#/examen/" + code, CODE = telcName(code);
    if (!j || j.status === "none") { box.innerHTML = '<div class="completion"><div class="comp-emoji">📜</div><h2>Aucune copie</h2><p>Vous n\'avez pas encore passé cette partie.</p><div class="rev-actions"><a class="btn btn-primary" href="' + base + '/' + route + '">Passer cette partie</a></div></div>'; return; }
    if (j.status === "pending") {
      const when = j.availableAt ? new Date(j.availableAt) : null;
      const hleft = j.availableAt ? Math.max(0, Math.ceil((j.availableAt - Date.now()) / 3600000)) : null;
      const lc = telcLocalGet(code) || {}; lc[part] = { status: "pending", submittedAt: j.submittedAt, availableAt: j.availableAt }; telcLocalSet(code, lc);
      box.innerHTML = '<div class="completion"><div class="comp-emoji">⏳</div><h2>Copie en correction</h2><p>Résultat ' + (when ? "vers le <strong>" + when.toLocaleString() + "</strong>" + (hleft != null ? " (dans ~" + hleft + " h)" : "") : "sous 24 h") + '.</p><p>📲 Notification Telegram à la clé.</p><div class="rev-actions"><a class="btn btn-primary" href="' + base + '">Retour à telc ' + CODE + '</a></div></div>';
      return;
    }
    const res = j.result || {}, copy = j.copy || {};
    const lc = telcLocalGet(code) || {}; lc[part] = { status: "graded", total: res.total, passed: !!res.passed }; telcLocalSet(code, lc);
    if (window.Sync && window.Sync.load) { try { window.Sync.load(function () {}); } catch (e) {} }
    box.innerHTML = "";
    box.appendChild(telcScoreCard(res, part));
    box.appendChild(buildTelcCopy(copy, res, part));
    const row = el("div", "rev-actions delf-pdf-row");
    const pdf = el("button", "btn btn-primary", "📄 Télécharger le PDF"); pdf.type = "button"; pdf.addEventListener("click", function () { exportTelcPDF(res, copy, part, pdf, code); }); row.appendChild(pdf);
    const hub = el("a", "btn btn-ghost", "Retour à telc " + CODE); hub.href = base; row.appendChild(hub);
    if (!res.passed) { const again = el("a", "btn btn-ghost", "🔁 Repasser cette partie"); again.href = base + "/" + route; row.appendChild(again); }
    box.appendChild(row);
  }
  function telcGauge(label, n, max) { const ratio = max ? n / max : 0; const cls = ratio < 0.5 ? "elim" : (ratio >= 0.7 ? "good" : "mid"); return '<div class="delf-gauge ' + cls + '"><div class="delf-gauge-n">' + n + "<span>/" + max + "</span></div><div class=\"delf-gauge-l\">" + label + "</div></div>"; }
  function telcScoreCard(res, part) {
    const c = el("div", "delf-scorecard"); const pct = res.sur ? Math.round(res.total / res.sur * 100) : 0;
    let inner = '<div class="score-ring ' + (res.passed ? "pass" : "fail") + '"><span>' + res.total + "</span></div>";
    inner += '<p class="delf-q-t">Total ' + (part === "muendlich" ? "oral" : "écrit") + " : <strong>" + res.total + " / " + res.sur + "</strong> (" + pct + "%) — il faut " + res.seuil + "</p>";
    if (part !== "muendlich") {
      const gs = [];
      if (res.lesenMax) gs.push(telcGauge("📖 Lesen", res.lesen, res.lesenMax));
      if (res.sbMax) gs.push(telcGauge("🧩 Sprachb.", res.sprachbausteine, res.sbMax));
      if (res.hoerenMax) gs.push(telcGauge("🎧 Hören", res.hoeren, res.hoerenMax));
      if (res.hsMax) gs.push(telcGauge("🎧✍️ Hör+Schr", res.hs, res.hsMax));
      gs.push(telcGauge("✍️ Schreiben", res.schreiben, res.schreibenMax || 45));
      if (res.dicteeMax) gs.push(telcGauge("✒️ Dictée", res.dictee, res.dicteeMax));
      inner += '<div class="delf-gauges">' + gs.join("") + "</div>";
    }
    inner += '<div class="delf-verdict ' + (res.passed ? "pass" : "fail") + '">' + (res.passed ? "✅ Partie " + (part === "muendlich" ? "orale" : "écrite") + " RÉUSSIE" : "📚 Partie non réussie — repassez-la") + "</div>";
    c.innerHTML = inner; return c;
  }
  function buildTelcCopy(copy, res, part) {
    const w = el("div", "delf-copy"); w.appendChild(el("h2", "delf-copy-h", "📝 Ma copie corrigée"));
    function qcmSec(title, items) {
      if (!items || !items.length) return;
      const s = el("div", "delf-copy-sec"); s.appendChild(el("h3", null, title));
      items.forEach(function (it, i) {
        const ok = it.selected === it.correct; const yours = it.selected >= 0 ? it.options[it.selected] : "(sans réponse)";
        const q = el("div", "delf-copy-q " + (ok ? "ok" : "ko"));
        q.innerHTML = '<p class="dq">' + (i + 1) + ". " + delfEsc(it.q) + '</p><p class="da">' + (ok ? "✓" : "✗") + " Votre réponse : <strong>" + delfEsc(yours) + "</strong>" + (ok ? "" : " — Correct : <strong>" + delfEsc(it.options[it.correct]) + "</strong>") + "</p>";
        s.appendChild(q);
      });
      w.appendChild(s);
    }
    function prodSec(title, arr, fb, key) {
      if (!arr || !arr.length) return;
      const s = el("div", "delf-copy-sec"); s.appendChild(el("h3", null, title));
      arr.forEach(function (t) { const q = el("div", "delf-copy-prod"); q.innerHTML = '<p class="dc">' + delfEsc(t.consigne) + '</p><div class="dp">' + (delfEsc(t[key]) || "<em>(rien)</em>") + "</div>"; s.appendChild(q); });
      if (fb) { const f = el("div", "delf-copy-fb"); f.innerHTML = "<strong>✨ Correction du coach Zika :</strong><br>" + delfFmt(fb); s.appendChild(f); }
      w.appendChild(s);
    }
    if (part === "muendlich") prodSec("🗣️ Production orale — " + res.total + "/" + (res.sur || 75), copy.oral, res.oralFeedback, "transcript");
    else {
      qcmSec("📖 Leseverstehen — " + res.lesen + "/" + (res.lesenMax || 75), copy.lesen);
      qcmSec("🧩 Sprachbausteine — " + res.sprachbausteine + "/" + (res.sbMax || 30), copy.sprachbausteine);
      qcmSec("🎧 Hörverstehen — " + res.hoeren + "/" + (res.hoerenMax || 75), copy.hoeren);
      prodSec("🎧✍️ Hören und Schreiben — " + res.hs + "/" + res.hsMax, copy.hoerenSchreiben, res.hsFeedback, "text");
      prodSec("✍️ Schriftlicher Ausdruck — " + res.schreiben + "/" + (res.schreibenMax || 45), copy.schreiben, res.schreibenFeedback, "text");
      if (copy.dictee) {
        const s = el("div", "delf-copy-sec"); s.appendChild(el("h3", null, "✒️ Dictée — " + res.dictee + "/" + (res.dicteeMax || 25) + (copy.dictee.score != null ? " (" + copy.dictee.score + "% de mots justes)" : "")));
        const ref = el("div", "delf-copy-prod"); ref.innerHTML = '<p class="dc">Texte attendu :</p><div class="dp">' + delfEsc(copy.dictee.texte) + "</div>";
        const got = el("div", "delf-copy-prod"); got.innerHTML = '<p class="dc">Votre dictée :</p><div class="dp">' + (delfEsc(copy.dictee.saisie) || "<em>(rien)</em>") + "</div>";
        s.appendChild(ref); s.appendChild(got); w.appendChild(s);
      }
    }
    return w;
  }
  function exportTelcPDF(res, copy, part, btn, code) {
    const CODE = String(code || "b1").toUpperCase();
    const old = btn.textContent; btn.disabled = true; btn.textContent = "Préparation…";
    loadJsPDF().then(function (JsPDF) {
      try {
        const doc = new JsPDF({ unit: "pt", format: "a4" }); const M = 40; let y = M; const PH = doc.internal.pageSize.getHeight(), W = doc.internal.pageSize.getWidth() - 2 * M;
        function line(txt, size, style, color) { doc.setFont("helvetica", style || "normal"); doc.setFontSize(size || 11); doc.setTextColor(color ? color[0] : 25, color ? color[1] : 25, color ? color[2] : 25); doc.splitTextToSize(String(txt == null ? "" : txt), W).forEach(function (l) { if (y > PH - M) { doc.addPage(); y = M; } doc.text(l, M, y); y += (size || 11) + 4; }); }
        line("Examen telc " + CODE + " — partie " + (part === "muendlich" ? "orale" : "écrite"), 18, "bold"); y += 2;
        line("Résultat : " + res.total + "/" + res.sur + " — " + (res.passed ? "RÉUSSIE" : "NON RÉUSSIE"), 13, "bold", res.passed ? [21, 128, 61] : [185, 28, 28]);
        if (part !== "muendlich") { const pp = []; if (res.lesenMax) pp.push("Lesen " + res.lesen + "/" + res.lesenMax); if (res.sbMax) pp.push("Sprachbausteine " + res.sprachbausteine + "/" + res.sbMax); if (res.hoerenMax) pp.push("Hoeren " + res.hoeren + "/" + res.hoerenMax); if (res.hsMax) pp.push("Hoeren+Schreiben " + res.hs + "/" + res.hsMax); pp.push("Schreiben " + res.schreiben + "/" + (res.schreibenMax || 45)); if (res.dicteeMax) pp.push("Dictee " + res.dictee + "/" + res.dicteeMax); line(pp.join(" · "), 11); }
        y += 6;
        function qcm(title, items) { if (!items || !items.length) return; line(title, 13, "bold"); items.forEach(function (it, i) { const ok = it.selected === it.correct; line((i + 1) + ". " + it.q, 11, "bold"); line("→ " + (it.selected >= 0 ? it.options[it.selected] : "(sans réponse)") + (ok ? "  [correct]" : "  [faux] · correct : " + it.options[it.correct]), 10, "normal", ok ? [21, 128, 61] : [185, 28, 28]); }); y += 6; }
        function prod(title, arr, fb, key) { if (!arr || !arr.length) return; line(title, 13, "bold"); arr.forEach(function (t) { line("Consigne : " + t.consigne, 10, "italic"); line(t[key] || "(rien)", 11); y += 2; }); if (fb) line("Correction IA : " + String(fb).replace(/\*\*/g, ""), 10, "normal", [70, 70, 70]); y += 6; }
        if (part === "muendlich") prod("Production orale (" + res.total + "/" + (res.sur || 75) + ")", copy.oral, res.oralFeedback, "transcript");
        else { qcm("Leseverstehen (" + res.lesen + "/" + (res.lesenMax || 75) + ")", copy.lesen); qcm("Sprachbausteine (" + res.sprachbausteine + "/" + (res.sbMax || 30) + ")", copy.sprachbausteine); qcm("Hoerverstehen (" + res.hoeren + "/" + (res.hoerenMax || 75) + ")", copy.hoeren); prod("Hoeren und Schreiben (" + res.hs + "/" + res.hsMax + ")", copy.hoerenSchreiben, res.hsFeedback, "text"); prod("Schriftlicher Ausdruck (" + res.schreiben + "/" + (res.schreibenMax || 45) + ")", copy.schreiben, res.schreibenFeedback, "text"); if (copy.dictee) { line("Dictee (" + res.dictee + "/" + (res.dicteeMax || 25) + ")", 13, "bold"); line("Texte attendu : " + copy.dictee.texte, 10, "italic"); line("Votre dictee : " + (copy.dictee.saisie || "(rien)"), 11); } }
        doc.save("telc_" + CODE + "_" + (part === "muendlich" ? "oral" : "ecrit") + ".pdf");
        btn.textContent = "✓ PDF téléchargé";
      } catch (e) { toast("PDF : erreur de génération."); btn.textContent = old; }
      setTimeout(function () { btn.disabled = false; btn.textContent = old; }, 1800);
    }).catch(function () { toast("PDF indisponible (réseau). Faites une capture d'écran."); btn.disabled = false; btn.textContent = old; });
  }

  /* ====================================================================
     SÉLECTEUR DE LANGUE (multilingue + immersion)
     ==================================================================== */
  function buildLanguagePicker(opts) {
    opts = opts || {};
    const I = window.I18N;
    const wrap = el("section", "section lang-picker");
    wrap.appendChild(el("h2", "section-title", "🌐 " + I.t("choose_lang")));
    wrap.appendChild(el("p", "onboarding-intro", I.t("choose_lang_sub")));
    const curRow = el("div", "lang-cur");
    const ci = I.info(I.lang());
    curRow.innerHTML = '<span class="lang-cur-lab">' + I.t("detected") + ' :</span> <span class="lang-cur-val">' + ci.f + " " + ci.n + "</span>";
    const geoBtn = el("button", "btn btn-ghost small", I.t("use_location"));
    geoBtn.type = "button";
    geoBtn.addEventListener("click", () => {
      geoBtn.disabled = true; geoBtn.textContent = I.t("locating");
      I.detectGeo((code) => pick(code));
    });
    curRow.appendChild(geoBtn);
    wrap.appendChild(curRow);
    const search = el("input", "lang-search");
    search.type = "search"; search.setAttribute("placeholder", I.t("search_lang"));
    wrap.appendChild(search);
    const grid = el("div", "lang-grid");
    function renderGrid(q) {
      grid.innerHTML = "";
      q = (q || "").toLowerCase().trim();
      I.all().forEach((l) => {
        if (q && l.n.toLowerCase().indexOf(q) < 0 && l.c.indexOf(q) < 0) return;
        const b = el("button", "lang-opt" + (l.c === I.lang() ? " on" : ""));
        b.type = "button";
        b.innerHTML = '<span class="lang-flag">' + l.f + '</span><span class="lang-name">' + l.n + "</span>" + (l.curated ? '<span class="lang-badge" title="Interface soignée">✓</span>' : "");
        b.addEventListener("click", () => pick(l.c));
        grid.appendChild(b);
      });
    }
    search.addEventListener("input", () => renderGrid(search.value));
    renderGrid("");
    wrap.appendChild(grid);
    function pick(code) { I.setLang(code); if (opts.onPick) opts.onPick(code); else route(); }
    return wrap;
  }

  /* Sélecteur de voix allemande : laisse l'utilisateur choisir la voix la
     plus NATURELLE disponible sur son appareil (et la tester). */
  function buildVoicePicker() {
    const S = window.Speech;
    const wrap = el("section", "section voice-picker");
    wrap.appendChild(el("h2", "section-title", "🔊 Voix allemande (audios & dictée)"));
    // Voix naturelles en ligne (ElevenLabs) — son plus humain
    if (S && S.cloudEnabled) {
      const cloudRow = el("label", "voice-cloud");
      const cb = el("input", ""); cb.type = "checkbox"; cb.checked = !!S.cloudEnabled();
      cloudRow.appendChild(cb);
      cloudRow.appendChild(el("span", "", "🌟 Voix naturelles en ligne (ElevenLabs) — son plus humain (nécessite internet)"));
      cb.addEventListener("change", () => { S.setCloud(cb.checked); if (cb.checked) setTimeout(() => S.speak("Hallo! Ich bin Zika, dein Deutsch-Coach.", { rate: 0.95 }), 150); });
      wrap.appendChild(cloudRow);
    }
    if (!S || !S.isSupported()) { wrap.appendChild(el("p", "onboarding-intro", "La synthèse vocale de l'appareil n'est pas disponible ; les voix naturelles en ligne restent possibles.")); return wrap; }
    const list = (S.voices && S.voices()) || [];
    if (!list.length) {
      wrap.appendChild(el("p", "onboarding-intro", "Aucune voix allemande trouvée. Pour un son plus naturel, installe une voix allemande dans les réglages de ton appareil (Android : Réglages → Synthèse vocale ; iPhone : Réglages → Accessibilité → Contenu énoncé → Voix → Allemand → choisis une voix « Améliorée » ou « Premium »)."));
      return wrap;
    }
    wrap.appendChild(el("p", "onboarding-intro", "Choisis la voix la plus naturelle de ton appareil (⭐ = voix naturelle/en ligne), puis teste-la."));
    const pref = S.preferredVoice && S.preferredVoice(); // null/"" → automatique
    const sel = el("select", "voice-select");
    // Option « Automatique » : laisse l'app choisir la meilleure voix (ou ElevenLabs si activé).
    const optAuto = document.createElement("option");
    optAuto.value = "";
    optAuto.textContent = "🔄 Automatique (recommandé)";
    if (!pref) optAuto.selected = true;
    sel.appendChild(optAuto);
    list.forEach((v) => {
      const o = document.createElement("option");
      o.value = v.name;
      const naturel = /neural|natural|online|premium|wavenet|enhanced|google|siri/i.test(v.name) || v.localService === false ? " ⭐" : "";
      o.textContent = v.name + naturel;
      if (pref && v.name === pref) o.selected = true;
      sel.appendChild(o);
    });
    const row = el("div", "voice-row");
    row.appendChild(sel);
    const test = el("button", "btn btn-ghost small", "🔊 Tester"); test.type = "button";
    const phrase = "Hallo! Ich bin Zika, dein Deutsch-Coach. Lass uns gemeinsam Deutsch lernen!";
    test.addEventListener("click", () => { window.Speech.speak(phrase, { rate: 0.95 }); });
    row.appendChild(test);
    wrap.appendChild(row);
    sel.addEventListener("change", () => { window.Speech.setVoice(sel.value); setTimeout(() => window.Speech.speak(phrase, { rate: 0.95 }), 150); });
    return wrap;
  }

  function renderLanguagePage() {
    const I = window.I18N;
    const premier = besoinOnboarding(); // tout premier lancement (aucune progression)
    const dest = "#/menu"; // après le choix de la langue → le menu (hub)
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = (premier ? '<span class="btn-link" style="visibility:hidden">·</span>' : '<a class="btn-link" href="#/menu">← Menu</a>') +
      '<span class="lesson-top-mod">🌐 ' + (I ? I.t("language") : "Langue") + "</span>";
    frag.appendChild(top);
    if (premier) {
      const intro = el("section", "section onboarding lang-intro");
      intro.innerHTML = '<div class="coach-avatar">🧑‍🏫</div><p class="coach-nom">Coach Zika</p><h1>Hallo! 👋</h1>';
      frag.appendChild(intro);
    }
    if (I) frag.appendChild(buildLanguagePicker({ onPick: () => renderLanguagePage() }));
    frag.appendChild(buildVoicePicker());
    const chosen = I && I.isChosen();
    const nav = el("div", "lesson-nav");
    nav.appendChild(el("span", ""));
    if (chosen) {
      const cont = el("a", "btn btn-primary", (I ? I.t("continue") : "Continuer") + " →");
      cont.href = dest;
      nav.appendChild(cont);
    } else {
      // Choix OBLIGATOIRE : aucun bouton « continuer » tant qu'on n'a pas choisi.
      nav.appendChild(el("span", "lang-required", "👆 Choisis ta langue pour commencer à apprendre."));
    }
    frag.appendChild(nav);
    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) {
      try { window.TG.hideBackButton && window.TG.hideBackButton(); } catch (e) {}
      if (!chosen) { try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {} }
      else {
        if (!premier) window.TG.showBackButton(() => { location.hash = "#/menu"; });
        window.TG.setMainButton((I ? I.t("continue") : "Continuer") + " →", () => { location.hash = dest; });
      }
    }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     ACCUEIL DU COACH — choix / test de niveau
     ==================================================================== */
  function renderOnboarding() {
    const labels = NIVEAU_LABELS;
    const frag = document.createDocumentFragment();

    /* Retour vers le menu (hub). */
    const obTop = el("div", "lesson-top");
    obTop.innerHTML = '<a class="btn-link" href="#/menu">← Menu</a>';
    frag.appendChild(obTop);

    /* La langue a déjà été choisie sur le 1ᵉʳ écran ; petit lien pour la changer. */
    if (window.I18N) {
      const li = window.I18N.info();
      const langBar = el("div", "onb-lang");
      langBar.innerHTML = '<span>🌐 ' + li.f + " " + li.n + '</span><a class="btn-link" href="#/langue">' + window.I18N.t("change_lang") + "</a>";
      frag.appendChild(langBar);
    }

    const salutDE = "Hallo! Ich bin Zika, dein Deutsch-Coach. Lass uns gemeinsam dein Niveau finden!";
    const hero = el("section", "section onboarding");
    hero.innerHTML =
      '<div class="coach-avatar">🧑‍🏫</div>' +
      '<p class="coach-nom">Coach Zika</p>' +
      "<h1>Bonjour, je suis Zika, ton coach d'allemand ! 🇩🇪</h1>" +
      '<p class="onboarding-intro">Pour te proposer les bonnes leçons, dis-moi où tu en es en allemand. ' +
      "Choisis ton niveau — ou laisse Zika l'évaluer avec un petit test (grammaire, écoute, écrit et oral, comme à l'examen).</p>";
    if (window.Speech && window.Speech.isSupported()) {
      const ecouteZika = el("button", "btn btn-ghost small", "🔊 Écouter Zika");
      ecouteZika.type = "button";
      ecouteZika.addEventListener("click", () => window.Speech.speak(salutDE, { rate: 1, pitch: 0.95 }));
      hero.appendChild(ecouteZika);
    }
    frag.appendChild(hero);

    const testSec = el("section", "section");
    const testCard = el("div", "examen-final unlocked");
    testCard.innerHTML = '<div class="examen-ic">🎯</div><h2>Tester mon niveau avec Zika</h2>' +
      "<p>Zika te pose des questions à partir de A1 et monte tant que tu réussis ; dès que ça devient difficile, il détermine ton niveau actuel.</p>";
    const testBtn = el("a", "btn btn-primary big", "🎯 Évaluer mon niveau");
    testBtn.href = "#/placement";
    testCard.appendChild(testBtn);
    testSec.appendChild(testCard);
    frag.appendChild(testSec);

    const pick = el("section", "section");
    pick.appendChild(el("h2", "section-title", "Je connais déjà mon niveau"));
    pick.appendChild(el("p", "exo-group-sub", "Choisis ton niveau : pour le débloquer, tu passeras d'abord un court examen de chaque niveau précédent. À la première difficulté, Zika te place au bon niveau."));
    const grid = el("div", "niveau-choix");
    ORDRE_NIVEAUX.forEach((code) => {
      const b = el("button", "niveau-btn", "");
      b.type = "button";
      b.innerHTML = "<strong>" + code + "</strong><span>" + labels[code] + "</span>";
      // A1 : aucun niveau précédent → on démarre directement. Sinon : examen de validation.
      b.addEventListener("click", () => {
        if (code === "A1") { placerAuNiveau("A1"); location.hash = prochaineEtape(); }
        else location.hash = "#/placement-niveau/" + code;
      });
      grid.appendChild(b);
    });
    pick.appendChild(grid);
    frag.appendChild(pick);

    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/menu"; }); window.TG.setMainButton("🎯 Évaluer mon niveau", () => { location.hash = "#/placement"; }); }
    // Zika salue à voix haute (si autorisé par le navigateur)
    if (window.Speech && window.Speech.isSupported()) { try { setTimeout(() => window.Speech.speak(salutDE, { rate: 1, pitch: 0.95 }), 400); } catch (e) {} }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* Test de placement adaptatif (étape par étape, de A1 vers le haut) */
  function renderPlacement(state) {
    const blocks = window.PLACEMENT || [];
    if (!blocks.length) { location.hash = "#/"; return; }
    state = state || { i: 0 };
    const block = blocks[state.i];

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/start">← Choix du niveau</a><span class="lesson-top-mod">🎯 Test de placement</span>';
    frag.appendChild(top);

    const head = el("header", "test-head");
    head.style.setProperty("--mod-color", "#0d9488");
    head.innerHTML = '<div class="lesson-num">Étape ' + (state.i + 1) + " / " + blocks.length + "</div><h1>" + block.titre + "</h1>" +
      "<p>Réponds du mieux possible. Zika détermine ton niveau dès que cela devient trop difficile.</p>";
    frag.appendChild(head);

    const list = el("div", "test-list");
    const nodes = [];
    // Test de placement « à l'aveugle » : on retire tout indice / aide /
    // modèle / mot-clé (rien qui oriente vers la réponse).
    function sansAide(ex) {
      const c = Object.assign({}, ex);
      delete c.indice; delete c.aide; delete c.traduction; delete c.explication; delete c.modele; delete c.attendus;
      return c;
    }
    block.items.forEach((ex, i) => {
      const node = window.Exercises.render(sansAide(ex), i, null, { testMode: true, label: "Question " + (i + 1) });
      nodes.push(node);
      list.appendChild(node);
    });
    frag.appendChild(list);

    const submit = el("button", "btn btn-primary big", "Valider cette étape →");
    submit.type = "button";
    const row = el("div", "test-submit");
    row.appendChild(submit);
    frag.appendChild(row);

    const faibles = (state.faibles || []).slice();
    function noteFaible(type) {
      const skill = type === "ecoute" ? "Compréhension orale (écoute)" : type === "oral" ? "Expression orale" : "Grammaire & expression écrite";
      if (faibles.indexOf(skill) < 0) faibles.push(skill);
    }
    submit.addEventListener("click", () => {
      let correct = 0, total = 0;
      block.items.forEach((ex, idx) => {
        const node = nodes[idx];
        if (!node || typeof node._grade !== "function") return; // production : non noté
        const res = node._grade(false); // on note SANS révéler la correction (aucune aide)
        total++;
        if (res.ok === true) correct++;
        else noteFaible(ex.type);
      });
      const passe = total ? correct / total >= 0.6 : true;
      submit.disabled = true;
      submit.textContent = "Étape validée";
      if (passe && state.i < blocks.length - 1) {
        const next = el("div", "test-result pass");
        next.innerHTML = "<h2>✅ Étape " + block.code + " réussie (" + correct + "/" + total + ")</h2><p>On monte d'un cran…</p>" +
          '<div class="rev-actions"><button class="btn btn-primary" id="pl-next">Continuer →</button></div>';
        frag.appendChild(next);
        app.innerHTML = ""; app.appendChild(frag);
        const nb = document.getElementById("pl-next");
        nb.addEventListener("click", () => renderPlacement({ i: state.i + 1, faibles: faibles }));
        if (window.TG) window.TG.setMainButton("Continuer →", () => renderPlacement({ i: state.i + 1, faibles: faibles }));
        next.scrollIntoView({ behavior: "smooth" });
      } else {
        const code = passe ? blocks[blocks.length - 1].code : block.code;
        placementResultat(code, faibles);
      }
    });

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/start"; }); window.TG.setMainButton("Valider cette étape →", () => submit.click()); }
    window.scrollTo(0, 0);
  }

  function placementResultat(code, faibles) {
    placerAuNiveau(code);
    window.Progress.setFaiblesses(faibles || []);
    const labels = NIVEAU_LABELS;
    const frag = document.createDocumentFragment();
    const sec = el("section", "section");
    const card = el("div", "examen-final unlocked reussi");
    let html = '<div class="examen-ic">🎓</div><h2>Ton niveau : ' + code + " — " + (labels[code] || "") + "</h2>" +
      "<p>D'après tes réponses (grammaire, écoute, écrit et oral), Zika te place au <strong>niveau " + code + "</strong>. " +
      "Tu commences ici ; les niveaux précédents restent débloqués si tu veux les revoir.</p>";
    if (faibles && faibles.length) {
      html += '<div class="zika-conseil"><span class="cours-tag">💡 Le conseil de Zika</span><div>À travailler en priorité : <strong>' +
        faibles.map(escapeHtml).join("</strong>, <strong>") + "</strong>.</div></div>";
    }
    card.innerHTML = html;
    const go = el("a", "btn btn-primary big", "🚀 Commencer au niveau " + code);
    go.href = prochaineEtape();
    card.appendChild(go);
    const rev = el("a", "btn btn-ghost", "🔁 Réviser mes points faibles");
    rev.href = "#/revision";
    card.appendChild(rev);
    const retest = el("a", "btn btn-ghost", "↺ Refaire le test");
    retest.href = "#/placement";
    card.appendChild(retest);
    sec.appendChild(card);
    frag.appendChild(sec);
    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) { if (window.TG.haptic) window.TG.haptic("success"); window.TG.setMainButton("🚀 Commencer au niveau " + code, () => { location.hash = prochaineEtape(); }); }
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     VALIDATION PAR PALIERS — quand l'utilisateur dit « je connais mon
     niveau X », il doit d'abord RÉUSSIR un examen pour chaque niveau
     précédent. Chaque niveau réussi est marqué « acquis » (vert). Au 1ᵉʳ
     échec, Zika le place à CE niveau pour qu'il l'apprenne.
     ==================================================================== */
  function validerNiveau(niv) {
    flat.forEach((f) => { if (f.lecon.niveau === niv) window.Progress.marquerTermine(f.lecon.id, 100); });
    const KEYS = { A1: ["a1"], A2: ["a2", "final"], B1: ["b1"], B2: ["b2", "finalb"], C1: ["c1"], C2: ["c2", "finalc"] };
    (KEYS[niv] || []).forEach((k) => window.Progress.setTestScore(k, 100, true));
  }

  function renderNiveauTest(cible, state) {
    const all = window.PLACEMENT || [];
    const cibleIdx = ORDRE_NIVEAUX.indexOf(cible);
    // A1 (ou cible invalide) → aucun niveau précédent : on démarre directement.
    if (cibleIdx <= 0) { placerAuNiveau(cible || "A1"); location.hash = prochaineEtape(); return; }
    const blocks = all.filter((bk) => ORDRE_NIVEAUX.indexOf(bk.code) < cibleIdx);
    if (!blocks.length) { placerAuNiveau(cible); location.hash = prochaineEtape(); return; }
    state = state || { i: 0, faibles: [] };
    if (state.i >= blocks.length) { niveauTestResultat(cible, true, null, state.faibles); return; }
    const block = blocks[state.i];

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/start">← Choix du niveau</a><span class="lesson-top-mod">🎯 Validation → ' + cible + "</span>";
    frag.appendChild(top);

    const head = el("header", "test-head"); head.style.setProperty("--mod-color", "#0d9488");
    head.innerHTML = '<div class="lesson-num">Niveau ' + block.code + " · étape " + (state.i + 1) + " / " + blocks.length + "</div><h1>" + block.titre + "</h1>" +
      "<p>Tu veux commencer en <strong>" + cible + "</strong> : valide d'abord les niveaux précédents. Réponds du mieux possible (seuil 60 %).</p>";
    frag.appendChild(head);

    function sansAide(ex) { const c = Object.assign({}, ex); delete c.indice; delete c.aide; delete c.traduction; delete c.explication; delete c.modele; delete c.attendus; return c; }
    const list = el("div", "test-list"); const nodes = [];
    block.items.forEach((ex, i) => { const node = window.Exercises.render(sansAide(ex), i, null, { testMode: true, label: "Question " + (i + 1) }); nodes.push(node); list.appendChild(node); });
    frag.appendChild(list);

    const submit = el("button", "btn btn-primary big", "Valider l'étape " + block.code + " →"); submit.type = "button";
    const row = el("div", "test-submit"); row.appendChild(submit); frag.appendChild(row);

    const faibles = (state.faibles || []).slice();
    function noteFaible(type) { const skill = type === "ecoute" ? "Compréhension orale (écoute)" : type === "oral" ? "Expression orale" : "Grammaire & expression écrite"; if (faibles.indexOf(skill) < 0) faibles.push(skill); }

    submit.addEventListener("click", () => {
      let correct = 0, total = 0;
      block.items.forEach((ex, idx) => { const node = nodes[idx]; if (!node || typeof node._grade !== "function") return; const res = node._grade(false); total++; if (res.ok === true) correct++; else noteFaible(ex.type); });
      const passe = total ? correct / total >= 0.6 : true;
      submit.disabled = true; submit.textContent = "Étape " + block.code + " terminée";
      if (passe) {
        validerNiveau(block.code); // ✅ niveau marqué « acquis » (vert)
        if (state.i < blocks.length - 1) {
          const next = el("div", "test-result pass");
          next.innerHTML = "<h2>✅ Niveau " + block.code + " validé (" + correct + "/" + total + ")</h2><p>Niveau marqué comme acquis. On valide le suivant…</p>" +
            '<div class="rev-actions"><button class="btn btn-primary" id="nt-next">Continuer →</button></div>';
          frag.appendChild(next); app.innerHTML = ""; app.appendChild(frag);
          const nb = document.getElementById("nt-next"); nb.addEventListener("click", () => renderNiveauTest(cible, { i: state.i + 1, faibles: faibles }));
          if (window.TG) window.TG.setMainButton("Continuer →", () => renderNiveauTest(cible, { i: state.i + 1, faibles: faibles }));
          next.scrollIntoView({ behavior: "smooth" });
        } else {
          niveauTestResultat(cible, true, null, faibles); // tous les niveaux précédents réussis
        }
      } else {
        niveauTestResultat(block.code, false, cible, faibles); // échec → on commence ici
      }
    });

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/start"; }); window.TG.setMainButton("Valider l'étape " + block.code + " →", () => submit.click()); }
    window.scrollTo(0, 0);
  }

  function niveauTestResultat(startNiv, allPassed, cible, faibles) {
    window.Progress.setNiveau(startNiv);
    window.Progress.setFaiblesses(faibles || []);
    const labels = NIVEAU_LABELS;
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/start">← Choix du niveau</a><span class="lesson-top-mod">🎯 Résultat</span>';
    frag.appendChild(top);
    const sec = el("section", "section");
    const card = el("div", "examen-final unlocked reussi");
    let html;
    if (allPassed) {
      html = '<div class="examen-ic">🎉</div><h2>Niveaux validés — tu commences en ' + startNiv + " !</h2>" +
        "<p>Bravo ! Tu as réussi l'examen de tous les niveaux précédents : ils sont <strong>marqués comme acquis (verts)</strong>. Le niveau <strong>" + startNiv + " — " + (labels[startNiv] || "") + "</strong> est maintenant disponible.</p>";
    } else {
      html = '<div class="examen-ic">📚</div><h2>Zika te place au niveau ' + startNiv + "</h2>" +
        "<p>L'examen du niveau <strong>" + startNiv + "</strong> n'est pas encore validé. Pas de souci : tu commences à apprendre au <strong>niveau " + startNiv + " — " + (labels[startNiv] || "") + "</strong>" + (cible ? ", puis tu viseras le " + cible : "") + ". Les niveaux déjà réussis restent acquis.</p>";
    }
    if (faibles && faibles.length) html += '<div class="zika-conseil"><span class="cours-tag">💡 Le conseil de Zika</span><div>À travailler en priorité : <strong>' + faibles.map(escapeHtml).join("</strong>, <strong>") + "</strong>.</div></div>";
    card.innerHTML = html;
    const go = el("a", "btn btn-primary big", "🚀 Commencer au niveau " + startNiv); go.href = prochaineEtape(); card.appendChild(go);
    const retest = el("a", "btn btn-ghost", "↺ Changer de niveau"); retest.href = "#/start"; card.appendChild(retest);
    sec.appendChild(card); frag.appendChild(sec);
    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { if (window.TG.haptic) window.TG.haptic(allPassed ? "success" : "warning"); window.TG.showBackButton(() => { location.hash = "#/start"; }); window.TG.setMainButton("🚀 Commencer au niveau " + startNiv, () => { location.hash = prochaineEtape(); }); }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     THÈME (clair / sombre / auto) — réutilise les styles sombres existants
     ==================================================================== */
  const Theme = (function () {
    const mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    function tgScheme() { return (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.colorScheme) || null; }
    function get() { return window.Progress.getReglages().theme || "auto"; }
    function applyScheme(scheme) {
      document.documentElement.setAttribute("data-tg-scheme", scheme === "dark" ? "dark" : "light");
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", scheme === "dark" ? "#0e1621" : "#1e3a8a");
    }
    function apply() {
      const pref = get();
      let scheme = pref === "dark" ? "dark" : pref === "light" ? "light" : (tgScheme() || (mq && mq.matches ? "dark" : "light"));
      applyScheme(scheme);
    }
    function set(pref) { window.Progress.setReglages({ theme: pref }); apply(); }
    function cycle() { const order = ["auto", "light", "dark"]; const cur = get(); set(order[(order.indexOf(cur) + 1) % order.length]); return get(); }
    function label() { const t = get(); return t === "dark" ? "🌙 Sombre" : t === "light" ? "☀️ Clair" : "🌗 Auto"; }
    if (mq && mq.addEventListener) mq.addEventListener("change", () => { if (get() === "auto") apply(); });
    return { apply, set, get, cycle, label };
  })();
  Theme.apply();

  /* Temps d'étude : comptabilise le temps actif (onglet visible + activité) */
  let lastActivity = Date.now();
  ["pointerdown", "keydown", "scroll", "touchstart"].forEach((ev) => window.addEventListener(ev, () => { lastActivity = Date.now(); }, { passive: true }));
  function startStudyTimer() {
    const TICK = 20;
    setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - lastActivity > 120000) return; // inactif > 2 min → non compté
      window.Progress.ajouterTemps(TICK);
      Reminders.syncState();
    }, TICK * 1000);
  }
  function formatDuree(sec) {
    sec = Math.round(sec || 0);
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60);
    if (h > 0) return h + " h " + (m < 10 ? "0" : "") + m;
    if (m > 0) return m + " min";
    return sec + " s";
  }

  /* Rappels quotidiens : notification en-app + periodicSync (PWA installée) */
  const Reminders = (function () {
    function tgInfo() { try { var w = window.Telegram && window.Telegram.WebApp; if (w && w.initData && w.initDataUnsafe && w.initDataUnsafe.user && w.initDataUnsafe.user.id) return w.initData; } catch (e) {} return null; }
    function notifyServer(action) { var d = tgInfo(); if (!d) return Promise.resolve(false); var r = window.Progress.getReglages(); return fetch("/api/notify", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ action: action, initData: d, heure: r.rappelHeure || "19:00" }) }).then(function (x) { return x.ok; }).catch(function () { return false; }); }
    function supported() { return ("Notification" in window) || !!tgInfo(); }
    function syncState() {
      const r = window.Progress.getReglages();
      if (r.rappel && tgInfo()) notifyServer("on");
      if (!("caches" in window)) return;
      const payload = JSON.stringify({ rappel: !!r.rappel, heure: r.rappelHeure || "19:00", last: window.Progress.getLastStudy(), notified: window.Progress.getLastNotified() });
      caches.open("deutsch-state").then((c) => c.put("/__study", new Response(payload, { headers: { "Content-Type": "application/json" } }))).catch(function () {});
    }
    function check() {
      const r = window.Progress.getReglages();
      if (!r.rappel || !("Notification" in window) || Notification.permission !== "granted") return;
      const now = new Date(), hhmm = (r.rappelHeure || "19:00").split(":");
      const due = now.getHours() * 60 + now.getMinutes() >= (parseInt(hhmm[0], 10) * 60 + parseInt(hhmm[1] || "0", 10));
      const today = new Date().toISOString().slice(0, 10);
      if (due && window.Progress.getLastNotified() !== today && window.Progress.getLastStudy() !== today) {
        try {
          new Notification("⏰ Ton allemand t'attend !", { body: "Coach Zika : 5 minutes aujourd'hui suffisent pour garder ta série. 🇩🇪", icon: "icon-192.png", tag: "daily-reminder" });
          window.Progress.markNotified(); syncState();
        } catch (e) {}
      }
    }
    async function enable() {
      if (tgInfo()) {
        window.Progress.setReglages({ rappel: true });
        const ok = await notifyServer("on");
        if (!ok) { window.Progress.setReglages({ rappel: false }); return false; }
        syncState();
        return true;
      }
      if (!("Notification" in window)) return false;
      let perm = Notification.permission;
      if (perm === "default") { try { perm = await Notification.requestPermission(); } catch (e) {} }
      if (perm !== "granted") { window.Progress.setReglages({ rappel: false }); return false; }
      window.Progress.setReglages({ rappel: true });
      syncState();
      try {
        const reg = await navigator.serviceWorker.ready;
        if (reg && "periodicSync" in reg) {
          const st = await navigator.permissions.query({ name: "periodic-background-sync" });
          if (st.state === "granted") await reg.periodicSync.register("daily-reminder", { minInterval: 12 * 60 * 60 * 1000 });
        }
      } catch (e) {}
      check();
      return true;
    }
    function disable() { window.Progress.setReglages({ rappel: false }); notifyServer("off"); syncState(); }
    function start() { syncState(); check(); setInterval(check, 60000); }
    return { supported, enable, disable, check, start, syncState };
  })();

  /* ====================================================================
     GAMIFICATION : points (XP), rang, badges, niveaux validés
     ==================================================================== */
  function calcPoints() {
    let pts = 0;
    flat.forEach((f) => { const lp = window.Progress.getLecon(f.lecon.id); if (lp.termine) pts += 10 + Math.round((lp.score || 0) / 10); });
    COURS.examens.forEach((e) => { const t = window.Progress.getTestScore(e.id); if (t && t.reussi) pts += 50; });
    pts += Math.round((window.Progress.statsTemps().total || 0) / 60);
    pts += (window.Progress.resumeGlobal(COURS).streak || 0) * 5;
    return pts;
  }
  function rangPoints(pts) {
    const paliers = [[0, "Débutant"], [200, "Apprenti"], [600, "Confirmé"], [1500, "Avancé"], [3000, "Expert"], [6000, "Maître"]];
    let r = "Débutant";
    paliers.forEach((p) => { if (pts >= p[0]) r = p[1]; });
    return r;
  }
  const BADGES = [
    { id: "start", ic: "🎉", t: "Premier pas", d: "Terminer ta 1ʳᵉ leçon", ok: (c) => c.faites >= 1 },
    { id: "dix", ic: "📚", t: "Sur la lancée", d: "10 leçons terminées", ok: (c) => c.faites >= 10 },
    { id: "cent", ic: "💯", t: "Centurion", d: "100 leçons terminées", ok: (c) => c.faites >= 100 },
    { id: "feu7", ic: "🔥", t: "Assidu", d: "Série de 7 jours", ok: (c) => c.streak >= 7 },
    { id: "temps1", ic: "⏱️", t: "Studieux", d: "1 h d'étude cumulée", ok: (c) => c.minutes >= 60 },
    { id: "temps10", ic: "🏃", t: "Marathonien", d: "10 h d'étude cumulées", ok: (c) => c.minutes >= 600 },
    { id: "voc50", ic: "🗂️", t: "Lexicophile", d: "50 mots maîtrisés", ok: (c) => c.mots >= 50 },
    { id: "voc200", ic: "🗃️", t: "Vocabulaire solide", d: "200 mots maîtrisés", ok: (c) => c.mots >= 200 },
    { id: "voc500", ic: "📖", t: "Grand lexique", d: "500 mots maîtrisés", ok: (c) => c.mots >= 500 },
    { id: "feu30", ic: "🌋", t: "Inarrêtable", d: "Série de 30 jours", ok: (c) => c.streak >= 30 },
    { id: "parfait", ic: "🌟", t: "Sans-faute", d: "Un examen à 100 %", ok: (c) => c.examenParfait },
    { id: "a1", ic: "🥉", t: "A1 validé", d: "Réussir l'examen A1", ok: (c) => c.exam.a1 },
    { id: "b1", ic: "🥈", t: "B1 validé", d: "Réussir l'examen B1", ok: (c) => c.exam.b1 },
    { id: "c1", ic: "🥇", t: "C1 validé", d: "Réussir l'examen C1", ok: (c) => c.exam.c1 },
    { id: "c2", ic: "🏆", t: "Maîtrise C2", d: "Réussir l'examen C2", ok: (c) => c.exam.c2 }
  ];
  function gamifContext() {
    const r = window.Progress.resumeGlobal(COURS);
    const srs = window.Revision.stats(COURS);
    const exam = {}; let examenParfait = false;
    COURS.examens.forEach((e) => { const t = window.Progress.getTestScore(e.id); exam[e.id] = !!(t && t.reussi); if (t && t.meilleur >= 100) examenParfait = true; });
    return { faites: r.faites, streak: r.streak, minutes: Math.round((window.Progress.statsTemps().total || 0) / 60), mots: srs.apprises, exam: exam, examenParfait: examenParfait };
  }
  function badgesGagnes() { const c = gamifContext(); return BADGES.map((b) => ({ b: b, gagne: b.ok(c) })); }
  function niveauxValides() { return ORDRE_NIVEAUX.map((code) => ({ code: code, valide: examPasse(code.toLowerCase()) })); }
  function objectifRing() {
    const obj = window.Progress.getReglages().objectifMin || 10;
    const min = Math.round((window.Progress.statsTemps().aujourdhui || 0) / 60);
    const pct = Math.min(100, Math.round((min / obj) * 100));
    const wrap = el("div", "goal-ring" + (pct >= 100 ? " done" : ""));
    wrap.style.setProperty("--p", pct);
    wrap.innerHTML = '<div class="goal-inner"><span class="goal-num">' + min + '</span><span class="goal-lab">/ ' + obj + ' min</span></div>';
    return wrap;
  }

  /* Partage / export / invitation */
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = el("div", "toast"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2400);
  }
  function partager(text, url) {
    url = url || "https://sprachakademie.app";
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.openTelegramLink) {
      window.Telegram.WebApp.openTelegramLink("https://t.me/share/url?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(text));
    } else if (navigator.share) {
      navigator.share({ text: text, url: url }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text + " " + url).then(function () { toast("📋 Lien copié dans le presse-papiers"); }).catch(function () { toast(text); });
    } else { toast(text); }
  }
  function partagerProgression() {
    const pts = calcPoints(), r = window.Progress.resumeGlobal(COURS), niv = window.Progress.getNiveau() || "A1";
    partager("🇩🇪 J'apprends l'allemand avec le coach Zika ! Niveau " + niv + " · " + pts + " points · " + r.faites + " leçons terminées. Rejoins-moi 👇");
  }
  function inviterAmis() {
    partager("Apprends l'allemand de A1 à C2 avec le coach Zika 🇩🇪 — cours, audio, examens, installable et hors-ligne, gratuit ! 👇");
  }
  function exporterProgression() {
    try {
      const blob = new Blob([JSON.stringify(window.Progress.load(), null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a"); a.href = url; a.download = "ma-progression-allemand.json"; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast("⬇️ Sauvegarde exportée");
    } catch (e) { toast("Export indisponible ici"); }
  }

  /* ====================================================================
     DEUTSCH FÜR DIE PFLEGE — parcours « allemand pour les soignants ».
     Accès verrouillé tant que l'examen A2 du cours général n'est pas
     réussi. Affiche le programme A2 → C2 (le contenu interactif des
     leçons sera ajouté ensuite). Données : window.PFLEGE (data/pflege.js).
     ==================================================================== */
  /* ====================================================================
     DICTÉE — une par module, adaptée au niveau. Le texte allemand est lu
     à voix haute (vitesse + nombre d'écoutes selon le niveau), l'apprenant
     l'écrit, puis Zika corrige : orthographe, majuscules, ponctuation et
     mots manquants / en trop (construction des phrases).
     ==================================================================== */
  const DICTEE_PARAMS = {
    A1: { min: 3, rate: 0.7, ecoutes: 2, vitesse: "lente" },
    A2: { min: 5, rate: 0.75, ecoutes: 2, vitesse: "lente" },
    B1: { min: 10, rate: 0.95, ecoutes: 2, vitesse: "normale" },
    B2: { min: 15, rate: 1.0, ecoutes: 1, vitesse: "normale" },
    C1: { min: 20, rate: 1.0, ecoutes: 1, vitesse: "normale" },
    C2: { min: 30, rate: 1.0, ecoutes: 1, vitesse: "normale" }
  };
  function dicteePhrases(texte) {
    return (String(texte).match(/[^.!?]+[.!?]*/g) || [texte]).map((s) => s.trim()).filter(Boolean);
  }
  let _dicteeStop = null;
  function jouerDictee(phrases, rate, ecoutes, onProgress, onDone) {
    if (_dicteeStop) _dicteeStop();
    let stopped = false, rep = 0, i = 0;
    _dicteeStop = function () { stopped = true; try { (window.Speech && window.Speech.stopSpeak) ? window.Speech.stopSpeak() : (window.speechSynthesis && window.speechSynthesis.cancel()); } catch (e) {} };
    function pauseFor(ph) { return Math.max(2600, ph.split(/\s+/).length * 700); }
    function suite() {
      if (stopped) return;
      if (i >= phrases.length) {
        rep++;
        if (rep >= ecoutes) { _dicteeStop = null; onDone && onDone(); return; }
        i = 0; onProgress && onProgress({ ecoute: rep + 1, total: ecoutes, phrase: 0, nb: phrases.length });
        setTimeout(suite, 2800); return;
      }
      onProgress && onProgress({ ecoute: rep + 1, total: ecoutes, phrase: i + 1, nb: phrases.length });
      const ph = phrases[i];
      if (window.Speech && window.Speech.isSupported()) {
        window.Speech.speak(ph, { rate: rate, onend: function () { if (stopped) return; i++; setTimeout(suite, pauseFor(ph)); }, onerror: function () { if (stopped) return; i++; setTimeout(suite, 900); } });
      } else { i++; setTimeout(suite, 1200); }
    }
    suite();
  }
  function corrigerDictee(reference, saisie) {
    const refW = reference.trim().split(/\s+/);
    const usrW = saisie.trim().split(/\s+/).filter(Boolean);
    const stripP = (w) => String(w).replace(/[.,;:!?»«„“”'’\-–—()]/g, "");
    const norm = (w) => stripP(w).toLowerCase();
    const a = refW.map(norm), c = usrW.map(norm);
    const n = a.length, m = c.length;
    const dp = []; for (let x = 0; x <= n; x++) dp.push(new Array(m + 1).fill(0));
    for (let x = n - 1; x >= 0; x--) for (let y = m - 1; y >= 0; y--) dp[x][y] = a[x] === c[y] ? dp[x + 1][y + 1] + 1 : Math.max(dp[x + 1][y], dp[x][y + 1]);
    const status = new Array(n).fill("manquant");
    let x = 0, y = 0, correct = 0, majErr = 0;
    while (x < n && y < m) {
      if (a[x] === c[y]) {
        if (stripP(refW[x]) === stripP(usrW[y])) { status[x] = "ok"; correct++; }
        else { status[x] = "maj"; correct++; majErr++; }
        x++; y++;
      } else if (dp[x + 1][y] >= dp[x][y + 1]) x++; else y++;
    }
    const punct = (s) => (String(s).match(/[.,;:!?»«„“”]/g) || []).length;
    return { refW: refW, status: status, correct: correct, total: n, score: n ? Math.round((correct / n) * 100) : 0, majErr: majErr, manquants: n - correct, motsEnTrop: Math.max(0, m - correct), pRef: punct(reference), pUsr: punct(saisie), vide: usrW.length === 0 };
  }

  function renderDictee(moduleId) {
    const mod = (COURS.modules || []).find((mm) => mm.id === moduleId);
    const data = window.DICTEES && window.DICTEES[moduleId];
    if (!mod || !data) { location.hash = "#/"; return; }
    const niveau = mod.niveau || "A1";
    const P = DICTEE_PARAMS[niveau] || DICTEE_PARAMS.A1;
    const phrases = dicteePhrases(data.texte);

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">✍️ Dictée ' + niveau + "</span>";
    frag.appendChild(top);

    const head = el("header", "test-head"); head.style.setProperty("--mod-color", mod.couleur || "#0d9488");
    head.innerHTML = '<div class="lesson-num">' + mod.titre + " · Dictée</div><h1>✍️ Dictée — niveau " + niveau + "</h1>" +
      "<p>Durée conseillée : <strong>" + P.min + " min</strong> · vitesse <strong>" + P.vitesse + "</strong> · <strong>" + P.ecoutes + (P.ecoutes > 1 ? " écoutes" : " écoute") + "</strong>. Écoute la note vocale, écris le texte, puis fais corriger.</p>";
    frag.appendChild(head);

    const sec = el("section", "lesson-section");
    const vn = el("div", "dictee-voice");
    const playBtn = el("button", "dictee-play", "▶︎"); playBtn.type = "button";
    const vnInfo = el("div", "dictee-voice-info");
    vnInfo.innerHTML = "<strong>🎙️ Note vocale — Zika</strong><span class=\"dictee-status\">Appuie sur ▶︎ pour commencer la dictée.</span>";
    const timer = el("span", "dictee-timer", P.min + ":00");
    vn.appendChild(playBtn); vn.appendChild(vnInfo); vn.appendChild(timer);
    sec.appendChild(vn);
    const status = vnInfo.querySelector(".dictee-status");

    const ta = el("textarea", "dictee-input");
    ta.setAttribute("placeholder", "Écris ici la dictée que tu entends…"); ta.setAttribute("rows", "8");
    sec.appendChild(ta);

    const actions = el("div", "dictee-actions");
    const corrige = el("button", "btn btn-primary", "✅ Faire corriger ma dictée"); corrige.type = "button";
    actions.appendChild(corrige); sec.appendChild(actions);
    const result = el("div", "dictee-result hidden"); sec.appendChild(result);
    frag.appendChild(sec);

    let remaining = P.min * 60, timerId = null;
    function fmt(s) { const mm = Math.floor(s / 60), ss = s % 60; return mm + ":" + (ss < 10 ? "0" : "") + ss; }
    function startTimer() {
      if (timerId) return;
      timerId = setInterval(() => {
        remaining--; if (remaining <= 0) { remaining = 0; clearInterval(timerId); timerId = null; timer.classList.add("done"); status.textContent = "⏱️ Temps écoulé — tu peux faire corriger."; }
        timer.textContent = fmt(remaining);
      }, 1000);
    }
    let playing = false;
    function play() {
      if (playing) { if (_dicteeStop) _dicteeStop(); _dicteeStop = null; playing = false; playBtn.textContent = "▶︎"; status.textContent = "En pause. ▶︎ pour réécouter depuis le début."; return; }
      playing = true; playBtn.textContent = "⏸"; startTimer();
      jouerDictee(phrases, P.rate, P.ecoutes,
        (pr) => { status.textContent = "🔊 Écoute " + pr.ecoute + "/" + pr.total + (pr.phrase ? " — phrase " + pr.phrase + "/" + pr.nb : "") + "…"; },
        () => { playing = false; playBtn.textContent = "▶︎"; status.textContent = "✅ Lecture terminée. Écris ta dictée, puis fais corriger (▶︎ pour réécouter)."; }
      );
    }
    playBtn.addEventListener("click", play);

    corrige.addEventListener("click", () => {
      if (_dicteeStop) { _dicteeStop(); _dicteeStop = null; playing = false; playBtn.textContent = "▶︎"; }
      const r = corrigerDictee(data.texte, ta.value || "");
      if (r.vide) { toast("Écris d'abord la dictée, puis fais corriger. ✍️"); return; }
      window.Progress.setTestScore("dictee-" + moduleId, r.score, r.score >= 70);
      const refHtml = r.refW.map((w, idx) => '<span class="dw dw-' + r.status[idx] + '">' + escapeHtml(w) + "</span>").join(" ");
      const reussi = r.score >= 70;
      result.className = "dictee-result " + (reussi ? "pass" : "fail");
      result.innerHTML =
        '<div class="dictee-coach"><span class="coach-avatar-sm">🧑‍🏫</span> <strong>Zika a corrigé ta dictée</strong></div>' +
        '<div class="score-ring ' + (reussi ? "pass" : "fail") + '"><span>' + r.score + "%</span></div>" +
        '<p class="score-detail">✓ ' + r.correct + " mots justes sur " + r.total +
        (r.majErr ? " · 🔠 " + r.majErr + " majuscule(s)" : "") +
        (r.manquants ? " · ✗ " + r.manquants + " manquant(s)/faux" : "") +
        (r.motsEnTrop ? " · ➕ " + r.motsEnTrop + " en trop" : "") + "</p>" +
        '<p class="dictee-feedback">📝 <strong>Ponctuation :</strong> le texte original a ' + r.pRef + " signe(s) ; tu en as " + r.pUsr + ". " +
        (Math.abs(r.pRef - r.pUsr) <= 1 ? "Très bien !" : "Surveille les points, les virgules et les majuscules des noms.") + "</p>" +
        '<div class="dictee-correct"><span class="cours-tag">✅ Texte correct — tes mots faux/oubliés en rouge, casse en orange</span><p class="dictee-ref">' + refHtml + "</p></div>" +
        '<div class="rev-actions"><button class="btn btn-ghost" id="dictee-retry">↺ Recommencer</button><a class="btn btn-primary" href="#/">Retour au programme</a></div>';
      result.classList.remove("hidden");
      const retry = document.getElementById("dictee-retry"); if (retry) retry.addEventListener("click", () => renderDictee(moduleId));
      if (window.TG) window.TG.haptic(reussi ? "success" : "warning");
      try { localizeUI(result); } catch (e) {}
      result.scrollIntoView({ behavior: "smooth" });
    });

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { if (_dicteeStop) { _dicteeStop(); _dicteeStop = null; } location.hash = "#/"; }); try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {} }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  function pflegeDebloque() { return examPasse("final"); }
  function renderPflege() {
    const P = window.PFLEGE;
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/menu">← Menu</a><span class="lesson-top-mod">🩺 Deutsch Pflege</span>';
    frag.appendChild(top);
    var __pd = el("div", "pflege-dis"); __pd.style.cssText = "margin:8px 0;padding:10px 12px;border-radius:10px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;font-size:13px"; __pd.textContent = "Entraînement linguistique et préparation à l'examen - ceci n'est pas un conseil médical ni de soins."; frag.appendChild(__pd);

    if (!P) { app.innerHTML = ""; app.appendChild(frag); return; }

    /* Garde : il faut avoir réussi l'examen A2. */
    if (!pflegeDebloque()) {
      const lock = el("section", "lesson-section locked-notice");
      lock.innerHTML =
        '<div class="comp-emoji">🔒</div><h2>Cours réservé</h2>' +
        "<p>Pour suivre les <strong>cours de soins infirmiers</strong>, tu dois d'abord faire le <strong>cours d'allemand général</strong> et réussir l'<strong>examen A1 + A2</strong>.</p>" +
        "<p>Sans cet examen, ce parcours reste verrouillé.</p>";
      const go = el("a", "btn btn-primary", "→ Continuer le cours d'allemand"); go.href = prochaineEtape();
      lock.appendChild(go);
      const go2 = el("a", "btn btn-ghost small", "🏠 Menu"); go2.href = "#/menu"; go2.style.marginTop = "10px";
      lock.appendChild(go2);
      frag.appendChild(lock);
      app.innerHTML = ""; app.appendChild(frag);
      if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/menu"; }); try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {} }
      try { localizeUI(app); } catch (e) {}
      window.scrollTo(0, 0);
      return;
    }

    const hero = el("header", "hero pflege-hero");
    hero.innerHTML =
      '<p class="hero-eyebrow">' + P.sousTitre + "</p>" +
      "<h1>🩺 " + P.titre + "</h1>" +
      '<p class="hero-desc">' + P.description + "</p>";
    frag.appendChild(hero);

    const leg = el("div", "pflege-domaines");
    Object.keys(P.domaines).forEach((k) => {
      const d = P.domaines[k];
      const s = el("span", "pflege-dom-leg"); s.innerHTML = d.ic + " " + d.nom;
      leg.appendChild(s);
    });
    frag.appendChild(leg);

    const actions = el("div", "pflege-actions");
    const gloss = el("a", "btn btn-ghost", "📖 Glossaire médical"); gloss.href = "#/pflege/glossar";
    actions.appendChild(gloss);
    frag.appendChild(actions);
    frag.appendChild(el("p", "exo-group-sub", "📋 Programme de A2 à C2. Termine les leçons d'un niveau, puis passe l'examen pour débloquer le suivant."));

    P.niveaux.forEach((niv) => {
      const sec = el("section", "pflege-niveau");
      sec.appendChild(el("h2", "pflege-niv-titre", niv.code + " — " + niv.titre));
      const grid = el("div", "pflege-grid");
      niv.lecons.forEach((l) => {
        const dom = P.domaines[l.dom] || { ic: "•", nom: "" };
        const has = pflegeHasContent(l);
        const done = has && window.Progress && window.Progress.estTermine(l.id);
        const card = el(has ? "a" : "div", "pflege-card" + (done ? " done" : ""));
        if (has) card.href = "#/pflege/lecon/" + l.id;
        const trailing = has
          ? '<span class="menu-go">' + (done ? "✓" : "→") + "</span>"
          : '<span class="menu-badge">Bientôt</span>';
        card.innerHTML =
          '<div class="pflege-ic"' + (has ? ' style="background-image:url(\'' + lessonPhoto(l.id, 120, 120) + '\')"' : "") + "><span>" + dom.ic + "</span></div>" +
          '<div class="pflege-body">' +
          '<div class="pflege-de">' + l.titreDE + "</div>" +
          '<div class="pflege-fr">' + l.titre + "</div>" +
          '<p class="pflege-desc">' + l.desc + "</p>" +
          '<span class="pflege-tag">' + dom.nom + "</span>" +
          "</div>" + trailing;
        grid.appendChild(card);
      });
      sec.appendChild(grid);
      // Carte d'examen du niveau (comme le cours général).
      if (pfLeconsOf(niv.code).length) {
        const done = niveauTerminePflege(niv.code);
        const passed = pfExamPasse(niv.code);
        const exCard = el(done ? "a" : "div", "pflege-exam" + (passed ? " done" : "") + (done ? "" : " locked"));
        if (done) exCard.href = "#/pflege/examen/" + niv.code;
        exCard.innerHTML = '<span class="pflege-exam-ic">🎓</span><div class="pflege-exam-body"><strong>Examen ' + niv.code + " — Pflege</strong><span>" +
          (passed ? "Réussi ✓ — niveau validé" : (done ? "Prêt : teste tes connaissances du niveau " + niv.code : "Termine les leçons du niveau pour débloquer l'examen")) +
          '</span></div><span class="menu-go">' + (passed ? "✓" : (done ? "→" : "🔒")) + "</span>";
        sec.appendChild(exCard);
      }
      frag.appendChild(sec);
    });

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/menu"; }); try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {} }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* --- Examen de niveau Pflege : pioche dans les exercices notés des leçons
     du niveau, comme le cours général. Score stocké sous « pf-<niveau> ». --- */
  function renderPflegeTest(niv) {
    const lecons = pfLeconsOf(niv);
    if (!window.PFLEGE || !pflegeDebloque() || !lecons.length || !niveauTerminePflege(niv)) { location.hash = "#/pflege"; return; }
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/pflege">← Programme Pflege</a><span class="lesson-top-mod">🎓 Examen ' + niv + "</span>";
    frag.appendChild(top);

    const pool = [];
    lecons.forEach((l) => (l.exercices || []).forEach((ex) => { if (window.Exercises.GRADABLE.indexOf(ex.type) >= 0) pool.push(ex); }));
    const N = Math.min(15, pool.length);
    const chosen = window.Exercises.shuffle(pool).slice(0, N);
    const seuil = 70;

    const head = el("header", "test-head"); head.style.setProperty("--mod-color", "#0d9488");
    head.innerHTML = '<div class="lesson-num">Examen Pflege ' + niv + '</div><h1>Évaluation notée</h1>' +
      "<p>" + N + " questions · seuil de réussite : <strong>" + seuil + "%</strong>. Réponds à tout, puis « Terminer ».</p>";
    frag.appendChild(head);

    const list = el("div", "test-list"); const nodes = [];
    chosen.forEach((ex, i) => { const node = window.Exercises.render(ex, i, null, { testMode: true, label: "Question " + (i + 1) }); nodes.push(node); list.appendChild(node); });
    frag.appendChild(list);

    const result = el("div", "test-result hidden");
    const submit = el("button", "btn btn-primary big", "Terminer l'examen"); submit.type = "button";
    const sr = el("div", "test-submit"); sr.appendChild(submit); frag.appendChild(sr); frag.appendChild(result);

    const ni = PF_NIVEAUX.indexOf(niv); const nextNiv = PF_NIVEAUX[ni + 1];
    submit.addEventListener("click", () => {
      let correct = 0, wrong = 0, blank = 0;
      nodes.forEach((n) => { const r = n._grade(true); if (r.ok === true) correct++; else if (r.ok === false) wrong++; else blank++; });
      const score = Math.round((correct / N) * 100); const reussi = score >= seuil;
      window.Progress.setTestScore("pf-" + niv, score, reussi);
      const nextLecon = nextNiv ? (pfLeconsOf(nextNiv)[0] || {}) : null;
      const next = reussi && nextLecon && nextLecon.id ? "#/pflege/lecon/" + nextLecon.id : "#/pflege";
      result.className = "test-result " + (reussi ? "pass" : "fail");
      result.innerHTML =
        '<div class="score-ring ' + (reussi ? "pass" : "fail") + '"><span>' + score + "%</span></div>" +
        "<h2>" + (reussi ? "🎓 Examen " + niv + " Pflege réussi !" : "📚 Encore un effort") + "</h2>" +
        '<p class="score-detail">✓ ' + correct + " correct(s) · ✗ " + wrong + " erreur(s)" + (blank ? " · ⊘ " + blank + " sans réponse" : "") + "</p>" +
        "<p>" + (reussi ? (nextNiv ? "Le niveau <strong>" + nextNiv + "</strong> du parcours est débloqué !" : "🏆 Bravo ! Tu as terminé tout le parcours soignant, de A2 à C2 !") : "Il faut " + seuil + "%. Revois les leçons du niveau, puis recommence.") + "</p>" +
        '<div class="rev-actions">' +
        (reussi && next !== "#/pflege" ? '<a class="btn btn-primary" href="' + next + '">Niveau ' + nextNiv + " →</a>" : '<a class="btn btn-primary" href="#/pflege">← Programme Pflege</a>') +
        '<button class="btn btn-ghost" id="pf-again">Recommencer</button></div>';
      result.classList.remove("hidden"); submit.disabled = true; submit.textContent = "Examen terminé";
      const again = document.getElementById("pf-again"); if (again) again.addEventListener("click", () => renderPflegeTest(niv));
      if (window.TG) window.TG.haptic(reussi ? "success" : "warning");
      try { localizeUI(app); } catch (e) {}
      result.scrollIntoView({ behavior: "smooth" });
    });

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/pflege"; }); window.TG.setMainButton("Terminer l'examen", () => submit.click()); }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* --- Glossaire médical : tout le vocabulaire Pflege, avec audio + recherche. --- */
  function renderPflegeGlossar() {
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/pflege">← Programme Pflege</a><span class="lesson-top-mod">📖 Glossaire médical</span>';
    frag.appendChild(top);
    if (!window.PFLEGE) { app.innerHTML = ""; app.appendChild(frag); return; }

    const seen = {}; const terms = [];
    pflatList().forEach((f) => (f.lecon.vocabulaire || []).forEach((v) => { if (!seen[v.de]) { seen[v.de] = 1; terms.push({ de: v.de, fr: v.fr, ex: v.ex, niv: f.niv }); } }));
    const sortKey = (s) => String(s).replace(/^(der|die|das)\s+/, "").toLowerCase();
    terms.sort((a, b) => sortKey(a.de).localeCompare(sortKey(b.de), "de"));

    const head = el("header", "hero pflege-hero");
    head.innerHTML = '<p class="hero-eyebrow">Wortschatz Pflege</p><h1>📖 Glossaire médical</h1><p class="hero-desc">' + terms.length + " termes du soin, de A2 à C2. Écoute la prononciation (🔊) et révise.</p>";
    frag.appendChild(head);

    const search = el("input", "glossar-search"); search.type = "search"; search.placeholder = "🔍 Chercher un mot…"; search.setAttribute("autocomplete", "off");
    frag.appendChild(search);
    const listWrap = el("div", "glossar-list"); frag.appendChild(listWrap);

    function build(filter) {
      listWrap.innerHTML = "";
      const q = (filter || "").trim().toLowerCase(); let n = 0;
      terms.forEach((t) => {
        if (q && t.de.toLowerCase().indexOf(q) < 0 && String(t.fr || "").toLowerCase().indexOf(q) < 0) return;
        n++;
        const row = el("div", "glossar-row");
        const deWrap = el("div", "voc-de"); const span = el("span", ""); span.innerHTML = vocDeHtml(t.de);
        deWrap.appendChild(span); deWrap.appendChild(speakButton(t.de)); row.appendChild(deWrap);
        row.appendChild(el("div", "voc-fr", t.fr));
        if (t.ex) { const ex = el("div", "voc-ex"); ex.innerHTML = "« " + escapeHtml(t.ex) + " »"; row.appendChild(ex); }
        row.appendChild(el("span", "glossar-niv", t.niv));
        listWrap.appendChild(row);
      });
      if (!n) listWrap.appendChild(el("p", "exo-group-sub", "Aucun terme trouvé."));
      try { localizeUI(listWrap); } catch (e) {}
    }
    build("");
    search.addEventListener("input", () => build(search.value));

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/pflege"; }); try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {} }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* --- Moteur de leçon du parcours Pflege (réutilise les briques du cours
     général : vocabulaire, cours, dialogue, exercices, « plus d'exemples »).
     Progression et déblocage propres à Pflege (clé = id de la leçon). --- */
  let _pflat = null;
  function pflatList() {
    if (_pflat) return _pflat;
    _pflat = [];
    ((window.PFLEGE && window.PFLEGE.niveaux) || []).forEach((niv) => (niv.lecons || []).forEach((l) => _pflat.push({ niv: niv.code, lecon: l })));
    return _pflat;
  }
  function pIndexOf(id) { return pflatList().findIndex((f) => f.lecon.id === id); }
  function pflegeHasContent(l) { return !!(l && (l.vocabulaire || (l.grammaire && l.grammaire.length) || l.dialogue || (l.exercices && l.exercices.length))); }
  /* Examens de niveau du parcours Pflege (comme le cours général). */
  var PF_NIVEAUX = ["A2", "B1", "B2", "C1", "C2"];
  function pfLeconsOf(niv) { return pflatList().filter((f) => f.niv === niv && pflegeHasContent(f.lecon)).map((f) => f.lecon); }
  function niveauTerminePflege(niv) { const ls = pfLeconsOf(niv); return ls.length > 0 && ls.every((l) => window.Progress.estTermine(l.id)); }
  function pfExamPasse(niv) { const t = window.Progress.getTestScore("pf-" + niv); return !!(t && t.reussi); }
  function isUnlockedPflege(idx) {
    if (!pflegeDebloque()) return false;
    if (idx <= 0) return true;
    const pflat = pflatList();
    const cur = pflat[idx], prev = pflat[idx - 1];
    // Première leçon d'un nouveau niveau → exige l'examen Pflege du niveau précédent.
    if (cur.niv !== prev.niv && pfLeconsOf(prev.niv).length) return pfExamPasse(prev.niv);
    // Sinon : séquentiel (la leçon précédente — si elle a du contenu — doit être terminée).
    if (!pflegeHasContent(prev.lecon)) return true;
    return window.Progress.estTermine(prev.lecon.id);
  }

  function pflegeCompletion(container, score, idx, passed) {
    const old = container.querySelector(".completion"); if (old) old.remove();
    const seuil = 70;
    const c = el("div", "completion " + (passed ? "ok" : "ko"));
    if (!passed) {
      c.innerHTML = '<div class="comp-emoji">📚</div><h3>Presque !</h3><p>Score : <span class="comp-score ko">' + score +
        "%</span> — il faut <strong>" + seuil + "%</strong> pour valider la leçon. Reprends les exercices en rouge.</p>";
      container.appendChild(c); try { localizeUI(app); } catch (e) {} c.scrollIntoView({ behavior: "smooth" }); return;
    }
    const pflat = pflatList(); const next = pflat[idx + 1];
    const suivante = next && pflegeHasContent(next.lecon);
    c.innerHTML = '<div class="comp-emoji">🎉</div><h3>Leçon validée !</h3><p>Score : <span class="comp-score">' + score +
      "%</span> (requis " + seuil + "%) — " + (suivante ? "leçon suivante débloquée !" : "tu as terminé les leçons disponibles ! 🎓") + "</p>";
    const actions = el("div", "rev-actions");
    const go = el("a", "btn btn-primary", suivante ? "→ " + next.lecon.titre : "← Programme Pflege");
    go.href = suivante ? "#/pflege/lecon/" + next.lecon.id : "#/pflege";
    actions.appendChild(go);
    c.appendChild(actions); container.appendChild(c); try { localizeUI(app); } catch (e) {} c.scrollIntoView({ behavior: "smooth" });
  }

  function renderPflegeLecon(id) {
    const P = window.PFLEGE; if (!P) { location.hash = "#/pflege"; return; }
    const pflat = pflatList();
    const idx = pIndexOf(id);
    if (idx < 0) return renderPflege();
    const f = pflat[idx]; const l = f.lecon;
    if (!pflegeDebloque() || !pflegeHasContent(l)) return renderPflege();

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/pflege">← Programme Pflege</a><span class="lesson-top-mod">🩺 ' + f.niv + "</span>";
    frag.appendChild(top);

    /* Garde séquentielle dans le parcours Pflege. */
    if (!isUnlockedPflege(idx)) {
      const prev = pflat[idx - 1];
      const lock = el("section", "lesson-section locked-notice");
      if (prev.niv !== f.niv && pfLeconsOf(prev.niv).length && !pfExamPasse(prev.niv)) {
        lock.innerHTML = '<div class="comp-emoji">🔒</div><h2>Examen requis</h2><p>Pour accéder au niveau <strong>' + f.niv + "</strong>, réussis d'abord l'<strong>examen " + prev.niv + " Pflege</strong>.</p>";
        const go = el("a", "btn btn-primary", "🎓 Passer l'examen " + prev.niv); go.href = niveauTerminePflege(prev.niv) ? "#/pflege/examen/" + prev.niv : "#/pflege"; lock.appendChild(go);
      } else {
        lock.innerHTML = '<div class="comp-emoji">🔒</div><h2>Leçon verrouillée</h2><p>Termine d\'abord la leçon précédente : <strong class="pflege-de">' + prev.lecon.titreDE + "</strong>.</p>";
        const go = el("a", "btn btn-primary", "→ " + prev.lecon.titre); go.href = "#/pflege/lecon/" + prev.lecon.id; lock.appendChild(go);
      }
      frag.appendChild(lock); app.innerHTML = ""; app.appendChild(frag);
      if (window.TG) window.TG.showBackButton(() => { location.hash = "#/pflege"; });
      try { localizeUI(app); } catch (e) {} window.scrollTo(0, 0); return;
    }

    const niveau = l.niveau || f.niv;
    const gEx = window.I18N ? window.I18N.explication(niveau) : { lang: "fr", de: false, niveau: null };
    const dom = P.domaines[l.dom] || { ic: "🩺", nom: "" };

    const hero = el("header", "hero pflege-hero");
    hero.innerHTML = '<div class="lesson-hero"><img loading="lazy" src="' + lessonPhoto(l.id, 900, 320) + '" alt="" onerror="this.style.display=\'none\'"></div>' +
      '<p class="hero-eyebrow">' + dom.ic + " " + dom.nom + "</p><h1><span class=\"pflege-de\">" + l.titreDE + "</span></h1><p class=\"hero-desc\">" + l.titre + "</p>";
    frag.appendChild(hero);

    /* --- Vocabulaire professionnel --- */
    if (l.vocabulaire && l.vocabulaire.length) {
      const voc = el("section", "lesson-section cours");
      const vHead = el("div", "ls-head");
      vHead.appendChild(el("h2", "", "🗂️ Wortschatz — vocabulaire du soin"));
      const playAll = el("button", "btn btn-ghost small", "🔊 Tout écouter");
      playAll.type = "button"; playAll.addEventListener("click", () => playSequence(l.vocabulaire.map((v) => v.de)));
      vHead.appendChild(playAll); voc.appendChild(vHead);
      const vNatifDE = gEx.de && l.vocCoursDE && l.vocCoursDE.length;
      const vArr = vNatifDE ? l.vocCoursDE : l.vocCours;
      if (vArr && vArr.length) {
        const vart = el("article", "cours-article voc-article");
        vArr.forEach((para) => { const pe = el("p", "cours-art-p"); if (vNatifDE) pe.innerHTML = mdLite(para); else localizeInto(pe, para, gEx); vart.appendChild(pe); });
        // Immersion (B1+) : le cours est en allemand → bouton pour l'écouter.
        if (vNatifDE && window.Speech && window.Speech.isSupported()) {
          const listen = el("button", "btn btn-ghost small", "🔊 Écouter le cours");
          listen.type = "button";
          const plain = vArr.map((para) => String(para).replace(/[*_`]/g, "")).join(" ");
          listen.addEventListener("click", () => window.Speech.speak(plain));
          vart.appendChild(listen);
        }
        voc.appendChild(vart);
      }
      const grid = el("div", "voc-grid");
      l.vocabulaire.forEach((v) => {
        const card = el("div", "voc-card");
        const gm = String(v.de).match(/^(der|die|das)\s/); if (gm) card.classList.add("genre-" + gm[1]);
        const top2 = el("div", "voc-top"); const deWrap = el("div", "voc-de");
        const span = el("span", ""); span.innerHTML = vocDeHtml(v.de);
        deWrap.appendChild(span); deWrap.appendChild(speakButton(v.de)); top2.appendChild(deWrap); card.appendChild(top2);
        card.appendChild(el("div", "voc-fr", v.fr));
        if (v.ex) { const ex = el("div", "voc-ex"); ex.innerHTML = "« " + escapeHtml(v.ex) + " »"; card.appendChild(ex); }
        grid.appendChild(card);
      });
      voc.appendChild(grid); frag.appendChild(voc);
    }

    /* --- Cours / grammaire appliquée --- */
    if ((l.grammaire && l.grammaire.length) || (l.exemplesPlus && l.exemplesPlus.length)) {
      const gram = el("section", "lesson-section cours");
      gram.appendChild(el("h2", "", "📐 " + exLabel(gEx, "course")));
      (l.grammaire || []).forEach((g) => gram.appendChild(renderGrammarBlock(g, niveau)));
      if (l.exemplesPlus && l.exemplesPlus.length) {
        const ep = el("div", "gram-block cours-block exemples-plus");
        const h = el("h3", "cours-titre");
        if (gEx.de) { h.classList.add("cours-ex-gl-de"); h.textContent = "💬 " + window.I18N.tIn("de", "more_examples"); }
        else localizeInto(h, "💬 Plus d'exemples en contexte", gEx);
        ep.appendChild(h); ep.appendChild(buildExemples(l.exemplesPlus, gEx)); gram.appendChild(ep);
      }
      frag.appendChild(gram);
    }

    /* --- Dialogue de situation --- */
    if (l.dialogue && l.dialogue.lignes) {
      const dlg = el("section", "lesson-section");
      const dHead = el("div", "ls-head");
      dHead.appendChild(el("h2", "", "💬 Dialogue — " + l.dialogue.titre));
      const playDlg = el("button", "btn btn-ghost small", "🎭 Jouer le dialogue (multi-voix)");
      playDlg.type = "button"; playDlg.addEventListener("click", () => playDialogue(l.dialogue.lignes));
      dHead.appendChild(playDlg); dlg.appendChild(dHead);
      if (l.dialogue.lieu) dlg.appendChild(el("p", "dlg-lieu", "📍 " + l.dialogue.lieu));
      const conv = el("div", "conv");
      l.dialogue.lignes.forEach((line, i) => {
        const row = el("div", "conv-row " + (i % 2 ? "right" : "left"));
        const bubble = el("div", "bubble");
        if (line.loc) bubble.appendChild(el("div", "conv-loc", line.loc));
        const deLine = el("div", "conv-de"); deLine.appendChild(el("span", "", line.de)); deLine.appendChild(speakButton(line.de));
        bubble.appendChild(deLine); bubble.appendChild(el("div", "conv-fr", line.fr));
        row.appendChild(bubble); conv.appendChild(row);
      });
      dlg.appendChild(conv); frag.appendChild(dlg);
    }

    /* --- Exercices --- */
    if (l.exercices && l.exercices.length) {
      const exo = el("section", "lesson-section"); exo.id = "exo";
      exo.appendChild(el("h2", "", "✍️ Exercices interactifs"));
      const seuil = 70;
      exo.appendChild(el("p", "exo-group-sub", "Fais tous les exercices et atteins <strong>" + seuil + "%</strong> de réussite pour valider la leçon."));
      const exProg = el("div", "exo-progress"); const bar = el("div", "bar"); const fill = el("div", "bar-fill");
      bar.appendChild(fill); const label = el("span", "exo-progress-label", ""); exProg.appendChild(label); exProg.appendChild(bar); exo.appendChild(exProg);
      const allEx = l.exercices.slice();
      // Documentation des soins (production guidée) + jeu de rôle (patient/collègue/médecin).
      if (l.documentation) allEx.push({ type: "production", cat: "prod", consigne: "📝 Documentation des soins", prompt: l.documentation.task, modele: l.documentation.modele });
      if (l.rp && l.rp.tours && l.rp.tours.length) allEx.push({ type: "rp", scene: l.rp.scene, intro: l.rp.intro, tours: l.rp.tours, fin: l.rp.fin, _niveau: niveau, _rp: true });
      const total = allEx.length; const done = new Set(); const success = new Set(); (function () { var sv = (window.Progress.getLecon(l.id) || {}).exercices || {}; Object.keys(sv).forEach(function (k) { var i = +k; if (i >= 0 && i < total) { done.add(i); if (sv[k]) success.add(i); } }); })(); let shown = window.Progress.estTermine(l.id);
      function refresh() {
        const besoin = Math.ceil(seuil * total / 100);
        label.textContent = done.size + "/" + total + " faits · " + success.size + "/" + total + " justes · requis " + besoin + "/" + total;
        fill.style.width = total ? (done.size / total) * 100 + "%" : "0%";
        if (done.size === total && total > 0) {
          const score = Math.round((success.size / total) * 100); const passed = score >= seuil;
          if (passed) window.Progress.marquerTermine(l.id, score);
          if (!shown) { shown = true; pflegeCompletion(exo, score, idx, passed); }
          if (passed) unlockNext();
        }
      }
      const groupDefs = { comp: ["📖 Compréhension", "Vérifie que tu as compris le vocabulaire et le dialogue."], appro: ["🎯 Application", "Ancre le vocabulaire et les tournures du soin."], prod: ["✍️ Production & documentation", "Produis en allemand et apprends à documenter le soin."], rp: ["🎭 Jeu de rôle", "Joue la scène avec le patient, un collègue ou le médecin : choisis la bonne réplique."] };
      const groups = {};
      function groupOf(cat) { if (!groups[cat]) { const g = el("div", "exo-group exo-group-" + cat); g.appendChild(el("h3", "exo-group-title", groupDefs[cat][0])); g.appendChild(el("p", "exo-group-sub", groupDefs[cat][1])); groups[cat] = g; } return groups[cat]; }
      allEx.forEach((ex, i) => {
        const node = window.Exercises.render(ex, i, (ok) => { done.add(i); if (ok) success.add(i); else success.delete(i); window.Progress.setExercice(l.id, i, ok); refresh(); });
        groupOf(ex._rp ? "rp" : exoCat(ex)).appendChild(node);
      });
      ["comp", "appro", "prod", "rp"].forEach((cat) => { if (groups[cat]) exo.appendChild(groups[cat]); });
      refresh(); frag.appendChild(exo);
      var unlockNext = function () { if (nextBtn) { nextBtn.classList.remove("is-locked"); nextBtn.textContent = nextLabel; nextBtn.href = nextHref; } };
    }

    /* --- Navigation préc / suiv (séquentielle, comme le cours général) --- */
    const nav = el("div", "lesson-nav");
    if (idx > 0 && pflegeHasContent(pflat[idx - 1].lecon)) {
      const prev = el("a", "btn btn-ghost", "← " + pflat[idx - 1].lecon.titre); prev.href = "#/pflege/lecon/" + pflat[idx - 1].lecon.id; nav.appendChild(prev);
    } else nav.appendChild(el("span", ""));
    const next = pflat[idx + 1];
    var nextHref = next && pflegeHasContent(next.lecon) ? "#/pflege/lecon/" + next.lecon.id : "#/pflege";
    var nextLabel = next && pflegeHasContent(next.lecon) ? next.lecon.titre + " →" : "← Programme Pflege";
    const dejaValide = window.Progress.estTermine(l.id) || !(l.exercices && l.exercices.length);
    var nextBtn = el("a", "btn btn-primary" + (dejaValide ? "" : " is-locked"), dejaValide ? nextLabel : "🔒 Termine tous les exercices");
    if (dejaValide) nextBtn.href = nextHref;
    else nextBtn.addEventListener("click", (e) => { e.preventDefault(); const x = document.getElementById("exo"); if (x) x.scrollIntoView({ behavior: "smooth" }); toast("Termine les exercices (≥ 70 %) pour débloquer la suite. 💪"); });
    nav.appendChild(nextBtn); frag.appendChild(nav);

    app.innerHTML = ""; app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/pflege"; }); try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {} }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     MENU / HUB — point d'entrée de l'app. Le cours d'allemand est une
     « option » parmi d'autres, prêt à en accueillir de nouvelles.

     👉 POUR AJOUTER UNE OPTION : ajoute une entrée dans le tableau APPS
        ci-dessous. { icon, titre, desc, href, actif }.
        - actif:true  → tuile cliquable (href = route ou URL).
        - actif:false → tuile « Bientôt disponible » (placeholder).
     ==================================================================== */
  function inviteAmi() {
    const tg = window.Telegram && window.Telegram.WebApp;
    let id = "";
    try { id = (tg && tg.initDataUnsafe && tg.initDataUnsafe.user && tg.initDataUnsafe.user.id) || ""; } catch (e) {}
    const go = function (bot) {
      const link = "https://t.me/" + (bot || "Allemanda1bot") + "?startapp=" + (id ? "ref_" + id : "");
      const text = "Apprends l'allemand avec moi sur Sprachakademie 🇩🇪 - cours A1 a C2, tuteur IA et coach de prononciation. Viens t'entrainer avec moi !";
      const share = "https://t.me/share/url?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent(text);
      try { if (window.TG) window.TG.haptic && window.TG.haptic("light"); } catch (e) {}
      try { if (tg && tg.openTelegramLink) { tg.openTelegramLink(share); return; } } catch (e) {}
      try { window.open(share, "_blank"); } catch (e) {}
    };
    try { fetch("/api/botinfo").then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { go(j && j.username); }).catch(function () { go(); }); }
    catch (e) { go(); }
  }

  function renderMenu() {
    const I = window.I18N;
    const frag = document.createDocumentFragment();

    // Barre du haut : titre du hub + langue de l'interface (modifiable).
    const top = el("div", "lesson-top menu-top");
    top.appendChild(el("span", "btn-link", "")); // cale à gauche
    top.appendChild(el("span", "lesson-top-mod", "🏠 Menu"));
    if (I) {
      const li = I.info();
      const lang = el("a", "btn-link", "🌐 " + li.f + " " + li.n);
      lang.href = "#/langue";
      top.appendChild(lang);
    } else { top.appendChild(el("span", "")); }
    frag.appendChild(top);

    // Héros
    const hero = el("section", "section menu-hero");
    hero.innerHTML =
      '<div class="coach-avatar">🧑‍🏫</div>' +
      '<p class="coach-nom">Coach Zika</p>' +
      "<h1>Qu'aimerais-tu faire aujourd'hui ?</h1>" +
      '<p class="menu-sub">Choisis une option pour commencer.</p>';
    frag.appendChild(hero);

    // Barre langue bien visible : l'utilisateur peut (re)définir sa langue.
    if (I) {
      const li = I.info();
      const langBar = el("a", "menu-langbar");
      langBar.href = "#/langue";
      langBar.innerHTML = '<span class="menu-langbar-ic">🌐</span><span class="menu-langbar-txt"><strong>Ta langue : ' + li.f + " " + li.n + "</strong><span>Le coach t'explique dans ta langue (niveaux A1 et A2) · changer</span></span><span class=\"menu-go\">→</span>";
      frag.appendChild(langBar);
    }

    // Les « apps » du menu (extensible — voir le commentaire ci-dessus).
    if (window.Revision && window.COURS) { try { var __due = window.Revision.stats(window.COURS).due; var __rv = el("a", "menu-revise"); __rv.href = "#/revision"; __rv.style.cssText = "display:flex;align-items:center;gap:12px;width:100%;margin:4px 0 12px;padding:14px 16px;border-radius:16px;background:linear-gradient(135deg,#0ea5e9,#22c55e);color:#fff;text-decoration:none;box-shadow:0 6px 16px rgba(14,165,233,.28)"; var __n = __due > 20 ? "20+" : __due; __rv.innerHTML = '<span style="font-size:26px">\uD83D\uDD01</span><span style="flex:1"><strong style="display:block;font-size:16px;margin-bottom:2px">R\u00e9viser le vocabulaire</strong><span style="font-size:13px;opacity:.92">' + (__due > 0 ? (__n + ' mot' + (__due > 1 ? 's' : '') + ' \u00e0 r\u00e9viser') : 'Tout est \u00e0 jour \uD83C\uDF89') + '</span></span><span style="font-size:20px">\u2192</span>'; frag.appendChild(__rv); } catch (e) {} }
    const APPS = [
      {
        icon: "🇩🇪",
        titre: "Allemand · A1 → C2",
        desc: "Cours complet avec le coach Zika : grammaire, vocabulaire, dialogues audio et examens.",
        href: besoinOnboarding() ? "#/start" : "#/",
        actif: true,
        progres: true
      },
      {
        icon: "🩺",
        titre: "Deutsch für die Pflege",
        desc: "Allemand pour les soignants : soins infirmiers, hôpital, maison de retraite, soins à domicile. Dès l'A2.",
        href: "#/pflege",
        actif: true,
        verrou: !pflegeDebloque()
      },
      {
        icon: "\u{1F916}",
        titre: "Tuteur IA",
        desc: "Discute en allemand avec un tuteur qui s'adapte a ton niveau, corrige tes fautes et joue des jeux de role (general ou Pflege).",
        href: "/tuteur.html",
        actif: true
      },
      {
        icon: "📚",
        titre: "Romans éducatifs",
        desc: "La bibliothèque : un roman par niveau (A1 → C2), mots colorés et vocabulaire expliqué en bas de page dans ta langue, avec quiz de fin de chapitre.",
        href: "#/romans",
        actif: true
      },
      { icon: "➕", titre: "Et plus encore", desc: "D'autres options arriveront bientôt ici.", actif: false }
    ];

    const grid = el("div", "menu-grid");
    APPS.forEach((a) => {
      const card = a.actif ? el("a", "menu-card") : el("div", "menu-card menu-soon");
      if (a.actif) card.href = a.href;
      card.appendChild(el("div", "menu-ic", a.icon));
      const body = el("div", "menu-card-body");
      body.appendChild(el("h2", "", a.titre));
      body.appendChild(el("p", "", a.desc));
      if (a.actif && a.progres && !besoinOnboarding() && window.Progress && window.COURS) {
        const r = window.Progress.resumeGlobal(window.COURS);
        const pr = el("div", "menu-prog");
        pr.innerHTML = '<div class="menu-bar"><span style="width:' + r.pourcent + '%"></span></div>' +
          "<small>" + r.faites + "/" + r.total + " · " + r.pourcent + "%</small>";
        body.appendChild(pr);
      }
      if (a.verrou) body.appendChild(el("p", "menu-lockhint", "🔒 Réussis l'examen A1 + A2 du cours général pour débloquer"));
      card.appendChild(body);
      if (a.actif) card.appendChild(el("span", "menu-go", a.verrou ? "🔒" : "→"));
      else card.appendChild(el("span", "menu-badge", "Bientôt disponible"));
      grid.appendChild(card);
    });
    frag.appendChild(grid);
    // Accès réservé au créateur / aux admins (statut renvoyé par le serveur).
    // Ouvre le tableau de bord en conservant l'identité Telegram → connexion
    // automatique, sans mot de passe. Invisible pour les autres utilisateurs.
    if (window.__ME && window.__ME.isAdmin) {
      const adm = el("a", "menu-admin");
      adm.href = "/admin.html";
      adm.style.cssText = "display:flex;align-items:center;gap:12px;width:100%;margin:4px 0 12px;padding:14px 16px;border-radius:16px;background:linear-gradient(135deg,#0f172a,#334155);color:#fff;text-decoration:none;box-shadow:0 6px 16px rgba(15,23,42,.3);border:1px solid rgba(255,255,255,.12)";
      adm.innerHTML = '<span style="font-size:26px">📊</span><span style="flex:1"><strong style="display:block;font-size:16px;margin-bottom:2px">Tableau de bord' + (window.__ME.isOwner ? ' 👑' : '') + '</strong><span style="font-size:13px;opacity:.92">Statistiques, utilisateurs, diffusion' + (window.__ME.isOwner ? ' et gestion des admins' : '') + '</span></span><span style="font-size:20px">→</span>';
      frag.appendChild(adm);
    }
    const inv = el("button", "menu-invite");
    inv.type = "button";
    inv.style.cssText = "display:flex;align-items:center;gap:12px;width:100%;margin:14px 0 4px;padding:14px 16px;border:0;border-radius:16px;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;cursor:pointer;font:inherit;text-align:left;box-shadow:0 6px 16px rgba(37,99,235,.28)";
    inv.innerHTML = '<span style="font-size:26px">📣</span><span style="flex:1"><strong style="display:block;font-size:16px;margin-bottom:2px">Inviter un ami</strong><span style="font-size:13px;opacity:.92">Partage Sprachakademie et apprenez l\'allemand ensemble 🇩🇪</span></span><span style="font-size:20px">→</span>';
    inv.addEventListener("click", inviteAmi);
    frag.appendChild(inv);
    var __lf = el("footer", "menu-legal"); __lf.style.cssText = "margin-top:18px;text-align:center;font-size:12px;opacity:.8;line-height:2"; __lf.innerHTML = '<a class="btn-link" href="#/impressum">Impressum</a> | <a class="btn-link" href="#/datenschutz">Datenschutz</a> | <a class="btn-link" href="#/agb">AGB</a> | <a class="btn-link" href="#/widerruf">Widerruf</a>'; frag.appendChild(__lf);

    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) {
      try { window.TG.hideBackButton && window.TG.hideBackButton(); } catch (e) {}
      try { window.TG.hideMainButton && window.TG.hideMainButton(); } catch (e) {}
    }
    try { localizeUI(app); } catch (e) {}
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     ROUTAGE
     ==================================================================== */
  function route() {
    if (window.I18N && window.I18N.setImmersionCtx) window.I18N.setImmersionCtx(null);
    const rawHash = location.hash;
    const hash = rawHash || "#/";
    let m;
    // Étape 0 OBLIGATOIRE — choix de la langue : tant qu'aucune langue n'est
    // choisie, on ne peut RIEN faire d'autre (ni menu, ni cours).
    if (window.I18N && !window.I18N.isChosen() && !window.__SYNC_PENDING && !hash.match(/^#\/langue/)) {
      return renderLanguagePage();
    }
    if (hash.match(/^#\/menu/)) renderMenu();
    else if ((m = hash.match(/^#\/pflege\/lecon\/(.+)$/))) renderPflegeLecon(m[1]);
    else if ((m = hash.match(/^#\/pflege\/examen\/(A2|B1|B2|C1|C2)/))) renderPflegeTest(m[1]);
    else if (hash.match(/^#\/pflege\/glossar/)) renderPflegeGlossar();
    else if (hash.match(/^#\/pflege/)) renderPflege();
    else if (hash.match(/^#\/start/)) renderOnboarding();
    else if ((m = hash.match(/^#\/placement-niveau\/(A1|A2|B1|B2|C1|C2)/))) renderNiveauTest(m[1]);
    else if (hash.match(/^#\/placement/)) renderPlacement();
    else if ((m = hash.match(/^#\/lecon\/(.+)$/))) renderLecon(m[1]);
    else if ((m = hash.match(/^#\/examen\/(a1|a2|final)\/resultat/))) renderDelfResult(m[1]);
    else if ((m = hash.match(/^#\/examen\/(a1|a2|final)(?:$|[\/?#])/))) renderDelf(m[1]);
    else if ((m = hash.match(/^#\/examen\/(b1|b2|c1|c2|finalb|finalc)\/resultat\/(ecrit|oral)/))) renderTelcResult(m[1], m[2]);
    else if ((m = hash.match(/^#\/examen\/(b1|b2|c1|c2|finalb|finalc)\/(ecrit|oral)/))) renderTelcPart(m[1], m[2] === "oral" ? "muendlich" : "schriftlich");
    else if ((m = hash.match(/^#\/examen\/(b1|b2|c1|c2|finalb|finalc)(?:$|[\/?#])/))) renderTelcHub(m[1]);
    else if ((m = hash.match(/^#\/examen\/(a1|a2|finalb|finalc|final|b1|b2|c1|c2)/))) renderTest(m[1]);
    else if (hash.match(/^#\/examen/)) renderTest("a1");
    else if ((m = hash.match(/^#\/romans\/(a1|a2|b1|b2|c1|c2)/))) renderRoman(m[1]);
    else if (hash.match(/^#\/romans/)) renderRomans();
    else if ((m = hash.match(/^#\/dictee\/([a-z0-9-]+)/))) renderDictee(m[1]);
    else if (hash.match(/^#\/revision/)) renderRevision();
    else if (hash.match(/^#\/langue/)) renderLanguagePage();
    else if (hash.match(/^#\/stats/)) renderDashboard();
    else if (hash.match(/^#\/objectif/)) { app.innerHTML = ""; if (window.Objectif && window.Objectif.page) app.appendChild(window.Objectif.page(COURS)); window.scrollTo(0, 0); if (window.TG) { try { window.TG.showBackButton(function () { location.hash = "#/"; }); if (window.TG.hideMainButton) window.TG.hideMainButton(); } catch (e) {} } }
    else if ((m = hash.match(/^#\/(impressum|datenschutz|agb|widerruf|legal)$/))) { app.innerHTML = ""; if (window.Legal && window.Legal.page) app.appendChild(window.Legal.page(m[1])); window.scrollTo(0, 0); if (window.TG) { try { window.TG.showBackButton(function () { location.hash = "#/menu"; }); if (window.TG.hideMainButton) window.TG.hideMainButton(); } catch (e) {} } }
    else if (rawHash === "#/") { if (besoinOnboarding()) renderOnboarding(); else renderHome(); } // aperçu du cours (lien explicite)
    else renderMenu(); // ouverture de l'app : hash vide OU « #tgWebAppData… » injecté par Telegram → le hub
    try { localizeUI(app); } catch (e) {} // traduit l'interface dans la langue choisie
  }

  /* --- PWA : installation + service worker (mode hors-ligne) --- */
  let deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); deferredPrompt = e; document.documentElement.classList.add("can-install"); });
  window.addEventListener("appinstalled", () => { deferredPrompt = null; document.documentElement.classList.remove("can-install"); });
  function promptInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.finally(() => { deferredPrompt = null; document.documentElement.classList.remove("can-install"); });
  }

  function boot() {
    if (window.TG) window.TG.init();
    window.__SYNC_PENDING = !!(window.Sync && window.Sync.serverAvailable && window.Sync.serverAvailable());
    Theme.apply(); // applique le thème choisi (après l'init Telegram)
    if (window.I18N) window.I18N.applyDir(); // sens d'écriture (RTL) + lang du document
    route(); // rendu immédiat avec les données locales
    // Fusion avec la progression cloud (Telegram) puis re-rendu si besoin
    if (window.Sync) window.Sync.load(function () { window.__SYNC_PENDING = false; route(); }); else { window.__SYNC_PENDING = false; }
    // Service worker : hors-ligne + installable (hors Telegram, qui gère son propre cache)
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      // Auto-mise à jour : si une nouvelle version du service worker prend la
      // main (déploiement), on recharge UNE fois pour afficher le contenu frais.
      // (Seulement si la page était déjà contrôlée → pas de reload au 1ᵉʳ install.)
      if (navigator.serviceWorker.controller) {
        var _swRefreshing = false;
        navigator.serviceWorker.addEventListener("controllerchange", function () {
          if (_swRefreshing) return; _swRefreshing = true; location.reload();
        });
      }
      navigator.serviceWorker.register("sw.js").then(function (reg) {
        // Cherche activement une mise à jour à chaque démarrage.
        try { reg.update(); } catch (e) {}
      }).catch(function () {});
    }
    startStudyTimer();
    Reminders.start();
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", boot);
  // Si déjà chargé
  if (document.readyState !== "loading") boot();
})();
