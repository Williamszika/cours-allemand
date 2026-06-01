/* =====================================================================
   COURS D'ALLEMAND INTENSIF — Niveau A1 (CECRL / GER)
   Assemble les modules A1.1 et A1.2 et expose la structure globale.
   Méthode communicative inspirée des manuels allemands (Menschen,
   Schritte international, Netzwerk) + grammaire explicite en français.
   ===================================================================== */
window.COURS = {
  langue: "Deutsch",
  niveau: "A1",
  cadre: "CECRL / GER (Gemeinsamer Europäischer Referenzrahmen)",
  titre: "Allemand intensif — A1 · A2 · B1 · B2",
  slogan: "Von Null bis B2 — De zéro au niveau B2",
  description:
    "Un parcours complet et progressif de A1 à B2 (Cadre Européen). " +
    "Chaque leçon combine vocabulaire vivant, grammaire claire, dialogue authentique, " +
    "prononciation audio et exercices interactifs auto-corrigés. " +
    "Les niveaux se débloquent l'un après l'autre grâce aux examens.",

  // Compétences visées au niveau A1 (selon le CECRL)
  competences: [
    "Comprendre et utiliser des expressions familières et quotidiennes",
    "Se présenter et présenter quelqu'un",
    "Poser des questions simples sur des sujets familiers",
    "Communiquer de façon simple si l'interlocuteur parle lentement",
    "Lire de courts textes et formulaires simples"
  ],

  // Récapitulatif de la grammaire couverte (les 12 points demandés)
  grammaireGlobale: {
    "A1.1": [
      "Pronoms personnels et verbes au présent",
      "Le groupe de noms : der / die / das (articles)",
      "Verbes réguliers, irréguliers et à changement de voyelle",
      "La négation : nicht / kein",
      "Prépositions de lieu",
      "Les pronoms et articles à l'accusatif"
    ],
    "A1.2": [
      "Verbes : modaux, séparables, passé composé (Perfekt)",
      "Prépositions de temps (am, um, im, von…bis)",
      "Les conjonctions (und, aber, denn, weil)",
      "Le groupe de noms au datif",
      "Indicateurs de lieu (nach, zu, in, mit)",
      "Les adjectifs"
    ]
  },

  // Conseils de méthode pour un apprentissage INTENSIF
  methode: [
    { icone: "🎯", titre: "Objectif clair", texte: "Chaque leçon vise des actes de parole concrets, comme en immersion." },
    { icone: "🔊", titre: "Écoute active", texte: "Écoutez et répétez chaque mot et dialogue à voix haute (synthèse vocale allemande intégrée)." },
    { icone: "✍️", titre: "Pratique immédiate", texte: "7 types d'exercices auto-corrigés après chaque point de cours." },
    { icone: "🔁", titre: "Répétition espacée", texte: "Révisez les leçons précédentes : la progression débloque la suivante." },
    { icone: "🗣️", titre: "Production", texte: "Réutilisez le vocabulaire dans vos propres phrases dès la leçon 1." }
  ],

  // Seuil de réussite pour les tests de fin de module (en %)
  seuilReussite: 60,
  // Score requis sur les exercices d'une lecon pour la valider (en %)
  seuilLecon: 70,

  modules: [window.MODULE_A11, window.MODULE_A12]
};

/* Examens qui jalonnent le parcours (verrous entre niveaux) */
window.COURS.examens = [
  { id: "a1", niveau: "A1", titre: "Examen du niveau A1" },
  { id: "a2", niveau: "A2", titre: "Examen du niveau A2" },
  { id: "final", niveau: "A1+A2", titre: "Examen final A1 + A2" },
  { id: "b1", niveau: "B1", titre: "Examen du niveau B1" },
  { id: "b2", niveau: "B2", titre: "Examen du niveau B2" }
];

/* Intercale la grammaire et assemble les niveaux A1 et A2 (parcours unique) */
(function () {
  const byId = {};
  [window.MODULE_A11, window.MODULE_A12, window.MODULE_A21, window.MODULE_A22, window.MODULE_B11, window.MODULE_B12, window.MODULE_B21, window.MODULE_B22].forEach(
    (m) => m && m.lecons.forEach((l) => (byId[l.id] = l))
  );
  Object.assign(byId, window.GRAMMAIRE || {}, window.GRAMMAIRE_A2 || {}, window.GRAMMAIRE_B1 || {}, window.GRAMMAIRE_B2 || {});
  const L = (id) => byId[id];
  const ordreA11 = ["l01", "g01", "l02", "l03", "g02", "l04", "l05", "g03", "l06", "l07", "g06", "l08", "g05", "l09", "g04"];
  const ordreA12 = ["l10", "l11", "g07", "l12", "l13", "g08", "l14", "g09", "l15", "l16", "g10", "g11", "l17", "l18", "g12", "l19"];
  const ordreA21 = ["a2t01", "a2g03", "a2t02", "a2g01", "a2t03", "a2g02", "a2t04", "a2g08", "a2t05", "a2g06", "a2t06", "a2g04", "a2t07", "a2g09", "a2t08", "a2g07", "a2t09", "a2g05"];
  const ordreA22 = ["a2t10", "a2g10", "a2t11", "a2g17", "a2t12", "a2g13", "a2t13", "a2g12", "a2t14", "a2g11", "a2t15", "a2g16", "a2t16", "a2g14", "a2t17", "a2g15", "a2t18", "a2t19"];
  const ordreB11 = ["b1t01", "b1g01", "b1t02", "b1g08", "b1t03", "b1g14", "b1t04", "b1g12", "b1t05", "b1g02", "b1t06", "b1g05", "b1t07", "b1g04", "b1t08", "b1g09", "b1t09", "b1g03", "b1t10", "b1g13", "b1t11", "b1g11", "b1t12", "b1g06", "b1t13", "b1g07", "b1t14", "b1g10"];
  const ordreB12 = ["b1t15", "b1g15", "b1t16", "b1g16", "b1t17", "b1g17", "b1t18", "b1g18", "b1t19", "b1g19", "b1t20", "b1g20", "b1t21", "b1t22", "b1t23", "b1g21", "b1t24", "b1g22", "b1t25", "b1g23", "b1t26", "b1t27"];
  const ordreB21 = ["b2t01", "b2g02", "b2t02", "b2g06", "b2t03", "b2g04", "b2t04", "b2g05", "b2t05", "b2g03", "b2t06", "b2g08", "b2t07", "b2g01", "b2g07"];
  const ordreB22 = ["b2t08", "b2g09", "b2g11", "b2t09", "b2g12", "b2t10", "b2g16", "b2g10", "b2t11", "b2g17", "b2t12", "b2g14", "b2g15", "b2t13", "b2g13"];
  window.MODULE_A11.lecons = ordreA11.map(L).filter(Boolean);
  window.MODULE_A12.lecons = ordreA12.map(L).filter(Boolean);
  if (window.MODULE_A21) window.MODULE_A21.lecons = ordreA21.map(L).filter(Boolean);
  if (window.MODULE_A22) window.MODULE_A22.lecons = ordreA22.map(L).filter(Boolean);
  if (window.MODULE_B11) window.MODULE_B11.lecons = ordreB11.map(L).filter(Boolean);
  if (window.MODULE_B12) window.MODULE_B12.lecons = ordreB12.map(L).filter(Boolean);
  if (window.MODULE_B21) window.MODULE_B21.lecons = ordreB21.map(L).filter(Boolean);
  if (window.MODULE_B22) window.MODULE_B22.lecons = ordreB22.map(L).filter(Boolean);
  window.MODULE_A11.niveau = "A1";
  window.MODULE_A12.niveau = "A1";
  if (window.MODULE_A21) window.COURS.modules.push(window.MODULE_A21);
  if (window.MODULE_A22) window.COURS.modules.push(window.MODULE_A22);
  if (window.MODULE_B11) window.COURS.modules.push(window.MODULE_B11);
  if (window.MODULE_B12) window.COURS.modules.push(window.MODULE_B12);
  if (window.MODULE_B21) window.COURS.modules.push(window.MODULE_B21);
  if (window.MODULE_B22) window.COURS.modules.push(window.MODULE_B22);
  // Tag de niveau + numérotation qui repart à 1 pour chaque niveau
  const cpt = {};
  window.COURS.modules.forEach((m) =>
    m.lecons.forEach((l) => {
      l.niveau = m.niveau || "A1";
      cpt[l.niveau] = (cpt[l.niveau] || 0) + 1;
      l.numero = cpt[l.niveau];
    })
  );
})();

/* Fusion des exercices de compréhension puis de production dans chaque leçon */
window.COURS.modules.forEach((m) =>
  m.lecons.forEach((l) => {
    if (window.COMPREHENSION && window.COMPREHENSION[l.id]) l.exercices = l.exercices.concat(window.COMPREHENSION[l.id]);
    if (window.PRODUCTION && window.PRODUCTION[l.id]) l.exercices = l.exercices.concat(window.PRODUCTION[l.id]);
  })
);

/* Petites statistiques calculées automatiquement (pour l'aperçu) */
window.COURS.stats = (function () {
  const modules = window.COURS.modules;
  let lecons = 0, mots = 0, exercices = 0, minutes = 0;
  modules.forEach((m) =>
    m.lecons.forEach((l) => {
      lecons += 1;
      mots += (l.vocabulaire || []).length;
      exercices += (l.exercices || []).length;
      minutes += l.duree || 0;
    })
  );
  return {
    modules: modules.length,
    lecons,
    mots,
    exercices,
    heures: Math.round(minutes / 60)
  };
})();
