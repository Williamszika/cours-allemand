/* =====================================================================
   build.js — Génère une version « un seul fichier » du cours.
   Inline le CSS et tous les scripts dans dist/allemand-a1.html, afin
   d'obtenir un fichier autonome qu'on peut ouvrir d'un double-clic
   (aucun serveur requis).
   Lancer :  node build.js
   ===================================================================== */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const read = (p) => fs.readFileSync(path.join(dir, p), "utf8");

let html = read("index.html");

// 1) Inline du CSS
const css = read("css/styles.css");
html = html.split('<link rel="stylesheet" href="css/styles.css" />').join("<style>\n" + css + "\n</style>");

// 2) Inline des scripts (dans l'ordre de chargement)
const scripts = [
  "data/lecons-a11.js",
  "data/lecons-a12.js",
  "data/production.js",
  "data/comprehension.js",
  "data/grammaire.js",
  "data/lecons-a21.js",
  "data/lecons-a22.js",
  "data/grammaire-a21.js",
  "data/grammaire-a22.js",
  "data/lecons-b11.js",
  "data/lecons-b12.js",
  "data/grammaire-b11.js",
  "data/grammaire-b12.js",
  "data/lecons-b21.js",
  "data/lecons-b22.js",
  "data/grammaire-b21.js",
  "data/grammaire-b22.js",
  "data/lecons-c11.js",
  "data/lecons-c12.js",
  "data/grammaire-c11.js",
  "data/grammaire-c12.js",
  "data/lecons-c21.js",
  "data/lecons-c22.js",
  "data/grammaire-c21.js",
  "data/grammaire-c22.js",
  "data/cours.js",
  "data/illustrations.js",
  "data/placement.js",
  "js/i18n.js",
  "js/speech.js",
  "js/progress.js",
  "js/revision.js",
  "js/telegram.js",
  "js/sync.js",
  "js/exercises.js",
  "js/app.js"
];
scripts.forEach((s) => {
  const code = read(s).replace(/<\/script>/g, "<\\/script>");
  html = html.split('<script src="' + s + '"></script>').join("<script>\n" + code + "\n</script>");
});

// 3) Bandeau de version autonome
html = html.replace(
  "<title>Allemand intensif A1 — Cours interactif</title>",
  "<title>Allemand intensif A1 — Cours interactif (version autonome)</title>"
);

fs.mkdirSync(path.join(dir, "dist"), { recursive: true });
const out = path.join(dir, "dist/allemand-a1.html");
fs.writeFileSync(out, html);
console.log("✅ Bundle écrit : dist/allemand-a1.html (" + Math.round(html.length / 1024) + " KB)");
// Le SDK Telegram reste volontairement externe (chargé par Telegram).
if (/<script src="(?:data|js)\//.test(html) || /<link rel="stylesheet" href="css\//.test(html)) {
  console.warn("⚠️ Des références locales subsistent dans le bundle.");
} else {
  console.log("   (SDK Telegram laissé en externe — normal.)");
}
