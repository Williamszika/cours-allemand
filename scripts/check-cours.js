/* =====================================================================
   check-cours.js — Vérifie que le cours s'assemble sans erreur.
   Charge les données dans l'ordre de index.html (source de vérité) et
   contrôle window.COURS. Utilisé par la CI et en local.
   Usage :  node scripts/check-cours.js   (code de sortie ≠ 0 si problème)
   ===================================================================== */
const fs = require("fs");
const path = require("path");

globalThis.window = {};
const root = path.join(__dirname, "..");

// Liste des données dérivée de index.html (pas de liste codée en dur → pas de dérive).
const idx = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [];
idx.replace(/<script\s+src="(data\/[^"]+\.js)"><\/script>/g, (m, p) => (files.push(p), m));

if (!files.length) {
  console.error("✗ Aucun script data/ trouvé dans index.html.");
  process.exit(1);
}

let errors = 0;
for (const f of files) {
  try {
    (0, eval)(fs.readFileSync(path.join(root, f), "utf8"));
  } catch (e) {
    console.error("✗ Erreur dans " + f + " : " + e.message);
    errors++;
  }
}

const C = window.COURS;
if (!C || !Array.isArray(C.modules) || !C.modules.length) {
  console.error("✗ window.COURS.modules est vide — l'assemblage a échoué.");
  process.exit(1);
}
const s = C.stats || {};
if (!s.lecons || !s.exercices || !s.mots) {
  console.error("✗ Statistiques du cours invalides : " + JSON.stringify(s));
  process.exit(1);
}

const parNiveau = {};
C.modules.forEach((m) => m.lecons.forEach((l) => (parNiveau[l.niveau] = (parNiveau[l.niveau] || 0) + 1)));
console.log(
  "✓ Cours assemblé : " + C.modules.length + " modules, " + s.lecons + " leçons " +
  JSON.stringify(parNiveau) + ", " + s.mots + " mots, " + s.exercices + " exercices, " + C.examens.length + " examens."
);

if (errors) {
  console.error("✗ " + errors + " fichier(s) de données en erreur.");
  process.exit(1);
}
process.exit(0);
