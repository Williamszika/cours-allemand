/* =====================================================================
   illustrations.js — Photos (réelles) et intros explicatives par leçon
   Les photos viennent de LoremFlickr (images Flickr sous licence Creative
   Commons), par mots-clés concrets, en HTTPS, sans clé API. Le paramètre
   `lock` rend chaque photo déterministe (toujours la même par leçon).
   ===================================================================== */
window.ILLUSTRATIONS = {
  l01: { kw: "handshake", intro: "Première leçon : on apprend à saluer, à dire son nom, son pays d'origine et où l'on habite — les toutes premières phrases pour entrer en contact en allemand." },
  l02: { kw: "blackboard", intro: "On épelle son nom et on compte de 0 à 100. Indispensable pour donner son âge, un numéro de téléphone ou comprendre un prix." },
  l03: { kw: "flags", intro: "On parle des pays et des langues : dire d'où l'on vient et quelles langues on parle, avec le verbe « sprechen »." },
  l04: { kw: "guitar", intro: "Les loisirs et le temps libre : dire ce que l'on aime faire grâce au petit mot « gern » (volontiers)." },
  l05: { kw: "office,desk", intro: "Le monde du travail : nommer les professions et dire où l'on travaille, avec les articles « ein/eine » et les possessifs « mein/dein »." },
  l06: { kw: "park,picnic", intro: "Le temps libre et l'heure : lire l'heure, nommer les jours et utiliser les verbes à particule séparable (aufstehen, einkaufen…)." },
  l07: { kw: "hotel,room", intro: "À l'hôtel : réserver une chambre poliment avec « möchten » et dire ce qu'il y a avec « es gibt » + accusatif." },
  l08: { kw: "map,city", intro: "S'orienter en ville : demander et indiquer le chemin, situer des lieux avec les prépositions (neben, zwischen, vor…)." },
  l09: { kw: "restaurant,table", intro: "Au restaurant : commander un plat et une boisson (accusatif) et utiliser la négation « kein »." },
  l10: { kw: "breakfast,coffee", intro: "La routine quotidienne : décrire sa journée du matin au soir avec « zuerst, dann, danach » et les verbes séparables." },
  l11: { kw: "office,computer", intro: "Le stress au bureau : exprimer obligations et capacités avec les verbes de modalité « müssen, können, wollen »." },
  l12: { kw: "laptop,keyboard", intro: "L'ordinateur : le vocabulaire technique et l'impératif pour donner des instructions (Öffnen Sie…, Klick…)." },
  l13: { kw: "calendar,planner", intro: "Prendre rendez-vous : proposer un créneau poliment et maîtriser les prépositions de temps (am, um, im, von…bis)." },
  l14: { kw: "sky,clouds", intro: "Le temps et les saisons : décrire la météo avec « es » et relier les idées avec les conjonctions (und, aber, denn)." },
  l15: { kw: "suitcase,airport", intro: "Voyages : préparer un voyage et raconter au passé composé (Perfekt) avec « haben » ou « sein »." },
  l16: { kw: "train,station", intro: "Les transports : dire comment on se déplace avec « mit » + datif et les indicateurs de lieu (nach, zu, in)." },
  l17: { kw: "sofa,living-room", intro: "Le logement : décrire son habitation et situer les meubles avec les prépositions mixtes + datif." },
  l18: { kw: "stethoscope,doctor", intro: "La santé : nommer les parties du corps, décrire ses symptômes et donner un conseil avec « sollen »." },
  l19: { kw: "alarm,clock", intro: "Les excuses : se justifier poliment et donner une raison avec « weil » (verbe à la fin)." }
};

window.ILLUSTRATIONS.examen = { kw: "graduation,certificate" };

/* Construit une URL de photo réelle, déterministe (lock) et redimensionnée. */
window.photoUrl = function (leconId, w, h) {
  const info = (window.ILLUSTRATIONS && window.ILLUSTRATIONS[leconId]) || null;
  const kw = info && info.kw ? info.kw : "books,learning";
  const lock = parseInt(String(leconId || "l0").replace(/\D/g, ""), 10) || (leconId === "examen" ? 99 : 1);
  return "https://loremflickr.com/" + w + "/" + h + "/" + encodeURIComponent(kw) + "?lock=" + lock;
};
window.introFor = function (leconId) {
  const info = window.ILLUSTRATIONS && window.ILLUSTRATIONS[leconId];
  return info && info.intro ? info.intro : "";
};

// Leçons de grammaire (photos d'étude + intro simple pour la compréhension)
Object.assign(window.ILLUSTRATIONS, {
  g01: { kw: "chalkboard,school", intro: "La base de tout : qui fait l'action (les pronoms) et comment conjuguer un verbe au présent." },
  g02: { kw: "notebook,writing", intro: "Conjuguer les verbes, y compris ceux qui changent de voyelle (sprechen → spricht)." },
  g03: { kw: "dictionary,words", intro: "Chaque nom a un genre : der (masc.), die (fém.), das (neutre). On apprend à le repérer." },
  g04: { kw: "stop,sign", intro: "Dire « non » : quand employer nicht et quand employer kein." },
  g05: { kw: "shelf,boxes", intro: "Situer les choses : sur, sous, à côté de… avec le datif." },
  g06: { kw: "target,arrow", intro: "L'accusatif (complément d'objet direct). Astuce : seul le masculin change (der → den)." },
  g07: { kw: "office,calendar", intro: "Les verbes du quotidien : pouvoir/devoir/vouloir, verbes séparables et passé composé." },
  g08: { kw: "clock,calendar", intro: "Dire QUAND : am (jour), um (heure), im (mois/saison)…" },
  g09: { kw: "puzzle,pieces", intro: "Relier ses idées : und, aber, denn… et weil (qui envoie le verbe à la fin)." },
  g10: { kw: "mail,letter", intro: "Le datif : après mit, zu, bei… et pour dire « à qui »." },
  g11: { kw: "map,direction", intro: "Dire OÙ et OÙ ALLER : nach, zu, in." },
  g12: { kw: "paint,colors", intro: "Décrire avec des adjectifs et comparer (groß → größer)." }
});

// Photos + intros des thèmes A2 (les leçons de grammaire A2 utilisent le repli)
Object.assign(window.ILLUSTRATIONS, {
  a2t01: { kw: "people,meeting", intro: "On se présente plus en détail : famille, situation, et les adjectifs possessifs." },
  a2t02: { kw: "work,profession", intro: "Décrire son métier et ses tâches, et dire « comme » (als) + profession." },
  a2t03: { kw: "old,photos,memories", intro: "Raconter le passé : passé composé et le prétérit de sein/haben (war, hatte)." },
  a2t04: { kw: "resume,interview", intro: "École, formation et CV : parler de son parcours et dire des dates (von… bis)." },
  a2t05: { kw: "routine,hobby", intro: "La journée en détail et les loisirs, avec les verbes pronominaux (sich)." },
  a2t06: { kw: "shopping,store", intro: "Acheter et dépenser : comparer les prix (comparatif et superlatif)." },
  a2t07: { kw: "money,coins,bank", intro: "L'argent : banque, paiement, et le datif (à qui ?)." },
  a2t08: { kw: "lottery,dream,money", intro: "« Et si… ? » : exprimer un souhait au Konjunktiv II (würde, wäre, hätte)." },
  a2t09: { kw: "office,telephone", intro: "Au bureau et au téléphone : prendre rendez-vous et la subordonnée « dass »." },
  a2t10: { kw: "vacation,beach", intro: "Les vacances : raconter un séjour et dire où l'on va / où l'on est." },
  a2t11: { kw: "flags,world,map", intro: "Pays et nationalités : d'où l'on vient et où l'on va (nach / in)." },
  a2t12: { kw: "travel,planning,airport", intro: "Planifier un voyage : billets, réservations, et le futur avec werden." },
  a2t13: { kw: "animals,wildlife", intro: "Les animaux (et les dangereux) : décrire et dire ce qu'ils savent faire." },
  a2t14: { kw: "portrait,people", intro: "Décrire les personnes : apparence et caractère, avec les adjectifs." },
  a2t15: { kw: "house,garden", intro: "Habiter : ville ou campagne, jardin, voisins — et comparer." },
  a2t16: { kw: "vegetables,healthy,food", intro: "Alimentation saine : donner des conseils avec « man soll »." },
  a2t17: { kw: "newspaper,news", intro: "Les actualités : comprendre une info et donner son avis (ich finde, dass…)." },
  a2t18: { kw: "nature,recycling,environment", intro: "L'environnement : écologie et verbes à préposition fixe." },
  a2t19: { kw: "technology,smartphone", intro: "La technologie : avantages/inconvénients et la subordonnée « wenn »." }
});
