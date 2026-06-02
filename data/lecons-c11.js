/* =====================================================================
   MODULE C1.1 — Vivre, ressentir, réussir
   Niveau C1 (CECRL). Thèmes : météo et small talk, langues, chance,
   stress, rire, succès (sport & métier), échecs. Vocabulaire abstrait,
   expressions idiomatiques, nuances. Explications en français.
   ===================================================================== */
window.MODULE_C11 = {
  id: "c1-1",
  titre: "C1.1 — Vivre, ressentir, réussir",
  sousTitre: "Leben, Fühlen, Erfolg",
  niveau: "C1",
  description:
    "On s'exprime avec finesse et idiomatisme : la météo comme prétexte au small talk, " +
    "le rapport aux langues, la chance, le stress, le rire, le succès et l'échec.",
  couleur: "#ea580c",
  lecons: [
    {
      id: "c1t01",
      vocCoursDE: [
        "Auf C1-Niveau wird selbst der **Small Talk** über das **Wetter** zu einer Kunst der Nuancierung. Schlüsselwörter sind *die Stimmung* (l'ambiance/l'humeur), *die Gesprächseröffnung* (l'amorce de conversation), *unverfänglich* (anodin), *die Floskel* (la formule toute faite), *plaudern* (bavarder).",
        "Das Wetter dient als **neutraler Einstieg** in fast jedes Gespräch. Über die reine Beschreibung hinaus lernst du, Stimmungen und feine Bewertungen auszudrücken: *drückend* (lourd, étouffant), *wechselhaft* (changeant), *strahlend* (radieux), *trüb* (maussade).",
        "Tipp: Achte darauf, wie geübte Sprecher vom Wetter zu einem eigentlichen Thema überleiten. Diese **Gesprächssteuerung** – Einstieg, Übergang, Vertiefung – ist auf C1-Niveau wichtiger als die einzelnen Vokabeln."
      ], numero: 1, titre: "Météo et small talk", titreDE: "Wetter und Small Talk",
      theme: "Météo et petites conversations", duree: 60,
      objectifs: ["Manier les expressions idiomatiques liées au temps", "Entretenir une conversation nuancée"],
      grammairePoints: ["Expressions idiomatiques", "Connecteurs de relance"],
      vocabulaire: [
        { de: "die Abwechslung", fr: "le changement / la variété", ex: "Das Wetter bietet wenig Abwechslung." },
        { de: "drückend", fr: "lourd (chaleur)", ex: "Die Hitze ist drückend." },
        { de: "der Aufheiterung", fr: "l'éclaircie", ex: "Am Nachmittag gibt es Aufheiterungen." },
        { de: "umschlagen", fr: "changer brusquement (temps)", ex: "Das Wetter ist umgeschlagen." },
        { de: "verhalten", fr: "réservé / mesuré", ex: "Er reagierte eher verhalten." },
        { de: "die Plauderei", fr: "le bavardage", ex: "Eine nette Plauderei lockert die Stimmung auf." },
        { de: "anregen", fr: "stimuler / lancer (une discussion)", ex: "Das Thema regt zum Gespräch an." },
        { de: "aus heiterem Himmel", fr: "à l'improviste (litt. d'un ciel serein)", ex: "Das kam aus heiterem Himmel." }
      ],
      grammaire: [
        { attention: "Les expressions imagées (*aus heiterem Himmel*) ne se traduisent **pas** mot à mot.", titre: "L'idiomatisme au service du small talk", intro: "Au C1, on dépasse les formules scolaires : on emploie des expressions imagées et des relances nuancées.",
          tableau: { entetes: ["Expression", "Sens", "Registre"], lignes: [["aus heiterem Himmel", "à l'improviste", "imagé"], ["bei dem Wetter", "par ce temps", "courant"], ["das schlägt aufs Gemüt", "ça plombe le moral", "idiomatique"], ["wie man so schön sagt", "comme on dit si bien", "relance"]] },
          note: "Une relance idiomatique (« Da haben Sie recht, wie man so schön sagt… ») marque l'aisance attendue au C1." }
      ],
      dialogue: {
        titre: "An der Bushaltestelle", lieu: "Straße",
        lignes: [
          { loc: "Frau A", de: "Was für ein Schmuddelwetter heute, nicht wahr?", fr: "Quel temps pourri aujourd'hui, n'est-ce pas ?" },
          { loc: "Herr B", de: "Ja, und das schlägt einem ganz schön aufs Gemüt.", fr: "Oui, et ça plombe pas mal le moral." },
          { loc: "Frau A", de: "Immerhin sollen am Wochenende Aufheiterungen kommen.", fr: "Au moins, des éclaircies sont prévues ce week-end." },
          { loc: "Herr B", de: "Hoffentlich, sonst dreht man noch durch.", fr: "Espérons-le, sinon on va devenir fou." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie ist die Stimmung wegen des Wetters?", options: ["Eher gedrückt", "Begeistert", "Gleichgültig"], correct: 0, explication: "« das schlägt einem aufs Gemüt »." },
        { type: "qcm", consigne: "Choisissez l'expression.", question: "« À l'improviste » se dit…", options: ["aus heiterem Himmel", "bei Wind und Wetter", "über den Wolken", "im siebten Himmel"], correct: 0, explication: "aus heiterem Himmel = à l'improviste." },
        { type: "trou", consigne: "Complétez (idiome).", texte: "Die schlechte Nachricht kam aus heiterem {0}.", accepte: [["Himmel"]], indice: "aus heiterem Himmel" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "drückend", droite: "lourd (chaleur)" }, { gauche: "umschlagen", droite: "changer brusquement" }, { gauche: "die Plauderei", droite: "le bavardage" }, { gauche: "verhalten", droite: "réservé" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Lancez une conversation idiomatique sur la météo et relancez (2-3 phrases).", attendus: ["Wetter", "nicht wahr"], modele: "Was für ein wechselhaftes Wetter, nicht wahr? Das schlägt einem richtig aufs Gemüt. Aber morgen soll es ja besser werden, wie man so schön sagt." }
      ]
    },
    {
      id: "c1t02",
      vocCoursDE: [
        "Dieses Thema betrachtet **Sprachen** und das Sprachenlernen aus einer reflektierten Perspektive. Schlüsselwörter sind *die Mehrsprachigkeit* (le plurilinguisme), *der Dialekt*, *die Muttersprache*, *der Spracherwerb* (l'acquisition du langage), *fließend* (couramment), *die Sprachbarriere*.",
        "Auf C1 geht es um abstrakte Aspekte: den **Wert** von Sprachen, ihren Einfluss auf das Denken, den Umgang mit Fehlern. Nützliche Wendungen sind *eine Sprache beherrschen* (maîtriser), *sich verständigen* (se faire comprendre), *sich ausdrücken* (s'exprimer).",
        "Tipp: Reflektiere auf Deutsch über deine eigene Sprachbiografie: Welche Sprachen sprichst du, wie hast du sie gelernt, was bedeuten sie dir? Solche reflektierten, persönlichen Texte sind typisch für das C1-Niveau."
      ], numero: 2, titre: "Les langues", titreDE: "Sprachen",
      theme: "Langues", duree: 60,
      objectifs: ["Réfléchir au plurilinguisme", "Argumenter sur l'apprentissage des langues"],
      grammairePoints: ["Nominalisation", "Connecteurs d'argumentation"],
      vocabulaire: [
        { de: "die Mehrsprachigkeit", fr: "le plurilinguisme", ex: "Mehrsprachigkeit ist ein Vorteil." },
        { de: "der Spracherwerb", fr: "l'acquisition d'une langue", ex: "Der Spracherwerb beginnt früh." },
        { de: "die Muttersprache", fr: "la langue maternelle", ex: "Seine Muttersprache ist Türkisch." },
        { de: "sich aneignen", fr: "s'approprier / acquérir", ex: "Ich habe mir das Vokabular angeeignet." },
        { de: "die Verständigung", fr: "la communication / l'entente", ex: "Sprache dient der Verständigung." },
        { de: "fließend", fr: "couramment", ex: "Sie spricht fließend drei Sprachen." },
        { de: "die Nuance", fr: "la nuance", ex: "Es kommt auf die Nuancen an." },
        { de: "der Dialekt", fr: "le dialecte", ex: "Den Dialekt verstehe ich kaum." }
      ],
      grammaire: [
        { attention: "Le style nominal se construit avec une préposition (*durch, wegen, trotz*) + nom.", titre: "Du verbe au nom : le style nominal", intro: "Au C1, l'écrit privilégie souvent la nominalisation, plus dense et abstraite.",
          tableau: { entetes: ["Style verbal", "Style nominal"], lignes: [["weil man Sprachen lernt", "wegen des Sprachenlernens"], ["nachdem man sich angeeignet hat", "nach der Aneignung"], ["dass man sich verständigt", "die Verständigung"], ["indem man übt", "durch (das) Üben"]] },
          note: "La nominalisation s'accompagne de prépositions (durch, bei, trotz, wegen) et d'un éventuel génitif." }
      ],
      dialogue: {
        titre: "Über das Sprachenlernen", lieu: "Universität",
        lignes: [
          { loc: "Dozentin", de: "Worin liegt für Sie der größte Nutzen der Mehrsprachigkeit?", fr: "Où réside selon vous le plus grand bénéfice du plurilinguisme ?" },
          { loc: "Student", de: "Vor allem in der Verständigung zwischen Kulturen.", fr: "Surtout dans la communication entre les cultures." },
          { loc: "Dozentin", de: "Und wie eignen Sie sich neue Sprachen an?", fr: "Et comment acquérez-vous de nouvelles langues ?" },
          { loc: "Student", de: "Durch konsequentes Üben und viel Lektüre.", fr: "Par une pratique régulière et beaucoup de lectures." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Worin sieht der Student den Nutzen?", options: ["In der Verständigung zwischen Kulturen", "Im Geldverdienen", "Im Reisen"], correct: 0, explication: "« in der Verständigung zwischen Kulturen »." },
        { type: "qcm", consigne: "Choisissez la nominalisation.", question: "weil man übt → ___ des Übens", options: ["wegen", "obwohl", "indem", "damit"], correct: 0, explication: "weil → wegen + génitif (style nominal)." },
        { type: "trou", consigne: "Complétez (style nominal).", texte: "Durch konsequentes {0} verbessert man sich. (üben → nom)", accepte: [["Üben"]], indice: "verbe nominalisé : das Üben" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Mehrsprachigkeit", droite: "le plurilinguisme" }, { gauche: "der Spracherwerb", droite: "l'acquisition" }, { gauche: "die Verständigung", droite: "la communication" }, { gauche: "sich aneignen", droite: "acquérir" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Argumentez en 3 phrases pour le plurilinguisme (style soutenu, nominalisations).", attendus: ["Mehrsprachigkeit", "Verständigung"], modele: "Die Mehrsprachigkeit fördert die Verständigung zwischen Kulturen. Durch den frühen Spracherwerb fällt das Lernen leichter. Letztlich erweitert jede neue Sprache den eigenen Horizont." }
      ]
    },
    {
      id: "c1t03",
      vocCoursDE: [
        "In diesem Thema geht es um das **Glück** im weiteren Sinne. Das deutsche Wort *das Glück* umfasst zwei Bedeutungen: **la chance** (« *Glück haben* ») und **le bonheur** (« *das Glück finden* »). Diese Doppeldeutigkeit ist zentral.",
        "Auf C1 unterscheidest du feine Nuancen: *die Zufriedenheit* (la satisfaction durable), *die Freude* (la joie momentanée), *das Wohlbefinden* (le bien-être), *die Gelassenheit* (la sérénité). Nützliche Wendungen: *zum Glück* (heureusement), *Glück im Unglück* (un mal pour un bien).",
        "Tipp: Diskutiere die Frage « *Was bedeutet Glück für dich?* » und begründe deine Meinung. Über solche abstrakten, fast philosophischen Themen differenziert zu sprechen, ist genau die Kompetenz, die auf C1 erwartet wird."
      ], numero: 3, titre: "La chance", titreDE: "Glück",
      theme: "Chance", duree: 55,
      objectifs: ["Distinguer chance et bonheur", "Employer des expressions idiomatiques"],
      grammairePoints: ["Glück / Zufall", "Konjunktiv II (irréel)"],
      vocabulaire: [
        { de: "der Zufall", fr: "le hasard", ex: "Es war reiner Zufall." },
        { de: "das Schicksal", fr: "le destin", ex: "Man kann dem Schicksal nicht entkommen." },
        { de: "die Gelegenheit", fr: "l'occasion", ex: "Er nutzte die Gelegenheit." },
        { de: "begünstigen", fr: "favoriser", ex: "Das Wetter begünstigte die Ernte." },
        { de: "verdanken", fr: "devoir (qqch à qqn)", ex: "Den Erfolg verdankt sie ihrem Fleiß." },
        { de: "Schwein haben", fr: "avoir du bol (fam.)", ex: "Da hast du echt Schwein gehabt!" },
        { de: "die Fügung", fr: "le concours de circonstances", ex: "Eine glückliche Fügung." },
        { de: "ausschlaggebend", fr: "décisif", ex: "Sein Einsatz war ausschlaggebend." }
      ],
      grammaire: [
        { attention: "Distingue *Glück* (chance/bonheur), *Zufall* (hasard) et *Schicksal* (destin).", titre: "Chance, hasard et irréel", intro: "On distingue « Glück » (chance/bonheur), « Zufall » (hasard) et « Schicksal » (destin). L'irréel (Konjunktiv II) sert au « et si… ».",
          tableau: { entetes: ["Idée", "Mot / forme", "Exemple"], lignes: [["chance", "Glück haben", "Ich habe Glück gehabt."], ["hasard", "rein zufällig", "Wir trafen uns rein zufällig."], ["irréel", "hätte … gehabt", "Ohne Zufall hätte ich sie nie getroffen."], ["familier", "Schwein haben", "Da hast du Schwein gehabt."]] },
          note: "« verdanken » + datif (à qui) + accusatif (quoi) : « Das verdanke ich dir »." }
      ],
      dialogue: {
        titre: "Ein glücklicher Zufall", lieu: "Café",
        lignes: [
          { loc: "Lea", de: "Wie hast du eigentlich deinen Job bekommen?", fr: "Comment as-tu eu ton travail, au fait ?" },
          { loc: "Tom", de: "Reiner Zufall. Ich traf den Chef beim Joggen.", fr: "Pur hasard. J'ai rencontré le patron en faisant mon jogging." },
          { loc: "Lea", de: "Da hast du wirklich Schwein gehabt.", fr: "Tu as vraiment eu du bol." },
          { loc: "Tom", de: "Stimmt, ohne diese Begegnung wäre alles anders gekommen.", fr: "C'est vrai, sans cette rencontre, tout aurait été différent." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie bekam Tom den Job?", options: ["Durch einen Zufall", "Durch eine Bewerbung", "Durch die Familie"], correct: 0, explication: "« Reiner Zufall »." },
        { type: "qcm", consigne: "Choisissez (irréel passé).", question: "Ohne den Zufall ___ ich sie nie getroffen.", options: ["hätte", "habe", "würde", "wäre"], correct: 0, explication: "irréel passé : hätte … getroffen." },
        { type: "trou", consigne: "Complétez (idiome familier).", texte: "Bei der Prüfung hast du echt {0} gehabt!", accepte: [["Schwein"]], indice: "Schwein haben = avoir du bol" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Zufall", droite: "le hasard" }, { gauche: "das Schicksal", droite: "le destin" }, { gauche: "verdanken", droite: "devoir à" }, { gauche: "ausschlaggebend", droite: "décisif" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Racontez un heureux hasard de votre vie (Zufall, Glück, Konjunktiv II).", attendus: ["Zufall", "hätte"], modele: "Durch einen glücklichen Zufall habe ich meinen besten Freund kennengelernt. Ohne diese Begegnung hätte ich vieles verpasst." }
      ]
    },
    {
      id: "c1t04",
      vocCoursDE: [
        "Dieses Thema behandelt den **Stress** und den Umgang damit. Schlüsselwörter sind *der Stress*, *die Belastung* (la charge), *die Überforderung* (le surmenage), *der Druck* (la pression), *die Entspannung* (la détente), *der Ausgleich* (l'équilibre).",
        "Auf C1 sprichst du über **Ursachen** und **Bewältigung**: *unter Druck stehen*, *mit Stress umgehen* (gérer le stress), *abschalten* (déconnecter), *einen Ausgleich finden*. Beachte die Nuance zwischen *gestresst* (stressé) und *angespannt* (tendu).",
        "Tipp: Beschreibe deine eigenen Stressquellen und Strategien dagegen. Ursachen, Folgen und Lösungen zu strukturieren ist eine klassische C1-Aufgabe, die genaues Vokabular und logische Konnektoren verlangt."
      ], numero: 4, titre: "Le stress", titreDE: "Stress",
      theme: "Stress", duree: 60,
      objectifs: ["Décrire causes et effets du stress", "Proposer des stratégies"],
      grammairePoints: ["Causes/conséquences", "Verbes pronominaux"],
      vocabulaire: [
        { de: "die Belastung", fr: "la charge / la pression", ex: "Die Belastung ist enorm." },
        { de: "der Leistungsdruck", fr: "la pression de la performance", ex: "Der Leistungsdruck nimmt zu." },
        { de: "das Burnout", fr: "le burn-out", ex: "Er erlitt ein Burnout." },
        { de: "sich überfordern", fr: "se surmener", ex: "Überfordere dich nicht!" },
        { de: "die Gelassenheit", fr: "la sérénité", ex: "Mit Gelassenheit geht vieles leichter." },
        { de: "bewältigen", fr: "surmonter / gérer", ex: "Sie bewältigt den Stress gut." },
        { de: "abschalten", fr: "déconnecter", ex: "Am Abend kann ich nicht abschalten." },
        { de: "die Erschöpfung", fr: "l'épuisement", ex: "Die Erschöpfung war total." }
      ],
      grammaire: [
        { attention: "*folglich/infolgedessen* (conséquence) → verbe en **2ᵉ** ; *indem* (moyen) → verbe **à la fin**.", titre: "Exprimer cause, effet et remède", intro: "On relie tension et conséquences avec des connecteurs variés et on nuance les remèdes.",
          tableau: { entetes: ["Fonction", "Connecteur", "Exemple"], lignes: [["cause", "aufgrund + Gén.", "aufgrund des Drucks"], ["conséquence", "folglich / infolgedessen", "Folglich war er erschöpft."], ["condition", "sofern", "Sofern man Pausen macht, …"], ["remède", "indem", "Man entspannt sich, indem man atmet."]] },
          note: "« infolgedessen » (par conséquent) et « folglich » sont des connecteurs soutenus de conséquence (verbe en 2e position)." }
      ],
      dialogue: {
        titre: "Zu viel Druck", lieu: "Büro",
        lignes: [
          { loc: "Kollegin", de: "Du wirkst völlig erschöpft.", fr: "Tu as l'air complètement épuisé." },
          { loc: "Kollege", de: "Der Leistungsdruck bringt mich an meine Grenzen.", fr: "La pression de la performance me pousse à bout." },
          { loc: "Kollegin", de: "Du solltest lernen abzuschalten, sonst droht ein Burnout.", fr: "Tu devrais apprendre à déconnecter, sinon tu risques un burn-out." },
          { loc: "Kollege", de: "Du hast recht, ich brauche mehr Gelassenheit.", fr: "Tu as raison, j'ai besoin de plus de sérénité." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was droht dem Kollegen?", options: ["Ein Burnout", "Eine Kündigung", "Ein Umzug"], correct: 0, explication: "« sonst droht ein Burnout »." },
        { type: "qcm", consigne: "Choisissez (conséquence soutenue).", question: "Er machte keine Pausen; ___ war er bald erschöpft.", options: ["folglich", "weil", "obwohl", "damit"], correct: 0, explication: "folglich = par conséquent (verbe en 2e)." },
        { type: "trou", consigne: "Complétez (moyen).", texte: "Man entspannt sich, {0} man tief atmet.", accepte: [["indem"]], indice: "indem = en (moyen)" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Belastung", droite: "la charge" }, { gauche: "bewältigen", droite: "surmonter" }, { gauche: "abschalten", droite: "déconnecter" }, { gauche: "die Gelassenheit", droite: "la sérénité" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez une cause de stress et une stratégie (aufgrund, indem).", attendus: ["Stress", "indem"], modele: "Aufgrund des hohen Leistungsdrucks fühle ich mich oft gestresst. Ich bewältige das, indem ich regelmäßig Sport treibe und bewusst abschalte." }
      ]
    },
    {
      id: "c1t05",
      vocCoursDE: [
        "In diesem Thema geht es um das **Lachen** und den **Humor**. Schlüsselwörter sind *der Humor*, *der Witz* (la blague), *die Ironie*, *der Spott* (la moquerie), *zum Lachen bringen* (faire rire), *sich amüsieren*, *der Sinn für Humor*.",
        "Humor ist stark **kulturgeprägt**: Was in einem Land lustig ist, kann anderswo unverständlich sein. Nützliche Unterscheidungen: *der Witz* (blague racontée), *die Pointe* (la chute), *die Ironie* (dire le contraire de ce qu'on pense), *der Sarkasmus*.",
        "Tipp: Überlege, worüber in deiner Kultur gelacht wird, und vergleiche es mit dem deutschen Humor. Über etwas so Subtiles wie Humor zu sprechen, schult deine Ausdrucksfähigkeit auf höchstem Niveau."
      ], numero: 5, titre: "Le rire", titreDE: "Lachen und Humor",
      theme: "Rire", duree: 55,
      objectifs: ["Parler du rôle de l'humour", "Comprendre l'humour et l'ironie"],
      grammairePoints: ["Ironie / nuance", "Comparaisons"],
      vocabulaire: [
        { de: "der Humor", fr: "l'humour", ex: "Er hat einen feinen Humor." },
        { de: "die Ironie", fr: "l'ironie", ex: "Ironie wird oft missverstanden." },
        { de: "der Witz", fr: "la blague", ex: "Sie erzählt gern Witze." },
        { de: "schlagfertig", fr: "qui a de la répartie", ex: "Er ist sehr schlagfertig." },
        { de: "zum Lachen bringen", fr: "faire rire", ex: "Sie bringt alle zum Lachen." },
        { de: "die Selbstironie", fr: "l'autodérision", ex: "Selbstironie wirkt sympathisch." },
        { de: "albern", fr: "ridicule / niais", ex: "Das war ein alberner Scherz." },
        { de: "verkneifen", fr: "réprimer (un rire)", ex: "Ich konnte mir das Lachen nicht verkneifen." }
      ],
      grammaire: [
        { attention: "L'**ironie** dit le contraire de ce qu'on pense : attention au ton, sinon malentendu.", titre: "Humour, ironie et nuance", intro: "L'ironie dit le contraire de ce qu'on pense ; les comparaisons imagées colorent le propos.",
          tableau: { entetes: ["Procédé", "Exemple", "Effet"], lignes: [["ironie", "Na toll, schon wieder Regen!", "contraire de « toll »"], ["comparaison", "Er lachte wie ein Kind.", "image"], ["litote", "nicht gerade lustig", "atténuation"], ["exagération", "Ich habe mich totgelacht.", "humour"]] },
          note: "« sich totlachen », « Tränen lachen » : l'exagération est typique de l'expression idiomatique." }
      ],
      dialogue: {
        titre: "Ein guter Abend", lieu: "Zuhause",
        lignes: [
          { loc: "Mia", de: "Der Comedian gestern war der Wahnsinn!", fr: "L'humoriste hier était dingue !" },
          { loc: "Jan", de: "Stimmt, ich habe mich fast totgelacht.", fr: "C'est vrai, j'ai failli mourir de rire." },
          { loc: "Mia", de: "Vor allem seine Selbstironie war klasse.", fr: "Surtout son autodérision était géniale." },
          { loc: "Jan", de: "Und so schlagfertig! Da kam ich aus dem Lachen nicht raus.", fr: "Et quelle répartie ! Je n'arrivais plus à m'arrêter de rire." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was schätzten beide besonders?", options: ["Die Selbstironie", "Die Musik", "Das Essen"], correct: 0, explication: "« seine Selbstironie war klasse »." },
        { type: "qcm", consigne: "Choisissez (ironie).", question: "« Na toll, schon wieder Regen! » est…", options: ["ironique (négatif)", "un compliment", "une question"], correct: 0, explication: "ironie : on pense le contraire de « toll »." },
        { type: "trou", consigne: "Complétez (idiome d'exagération).", texte: "Der Film war so witzig, ich habe mich fast {0}gelacht.", accepte: [["tot"]], indice: "sich totlachen" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "schlagfertig", droite: "avoir de la répartie" }, { gauche: "die Selbstironie", droite: "l'autodérision" }, { gauche: "albern", droite: "niais" }, { gauche: "der Witz", droite: "la blague" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Expliquez le rôle de l'humour dans la vie (2-3 phrases nuancées).", attendus: ["Humor", "Lachen"], modele: "Humor hilft, schwierige Situationen zu entschärfen. Wer über sich selbst lachen kann, wirkt sympathisch. Lachen verbindet die Menschen." }
      ]
    },
    {
      id: "c1t06",
      vocCoursDE: [
        "Dieses Thema behandelt den **Erfolg** in Sport und Beruf. Schlüsselwörter sind *der Erfolg*, *erfolgreich*, *die Leistung* (la performance), *der Ehrgeiz* (l'ambition), *ein Ziel erreichen* (atteindre un but), *sich durchsetzen* (s'imposer).",
        "Auf C1 unterscheidest du **Voraussetzungen** und **Wege** zum Erfolg: *die Begabung* (le talent), *die Disziplin*, *die Ausdauer* (la persévérance), *der Durchbruch* (la percée). Nützliche Wendungen: *Erfolg haben*, *aus eigener Kraft* (par ses propres moyens).",
        "Tipp: Diskutiere, was Erfolg für dich bedeutet und wie man ihn erreicht. Solche wertenden, argumentativen Texte mit präzisem Vokabular sind charakteristisch für das C1-Niveau."
      ], numero: 6, titre: "Le succès : sport et métier", titreDE: "Erfolg: Sport und Beruf",
      theme: "Succès : sport et profession", duree: 60,
      objectifs: ["Analyser les facteurs de réussite", "Nuancer la notion de succès"],
      grammairePoints: ["Nominalisation", "Connecteurs en deux parties"],
      vocabulaire: [
        { de: "der Ehrgeiz", fr: "l'ambition", ex: "Ohne Ehrgeiz kein Erfolg." },
        { de: "die Leistung", fr: "la performance", ex: "Ihre Leistung war herausragend." },
        { de: "das Durchhaltevermögen", fr: "la persévérance", ex: "Erfolg braucht Durchhaltevermögen." },
        { de: "die Anerkennung", fr: "la reconnaissance", ex: "Er sucht Anerkennung." },
        { de: "sich durchsetzen", fr: "s'imposer", ex: "Sie hat sich gegen die Konkurrenz durchgesetzt." },
        { de: "der Wettbewerb", fr: "la compétition", ex: "Der Wettbewerb ist hart." },
        { de: "scheitern", fr: "échouer", ex: "Viele scheitern am Druck." },
        { de: "die Niederlage", fr: "la défaite", ex: "Aus jeder Niederlage lernt man." }
      ],
      grammaire: [
        { attention: "Après **je** le verbe va à la **fin** ; après **desto**, en **2ᵉ** position.", titre: "Relier les facteurs : connecteurs en deux parties", intro: "Les connecteurs corrélés relient deux idées et nuancent (et… et, non seulement… mais aussi, plus… plus).",
          tableau: { entetes: ["Connecteur", "Sens", "Exemple"], lignes: [["sowohl … als auch", "aussi bien … que", "Erfolg verlangt sowohl Talent als auch Fleiß."], ["nicht nur … sondern auch", "non seulement … mais aussi", "Nicht nur im Sport, sondern auch im Beruf."], ["je … desto", "plus … plus", "Je härter das Training, desto größer der Erfolg."], ["zwar … aber", "certes … mais", "Zwar talentiert, aber undiszipliniert."]] },
          schemas: [{ legende: "je … desto : « desto » + comparatif + verbe à la fin… puis verbe en 2e.", mots: [{ m: "Je mehr man übt,", r: "je + comparatif (verbe fin)", c: "conj" }, { m: "desto besser", r: "desto + comparatif", c: "objet" }, { m: "wird", r: "verbe (2)", c: "verbe" }, { m: "man", r: "sujet", c: "fin" }] }],
          note: "Après « je … » le verbe va à la fin ; après « desto … » le verbe vient en 2e position." }
      ],
      dialogue: {
        titre: "Was ist Erfolg?", lieu: "Interview",
        lignes: [
          { loc: "Reporter", de: "Was war für Ihren Erfolg ausschlaggebend?", fr: "Qu'est-ce qui a été décisif pour votre succès ?" },
          { loc: "Sportlerin", de: "Sowohl hartes Training als auch mentale Stärke.", fr: "Aussi bien un entraînement dur que la force mentale." },
          { loc: "Reporter", de: "Und Rückschläge?", fr: "Et les revers ?" },
          { loc: "Sportlerin", de: "Je größer die Niederlage, desto mehr lernt man.", fr: "Plus la défaite est grande, plus on apprend." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was war ausschlaggebend?", options: ["Training und mentale Stärke", "Nur Talent", "Nur Glück"], correct: 0, explication: "« sowohl hartes Training als auch mentale Stärke »." },
        { type: "qcm", consigne: "Choisissez le connecteur.", question: "___ mehr man trainiert, desto besser wird man.", options: ["Je", "Wenn", "Als", "Weil"], correct: 0, explication: "je … desto = plus … plus." },
        { type: "trou", consigne: "Complétez (nicht nur … sondern auch).", texte: "Erfolg zählt nicht nur im Sport, {0} auch im Beruf.", accepte: [["sondern"]], indice: "nicht nur … sondern auch" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Ehrgeiz", droite: "l'ambition" }, { gauche: "das Durchhaltevermögen", droite: "la persévérance" }, { gauche: "sich durchsetzen", droite: "s'imposer" }, { gauche: "die Niederlage", droite: "la défaite" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Définissez le succès selon vous (connecteurs en deux parties).", attendus: ["sowohl", "als auch"], modele: "Erfolg bedeutet für mich sowohl berufliche Anerkennung als auch persönliche Zufriedenheit. Je mehr man sich anstrengt, desto wertvoller fühlt sich der Erfolg an." }
      ]
    },
    {
      id: "c1t07",
      vocCoursDE: [
        "Im Gegensatz zum Erfolg behandelt dieses Thema das **Scheitern** und den **Misserfolg**. Schlüsselwörter sind *das Scheitern*, *der Misserfolg* (l'échec), *die Niederlage* (la défaite), *aufgeben* (abandonner), *die Enttäuschung* (la déception), *aus Fehlern lernen*.",
        "Auf C1 geht es um die **positive Seite** des Scheiterns: *die Fehlerkultur* (la culture de l'erreur), *einen Rückschlag verkraften* (encaisser un revers), *es erneut versuchen*. Nützlich ist die Wendung *scheitern an* (+ Dativ): « *Er ist an der Prüfung gescheitert* ».",
        "Tipp: Erzähle von einem Misserfolg und was du daraus gelernt hast. Über ein heikles, persönliches Thema reflektiert und konstruktiv zu sprechen, zeigt echte sprachliche und kommunikative Reife."
      ], numero: 7, titre: "Les échecs", titreDE: "Scheitern und Misserfolg",
      theme: "Échecs", duree: 60,
      objectifs: ["Parler de l'échec et du rebond", "Exprimer l'irréel du passé (regret)"],
      grammairePoints: ["Konjunktiv II passé", "hätte … sollen"],
      vocabulaire: [
        { de: "der Misserfolg", fr: "l'échec", ex: "Ein Misserfolg ist kein Weltuntergang." },
        { de: "der Rückschlag", fr: "le revers", ex: "Nach dem Rückschlag gab er nicht auf." },
        { de: "die Niederlage", fr: "la défaite", ex: "Die Niederlage schmerzte." },
        { de: "aufgeben", fr: "abandonner", ex: "Gib niemals auf!" },
        { de: "die Lehre ziehen", fr: "tirer une leçon", ex: "Daraus sollte man eine Lehre ziehen." },
        { de: "der Fehlschlag", fr: "l'échec / le ratage", ex: "Das Projekt war ein Fehlschlag." },
        { de: "sich aufraffen", fr: "se ressaisir", ex: "Er raffte sich wieder auf." },
        { de: "die Widerstandskraft", fr: "la résilience", ex: "Widerstandskraft hilft beim Neuanfang." }
      ],
      grammaire: [
        { attention: "*Ich **hätte** mehr lernen **sollen*** — ordre final : infinitif + modal (*lernen sollen*).", titre: "Regret et reproche : Konjunktiv II passé", intro: "Pour dire « j'aurais dû / je n'aurais pas dû », on emploie « hätte … sollen / können » + double infinitif à la fin.",
          tableau: { entetes: ["Idée", "Forme", "Exemple"], lignes: [["regret", "hätte … sollen", "Ich hätte mehr üben sollen."], ["regret négatif", "hätte … nicht sollen", "Ich hätte das nicht sagen sollen."], ["possibilité ratée", "hätte … können", "Er hätte gewinnen können."], ["condition irréelle", "wäre … gewesen", "Mit mehr Mut wäre es anders gewesen."]] },
          schemas: [{ legende: "Regret : hätte (2) … double infinitif (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "hätte", r: "hätte (2)", c: "verbe" }, { m: "mehr", r: "complément", c: "objet" }, { m: "üben sollen", r: "inf. + modal (fin)", c: "fin" }] }],
          note: "L'ordre final est « infinitif + modal à l'infinitif » : « üben sollen », « gewinnen können »." }
      ],
      dialogue: {
        titre: "Nach der Prüfung", lieu: "Uni",
        lignes: [
          { loc: "Nora", de: "Ich bin leider durchgefallen.", fr: "Malheureusement, j'ai échoué." },
          { loc: "Ben", de: "Das tut mir leid. Aber gib nicht auf.", fr: "Je suis désolé. Mais n'abandonne pas." },
          { loc: "Nora", de: "Ich hätte einfach früher anfangen sollen.", fr: "J'aurais simplement dû commencer plus tôt." },
          { loc: "Ben", de: "Zieh deine Lehre daraus und raff dich wieder auf!", fr: "Tire-en la leçon et ressaisis-toi !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was bereut Nora?", options: ["Nicht früher angefangen zu haben", "Zu viel gelernt zu haben", "Die Uni gewechselt zu haben"], correct: 0, explication: "« Ich hätte früher anfangen sollen »." },
        { type: "qcm", consigne: "Choisissez (regret).", question: "Ich ___ mehr üben sollen.", options: ["hätte", "habe", "würde", "wäre"], correct: 0, explication: "regret passé : hätte … sollen." },
        { type: "trou", consigne: "Complétez (ordre final).", texte: "Er hätte den Wettkampf gewinnen {0}. (können)", accepte: [["können"]], indice: "infinitif + modal : gewinnen können" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Rückschlag", droite: "le revers" }, { gauche: "die Lehre ziehen", droite: "tirer une leçon" }, { gauche: "sich aufraffen", droite: "se ressaisir" }, { gauche: "die Widerstandskraft", droite: "la résilience" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Parlez d'un échec et de ce que vous auriez pu faire autrement (hätte … sollen/können).", attendus: ["hätte", "sollen"], modele: "Ich hätte mich besser vorbereiten sollen. Mit mehr Geduld hätte ich es schaffen können. Trotzdem habe ich daraus eine wichtige Lehre gezogen." }
      ]
    }
  ]
};
