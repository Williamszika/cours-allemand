/* =====================================================================
   exercises.js — Moteur d'exercices interactifs auto-corrigés
   Types auto-gradés : qcm, trou, association, conjugaison, ordre,
   ecoute, traduction.
   Types de production : production (écrite), oral (reconnaissance vocale).
   Mode test : options.testMode masque le bouton « Vérifier » et expose
   card._grade(show) pour une correction différée et globale.
   ===================================================================== */
window.Exercises = (function () {
  const GRADABLE = ["qcm", "ecoute", "trou", "association", "conjugaison", "ordre", "traduction"];

  /* ---------- Utilitaires ---------- */
  function normalize(s) {
    return String(s == null ? "" : s)
      .toLowerCase()
      .trim()
      .replace(/[.!?;,]+$/g, "")
      .replace(/ß/g, "ss")
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/\s+/g, " ");
  }
  function eq(a, b) {
    return normalize(a) === normalize(b);
  }
  function matchesAny(value, accepted) {
    return (accepted || []).some((a) => eq(value, a));
  }
  function contains(text, fragment) {
    return normalize(text).includes(normalize(fragment));
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function typeLabel(t) {
    return (
      {
        qcm: "Choix multiple",
        ecoute: "Compréhension orale",
        trou: "Texte à trous",
        association: "Association",
        conjugaison: "Conjugaison",
        ordre: "Remise en ordre",
        traduction: "Traduction",
        production: "Production écrite",
        oral: "Production orale",
        rp: "Jeu de rôle avec Zika"
      }[t] || t
    );
  }

  function applyFeedback(card, feedback, ex, res) {
    if (res.ok === null) {
      feedback.className = "exo-feedback show neutre";
      feedback.innerHTML = "👉 " + (res.detail || "Complétez d'abord l'exercice.");
      return;
    }
    feedback.className = "exo-feedback show " + (res.ok ? "juste" : "faux");
    let msg = res.ok ? "✓ Correct ! " : "✗ Pas tout à fait. ";
    if (res.detail) msg += res.detail;
    if (ex.explication) msg += '<div class="exo-explication">💡 ' + ex.explication + "</div>";
    feedback.innerHTML = msg;
    card.classList.toggle("exo-ok", res.ok);
    card.classList.toggle("exo-ko", !res.ok);
  }

  /* ---------- Mode révision (leçon déjà terminée : exercices verrouillés) ----------
     On ré-affiche l'exercice sans possibilité de le refaire, on révèle la bonne
     réponse, et on colore la carte en vert (réussi) ou rouge (à revoir). */
  function lockInputs(container) {
    container.querySelectorAll("input, textarea").forEach((n) => { n.readOnly = true; n.tabIndex = -1; });
    container.querySelectorAll("select").forEach((n) => { n.disabled = true; });
    container.querySelectorAll("button").forEach((b) => { if (!b.classList.contains("btn-audio")) { b.disabled = true; b.tabIndex = -1; } });
    container.classList.add("exo-locked");
  }
  function revealSolution(ex, body) {
    switch (ex.type) {
      case "qcm":
      case "ecoute":
        body.querySelectorAll(".qcm-opt").forEach((b, i) => { if (i === ex.correct) b.classList.add("correct"); });
        break;
      case "trou":
        body.querySelectorAll(".trou-input").forEach((inp) => {
          const idx = parseInt(inp.dataset.idx, 10);
          inp.value = (ex.accepte && ex.accepte[idx] && ex.accepte[idx][0]) || "";
          inp.classList.add("ok");
        });
        break;
      case "conjugaison":
        body.querySelectorAll(".conj-input").forEach((inp) => { inp.value = inp.dataset.rep || ""; inp.classList.add("ok"); });
        break;
      case "traduction": {
        const inp = body.querySelector(".trad-input");
        if (inp) { inp.value = (ex.accepte && ex.accepte[0]) || ""; inp.classList.add("ok"); }
        break;
      }
      case "ordre": {
        const pool = body.querySelector(".ordre-pool"); if (pool) pool.style.display = "none";
        const ans = body.querySelector(".ordre-answer");
        if (ans) { ans.classList.remove("empty"); ans.textContent = ""; ans.appendChild(el("span", "ordre-chip placed ok", ex.correct)); }
        break;
      }
    }
  }
  function buildReview(ex, body, feedback, review) {
    if (ex.type === "association") {
      const sol = el("div", "assoc-review");
      (ex.paires || []).forEach((p) => {
        const row = el("div", "assoc-review-row");
        row.appendChild(el("span", "assoc-review-l", p.gauche));
        row.appendChild(el("span", "assoc-review-arrow", "→"));
        row.appendChild(el("span", "assoc-review-r", p.droite));
        sol.appendChild(row);
      });
      body.appendChild(sol);
    } else if (GRADABLE.indexOf(ex.type) >= 0) {
      if (ex.type === "qcm" || ex.type === "ecoute") buildChoice(ex, body);
      else if (ex.type === "trou") buildTrou(ex, body);
      else if (ex.type === "conjugaison") buildConjugaison(ex, body);
      else if (ex.type === "ordre") buildOrdre(ex, body);
      else if (ex.type === "traduction") buildTraduction(ex, body);
      revealSolution(ex, body);
      lockInputs(body);
    } else if (ex.type === "production" || ex.type === "oral") {
      body.appendChild(el("p", "exo-question", ex.prompt || ex.consigne || ""));
      if (ex.modele) {
        const m = el("div", "production-modele");
        m.innerHTML = '<div class="modele-head">✅ Modèle <button type="button" class="btn-audio modele-audio">🔊 Écouter</button></div><p class="modele-text">' + ex.modele + "</p>";
        body.appendChild(m);
        const ab = m.querySelector(".modele-audio"); if (ab) ab.addEventListener("click", () => window.Speech && window.Speech.speak(ex.modele));
      }
    } else if (ex.type === "rp") {
      body.appendChild(el("p", "exo-indice", "🎭 Jeu de rôle déjà réalisé."));
    }
    feedback.className = "exo-feedback show " + (review.ok ? "juste" : "faux");
    let msg = review.ok
      ? "✓ <strong>Déjà traité — réussi.</strong>"
      : "✗ <strong>Déjà traité — à revoir.</strong> La bonne réponse est indiquée ci-dessus.";
    if (ex.explication) msg += '<div class="exo-explication">💡 ' + ex.explication + "</div>";
    feedback.innerHTML = msg;
  }

  /* ---------- Rendu d'un exercice ---------- */
  function render(ex, index, onResult, options) {
    options = options || {};
    const testMode = !!options.testMode;
    const review = options.review || null;
    const card = el("div", "exo");
    card.dataset.type = ex.type;

    const head = el("div", "exo-head");
    head.appendChild(el("span", "exo-num", (options.label || "Exercice " + (index + 1))));
    head.appendChild(el("span", "exo-type", typeLabel(ex.type)));
    if (review) head.appendChild(el("span", "exo-review-badge " + (review.ok ? "ok" : "ko"), review.ok ? "✓ Réussi" : "✗ À revoir"));
    card.appendChild(head);

    if (ex.consigne) card.appendChild(el("p", "exo-consigne", ex.consigne));

    const body = el("div", "exo-body");
    card.appendChild(body);
    const actions = el("div", "exo-actions");
    const feedback = el("div", "exo-feedback");

    // Leçon déjà terminée : on montre la correction (verrouillée), sans bouton « Vérifier ».
    if (review) {
      buildReview(ex, body, feedback, review);
      card.classList.add("exo-review", review.ok ? "exo-ok" : "exo-ko");
      card.appendChild(actions);
      card.appendChild(feedback);
      return card;
    }

    if (GRADABLE.indexOf(ex.type) >= 0) {
      let checker = null;
      switch (ex.type) {
        case "qcm":
        case "ecoute":
          checker = buildChoice(ex, body);
          break;
        case "trou":
          checker = buildTrou(ex, body);
          break;
        case "association":
          checker = buildAssociation(ex, body);
          break;
        case "conjugaison":
          checker = buildConjugaison(ex, body);
          break;
        case "ordre":
          checker = buildOrdre(ex, body);
          break;
        case "traduction":
          checker = buildTraduction(ex, body);
          break;
      }
      // Correction (différée en mode test, sinon via bouton)
      card._grade = function (show) {
        const res = checker ? checker() : { ok: null };
        if (show) applyFeedback(card, feedback, ex, res);
        return res;
      };
      if (!testMode) {
        const checkBtn = el("button", "btn btn-check", "Vérifier");
        checkBtn.type = "button";
        checkBtn.addEventListener("click", () => {
          const res = card._grade(true);
          if (res.ok !== null) {
            if (window.TG) window.TG.haptic(res.ok ? "success" : "error");
            if (onResult) onResult(res.ok);
          }
        });
        actions.appendChild(checkBtn);
      }
    } else if (ex.type === "production") {
      buildProduction(ex, body, actions, feedback, onResult);
    } else if (ex.type === "oral") {
      // l'oral est noté (reconnaissance vocale ou auto-évaluation) → card._grade
      card._grade = buildOral(ex, body, actions, feedback, onResult);
    } else if (ex.type === "rp") {
      buildRP(ex, body, actions, feedback, onResult);
    } else {
      body.appendChild(el("p", "", "Type d'exercice inconnu : " + ex.type));
    }

    card.appendChild(actions);
    card.appendChild(feedback);
    return card;
  }

  /* ---------- QCM / Écoute ---------- */
  function buildChoice(ex, body) {
    if (ex.type === "ecoute") {
      const player = el("div", "ecoute-player");
      const big = el("button", "btn-audio big", "🔊 Écouter");
      big.type = "button";
      big.addEventListener("click", () => window.Speech && window.Speech.speak(ex.audio));
      player.appendChild(big);
      player.appendChild(el("span", "ecoute-hint", "Cliquez pour écouter, puis choisissez."));
      var __rev = el("button", "btn-link ecoute-reveal", "Pas de son ? Afficher le texte"); __rev.type = "button"; __rev.addEventListener("click", function () { var __t = el("p", "ecoute-text loc-keep"); __t.style.cssText = "margin:6px 0 0;padding:8px 10px;background:rgba(127,127,127,.12);border-radius:8px;font-style:italic"; __t.textContent = ex.audio; player.appendChild(__t); __rev.style.display = "none"; }); player.appendChild(__rev);
      body.appendChild(player);
    } else if (ex.question) {
      body.appendChild(el("p", "exo-question", ex.question));
    }
    let selected = -1;
    const opts = el("div", "qcm-options");
    ex.options.forEach((opt, i) => {
      const b = el("button", "qcm-opt", opt);
      b.type = "button";
      b.addEventListener("click", () => {
        if (b.disabled) return;
        selected = i;
        opts.querySelectorAll(".qcm-opt").forEach((o) => o.classList.remove("sel"));
        b.classList.add("sel");
      });
      opts.appendChild(b);
    });
    body.appendChild(opts);

    return function () {
      if (selected < 0) return { ok: null, detail: "Choisissez une réponse." };
      const ok = selected === ex.correct;
      const btns = opts.querySelectorAll(".qcm-opt");
      btns.forEach((b, i) => {
        b.classList.remove("sel");
        if (i === ex.correct) b.classList.add("correct");
        if (i === selected && !ok) b.classList.add("wrong");
        b.disabled = true;
      });
      return { ok, detail: ok ? "" : "La bonne réponse est : « " + ex.options[ex.correct] + " »." };
    };
  }

  /* ---------- Texte à trous ---------- */
  function buildTrou(ex, body) {
    const wrap = el("p", "trou-phrase");
    const parts = ex.texte.split(/(\{\d+\})/g);
    const inputs = [];
    parts.forEach((p) => {
      const m = p.match(/^\{(\d+)\}$/);
      if (m) {
        const inp = el("input", "trou-input");
        inp.type = "text";
        inp.size = 10;
        inp.setAttribute("autocomplete", "off");
        inp.dataset.idx = parseInt(m[1], 10);
        inputs.push(inp);
        wrap.appendChild(inp);
      } else if (p) {
        wrap.appendChild(document.createTextNode(p));
      }
    });
    body.appendChild(wrap);
    if (ex.indice) body.appendChild(el("p", "exo-indice", "Indice : " + ex.indice));

    return function () {
      let allFilled = true;
      let ok = true;
      inputs.forEach((inp) => {
        const idx = parseInt(inp.dataset.idx, 10);
        const val = inp.value.trim();
        if (!val) allFilled = false;
        const good = matchesAny(val, ex.accepte[idx] || []);
        inp.classList.toggle("ok", good);
        inp.classList.toggle("ko", !good && !!val);
        if (!good) ok = false;
      });
      if (!allFilled) return { ok: null, detail: "Remplissez tous les champs." };
      return { ok, detail: ok ? "" : "Solution : " + ex.accepte.map((a) => a[0]).join(" / ") };
    };
  }

  /* ---------- Association ---------- */
  function buildAssociation(ex, body) {
    const grid = el("div", "assoc-grid");
    const colG = el("div", "assoc-col");
    const colD = el("div", "assoc-col");
    const droites = shuffle(ex.paires.map((p) => p.droite));
    const palette = ["c1", "c2", "c3", "c4", "c5", "c6"];
    let selectedLeft = null;
    const matches = {};

    ex.paires.forEach((p, i) => {
      const tile = el("button", "assoc-tile left", p.gauche);
      tile.type = "button";
      tile.dataset.i = i;
      tile.addEventListener("click", () => {
        if (tile.disabled) return;
        colG.querySelectorAll(".assoc-tile").forEach((t) => t.classList.remove("active"));
        selectedLeft = i;
        tile.classList.add("active");
      });
      colG.appendChild(tile);
    });
    droites.forEach((val) => {
      const tile = el("button", "assoc-tile right", val);
      tile.type = "button";
      tile.addEventListener("click", () => {
        if (tile.disabled || selectedLeft === null) return;
        const color = palette[selectedLeft % palette.length];
        matches[selectedLeft] = val;
        const leftTile = colG.querySelector('.assoc-tile[data-i="' + selectedLeft + '"]');
        leftTile.classList.add("matched", color);
        leftTile.classList.remove("active");
        leftTile.disabled = true;
        tile.classList.add("matched", color);
        tile.disabled = true;
        selectedLeft = null;
      });
      colD.appendChild(tile);
    });
    grid.appendChild(colG);
    grid.appendChild(colD);
    body.appendChild(grid);
    body.appendChild(el("p", "exo-indice", "Cliquez sur un mot à gauche, puis sur sa correspondance à droite."));

    return function () {
      if (Object.keys(matches).length < ex.paires.length)
        return { ok: null, detail: "Associez toutes les paires." };
      let ok = true;
      const details = [];
      ex.paires.forEach((p, i) => {
        if (!eq(matches[i], p.droite)) {
          ok = false;
          details.push(p.gauche + " → " + p.droite);
        }
      });
      return { ok, detail: ok ? "" : "Corrections : " + details.join(" ; ") };
    };
  }

  /* ---------- Conjugaison ---------- */
  function buildConjugaison(ex, body) {
    body.appendChild(el("p", "exo-question", "Verbe : <strong>" + ex.verbe + "</strong>"));
    const list = el("div", "conj-list");
    const inputs = [];
    ex.items.forEach((it) => {
      const row = el("div", "conj-row");
      row.appendChild(el("span", "conj-pron", it.pronom));
      const inp = el("input", "conj-input");
      inp.type = "text";
      inp.setAttribute("autocomplete", "off");
      inp.dataset.rep = it.reponse;
      inputs.push(inp);
      row.appendChild(inp);
      list.appendChild(row);
    });
    body.appendChild(list);

    return function () {
      let allFilled = true;
      let ok = true;
      inputs.forEach((inp) => {
        const val = inp.value.trim();
        if (!val) allFilled = false;
        const good = eq(val, inp.dataset.rep);
        inp.classList.toggle("ok", good);
        inp.classList.toggle("ko", !good && !!val);
        if (!good) ok = false;
      });
      if (!allFilled) return { ok: null, detail: "Complétez toute la conjugaison." };
      return { ok, detail: ok ? "" : "Solution : " + ex.items.map((i) => i.pronom + " " + i.reponse).join(", ") };
    };
  }

  /* ---------- Remise en ordre ---------- */
  function buildOrdre(ex, body) {
    const answer = el("div", "ordre-answer");
    answer.dataset.placeholder = "Cliquez les mots dans l'ordre…";
    const pool = el("div", "ordre-pool");
    const chosen = [];
    function refreshPlaceholder() {
      answer.classList.toggle("empty", chosen.length === 0);
    }
    shuffle(ex.mots).forEach((mot) => {
      const chip = el("button", "ordre-chip", mot);
      chip.type = "button";
      chip.addEventListener("click", () => {
        if (chip.classList.contains("used")) return;
        chip.classList.add("used");
        const placed = el("button", "ordre-chip placed", mot);
        placed.type = "button";
        placed.addEventListener("click", () => {
          placed.remove();
          chip.classList.remove("used");
          const i = chosen.indexOf(placed);
          if (i >= 0) chosen.splice(i, 1);
          refreshPlaceholder();
        });
        chosen.push(placed);
        answer.appendChild(placed);
        refreshPlaceholder();
      });
      pool.appendChild(chip);
    });
    body.appendChild(answer);
    body.appendChild(pool);
    if (ex.traduction) body.appendChild(el("p", "exo-indice", "À traduire : « " + ex.traduction + " »"));
    refreshPlaceholder();

    return function () {
      if (chosen.length === 0) return { ok: null, detail: "Composez la phrase." };
      const phrase = chosen.map((c) => c.textContent).join(" ");
      const ok = eq(phrase, ex.correct);
      return { ok, detail: ok ? "" : "Phrase correcte : « " + ex.correct + " »" };
    };
  }

  /* ---------- Traduction ---------- */
  function buildTraduction(ex, body) {
    const src = el("div", "trad-source");
    src.appendChild(el("span", "trad-flag", "🇫🇷"));
    src.appendChild(el("span", "", ex.source));
    body.appendChild(src);
    const inp = el("input", "trad-input");
    inp.type = "text";
    inp.placeholder = "Votre traduction en allemand…";
    inp.setAttribute("autocomplete", "off");
    body.appendChild(inp);
    if (ex.aide) body.appendChild(el("p", "exo-indice", "Aide : " + ex.aide));

    return function () {
      const val = inp.value.trim();
      if (!val) return { ok: null, detail: "Écrivez votre traduction." };
      const ok = matchesAny(val, ex.accepte);
      inp.classList.toggle("ok", ok);
      inp.classList.toggle("ko", !ok);
      if (ok && window.Speech) window.Speech.speak(ex.accepte[0]);
      return { ok, detail: ok ? "Bravo !" : "Réponse attendue : « " + ex.accepte[0] + " »" };
    };
  }

  /* ---------- Production écrite ---------- */
  function tgInitDataEx() { try { var w = window.Telegram && window.Telegram.WebApp; return (w && w.initData) ? w.initData : null; } catch (e) { return null; } }
  function fmtCorr(t) { return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>"); }
  function aiCorrige(consigne, texte, box) {
    var niveau = (window.Progress && window.Progress.getNiveau && window.Progress.getNiveau()) || "A1";
    var langue = (window.I18N && window.I18N.lang && (window.I18N.uiLang ? window.I18N.uiLang() : window.I18N.lang())) || "fr";
    box.className = "exo-feedback show neutre"; box.innerHTML = "✨ Correction en cours…";
    var msg = "Consigne: « " + consigne + " ». Production de l'apprenant: « " + texte + " ». Corrige selon les consignes.";
    fetch("/api/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: [{ role: "user", content: msg }], niveau: niveau, niveauParle: niveau, langue: langue, mode: "correction", initData: tgInitDataEx() || undefined }) })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (!j || !j.reply) { box.className = "exo-feedback show faux"; box.innerHTML = "⚠️ Correction indisponible, réessaie dans un instant."; return; } box.className = "exo-feedback show juste"; box.innerHTML = '<div class="ia-corr">' + fmtCorr(j.reply) + '</div>'; })
      .catch(function () { box.className = "exo-feedback show faux"; box.innerHTML = "⚠️ Connexion impossible."; });
  }

  function buildProduction(ex, body, actions, feedback, onResult) {
    body.appendChild(el("p", "exo-question", ex.prompt));
    const ta = el("textarea", "production-input");
    ta.rows = 4;
    ta.placeholder = "Rédigez votre réponse en allemand…";
    body.appendChild(ta);

    const meta = el("div", "production-meta");
    const counter = el("span", "wordcount", "0 mot");
    meta.appendChild(counter);
    if (ex.minMots) meta.appendChild(el("span", "wordmin", "objectif : ≥ " + ex.minMots + " mots"));
    body.appendChild(meta);

    ta.addEventListener("input", () => {
      const w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      counter.textContent = w + (w > 1 ? " mots" : " mot");
      counter.classList.toggle("ok", !ex.minMots || w >= ex.minMots);
    });

    const modele = el("div", "production-modele hidden");
    modele.innerHTML =
      '<div class="modele-head">✅ Modèle de correction <button type="button" class="btn-audio modele-audio">🔊 Écouter</button></div>' +
      '<p class="modele-text">' + ex.modele + "</p>";
    body.appendChild(modele);
    modele.querySelector(".modele-audio").addEventListener("click", () => window.Speech && window.Speech.speak(ex.modele));

    let checklistBox = null;
    if (ex.checklist && ex.checklist.length) {
      checklistBox = el("div", "production-checklist hidden");
      checklistBox.appendChild(el("p", "checklist-title", "Auto-évaluation — cochez ce que vous avez réussi :"));
      ex.checklist.forEach((c) => {
        const lab = el("label", "checklist-item");
        const cb = el("input");
        cb.type = "checkbox";
        lab.appendChild(cb);
        lab.appendChild(document.createTextNode(" " + c));
        checklistBox.appendChild(lab);
      });
      body.appendChild(checklistBox);
    }

    const verifier = el("button", "btn btn-check", "Vérifier");
    verifier.type = "button";
    const ecouter = el("button", "btn btn-ghost small", "🔊 Écouter le modèle");
    ecouter.type = "button";
    ecouter.addEventListener("click", () => window.Speech && window.Speech.speak(ex.modele));
    const voir = el("button", "btn-link", "Voir le modèle");
    voir.type = "button";
    voir.addEventListener("click", () => modele.classList.toggle("hidden"));

    verifier.addEventListener("click", () => {
      const text = ta.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      if (words === 0) {
        feedback.className = "exo-feedback show neutre";
        feedback.innerHTML = "👉 Écrivez d'abord votre réponse.";
        return;
      }
      const attendus = ex.attendus || [];
      const found = attendus.filter((a) => contains(text, a));
      const enoughWords = !ex.minMots || words >= ex.minMots;
      const enoughKeys = attendus.length === 0 || found.length >= Math.max(1, Math.ceil(attendus.length * 0.6));
      const ok = enoughWords && enoughKeys;

      modele.classList.remove("hidden");
      if (checklistBox) checklistBox.classList.remove("hidden");

      feedback.className = "exo-feedback show " + (ok ? "juste" : "faux");
      let msg = ok
        ? "✓ Bien joué ! Votre réponse contient les éléments attendus."
        : "✗ Presque ! Vérifiez les points ci-dessous.";
      msg += '<div class="prod-report">';
      msg += "<div>📝 Longueur : " + words + " mots" + (ex.minMots ? " (objectif ≥ " + ex.minMots + ")" : "") + (enoughWords ? " ✓" : " ✗") + "</div>";
      if (attendus.length) {
        msg +=
          "<div>🔑 Éléments clés utilisés : " +
          found.length + "/" + attendus.length +
          " — " +
          attendus.map((a) => (contains(text, a) ? "<span class='kw ok'>" + a + "</span>" : "<span class='kw ko'>" + a + "</span>")).join(" ") +
          "</div>";
      }
      msg += "</div>";
      msg += "<div class='exo-explication'>👉 Comparez avec le modèle ci-dessus et auto-évaluez-vous.</div>";
      feedback.innerHTML = msg;
      if (window.TG) window.TG.haptic(ok ? "success" : "warning");
      if (onResult) onResult(ok);
    });

    const iaBox = el("div", "ia-box"); body.appendChild(iaBox);
    const iaBtn = el("button", "btn btn-ghost small", "✨ Correction IA"); iaBtn.type = "button";
    iaBtn.addEventListener("click", function () { const t = ta.value.trim(); if (!t) { iaBox.className = "exo-feedback show neutre"; iaBox.innerHTML = "👉 Écris d'abord ta réponse."; return; } aiCorrige(ex.prompt || ex.consigne || "", t, iaBox); });
    actions.appendChild(iaBtn);
    actions.appendChild(verifier);
    actions.appendChild(ecouter);
    actions.appendChild(voir);
  }

  /* ---------- Production orale ---------- */
  function buildOral(ex, body, actions, feedback, onResult) {
    let lastOk = null; // résultat noté (reconnaissance vocale ou auto-évaluation)
    body.appendChild(el("p", "exo-question", ex.prompt));
    const transcript = el("div", "oral-transcript hidden");
    body.appendChild(transcript);

    const modele = el("div", "production-modele hidden");
    modele.innerHTML =
      '<div class="modele-head">✅ Modèle <button type="button" class="btn-audio modele-audio">🔊 Écouter</button></div>' +
      '<p class="modele-text">' + ex.modele + "</p>";
    body.appendChild(modele);
    modele.querySelector(".modele-audio").addEventListener("click", () => window.Speech && window.Speech.speak(ex.modele));

    const status = el("div", "oral-status");
    const attendus = ex.attendus || [];
    // On laisse la personne FINIR de parler, on transcrit sa voix (serveur STT),
    // puis on compare aux MOTS CLÉS attendus : assez de mots clés présents → réussi.
    function analyse(text) {
      transcript.classList.remove("hidden");
      transcript.innerHTML = '<span class="oral-label">Vous avez dit :</span> ';
      transcript.appendChild(document.createTextNode("« " + text + " »"));
      const found = attendus.filter((a) => contains(text, a));
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      // Durci : TOUS les mots clés attendus doivent être présents (sinon on refait).
      const ok = attendus.length === 0 ? words >= 5 : found.length >= attendus.length;
      lastOk = ok;
      modele.classList.remove("hidden");
      feedback.className = "exo-feedback show " + (ok ? "juste" : "faux");
      const manquants = attendus.filter((a) => !contains(text, a));
      feedback.innerHTML =
        (ok ? "✓ Parfait ! Tous les mots clés y sont. " : "✗ Il faut TOUS les mots clés. ") +
        (attendus.length ? "Repérés : " + found.length + "/" + attendus.length + (manquants.length ? " · manquants : " + manquants.join(", ") : "") + "." : "") +
        "<div class='exo-explication'>👉 " + (ok ? "Bravo, comparez avec le modèle." : "Écoutez le modèle et redites la phrase complète.") + "</div>";
      if (onResult) onResult(ok);
    }

    const recOK = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    if (recOK) {
      const mic = el("button", "btn btn-mic", "🎤 Parler");
      mic.type = "button";
      let mr = null, chunks = [], recording = false;
      mic.addEventListener("click", () => {
        if (recording) { if (mr) mr.stop(); return; }
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
          chunks = [];
          try { mr = new MediaRecorder(stream); }
          catch (e) { status.textContent = "⚠️ Micro non supporté — auto-évaluez-vous."; stream.getTracks().forEach((t) => t.stop()); return; }
          mr.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
          mr.onstop = () => {
            recording = false; mic.classList.remove("listening"); mic.textContent = "🎤 Parler";
            stream.getTracks().forEach((t) => t.stop());
            const blob = new Blob(chunks, { type: (chunks[0] && chunks[0].type) || "audio/webm" });
            status.textContent = "⏳ J'analyse votre production…";
            fetch("/api/stt", { method: "POST", headers: { "content-type": blob.type || "audio/webm" }, body: blob })
              .then((r) => (r.ok ? r.json() : null))
              .then((j) => {
                status.textContent = "";
                if (j && j.text && j.text.trim()) analyse(j.text);
                else { feedback.className = "exo-feedback show neutre"; feedback.innerHTML = "🎤 Je n'ai rien compris — réessayez plus près du micro, ou auto-évaluez-vous."; }
              })
              .catch(() => { status.textContent = ""; feedback.className = "exo-feedback show neutre"; feedback.innerHTML = "🎤 Micro/serveur indisponible — auto-évaluez-vous ci-dessous."; });
          };
          mr.start(); recording = true; mic.classList.add("listening"); mic.textContent = "⏹️ J'ai fini";
          status.textContent = "🎙️ Parlez… puis appuyez sur « J'ai fini ».";
        }).catch(() => { status.textContent = "⚠️ Micro indisponible — auto-évaluez-vous ci-dessous."; });
      });
      actions.appendChild(mic);
    } else {
      body.appendChild(el("p", "exo-indice", "ℹ️ Le micro n'est pas disponible sur ce navigateur. Écoutez le modèle, répétez à voix haute, puis auto-évaluez-vous."));
    }
    body.appendChild(status);

    const ecouter = el("button", "btn btn-ghost small", "🔊 Écouter le modèle");
    ecouter.type = "button";
    ecouter.addEventListener("click", () => window.Speech && window.Speech.speak(ex.modele));
    actions.appendChild(ecouter);

    const voir = el("button", "btn-link", "Voir le modèle");
    voir.type = "button";
    voir.addEventListener("click", () => modele.classList.toggle("hidden"));
    actions.appendChild(voir);

    // Auto-évaluation (toujours disponible)
    const selfWrap = el("div", "oral-self");
    selfWrap.appendChild(el("span", "oral-self-label", "Auto-évaluation :"));
    const okBtn = el("button", "btn-self ok", "✅ Su le dire");
    okBtn.type = "button";
    const koBtn = el("button", "btn-self ko", "🔁 À retravailler");
    koBtn.type = "button";
    okBtn.addEventListener("click", () => {
      lastOk = true;
      modele.classList.remove("hidden");
      feedback.className = "exo-feedback show juste";
      feedback.innerHTML = "✓ Super ! Continuez à pratiquer à voix haute.";
      if (onResult) onResult(true);
    });
    koBtn.addEventListener("click", () => {
      lastOk = false;
      modele.classList.remove("hidden");
      feedback.className = "exo-feedback show neutre";
      feedback.innerHTML = "🔁 Pas de souci — écoutez le modèle et répétez plusieurs fois.";
      if (onResult) onResult(false);
    });
    selfWrap.appendChild(okBtn);
    selfWrap.appendChild(koBtn);
    actions.appendChild(selfWrap);

    // Correction notée : reconnaissance vocale (ou auto-évaluation) → ok/null
    return function () {
      return { ok: lastOk, detail: lastOk === null ? "🎤 Parlez (ou auto-évaluez-vous) pour être noté." : "" };
    };
  }

  /* ---------- Jeu de rôle (dialogue tuteur ↔ utilisateur) ----------
     Zika joue une scène, pose une réplique (audio), l'utilisateur choisit
     sa réponse. Bonne réponse → Zika félicite et continue. Erreur → Zika
     explique gentiment et encourage à réessayer. La leçon n'est validée
     que lorsque toute la scène est réussie. */
  function buildRP(ex, body, actions, feedback, onResult) {
    const ctx = (window.I18N && ex._niveau) ? window.I18N.explication(ex._niveau) : { lang: "fr", de: false };
    function loc(node, txt) {
      if (!txt) return;
      if (ctx && ctx.de) { node.innerHTML = window.mdLite ? window.mdLite(txt) : txt; } // immersion B1+ : déjà en allemand
      else if (window.localizeInto) window.localizeInto(node, txt, ctx);               // A1/A2 : français → langue de l'apprenant
      else node.innerHTML = txt;
    }
    if (ex.scene) { const sc = el("p", "rp-scene"); loc(sc, "🎬 " + ex.scene); body.appendChild(sc); }
    if (ex.intro) { const ip = el("p", "rp-intro"); loc(ip, ex.intro); body.appendChild(ip); }
    const conv = el("div", "rp-conv");
    body.appendChild(conv);
    const tours = ex.tours || [];
    let i = 0, done = false;

    function zikaSay(de, fr, autoplay) {
      const row = el("div", "rp-row rp-zika");
      row.appendChild(el("div", "rp-av", "🧑‍🏫"));
      const bub = el("div", "rp-bubble");
      const line = el("div", "rp-de");
      line.appendChild(el("span", "", de));
      const sp = el("button", "btn-audio small", "🔊"); sp.type = "button";
      sp.addEventListener("click", () => window.Speech && window.Speech.speak(de));
      line.appendChild(sp); bub.appendChild(line);
      if (fr) { const f = el("div", "rp-fr"); loc(f, fr); bub.appendChild(f); }
      row.appendChild(bub); conv.appendChild(row);
      if (autoplay) { try { window.Speech && window.Speech.speak(de); } catch (e) {} }
      row.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    function userSay(de) {
      const row = el("div", "rp-row rp-user");
      const bub = el("div", "rp-bubble"); bub.textContent = de;
      row.appendChild(bub); conv.appendChild(row);
    }
    function zikaReact(txt, good) {
      const row = el("div", "rp-row rp-zika");
      row.appendChild(el("div", "rp-av", good ? "👏" : "💡"));
      const bub = el("div", "rp-bubble " + (good ? "rp-good" : "rp-bad"));
      loc(bub, txt);
      row.appendChild(bub); conv.appendChild(row);
      row.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    // Phrases intégrées du moteur, dans la bonne langue (allemand en immersion B1+)
    const RETRY = (ctx && ctx.de) ? "Versuch es noch einmal! 💪" : "Réessaie, tu vas y arriver ! 💪";
    const NOTQUITE = (ctx && ctx.de) ? "Nicht ganz." : "Pas tout à fait.";
    const GREAT = (ctx && ctx.de) ? "Sehr gut!" : "Très bien !";
    const FIN = (ctx && ctx.de) ? "Sehr gut, du hast die Szene gemeistert!" : "Bravo, tu as réussi toute la scène !";
    function showTurn() {
      const t = tours[i];
      if (!t) return;
      zikaSay(t.de, t.fr, true);
      const opts = el("div", "rp-options");
      shuffle(t.options || []).forEach((o) => {
        const btn = el("button", "rp-opt", o.de);
        btn.type = "button";
        btn.addEventListener("click", () => {
          if (done) return;
          if (o.ok) {
            userSay(o.de);
            opts.remove();
            if (window.TG) window.TG.haptic("success");
            zikaReact("✓ " + (t.bravo || GREAT), true);
            i++;
            if (i >= tours.length) {
              done = true;
              zikaReact("🎉 " + (ex.fin || FIN), true);
              if (onResult) onResult(true);
            } else {
              setTimeout(showTurn, 500);
            }
          } else {
            userSay(o.de);
            if (window.TG) window.TG.haptic("error");
            zikaReact("✗ " + (o.hint || NOTQUITE) + " " + RETRY, false);
          }
        });
        opts.appendChild(btn);
      });
      conv.appendChild(opts);
    }
    showTurn();
  }

  return { render, normalize, eq, matchesAny, contains, shuffle, GRADABLE };
})();
