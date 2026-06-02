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
    const plain = stripMd(text);
    // Traduction automatique du navigateur si disponible ; sinon, texte de base.
    window.I18N.translate(plain, target, "fr").then((out) => {
      if (out && out !== plain) {
        node.innerHTML = mdLite(out);
        node.appendChild(el("span", "xl-tag", "🌐 " + window.I18N.t("auto_translated")));
      }
    });
    return node;
  }
  function exLabel(ex, key, vars) { return ex && ex.de ? window.I18N.tIn("de", key, vars) : window.I18N.t(key, vars); }
  function vocDeHtml(de) {
    const m = String(de).match(/^(der|die|das)\s+(.+)$/);
    if (m) return '<span class="art art-' + m[1] + '">' + m[1] + '</span> <strong class="voc-nom">' + escapeHtml(m[2]) + "</strong>";
    return '<strong class="voc-nom">' + escapeHtml(de) + "</strong>";
  }
  function buildExemples(arr, ex) {
    const box = el("div", "cours-exemples");
    const head = el("div", "cours-ex-head");
    head.appendChild(el("span", "cours-tag", "✅ " + exLabel(ex, "examples")));
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
      if (e.fr) body.appendChild(el("div", "cours-ex-fr", e.fr));
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
      box.appendChild(el("span", "cours-tag", icon + " " + exLabel(ex, key)));
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

    /* --- Conseil de Zika (points faibles repérés au test) --- */
    const faibles = window.Progress.getFaiblesses();
    if (faibles && faibles.length) {
      const tip = el("section", "section");
      const tc = el("div", "zika-conseil");
      tc.innerHTML = '<span class="cours-tag">💡 Le conseil de Zika</span>' +
        "<div>D'après ton test, travaille en priorité : <strong>" + faibles.map(escapeHtml).join("</strong>, <strong>") + "</strong>.</div>" +
        '<a class="btn btn-ghost small" href="#/revision" style="margin-top:10px">🔁 Réviser maintenant</a>';
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
    function carteExamen(examId, titre, unlocked, sousTitre, lockText) {
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

    renderNiveau({ code: "A1", exam: "a1", prevExam: null, prevLabel: null,
      examSous: "20 questions de tout l'A1 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour débloquer le niveau A2 !" });
    renderNiveau({ code: "A2", exam: "a2", prevExam: "a1", prevLabel: "l'examen A1",
      examSous: "20 questions de tout l'A2 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour débloquer l'examen final." });

    /* --- Examen final A1 + A2 (verrou vers le B1) --- */
    const finalSec = el("section", "section");
    finalSec.appendChild(carteExamen("final", "🎓 Examen final A1 + A2", examPasse("a2"),
      "30 questions tirées de tout l'A1 et l'A2 · seuil " + COURS.seuilReussite + "%. La consécration !",
      "Réussissez l'examen du niveau A2 pour débloquer l'examen final."));
    frag.appendChild(finalSec);

    /* --- Niveau B1 (débloqué après l'examen final A1 + A2) --- */
    renderNiveau({ code: "B1", exam: "b1", prevExam: "final", prevLabel: "l'examen final A1 + A2",
      examSous: "25 questions de tout le B1 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour accéder au niveau B2 !" });

    /* --- Niveau B2 (débloqué après l'examen B1) --- */
    renderNiveau({ code: "B2", exam: "b2", prevExam: "b1", prevLabel: "l'examen B1",
      examSous: "30 questions de tout le B2 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour débloquer l'examen B1 + B2." });

    /* --- Examen combiné B1 + B2 (verrou vers le C1) --- */
    const finalbSec = el("section", "section");
    finalbSec.appendChild(carteExamen("finalb", "🎓 Examen B1 + B2", examPasse("b2"),
      "30 questions tirées de tout le B1 et le B2 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour accéder au C1 !",
      "Réussissez l'examen du niveau B2 pour débloquer l'examen B1 + B2."));
    frag.appendChild(finalbSec);

    /* --- Niveau C1 (débloqué après l'examen B1 + B2) --- */
    renderNiveau({ code: "C1", exam: "c1", prevExam: "finalb", prevLabel: "l'examen B1 + B2",
      examSous: "30 questions de tout le C1 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour accéder au niveau C2 !" });

    /* --- Niveau C2 (débloqué après l'examen C1) --- */
    renderNiveau({ code: "C2", exam: "c2", prevExam: "c1", prevLabel: "l'examen C1",
      examSous: "30 questions de tout le C2 · seuil " + COURS.seuilReussite + "%. Réussissez-le pour l'examen final C1 + C2 !" });

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
      '<button class="btn-link" id="reset-prog">Réinitialiser ma progression</button>';
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
  function renderLecon(id) {
    const idx = leconIndex(id);
    if (idx < 0) return renderHome();
    const { module: mod, lecon: l } = flat[idx];

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
    exo.appendChild(el("p", "exo-group-sub", "Faites tous les exercices. Atteignez <strong>" + seuil + "% de bonnes réponses</strong> pour valider la leçon : la suivante se débloque et s'ouvre automatiquement."));
    const exProg = el("div", "exo-progress");
    const bar = el("div", "bar");
    const fill = el("div", "bar-fill");
    bar.appendChild(fill);
    const label = el("span", "exo-progress-label", "");
    exProg.appendChild(label);
    exProg.appendChild(bar);
    exo.appendChild(exProg);

    const total = l.exercices.length;
    const done = new Set();
    const success = new Set();
    let completionShown = false;
    function refresh() {
      const sc = done.size ? Math.round((success.size / done.size) * 100) : 0;
      label.textContent = done.size + "/" + total + " faits · " + sc + "% justes (requis " + seuil + "%)";
      fill.style.width = total ? (done.size / total) * 100 + "%" : "0%";
      if (done.size === total && total > 0) {
        const score = Math.round((success.size / total) * 100);
        const passed = score >= seuil;
        if (passed) window.Progress.marquerTermine(l.id, score);
        if (!completionShown) { completionShown = true; showCompletion(exo, score, idx, passed); }
      }
    }

    const groupDefs = {
      comp: ["📖 Exercices de compréhension", "Vérifiez que vous avez bien compris le dialogue et le sens."],
      appro: ["🎯 Exercices approfondis", "Grammaire et application, pour ancrer la leçon."],
      prod: ["✍️ Production écrite & orale", "À votre tour de produire en allemand."]
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
    l.exercices.forEach((ex, i) => {
      const node = window.Exercises.render(ex, i, (ok) => {
        done.add(i);
        if (ok) success.add(i);
        else success.delete(i);
        window.Progress.setExercice(l.id, i, ok);
        refresh();
      });
      groupOf(exoCat(ex)).appendChild(node);
    });
    ["comp", "appro", "prod"].forEach((cat) => { if (groups[cat]) exo.appendChild(groups[cat]); });
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
    const next = el("a", "btn btn-primary", suiteLabel);
    next.href = suite;
    nav.appendChild(next);
    frag.appendChild(nav);

    app.innerHTML = "";
    app.appendChild(frag);
    window.Progress.touchStreak(window.Progress.load());

    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.closingConfirmation(false);
      window.TG.setMainButton(suiteExamen ? "🎓 Examen " + flat[idx].lecon.niveau : "Suivant →", () => { location.hash = suite; });
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
      '<p>Score : <span class="comp-score">' + score + "%</span> (requis " + seuil + "%) — " +
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
    function next() {
      if (i >= list.length) return;
      const txt = String(list[i]).replace(/\([^)]*\)/g, "").trim();
      i++;
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = "de-DE";
      const v = window.Speech.voice && window.Speech.voice();
      if (v) u.voice = v;
      u.rate = 0.9;
      u.onend = () => setTimeout(next, 250);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
    next();
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
      ? "Zika te rappellera d'étudier à l'heure choisie si tu ne l'as pas encore fait (app ouverte ou installée)."
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

    const pool = [];
    lecons.forEach((l) => l.exercices.forEach((ex) => { if (window.Exercises.GRADABLE.indexOf(ex.type) >= 0) pool.push(ex); }));
    const N = Math.min(key === "a1" || key === "a2" ? 20 : key === "b1" ? 25 : 30, pool.length);
    const chosen = window.Exercises.shuffle(pool).slice(0, N);

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

  function renderLanguagePage() {
    const I = window.I18N;
    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Accueil</a><span class="lesson-top-mod">🌐 ' + (I ? I.t("language") : "Langue") + "</span>";
    frag.appendChild(top);
    if (I) frag.appendChild(buildLanguagePicker({ onPick: () => renderLanguagePage() }));
    const nav = el("div", "lesson-nav");
    nav.appendChild(el("span", ""));
    const cont = el("a", "btn btn-primary", (I ? I.t("continue") : "Continuer") + " →");
    cont.href = "#/";
    nav.appendChild(cont);
    frag.appendChild(nav);
    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) { window.TG.showBackButton(() => { location.hash = "#/"; }); window.TG.hideMainButton(); }
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     ACCUEIL DU COACH — choix / test de niveau
     ==================================================================== */
  function renderOnboarding() {
    const labels = NIVEAU_LABELS;
    const frag = document.createDocumentFragment();

    /* D'abord : quelle langue parles-tu ? (cours A1/A2 dans cette langue) */
    if (window.I18N) frag.appendChild(buildLanguagePicker({ onPick: () => renderOnboarding() }));

    const salutDE = "Hallo! Ich bin Zika, dein Deutsch-Coach. Lass uns gemeinsam dein Niveau finden!";
    const hero = el("section", "section onboarding");
    hero.innerHTML =
      '<div class="coach-avatar">🧑‍🏫</div>' +
      '<p class="coach-nom">Coach Zika</p>' +
      "<h1>Hallo, ich bin Zika — dein Deutsch-Coach!</h1>" +
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
    const grid = el("div", "niveau-choix");
    ORDRE_NIVEAUX.forEach((code) => {
      const b = el("button", "niveau-btn", "");
      b.type = "button";
      b.innerHTML = "<strong>" + code + "</strong><span>" + labels[code] + "</span>";
      b.addEventListener("click", () => { placerAuNiveau(code); location.hash = prochaineEtape(); });
      grid.appendChild(b);
    });
    pick.appendChild(grid);
    frag.appendChild(pick);

    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) window.TG.setMainButton("🎯 Évaluer mon niveau", () => { location.hash = "#/placement"; });
    // Zika salue à voix haute (si autorisé par le navigateur)
    if (window.Speech && window.Speech.isSupported()) { try { setTimeout(() => window.Speech.speak(salutDE, { rate: 1, pitch: 0.95 }), 400); } catch (e) {} }
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
    function supported() { return "Notification" in window; }
    function syncState() {
      if (!("caches" in window)) return;
      const r = window.Progress.getReglages();
      const payload = JSON.stringify({ rappel: !!r.rappel, heure: r.rappelHeure || "19:00", last: window.Progress.getLastStudy(), notified: window.Progress.getLastNotified() });
      caches.open("deutsch-state").then((c) => c.put("/__study", new Response(payload, { headers: { "Content-Type": "application/json" } }))).catch(function () {});
    }
    function check() {
      const r = window.Progress.getReglages();
      if (!r.rappel || !supported() || Notification.permission !== "granted") return;
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
      if (!supported()) return false;
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
    function disable() { window.Progress.setReglages({ rappel: false }); syncState(); }
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
     ROUTAGE
     ==================================================================== */
  function route() {
    const hash = location.hash || "#/";
    let m;
    if (hash.match(/^#\/start/)) renderOnboarding();
    else if (hash.match(/^#\/placement/)) renderPlacement();
    else if ((m = hash.match(/^#\/lecon\/(.+)$/))) renderLecon(m[1]);
    else if ((m = hash.match(/^#\/examen\/(a1|a2|finalb|finalc|final|b1|b2|c1|c2)/))) renderTest(m[1]);
    else if (hash.match(/^#\/examen/)) renderTest("a1");
    else if (hash.match(/^#\/revision/)) renderRevision();
    else if (hash.match(/^#\/langue/)) renderLanguagePage();
    else if (hash.match(/^#\/stats/)) renderDashboard();
    else if (besoinOnboarding()) renderOnboarding();
    else renderHome();
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
    Theme.apply(); // applique le thème choisi (après l'init Telegram)
    if (window.I18N) window.I18N.applyDir(); // sens d'écriture (RTL) + lang du document
    route(); // rendu immédiat avec les données locales
    // Fusion avec la progression cloud (Telegram) puis re-rendu si besoin
    if (window.Sync) window.Sync.load(function (changed) { if (changed) route(); });
    // Service worker : hors-ligne + installable (hors Telegram, qui gère son propre cache)
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
    startStudyTimer();
    Reminders.start();
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", boot);
  // Si déjà chargé
  if (document.readyState !== "loading") boot();
})();
