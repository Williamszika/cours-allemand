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
  function isUnlocked(idx) {
    return idx <= 0 || window.Progress.estTermine(flat[idx - 1].lecon.id);
  }
  function allLessonsDone() {
    return flat.every((f) => window.Progress.estTermine(f.lecon.id));
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

  /* ====================================================================
     APERÇU DU PROGRAMME (page d'accueil)
     ==================================================================== */
  function renderHome() {
    const s = COURS.stats;
    const res = window.Progress.resumeGlobal(COURS);
    const frag = document.createDocumentFragment();

    /* --- Hero --- */
    const hero = el("header", "hero");
    hero.innerHTML =
      '<div class="hero-flag" aria-hidden="true"><span></span><span></span><span></span></div>' +
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

    const cta = el("div", "hero-cta");
    const startId = nextLeconId(res);
    const allDone = allLessonsDone();
    const btn = el("a", "btn btn-primary big");
    btn.href = allDone ? "#/examen" : "#/lecon/" + startId;
    btn.textContent = allDone
      ? "🎓 Passer l'examen final"
      : res.faites > 0 ? "▶ Continuer la leçon " + (leconIndex(startId) + 1) : "▶ Commencer la leçon 1";
    cta.appendChild(btn);

    // Actions secondaires : révision espacée
    const srs = window.Revision.stats(COURS);
    const secondRow = el("div", "hero-secondary");
    const revBtn = el("a", "btn btn-ghost");
    revBtn.href = "#/revision";
    revBtn.innerHTML = "🔁 Réviser" + (srs.due ? ' <span class="pill">' + srs.due + "</span>" : "");
    secondRow.appendChild(revBtn);
    cta.appendChild(secondRow);

    const audioInfo = el("p", "hero-audio-info", window.Speech && window.Speech.isSupported()
      ? "🔊 Prononciation audio allemande activée"
      : "ℹ️ Activez le son de votre navigateur pour la prononciation");
    cta.appendChild(audioInfo);
    hero.appendChild(cta);
    frag.appendChild(hero);

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

    /* --- Modules et leçons --- */
    COURS.modules.forEach((mod) => {
      const sec = el("section", "section module");
      sec.style.setProperty("--mod-color", mod.couleur);
      const headM = el("div", "module-head");
      headM.innerHTML =
        '<div class="module-badge">' + mod.titre + "</div>" +
        "<h2>" + mod.sousTitre + "</h2>" +
        "<p>" + mod.description + "</p>";
      sec.appendChild(headM);

      const grid = el("div", "lecon-grid");
      mod.lecons.forEach((l) => {
        const gidx = leconIndex(l.id);
        const done = window.Progress.estTermine(l.id);
        const unlocked = isUnlocked(gidx);
        const tags = (l.grammairePoints || [])
          .slice(0, 2)
          .map((g) => '<span class="tag">' + g + "</span>")
          .join("");
        const banner =
          '<div class="lecon-banner">' +
          '<img loading="lazy" src="' + lessonPhoto(l.id, 400, 220) + '" alt="" onerror="this.style.display=\'none\'">' +
          (unlocked ? "" : '<span class="lock-badge" title="Terminez la leçon précédente">🔒</span>') +
          "</div>";
        const body =
          '<div class="lecon-body">' +
          '<div class="lecon-row"><span class="lecon-num">' + l.numero + (done ? ' <span class="check">✓</span>' : "") + "</span>" +
          '<div class="lecon-titles"><h3>' + l.titre + '</h3><p class="lecon-de">' + l.titreDE + "</p></div></div>" +
          '<div class="lecon-tags">' + tags + "</div>" +
          '<div class="lecon-meta"><span>⏱️ ' + l.duree + " min</span><span>🗂️ " + l.vocabulaire.length + " mots</span><span>✍️ " + l.exercices.length + "</span></div>" +
          "</div>";
        let card;
        if (unlocked) {
          card = el("a", "lecon-card" + (done ? " done" : ""));
          card.href = "#/lecon/" + l.id;
        } else {
          card = el("div", "lecon-card locked");
        }
        card.innerHTML = banner + body;
        grid.appendChild(card);
      });
      sec.appendChild(grid);
      frag.appendChild(sec);
    });

    /* --- Examen final (débloqué après les 19 leçons) --- */
    const examOk = allLessonsDone();
    const ets = window.Progress.getTestScore("final");
    const examSec = el("section", "section");
    const examCard = el("div", "examen-final " + (examOk ? "unlocked" : "locked"));
    examCard.innerHTML =
      '<div class="examen-ic">' + (examOk ? "🎓" : "🔒") + "</div>" +
      "<h2>Examen final — Niveau A1</h2>" +
      (examOk
        ? "<p>Vous avez terminé les 19 leçons ! L'examen final tire <strong>20 questions de tout le niveau A1</strong>. Seuil de réussite : " +
          COURS.seuilReussite + "%." + (ets ? ' Meilleur score : <strong>' + ets.meilleur + "%</strong> " + (ets.reussi ? "🏅" : "") : "") + "</p>"
        : "<p>Terminez les <strong>" + res.total + " leçons</strong> pour débloquer l'examen final. Progression : <strong>" +
          res.faites + "/" + res.total + "</strong> leçons.</p>");
    if (examOk) {
      const eb = el("a", "btn btn-primary big", ets ? "Repasser l'examen final" : "🎓 Passer l'examen final");
      eb.href = "#/examen";
      examCard.appendChild(eb);
    }
    examSec.appendChild(examCard);
    frag.appendChild(examSec);

    /* --- Aperçu grammaire --- */
    const gram = el("section", "section");
    gram.appendChild(el("h2", "section-title", "📐 Grammaire couverte (niveau A1)"));
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
    comp.appendChild(el("h2", "section-title", "🎓 À la fin du niveau A1, vous saurez…"));
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
      if (allDone)
        window.TG.setMainButton("🎓 Passer l'examen final", () => { location.hash = "#/examen"; });
      else
        window.TG.setMainButton(
          res.faites > 0 ? "▶ Continuer la leçon " + (leconIndex(startId) + 1) : "▶ Commencer la leçon 1",
          () => { location.hash = "#/lecon/" + startId; }
        );
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
    const head = el("header", "lesson-head");
    head.style.setProperty("--mod-color", mod.couleur);
    head.innerHTML =
      '<div class="lesson-hero"><img loading="lazy" src="' + lessonPhoto(l.id, 900, 320) + '" alt="" onerror="this.style.display=\'none\'"></div>' +
      '<div class="lesson-num">Leçon ' + l.numero + "</div>" +
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
      '<a href="#voc">🗂️ Vocabulaire</a>' +
      '<a href="#gram">📐 Grammaire</a>' +
      '<a href="#dlg">💬 Dialogue</a>' +
      '<a href="#exo">✍️ Exercices</a>';
    frag.appendChild(tabs);

    /* --- Vocabulaire --- */
    const voc = el("section", "lesson-section");
    voc.id = "voc";
    const vocHead = el("div", "ls-head");
    vocHead.appendChild(el("h2", "", "🗂️ Vocabulaire"));
    const playAll = el("button", "btn btn-ghost small", "🔊 Tout écouter");
    playAll.type = "button";
    playAll.addEventListener("click", () => playSequence(l.vocabulaire.map((v) => v.de)));
    vocHead.appendChild(playAll);
    voc.appendChild(vocHead);

    const vocGrid = el("div", "voc-grid");
    l.vocabulaire.forEach((v) => {
      const c = el("div", "voc-card");
      const top2 = el("div", "voc-top");
      const deWrap = el("div", "voc-de");
      deWrap.appendChild(el("span", "", v.de));
      deWrap.appendChild(speakButton(v.de));
      top2.appendChild(deWrap);
      c.appendChild(top2);
      c.appendChild(el("div", "voc-fr", v.fr));
      if (v.ex) c.appendChild(el("div", "voc-ex", "« " + v.ex + " »"));
      vocGrid.appendChild(c);
    });
    voc.appendChild(vocGrid);
    frag.appendChild(voc);

    /* --- Grammaire --- */
    const gram = el("section", "lesson-section");
    gram.id = "gram";
    gram.appendChild(el("h2", "", "📐 Grammaire"));
    l.grammaire.forEach((g) => {
      const block = el("div", "gram-block");
      block.appendChild(el("h3", "", g.titre));
      if (g.intro) block.appendChild(el("p", "gram-intro", g.intro));
      if (g.tableau) block.appendChild(buildTable(g.tableau));
      if (g.note) block.appendChild(el("p", "gram-note", g.note));
      gram.appendChild(block);
    });
    frag.appendChild(gram);

    /* --- Dialogue --- */
    const dlg = el("section", "lesson-section");
    dlg.id = "dlg";
    const dHead = el("div", "ls-head");
    dHead.appendChild(el("h2", "", "💬 Dialogue — " + l.dialogue.titre));
    const playDlg = el("button", "btn btn-ghost small", "🔊 Jouer le dialogue");
    playDlg.type = "button";
    playDlg.addEventListener("click", () => playSequence(l.dialogue.lignes.map((x) => x.de)));
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

    /* --- Exercices --- */
    const exo = el("section", "lesson-section");
    exo.id = "exo";
    exo.appendChild(el("h2", "", "✍️ Exercices interactifs"));
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
    function refresh() {
      label.textContent = done.size + "/" + total + " exercices faits";
      fill.style.width = total ? (done.size / total) * 100 + "%" : "0%";
      if (done.size === total && total > 0) {
        const score = Math.round((success.size / total) * 100);
        window.Progress.marquerTermine(l.id, score);
        showCompletion(exo, score, idx);
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

    /* --- Navigation préc / suiv --- */
    const nav = el("div", "lesson-nav");
    if (idx > 0) {
      const prev = el("a", "btn btn-ghost", "← " + flat[idx - 1].lecon.titre);
      prev.href = "#/lecon/" + flat[idx - 1].lecon.id;
      nav.appendChild(prev);
    } else nav.appendChild(el("span", ""));
    if (idx < flat.length - 1) {
      const next = el("a", "btn btn-primary", flat[idx + 1].lecon.titre + " →");
      next.href = "#/lecon/" + flat[idx + 1].lecon.id;
      nav.appendChild(next);
    } else {
      const fin = el("a", "btn btn-primary", allLessonsDone() ? "🎓 Examen final" : "🎉 Retour à l'aperçu");
      fin.href = allLessonsDone() ? "#/examen" : "#/";
      nav.appendChild(fin);
    }
    frag.appendChild(nav);

    app.innerHTML = "";
    app.appendChild(frag);
    window.Progress.touchStreak(window.Progress.load());

    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.closingConfirmation(false);
      if (idx < flat.length - 1)
        window.TG.setMainButton(flat[idx + 1].lecon.titre + " →", () => {
          location.hash = "#/lecon/" + flat[idx + 1].lecon.id;
        });
      else window.TG.setMainButton(allLessonsDone() ? "🎓 Examen final" : "🎉 Terminer le cours", () => { location.hash = allLessonsDone() ? "#/examen" : "#/"; });
    }
    window.scrollTo(0, 0);
  }

  function showCompletion(container, score, idx) {
    if (container.querySelector(".completion")) {
      container.querySelector(".completion .comp-score").textContent = score + "%";
      return;
    }
    const c = el("div", "completion");
    const nextBtn =
      idx < flat.length - 1
        ? '<a class="btn btn-primary" href="#/lecon/' + flat[idx + 1].lecon.id + '">Leçon suivante →</a>'
        : (allLessonsDone()
            ? '<a class="btn btn-primary" href="#/examen">🎓 Passer l\'examen final</a>'
            : '<a class="btn btn-primary" href="#/">Retour à l\'aperçu</a>');
    c.innerHTML =
      '<div class="comp-emoji">🎉</div>' +
      "<h3>Leçon terminée !</h3>" +
      '<p>Score d\'exercices : <span class="comp-score">' + score + "%</span></p>" +
      nextBtn;
    container.appendChild(c);
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
      u.rate = 0.9;
      u.onend = () => setTimeout(next, 250);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
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

  /* ====================================================================
     MODE RÉVISION (répétition espacée — flashcards)
     ==================================================================== */
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
    const isFinal = key === "final";
    if (isFinal && !allLessonsDone()) { location.hash = "#/"; return; }
    const mod = isFinal ? null : COURS.modules.find((m) => m.id === key);
    if (!isFinal && !mod) return renderHome();
    const lecons = isFinal ? flat.map((f) => f.lecon) : mod.lecons;
    const testId = isFinal ? "final" : mod.id;

    const pool = [];
    lecons.forEach((l) =>
      l.exercices.forEach((ex) => {
        if (window.Exercises.GRADABLE.indexOf(ex.type) >= 0) pool.push(ex);
      })
    );
    const N = Math.min(20, pool.length);
    const chosen = window.Exercises.shuffle(pool).slice(0, N);

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML = '<a class="btn-link" href="#/">← Aperçu du programme</a><span class="lesson-top-mod">' +
      (isFinal ? "🎓 Examen final" : "📝 Test noté") + "</span>";
    frag.appendChild(top);

    const head = el("header", "test-head");
    head.style.setProperty("--mod-color", isFinal ? "#7c3aed" : mod.couleur);
    head.innerHTML =
      '<div class="lesson-num">' + (isFinal ? "Examen final · Niveau A1" : "Test · " + mod.titre) + "</div>" +
      "<h1>" + (isFinal ? "Examen final" : "Évaluation de fin de module") + "</h1>" +
      "<p>" + N + " questions tirées " + (isFinal ? "de tout le niveau A1" : "du module") +
      " · seuil de réussite : <strong>" + COURS.seuilReussite +
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
    const submit = el("button", "btn btn-primary big", isFinal ? "Terminer l'examen" : "Terminer le test");
    submit.type = "button";
    const submitRow = el("div", "test-submit");
    submitRow.appendChild(submit);
    frag.appendChild(submitRow);
    frag.appendChild(result);

    submit.addEventListener("click", () => {
      let correct = 0,
        wrong = 0,
        blank = 0;
      nodes.forEach((node) => {
        const res = node._grade(true);
        if (res.ok === true) correct++;
        else if (res.ok === false) wrong++;
        else blank++;
      });
      const score = Math.round((correct / N) * 100);
      const reussi = score >= COURS.seuilReussite;
      window.Progress.setTestScore(testId, score, reussi);

      result.className = "test-result " + (reussi ? "pass" : "fail");
      result.innerHTML =
        '<div class="score-ring ' + (reussi ? "pass" : "fail") + '"><span>' + score + "%</span></div>" +
        "<h2>" + (reussi ? (isFinal ? "🎓 Examen réussi !" : "🏅 Module réussi !") : "📚 Encore un effort") + "</h2>" +
        '<p class="score-detail">✓ ' + correct + " correct(s) · ✗ " + wrong + " erreur(s)" + (blank ? " · ⊘ " + blank + " sans réponse" : "") + "</p>" +
        "<p>" + (reussi
          ? (isFinal ? "Félicitations, vous validez l'essentiel du niveau A1 ! 🎉" : "Bravo, vous maîtrisez l'essentiel. Continuez !")
          : "Vous y êtes presque. Revoyez les questions en rouge, révisez le vocabulaire, puis recommencez.") +
        "</p>" +
        '<div class="rev-actions">' +
        '<a class="btn btn-ghost" href="#/">Retour à l\'aperçu</a>' +
        '<a class="btn btn-ghost" href="#/revision">🔁 Réviser le vocabulaire</a>' +
        '<button class="btn btn-primary" id="test-again">' + (isFinal ? "Recommencer l'examen" : "Recommencer le test") + "</button>" +
        "</div>";
      result.classList.remove("hidden");
      submit.disabled = true;
      submit.textContent = isFinal ? "Examen terminé" : "Test terminé";
      const again = document.getElementById("test-again");
      if (again) again.addEventListener("click", () => renderTest(key));
      if (window.TG) {
        window.TG.haptic(reussi ? "success" : "warning");
        window.TG.closingConfirmation(false);
        window.TG.setMainButton("Retour à l'aperçu", () => { location.hash = "#/"; });
      }
      result.scrollIntoView({ behavior: "smooth" });
    });

    app.innerHTML = "";
    app.appendChild(frag);
    if (window.TG) {
      window.TG.showBackButton(() => { location.hash = "#/"; });
      window.TG.closingConfirmation(true);
      window.TG.setMainButton(isFinal ? "Terminer l'examen" : "Terminer le test", () => submit.click());
    }
    window.scrollTo(0, 0);
  }

  /* ====================================================================
     ROUTAGE
     ==================================================================== */
  function route() {
    const hash = location.hash || "#/";
    let m;
    if ((m = hash.match(/^#\/lecon\/(.+)$/))) renderLecon(m[1]);
    else if (hash.match(/^#\/examen/)) renderTest("final");
    else if ((m = hash.match(/^#\/test\/(.+)$/))) renderTest(m[1]);
    else if (hash.match(/^#\/revision/)) renderRevision();
    else renderHome();
  }

  function boot() {
    if (window.TG) window.TG.init();
    route(); // rendu immédiat avec les données locales
    // Fusion avec la progression cloud (Telegram) puis re-rendu si besoin
    if (window.Sync) window.Sync.load(function (changed) { if (changed) route(); });
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", boot);
  // Si déjà chargé
  if (document.readyState !== "loading") boot();
})();
