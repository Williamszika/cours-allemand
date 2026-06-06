/* =====================================================================
   dashboard.js — Tableau de bord du propriétaire (#/tableau-de-bord)
   Affiche les paiements Premium reçus : date, client, produit, montant
   (en Telegram Stars), avec totaux. Les données viennent de /api/payments
   (accès réservé au propriétaire, vérifié côté serveur).
   ===================================================================== */
window.Dashboard = (function () {
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function fmtDate(ts) {
    try {
      return new Date(ts).toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" });
    } catch (e) {
      return "";
    }
  }
  function clientLabel(p) {
    const base = p.name || "ID " + p.userId;
    return p.username ? base + " (@" + p.username + ")" : base;
  }
  function productLabel(p) {
    try {
      const o = JSON.parse(p.payload);
      if (o && o.p === "premium") return "Premium A1.2";
    } catch (e) {}
    return p.payload || "—";
  }

  function render(app) {
    if (window.TG) {
      window.TG.showBackButton(function () {
        location.hash = "#/";
      });
      window.TG.hideMainButton();
      window.TG.closingConfirmation(false);
    }

    const frag = document.createDocumentFragment();
    const top = el("div", "lesson-top");
    top.innerHTML =
      '<a class="btn-link" href="#/">← Aperçu du programme</a>' +
      '<span class="lesson-top-mod">📊 Tableau de bord</span>';
    frag.appendChild(top);

    const head = el("header", "dash-head");
    head.innerHTML = "<h1>📊 Paiements Premium</h1><p>Chaque achat s'affiche ici dès sa validation.</p>";
    frag.appendChild(head);

    const wrap = el("section", "dash");
    frag.appendChild(wrap);

    app.innerHTML = "";
    app.appendChild(frag);
    window.scrollTo(0, 0);

    if (!window.Premium || !window.Premium.isConfigured()) {
      wrap.innerHTML =
        '<div class="dash-msg"><div class="comp-emoji">⚙️</div>' +
        "<h2>Backend non configuré</h2>" +
        "<p>Configurez le bot, le stockage et les variables d'environnement " +
        "(voir <code>PREMIUM.md</code>) pour activer les paiements et ce tableau de bord.</p>" +
        '<a class="btn btn-ghost" href="#/">Retour</a></div>';
      return;
    }
    if (!window.Premium.isOwner()) {
      wrap.innerHTML =
        '<div class="dash-msg"><div class="comp-emoji">🔒</div>' +
        "<h2>Accès réservé</h2>" +
        "<p>Ce tableau de bord est réservé au propriétaire du cours.</p>" +
        '<a class="btn btn-ghost" href="#/">Retour</a></div>';
      return;
    }

    wrap.innerHTML = '<p class="dash-loading">Chargement des paiements…</p>';
    fetch("/api/payments", { headers: window.Premium.authHeaders() })
      .then(function (r) {
        return r.json();
      })
      .then(function (j) {
        if (!j || !j.ok) {
          wrap.innerHTML =
            '<div class="dash-msg"><div class="comp-emoji">⚠️</div><h2>Erreur</h2><p>Impossible de charger les paiements (' +
            esc((j && j.error) || "inconnu") +
            ").</p></div>";
          return;
        }
        renderData(wrap, j);
      })
      .catch(function () {
        wrap.innerHTML =
          '<div class="dash-msg"><div class="comp-emoji">⚠️</div><h2>Erreur réseau</h2><p>Réessayez dans un instant.</p></div>';
      });
  }

  function renderData(wrap, j) {
    wrap.innerHTML = "";

    const sum = el("div", "dash-sum");
    sum.innerHTML =
      '<div class="dash-kpi"><span class="k">' + j.count + '</span><span class="l">paiement(s)</span></div>' +
      '<div class="dash-kpi"><span class="k">⭐ ' + j.totalStars + '</span><span class="l">Stars encaissées</span></div>';
    wrap.appendChild(sum);

    if (!j.payments || !j.payments.length) {
      wrap.appendChild(
        el(
          "div",
          "dash-msg",
          '<div class="comp-emoji">🫙</div><h2>Aucun paiement</h2><p>Les achats Premium apparaîtront ici dès le premier paiement.</p>'
        )
      );
      return;
    }

    const tableWrap = el("div", "table-wrap");
    const table = el("table", "dash-table");
    table.innerHTML = "<thead><tr><th>Date</th><th>Client</th><th>Produit</th><th>Montant</th></tr></thead>";
    const tbody = el("tbody");
    j.payments.forEach(function (p) {
      const tr = el("tr");
      tr.innerHTML =
        "<td>" + esc(fmtDate(p.date)) + "</td>" +
        "<td>" + esc(clientLabel(p)) + "</td>" +
        "<td>" + esc(productLabel(p)) + "</td>" +
        '<td class="amt">⭐ ' + (p.amount || 0) + "</td>";
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    tableWrap.appendChild(table);
    wrap.appendChild(tableWrap);

    const refresh = el("button", "btn btn-ghost", "🔄 Actualiser");
    refresh.type = "button";
    refresh.addEventListener("click", function () {
      render(document.getElementById("app"));
    });
    wrap.appendChild(refresh);
  }

  return { render };
})();
