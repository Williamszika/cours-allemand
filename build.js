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
