/* =====================================================================
   build.js — Génère une version « un seul fichier » du cours.
   Inline le CSS et tous les scripts dans dist/allemand-a1.html, afin
   d'obtenir un fichier autonome qu'on peut ouvrir d'un double-clic
   (aucun serveur requis).
   Lancer :  node build.js

   La liste des ressources à inliner est DÉDUITE de index.html (et non
   plus codée en dur) : tout <link rel="stylesheet" href="css/…"> et tout
   <script src="data/…" | "js/…"> y est repris dans l'ordre du document.
   Ajouter un script/feuille de style dans index.html suffit donc — le
   bundle reste automatiquement à jour. Le SDK Telegram (https://…) et les
   autres ressources externes sont laissés en place.
   ===================================================================== */
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const read = (p) => fs.readFileSync(path.join(dir, p), "utf8");
const isLocal = (href) => /^(?:data|js|css)\//.test(href); // à inliner

let html = read("index.html");

// 1) Inline des feuilles de style locales (<link rel="stylesheet" href="css/…">).
html = html.replace(
  /<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["'](css\/[^"']+)["'][^>]*>/gi,
  (_tag, href) => "<style>\n" + read(href) + "\n</style>"
);

// 2) Inline des scripts locaux (data/…, js/…), dans l'ordre du document.
//    Les scripts externes (ex. SDK Telegram en https://…) sont laissés tels quels.
html = html.replace(
  /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi,
  (tag, src) => {
    if (!isLocal(src)) return tag;
    const code = read(src).replace(/<\/script>/g, "<\\/script>");
    return "<script>\n" + code + "\n</script>";
  }
);

// 3) Marque la version autonome dans le titre.
html = html.replace(
  /<title>([^<]*)<\/title>/i,
  (_m, t) => "<title>" + t.trim() + " (version autonome)</title>"
);

fs.mkdirSync(path.join(dir, "dist"), { recursive: true });
const out = path.join(dir, "dist/allemand-a1.html");
fs.writeFileSync(out, html);
console.log("✅ Bundle écrit : dist/allemand-a1.html (" + Math.round(html.length / 1024) + " KB)");

// Garde-fou : plus aucune référence locale ne doit subsister dans le bundle.
// (Le SDK Telegram externe, lui, est volontairement laissé en https://.)
if (
  /<script\b[^>]*\bsrc=["'](?:data|js|css)\//i.test(html) ||
  /<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']css\//i.test(html)
) {
  console.warn("⚠️ Des références locales subsistent dans le bundle.");
} else {
  console.log("   (SDK Telegram laissé en externe — normal.)");
}

// 4) Synchronise la liste de précache du Service Worker (sw.js) avec index.html
//    — même source de vérité que le bundle, pour éviter toute dérive du mode
//    hors-ligne. La liste est écrite entre les marqueurs @shell:start/@shell:end.
const swAssets = [];
read("index.html").replace(/\b(?:src|href)=["']([^"']+)["']/gi, (m, p) => {
  if (/^(?:https?:|data:)/i.test(p)) return m; // ressources externes : ignorées
  if ((/^(?:css|js|data)\//.test(p) || /\.(?:webmanifest|png)$/i.test(p)) && swAssets.indexOf(p) < 0) {
    swAssets.push(p);
  }
  return m;
});
const shell = ["./", "./index.html", "./icon-512.png"].concat(swAssets.map((p) => "./" + p));
const shellLines = shell.map((s) => '  "' + s + '"').join(",\n");
const SHELL_RE = /(\/\* @shell:start[\s\S]*?\*\/)[\s\S]*?(\/\* @shell:end \*\/)/;
let sw = read("sw.js");
if (SHELL_RE.test(sw)) {
  fs.writeFileSync(path.join(dir, "sw.js"), sw.replace(SHELL_RE, "$1\n" + shellLines + "\n  $2"));
  console.log("✅ sw.js : précache synchronisé (" + shell.length + " entrées)");
} else {
  console.warn("⚠️ sw.js : marqueurs @shell:start/@shell:end introuvables — précache non régénéré.");
}
