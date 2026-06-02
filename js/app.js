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
    t = t.replace(/«\s*([^»]+?)\s*»/g, '<span class="hl-de">«&nbsp;$1&nbsp;»</span>');
    return t;
  }
  function vocDeHtml(de) {
    const m = String(de).match(/^(der|die|das)\s+(.+)$/);
    if (m) return '<span class="art art-' + m[1] + '">' + m[1] + '</span> <strong class="voc-nom">' + escapeHtml(m[2]) + "</strong>";
    return '<strong class="voc-nom">' + escapeHtml(de) + "</strong>";
  }
  function buildExemples(arr) {
    const box = el("div", "cours-exemples");
    box.appendChild(el("div", "cours-tag", "✅ Exemples"));
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
  function renderGrammarBlock(g) {
    const block = el("div", "gram-block cours-block");
    block.appendChild(el("h3", "cours-titre", g.titre + (g.titreDE ? " · " + g.titreDE : "")));
    if (g.regle) {
      const r = el("div", "cours-regle"); r.innerHTML = '<span class="cours-tag">📘 La règle</span><div>' + mdLite(g.regle) + "</div>"; block.appendChild(r);
      if (g.intro) { const p = el("p", "cours-text"); p.innerHTML = mdLite(g.intro); block.appendChild(p); }
    } else if (g.intro && g.tableau) {
      // bloc de grammaire d'une leçon thématique (sans « regle ») : on met l'explication en avant
      const r = el("div", "cours-regle"); r.innerHTML = '<span class="cours-tag">📘 L\'essentiel</span><div>' + mdLite(g.intro) + "</div>"; block.appendChild(r);
    } else if (g.intro) {
      const p = el("p", "cours-text"); p.innerHTML = mdLite(g.intro); block.appendChild(p);
    }
    if (g.points && g.points.length) { const ul = el("ul", "cours-points"); g.points.forEach((pt) => { const li = el("li", ""); li.innerHTML = mdLite(pt); ul.appendChild(li); }); block.appendChild(ul); }
    if (g.tableau) block.appendChild(buildTable(g.tableau));
    if (g.schemas) block.appendChild(buildSchemas(g.schemas));
    const exs = mergeExemples(g);
    if (exs && exs.length) block.appendChild(buildExemples(exs));
    if (g.note) { const n = el("div", "cours-astuce"); n.innerHTML = '<span class="cours-tag">💡 Bon à savoir</span><div>' + mdLite(g.note) + "</div>"; block.appendChild(n); }
    if (g.attention) { const a = el("div", "cours-attention"); a.innerHTML = '<span class="cours-tag">⚠️ Attention</span><div>' + mdLite(g.attention) + "</div>"; block.appendChild(a); }
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
    const gram = el("section", "lesson-section cours");
    gram.id = "gram";
    gram.appendChild(el("h2", "", "📐 Cours de grammaire"));
    gram.appendChild(el("p", "exo-group-sub", "Lis l'explication et observe les exemples colorés avant de passer aux exercices."));
    l.grammaire.forEach((g) => gram.appendChild(renderGrammarBlock(g)));
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
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">📊 Mes statistiques</span>';
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

    const nav = el("div", "lesson-nav");
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
     ACCUEIL DU COACH — choix / test de niveau
     ==================================================================== */
  function renderOnboarding() {
    const labels = NIVEAU_LABELS;
    const frag = document.createDocumentFragment();

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
    route(); // rendu immédiat avec les données locales
    // Fusion avec la progression cloud (Telegram) puis re-rendu si besoin
    if (window.Sync) window.Sync.load(function (changed) { if (changed) route(); });
    // Service worker : hors-ligne + installable (hors Telegram, qui gère son propre cache)
    if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    }
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", boot);
  // Si déjà chargé
  if (document.readyState !== "loading") boot();
})();
