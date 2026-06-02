/* =====================================================================
   MODULE B1.2 — Apprentissage, mobilité, émotions & vie sociale
   Niveau B1 (CECRL). Thèmes : apprendre tout au long de la vie, école,
   circulation et transports, voyages, sentiments, alimentation, invitations.
   Explications en français, contenu en allemand.
   ===================================================================== */
window.MODULE_B12 = {
  id: "b1-2",
  titre: "B1.2 — Apprentissage, mobilité & émotions",
  sousTitre: "Lernen, Mobilität & Gefühle",
  niveau: "B1",
  description:
    "On consolide le B1 : apprendre une langue et apprendre toute sa vie, " +
    "l'école et les diplômes, la circulation et les transports, les voyages, " +
    "les sentiments et le caractère, la cuisine et les invitations.",
  couleur: "#9333ea",
  lecons: [
    {
      id: "b1t15", numero: 15, titre: "L'apprentissage des langues", titreDE: "Sprachen lernen",
      theme: "Apprentissage des langues", duree: 55,
      objectifs: ["Parler de sa façon d'apprendre", "Exprimer une condition (si…)"],
      grammairePoints: ["Konjunktiv II (wenn)", "Indicateurs de conditionnel"],
      vocabulaire: [
        { de: "die Fremdsprache", fr: "la langue étrangère", ex: "Englisch ist eine Fremdsprache." },
        { de: "die Aussprache", fr: "la prononciation", ex: "Ihre Aussprache ist gut." },
        { de: "der Wortschatz", fr: "le vocabulaire", ex: "Ich erweitere meinen Wortschatz." },
        { de: "auswendig lernen", fr: "apprendre par cœur", ex: "Ich lerne Vokabeln auswendig." },
        { de: "die Muttersprache", fr: "la langue maternelle", ex: "Meine Muttersprache ist Französisch." },
        { de: "der Fehler", fr: "l'erreur", ex: "Aus Fehlern lernt man." },
        { de: "fließend", fr: "couramment", ex: "Sie spricht fließend Deutsch." },
        { de: "üben", fr: "s'entraîner", ex: "Ich übe jeden Tag." }
      ],
      grammaire: [
        { attention: "*Wenn ich … **hätte**, **würde** ich…* ; on peut inverser sans *wenn* (*Hätte ich…*).", titre: "Exprimer une condition (wenn + Konjunktiv II)", intro: "Pour dire « si… (alors) je… », on emploie souvent würde / hätte / wäre.",
          tableau: { entetes: ["Condition", "Conséquence"], lignes: [["Wenn ich mehr Zeit hätte,", "würde ich Spanisch lernen."], ["Wenn ich du wäre,", "würde ich laut üben."], ["Wenn ich im Ausland lebte,", "würde ich schneller lernen."]] },
          note: "Souvent : « Wenn …, würde ich … ». L'ordre peut s'inverser : « Ich würde …, wenn … »." }
      ],
      dialogue: {
        titre: "Tipps zum Lernen", lieu: "Sprachkurs",
        lignes: [
          { loc: "Mia", de: "Wie lernst du neue Wörter?", fr: "Comment apprends-tu les nouveaux mots ?" },
          { loc: "Jan", de: "Ich lerne sie nicht nur auswendig, ich benutze sie auch.", fr: "Je ne les apprends pas seulement par cœur, je les utilise aussi." },
          { loc: "Mia", de: "Und wenn du einen Fehler machst?", fr: "Et si tu fais une erreur ?" },
          { loc: "Jan", de: "Kein Problem – aus Fehlern lernt man am meisten.", fr: "Pas de problème — c'est des erreurs qu'on apprend le plus." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie lernt Jan Wörter?", options: ["Er benutzt sie", "Nur auswendig", "Gar nicht"], correct: 0, explication: "« ich benutze sie auch »." },
        { type: "qcm", consigne: "Choisissez (condition).", question: "Wenn ich mehr Zeit ___, würde ich Italienisch lernen.", options: ["hätte", "habe", "hatte", "haben"], correct: 0, explication: "wenn + Konjunktiv II → hätte." },
        { type: "trou", consigne: "Complétez (würde).", texte: "An deiner Stelle {0} ich jeden Tag üben.", accepte: [["würde"]], indice: "conseil : würde + infinitif" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Aussprache", droite: "la prononciation" }, { gauche: "der Wortschatz", droite: "le vocabulaire" }, { gauche: "fließend", droite: "couramment" }, { gauche: "der Fehler", droite: "l'erreur" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Dites ce que vous feriez si vous aviez plus de temps pour apprendre l'allemand.", attendus: ["wenn", "würde"], modele: "Wenn ich mehr Zeit hätte, würde ich jeden Tag laut lesen und Podcasts hören." }
      ]
    },
    {
      id: "b1t16", numero: 16, titre: "L'apprentissage permanent", titreDE: "Lebenslanges Lernen",
      theme: "Apprentissage permanent", duree: 50,
      objectifs: ["Parler de formation continue", "Justifier un but (pour…)"],
      grammairePoints: ["Propositions finales (um … zu)", "damit"],
      vocabulaire: [
        { de: "die Weiterbildung", fr: "la formation continue", ex: "Ich mache eine Weiterbildung." },
        { de: "der Kurs", fr: "le cours", ex: "Der Kurs beginnt im September." },
        { de: "die Fähigkeit", fr: "la compétence", ex: "Das ist eine wichtige Fähigkeit." },
        { de: "sich verbessern", fr: "s'améliorer", ex: "Ich will mich verbessern." },
        { de: "die Karriere", fr: "la carrière", ex: "Das ist gut für die Karriere." },
        { de: "der Abschluss", fr: "le diplôme / la fin d'études", ex: "Nach dem Abschluss suche ich Arbeit." },
        { de: "nützlich", fr: "utile", ex: "Das ist sehr nützlich." },
        { de: "das Ziel", fr: "le but", ex: "Mein Ziel ist eine bessere Stelle." }
      ],
      grammaire: [
        { attention: "**Même sujet** → *um … zu* ; **sujet différent** → *damit* (verbe à la fin).", titre: "Exprimer un but : um … zu / damit", intro: "« um … zu + infinitif » quand le sujet est le même ; « damit » quand le sujet change.",
          tableau: { entetes: ["Structure", "Condition", "Exemple"], lignes: [["um … zu + Inf.", "même sujet", "Ich lerne, um eine bessere Stelle zu finden."], ["damit + sujet", "sujet différent", "Ich erkläre es, damit du es verstehst."]] },
          schemas: [{ legende: "um … zu : infinitif rejeté à la fin.", mots: [{ m: "Ich lerne Deutsch,", r: "principale", c: "objet" }, { m: "um", r: "but", c: "conj" }, { m: "in Deutschland", r: "complément", c: "sujet" }, { m: "zu arbeiten", r: "zu + infinitif (fin)", c: "fin" }] }],
          note: "Astuce : si on peut dire « pour que » avec un autre sujet → damit ; sinon « pour » + infinitif → um … zu." }
      ],
      dialogue: {
        titre: "Eine Weiterbildung", lieu: "Büro",
        lignes: [
          { loc: "Chef", de: "Warum möchten Sie diesen Kurs machen?", fr: "Pourquoi voulez-vous suivre ce cours ?" },
          { loc: "Frau Reis", de: "Um meine Computerkenntnisse zu verbessern.", fr: "Pour améliorer mes compétences en informatique." },
          { loc: "Chef", de: "Gute Idee. Das ist nützlich für das Team.", fr: "Bonne idée. C'est utile pour l'équipe." },
          { loc: "Frau Reis", de: "Genau, damit wir effizienter arbeiten.", fr: "Exactement, pour que nous travaillions plus efficacement." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum will Frau Reis den Kurs machen?", options: ["Um ihre Kenntnisse zu verbessern", "Um mehr Geld zu haben", "Um weniger zu arbeiten"], correct: 0, explication: "« um meine Computerkenntnisse zu verbessern »." },
        { type: "qcm", consigne: "um…zu ou damit ?", question: "Ich erkläre es, ___ du es verstehst.", options: ["damit", "um zu", "weil", "obwohl"], correct: 0, explication: "sujet différent → damit." },
        { type: "trou", consigne: "Complétez (um … zu).", texte: "Ich lerne, {0} eine bessere Stelle zu finden.", accepte: [["um"]], indice: "but, même sujet : um … zu" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Weiterbildung", droite: "formation continue" }, { gauche: "das Ziel", droite: "le but" }, { gauche: "nützlich", droite: "utile" }, { gauche: "der Abschluss", droite: "le diplôme" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Expliquez en 2 phrases pourquoi vous apprenez l'allemand (um … zu).", attendus: ["um", "zu"], modele: "Ich lerne Deutsch, um in Deutschland zu studieren. Ich übe jeden Tag, um mich zu verbessern." }
      ]
    },
    {
      id: "b1t17", numero: 17, titre: "Conseils pour apprendre", titreDE: "Lerntipps",
      theme: "Conseils d'apprentissage", duree: 50,
      objectifs: ["Donner et recevoir des conseils", "Structurer un récit (d'abord, ensuite)"],
      grammairePoints: ["Konjunktiv II (sollte)", "Adverbes d'ordre"],
      vocabulaire: [
        { de: "der Tipp", fr: "le conseil / l'astuce", ex: "Ich gebe dir einen Tipp." },
        { de: "die Pause", fr: "la pause", ex: "Mach regelmäßig Pausen." },
        { de: "die Wiederholung", fr: "la répétition", ex: "Wiederholung ist wichtig." },
        { de: "sich konzentrieren", fr: "se concentrer", ex: "Ich kann mich gut konzentrieren." },
        { de: "die Motivation", fr: "la motivation", ex: "Meine Motivation ist hoch." },
        { de: "regelmäßig", fr: "régulièrement", ex: "Lern regelmäßig, nicht alles auf einmal." },
        { de: "der Erfolg", fr: "le succès", ex: "Der Erfolg kommt mit der Zeit." },
        { de: "die Geduld", fr: "la patience", ex: "Man braucht Geduld." }
      ],
      grammaire: [
        { attention: "*Du **könntest**…* est plus doux que *Du **solltest**…* ; les deux au Konjunktiv II.", titre: "Donner un conseil (sollte / du könntest)", intro: "« Du solltest … » = tu devrais. « Du könntest … » = tu pourrais. Verbe à la fin de la principale ? Non : modal en 2e position, infinitif à la fin.",
          tableau: { entetes: ["Conseil", "Exemple"], lignes: [["Du solltest …", "Du solltest mehr Pausen machen."], ["Du könntest …", "Du könntest Karteikarten benutzen."], ["An deiner Stelle würde ich …", "An deiner Stelle würde ich laut lesen."]] },
          note: "Pour structurer : zuerst (d'abord), dann (ensuite), schließlich (enfin)." }
      ],
      dialogue: {
        titre: "Wie bleibe ich motiviert?", lieu: "Café",
        lignes: [
          { loc: "Lena", de: "Ich verliere oft die Motivation.", fr: "Je perds souvent la motivation." },
          { loc: "Tom", de: "Du solltest dir kleine Ziele setzen.", fr: "Tu devrais te fixer de petits objectifs." },
          { loc: "Lena", de: "Und wenn ich keine Zeit habe?", fr: "Et si je n'ai pas le temps ?" },
          { loc: "Tom", de: "Schon zehn Minuten täglich helfen. Wichtig ist Regelmäßigkeit.", fr: "Même dix minutes par jour aident. L'important, c'est la régularité." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was rät Tom?", options: ["Kleine Ziele setzen", "Nie Pausen machen", "Alles auf einmal lernen"], correct: 0, explication: "« Du solltest dir kleine Ziele setzen »." },
        { type: "qcm", consigne: "Choisissez (conseil).", question: "Du ___ mehr schlafen.", options: ["solltest", "sollst", "musst nicht", "darfst"], correct: 0, explication: "conseil → solltest (Konjunktiv II)." },
        { type: "trou", consigne: "Complétez (ordre).", texte: "{0} wiederhole ich, dann übe ich mit Karten. (d'abord)", accepte: [["Zuerst"]], indice: "d'abord = zuerst" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Pause", droite: "la pause" }, { gauche: "die Geduld", droite: "la patience" }, { gauche: "regelmäßig", droite: "régulièrement" }, { gauche: "der Erfolg", droite: "le succès" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Donnez trois conseils pour apprendre une langue (Du solltest …).", attendus: ["solltest"], modele: "Du solltest jeden Tag üben. Du solltest Pausen machen. Du solltest keine Angst vor Fehlern haben." }
      ]
    },
    {
      id: "b1t18", numero: 18, titre: "École, diplômes et notes", titreDE: "Schule, Zeugnisse und Noten",
      theme: "École et diplômes", duree: 50,
      objectifs: ["Parler de son parcours scolaire", "Raconter au passé"],
      grammairePoints: ["Temps du passé", "Système scolaire allemand"],
      vocabulaire: [
        { de: "das Zeugnis", fr: "le bulletin / certificat", ex: "Ich habe ein gutes Zeugnis bekommen." },
        { de: "die Note", fr: "la note", ex: "Meine Note in Mathe war eine Zwei." },
        { de: "das Abitur", fr: "le bac (allemand)", ex: "Nach dem Abitur studiere ich." },
        { de: "die Prüfung", fr: "l'examen", ex: "Die Prüfung war schwer." },
        { de: "bestehen", fr: "réussir (un examen)", ex: "Ich habe die Prüfung bestanden." },
        { de: "durchfallen", fr: "échouer", ex: "Er ist durchgefallen." },
        { de: "das Fach", fr: "la matière", ex: "Mein Lieblingsfach war Biologie." },
        { de: "die Grundschule", fr: "l'école primaire", ex: "Die Grundschule dauert vier Jahre." }
      ],
      grammaire: [
        { attention: "À l'oral, **Perfekt** ; mais *war, hatte, musste* se disent au **prétérit**.", titre: "Raconter sa scolarité (passé)", intro: "À l'oral, on emploie le Perfekt ; pour sein/haben/modaux, le Präteritum (war, hatte, musste).",
          tableau: { entetes: ["Verbe", "Perfekt", "Präteritum"], lignes: [["machen", "habe gemacht", "machte"], ["gehen", "bin gegangen", "ging"], ["sein", "—", "war"], ["müssen", "—", "musste"]] },
          note: "En Allemagne, la note 1 est la meilleure et la note 6 la plus mauvaise." }
      ],
      dialogue: {
        titre: "Erinnerungen an die Schule", lieu: "Klassentreffen",
        lignes: [
          { loc: "Paul", de: "Welches Fach mochtest du am liebsten?", fr: "Quelle matière préférais-tu ?" },
          { loc: "Nina", de: "Biologie. In Mathe war ich nicht so gut.", fr: "La biologie. En maths je n'étais pas si bonne." },
          { loc: "Paul", de: "Hast du das Abitur gemacht?", fr: "As-tu passé le bac ?" },
          { loc: "Nina", de: "Ja, und ich habe es bestanden!", fr: "Oui, et je l'ai réussi !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Welches Fach mochte Nina?", options: ["Biologie", "Mathe", "Sport"], correct: 0, explication: "« Biologie »." },
        { type: "qcm", consigne: "Choisissez.", question: "Ich habe die Prüfung ___.", options: ["bestanden", "bestehen", "bestand", "bestehe"], correct: 0, explication: "Perfekt : habe bestanden." },
        { type: "trou", consigne: "Complétez (Präteritum de sein).", texte: "In Mathe {0} ich nicht so gut.", accepte: [["war"]], indice: "sein → war" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "das Zeugnis", droite: "le bulletin" }, { gauche: "die Note", droite: "la note" }, { gauche: "bestehen", droite: "réussir" }, { gauche: "durchfallen", droite: "échouer" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez votre matière préférée à l'école (passé).", attendus: ["war", "Fach"], modele: "Mein Lieblingsfach war Geschichte. Der Lehrer war nett und die Themen waren interessant." }
      ]
    },
    {
      id: "b1t19", numero: 19, titre: "Problèmes de circulation", titreDE: "Verkehrsprobleme",
      theme: "Problèmes de circulation", duree: 50,
      objectifs: ["Décrire des problèmes de circulation", "Exprimer simultanéité / succession"],
      grammairePoints: ["Propositions temporelles", "während, als"],
      vocabulaire: [
        { de: "der Stau", fr: "l'embouteillage", ex: "Wir standen im Stau." },
        { de: "die Baustelle", fr: "le chantier", ex: "Vor der Baustelle ist es eng." },
        { de: "die Verspätung", fr: "le retard", ex: "Der Zug hat Verspätung." },
        { de: "der Unfall", fr: "l'accident", ex: "Es gab einen Unfall." },
        { de: "die Umleitung", fr: "la déviation", ex: "Wir mussten eine Umleitung fahren." },
        { de: "die Ampel", fr: "le feu (de signalisation)", ex: "Die Ampel ist rot." },
        { de: "die Panne", fr: "la panne", ex: "Ich hatte eine Panne." },
        { de: "überfüllt", fr: "bondé", ex: "Der Bus war überfüllt." }
      ],
      grammaire: [
        { attention: "*während* = en même temps ; *als* = un événement unique passé. Verbe **à la fin**.", titre: "Simultanéité (während) et succession (als)", intro: "« während » : deux actions en même temps. « als » : un événement unique passé. Les deux rejettent le verbe à la fin.",
          tableau: { entetes: ["Conjonction", "Sens", "Exemple"], lignes: [["während", "pendant que", "Während ich fuhr, hörte ich Radio."], ["als", "quand (1 fois)", "Als ich ankam, war alles gesperrt."], ["bevor", "avant que", "Bevor ich losfuhr, prüfte ich die App."]] },
          note: "« während » exprime aussi le contraste : « Während ich Bus fahre, fährt er mit dem Rad »." }
      ],
      dialogue: {
        titre: "Im Stau", lieu: "Auto",
        lignes: [
          { loc: "Sven", de: "Warum kommst du so spät?", fr: "Pourquoi arrives-tu si tard ?" },
          { loc: "Tina", de: "Es gab einen Unfall, und ich stand im Stau.", fr: "Il y a eu un accident, et j'étais coincée dans un embouteillage." },
          { loc: "Sven", de: "Und die Umleitung?", fr: "Et la déviation ?" },
          { loc: "Tina", de: "Während ich wartete, habe ich dich angerufen.", fr: "Pendant que j'attendais, je t'ai appelé." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum kam Tina zu spät?", options: ["Wegen eines Unfalls / Staus", "Sie hat geschlafen", "Sie war im Kino"], correct: 0, explication: "« ein Unfall … im Stau »." },
        { type: "qcm", consigne: "während ou als ?", question: "___ ich ankam, war die Straße gesperrt.", options: ["Als", "Während", "Bevor", "Obwohl"], correct: 0, explication: "événement unique passé → als." },
        { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Während ich {0}, hörte ich Musik. (fahren)", accepte: [["fuhr"]], indice: "während → verbe à la fin (prétérit)" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Stau", droite: "l'embouteillage" }, { gauche: "die Verspätung", droite: "le retard" }, { gauche: "die Umleitung", droite: "la déviation" }, { gauche: "die Panne", droite: "la panne" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Racontez une fois où vous êtes arrivé en retard (als / während).", attendus: ["als", "Stau"], modele: "Als ich zur Arbeit fuhr, gab es einen Stau. Während ich wartete, wurde ich nervös." }
      ]
    },
    {
      id: "b1t20", numero: 20, titre: "Moyens de transport", titreDE: "Verkehrsmittel",
      theme: "Moyens de transport", duree: 50,
      objectifs: ["Comparer les moyens de transport", "Choisir la préposition de lieu"],
      grammairePoints: ["Prépositions (mit, mit dem)", "comparatif"],
      vocabulaire: [
        { de: "die U-Bahn", fr: "le métro", ex: "Ich fahre mit der U-Bahn." },
        { de: "die Straßenbahn", fr: "le tramway", ex: "Die Straßenbahn ist pünktlich." },
        { de: "das Fahrrad", fr: "le vélo", ex: "Ich fahre mit dem Fahrrad." },
        { de: "öffentliche Verkehrsmittel", fr: "les transports en commun", ex: "Ich nutze öffentliche Verkehrsmittel." },
        { de: "die Fahrkarte", fr: "le billet", ex: "Ich kaufe eine Fahrkarte." },
        { de: "umsteigen", fr: "changer (de ligne)", ex: "Du musst am Bahnhof umsteigen." },
        { de: "umweltfreundlich", fr: "écologique", ex: "Das Fahrrad ist umweltfreundlich." },
        { de: "die Strecke", fr: "le trajet", ex: "Die Strecke dauert 20 Minuten." }
      ],
      grammaire: [
        { attention: "Moyen de transport → *mit + datif* (*mit **dem** Fahrrad*) ; exception : *zu Fuß*.", titre: "Se déplacer : mit + datif", intro: "Pour le moyen de transport, on emploie « mit + datif ». Exception : « zu Fuß » (à pied).",
          tableau: { entetes: ["Moyen", "Expression", "Exemple"], lignes: [["Bus", "mit dem Bus", "Ich fahre mit dem Bus."], ["U-Bahn", "mit der U-Bahn", "Sie fährt mit der U-Bahn."], ["Auto", "mit dem Auto", "Wir fahren mit dem Auto."], ["à pied", "zu Fuß", "Ich gehe zu Fuß."]] },
          note: "Comparer : « Das Fahrrad ist umweltfreundlicher als das Auto »." }
      ],
      dialogue: {
        titre: "Wie kommst du zur Arbeit?", lieu: "Büro",
        lignes: [
          { loc: "Kai", de: "Fährst du mit dem Auto zur Arbeit?", fr: "Tu vas au travail en voiture ?" },
          { loc: "Eva", de: "Nein, mit der U-Bahn. Das ist schneller.", fr: "Non, en métro. C'est plus rapide." },
          { loc: "Kai", de: "Und billiger als das Auto, oder?", fr: "Et moins cher que la voiture, non ?" },
          { loc: "Eva", de: "Genau, und umweltfreundlicher.", fr: "Exactement, et plus écologique." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie fährt Eva zur Arbeit?", options: ["Mit der U-Bahn", "Mit dem Auto", "Zu Fuß"], correct: 0, explication: "« mit der U-Bahn »." },
        { type: "qcm", consigne: "Choisissez.", question: "Ich fahre ___ Fahrrad.", options: ["mit dem", "mit der", "zu", "in dem"], correct: 0, explication: "das Fahrrad → mit dem." },
        { type: "trou", consigne: "Complétez (comparatif).", texte: "Die U-Bahn ist {0} als das Auto. (schnell)", accepte: [["schneller"]], indice: "schnell → schneller" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Fahrkarte", droite: "le billet" }, { gauche: "umsteigen", droite: "changer" }, { gauche: "umweltfreundlich", droite: "écologique" }, { gauche: "die Strecke", droite: "le trajet" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Comparez deux moyens de transport (comparatif + als).", attendus: ["als"], modele: "Der Bus ist billiger als das Taxi, aber das Taxi ist schneller und bequemer." }
      ]
    },
    {
      id: "b1t21", numero: 21, titre: "En route", titreDE: "Unterwegs",
      theme: "En route", duree: 50,
      objectifs: ["Demander et indiquer un chemin", "Réserver et acheter un billet"],
      grammairePoints: ["Prépositions de lieu", "questions indirectes"],
      vocabulaire: [
        { de: "der Bahnsteig", fr: "le quai", ex: "Der Zug fährt von Bahnsteig 3 ab." },
        { de: "der Fahrplan", fr: "les horaires", ex: "Ich schaue auf den Fahrplan." },
        { de: "abfahren", fr: "partir (véhicule)", ex: "Der Zug fährt um 9 Uhr ab." },
        { de: "ankommen", fr: "arriver", ex: "Wir kommen um 11 Uhr an." },
        { de: "der Anschluss", fr: "la correspondance", ex: "Ich habe den Anschluss verpasst." },
        { de: "die Richtung", fr: "la direction", ex: "In welche Richtung fährt der Bus?" },
        { de: "reservieren", fr: "réserver", ex: "Ich möchte einen Platz reservieren." },
        { de: "die Auskunft", fr: "le renseignement / l'information", ex: "Ich frage an der Auskunft." }
      ],
      grammaire: [
        { attention: "Question indirecte : verbe **à la fin** (*…, **wann** der Zug **abfährt***).", titre: "Question indirecte (poliesse)", intro: "Pour demander poliment, on intègre la question dans une phrase : ob (oui/non) ou le mot interrogatif, verbe à la fin.",
          tableau: { entetes: ["Question directe", "Question indirecte"], lignes: [["Fährt der Zug pünktlich?", "Wissen Sie, ob der Zug pünktlich fährt?"], ["Wann fährt der Bus?", "Können Sie mir sagen, wann der Bus fährt?"], ["Wo ist Gleis 3?", "Wissen Sie, wo Gleis 3 ist?"]] },
          schemas: [{ legende: "Question indirecte : verbe rejeté à la FIN.", mots: [{ m: "Können Sie mir sagen,", r: "principale", c: "objet" }, { m: "wann", r: "mot interrogatif", c: "conj" }, { m: "der Bus", r: "sujet", c: "sujet" }, { m: "abfährt?", r: "verbe (fin)", c: "fin" }] }],
          note: "Très utile pour être poli : « Könnten Sie mir sagen, … ? »." }
      ],
      dialogue: {
        titre: "Am Bahnhof", lieu: "Bahnhof",
        lignes: [
          { loc: "Reisende", de: "Entschuldigung, können Sie mir sagen, wann der Zug nach Köln fährt?", fr: "Excusez-moi, pouvez-vous me dire quand part le train pour Cologne ?" },
          { loc: "Beamter", de: "Um 14:20 Uhr, von Bahnsteig 5.", fr: "À 14h20, depuis le quai 5." },
          { loc: "Reisende", de: "Und muss ich umsteigen?", fr: "Et dois-je changer ?" },
          { loc: "Beamter", de: "Nein, der Zug fährt direkt.", fr: "Non, le train est direct." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Von welchem Bahnsteig fährt der Zug?", options: ["Bahnsteig 5", "Bahnsteig 3", "Bahnsteig 1"], correct: 0, explication: "« von Bahnsteig 5 »." },
        { type: "qcm", consigne: "Choisissez (question indirecte).", question: "Wissen Sie, wann der Zug ___?", options: ["abfährt", "abfahrt", "fährt ab", "abfahren"], correct: 0, explication: "verbe à la fin : abfährt." },
        { type: "trou", consigne: "Complétez (ob).", texte: "Können Sie mir sagen, {0} der Zug pünktlich ist?", accepte: [["ob"]], indice: "question oui/non indirecte → ob" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "der Bahnsteig", droite: "le quai" }, { gauche: "der Anschluss", droite: "la correspondance" }, { gauche: "abfahren", droite: "partir" }, { gauche: "reservieren", droite: "réserver" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Demandez poliment à quelle heure part le prochain bus (question indirecte).", attendus: ["sagen", "wann"], modele: "Entschuldigung, können Sie mir sagen, wann der nächste Bus fährt?" }
      ]
    },
    {
      id: "b1t22", numero: 22, titre: "Quand on part en voyage", titreDE: "Wenn man verreist",
      theme: "Vacances et voyages", duree: 55,
      objectifs: ["Organiser un voyage", "Exprimer des conditions et des souhaits"],
      grammairePoints: ["Konjunktiv II (souhaits)", "wenn-Sätze"],
      vocabulaire: [
        { de: "die Reise", fr: "le voyage", ex: "Die Reise war wunderbar." },
        { de: "buchen", fr: "réserver", ex: "Ich habe ein Hotel gebucht." },
        { de: "die Unterkunft", fr: "l'hébergement", ex: "Die Unterkunft war sauber." },
        { de: "das Gepäck", fr: "les bagages", ex: "Mein Gepäck ist schwer." },
        { de: "die Sehenswürdigkeit", fr: "le site touristique", ex: "Wir besuchen die Sehenswürdigkeiten." },
        { de: "sich erholen", fr: "se reposer", ex: "Im Urlaub erhole ich mich." },
        { de: "die Versicherung", fr: "l'assurance", ex: "Ich habe eine Reiseversicherung." },
        { de: "die Grenze", fr: "la frontière", ex: "Wir fahren über die Grenze." }
      ],
      grammaire: [
        { attention: "Demande polie : *Ich **würde** gern…*, *Ich **hätte** gern… mit Balkon*.", titre: "Souhaits et conditions de voyage (Konjunktiv II)", intro: "« Ich würde gern… », « Wenn ich Zeit/Geld hätte, würde ich… ».",
          tableau: { entetes: ["Souhait / condition", "Exemple"], lignes: [["würde gern", "Ich würde gern nach Japan reisen."], ["hätte gern", "Ich hätte gern ein Zimmer mit Balkon."], ["wenn … würde", "Wenn ich reich wäre, würde ich die Welt bereisen."]] },
          note: "Réserver poliment : « Ich hätte gern… », « Könnte ich bitte…? »." }
      ],
      dialogue: {
        titre: "Urlaubspläne", lieu: "Reisebüro",
        lignes: [
          { loc: "Kundin", de: "Ich würde gern eine Woche ans Meer fahren.", fr: "J'aimerais bien aller une semaine à la mer." },
          { loc: "Berater", de: "Hätten Sie gern ein Hotel oder eine Ferienwohnung?", fr: "Préféreriez-vous un hôtel ou un appartement de vacances ?" },
          { loc: "Kundin", de: "Eine Ferienwohnung, wenn möglich mit Balkon.", fr: "Un appartement, si possible avec balcon." },
          { loc: "Berater", de: "Kein Problem, ich buche das für Sie.", fr: "Pas de problème, je réserve cela pour vous." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was möchte die Kundin?", options: ["Eine Woche ans Meer", "Eine Woche in die Berge", "Einen Tag in der Stadt"], correct: 0, explication: "« eine Woche ans Meer fahren »." },
        { type: "qcm", consigne: "Choisissez (souhait poli).", question: "Ich ___ gern ein Zimmer mit Balkon.", options: ["hätte", "habe", "hatte", "haben"], correct: 0, explication: "souhait → hätte gern." },
        { type: "trou", consigne: "Complétez (würde).", texte: "Wenn ich Zeit hätte, {0} ich verreisen.", accepte: [["würde"]], indice: "wenn … würde" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Unterkunft", droite: "l'hébergement" }, { gauche: "buchen", droite: "réserver" }, { gauche: "das Gepäck", droite: "les bagages" }, { gauche: "sich erholen", droite: "se reposer" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez le voyage que vous feriez si vous gagniez au loto (Konjunktiv II).", attendus: ["würde", "wenn"], modele: "Wenn ich im Lotto gewinnen würde, würde ich eine Weltreise machen und in tollen Hotels übernachten." }
      ]
    },
    {
      id: "b1t23", numero: 23, titre: "Sentiments de bonheur", titreDE: "Glücksgefühle",
      theme: "Sentiments de bonheur", duree: 50,
      objectifs: ["Exprimer le bonheur et la satisfaction", "Décrire des émotions positives"],
      grammairePoints: ["Adjectifs + prépositions", "sich freuen über/auf"],
      vocabulaire: [
        { de: "das Glück", fr: "le bonheur / la chance", ex: "Ich wünsche dir viel Glück." },
        { de: "glücklich", fr: "heureux", ex: "Ich bin sehr glücklich." },
        { de: "zufrieden", fr: "satisfait", ex: "Ich bin mit meinem Leben zufrieden." },
        { de: "stolz", fr: "fier", ex: "Ich bin stolz auf dich." },
        { de: "dankbar", fr: "reconnaissant", ex: "Ich bin dir dankbar." },
        { de: "genießen", fr: "savourer / profiter de", ex: "Ich genieße den Moment." },
        { de: "lächeln", fr: "sourire", ex: "Sie lächelt oft." },
        { de: "die Freude", fr: "la joie", ex: "Das macht mir Freude." }
      ],
      grammaire: [
        { attention: "Préposition **fixe** : *stolz **auf***, *zufrieden **mit*** — à mémoriser comme les verbes.", titre: "Adjectifs avec préposition", intro: "Certains adjectifs se construisent avec une préposition fixe (et un cas).",
          tableau: { entetes: ["Adjectif", "Préposition + cas", "Exemple"], lignes: [["stolz", "auf + Akk.", "Ich bin stolz auf meine Arbeit."], ["zufrieden", "mit + Dat.", "Ich bin zufrieden mit dem Ergebnis."], ["dankbar", "für + Akk.", "Ich bin dankbar für deine Hilfe."], ["glücklich", "über + Akk.", "Ich bin glücklich über die Nachricht."]] },
          note: "À mémoriser comme les verbes à préposition : stolz auf, zufrieden mit, dankbar für." }
      ],
      dialogue: {
        titre: "Eine gute Nachricht", lieu: "Zuhause",
        lignes: [
          { loc: "Mara", de: "Ich habe die Stelle bekommen!", fr: "J'ai eu le poste !" },
          { loc: "Ben", de: "Das freut mich so! Ich bin stolz auf dich.", fr: "Ça me fait tellement plaisir ! Je suis fier de toi." },
          { loc: "Mara", de: "Danke, ich bin wirklich glücklich.", fr: "Merci, je suis vraiment heureuse." },
          { loc: "Ben", de: "Das müssen wir feiern!", fr: "Il faut fêter ça !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum ist Mara glücklich?", options: ["Sie hat die Stelle bekommen", "Sie hat Urlaub", "Sie hat gewonnen"], correct: 0, explication: "« Ich habe die Stelle bekommen! »." },
        { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich bin stolz ___ meine Kinder.", options: ["auf", "mit", "für", "über"], correct: 0, explication: "stolz auf + accusatif." },
        { type: "trou", consigne: "Complétez (zufrieden + préposition).", texte: "Ich bin zufrieden {0} dem Ergebnis.", accepte: [["mit"]], indice: "zufrieden mit + datif" },
        { type: "association", consigne: "Associez l'adjectif et sa préposition.", paires: [{ gauche: "stolz", droite: "auf" }, { gauche: "zufrieden", droite: "mit" }, { gauche: "dankbar", droite: "für" }, { gauche: "glücklich", droite: "über" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Dites de quoi vous êtes fier et reconnaissant (stolz auf, dankbar für).", attendus: ["stolz", "dankbar"], modele: "Ich bin stolz auf meine Fortschritte in Deutsch und dankbar für die Hilfe meiner Freunde." }
      ]
    },
    {
      id: "b1t24", numero: 24, titre: "Les qualités", titreDE: "Eigenschaften",
      theme: "Qualités et caractère", duree: 50,
      objectifs: ["Décrire le caractère d'une personne", "Décliner l'adjectif"],
      grammairePoints: ["Déclinaison de l'adjectif", "ein netter Mensch"],
      vocabulaire: [
        { de: "ehrlich", fr: "honnête", ex: "Sie ist ein ehrlicher Mensch." },
        { de: "zuverlässig", fr: "fiable", ex: "Er ist sehr zuverlässig." },
        { de: "hilfsbereit", fr: "serviable", ex: "Meine Kollegin ist hilfsbereit." },
        { de: "geduldig", fr: "patient", ex: "Ein guter Lehrer ist geduldig." },
        { de: "selbstbewusst", fr: "sûr de soi", ex: "Sie ist selbstbewusst." },
        { de: "neugierig", fr: "curieux", ex: "Kinder sind neugierig." },
        { de: "großzügig", fr: "généreux", ex: "Mein Onkel ist großzügig." },
        { de: "die Eigenschaft", fr: "la qualité / le trait", ex: "Welche Eigenschaft schätzt du?" }
      ],
      grammaire: [
        { attention: "Sans article, l'adjectif prend la **terminaison forte** du cas (*gut**er** Mensch*).", titre: "L'adjectif épithète se décline", intro: "Devant un nom, l'adjectif prend une terminaison selon l'article et le cas.",
          tableau: { entetes: ["Article", "Nominatif m.", "Exemple"], lignes: [["der", "der nette Mann", "Le gentil homme"], ["ein", "ein netter Mann", "Un gentil homme"], ["(sans)", "netter Mann", "(un) gentil homme"], ["die (f.)", "die nette Frau", "La gentille femme"]] },
          note: "Après der/die/das : terminaison -e ou -en. Après ein : l'adjectif « porte » la marque du genre (ein netter, eine nette, ein nettes)." }
      ],
      dialogue: {
        titre: "Ein guter Kollege", lieu: "Pause",
        lignes: [
          { loc: "Lisa", de: "Wie ist der neue Kollege?", fr: "Comment est le nouveau collègue ?" },
          { loc: "Tom", de: "Sehr nett und zuverlässig.", fr: "Très gentil et fiable." },
          { loc: "Lisa", de: "Das ist eine wichtige Eigenschaft.", fr: "C'est une qualité importante." },
          { loc: "Tom", de: "Ja, und er ist immer hilfsbereit.", fr: "Oui, et il est toujours serviable." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Wie ist der neue Kollege?", options: ["Nett und zuverlässig", "Faul", "Unhöflich"], correct: 0, explication: "« sehr nett und zuverlässig »." },
        { type: "qcm", consigne: "Choisissez (déclinaison).", question: "Er ist ein ___ Mensch. (ehrlich)", options: ["ehrlicher", "ehrliche", "ehrlich", "ehrlichen"], correct: 0, explication: "ein + masc. nom. → -er : ein ehrlicher." },
        { type: "trou", consigne: "Complétez (déclinaison après der).", texte: "Der {0} Lehrer ist beliebt. (geduldig)", accepte: [["geduldige"]], indice: "der + adjectif → -e" },
        { type: "association", consigne: "Associez les qualités.", paires: [{ gauche: "ehrlich", droite: "honnête" }, { gauche: "zuverlässig", droite: "fiable" }, { gauche: "hilfsbereit", droite: "serviable" }, { gauche: "großzügig", droite: "généreux" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Décrivez les qualités d'un bon ami (adjectifs déclinés).", attendus: ["ein", "Freund"], modele: "Ein guter Freund ist ehrlich, zuverlässig und hilfsbereit. Er hört zu und ist immer für mich da." }
      ]
    },
    {
      id: "b1t25", numero: 25, titre: "Stress, colère et joie", titreDE: "Stress, Ärger und Freude",
      theme: "Stress et émotions", duree: 50,
      objectifs: ["Exprimer le stress et l'agacement", "Proposer des solutions"],
      grammairePoints: ["Causes et conséquences", "weil, deshalb"],
      vocabulaire: [
        { de: "der Stress", fr: "le stress", ex: "Ich habe viel Stress." },
        { de: "sich ärgern", fr: "s'énerver", ex: "Ich ärgere mich über den Lärm." },
        { de: "die Wut", fr: "la colère", ex: "Seine Wut war groß." },
        { de: "sich entspannen", fr: "se détendre", ex: "Ich entspanne mich beim Yoga." },
        { de: "die Sorge", fr: "le souci", ex: "Mach dir keine Sorgen." },
        { de: "ruhig", fr: "calme", ex: "Bleib ruhig!" },
        { de: "der Druck", fr: "la pression", ex: "Der Druck bei der Arbeit ist hoch." },
        { de: "atmen", fr: "respirer", ex: "Atme tief durch." }
      ],
      grammaire: [
        { attention: "*weil* (cause, verbe à la fin) vs *deshalb* (conséquence, verbe en 2ᵉ).", titre: "Cause (weil) et conséquence (deshalb)", intro: "« weil » introduit la cause (verbe à la fin). « deshalb » introduit la conséquence (verbe en 2e position).",
          tableau: { entetes: ["Mot", "Rôle", "Exemple"], lignes: [["weil", "cause (verbe fin)", "Ich bin müde, weil ich Stress habe."], ["deshalb", "conséquence (verbe 2e)", "Ich habe Stress, deshalb bin ich müde."], ["denn", "cause (verbe 2e)", "Ich bin müde, denn ich habe Stress."]] },
          schemas: [{ legende: "deshalb en tête → verbe en 2e position.", mots: [{ m: "Ich habe Stress,", r: "cause", c: "objet" }, { m: "deshalb", r: "conséquence (1)", c: "conj" }, { m: "entspanne", r: "verbe (2)", c: "verbe" }, { m: "ich mich", r: "sujet+réfléchi", c: "fin" }] }],
          note: "weil + verbe à la FIN ; deshalb/denn + verbe en 2e position." }
      ],
      dialogue: {
        titre: "Zu viel Druck", lieu: "Zuhause",
        lignes: [
          { loc: "Nora", de: "Du siehst gestresst aus.", fr: "Tu as l'air stressé." },
          { loc: "Leo", de: "Ja, ich habe viel Stress, weil ich eine Deadline habe.", fr: "Oui, j'ai beaucoup de stress parce que j'ai une échéance." },
          { loc: "Nora", de: "Du solltest eine Pause machen, um dich zu entspannen.", fr: "Tu devrais faire une pause pour te détendre." },
          { loc: "Leo", de: "Du hast recht. Ich atme erst mal tief durch.", fr: "Tu as raison. Je vais d'abord respirer profondément." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Warum hat Leo Stress?", options: ["Wegen einer Deadline", "Wegen des Wetters", "Wegen der Kinder"], correct: 0, explication: "« weil ich eine Deadline habe »." },
        { type: "qcm", consigne: "weil ou deshalb ?", question: "Ich habe Stress, ___ ich kann nicht schlafen.", options: ["deshalb", "weil", "denn nicht", "dass"], correct: 0, explication: "conséquence + verbe en 2e position → deshalb." },
        { type: "trou", consigne: "Complétez (weil + verbe à la fin).", texte: "Ich ärgere mich, weil der Bus zu spät {0}. (kommen)", accepte: [["kommt"]], indice: "weil → verbe à la fin" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "sich ärgern", droite: "s'énerver" }, { gauche: "die Wut", droite: "la colère" }, { gauche: "sich entspannen", droite: "se détendre" }, { gauche: "der Druck", droite: "la pression" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Dites ce qui vous stresse et ce que vous faites pour vous détendre (weil / deshalb).", attendus: ["weil", "entspann"], modele: "Ich habe oft Stress, weil ich viel arbeite. Deshalb mache ich Sport, um mich zu entspannen." }
      ]
    },
    {
      id: "b1t26", numero: 26, titre: "Cuisine et restaurant", titreDE: "Essen und Restaurant",
      theme: "Alimentation et restaurant", duree: 55,
      objectifs: ["Suivre et donner une recette", "Commander au restaurant"],
      grammairePoints: ["Impératif", "le passif (préparation)"],
      vocabulaire: [
        { de: "die Zutat", fr: "l'ingrédient", ex: "Welche Zutaten brauchst du?" },
        { de: "das Rezept", fr: "la recette", ex: "Das ist ein altes Rezept." },
        { de: "schneiden", fr: "couper", ex: "Schneide die Zwiebeln." },
        { de: "kochen", fr: "cuisiner / cuire", ex: "Ich koche heute Abend." },
        { de: "die Vorspeise", fr: "l'entrée", ex: "Als Vorspeise nehme ich Suppe." },
        { de: "die Hauptspeise", fr: "le plat principal", ex: "Die Hauptspeise war lecker." },
        { de: "bestellen", fr: "commander", ex: "Ich möchte bestellen." },
        { de: "die Rechnung", fr: "l'addition", ex: "Die Rechnung, bitte!" }
      ],
      grammaire: [
        { attention: "Recette : *Schneide…!* (impératif) ou *Die Zwiebeln **werden** geschnitten* (passif).", titre: "Recettes : impératif et passif", intro: "Une recette emploie l'impératif (Schneide…) ou le passif (Die Zwiebeln werden geschnitten).",
          tableau: { entetes: ["Forme", "Exemple"], lignes: [["Impératif (du)", "Schneide die Zwiebeln!"], ["Impératif (Sie)", "Schneiden Sie die Zwiebeln!"], ["Passif", "Die Zwiebeln werden geschnitten."], ["puis (dann)", "Dann wird alles gekocht."]] },
          note: "Au restaurant : « Ich hätte gern… », « Ich nehme… », « Die Rechnung, bitte »." }
      ],
      dialogue: {
        titre: "Im Restaurant", lieu: "Restaurant",
        lignes: [
          { loc: "Kellner", de: "Was möchten Sie bestellen?", fr: "Que désirez-vous commander ?" },
          { loc: "Gast", de: "Als Vorspeise hätte ich gern eine Suppe.", fr: "En entrée, je prendrais bien une soupe." },
          { loc: "Kellner", de: "Und als Hauptspeise?", fr: "Et en plat principal ?" },
          { loc: "Gast", de: "Den Braten, bitte. Und später die Rechnung.", fr: "Le rôti, s'il vous plaît. Et l'addition plus tard." }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was nimmt der Gast als Vorspeise?", options: ["Eine Suppe", "Einen Salat", "Einen Braten"], correct: 0, explication: "« eine Suppe »." },
        { type: "qcm", consigne: "Choisissez (impératif du).", question: "___ die Zwiebeln! (schneiden)", options: ["Schneide", "Schneiden", "Schneidest", "Geschnitten"], correct: 0, explication: "impératif (du) : Schneide!" },
        { type: "trou", consigne: "Complétez (passif).", texte: "Die Kartoffeln {0} gekocht.", accepte: [["werden"]], indice: "pluriel passif → werden + participe" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Zutat", droite: "l'ingrédient" }, { gauche: "die Vorspeise", droite: "l'entrée" }, { gauche: "bestellen", droite: "commander" }, { gauche: "die Rechnung", droite: "l'addition" }] },
        { type: "production", consigne: "Production écrite.", prompt: "Écrivez une mini-recette en 3 étapes (impératif).", attendus: ["Schneide", "Koche"], modele: "Schneide das Gemüse. Koche das Wasser. Gib alles in den Topf und warte zehn Minuten." }
      ]
    },
    {
      id: "b1t27", numero: 27, titre: "Invitations et vœux", titreDE: "Einladungen und Glückwünsche",
      theme: "Invitations et vœux", duree: 50,
      objectifs: ["Inviter, accepter, refuser poliment", "Présenter ses vœux"],
      grammairePoints: ["Konjunktiv II (politesse)", "formules de vœux"],
      vocabulaire: [
        { de: "die Einladung", fr: "l'invitation", ex: "Danke für die Einladung." },
        { de: "einladen", fr: "inviter", ex: "Ich lade dich zum Essen ein." },
        { de: "absagen", fr: "annuler / décliner", ex: "Ich muss leider absagen." },
        { de: "zusagen", fr: "accepter", ex: "Ich sage gern zu." },
        { de: "feiern", fr: "fêter", ex: "Wir feiern meinen Geburtstag." },
        { de: "der Glückwunsch", fr: "le vœu / les félicitations", ex: "Herzlichen Glückwunsch!" },
        { de: "gratulieren", fr: "féliciter", ex: "Ich gratuliere dir." },
        { de: "das Geschenk", fr: "le cadeau", ex: "Ich habe ein Geschenk für dich." }
      ],
      grammaire: [
        { attention: "Invitation polie : *Hättest du Lust, … **zu** + infinitif?*", titre: "Inviter et répondre poliment", intro: "Konjunktiv II pour la politesse ; formules toutes faites pour les vœux.",
          tableau: { entetes: ["Acte", "Formule"], lignes: [["Inviter", "Hättest du Lust, …? / Würdest du gern …?"], ["Accepter", "Ja, gern! / Das wäre schön."], ["Refuser", "Leider kann ich nicht, ich habe schon etwas vor."], ["Féliciter", "Herzlichen Glückwunsch! Alles Gute!"]] },
          note: "Vœux fréquents : « Frohe Weihnachten », « Gutes neues Jahr », « Alles Gute zum Geburtstag »." }
      ],
      dialogue: {
        titre: "Eine Geburtstagsfeier", lieu: "Telefon",
        lignes: [
          { loc: "Sara", de: "Hättest du Lust, am Samstag zu meiner Party zu kommen?", fr: "Aurais-tu envie de venir à ma fête samedi ?" },
          { loc: "Tim", de: "Ja, sehr gern! Vielen Dank für die Einladung.", fr: "Oui, avec plaisir ! Merci beaucoup pour l'invitation." },
          { loc: "Sara", de: "Super! Wir feiern meinen Geburtstag.", fr: "Super ! On fête mon anniversaire." },
          { loc: "Tim", de: "Dann schon mal herzlichen Glückwunsch!", fr: "Alors d'avance, joyeux anniversaire !" }
        ]
      },
      exercices: [
        { type: "qcm", cat: "comp", consigne: "D'après le dialogue.", question: "Was feiert Sara?", options: ["Ihren Geburtstag", "Eine Hochzeit", "Weihnachten"], correct: 0, explication: "« Wir feiern meinen Geburtstag »." },
        { type: "qcm", consigne: "Choisissez (invitation polie).", question: "___ du Lust, ins Kino zu gehen?", options: ["Hättest", "Hast", "Hatte", "Haben"], correct: 0, explication: "politesse → Konjunktiv II : Hättest du Lust…?" },
        { type: "trou", consigne: "Complétez (félicitations).", texte: "Herzlichen {0} zum Geburtstag!", accepte: [["Glückwunsch"]], indice: "formule : Herzlichen Glückwunsch" },
        { type: "association", consigne: "Associez les mots.", paires: [{ gauche: "die Einladung", droite: "l'invitation" }, { gauche: "absagen", droite: "décliner" }, { gauche: "feiern", droite: "fêter" }, { gauche: "gratulieren", droite: "féliciter" }] },
        { type: "oral", consigne: "Production orale.", prompt: "Invitez un ami à votre fête et présentez-lui vos vœux (Konjunktiv II).", attendus: ["Lust", "Glückwunsch"], modele: "Hättest du Lust, zu meiner Party zu kommen? Und dir schon mal herzlichen Glückwunsch zum neuen Job!" }
      ]
    }
  ]
};
