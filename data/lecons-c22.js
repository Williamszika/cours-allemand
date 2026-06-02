/* =====================================================================
   MODULE C2.2 — Sciences, art, société
   Niveau C2 (CECRL) — maîtrise. Thèmes : progrès technique, environnement
   et pollution, médecine, compétences particulières, sentiments, mode de
   vie, art et créativité, littérature, politique. Registre soutenu.
   ===================================================================== */
window.MODULE_C22 = {
  id: "c2-2",
  titre: "C2.2 — Sciences, art & société",
  sousTitre: "Wissenschaft, Kunst & Gesellschaft",
  niveau: "C2",
  description:
    "La dernière marche : progrès technique, environnement, médecine, talents, " +
    "émotions, art de vivre, création artistique, littérature et politique — " +
    "pour s'exprimer avec la précision et la nuance d'un locuteur expérimenté.",
  couleur: "#047857",
  lecons: [
    {
      id: "c2t06", numero: 6, titre: "Le progrès technique", titreDE: "Technischer Fortschritt",
      theme: "Le progrès technique", duree: 65,
      objectifs: ["Évaluer les enjeux éthiques de la technique", "Argumenter de façon dialectique"],
      grammairePoints: ["Style nominal", "Passif et substituts"],
      vocabulaire: [
        { de: "die Digitalisierung", fr: "la numérisation", ex: "Die Digitalisierung durchdringt alle Bereiche." },
        { de: "die Automatisierung", fr: "l'automatisation", ex: "Die Automatisierung verändert die Arbeitswelt." },
        { de: "die Entgrenzung", fr: "l'abolition des limites", ex: "Die Entgrenzung von Arbeit und Freizeit nimmt zu." },
        { de: "der Datenschutz", fr: "la protection des données", ex: "Der Datenschutz gerät unter Druck." },
        { de: "die Verantwortung", fr: "la responsabilité", ex: "Mit der Technik wächst die Verantwortung." },
        { de: "bahnbrechend", fr: "révolutionnaire", ex: "eine bahnbrechende Innovation" },
        { de: "abwägen", fr: "peser (le pour et le contre)", ex: "Man muss Chancen und Risiken abwägen." },
        { de: "die Errungenschaft", fr: "l'acquis / la conquête", ex: "eine zivilisatorische Errungenschaft" }
      ],
      grammaire: [
        { titre: "L'argumentation dialectique", intro: "On expose thèse, antithèse et synthèse avec des connecteurs soutenus et le style nominal.",
          tableau: { entetes: ["Étape", "Tournure", "Exemple"], lignes: [["thèse", "Es steht außer Frage, dass", "…, dass die Technik Fortschritt bringt."], ["antithèse", "gleichwohl / indes", "Gleichwohl drohen Risiken."], ["nuance", "in dem Maße, wie", "… in dem Maße, wie wir abhängig werden."], ["synthèse", "letztlich kommt es darauf an", "Letztlich kommt es auf den Umgang an."]] },
          note: "« indes » (cependant) et « in dem Maße, wie » (dans la mesure où) sont des marqueurs C2." }
      ],
      dialogue: {
        titre: "Fortschritt mit Verantwortung", lieu: "Tagung",
        lignes: [
          { loc: "Ethikerin", de: "Es steht außer Frage, dass die Digitalisierung Chancen birgt.", fr: "Il est hors de doute que la numérisation recèle des opportunités." },
          { loc: "Ingenieur", de: "Gleichwohl dürfen wir den Datenschutz nicht vernachlässigen.", fr: "Cependant, nous ne devons pas négliger la protection des données." },
          { loc: "Ethikerin", de: "Letztlich kommt es darauf an, Chancen und Risiken abzuwägen.", fr: "En fin de compte, il s'agit de peser les chances et les risques." },
          { loc: "Ingenieur", de: "Verantwortung muss mit dem Fortschritt Schritt halten.", fr: "La responsabilité doit suivre le rythme du progrès." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Worauf kommt es laut Ethikerin an?", options: ["Chancen und Risiken abzuwägen", "Nur auf Profit", "Auf Geschwindigkeit"], correct: 0, explication: "« Chancen und Risiken abzuwägen »." },
        { type: "qcm", consigne: "Choisissez (antithèse soutenue).", question: "Die Technik hilft; ___ birgt sie Risiken.", options: ["gleichwohl", "weil", "damit", "sodass"], correct: 0, explication: "gleichwohl = cependant (verbe en 2e)." },
        { type: "trou", consigne: "Complétez (substitut du passif).", texte: "Das Risiko {0} sich nicht völlig vermeiden. (lassen)", accepte: [["lässt"]], indice: "sich lassen = peut être … (Passiversatz)" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Digitalisierung", droite: "la numérisation" }, { gauche: "der Datenschutz", droite: "la protection des données" }, { gauche: "abwägen", droite: "peser" }, { gauche: "bahnbrechend", droite: "révolutionnaire" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Argumentez (thèse/antithèse/synthèse) sur le progrès technique.", attendus: ["gleichwohl", "Fortschritt"], modele: "Es steht außer Frage, dass der technische Fortschritt unser Leben erleichtert. Gleichwohl drohen Abhängigkeit und Datenmissbrauch. Letztlich kommt es darauf an, verantwortungsvoll mit der Technik umzugehen." }
      ]
    },
    {
      id: "c2t07", numero: 7, titre: "Environnement et pollution", titreDE: "Umwelt und Umweltverschmutzung",
      theme: "Environnement et pollution", duree: 65,
      objectifs: ["Analyser des problèmes écologiques", "Formuler des solutions au passif"],
      grammairePoints: ["Passif", "Connecteurs de conséquence"],
      vocabulaire: [
        { de: "die Umweltverschmutzung", fr: "la pollution", ex: "Die Umweltverschmutzung bedroht Ökosysteme." },
        { de: "der Schadstoff", fr: "le polluant", ex: "Schadstoffe gelangen ins Grundwasser." },
        { de: "der Treibhausgasausstoß", fr: "les émissions de gaz à effet de serre", ex: "Der Treibhausgasausstoß muss sinken." },
        { de: "die Artenvielfalt", fr: "la biodiversité", ex: "Die Artenvielfalt schwindet." },
        { de: "die Kreislaufwirtschaft", fr: "l'économie circulaire", ex: "Die Kreislaufwirtschaft spart Ressourcen." },
        { de: "eindämmen", fr: "endiguer", ex: "Den Ausstoß gilt es einzudämmen." },
        { de: "der Raubbau", fr: "la surexploitation", ex: "Raubbau an der Natur rächt sich." },
        { de: "nachhaltig", fr: "durable", ex: "Wir brauchen nachhaltige Lösungen." }
      ],
      grammaire: [
        { titre: "Présenter un constat objectif", intro: "Le passif et ses substituts rendent le propos impersonnel ; des connecteurs marquent cause et conséquence.",
          tableau: { entetes: ["Forme/connecteur", "Exemple"], lignes: [["passif", "Schadstoffe werden freigesetzt."], ["sein + zu + Inf.", "Der Ausstoß ist zu senken."], ["conséquence", "infolgedessen / folglich", "Folglich schwindet die Artenvielfalt."], ["cause nominale", "aufgrund + Gén.", "aufgrund des Raubbaus"]] },
          note: "« Es gilt, … zu + Inf. » (il s'agit de) est une tournure soutenue d'appel à l'action." }
      ],
      dialogue: {
        titre: "Ökologischer Wandel", lieu: "Konferenz",
        lignes: [
          { loc: "Forscherin", de: "Die Artenvielfalt schwindet aufgrund des Raubbaus.", fr: "La biodiversité s'effondre à cause de la surexploitation." },
          { loc: "Politiker", de: "Was ist zu tun?", fr: "Que faut-il faire ?" },
          { loc: "Forscherin", de: "Der Ausstoß ist drastisch zu senken und Kreisläufe sind zu schließen.", fr: "Les émissions doivent être drastiquement réduites et les cycles fermés." },
          { loc: "Politiker", de: "Folglich brauchen wir verbindliche Vorgaben.", fr: "Par conséquent, il nous faut des règles contraignantes." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum schwindet die Artenvielfalt?", options: ["Aufgrund des Raubbaus", "Wegen des Regens", "Aus Zufall"], correct: 0, explication: "« aufgrund des Raubbaus »." },
        { type: "qcm", consigne: "Choisissez (conséquence).", question: "Die Wälder schwinden; ___ steigt das CO2.", options: ["folglich", "obwohl", "damit", "falls"], correct: 0, explication: "folglich = par conséquent." },
        { type: "trou", consigne: "Complétez (sein + zu + Inf.).", texte: "Der Ausstoß ist dringend zu {0}. (senken)", accepte: [["senken"]], indice: "sein + zu + infinitif (nécessité passive)" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Schadstoff", droite: "le polluant" }, { gauche: "die Artenvielfalt", droite: "la biodiversité" }, { gauche: "der Raubbau", droite: "la surexploitation" }, { gauche: "nachhaltig", droite: "durable" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Proposez deux mesures écologiques (passif / sein+zu+Inf.).", attendus: ["werden", "senken"], modele: "Der CO2-Ausstoß muss gesenkt werden. Ressourcen sind zu schonen, und eine Kreislaufwirtschaft ist aufzubauen." }
      ]
    },
    {
      id: "c2t08", numero: 8, titre: "La médecine", titreDE: "Medizin",
      theme: "Médecine", duree: 65,
      objectifs: ["Débattre d'éthique médicale", "Comprendre un texte spécialisé"],
      grammairePoints: ["Verbes modaux (devoir/pouvoir)", "Style nominal"],
      vocabulaire: [
        { de: "die Heilung", fr: "la guérison", ex: "Die Heilung verlief erfolgreich." },
        { de: "die Diagnose", fr: "le diagnostic", ex: "Die Diagnose war eindeutig." },
        { de: "die Vorsorge", fr: "la prévention", ex: "Vorsorge ist besser als Nachsorge." },
        { de: "die Nebenwirkung", fr: "l'effet secondaire", ex: "Das Medikament hat Nebenwirkungen." },
        { de: "die Ethik", fr: "l'éthique", ex: "Die medizinische Ethik stößt an Grenzen." },
        { de: "lindern", fr: "soulager", ex: "Das Mittel lindert die Schmerzen." },
        { de: "der Eingriff", fr: "l'intervention (chirurgicale)", ex: "Der Eingriff war notwendig." },
        { de: "die Lebenserwartung", fr: "l'espérance de vie", ex: "Die Lebenserwartung steigt stetig." }
      ],
      grammaire: [
        { titre: "Nécessité, possibilité et éthique", intro: "Le débat médical mobilise les modaux (müssen, dürfen, können) et un style nominal précis.",
          tableau: { entetes: ["Idée", "Moyen", "Exemple"], lignes: [["nécessité", "müssen / es gilt zu", "Risiken müssen abgewogen werden."], ["permission/limite", "dürfen", "Nicht alles, was möglich ist, darf man tun."], ["possibilité", "können / lassen sich", "Krankheiten lassen sich früh erkennen."], ["nominalisation", "die Früherkennung", "Die Früherkennung rettet Leben."]] },
          note: "« Nicht alles, was möglich ist, darf man tun » résume bien le dilemme éthique." }
      ],
      dialogue: {
        titre: "Ethik in der Medizin", lieu: "Klinik",
        lignes: [
          { loc: "Ärztin", de: "Die Früherkennung hat die Heilungschancen verbessert.", fr: "Le dépistage précoce a amélioré les chances de guérison." },
          { loc: "Patient", de: "Aber sind alle Eingriffe wirklich nötig?", fr: "Mais toutes les interventions sont-elles vraiment nécessaires ?" },
          { loc: "Ärztin", de: "Nicht alles, was möglich ist, sollte man auch tun.", fr: "Tout ce qui est possible ne devrait pas forcément être fait." },
          { loc: "Patient", de: "Es gilt also, Nutzen und Risiko abzuwägen.", fr: "Il s'agit donc de peser le bénéfice et le risque." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was hat die Heilungschancen verbessert?", options: ["Die Früherkennung", "Mehr Eingriffe", "Weniger Ärzte"], correct: 0, explication: "« Die Früherkennung … verbessert »." },
        { type: "qcm", consigne: "Choisissez (possibilité passive).", question: "Viele Krankheiten ___ sich früh erkennen.", options: ["lassen", "werden", "sind", "haben"], correct: 0, explication: "sich lassen = peuvent être … " },
        { type: "trou", consigne: "Complétez (modal).", texte: "Die Risiken {0} sorgfältig abgewogen werden. (devoir)", accepte: [["müssen"]], indice: "nécessité → müssen + passif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Diagnose", droite: "le diagnostic" }, { gauche: "die Vorsorge", droite: "la prévention" }, { gauche: "lindern", droite: "soulager" }, { gauche: "der Eingriff", droite: "l'intervention" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Donnez votre avis sur une question d'éthique médicale (modaux).", attendus: ["dürfen", "müssen"], modele: "Die Medizin kann heute vieles heilen. Doch nicht alles, was möglich ist, darf man tun. Nutzen und Risiken müssen sorgfältig abgewogen werden." }
      ]
    },
    {
      id: "c2t09", numero: 9, titre: "Compétences particulières", titreDE: "Besondere Fähigkeiten",
      theme: "Compétences particulières", duree: 60,
      objectifs: ["Décrire talents et expertises", "Valoriser un profil"],
      grammairePoints: ["Adjectifs et compléments", "Comparaison"],
      vocabulaire: [
        { de: "die Hochbegabung", fr: "le haut potentiel", ex: "Hochbegabung will gefördert werden." },
        { de: "das Talent", fr: "le talent", ex: "Sie hat ein außergewöhnliches Talent." },
        { de: "die Auffassungsgabe", fr: "la capacité de compréhension", ex: "Seine Auffassungsgabe ist beeindruckend." },
        { de: "vielseitig", fr: "polyvalent", ex: "Er ist beruflich sehr vielseitig." },
        { de: "die Ausdauer", fr: "l'endurance / la persévérance", ex: "Erfolg verlangt Ausdauer." },
        { de: "sich auszeichnen", fr: "se distinguer", ex: "Sie zeichnet sich durch Kreativität aus." },
        { de: "beherrschen", fr: "maîtriser", ex: "Er beherrscht fünf Sprachen." },
        { de: "die Spitzenleistung", fr: "la performance de pointe", ex: "Spitzenleistungen brauchen Übung." }
      ],
      grammaire: [
        { titre: "Décrire et valoriser", intro: "On valorise un profil avec des adjectifs à complément et des comparaisons.",
          tableau: { entetes: ["Structure", "Exemple"], lignes: [["sich auszeichnen durch + Akk.", "Er zeichnet sich durch Fleiß aus."], ["fähig zu + Dat.", "Sie ist zu Höchstleistungen fähig."], ["begabt in + Dat.", "begabt in Mathematik"], ["comparaison", "überdurchschnittlich begabt"]] },
          note: "« sich auszeichnen durch » (se distinguer par) valorise élégamment une qualité." }
      ],
      dialogue: {
        titre: "Im Bewerbungsgespräch", lieu: "Personalbüro",
        lignes: [
          { loc: "Personalerin", de: "Wodurch zeichnen Sie sich aus?", fr: "Par quoi vous distinguez-vous ?" },
          { loc: "Bewerber", de: "Durch eine schnelle Auffassungsgabe und große Ausdauer.", fr: "Par une compréhension rapide et une grande persévérance." },
          { loc: "Personalerin", de: "Und sprachlich?", fr: "Et sur le plan linguistique ?" },
          { loc: "Bewerber", de: "Ich beherrsche drei Sprachen fließend.", fr: "Je maîtrise trois langues couramment." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wodurch zeichnet sich der Bewerber aus?", options: ["Auffassungsgabe und Ausdauer", "Nur Glück", "Sport"], correct: 0, explication: "« schnelle Auffassungsgabe und große Ausdauer »." },
        { type: "qcm", consigne: "Choisissez la préposition.", question: "Sie zeichnet sich ___ Kreativität aus.", options: ["durch", "für", "von", "an"], correct: 0, explication: "sich auszeichnen durch + accusatif." },
        { type: "trou", consigne: "Complétez (fähig zu).", texte: "Er ist {0} Höchstleistungen fähig.", accepte: [["zu"]], indice: "fähig zu + datif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "das Talent", droite: "le talent" }, { gauche: "vielseitig", droite: "polyvalent" }, { gauche: "die Ausdauer", droite: "la persévérance" }, { gauche: "beherrschen", droite: "maîtriser" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Présentez vos points forts pour un poste (sich auszeichnen durch, beherrschen).", attendus: ["zeichne", "beherrsche"], modele: "Ich zeichne mich durch Ausdauer und Lernbereitschaft aus. Ich beherrsche mehrere Sprachen und arbeite sehr selbstständig." }
      ]
    },
    {
      id: "c2t10", numero: 10, titre: "Les sentiments", titreDE: "Gefühle",
      theme: "Sentiments", duree: 60,
      objectifs: ["Exprimer des émotions complexes", "Nuancer l'intensité"],
      grammairePoints: ["Adjectifs de sentiment", "Comparaison / intensité"],
      vocabulaire: [
        { de: "die Sehnsucht", fr: "la nostalgie / l'aspiration", ex: "Eine tiefe Sehnsucht ergriff sie." },
        { de: "die Geborgenheit", fr: "le sentiment de sécurité", ex: "Zuhause empfinde ich Geborgenheit." },
        { de: "die Wehmut", fr: "la mélancolie", ex: "Mit Wehmut blickte er zurück." },
        { de: "überwältigend", fr: "bouleversant", ex: "Die Freude war überwältigend." },
        { de: "ambivalent", fr: "ambivalent", ex: "Meine Gefühle sind ambivalent." },
        { de: "ergreifen", fr: "saisir (émotion)", ex: "Rührung ergriff die Gäste." },
        { de: "die Gelassenheit", fr: "la sérénité", ex: "Mit den Jahren kommt Gelassenheit." },
        { de: "verspüren", fr: "ressentir", ex: "Ich verspüre große Erleichterung." }
      ],
      grammaire: [
        { titre: "Nuancer l'émotion", intro: "On gradue l'intensité (zutiefst, überwältigend) et l'ambivalence (zwiespältig, einerseits … andererseits).",
          tableau: { entetes: ["Nuance", "Mot", "Exemple"], lignes: [["intensité forte", "zutiefst / überwältigend", "Ich war zutiefst berührt."], ["ambivalence", "zwiespältig", "Ich habe zwiespältige Gefühle."], ["atténuation", "ein wenig / leise", "eine leise Wehmut"], ["registre soutenu", "verspüren / empfinden", "Ich empfinde große Dankbarkeit."]] },
          note: "« empfinden » et « verspüren » remplacent « fühlen » dans un registre littéraire." }
      ],
      dialogue: {
        titre: "Abschied", lieu: "Bahnhof",
        lignes: [
          { loc: "Sie", de: "Ich verspüre eine seltsame Wehmut.", fr: "Je ressens une étrange mélancolie." },
          { loc: "Er", de: "Verständlich – Abschiede sind immer ambivalent.", fr: "Compréhensible — les adieux sont toujours ambivalents." },
          { loc: "Sie", de: "Einerseits Vorfreude, andererseits Trauer.", fr: "D'un côté de l'impatience joyeuse, de l'autre de la tristesse." },
          { loc: "Er", de: "Gerade das macht den Moment so kostbar.", fr: "C'est précisément ce qui rend l'instant si précieux." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie beschreibt er Abschiede?", options: ["Als ambivalent", "Als langweilig", "Als einfach"], correct: 0, explication: "« Abschiede sind immer ambivalent »." },
        { type: "qcm", consigne: "Choisissez (registre soutenu).", question: "Ich ___ tiefe Dankbarkeit. (ressentir, soutenu)", options: ["empfinde", "habe", "mache", "nehme"], correct: 0, explication: "empfinden = ressentir (soutenu)." },
        { type: "trou", consigne: "Complétez (intensité).", texte: "Ich war {0} berührt. (au plus profond)", accepte: [["zutiefst"]], indice: "intensité forte = zutiefst" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Sehnsucht", droite: "la nostalgie" }, { gauche: "die Geborgenheit", droite: "la sécurité" }, { gauche: "die Wehmut", droite: "la mélancolie" }, { gauche: "überwältigend", droite: "bouleversant" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez un sentiment ambivalent (einerseits … andererseits, registre soutenu).", attendus: ["einerseits", "andererseits"], modele: "Beim Abschied empfinde ich Zwiespalt: Einerseits verspüre ich Vorfreude auf das Neue, andererseits eine leise Wehmut über das Vertraute." }
      ]
    },
    {
      id: "c2t11", numero: 11, titre: "Le mode de vie", titreDE: "Lebensgestaltung",
      theme: "Vivre", duree: 60,
      objectifs: ["Réfléchir aux choix de vie", "Exprimer des valeurs"],
      grammairePoints: ["Konjunktiv II (souhait)", "Nominalisation"],
      vocabulaire: [
        { de: "die Lebensgestaltung", fr: "l'art de vivre / l'organisation de la vie", ex: "Jeder ist für seine Lebensgestaltung verantwortlich." },
        { de: "die Work-Life-Balance", fr: "l'équilibre vie/travail", ex: "Eine gute Work-Life-Balance ist mir wichtig." },
        { de: "der Verzicht", fr: "le renoncement", ex: "Manchmal bedeutet Glück Verzicht." },
        { de: "die Selbstbestimmung", fr: "l'autodétermination", ex: "Selbstbestimmung ist ein hohes Gut." },
        { de: "entschleunigen", fr: "ralentir (décélérer)", ex: "Viele möchten ihr Leben entschleunigen." },
        { de: "der Sinn", fr: "le sens", ex: "Die Suche nach Sinn treibt uns an." },
        { de: "bewusst", fr: "conscient / délibéré", ex: "Ich lebe bewusster als früher." },
        { de: "das Wohlbefinden", fr: "le bien-être", ex: "Das Wohlbefinden steht im Mittelpunkt." }
      ],
      grammaire: [
        { titre: "Exprimer valeurs et souhaits", intro: "On formule des idéaux avec le Konjunktiv II et on condense par la nominalisation.",
          tableau: { entetes: ["Idée", "Moyen", "Exemple"], lignes: [["souhait", "würde gern / wäre schön", "Ich würde gern bewusster leben."], ["idéal", "es käme darauf an", "Es käme darauf an, Prioritäten zu setzen."], ["nominalisation", "die Suche nach Sinn", "Die Suche nach Sinn prägt uns."], ["valeur", "Wert legen auf + Akk.", "Ich lege Wert auf Selbstbestimmung."]] },
          note: "« Wert legen auf + Akk. » (attacher de l'importance à) exprime élégamment une valeur." }
      ],
      dialogue: {
        titre: "Anders leben", lieu: "Gespräch",
        lignes: [
          { loc: "Jonas", de: "Ich würde gern mein Leben entschleunigen.", fr: "J'aimerais ralentir mon rythme de vie." },
          { loc: "Mara", de: "Worauf legst du dabei am meisten Wert?", fr: "À quoi attaches-tu le plus d'importance ?" },
          { loc: "Jonas", de: "Auf Zeit für die Familie und auf Sinn in der Arbeit.", fr: "Au temps pour la famille et au sens dans le travail." },
          { loc: "Mara", de: "Dann käme es darauf an, klare Prioritäten zu setzen.", fr: "Alors il s'agirait de fixer des priorités claires." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Worauf legt Jonas Wert?", options: ["Zeit für Familie und Sinn", "Nur Geld", "Mehr Arbeit"], correct: 0, explication: "« Zeit für die Familie und … Sinn »." },
        { type: "qcm", consigne: "Choisissez (valeur).", question: "Ich lege Wert ___ Selbstbestimmung.", options: ["auf", "an", "für", "über"], correct: 0, explication: "Wert legen auf + accusatif." },
        { type: "trou", consigne: "Complétez (souhait, Konjunktiv II).", texte: "Ich {0} gern bewusster leben.", accepte: [["würde"]], indice: "souhait → würde + infinitif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Verzicht", droite: "le renoncement" }, { gauche: "die Selbstbestimmung", droite: "l'autodétermination" }, { gauche: "entschleunigen", droite: "ralentir" }, { gauche: "das Wohlbefinden", droite: "le bien-être" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Décrivez votre idéal de vie (Wert legen auf, würde gern).", attendus: ["Wert", "würde"], modele: "Ich lege Wert auf eine gute Work-Life-Balance. Ich würde gern bewusster und entschleunigter leben, mit mehr Zeit für das Wesentliche." }
      ]
    },
    {
      id: "c2t12", numero: 12, titre: "Art et créativité", titreDE: "Kunst und Kreativität",
      theme: "Art et créativité", duree: 60,
      objectifs: ["Interpréter une œuvre", "Exprimer un jugement esthétique"],
      grammairePoints: ["Participes attributs", "Adjectifs nominalisés"],
      vocabulaire: [
        { de: "das Kunstwerk", fr: "l'œuvre d'art", ex: "Das Kunstwerk regt zum Nachdenken an." },
        { de: "die Aussage", fr: "le message / le propos", ex: "Was ist die Aussage des Bildes?" },
        { de: "die Schöpfung", fr: "la création", ex: "Jede Schöpfung trägt eine Handschrift." },
        { de: "der Ausdruck", fr: "l'expression", ex: "Kunst ist Ausdruck der Zeit." },
        { de: "deuten", fr: "interpréter", ex: "Man kann das Werk verschieden deuten." },
        { de: "abstrakt", fr: "abstrait", ex: "Abstrakte Kunst fordert den Betrachter." },
        { de: "gewagt", fr: "audacieux", ex: "Ein gewagtes, provozierendes Werk." },
        { de: "die Wirkung", fr: "l'effet", ex: "Die Wirkung des Bildes ist intensiv." }
      ],
      grammaire: [
        { titre: "Décrire et juger l'art", intro: "Le participe attribut (provozierend, gemalt) et l'adjectif nominalisé (das Schöne) servent l'analyse esthétique.",
          tableau: { entetes: ["Forme", "Exemple"], lignes: [["Partizip I attribut", "ein provozierendes Werk"], ["Partizip II attribut", "das gemalte Selbstporträt"], ["adjectif nominalisé", "das Schöne, das Wesentliche"], ["jugement", "Es lässt sich deuten als …"]] },
          note: "« Es lässt sich deuten als … » (cela peut s'interpréter comme) introduit une interprétation prudente." }
      ],
      dialogue: {
        titre: "Vor einem Gemälde", lieu: "Museum",
        lignes: [
          { loc: "Kritiker", de: "Dieses provozierende Werk lässt sich vielfältig deuten.", fr: "Cette œuvre provocante peut s'interpréter de multiples façons." },
          { loc: "Besucherin", de: "Für mich liegt darin das Wesentliche unserer Zeit.", fr: "Pour moi, l'essentiel de notre époque y réside." },
          { loc: "Kritiker", de: "Die Aussage ist bewusst offen gehalten.", fr: "Le propos est délibérément laissé ouvert." },
          { loc: "Besucherin", de: "Gerade das macht seine Wirkung aus.", fr: "C'est justement ce qui fait son effet." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie ist die Aussage des Werks?", options: ["Bewusst offen gehalten", "Eindeutig", "Banal"], correct: 0, explication: "« bewusst offen gehalten »." },
        { type: "qcm", consigne: "Choisissez (Partizip I attribut).", question: "ein ___ Werk (provozieren)", options: ["provozierendes", "provoziertes", "provozierte", "provoziert"], correct: 0, explication: "Partizip I : provozierend + -es." },
        { type: "trou", consigne: "Complétez (adjectif nominalisé).", texte: "Darin liegt das {0} unserer Zeit. (wesentlich)", accepte: [["Wesentliche"]], indice: "das + adjectif nominalisé → Wesentliche" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "das Kunstwerk", droite: "l'œuvre d'art" }, { gauche: "deuten", droite: "interpréter" }, { gauche: "gewagt", droite: "audacieux" }, { gauche: "die Wirkung", droite: "l'effet" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Interprétez une œuvre qui vous marque (participe attribut, deuten).", attendus: ["deuten", "Werk"], modele: "Dieses fesselnde Werk lässt sich als Kritik an der Konsumgesellschaft deuten. Seine offene Aussage und die kühnen Farben verstärken die Wirkung." }
      ]
    },
    {
      id: "c2t13", numero: 13, titre: "Livres et littérature", titreDE: "Bücher und Literatur",
      theme: "Livres et littérature", duree: 60,
      objectifs: ["Parler de littérature", "Résumer et commenter une œuvre"],
      grammairePoints: ["Temps du récit", "Propositions relatives"],
      vocabulaire: [
        { de: "der Roman", fr: "le roman", ex: "Der Roman spielt im 19. Jahrhundert." },
        { de: "die Handlung", fr: "l'intrigue", ex: "Die Handlung ist vielschichtig." },
        { de: "die Figur", fr: "le personnage", ex: "Die Hauptfigur ist zerrissen." },
        { de: "der Erzähler", fr: "le narrateur", ex: "Der Erzähler ist unzuverlässig." },
        { de: "die Metapher", fr: "la métaphore", ex: "Der Text steckt voller Metaphern." },
        { de: "der Höhepunkt", fr: "le point culminant", ex: "Der Höhepunkt überrascht den Leser." },
        { de: "anspruchsvoll", fr: "exigeant", ex: "Ein sprachlich anspruchsvoller Text." },
        { de: "fesseln", fr: "captiver", ex: "Das Buch fesselt von der ersten Seite an." }
      ],
      grammaire: [
        { titre: "Résumer une œuvre", intro: "On résume au présent (présent de narration) ou au prétérit, et on caractérise les personnages par des relatives.",
          tableau: { entetes: ["Outil", "Exemple"], lignes: [["présent de narration", "Der Roman erzählt von …"], ["prétérit (récit)", "Die Figur verließ ihre Heimat."], ["relative", "ein Held, der an sich zweifelt"], ["jugement", "Der Text besticht durch …"]] },
          note: "« bestechen durch + Akk. » (séduire par) introduit une appréciation littéraire soutenue." }
      ],
      dialogue: {
        titre: "Im Lesekreis", lieu: "Bibliothek",
        lignes: [
          { loc: "Lena", de: "Wovon handelt der Roman?", fr: "De quoi parle le roman ?" },
          { loc: "Tom", de: "Von einem Helden, der an seiner Berufung zweifelt.", fr: "D'un héros qui doute de sa vocation." },
          { loc: "Lena", de: "Und sprachlich?", fr: "Et sur le plan de la langue ?" },
          { loc: "Tom", de: "Anspruchsvoll, aber er besticht durch seine Metaphern.", fr: "Exigeant, mais il séduit par ses métaphores." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Worum geht es im Roman?", options: ["Um einen zweifelnden Helden", "Um einen Krieg", "Um eine Reise"], correct: 0, explication: "« ein Held, der an seiner Berufung zweifelt »." },
        { type: "qcm", consigne: "Choisissez (relative).", question: "ein Held, ___ an sich zweifelt", options: ["der", "den", "dem", "dessen"], correct: 0, explication: "sujet de la relative → der (nom. masc.)." },
        { type: "trou", consigne: "Complétez (appréciation).", texte: "Der Roman {0} durch seinen Stil. (séduire)", accepte: [["besticht"]], indice: "bestechen durch + accusatif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Handlung", droite: "l'intrigue" }, { gauche: "der Erzähler", droite: "le narrateur" }, { gauche: "die Metapher", droite: "la métaphore" }, { gauche: "fesseln", droite: "captiver" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Résumez et commentez un livre (relative + appréciation).", attendus: ["handelt", "der"], modele: "Der Roman handelt von einer Frau, die ihre Vergangenheit aufarbeitet. Die Handlung ist vielschichtig, und der Text besticht durch seine poetische Sprache." }
      ]
    },
    {
      id: "c2t14", numero: 14, titre: "La politique", titreDE: "Politik",
      theme: "Politique", duree: 65,
      objectifs: ["Débattre d'enjeux politiques", "Argumenter avec rigueur"],
      grammairePoints: ["Connecteurs argumentatifs", "Style nominal / passif"],
      vocabulaire: [
        { de: "die Gesetzgebung", fr: "la législation", ex: "Die Gesetzgebung muss angepasst werden." },
        { de: "der Sachverhalt", fr: "l'état de fait / la situation", ex: "Der Sachverhalt ist komplex." },
        { de: "die Mehrheit", fr: "la majorité", ex: "Die Mehrheit stimmte dafür." },
        { de: "die Maßnahme", fr: "la mesure", ex: "Die Maßnahme stößt auf Widerstand." },
        { de: "der Kompromiss", fr: "le compromis", ex: "Ohne Kompromiss geht es nicht." },
        { de: "umsetzen", fr: "mettre en œuvre", ex: "Reformen muss man auch umsetzen." },
        { de: "die Glaubwürdigkeit", fr: "la crédibilité", ex: "Politische Glaubwürdigkeit ist zerbrechlich." },
        { de: "abstimmen", fr: "voter", ex: "Das Parlament stimmt morgen ab." }
      ],
      grammaire: [
        { titre: "Argumenter une position politique", intro: "On articule une argumentation rigoureuse par des connecteurs et un style impersonnel (passif, nominalisation).",
          tableau: { entetes: ["Fonction", "Moyen", "Exemple"], lignes: [["restriction", "zwar … jedoch", "Zwar sinnvoll, jedoch teuer."], ["concession", "ungeachtet + Gén.", "ungeachtet der Kritik"], ["passif", "Maßnahmen werden ergriffen", "Es werden Maßnahmen ergriffen."], ["conséquence", "mithin", "Mithin ist Handeln geboten."]] },
          note: "« ungeachtet + génitif » (nonobstant) et « mithin » (par conséquent) sont des marqueurs très soutenus." }
      ],
      dialogue: {
        titre: "Politische Debatte", lieu: "Podium",
        lignes: [
          { loc: "Abgeordnete", de: "Ungeachtet der Kritik halten wir die Reform für notwendig.", fr: "Nonobstant les critiques, nous estimons la réforme nécessaire." },
          { loc: "Opposition", de: "Zwar ist das Ziel löblich, jedoch fehlt die Finanzierung.", fr: "Certes l'objectif est louable, mais le financement manque." },
          { loc: "Abgeordnete", de: "Es werden Kompromisse ausgehandelt werden müssen.", fr: "Des compromis devront être négociés." },
          { loc: "Opposition", de: "Mithin braucht es einen klaren Plan.", fr: "Par conséquent, il faut un plan clair." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was kritisiert die Opposition?", options: ["Die fehlende Finanzierung", "Das Ziel", "Die Sprache"], correct: 0, explication: "« jedoch fehlt die Finanzierung »." },
        { type: "qcm", consigne: "Choisissez (concession soutenue).", question: "___ der Kritik wurde die Reform beschlossen.", options: ["Ungeachtet", "Wegen", "Dank", "Trotzdem"], correct: 0, explication: "ungeachtet + génitif = nonobstant." },
        { type: "trou", consigne: "Complétez (passif).", texte: "Es {0} neue Maßnahmen ergriffen. (werden)", accepte: [["werden"]], indice: "pluriel passif → werden + participe" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Gesetzgebung", droite: "la législation" }, { gauche: "die Maßnahme", droite: "la mesure" }, { gauche: "umsetzen", droite: "mettre en œuvre" }, { gauche: "abstimmen", droite: "voter" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Argumentez pour ou contre une mesure politique (zwar … jedoch, passif).", attendus: ["zwar", "jedoch"], modele: "Zwar ist die Maßnahme gut gemeint, jedoch wirft ihre Umsetzung Fragen auf. Es müssen Kompromisse gefunden werden, ungeachtet der politischen Differenzen." }
      ]
    }
  ]
};
