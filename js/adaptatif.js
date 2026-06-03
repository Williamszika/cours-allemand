/* =====================================================================
   adaptatif.js - Parcours adaptatif (Phase 3.2)
   Moteur de recommandation : calcule la maitrise par competence a partir
   de l'historique d'exercices (Progress) et propose « ce qui fera le plus
   progresser aujourd'hui » : reviser, renforcer une competence faible,
   continuer. Module par-dessus : ne modifie rien, lit Progress / COMPETENCES
   / Revision et construit un panneau DOM injecte dans l'accueil.
   ===================================================================== */
window.Adaptatif = (function () {
  var MIN_TENTATIVES = 3;   // nb mini de reponses pour juger une competence
  var SEUIL_FAIBLE = 0.67;  // < 67% de reussite => a renforcer
  var SEUIL_FORT = 0.85;    // >= 85% => point fort
  var IGNORE = { lexique: 1, gram_divers: 1, nombres_heure: 1 }; // trop generiques

  function byId(cours) {
    var map = {};
    (cours.modules || []).forEach(function (m) {
      (m.lecons || []).forEach(function (l) { map[l.id] = l; });
    });
    return map;
  }

  function compsOf(l) {
    if (!l) return [];
    if (l.competences && l.competences.length) return l.competences;
    return (window.COMPETENCES && window.COMPETENCES.of) ? window.COMPETENCES.of(l.id) : [];
  }

  /* Maitrise par competence : { code: { a, ok, rate } } a partir des reponses. */
  function competenceScores(cours) {
    var out = {};
    if (!window.Progress || !window.COMPETENCES) return out;
    var data = window.Progress.load();
    var map = byId(cours);
    Object.keys(data.lecons || {}).forEach(function (lid) {
      var l = map[lid];
      if (!l || !l.exercices) return;
      var rep = (data.lecons[lid].exercices) || {};
      Object.keys(rep).forEach(function (i) {
        var ex = l.exercices[i];
        if (!ex) return;
        var codes = window.COMPETENCES.forExercice ? window.COMPETENCES.forExercice(ex, lid) : compsOf(l);
        (codes || []).forEach(function (code) {
          if (!out[code]) out[code] = { a: 0, ok: 0 };
          out[code].a++;
          if (rep[i]) out[code].ok++;
        });
      });
    });
    Object.keys(out).forEach(function (c) { out[c].rate = out[c].a ? out[c].ok / out[c].a : 0; });
    return out;
  }

  /* Premiere lecon TERMINEE qui enseigne `code` (sure d'etre accessible). */
  function leconPourCompetence(cours, code) {
    var found = null;
    (cours.modules || []).some(function (m) {
      return (m.lecons || []).some(function (l) {
        if (!window.Progress.estTermine(l.id)) return false;
        if (compsOf(l).indexOf(code) >= 0) { found = l; return true; }
        return false;
      });
    });
    return found;
  }

  /* Competences faibles, triees du plus faible au moins faible, avec une
     lecon de remediation. Renvoie au plus `n` entrees exploitables. */
  function faiblesses(cours, n) {
    var sc = competenceScores(cours);
    var arr = Object.keys(sc)
      .filter(function (c) { return !IGNORE[c] && sc[c].a >= MIN_TENTATIVES && sc[c].rate < SEUIL_FAIBLE; })
      .sort(function (a, b) { return sc[a].rate - sc[b].rate || sc[b].a - sc[a].a; });
    var res = [];
    for (var i = 0; i < arr.length && res.length < (n || 2); i++) {
      var code = arr[i];
      var l = leconPourCompetence(cours, code);
      if (!l) continue;
      res.push({
        code: code,
        label: window.COMPETENCES.label ? window.COMPETENCES.label(code) : code,
        niveau: window.COMPETENCES.niveau ? window.COMPETENCES.niveau(code) : "",
        rate: sc[code].rate, a: sc[code].a, ok: sc[code].ok,
        leconId: l.id, leconNumero: l.numero, leconTitre: l.titre
      });
    }
    return res;
  }

  /* Points forts (competences bien maitrisees) - pour encourager. */
  function pointsForts(cours, n) {
    var sc = competenceScores(cours);
    return Object.keys(sc)
      .filter(function (c) { return !IGNORE[c] && sc[c].a >= MIN_TENTATIVES && sc[c].rate >= SEUIL_FORT; })
      .sort(function (a, b) { return sc[b].rate - sc[a].rate || sc[b].a - sc[a].a; })
      .slice(0, n || 3)
      .map(function (c) { return { code: c, label: window.COMPETENCES.label ? window.COMPETENCES.label(c) : c, rate: sc[c].rate }; });
  }

  function pct(r) { return Math.round(r * 100); }

  /* Construit le panneau « Ton plan du jour ». ctx = { nextHref, due }.
     Renvoie un HTMLElement, ou null si rien d'utile a montrer. */
  function panel(cours, ctx) {
    ctx = ctx || {};
    if (!window.Progress || !window.COMPETENCES) return null;
    var faibles = faiblesses(cours, 3);
    var due = ctx.due || 0;
    // Rien a recommander de specifique (nouvel apprenant) : on laisse l'accueil gerer.
    if (!faibles.length && !due) return null;

    var sec = document.createElement("section");
    sec.className = "section";
    var box = document.createElement("div");
    box.className = "zika-conseil adaptatif-plan";
    sec.appendChild(box);

    var tag = document.createElement("span");
    tag.className = "cours-tag";
    tag.textContent = "🧭 Ton plan du jour";
    box.appendChild(tag);

    var intro = document.createElement("div");
    intro.className = "zika-conseil-msg adaptatif-intro";
    intro.textContent = "Voici ce qui te fera le plus progresser maintenant, dans l'ordre.";
    box.appendChild(intro);

    function reco(href, txt) {
      var a = document.createElement("a");
      a.className = "btn btn-ghost small adaptatif-reco";
      a.href = href;
      a.style.display = "block";
      a.style.marginTop = "8px";
      a.style.textAlign = "left";
      a.innerHTML = txt;
      box.appendChild(a);
    }

    // 1) Reviser (memorisation d'abord)
    if (due > 0) {
      reco("#/revision", "🔁 Réviser <b>" + due + "</b> carte" + (due > 1 ? "s" : "") + " - la mémorisation d'abord");
    }
    // 2) Renforcer les competences faibles - regroupees par lecon (une seule
    //    ligne d'action par lecon, meme si plusieurs competences y sont faibles).
    var groups = [], seen = {};
    faibles.forEach(function (f) {
      if (seen[f.leconId] != null) {
        var g = groups[seen[f.leconId]];
        g.labels.push(f.label);
        if (f.rate < g.rate) g.rate = f.rate;
      } else {
        seen[f.leconId] = groups.length;
        groups.push({ leconId: f.leconId, numero: f.leconNumero, labels: [f.label], rate: f.rate });
      }
    });
    groups.slice(0, 2).forEach(function (g) {
      var noms = g.labels.slice(0, 2).map(escapeHtml).join(", ");
      if (g.labels.length > 2) noms += " +" + (g.labels.length - 2);
      reco("#/lecon/" + g.leconId,
        "🎯 Renforce <b>" + noms + "</b> (" + pct(g.rate) + "% de réussite) - leçon " + g.numero);
    });
    // 3) Continuer le parcours (fourni par l'app, qui gere les verrous)
    if (ctx.nextHref && ctx.nextHref !== "#/") {
      reco(ctx.nextHref, "▶️ Continuer le parcours");
    }

    // Points forts (encouragement)
    var forts = pointsForts(cours, 3);
    if (forts.length) {
      var pf = document.createElement("p");
      pf.className = "exo-group-sub adaptatif-forts";
      pf.style.marginTop = "10px";
      pf.innerHTML = "💪 Tes points forts : " + forts.map(function (x) { return escapeHtml(x.label); }).join(", ") + ".";
      box.appendChild(pf);
    }

    return sec;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  return {
    competenceScores: competenceScores,
    faiblesses: faiblesses,
    pointsForts: pointsForts,
    panel: panel
  };
})();
