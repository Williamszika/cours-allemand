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

// === Niveau B1 — thèmes (B1.1 + B1.2) : photos réelles + intros explicatives ===
Object.assign(window.ILLUSTRATIONS, {
  b1t01: { kw: "clock,planner,schedule", intro: "Organiser et raconter ses activités, et situer deux actions passées l'une par rapport à l'autre grâce au plus-que-parfait." },
  b1t02: { kw: "wristwatch,time,punctual", intro: "La ponctualité : parler de retard et d'habitudes, et comprendre les attentes sociales autour du temps." },
  b1t03: { kw: "museum,exhibition,gallery", intro: "Au musée : décrire une visite et relier ses idées avec les propositions relatives (das Museum, das ich besucht habe)." },
  b1t04: { kw: "art,painting,gallery", intro: "Les beaux-arts : donner son avis sur une œuvre et comparer (schöner, am schönsten)." },
  b1t05: { kw: "professional,workplace,job", intro: "Les professions : décrire un métier et les verbes à préposition fixe (arbeiten als, sich kümmern um)." },
  b1t06: { kw: "office,stress,meeting", intro: "Problèmes au travail : exposer un souci et donner un conseil au subjonctif II (du solltest, an deiner Stelle würde ich…)." },
  b1t07: { kw: "appointment,calendar,phone", intro: "Prendre rendez-vous : proposer, accepter, reporter — poliment, avec le subjonctif II (könnten Sie…?)." },
  b1t08: { kw: "handshake,business,team", intro: "Les bonnes manières au travail : ce qui se fait ou non, exprimé avec « man » et « üblich »." },
  b1t09: { kw: "books,reading,library", intro: "La lecture : parler de ses goûts et préciser avec des relatives, y compris avec préposition (das Buch, von dem ich spreche)." },
  b1t10: { kw: "childhood,vintage,memories", intro: "Le passé et l'enfance : raconter des souvenirs avec le prétérit et distinguer « als » (une fois) et « wenn » (chaque fois)." },
  b1t11: { kw: "television,media,broadcast", intro: "Les médias : présenter une information et employer le passif (die Nachricht wird gesendet)." },
  b1t12: { kw: "advertising,billboard,poster", intro: "La publicité : son impact et son histoire — exprimer cause et conséquence (weil, deshalb)." },
  b1t13: { kw: "product,marketing,shop", intro: "Décrire des produits et leurs qualités avec des adjectifs déclinés (ein praktisches Gerät)." },
  b1t14: { kw: "complaint,customer,service", intro: "Les réclamations : se plaindre poliment et demander réparation au subjonctif II." },
  b1t15: { kw: "language,learning,books", intro: "Apprendre une langue : parler de sa méthode et exprimer une condition (wenn ich Zeit hätte, würde ich…)." },
  b1t16: { kw: "education,seminar,training", intro: "L'apprentissage tout au long de la vie : la formation continue et l'expression du but (um … zu, damit)." },
  b1t17: { kw: "study,notes,desk", intro: "Des conseils concrets pour apprendre, et comment structurer un récit (zuerst, dann, schließlich)." },
  b1t18: { kw: "graduation,diploma,exam", intro: "École, diplômes et notes : raconter son parcours scolaire au passé et comprendre le système allemand." },
  b1t19: { kw: "traffic,jam,cars", intro: "Problèmes de circulation : décrire embouteillages et incidents, et relier les actions (während, als)." },
  b1t20: { kw: "tram,subway,transport", intro: "Les moyens de transport : comparer et choisir, avec « mit + datif » et le comparatif." },
  b1t21: { kw: "train,platform,station", intro: "En route : demander un chemin ou un horaire poliment grâce à la question indirecte (Können Sie mir sagen, wann…?)." },
  b1t22: { kw: "travel,suitcase,journey", intro: "Partir en voyage : organiser un séjour et exprimer souhaits et conditions (würde gern, wenn … hätte)." },
  b1t23: { kw: "happy,smile,joy", intro: "Sentiments de bonheur : exprimer joie et gratitude avec les adjectifs à préposition (stolz auf, dankbar für)." },
  b1t24: { kw: "teamwork,people,trust", intro: "Les qualités : décrire le caractère d'une personne avec des adjectifs déclinés (ein zuverlässiger Mensch)." },
  b1t25: { kw: "emotion,stress,relax", intro: "Stress, colère et joie : exprimer ses émotions et leurs causes (weil, deshalb)." },
  b1t26: { kw: "cooking,recipe,restaurant", intro: "Cuisine et restaurant : suivre une recette (impératif, passif) et commander un repas." },
  b1t27: { kw: "celebration,party,gift", intro: "Invitations et vœux : inviter, accepter ou décliner poliment et présenter ses félicitations." }
});

// === Niveau B1 — fiches de grammaire : photos d'étude variées + intro courte ===
Object.assign(window.ILLUSTRATIONS, {
  b1g01: { kw: "history,timeline,clock", intro: "Les trois temps du passé : Perfekt (oral), Präteritum (récit écrit), Plusquamperfekt (antériorité)." },
  b1g02: { kw: "grammar,notebook,study", intro: "Les verbes qui imposent une préposition fixe — et donc un cas (warten auf, denken an)." },
  b1g03: { kw: "question,signs,doubt", intro: "Interroger et reprendre les choses avec wo(r)- et da(r)- (Worauf? → darauf)." },
  b1g04: { kw: "checklist,rules,document", intro: "Les modaux et « (nicht) brauchen … zu » pour nuancer obligation et permission." },
  b1g05: { kw: "thinking,idea,dream", intro: "Le subjonctif II : politesse, souhaits, conseils et irréel (présent et passé)." },
  b1g06: { kw: "gift,giving,hands", intro: "Les verbes à deux compléments : datif (à qui) + accusatif (quoi)." },
  b1g07: { kw: "letters,alphabet,grammar", intro: "La N-Deklination : ces masculins qui prennent -(e)n hors du nominatif singulier." },
  b1g08: { kw: "calendar,clock,time", intro: "Les prépositions de temps : vor, seit, bis, ab… et leurs cas." },
  b1g09: { kw: "timeline,sequence,steps", intro: "Les adverbes de temps pour situer et enchaîner (damals, zuerst, schließlich)." },
  b1g10: { kw: "mirror,reflection,study", intro: "Les verbes réfléchis et le pronom (mich/mir) accordé au sujet." },
  b1g11: { kw: "factory,process,machine", intro: "Le passif : werden + participe II, pour mettre l'action en avant." },
  b1g12: { kw: "compare,scales,ranking", intro: "Comparatif et superlatif des adjectifs (schneller, am schnellsten)." },
  b1g13: { kw: "key,ownership,document", intro: "Le génitif : exprimer l'appartenance et les prépositions wegen, trotz, während." },
  b1g14: { kw: "chain,link,connection", intro: "Les propositions relatives, avec ou sans préposition (der Mann, der… / mit dem…)." },
  b1g15: { kw: "road,fork,choice", intro: "La condition irréelle : wenn + subjonctif II, et « sonst »." },
  b1g16: { kw: "target,goal,arrow", intro: "Exprimer le but : um … zu (même sujet) ou damit (sujet différent)." },
  b1g17: { kw: "puzzle,connection,pieces", intro: "Locutions nom + verbe et connecteurs (eine Entscheidung treffen, trotzdem, deswegen)." },
  b1g18: { kw: "storytelling,writing,book", intro: "Choisir et combiner les temps du passé dans un récit cohérent." },
  b1g19: { kw: "hourglass,time,clock", intro: "Propositions temporelles : simultanéité (während, solange) et succession (bevor, nachdem, sobald)." },
  b1g20: { kw: "boxes,shelf,position", intro: "Les prépositions mixtes : datif (Wo?) ou accusatif (Wohin?)." },
  b1g21: { kw: "description,words,study", intro: "Les adjectifs à préposition fixe (stolz auf, zufrieden mit, abhängig von)." },
  b1g22: { kw: "list,points,structure", intro: "Les connecteurs doubles : sowohl…als auch, weder…noch, entweder…oder." },
  b1g23: { kw: "dominoes,cause,effect", intro: "Cause et conséquence : weil/da/denn et deshalb/deswegen/daher." }
});

// === Niveau B2 — thèmes (B2.1 + B2.2) : photos réelles + intros explicatives ===
Object.assign(window.ILLUSTRATIONS, {
  b2t01: { kw: "education,training,classroom", intro: "École et formation : parler de son parcours et nuancer son avis sur l'éducation, avec un style plus soutenu (nominalisation)." },
  b2t02: { kw: "friends,relationship,people", intro: "Relations interpersonnelles : décrire confiance, sentiments et désaccords, et gérer un conflit avec tact." },
  b2t03: { kw: "apartment,keys,rent", intro: "Vivre et louer : comprendre une annonce et un bail, décrire un logement et situer les choses (prépositions à deux cas)." },
  b2t04: { kw: "travel,complaint,luggage", intro: "Voyages et réclamations : exposer un problème en vacances et rédiger une lettre de réclamation formelle." },
  b2t05: { kw: "business,culture,office", intro: "Différences culturelles au travail : comparer des cultures professionnelles et généraliser avec prudence (gelten als, man)." },
  b2t06: { kw: "europe,flags,parliament", intro: "L'Europe et les Allemands : argumenter le pour et le contre (einerseits … andererseits) et employer le passif." },
  b2t07: { kw: "conversation,networking,event", intro: "Le small talk : engager et entretenir une conversation légère, et éviter les sujets sensibles." },
  b2t08: { kw: "email,phone,office", intro: "Travail quotidien : rédiger un e-mail professionnel et mener un appel téléphonique formel." },
  b2t09: { kw: "hiking,hobby,leisure", intro: "Activités et loisirs : parler de ses loisirs en détail et nuancer préférence et fréquence." },
  b2t10: { kw: "university,campus,lecture", intro: "L'université : décrire la vie universitaire et rapporter un contenu avec « dass »." },
  b2t11: { kw: "history,parliament,monument", intro: "Histoire et politique : raconter des événements (prétérit, passif) et comprendre le système politique allemand." },
  b2t12: { kw: "newspaper,news,world", intro: "Actualités du monde : comprendre une information et la rapporter au discours indirect (Konjunktiv I)." },
  b2t13: { kw: "detective,crime,investigation", intro: "Histoires criminelles : raconter un fait divers et formuler des hypothèses sur un coupable." }
});

// === Niveau B2 — fiches de grammaire : photos d'étude variées + intro courte ===
Object.assign(window.ILLUSTRATIONS, {
  b2g01: { kw: "signpost,rules,choice", intro: "Les modaux au sens objectif et subjectif (supposition : müsste, dürfte, könnte)." },
  b2g02: { kw: "history,timeline,clock", intro: "Perfekt, Präteritum, Plusquamperfekt : registre et antériorité." },
  b2g03: { kw: "grammar,words,book", intro: "La déclinaison de l'adjectif après der / ein / sans article." },
  b2g04: { kw: "boxes,shelf,position", intro: "Les prépositions à deux cas : datif (Wo?) ou accusatif (Wohin?)." },
  b2g05: { kw: "factory,construction,process", intro: "Le passif : processus, état et passif avec modal." },
  b2g06: { kw: "connection,grammar,study", intro: "Les verbes à préposition fixe (sich bewerben um, bestehen aus)." },
  b2g07: { kw: "letters,alphabet,grammar", intro: "La n-déclinaison : ces masculins en -(e)n hors du nominatif." },
  b2g08: { kw: "dominoes,cause,effect", intro: "Cause et conséquence : weil, denn, deshalb, so … dass." },
  b2g09: { kw: "thinking,idea,dream", intro: "Le subjonctif II : politesse, souhait et irréel (présent et passé)." },
  b2g10: { kw: "balance,scales,match", intro: "L'accord du verbe avec le sujet (collectifs, sujets coordonnés)." },
  b2g11: { kw: "blocks,order,sequence", intro: "L'ordre des mots : TeKaMoLo et la place de « nicht »." },
  b2g12: { kw: "clock,hourglass,calendar", intro: "Les indicateurs de temps : conjonction, préposition ou adverbe." },
  b2g13: { kw: "imagination,cloud,fantasy", intro: "L'emploi du conditionnel : souhait irréel et comparaison (als ob)." },
  b2g14: { kw: "speech,quote,microphone", intro: "Le discours indirect avec le Konjunktiv I (sei, habe, könne)." },
  b2g15: { kw: "exchange,arrows,swap", intro: "Les formes de substitution du Konjunktiv I (→ Konjunktiv II / würde)." },
  b2g16: { kw: "puzzle,phrase,book", intro: "Les locutions verbo-nominales (eine Entscheidung treffen, zur Verfügung stehen)." },
  b2g17: { kw: "grammar,notebook,study", intro: "Les prépositions à génitif : wegen, trotz, während, aufgrund." }
});
