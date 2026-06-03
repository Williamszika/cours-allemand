/* =====================================================================
   objectif.js - Objectifs personnalises (Phase 3.3)
   L'apprenant fixe un niveau cible + une echeance + un rythme (min/jour).
   Le module calcule l'avancee vers ce but et PROJETTE la date d'arrivee
   (a partir de la duree des lecons restantes et du rythme quotidien).
   Module par-dessus : ne modifie rien, lit/ecrit reglages via Progress,
   lit COURS, et construit le panneau (accueil) + la page de reglage.
   ===================================================================== */
window.Objectif = (function () {
  var ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
  var LABELS = { A1: "Debutant", A2: "Elementaire", B1: "Intermediaire", B2: "Intermediaire avance", C1: "Autonome", C2: "Maitrise" };

  function reg() { return (window.Progress && window.Progress.getReglages) ? window.Progress.getReglages() : {}; }
  function get() { var r = reg(); return { niveau: r.objectifNiveau || null, date: r.objectifDate || null, min: r.objectifMin || 10 }; }
  function set(o) {
    if (!window.Progress) return;
    window.Progress.setReglages({
      objectifNiveau: o.niveau || null,
      objectifDate: o.date || null,
      objectifMin: (o.min != null ? o.min : (reg().objectifMin || 10))
    });
  }

  function lessons(cours) { var a = []; (cours.modules || []).forEach(function (m) { (m.lecons || []).forEach(function (l) { a.push(l); }); }); return a; }
  function fmtDate(d) { try { return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" }); } catch (e) { return String(d); } }

  /* Calcule l'etat de l'objectif, ou null si aucun objectif n'est defini. */
  function compute(cours) {
    var g = get(); if (!g.niveau) return null;
    var ti = ORDER.indexOf(g.niveau); if (ti < 0) return null;
    var ls = lessons(cours);
    var toT = ls.filter(function (l) { return ORDER.indexOf(l.niveau || "A1") <= ti; });
    var done = toT.filter(function (l) { return window.Progress.estTermine(l.id); });
    var remaining = toT.filter(function (l) { return !window.Progress.estTermine(l.id); });
    var minutesRemaining = remaining.reduce(function (s, l) { return s + (+l.duree || 35); }, 0);
    var min = g.min || 10;
    var daysNeeded = Math.ceil(minutesRemaining / Math.max(1, min));
    var now = Date.now();
    var projected = new Date(now + daysNeeded * 864e5);
    var pct = toT.length ? Math.round(done.length / toT.length * 100) : 0;
    var res = { cible: g.niveau, cibleLabel: LABELS[g.niveau] || "", min: min, total: toT.length, done: done.length, remaining: remaining.length, minutesRemaining: minutesRemaining, daysNeeded: daysNeeded, projected: projected, pct: pct, date: g.date || null };
    if (g.date) {
      var dl = new Date(g.date);
      res.daysLeft = Math.ceil((dl.getTime() - now) / 864e5);
      res.onTrack = projected.getTime() <= dl.getTime();
      res.neededPerDay = (res.daysLeft > 0) ? Math.ceil(minutesRemaining / res.daysLeft) : minutesRemaining;
    }
    return res;
  }

  /* helpers DOM (classes existantes pour un rendu natif) */
  function tag(t) { var s = document.createElement("span"); s.className = "cours-tag"; s.textContent = t; return s; }
  function msg(html) { var d = document.createElement("div"); d.className = "zika-conseil-msg"; d.innerHTML = html; return d; }
  function link(href, txt) { var a = document.createElement("a"); a.className = "btn btn-ghost small"; a.href = href; a.style.marginTop = "10px"; a.style.display = "inline-block"; a.textContent = txt; return a; }
  function barEl(pct) { var d = document.createElement("div"); d.className = "bar"; d.style.marginTop = "8px"; d.innerHTML = '<div class="bar-fill" style="width:' + pct + '%"></div>'; return d; }

  /* Panneau pour l'accueil : invite si pas d'objectif, sinon avancee + projection. */
  function panel(cours) {
    if (!window.Progress) return null;
    var sec = document.createElement("section"); sec.className = "section";
    var box = document.createElement("div"); box.className = "zika-conseil objectif-panel"; sec.appendChild(box);
    var c = compute(cours);
    if (!c) {
      box.appendChild(tag("🎯 Ton objectif"));
      box.appendChild(msg("Fixe-toi un cap : un niveau a atteindre et une echeance. Je calcule ton rythme et ta date d'arrivee."));
      box.appendChild(link("#/objectif", "🎯 Definir mon objectif"));
      return sec;
    }
    box.appendChild(tag("🎯 Objectif : " + c.cible + " (" + c.cibleLabel + ")"));
    if (c.date) box.appendChild(msg("Echeance : <b>" + fmtDate(c.date) + "</b>" + (c.daysLeft >= 0 ? (" - " + c.daysLeft + " j restants") : " - echeance depassee")));
    box.appendChild(barEl(c.pct));
    box.appendChild(msg("<b>" + c.done + "/" + c.total + "</b> lecons jusqu'au niveau " + c.cible + " (" + c.pct + "%)"));
    var proj;
    if (c.remaining === 0) proj = "🎉 Objectif atteint ! Tu as termine tout le niveau " + c.cible + ". Vise plus haut ?";
    else if (!c.date) proj = "A " + c.min + " min/jour, il te reste ~" + c.daysNeeded + " jours d'etude (arrivee vers " + fmtDate(c.projected) + ").";
    else if (c.onTrack) proj = "✅ A " + c.min + " min/jour, tu y arrives vers <b>" + fmtDate(c.projected) + "</b> - dans les temps !";
    else proj = "⏳ A " + c.min + " min/jour tu finirais vers " + fmtDate(c.projected) + ". Pour tenir l'echeance, vise ~<b>" + c.neededPerDay + " min/jour</b>.";
    box.appendChild(msg(proj));
    box.appendChild(link("#/objectif", "Modifier l'objectif"));
    return sec;
  }

  function field(label) { var l = document.createElement("label"); l.className = "exo-group-sub"; l.style.display = "block"; l.style.marginTop = "12px"; l.style.fontWeight = "600"; l.textContent = label; return l; }
  function styleInput(e) { e.style.width = "100%"; e.style.padding = "10px"; e.style.borderRadius = "10px"; e.style.border = "1px solid var(--bord, #ccc)"; e.style.fontSize = "15px"; e.style.marginTop = "6px"; e.style.background = "var(--card, #fff)"; e.style.color = "inherit"; e.style.boxSizing = "border-box"; }

  /* Page de reglage (#/objectif) : formulaire + apercu en direct. */
  function page(cours) {
    var frag = document.createElement("div");
    var top = document.createElement("div"); top.className = "lesson-top";
    top.innerHTML = '<a class="btn-link" href="#/">&larr; Accueil</a><span class="lesson-top-mod">🎯 Mon objectif</span><span></span>';
    frag.appendChild(top);
    var head = document.createElement("header"); head.className = "lesson-head";
    head.innerHTML = '<div class="lesson-num">Objectif personnel</div><h1>Fixe ton cap</h1><p class="lesson-theme">Choisis un niveau a atteindre, une echeance et un rythme. On suit ta progression.</p>';
    frag.appendChild(head);
    var g = get();
    var sec = document.createElement("section"); sec.className = "lesson-section"; frag.appendChild(sec);

    sec.appendChild(field("Niveau cible"));
    var selN = document.createElement("select"); styleInput(selN);
    ORDER.forEach(function (n) { var o = document.createElement("option"); o.value = n; o.textContent = n + " - " + (LABELS[n] || ""); if (g.niveau === n) o.selected = true; selN.appendChild(o); });
    sec.appendChild(selN);

    sec.appendChild(field("Echeance"));
    var inD = document.createElement("input"); inD.type = "date"; styleInput(inD); if (g.date) inD.value = String(g.date).slice(0, 10); sec.appendChild(inD);

    sec.appendChild(field("Minutes par jour"));
    var inM = document.createElement("input"); inM.type = "number"; inM.min = "5"; inM.max = "240"; inM.step = "5"; inM.value = String(g.min || 10); styleInput(inM); sec.appendChild(inM);

    var save = document.createElement("button"); save.type = "button"; save.className = "btn btn-primary big"; save.style.marginTop = "16px"; save.textContent = "💾 Enregistrer mon objectif";
    save.addEventListener("click", function () { var min = parseInt(inM.value, 10); if (isNaN(min) || min < 5) min = 10; set({ niveau: selN.value, date: inD.value || null, min: min }); location.hash = "#/"; });
    sec.appendChild(save);

    if (g.niveau) {
      var clr = document.createElement("button"); clr.type = "button"; clr.className = "btn btn-ghost small"; clr.style.marginTop = "10px"; clr.style.display = "block"; clr.textContent = "Supprimer l'objectif";
      clr.addEventListener("click", function () { set({ niveau: null, date: null, min: g.min || 10 }); location.hash = "#/"; });
      sec.appendChild(clr);
    }

    var pv = panel(cours); if (pv) frag.appendChild(pv);
    return frag;
  }

  return { get: get, set: set, compute: compute, panel: panel, page: page };
})();
