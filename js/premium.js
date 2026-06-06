/* =====================================================================
   premium.js — Accès Premium (Telegram Stars) côté client
   - Interroge /api/premium-status pour connaître l'état (configuré,
     premium, propriétaire, prix).
   - buy() crée une facture (/api/create-invoice) et l'ouvre via openInvoice.
   - Fournit le rendu de l'offre (accueil) et du mur de paiement (leçon).

   SÛRETÉ : si le backend n'est pas configuré (ou hors Telegram / hors-ligne),
   isConfigured() reste false ⇒ rien n'est verrouillé et aucune UI Premium
   n'apparaît : le cours fonctionne exactement comme avant.
   ===================================================================== */
window.Premium = (function () {
  const API = "/api";
  let state = {
    ready: false,
    configured: false,
    premium: false,
    isOwner: false,
    price: 0,
    currency: "XTR",
    title: "Accès Premium"
  };
  let premiumIds = null;

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
  function initData() {
    try {
      return (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initData) || "";
    } catch (e) {
      return "";
    }
  }
  function authHeaders() {
    const h = { "Content-Type": "application/json" };
    const d = initData();
    if (d) h["X-Telegram-Init-Data"] = d;
    return h;
  }
  function rerender() {
    // Découplé d'app.js : app.js réagit à cet évènement en re-routant.
    try {
      window.dispatchEvent(new Event("premium:changed"));
    } catch (e) {}
  }

  /* Leçons Premium = tous les modules après le premier (A1.1 gratuit, A1.2+ premium). */
  function premiumLessonIds() {
    if (premiumIds) return premiumIds;
    premiumIds = new Set();
    const mods = (window.COURS && window.COURS.modules) || [];
    mods.slice(1).forEach((m) => (m.lecons || []).forEach((l) => premiumIds.add(l.id)));
    return premiumIds;
  }

  function init(cb) {
    cb = cb || function () {};
    fetch(API + "/premium-status", { headers: authHeaders() })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && j.ok) state = Object.assign(state, j, { ready: true });
        else {
          state.ready = true;
          state.configured = false;
        }
      })
      .catch(() => {
        state.ready = true;
        state.configured = false;
      })
      .then(() => cb(state));
  }

  function isConfigured() {
    return !!state.configured;
  }
  function isUnlocked() {
    return !!state.premium;
  }
  function isOwner() {
    return !!state.isOwner;
  }
  function isLessonLocked(id) {
    return isConfigured() && !isUnlocked() && premiumLessonIds().has(id);
  }

  /* Lance l'achat : facture Stars puis ouverture native. cb(ok, info). */
  function buy(cb) {
    cb = cb || function () {};
    const tg = window.TG && window.TG.tg;
    if (!isConfigured() || !tg || !tg.openInvoice) {
      cb(false, "indisponible");
      return;
    }
    fetch(API + "/create-invoice", {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({})
    })
      .then((r) => r.json())
      .then((j) => {
        if (!j.ok || !j.link) {
          cb(false, j.error || "erreur");
          return;
        }
        tg.openInvoice(j.link, function (status) {
          if (status === "paid") {
            // Le webhook crédite l'accès : on rafraîchit l'état après un court délai.
            setTimeout(function () {
              init(function () {
                rerender();
                cb(isUnlocked(), "paid");
              });
            }, 1200);
          } else {
            cb(false, status);
          }
        });
      })
      .catch(() => cb(false, "réseau"));
  }

  function buyButton(label) {
    const b = el("button", "btn btn-primary big", label);
    b.type = "button";
    b.addEventListener("click", function () {
      b.disabled = true;
      b.textContent = "Ouverture du paiement…";
      buy(function (ok, info) {
        if (ok) {
          if (window.TG) window.TG.haptic("success");
          rerender();
        } else {
          b.disabled = false;
          b.textContent = label;
          if (info && info !== "cancelled" && window.TG) window.TG.haptic("error");
        }
      });
    });
    return b;
  }

  /* Carte d'offre sur l'accueil (ou null si non pertinent). */
  function renderHomeCard() {
    if (!isConfigured()) return null;
    const card = el("section", "section premium-card");

    if (isOwner()) {
      card.classList.add("owner");
      card.innerHTML =
        '<div class="premium-ic">📊</div>' +
        "<h2>Espace propriétaire</h2>" +
        "<p>Premium actif pour vous. Suivez les paiements reçus en temps réel.</p>";
      const a = el("a", "btn btn-primary", "📊 Tableau de bord");
      a.href = "#/tableau-de-bord";
      card.appendChild(a);
      return card;
    }

    if (isUnlocked()) {
      card.classList.add("active");
      card.innerHTML =
        '<div class="premium-ic">⭐</div>' +
        "<h2>Premium actif</h2>" +
        "<p>Merci ! Tout le module A1.2 est débloqué. Viel Erfolg !</p>";
      return card;
    }

    card.innerHTML =
      '<div class="premium-ic">⭐</div>' +
      "<h2>" + esc(state.title) + "</h2>" +
      "<p>Débloquez l'intégralité du module <strong>A1.2</strong> " +
      "(verbes modaux, Perfekt, datif, adjectifs…) et soutenez le cours.</p>";
    if (window.TG && window.TG.isInside()) {
      card.appendChild(buyButton("Débloquer pour ⭐ " + state.price));
      card.appendChild(el("p", "premium-note", "Paiement unique en Telegram Stars ⭐ · accès à vie"));
    } else {
      card.appendChild(el("p", "premium-note", "Ouvrez le cours dans Telegram pour débloquer le Premium."));
    }
    return card;
  }

  /* Mur de paiement affiché à la place d'une leçon verrouillée. */
  function renderPaywall(lecon) {
    const wrap = el("section", "paywall");
    wrap.innerHTML =
      '<div class="premium-ic">🔒</div>' +
      "<h2>Leçon Premium</h2>" +
      "<p>« " + esc(lecon && lecon.titre ? lecon.titre : "Cette leçon") +
      " » fait partie du module <strong>A1.2</strong>, réservé à l'accès Premium.</p>";
    if (window.TG && window.TG.isInside()) {
      wrap.appendChild(buyButton("Débloquer pour ⭐ " + state.price));
      wrap.appendChild(el("p", "premium-note", "Paiement unique en Telegram Stars ⭐ · accès à vie"));
    } else {
      wrap.appendChild(el("p", "premium-note", "Ouvrez le cours dans Telegram pour débloquer le Premium."));
    }
    const back = el("a", "btn btn-ghost", "← Retour à l'aperçu");
    back.href = "#/";
    wrap.appendChild(back);
    return wrap;
  }

  return {
    init,
    isConfigured,
    isUnlocked,
    isOwner,
    isLessonLocked,
    buy,
    authHeaders,
    renderHomeCard,
    renderPaywall
  };
})();
