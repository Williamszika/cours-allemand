/* =====================================================================
   telegram.js — Intégration Telegram Mini App (Web App SDK)
   - Initialise le SDK (ready/expand)
   - Synchronise le thème Telegram (clair/sombre) avec l'interface
   - Pilote le bouton principal (MainButton) et le bouton retour (BackButton)
   - Retour haptique (HapticFeedback)
   Tout est sans effet hors de Telegram : l'app reste un site web normal.
   ===================================================================== */
window.TG = (function () {
  const tg = window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
  let inside = false;
  let mainHandler = null;
  let backHandler = null;

  function isInside() {
    return inside;
  }

  function init() {
    if (!tg) return; // SDK non chargé (hors Telegram / hors-ligne)
    try { tg.ready(); } catch (e) {}
    // platform === 'unknown' => page ouverte dans un navigateur classique
    inside = !!(tg.platform && tg.platform !== "unknown");
    if (!inside) return;
    document.documentElement.classList.add("in-telegram");
    try { tg.expand(); } catch (e) {}
    try { tg.disableVerticalSwipes && tg.disableVerticalSwipes(); } catch (e) {}
    applyTheme();
    try { tg.onEvent("themeChanged", applyTheme); } catch (e) {}
  }

  function applyTheme() {
    if (!tg) return;
    const scheme = tg.colorScheme || "light";
    document.documentElement.setAttribute("data-tg-scheme", scheme);
    const tp = tg.themeParams || {};
    const root = document.documentElement;
    // Expose quelques couleurs Telegram (utilisables en CSS si besoin)
    if (tp.link_color) root.style.setProperty("--tg-link", tp.link_color);
    if (tp.button_color) root.style.setProperty("--tg-button", tp.button_color);
    const header = tp.bg_color || (scheme === "dark" ? "#0e1621" : "#ffffff");
    const bg = tp.secondary_bg_color || tp.bg_color || (scheme === "dark" ? "#0e1621" : "#f8fafc");
    try { tg.setHeaderColor(header); } catch (e) {}
    try { tg.setBackgroundColor(bg); } catch (e) {}
  }

  function setMainButton(text, handler) {
    if (!tg || !inside) return;
    const mb = tg.MainButton;
    if (mainHandler) { try { mb.offClick(mainHandler); } catch (e) {} }
    mainHandler = function () {
      haptic("medium");
      handler && handler();
    };
    try {
      mb.setText(text);
      // Libellé du bouton principal dans la langue choisie (si ≠ français)
      if (window.I18N && window.I18N.lang && window.I18N.lang() !== "fr") {
        window.I18N.translate(text, window.I18N.lang(), "fr").then(function (out) { if (out && out !== text) { try { mb.setText(out); } catch (e) {} } });
      }
      mb.onClick(mainHandler);
      mb.show();
    } catch (e) {}
    document.body.classList.add("has-main-button");
  }

  function hideMainButton() {
    if (!tg || !inside) return;
    try {
      if (mainHandler) tg.MainButton.offClick(mainHandler);
      tg.MainButton.hide();
    } catch (e) {}
    mainHandler = null;
    document.body.classList.remove("has-main-button");
  }

  function showBackButton(handler) {
    if (!tg || !inside) return;
    const bb = tg.BackButton;
    if (backHandler) { try { bb.offClick(backHandler); } catch (e) {} }
    backHandler = function () {
      if (handler) handler();
      else location.hash = "#/";
    };
    try {
      bb.onClick(backHandler);
      bb.show();
    } catch (e) {}
  }

  function hideBackButton() {
    if (!tg || !inside) return;
    try {
      if (backHandler) tg.BackButton.offClick(backHandler);
      tg.BackButton.hide();
    } catch (e) {}
    backHandler = null;
  }

  function haptic(kind) {
    if (!tg || !inside || !tg.HapticFeedback) return;
    try {
      if (kind === "success" || kind === "warning" || kind === "error")
        tg.HapticFeedback.notificationOccurred(kind);
      else if (kind === "selection") tg.HapticFeedback.selectionChanged();
      else tg.HapticFeedback.impactOccurred(kind || "light");
    } catch (e) {}
  }

  function closingConfirmation(on) {
    if (!tg || !inside) return;
    try {
      on ? tg.enableClosingConfirmation() : tg.disableClosingConfirmation();
    } catch (e) {}
  }

  return {
    tg, isInside, init, applyTheme,
    setMainButton, hideMainButton, showBackButton, hideBackButton,
    haptic, closingConfirmation
  };
})();
