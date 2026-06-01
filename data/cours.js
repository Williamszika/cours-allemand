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
  titre: "Allemand intensif — A1",
  slogan: "Von Null auf Deutsch — De zéro à l'allemand",
  description:
    "Un parcours complet et progressif pour atteindre le niveau A1 du Cadre Européen. " +
    "Chaque leçon combine vocabulaire vivant, grammaire claire, dialogue authentique, " +
    "prononciation audio et exercices interactifs auto-corrigés.",

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
