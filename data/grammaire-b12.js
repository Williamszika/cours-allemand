/* =====================================================================
   grammaire-b12.js — 9 LEÇONS DE GRAMMAIRE du module B1.2
   (extension de window.GRAMMAIRE_B1). Suit les 9 points B1.2 du
   programme. Schémas colorés pour les structures clés.
   ===================================================================== */
window.GRAMMAIRE_B1 = Object.assign(window.GRAMMAIRE_B1 || {}, {
  b1g15: {
    id: "b1g15",
    einstieg: {"intro":"Observe les façons d'exprimer une condition.","exemples":[{"de":"Wenn es regnet, bleibe ich zu Hause.","fr":"S'il pleut, je reste à la maison."},{"de":"Falls du Zeit hast, ruf an.","fr":"Au cas où tu aurais le temps, appelle."},{"de":"Beeil dich, sonst kommen wir zu spät.","fr":"Dépêche-toi, sinon on sera en retard."}],"question":"Quelle différence entre *wenn*, *falls* et *sonst* ?"},
    merke: ["*wenn* = si/quand (condition réelle ou répétée).","*falls* = au cas où (condition incertaine).","*sonst* = sinon (conséquence négative)."],
    achtung: [{"erreur":"Wenn ich Zeit hätte, ich komme.","correct":"Wenn ich Zeit hätte, **würde ich kommen**.","explication":"Condition irréelle → Konjunktiv II."},{"erreur":"Wenn es regnet, ich bleibe zu Hause.","correct":"Wenn es regnet, **bleibe ich** zu Hause.","explication":"Subordonnée en tête → inversion."}],
    kontrast: {"titre":"La condition : allemand vs français","similitudes":["« si » introduit la condition."],"differences":["*wenn* (réel) vs *falls* (éventuel) - nuance absente en français.","Condition irréelle → Konjunktiv II.","*sonst* (sinon) annonce la conséquence négative."]}, titre: "Indicateurs de conditionnel", titreDE: "Irreale Bedingungen (wenn)", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer une hypothèse irréelle", "Relier condition et conséquence (wenn … würde)"],
    grammairePoints: ["wenn + Konjunktiv II", "sonst, andernfalls"],
    exemplesPlus: [{"de":"Wenn ich reich wäre, würde ich um die Welt reisen.","fr":"Irreale Bedingung: es ist gerade nicht so."},{"de":"Wenn du mehr lernen würdest, hättest du bessere Noten.","fr":"*würde* im Nebensatz, Folge im Konjunktiv II."},{"de":"Beeil dich, sonst verpassen wir den Zug!","fr":"*sonst*: die andere, schlechte Folge."},{"de":"Wenn es nicht regnen würde, könnten wir grillen.","fr":"Bedingung + Möglichkeit (*könnten*)."},{"de":"Hätte ich das gewusst, wäre ich früher gekommen.","fr":"Ohne *wenn*: das Verb steht am Anfang."}],
    coursDE: [
      "Mit einem **Bedingungssatz** sagst du, was unter einer bestimmten Bedingung passiert. Bei **irrealen** (unmöglichen oder unwahrscheinlichen) Bedingungen benutzt du den **Konjunktiv II**. Das ist wie « si… » + Konditional im Französischen.",
      "Die Struktur ist: **wenn** + Konjunktiv II, dann + Konjunktiv II. Beispiel: « ***Wenn** ich Zeit **hätte**, **würde** ich dir helfen* ». Im *wenn*-Satz steht das Verb am Ende, und der zweite Satz beginnt oft mit *dann*.",
      "Du benutzt meistens **würde + Infinitiv**, aber bei *sein, haben* und den Modalverben nimmst du die kurze Form: **wäre, hätte, könnte, müsste**. Beispiel: « *Wenn ich reich **wäre**, **würde** ich eine Weltreise machen* ».",
      "Für die **Vergangenheit** (etwas, das nicht passiert ist) nimmst du *hätte/wäre* + Partizip II: « *Wenn ich Zeit **gehabt hätte**, **wäre** ich gekommen* ». Nützlich sind auch **sonst** und **andernfalls** (= sinon): « *Beeil dich, **sonst** kommen wir zu spät* »."
    ],
    grammaire: [
      { regle: "Condition irréelle : **wenn + Konjunktiv II**, conséquence avec **würde / hätte / wäre**. *sonst* = sinon.", attention: "On peut inverser sans *wenn* : *Hätte ich Zeit, würde ich kommen*.", exemples: [{"de":"Wenn ich Zeit hätte, würde ich dir helfen.","fr":"Si j'avais le temps, je t'aiderais."},{"de":"Beeil dich, sonst kommen wir zu spät.","fr":"Dépêche-toi, sinon nous arriverons en retard."}], titre: "La condition irréelle", intro: "« Wenn + Konjunktiv II », conséquence avec würde / hätte / wäre. « sonst » = sinon.",
        tableau: { entetes: ["Condition", "Conséquence"], lignes: [["Wenn ich Zeit hätte,", "würde ich dir helfen."], ["Wenn ich reich wäre,", "würde ich reisen."], ["Beeil dich,", "sonst kommst du zu spät."]] },
        schemas: [{ legende: "wenn en tête → la principale commence par le verbe.", mots: [{ m: "Wenn ich Zeit hätte,", r: "condition (wenn)", c: "conj" }, { m: "würde", r: "verbe (1)", c: "verbe" }, { m: "ich dir", r: "sujet + datif", c: "sujet" }, { m: "helfen", r: "infinitif (fin)", c: "fin" }] }],
        note: "On peut inverser : « Ich würde dir helfen, wenn ich Zeit hätte. » « sonst » introduit la conséquence négative." },
      { titre: "Les trois types de conditions",
        regle: "**Réelle** : *wenn* + présent → présent. **Irréelle (présent)** : *wenn* + Konjunktiv II → würde/wäre/hätte. **Irréelle (passé)** : *wenn* + hätte/wäre + participe.",
        intro: "*Wenn es regnet, bleibe ich* (réel) · *…regnen würde, bliebe ich* (irréel) · *…geregnet hätte, wäre ich geblieben* (passé).",
        tableau: { entetes: ["Type", "Structure", "Exemple"], lignes: [["réelle", "wenn + présent → présent", "Wenn ich Zeit habe, komme ich."], ["irréelle présent", "wenn + Konj. II → würde/wäre", "Wenn ich Zeit hätte, käme ich."], ["irréelle passé", "wenn + hätte/wäre + participe", "Wenn ich Zeit gehabt hätte, wäre ich gekommen."]] },
        note: "Réel = possible (présent). Irréel = imaginaire (Konjunktiv II). Passé = trop tard (regret)." },
      { titre: "wenn, falls ou sonst ?",
        regle: "**wenn** = si (condition réelle ou répétée). **falls** = au cas où (condition **incertaine**). **sonst** = sinon (conséquence **négative**, + inversion).",
        intro: "*Falls du kommst…* (éventuel) vs *Beeil dich, **sonst** verpassen wir…* (sinon).",
        tableau: { entetes: ["Mot", "Sens", "Exemple"], lignes: [["wenn", "si / quand", "Wenn es regnet, bleibe ich."], ["falls", "au cas où", "Falls es regnet, nimm den Schirm."], ["sonst", "sinon (+ inversion)", "Beeil dich, sonst kommst du zu spät."]] },
        note: "*sonst* est un adverbe → inversion (verbe en 2e). *wenn/falls* rejettent le verbe à la fin de la subordonnée." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Une condition irréelle se construit avec…", options: ["wenn + Konjunktiv II", "wenn + présent", "weil + indicatif"], correct: 0, explication: "Wenn ich Zeit hätte, würde ich…" },
      { type: "qcm", consigne: "Choisissez.", question: "Wenn ich du ___, würde ich es sofort machen.", options: ["wäre", "bin", "war", "bist"], correct: 0, explication: "sein → wäre (Konjunktiv II)." },
      { type: "trou", consigne: "Complétez (sonst).", texte: "Beeil dich, {0} verpassen wir den Zug.", accepte: [["sonst"]], indice: "sinon = sonst" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "werden", droite: "würde" }, { gauche: "können", droite: "könnte" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Si j'avais le temps, je viendrais.", accepte: ["Wenn ich Zeit hätte, würde ich kommen", "Ich würde kommen, wenn ich Zeit hätte"], aide: "wenn + hätte … würde" },
      { type: "qcm", consigne: "Réelle ou irréelle ?", question: "« Wenn ich Zeit habe, komme ich » est une condition…", options: ["réelle (possible)", "irréelle (imaginaire)", "passée"], correct: 0, explication: "wenn + présent → présent = condition réelle." },
      { type: "trou", consigne: "Condition irréelle au passé.", texte: "Wenn ich das gewusst {0}, wäre ich gekommen. (haben)", accepte: [["hätte"]], indice: "irréel passé → hätte + participe" },
      { type: "qcm", consigne: "wenn, falls ou sonst ?", question: "Nimm einen Schirm mit, ___ wirst du nass.", options: ["sonst", "wenn", "falls", "als"], correct: 0, explication: "conséquence négative → sonst (+ inversion)." }
    ]
  },
  b1g16: {
    id: "b1g16",
    einstieg: {"intro":"Observe les deux façons d'exprimer le but.","exemples":[{"de":"Ich lerne, um die Prüfung zu bestehen.","fr":"J'étudie pour réussir l'examen."},{"de":"Ich gebe dir Geld, damit du einkaufen kannst.","fr":"Je te donne de l'argent pour que tu fasses les courses."}],"question":"Quand utiliser *um…zu* et quand *damit* ?"},
    merke: ["But, *même sujet* : *um … zu* + infinitif.","But, *sujets différents* : *damit* + subordonnée (verbe à la fin).","*damit* obligatoire si le verbe ne peut pas être à l'infinitif."],
    achtung: [{"erreur":"Ich lerne, damit ich bestehe. (même sujet)","correct":"Ich lerne, **um** zu **bestehen**.","explication":"Même sujet → *um…zu*."},{"erreur":"Ich gebe dir Geld, um du einzukaufen.","correct":"…, **damit** du einkaufst.","explication":"Sujets différents → *damit*."}],
    kontrast: {"titre":"Le but : allemand vs français","similitudes":["« pour / pour que » expriment le but."],"differences":["*um…zu* (même sujet) vs *damit* (sujets différents).","*um…zu* place *zu + infinitif* à la fin.","« pour que » + subjonctif ; *damit* + indicatif."]}, titre: "Les propositions finales", titreDE: "Finalsätze: um … zu / damit", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer un but", "Choisir um … zu (même sujet) ou damit (sujet différent)"],
    grammairePoints: ["um … zu + Infinitiv", "damit + Nebensatz"],
    exemplesPlus: [{"de":"Ich lerne Deutsch, um in Wien zu studieren.","fr":"*um … zu*: das Ziel, gleiches Subjekt."},{"de":"Sie spart Geld, um ein Auto zu kaufen.","fr":"*um … zu* + Infinitiv am Ende."},{"de":"Ich erkläre es noch einmal, damit alle es verstehen.","fr":"*damit*: das Ziel, anderes Subjekt."},{"de":"Er ruft an, damit wir uns keine Sorgen machen.","fr":"*damit* + Nebensatz (Verb am Ende)."},{"de":"Wir nehmen ein Taxi, um pünktlich zu sein.","fr":"*um … zu*: warum wir das tun."}],
    coursDE: [
      "Ein **Finalsatz** drückt ein **Ziel** oder eine **Absicht** aus – das « Wofür? » im Sinne von « pour quoi faire? ». Im Deutschen gibt es dafür zwei Strukturen: **um … zu + Infinitiv** und **damit + Nebensatz**.",
      "Du benutzt **um … zu + Infinitiv**, wenn das Subjekt in beiden Satzteilen **gleich** ist. Beispiel: « *Ich lerne Deutsch, **um** in Deutschland zu **arbeiten*** » (ich lerne und ich arbeite – dieselbe Person). Das *zu* + Infinitiv steht am Ende.",
      "Du benutzt **damit**, wenn die zwei Satzteile **verschiedene** Subjekte haben. Beispiel: « *Ich erkläre es langsam, **damit** alle mich **verstehen*** » (ich erkläre, aber die anderen verstehen). Nach *damit* steht das Verb am Ende.",
      "Die einfache Regel: **gleiches Subjekt → um … zu**, **verschiedene Subjekte → damit**. Mit diesen beiden Formen kannst du jedes Ziel klar ausdrücken."
    ],
    grammaire: [
      { exemples: [{"de":"Ich spare Geld, um zu reisen.","fr":"J'économise de l'argent pour voyager."},{"de":"Ich schreibe es auf, damit ich es nicht vergesse.","fr":"Je le note pour ne pas l'oublier."}], regle: "Exprimer le **but** : **um … zu** + infinitif (même sujet) ou **damit** + subordonnée (sujet différent, verbe à la fin).", attention: "Test : même sujet → *um … zu* ; nouveau sujet → *damit*.", titre: "Exprimer le but", intro: "« um … zu + infinitif » si le sujet est le même. « damit » si le sujet change (verbe à la fin).",
        tableau: { entetes: ["Structure", "Condition", "Exemple"], lignes: [["um … zu + Inf.", "même sujet", "Ich spare, um zu reisen."], ["damit", "sujet différent", "Ich spare, damit meine Kinder studieren können."]] },
        schemas: [{ legende: "damit : verbe conjugué à la FIN.", mots: [{ m: "Ich erkläre es,", r: "principale", c: "objet" }, { m: "damit", r: "but", c: "conj" }, { m: "du es", r: "sujet + objet", c: "sujet" }, { m: "verstehst", r: "verbe (fin)", c: "fin" }] }],
        note: "Test : si on peut garder le même sujet → um … zu ; s'il faut un nouveau sujet → damit." },
      { titre: "um…zu, damit et les autres « …zu »",
        regle: "But : **um…zu** (même sujet) / **damit** (sujet différent). Deux cousins utiles : **ohne…zu** (sans) et **(an)statt…zu** (au lieu de) — même sujet, *zu + infinitif* à la fin.",
        intro: "*Er ging, **ohne** zu **grüßen*** (sans saluer). *Er spielt, **statt** zu **lernen*** (au lieu d'étudier).",
        tableau: { entetes: ["Structure", "Sens", "Exemple"], lignes: [["um … zu", "but (pour)", "Ich lerne, um zu bestehen."], ["damit", "but (sujet ≠)", "Ich helfe, damit du es schaffst."], ["ohne … zu", "sans", "Er ging, ohne zu zahlen."], ["(an)statt … zu", "au lieu de", "Er schläft, statt zu arbeiten."]] },
        note: "*um / ohne / (an)statt … zu* : même sujet, *zu+infinitif* à la fin. *damit* : sujet différent, verbe conjugué à la fin." },
      { titre: "But avec un nom : für + accusatif",
        regle: "Devant un **nom**, le but se dit **für + accusatif** (*für die Gesundheit*). Devant un **verbe**, on utilise *um…zu* / *damit*.",
        intro: "*Ich mache Sport **für** meine Gesundheit* (nom) vs *…, **um** fit **zu** bleiben* (verbe).",
        tableau: { entetes: ["Complément", "Structure", "Exemple"], lignes: [["un nom", "für + Akk.", "Geld für die Reise"], ["un verbe (même sujet)", "um … zu", "sparen, um zu reisen"], ["un verbe (sujet ≠)", "damit", "…, damit du reisen kannst"]] },
        note: "*für* = but avec un **nom** ; *um…zu / damit* = but avec un **verbe**." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« um … zu » s'emploie quand…", options: ["le sujet est le même", "le sujet change", "il y a deux verbes conjugués"], correct: 0, explication: "Même sujet → um … zu." },
      { type: "qcm", consigne: "um…zu ou damit ?", question: "Ich spreche langsam, ___ alle mich verstehen.", options: ["damit", "um zu", "weil", "um"], correct: 0, explication: "sujet différent (alle) → damit." },
      { type: "trou", consigne: "Complétez (um … zu).", texte: "Ich lerne Deutsch, {0} in Berlin zu arbeiten.", accepte: [["um"]], indice: "but, même sujet : um … zu" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "um … zu", droite: "même sujet" }, { gauche: "damit", droite: "sujet différent" }, { gauche: "weil", droite: "cause" }, { gauche: "obwohl", droite: "concession" }] },
      { type: "ordre", consigne: "Construisez la finale.", mots: ["um", "Geld", "zu", "sparen"], correct: "um Geld zu sparen", traduction: "pour économiser de l'argent" },
      { type: "qcm", consigne: "ohne … zu.", question: "Er ging weg, ___ sich zu verabschieden.", options: ["ohne", "um", "damit", "statt"], correct: 0, explication: "sans dire au revoir → ohne … zu." },
      { type: "trou", consigne: "But avec un nom.", texte: "Ich spare Geld {0} eine Reise.", accepte: [["für"]], indice: "devant un nom → für + accusatif" },
      { type: "qcm", consigne: "au lieu de.", question: "Er spielt den ganzen Tag, ___ zu lernen.", options: ["statt", "um", "ohne", "für"], correct: 0, explication: "au lieu d'étudier → (an)statt … zu." }
    ]
  },
  b1g17: {
    id: "b1g17",
    einstieg: {"intro":"Observe les connecteurs et la transformation d'un verbe en nom.","exemples":[{"de":"Es regnet, deshalb bleibe ich zu Hause.","fr":"Il pleut, c'est pourquoi je reste."},{"de":"Trotzdem gehe ich.","fr":"Malgré tout, j'y vais."},{"de":"Das Lesen ist wichtig.","fr":"La lecture est importante."}],"question":"Comment relier deux idées et nominaliser un verbe ?"},
    merke: ["Connecteurs *deshalb, trotzdem, außerdem* → la principale fait l'*inversion*.","Nominalisation : l'infinitif devient un nom *neutre* (*das Lesen*).","Distinguer connecteur (position 1, inversion) et subordonnant (verbe en fin)."],
    achtung: [{"erreur":"Es regnet, deshalb ich bleibe zu Hause.","correct":"…, deshalb **bleibe ich** zu Hause.","explication":"*deshalb* (position 1) → inversion sujet-verbe."},{"erreur":"das lesen ist wichtig","correct":"**das Lesen** ist wichtig","explication":"L'infinitif nominalisé prend une majuscule et *das*."}],
    kontrast: {"titre":"Connecteurs et nominalisation : allemand vs français","similitudes":["« c'est pourquoi », « la lecture » existent dans les deux."],"differences":["*deshalb/trotzdem* déclenchent l'inversion.","L'infinitif se nominalise en un mot neutre.","Distinguer connecteur (inversion) et subordonnant (verbe en fin)."]}, titre: "Noms, verbes & connecteurs", titreDE: "Nomen-Verb-Verbindungen & Konnektoren", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Utiliser des locutions nom + verbe", "Relier ses idées avec des connecteurs"],
    grammairePoints: ["eine Entscheidung treffen", "trotzdem, außerdem, deswegen"],
    exemplesPlus: [{"de":"Wir müssen heute eine Entscheidung treffen.","fr":"Feste Verbindung: *eine Entscheidung treffen*."},{"de":"Ich stelle dir eine Frage.","fr":"Feste Verbindung: *eine Frage stellen*."},{"de":"Es war kalt; trotzdem sind wir schwimmen gegangen.","fr":"*trotzdem*: trotz des Problems."},{"de":"Das Hotel war schön. Außerdem war es billig.","fr":"*außerdem*: noch ein Punkt dazu."},{"de":"Ich war krank, deswegen bin ich zu Hause geblieben.","fr":"*deswegen*: die Folge."}],
    coursDE: [
      "Auf B1-Niveau lernst du festere Ausdrücke und bessere **Konnektoren** (Verbindungswörter), damit dein Deutsch flüssiger und erwachsener klingt.",
      "**Nomen-Verb-Verbindungen** sind feste Paare aus einem Nomen und einem Verb: *eine Entscheidung **treffen*** (= entscheiden), *eine Frage **stellen*** (= fragen), *Hilfe **leisten***, *in Kontakt **bleiben***. Lerne sie als feste Ausdrücke.",
      "Wichtige **Konnektoren** verbinden deine Sätze logisch: *trotzdem* (= malgré cela), *außerdem* (= en plus), *deswegen / deshalb* (= c'est pourquoi). Achtung: Diese Wörter stehen auf **Position 1**, also kommt das Verb direkt danach: « ***Trotzdem** **gehe** ich zur Arbeit* ».",
      "Mit diesen Konnektoren kannst du Gründe, Folgen und Gegensätze ausdrücken, ohne immer nur *und* oder *aber* zu sagen. Versuche, in jedem Text ein paar davon zu benutzen – das hebt dein Niveau sofort."
    ],
    grammaire: [
      { exemples: [{"de":"Wir müssen eine Entscheidung treffen.","fr":"Nous devons prendre une décision."},{"de":"Es regnet; trotzdem gehen wir raus.","fr":"Il pleut ; malgré tout, nous sortons."}], regle: "Locutions figées **nom + verbe** (*eine Entscheidung **treffen***, *eine Frage **stellen***) et connecteurs (*außerdem, trotzdem, deswegen*).", attention: "Après *außerdem/trotzdem/deswegen* en tête, le verbe reste en **2ᵉ position**.", titre: "Locutions figées et connecteurs", intro: "Beaucoup d'expressions associent un nom et un verbe précis. Les connecteurs relient les phrases (et placent le verbe en 2e position).",
        tableau: { entetes: ["Locution / connecteur", "Sens", "Exemple"], lignes: [["eine Entscheidung treffen", "prendre une décision", "Ich treffe eine Entscheidung."], ["eine Frage stellen", "poser une question", "Er stellt eine Frage."], ["außerdem", "de plus", "Es ist teuer; außerdem ist es weit."], ["trotzdem", "malgré tout", "Es regnet; trotzdem gehe ich."], ["deswegen", "c'est pourquoi", "Ich bin krank; deswegen bleibe ich."]] },
        note: "Après außerdem / trotzdem / deswegen en tête, le verbe reste en 2e position (inversion)." },
      { titre: "Locutions figées nom + verbe (à connaître)",
        regle: "Beaucoup d'idées se disent avec un **couple nom + verbe** figé, plus soutenu que le verbe simple.",
        intro: "*eine Entscheidung **treffen*** (= entscheiden), *eine Frage **stellen*** (= fragen).",
        tableau: { entetes: ["Locution", "= verbe simple", "Sens"], lignes: [["eine Entscheidung treffen", "entscheiden", "prendre une décision"], ["eine Frage stellen", "fragen", "poser une question"], ["Hilfe leisten", "helfen", "porter secours"], ["eine Rolle spielen", "—", "jouer un rôle"], ["Rücksicht nehmen", "—", "faire attention (aux autres)"], ["zur Verfügung stehen", "—", "être à disposition"]] },
        note: "Chaque locution a **son** verbe : « eine Entscheidung *treffen* » (jamais « machen »)." },
      { titre: "Trois classes de connecteurs (place du verbe)",
        regle: "Les mots de liaison se rangent en **3 classes** selon leur effet sur le verbe.",
        intro: "coordonnants (verbe 2) · connecteurs adverbiaux (position 1 → inversion) · subordonnants (verbe à la fin).",
        tableau: { entetes: ["Classe", "Exemples", "Place du verbe"], lignes: [["coordonnants", "und, aber, oder, denn, sondern", "position 2 (pas d'inversion)"], ["adverbes connecteurs", "deshalb, trotzdem, außerdem, deswegen", "position 1 → inversion"], ["subordonnants", "weil, obwohl, dass, wenn", "verbe à la FIN"]] },
        note: "Piège : *trotzdem* (adverbe → inversion) vs *obwohl* (subordonnant → verbe fin) : même sens, syntaxe opposée." },
      { titre: "Nominaliser un verbe : das + infinitif",
        regle: "Un infinitif peut devenir un **nom neutre** : majuscule + article **das**. Il désigne l'activité.",
        intro: "*lesen → **das Lesen*** (la lecture), *essen → **das Essen*** (le repas).",
        tableau: { entetes: ["Verbe", "Nom (das)", "Exemple"], lignes: [["lesen", "das Lesen", "Das Lesen macht Spaß."], ["rauchen", "das Rauchen", "Das Rauchen ist verboten."], ["schwimmen", "das Schwimmen", "Das Schwimmen ist gesund."]] },
        note: "L'infinitif nominalisé est toujours **neutre** (das) et prend une **majuscule**." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez le verbe.", question: "eine Entscheidung ___", options: ["treffen", "machen", "geben", "nehmen"], correct: 0, explication: "Locution figée : eine Entscheidung treffen." },
      { type: "qcm", consigne: "Choisissez le connecteur.", question: "Es regnet. ___ gehe ich spazieren. (malgré tout)", options: ["Trotzdem", "Deswegen", "Außerdem", "Weil"], correct: 0, explication: "trotzdem = malgré tout." },
      { type: "trou", consigne: "Complétez (inversion après deswegen).", texte: "Ich bin müde, deswegen {0} ich nach Hause. (gehen)", accepte: [["gehe"]], indice: "deswegen en tête → verbe en 2e position" },
      { type: "association", consigne: "Associez le connecteur et son sens.", paires: [{ gauche: "außerdem", droite: "de plus" }, { gauche: "trotzdem", droite: "malgré tout" }, { gauche: "deswegen", droite: "c'est pourquoi" }, { gauche: "eine Frage stellen", droite: "poser une question" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je prends une décision.", accepte: ["Ich treffe eine Entscheidung"], aide: "eine Entscheidung treffen" },
      { type: "qcm", consigne: "Classe du connecteur.", question: "Après « obwohl », le verbe va…", options: ["à la fin", "en 2e position", "en position 1"], correct: 0, explication: "obwohl = subordonnant → verbe à la fin." },
      { type: "trou", consigne: "Nominalisation.", texte: "{0} Rauchen ist hier verboten.", accepte: [["Das"]], indice: "infinitif nominalisé → neutre : das" },
      { type: "qcm", consigne: "Locution figée.", question: "eine Frage ___", options: ["stellen", "machen", "geben", "fragen"], correct: 0, explication: "eine Frage stellen (poser une question)." }
    ]
  },
  b1g18: {
    id: "b1g18",
    einstieg: {"intro":"Observe le temps du récit écrit.","exemples":[{"de":"Es war einmal ein König.","fr":"Il était une fois un roi."},{"de":"Er stand auf und ging hinaus.","fr":"Il se leva et sortit."},{"de":"Sie hatte alles vergessen.","fr":"Elle avait tout oublié."}],"question":"Quel temps domine dans un récit écrit ?"},
    merke: ["Récit écrit (conte, roman) : *Präteritum*.","Verbes forts au prétérit : *ging, kam, sah, nahm, fand…*","Le Plusquamperfekt marque ce qui s'est passé *avant* le récit."],
    achtung: [{"erreur":"Es ist einmal ein König gewesen.","correct":"Es **war** einmal ein König.","explication":"Le récit écrit privilégie le prétérit (war)."},{"erreur":"Er stehte auf.","correct":"Er **stand** auf.","explication":"*stehen* est fort : prétérit *stand*."}],
    kontrast: {"titre":"Le récit au passé : allemand vs français","similitudes":["Le récit a son temps de base (passé simple/Präteritum)."],"differences":["Le Präteritum est le temps du *récit écrit*.","Beaucoup de verbes forts à mémoriser.","À l'oral on repasserait au Perfekt."]}, titre: "Les temps du passé (récit)", titreDE: "Vergangenheit im Text", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Choisir le bon temps dans un récit", "Combiner Präteritum et Plusquamperfekt"],
    grammairePoints: ["Präteritum (récit écrit)", "Plusquamperfekt (antériorité)"],
    exemplesPlus: [{"de":"Es war einmal ein König, der drei Töchter hatte.","fr":"*Präteritum*: typisch für Märchen und Geschichten."},{"de":"Sie öffnete die Tür und trat ins Zimmer.","fr":"Mehrere Handlungen im Präteritum."},{"de":"Nachdem er gegessen hatte, las er ein Buch.","fr":"*Plusquamperfekt*: das war vorher passiert."},{"de":"Der Zug war schon abgefahren, als wir ankamen.","fr":"Vorher (Plusquamperfekt) und danach (Präteritum)."},{"de":"Plötzlich klingelte das Telefon laut.","fr":"*Präteritum* in der Erzählung."}],
    coursDE: [
      "Wenn du eine **Geschichte schreibst** oder einen Text liest, triffst du vor allem das **Präteritum** und das **Plusquamperfekt**. Diese Lektion zeigt dir, wie man die Vergangenheit in einem Text richtig benutzt.",
      "Das **Präteritum** ist die normale Erzählzeit im geschriebenen Text: « *Sie **stand** früh **auf**, **trank** einen Kaffee und **ging** zur Arbeit* ». Die Verben sind oft stark (unregelmäßig): *gehen → ging*, *kommen → kam*, *sehen → sah*.",
      "Das **Plusquamperfekt** brauchst du, wenn du über etwas sprichst, das **noch früher** passiert ist. Du bildest es mit **hatte/war** + Partizip II: « *Sie **hatte** schon **gefrühstückt**, als das Telefon **klingelte*** ».",
      "Sehr nützlich ist das Wort **nachdem**: Es leitet die frühere Handlung ein und steht oft mit dem Plusquamperfekt: « ***Nachdem** ich **gegessen hatte**, **ging** ich spazieren ». Merke dir das Paar: *nachdem* + Plusquamperfekt, dann Präteritum."
    ],
    grammaire: [
      { exemples: [{"de":"Sie kam nach Hause und kochte das Essen.","fr":"Elle rentra et prépara le repas."},{"de":"Er hatte vorher schon angerufen.","fr":"Il avait déjà appelé auparavant."}], regle: "Dans un récit, le **Präteritum** porte le fil ; le **Plusquamperfekt** marque ce qui s'était passé **avant**.", attention: "Concordance avec *nachdem* : subordonnée **plus-que-parfait** → principale **prétérit**.", titre: "Construire un récit cohérent", intro: "Dans un texte au passé, le Präteritum porte le fil du récit ; le Plusquamperfekt marque ce qui s'était passé AVANT.",
        tableau: { entetes: ["Plan", "Temps", "Exemple"], lignes: [["fil du récit", "Präteritum", "Sie kam nach Hause und kochte."], ["antériorité", "Plusquamperfekt", "Sie hatte schon eingekauft."], ["dialogue/oral inséré", "Perfekt", "« Ich habe das gemacht », sagte sie."]] },
        note: "Mots utiles : zuerst, dann, danach, schließlich, nachdem (+ Plusquamperfekt)." },
      { titre: "Les mots qui structurent le récit",
        regle: "Un récit s'organise avec des **adverbes temporels** qui marquent l'ordre et le rythme. En tête, ils entraînent l'**inversion**.",
        intro: "*Zuerst…, dann…, plötzlich…, schließlich…* — ils font avancer l'histoire.",
        tableau: { entetes: ["Étape", "Mots", "Exemple"], lignes: [["début", "zuerst, eines Tages", "Eines Tages ging er los."], ["suite", "dann, danach, später", "Dann traf er einen Freund."], ["surprise", "plötzlich, auf einmal", "Plötzlich klingelte es."], ["fin", "schließlich, am Ende, zuletzt", "Schließlich kam er nach Hause."]] },
        note: "En tête de phrase, ces mots entraînent l'inversion : « Plötzlich **klingelte** das Telefon »." },
      { titre: "Verbes fréquents du récit au prétérit",
        regle: "Le récit emploie beaucoup de **verbes forts**. Voici ceux qu'on rencontre à chaque page — à apprendre avec leur prétérit.",
        intro: "Ce sont eux qui font avancer l'histoire : *er **ging**, **stand** auf, **sah**, **rief***.",
        tableau: { entetes: ["Infinitif", "Prétérit", "Sens"], lignes: [["gehen", "ging", "aller"], ["kommen", "kam", "venir"], ["stehen", "stand", "être debout"], ["sitzen", "saß", "être assis"], ["sehen", "sah", "voir"], ["rufen", "rief", "appeler / crier"], ["finden", "fand", "trouver"], ["nehmen", "nahm", "prendre"]] },
        note: "*sein/haben* (war/hatte) et les modaux se mettent au prétérit même à l'oral." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Dans un récit écrit, le fil principal est au…", options: ["Präteritum", "Perfekt", "Plusquamperfekt"], correct: 0, explication: "Le Präteritum porte le récit écrit." },
      { type: "qcm", consigne: "Choisissez (antériorité).", question: "Als er ankam, ___ der Film schon begonnen.", options: ["hatte", "hat", "war", "ist"], correct: 0, explication: "beginnen → haben → hatte begonnen (antérieur)." },
      { type: "trou", consigne: "Complétez (Präteritum).", texte: "Sie {0} nach Hause und machte das Essen. (kommen)", accepte: [["kam"]], indice: "kommen → kam" },
      { type: "association", consigne: "Associez le rôle et le temps.", paires: [{ gauche: "fil du récit", droite: "Präteritum" }, { gauche: "antériorité", droite: "Plusquamperfekt" }, { gauche: "oral/dialogue", droite: "Perfekt" }, { gauche: "sein/haben", droite: "Präteritum" }] },
      { type: "ordre", consigne: "Phrase au plus-que-parfait.", mots: ["Er", "hatte", "vorher", "angerufen"], correct: "Er hatte vorher angerufen", traduction: "Il avait appelé avant." },
      { type: "qcm", consigne: "Prétérit fort (récit).", question: "Prétérit de « stehen » (er) :", options: ["stand", "stehte", "stund", "gestanden"], correct: 0, explication: "stehen → stand (verbe fort)." },
      { type: "trou", consigne: "Adverbe de récit + inversion.", texte: "Plötzlich {0} das Telefon. (klingeln)", accepte: [["klingelte"]], indice: "verbe faible → klingelte, en 2e position après Plötzlich" },
      { type: "qcm", consigne: "Structurer le récit.", question: "___ kam er endlich nach Hause. (à la fin)", options: ["Schließlich", "Zuerst", "Plötzlich", "Dann"], correct: 0, explication: "fin du récit → schließlich." }
    ]
  },
  b1g19: {
    id: "b1g19",
    einstieg: {"intro":"Observe les trois traductions de « quand ».","exemples":[{"de":"Als ich klein war, …","fr":"Quand j'étais petit, …"},{"de":"Wenn ich Zeit habe, lese ich.","fr":"Quand j'ai le temps, je lis."},{"de":"Ich weiß nicht, wann er kommt.","fr":"Je ne sais pas quand il vient."}],"question":"Quand dit-on *als*, *wenn* ou *wann* ?"},
    merke: ["*als* = quand (*fait unique* au passé).","*wenn* = quand (présent/futur ou *répétition*).","*wann* = quand ? (question, même indirecte)."],
    achtung: [{"erreur":"Wenn ich gestern ankam, regnete es.","correct":"**Als** ich gestern ankam, regnete es.","explication":"Fait unique au passé = *als*."},{"erreur":"Ich weiß nicht, wenn er kommt.","correct":"Ich weiß nicht, **wann** er kommt.","explication":"Interrogative indirecte = *wann*."}],
    kontrast: {"titre":"Quand : allemand vs français","similitudes":["« quand » couvre temps et question en français."],"differences":["*als* (fait passé unique), *wenn* (répétition/présent), *wann* (question).","Un seul « quand » français → trois mots allemands.","À ne pas confondre avec *ob* (si oui/non)."]}, titre: "Propositions temporelles", titreDE: "Temporalsätze: Gleichzeitigkeit & Vorzeitigkeit", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer la simultanéité (während, solange)", "Exprimer la non-simultanéité (bevor, nachdem, sobald)"],
    grammairePoints: ["während, solange", "bevor, nachdem, sobald"],
    exemplesPlus: [{"de":"Während ich koche, deckst du den Tisch.","fr":"*während*: zwei Dinge gleichzeitig."},{"de":"Solange es regnet, bleiben wir drinnen.","fr":"*solange*: die ganze Zeit über."},{"de":"Bevor ich schlafe, lese ich noch etwas.","fr":"*bevor*: davor."},{"de":"Nachdem wir gegessen hatten, gingen wir spazieren.","fr":"*nachdem* + Plusquamperfekt: danach."},{"de":"Sobald ich ankomme, rufe ich dich an.","fr":"*sobald*: sofort danach."}],
    coursDE: [
      "**Temporalsätze** sind Nebensätze, die sagen, **wann** etwas passiert. Sie beginnen mit einer Konjunktion, und das **Verb steht am Ende**. Die Konjunktion zeigt, ob die Handlungen gleichzeitig oder nacheinander passieren.",
      "Für **Gleichzeitigkeit** (zwei Dinge zur gleichen Zeit) benutzt du **während** (= pendant que) und **solange** (= tant que): « ***Während** ich koche, **hört** er Musik ». Für eine einmalige Handlung in der Vergangenheit gibt es **als**, für Gegenwart oder Wiederholung **wenn**.",
      "Für **Vorzeitigkeit** (zuerst A, dann B) benutzt du **nachdem**: « ***Nachdem** ich gegessen hatte, ging ich los ». Mit **bevor** (= avant que) ist die Reihenfolge umgekehrt: « ***Bevor** ich gehe, putze ich die Zähne ».",
      "Ein nützliches Wort ist **sobald** (= dès que): « ***Sobald** ich ankomme, rufe ich dich an ». Vergiss nicht: In all diesen Nebensätzen steht das **Verb am Ende**, und ein **Komma** trennt die zwei Sätze."
    ],
    grammaire: [
      { exemples: [{"de":"Während ich koche, deckst du den Tisch.","fr":"Pendant que je cuisine, tu mets la table."},{"de":"Sobald er kommt, fangen wir an.","fr":"Dès qu'il arrive, nous commençons."}], regle: "**Simultanéité** : *während, solange*. **Succession** : *bevor* (avant), *nachdem* (après), *sobald* (dès que). Verbe à la fin.", attention: "Avec **nachdem**, pense à la concordance des temps (plus-que-parfait → prétérit).", titre: "Simultané ou successif ?", intro: "Simultanéité : während, solange. Non-simultanéité : bevor (avant), nachdem (après), sobald (dès que). Verbe à la fin.",
        tableau: { entetes: ["Conjonction", "Relation", "Exemple"], lignes: [["während", "simultané", "Während ich koche, deckst du den Tisch."], ["solange", "simultané (durée)", "Solange es regnet, bleiben wir drin."], ["bevor", "avant", "Bevor ich gehe, esse ich."], ["nachdem", "après (antériorité)", "Nachdem ich gegessen hatte, ging ich."], ["sobald", "dès que", "Sobald er kommt, fangen wir an."]] },
        schemas: [{ legende: "während : verbe à la FIN dans la subordonnée.", mots: [{ m: "Während ich", r: "subordonnée (während)", c: "conj" }, { m: "Musik", r: "complément", c: "sujet" }, { m: "höre,", r: "verbe (fin)", c: "fin" }, { m: "koche ich", r: "principale (verbe 1)", c: "verbe" }] }],
        note: "Avec « nachdem », pensez à la concordance des temps : subordonnée plus-que-parfait → principale prétérit." },
      { titre: "Les trois « quand » : als / wenn / wann",
        regle: "**als** = fait **unique** au passé. **wenn** = présent/futur ou **répétition** (immer wenn). **wann** = **question** (« à quel moment ? »), même indirecte.",
        intro: "*Als ich klein war* (une fois) · *Wenn es regnet* (chaque fois) · *Ich weiß nicht, wann…* (question).",
        tableau: { entetes: ["Mot", "Emploi", "Exemple"], lignes: [["als", "fait unique passé", "Als ich ankam, regnete es."], ["wenn", "présent / futur", "Wenn ich Zeit habe, lese ich."], ["wenn", "répétition (immer)", "Immer wenn er kommt, lacht sie."], ["wann", "question (indirecte)", "Ich weiß nicht, wann er kommt."]] },
        note: "Piège : passé unique → **als** (jamais wenn). Question → **wann** (jamais wenn/ob)." },
      { titre: "nachdem / bevor : la concordance des temps",
        regle: "Avec **nachdem** (antériorité), la subordonnée est à un temps **antérieur** à la principale : Plusquamperfekt → Präteritum, ou Perfekt → Präsens.",
        intro: "*Nachdem ich gegessen **hatte**, **ging** ich* (d'abord manger, puis partir).",
        tableau: { entetes: ["Subordonnée", "Principale", "Exemple"], lignes: [["Plusquamperfekt", "Präteritum", "Nachdem ich gegessen hatte, ging ich."], ["Perfekt", "Präsens / Futur", "Nachdem ich gegessen habe, gehe ich."], ["bevor : même temps", "même temps", "Bevor ich gehe, esse ich."]] },
        note: "*nachdem* = décalage d'un temps (le plus tôt = plus-que-parfait). *bevor/während* : mêmes temps des deux côtés." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« während » exprime…", options: ["la simultanéité", "l'antériorité", "la cause"], correct: 0, explication: "während = pendant que (en même temps)." },
      { type: "qcm", consigne: "Choisissez.", question: "___ er kommt, fangen wir an. (dès que)", options: ["Sobald", "Bevor", "Nachdem", "Obwohl"], correct: 0, explication: "sobald = dès que." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Bevor ich {0}, frühstücke ich. (gehen)", accepte: [["gehe"]], indice: "bevor → verbe à la fin" },
      { type: "association", consigne: "Associez la conjonction et la relation.", paires: [{ gauche: "während", droite: "simultané" }, { gauche: "bevor", droite: "avant" }, { gauche: "nachdem", droite: "après" }, { gauche: "sobald", droite: "dès que" }] },
      { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["während", "ich", "arbeite"], correct: "während ich arbeite", traduction: "pendant que je travaille" },
      { type: "qcm", consigne: "als, wenn ou wann ?", question: "___ ich ein Kind war, wohnte ich in Rom.", options: ["Als", "Wenn", "Wann", "Ob"], correct: 0, explication: "fait unique au passé → als." },
      { type: "trou", consigne: "Répétition.", texte: "Immer {0} es schneit, freuen sich die Kinder.", accepte: [["wenn"]], indice: "répétition → wenn" },
      { type: "qcm", consigne: "nachdem + temps.", question: "Nachdem er gegessen ___, ging er.", options: ["hatte", "hat", "war", "ist"], correct: 0, explication: "nachdem → antériorité : Plusquamperfekt (hatte gegessen)." }
    ]
  },
  b1g20: {
    id: "b1g20",
    einstieg: {"intro":"Observe le cas exigé par chaque préposition.","exemples":[{"de":"mit dem Bus","fr":"en bus (datif)"},{"de":"für dich","fr":"pour toi (accusatif)"},{"de":"während des Tages","fr":"pendant la journée (génitif)"}],"question":"Comment savoir quel cas suit une préposition ?"},
    merke: ["+ accusatif : *für, ohne, gegen, um, durch*.","+ datif : *mit, nach, aus, bei, von, zu, seit*.","Mixtes (*in, an, auf*…) : accusatif (direction) ou datif (position)."],
    achtung: [{"erreur":"für dir","correct":"für **dich**","explication":"*für* régit l'accusatif."},{"erreur":"mit dich","correct":"mit **dir**","explication":"*mit* régit le datif."}],
    kontrast: {"titre":"Les prépositions : allemand vs français","similitudes":["Les prépositions relient les mots."],"differences":["Chaque préposition impose un *cas* (à apprendre par groupes).","Les mixtes changent de cas selon le sens.","Le français n'a pas cette variation."]}, titre: "Les prépositions", titreDE: "Wechselpräpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Choisir le cas après une préposition mixte", "Distinguer lieu (Dat.) et direction (Akk.)"],
    grammairePoints: ["an, auf, in, über…", "Wo? + Dat. / Wohin? + Akk."],
    exemplesPlus: [{"de":"Das Buch liegt auf dem Tisch.","fr":"*Wo?* + Dativ (Ort, keine Bewegung)."},{"de":"Ich lege das Buch auf den Tisch.","fr":"*Wohin?* + Akkusativ (Bewegung zum Ziel)."},{"de":"Die Katze sitzt unter dem Stuhl.","fr":"*Wo?* + Dativ: *unter dem Stuhl*."},{"de":"Wir gehen heute Abend ins Kino.","fr":"*Wohin?* + Akkusativ: *ins Kino*."},{"de":"Das Bild hängt an der Wand.","fr":"*Wo?* + Dativ: *an der Wand*."}],
    coursDE: [
      "Die **Wechselpräpositionen** sind neun besondere Präpositionen, die **zwei Fälle** haben können: Akkusativ **oder** Dativ. Welcher Fall richtig ist, hängt von der Frage *Wo?* oder *Wohin?* ab.",
      "Diese neun Präpositionen sind: **in, an, auf, über, unter, vor, hinter, neben, zwischen**. Lerne sie gut, denn du brauchst sie ständig, um Orte und Bewegungen zu beschreiben.",
      "Die Regel ist logisch. **Keine Bewegung zu einem Ziel → Dativ** (Frage *Wo?*): « *Das Buch liegt **auf dem** Tisch* », « *Ich bin **in der** Stadt* ». **Bewegung zu einem Ziel → Akkusativ** (Frage *Wohin?*): « *Ich lege das Buch **auf den** Tisch* », « *Ich gehe **in die** Stadt* ».",
      "Achte auf das Verb: *liegen, stehen, sitzen, sein* zeigen eine Position (→ Dativ); *legen, stellen, setzen, gehen, fahren* zeigen eine Bewegung (→ Akkusativ). Wenn du das Verb verstehst, weißt du sofort den richtigen Fall."
    ],
    grammaire: [
      { exemples: [{"de":"Die Lampe hängt über dem Tisch.","fr":"La lampe est suspendue au-dessus de la table."},{"de":"Ich hänge das Bild an die Wand.","fr":"J'accroche le tableau au mur."}], regle: "Neuf prépositions mixtes (*an, auf, hinter, in, neben, über, unter, vor, zwischen*) : **datif** si position (**Wo?**), **accusatif** si direction (**Wohin?**).", attention: "Couples : *liegen/legen, stehen/stellen, sitzen/setzen* — position (Dat.) vs action de placer (Akk.).", titre: "Les prépositions mixtes (Wechselpräpositionen)", intro: "Neuf prépositions de lieu prennent le datif (position : Wo?) ou l'accusatif (direction : Wohin?).",
        tableau: { entetes: ["Question", "Cas", "Exemple"], lignes: [["Wo? (position)", "datif", "Das Buch liegt auf dem Tisch."], ["Wohin? (direction)", "accusatif", "Ich lege das Buch auf den Tisch."], ["Wo?", "datif", "Ich bin in der Schule."], ["Wohin?", "accusatif", "Ich gehe in die Schule."]] },
        schemas: [{ legende: "Wohin ? → accusatif (mouvement vers).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "stelle", r: "verbe (2)", c: "verbe" }, { m: "die Vase", r: "accusatif (quoi)", c: "objet" }, { m: "auf den Tisch", r: "direction (acc.)", c: "fin" }] }],
        note: "Les 9 : an, auf, hinter, in, neben, über, unter, vor, zwischen. Position = Dat., direction = Akk." },
      { titre: "Toutes les prépositions par cas",
        regle: "Chaque préposition impose un cas fixe (sauf les 9 mixtes). À mémoriser par groupes.",
        intro: "Mnémo : accusatif = **FUDGO** (für, um, durch, gegen, ohne) ; datif = *mit-nach-aus-bei-seit-von-zu*.",
        tableau: { entetes: ["Cas", "Prépositions", "Exemple"], lignes: [["accusatif", "durch, für, gegen, ohne, um, bis", "für dich, ohne Geld"], ["datif", "aus, bei, mit, nach, seit, von, zu", "mit dem Bus, zu dir"], ["génitif", "während, trotz, wegen, statt", "während des Tages"], ["mixte (Wo?/Wohin?)", "in, an, auf, über, unter, vor, hinter, neben, zwischen", "auf dem/den Tisch"]] },
        note: "Les mixtes changent (position/direction) ; les autres ont un **cas fixe**." },
      { titre: "Les couples de verbes : position vs mouvement",
        regle: "Des verbes vont par **paires** : un verbe de **position** (+ datif, Wo?) et un verbe d'**action de placer** (+ accusatif, Wohin?).",
        intro: "*Das Buch **liegt** auf dem Tisch* (datif) vs *Ich **lege** das Buch auf den Tisch* (accusatif).",
        tableau: { entetes: ["Position (Wo? + Dat.)", "Mouvement (Wohin? + Akk.)", "Sens"], lignes: [["liegen (lag)", "legen (legte)", "être couché / poser à plat"], ["stehen (stand)", "stellen (stellte)", "être debout / poser debout"], ["sitzen (saß)", "setzen (setzte)", "être assis / asseoir"], ["hängen (hing)", "hängen (hängte)", "être suspendu / accrocher"]] },
        note: "Verbes de position → datif ; verbes d'action → accusatif." },
      { titre: "Les contractions fréquentes",
        regle: "Préposition + article se **fondent** souvent en un seul mot, à l'oral comme à l'écrit.",
        intro: "*in dem → im*, *in das → ins*, *an dem → am*, *zu dem → zum*.",
        tableau: { entetes: ["Datif (Wo?)", "Accusatif (Wohin?)", "Autres"], lignes: [["in dem → im", "in das → ins", "zu dem → zum"], ["an dem → am", "an das → ans", "zu der → zur"], ["bei dem → beim", "auf das → aufs", "von dem → vom"]] },
        note: "Ces contractions sont la **norme** : « im Kino », « zur Schule », « ans Meer »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Pour une DIRECTION (Wohin?), on emploie…", options: ["l'accusatif", "le datif", "le génitif"], correct: 0, explication: "Wohin? → accusatif." },
      { type: "qcm", consigne: "Choisissez le cas.", question: "Ich hänge das Bild an ___ Wand. (Wohin?)", options: ["die", "der", "dem", "den"], correct: 0, explication: "direction + die Wand (f.) accusatif → die." },
      { type: "trou", consigne: "Complétez (position, datif).", texte: "Das Bild hängt an {0} Wand.", accepte: [["der"]], indice: "Wo? → datif, féminin die Wand → der" },
      { type: "association", consigne: "Associez la question et le cas.", paires: [{ gauche: "Wo?", droite: "datif" }, { gauche: "Wohin?", droite: "accusatif" }, { gauche: "liegen", droite: "position" }, { gauche: "legen", droite: "direction" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je vais à l'école.", accepte: ["Ich gehe in die Schule"], aide: "direction → in + accusatif" },
      { type: "qcm", consigne: "Cas d'une préposition.", question: "« aus, bei, mit, nach » régissent…", options: ["le datif", "l'accusatif", "le génitif"], correct: 0, explication: "aus/bei/mit/nach → datif (toujours)." },
      { type: "trou", consigne: "Verbe de position (datif).", texte: "Die Vase {0} auf dem Tisch. (stehen)", accepte: [["steht"]], indice: "position (Wo?) → stehen + datif" },
      { type: "qcm", consigne: "Contraction.", question: "« Ich gehe in das Kino » se contracte en…", options: ["ins Kino", "im Kino", "ans Kino", "zum Kino"], correct: 0, explication: "in das → ins (direction, accusatif)." }
    ]
  },
  b1g21: {
    id: "b1g21",
    einstieg: {"intro":"Observe la préposition fixe de chaque adjectif.","exemples":[{"de":"Ich bin stolz auf dich.","fr":"Je suis fier de toi."},{"de":"Sie ist zufrieden mit dem Ergebnis.","fr":"Elle est satisfaite du résultat."},{"de":"Er ist böse auf mich.","fr":"Il est fâché contre moi."}],"question":"La préposition se devine-t-elle d'après le français ?"},
    merke: ["Adjectifs à *préposition fixe* : *stolz auf*, *zufrieden mit*, *böse auf*, *interessiert an*.","La préposition fixe le *cas* (*stolz auf* + accusatif).","À apprendre adjectif + préposition + cas ensemble."],
    achtung: [{"erreur":"Ich bin stolz von dir.","correct":"Ich bin stolz **auf** dich.","explication":"« fier de » = *stolz auf* + accusatif."},{"erreur":"zufrieden mit das Ergebnis","correct":"zufrieden mit **dem** Ergebnis","explication":"*mit* régit le datif."}],
    kontrast: {"titre":"Adjectifs à préposition : allemand vs français","similitudes":["« fier de », « satisfait de » sont fixes."],"differences":["La préposition diffère du français (stolz *auf* = fier *de*).","Elle impose un *cas* au complément.","À mémoriser adjectif par adjectif."]}, titre: "Adjectifs avec prépositions", titreDE: "Adjektive mit Präpositionen", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Mémoriser les adjectifs à préposition fixe", "Appliquer le cas imposé"],
    grammairePoints: ["stolz auf, zufrieden mit", "böse auf, bereit zu"],
    exemplesPlus: [{"de":"Ich bin sehr stolz auf dich.","fr":"*stolz auf* + Akkusativ."},{"de":"Bist du mit deiner Arbeit zufrieden?","fr":"*zufrieden mit* + Dativ."},{"de":"Sie ist böse auf ihren Bruder.","fr":"*böse auf* + Akkusativ."},{"de":"Ich bin bereit zu einem Kompromiss.","fr":"*bereit zu* + Dativ."},{"de":"Er ist bekannt für seine guten Ideen.","fr":"*bekannt für* + Akkusativ."}],
    coursDE: [
      "Wie viele Verben haben auch viele **Adjektive** eine feste **Präposition**. Du musst das Adjektiv und seine Präposition zusammen lernen, denn sie sind oft nicht logisch und der Fall ist festgelegt.",
      "Häufige Beispiele mit **Akkusativ**: *stolz **auf*** (fier de), *böse **auf*** (fâché contre), *neugierig **auf***, *bereit **zu***. Beispiel: « *Ich bin **stolz auf** dich* ».",
      "Häufige Beispiele mit **Dativ**: *zufrieden **mit*** (content de), *einverstanden **mit***, *verheiratet **mit***, *fertig **mit***, *freundlich **zu***. Beispiel: « *Ich bin **zufrieden mit** meiner Arbeit* ».",
      "Wie bei den Verben benutzt du für Fragen und Antworten über Sachen die Wörter **wo(r)-** und **da(r)-**: « *Worauf bist du stolz?* » – « *Darauf!* ». Mache dir eine Liste der wichtigsten Adjektive mit Präposition und übe sie regelmäßig."
    ],
    grammaire: [
      { exemples: [{"de":"Ich bin stolz auf meine Arbeit.","fr":"Je suis fier de mon travail."},{"de":"Sie ist zufrieden mit dem Ergebnis.","fr":"Elle est satisfaite du résultat."}], regle: "Des **adjectifs** imposent une préposition fixe : *stolz **auf***, *zufrieden **mit***, *bereit **zu***, *abhängig **von***.", attention: "Interroger/reprendre comme les verbes : *Worauf bist du stolz? – Ich bin stolz **darauf***.", titre: "Adjectif + préposition + cas", intro: "Comme les verbes, certains adjectifs imposent une préposition et un cas. À apprendre par paires.",
        tableau: { entetes: ["Adjectif", "Préposition + cas", "Exemple"], lignes: [["stolz", "auf + Akk.", "stolz auf den Erfolg"], ["zufrieden", "mit + Dat.", "zufrieden mit der Note"], ["böse", "auf + Akk.", "böse auf den Kollegen"], ["bereit", "zu + Dat.", "bereit zur Abreise"], ["verliebt", "in + Akk.", "verliebt in sie"], ["abhängig", "von + Dat.", "abhängig von den Eltern"]] },
        note: "Pour interroger : « Worauf bist du stolz? » ; pour reprendre : « Ich bin stolz darauf. »" },
      { titre: "Classés par cas : accusatif vs datif",
        regle: "La préposition impose le **cas**. Regroupe-les : certaines prennent l'**accusatif** (auf, für, in, über, um), d'autres le **datif** (mit, von, zu, an).",
        intro: "*stolz **auf** dich* (acc.) vs *zufrieden **mit** dir* (dat.).",
        tableau: { entetes: ["Cas", "Adjectifs", "Exemple"], lignes: [["+ accusatif", "stolz auf, böse auf, neugierig auf, verliebt in, bekannt für", "stolz auf den Erfolg"], ["+ datif", "zufrieden mit, einverstanden mit, verheiratet mit, bereit zu, abhängig von", "zufrieden mit der Note"], ["an + datif", "interessiert an, beteiligt an", "interessiert an Kunst"]] },
        note: "auf/für/in/über/um → accusatif ; mit/von/zu/an (position) → datif." },
      { titre: "Interroger et reprendre (wo(r)- / da(r)-)",
        regle: "Comme pour les verbes : **chose** → *wo(r)-* (question) et *da(r)-* (reprise) ; **personne** → préposition + pronom.",
        intro: "***Worauf** bist du stolz? — Ich bin stolz **darauf**.* (chose) · *stolz **auf ihn*** (personne).",
        tableau: { entetes: ["Adjectif+prép", "Chose (question)", "Chose (reprise)", "Personne"], lignes: [["stolz auf", "worauf?", "darauf", "auf ihn"], ["zufrieden mit", "womit?", "damit", "mit ihm"], ["abhängig von", "wovon?", "davon", "von ihm"], ["interessiert an", "woran?", "daran", "an ihm"]] },
        note: "Chose → un seul mot (wo-/da-). Personne → préposition + pronom séparé." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« zufrieden » se construit avec…", options: ["mit + datif", "auf + accusatif", "für + accusatif"], correct: 0, explication: "zufrieden mit + datif." },
      { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich bin stolz ___ meine Arbeit.", options: ["auf", "mit", "von", "zu"], correct: 0, explication: "stolz auf + accusatif." },
      { type: "trou", consigne: "Complétez (abhängig + préposition).", texte: "Er ist noch abhängig {0} seinen Eltern.", accepte: [["von"]], indice: "abhängig von + datif" },
      { type: "association", consigne: "Associez l'adjectif et sa préposition.", paires: [{ gauche: "stolz", droite: "auf" }, { gauche: "zufrieden", droite: "mit" }, { gauche: "bereit", droite: "zu" }, { gauche: "verliebt", droite: "in" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je suis content de ma note.", accepte: ["Ich bin zufrieden mit meiner Note"], aide: "zufrieden mit + datif" },
      { type: "qcm", consigne: "Cas imposé.", question: "« verliebt in » régit…", options: ["l'accusatif", "le datif", "le génitif"], correct: 0, explication: "verliebt in + accusatif (verliebt in sie/ihn)." },
      { type: "trou", consigne: "Reprise d'une chose.", texte: "— Bist du mit dem Ergebnis zufrieden? — Ja, ich bin sehr {0}.", accepte: [["damit"]], indice: "chose → da + mit = damit" },
      { type: "qcm", consigne: "Question sur une chose.", question: "___ bist du stolz? — Auf meine Arbeit.", options: ["Worauf", "Auf was", "Wofür", "Worüber"], correct: 0, explication: "stolz auf → Worauf ? (wo+r+auf)." }
    ]
  },
  b1g22: {
    id: "b1g22",
    einstieg: {"intro":"Observe ces couples de mots de liaison.","exemples":[{"de":"Sowohl Anna als auch Tom kommen.","fr":"Anna et Tom viennent tous les deux."},{"de":"Weder er noch sie war da.","fr":"Ni lui ni elle n'était là."},{"de":"Entweder du oder ich.","fr":"Soit toi, soit moi."}],"question":"Comment relier deux éléments avec ces couples ?"},
    merke: ["*sowohl … als auch* = aussi bien… que.","*weder … noch* = ni… ni (déjà négatif).","*entweder … oder* = soit… soit."],
    achtung: [{"erreur":"Weder er nicht noch sie war da.","correct":"**Weder** er **noch** sie war da.","explication":"*weder…noch* est déjà négatif : pas de *nicht* en plus."},{"erreur":"sowohl Anna als Tom","correct":"sowohl Anna **als auch** Tom","explication":"La locution complète est *sowohl … als auch*."}],
    kontrast: {"titre":"Les énumérations : allemand vs français","similitudes":["« ni… ni », « soit… soit » existent dans les deux."],"differences":["*weder…noch* jamais avec *nicht*.","*sowohl…als auch* est figé en deux parties.","Pas de double négation."]}, titre: "Les énumérations", titreDE: "Doppelkonnektoren", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Relier deux éléments avec des connecteurs doubles", "Nuancer (et… et, ni… ni, soit… soit)"],
    grammairePoints: ["sowohl … als auch", "weder … noch, entweder … oder, nicht nur … sondern auch"],
    exemplesPlus: [{"de":"Ich spreche sowohl Englisch als auch Spanisch.","fr":"*sowohl … als auch*: beides zusammen."},{"de":"Er trinkt weder Kaffee noch Tee.","fr":"*weder … noch*: keins von beiden."},{"de":"Entweder du kommst mit, oder du bleibst hier.","fr":"*entweder … oder*: eine von zwei Möglichkeiten."},{"de":"Sie ist nicht nur klug, sondern auch fleißig.","fr":"*nicht nur … sondern auch*: noch mehr dazu."},{"de":"Wir fahren entweder nach Italien oder nach Spanien.","fr":"*entweder … oder*: zwei Optionen."}],
    coursDE: [
      "**Doppelkonnektoren** sind Wortpaare, die zwei Elemente verbinden. Sie machen deine Sätze reicher und präziser. Du benutzt sie für Aufzählungen, Alternativen und Gegensätze.",
      "Für eine **positive Aufzählung** (« et… et… ») nimmst du **sowohl … als auch**: « *Ich spreche **sowohl** Deutsch **als auch** Englisch* ». Für eine **Alternative** (« ou… ou… ») nimmst du **entweder … oder**: « ***Entweder** gehen wir ins Kino, **oder** wir bleiben zu Hause* ».",
      "Für eine **doppelte Verneinung** (« ni… ni… ») nimmst du **weder … noch**: « *Ich trinke **weder** Kaffee **noch** Tee* ». Hier brauchst du kein extra *nicht*, denn *weder … noch* ist schon negativ.",
      "Sehr elegant ist **nicht nur … sondern auch** (« non seulement… mais aussi »): « *Sie ist **nicht nur** intelligent, **sondern auch** fleißig* ». Mit diesen Paaren klingt dein Deutsch deutlich erwachsener."
    ],
    grammaire: [
      { exemples: [{"de":"Sie spricht sowohl Deutsch als auch Englisch.","fr":"Elle parle aussi bien allemand qu'anglais."},{"de":"Ich trinke weder Kaffee noch Tee.","fr":"Je ne bois ni café ni thé."}], regle: "Connecteurs doubles : **sowohl … als auch**, **weder … noch**, **entweder … oder**, **nicht nur … sondern auch**.", attention: "*weder … noch* est **déjà négatif**. Après *sondern*, on corrige une **négation** précédente.", titre: "Les connecteurs doubles", intro: "Ils relient deux éléments de même nature pour énumérer ou opposer.",
        tableau: { entetes: ["Connecteur", "Sens", "Exemple"], lignes: [["sowohl … als auch", "aussi bien … que", "Sie spricht sowohl Deutsch als auch Englisch."], ["weder … noch", "ni … ni", "Ich trinke weder Kaffee noch Tee."], ["entweder … oder", "soit … soit", "Wir fahren entweder nach Rom oder nach Paris."], ["nicht nur … sondern auch", "non seulement … mais aussi", "Er ist nicht nur klug, sondern auch fleißig."]] },
        note: "« weder … noch » est déjà négatif : pas d'autre négation. Après « sondern », on corrige une négation précédente." },
      { titre: "Accord du verbe et position",
        regle: "**sowohl … als auch** + sujets → verbe au **pluriel**. **weder … noch** / **entweder … oder** → le verbe s'accorde avec le sujet **le plus proche**. En tête, **entweder** entraîne l'**inversion**.",
        intro: "*Sowohl Anna als auch Tom **kommen*** (pluriel). *Weder du noch er **hat** Zeit* (proche).",
        tableau: { entetes: ["Connecteur", "Accord du verbe", "Exemple"], lignes: [["sowohl … als auch", "pluriel", "Sowohl er als auch sie kommen."], ["weder … noch", "sujet le plus proche", "Weder du noch er hat Zeit."], ["entweder … oder", "sujet le plus proche", "Entweder die Kinder oder die Mutter kocht."]] },
        note: "En tête de phrase, *entweder / nicht nur* déclenchent l'**inversion** : « Entweder gehst du, oder … »." },
      { titre: "sondern ou aber ? (mais)",
        regle: "**sondern** = « mais au contraire » : il **corrige** une négation (*nicht … sondern*). **aber** = « mais » simple (contraste), sans négation obligatoire.",
        intro: "*Das ist **nicht** rot, **sondern** blau* (correction). *Es ist teuer, **aber** schön* (contraste).",
        tableau: { entetes: ["Mot", "Emploi", "Exemple"], lignes: [["sondern", "après une négation (correction)", "Nicht heute, sondern morgen."], ["aber", "contraste simple", "Klein, aber fein."], ["nicht nur … sondern auch", "ajout", "Nicht nur klug, sondern auch nett."]] },
        note: "*sondern* exige une négation avant ; sans négation, on emploie *aber*." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« weder … noch » signifie…", options: ["ni … ni", "soit … soit", "aussi bien … que"], correct: 0, explication: "weder … noch = ni … ni." },
      { type: "qcm", consigne: "Choisissez.", question: "Wir fahren ___ nach Rom ___ nach Paris.", options: ["entweder … oder", "weder … noch", "sowohl … als", "nicht … sondern"], correct: 0, explication: "soit … soit → entweder … oder." },
      { type: "trou", consigne: "Complétez (sowohl … als auch).", texte: "Sie spricht sowohl Deutsch {0} auch Englisch.", accepte: [["als"]], indice: "sowohl … als auch" },
      { type: "association", consigne: "Associez le connecteur et son sens.", paires: [{ gauche: "sowohl … als auch", droite: "aussi bien … que" }, { gauche: "weder … noch", droite: "ni … ni" }, { gauche: "entweder … oder", droite: "soit … soit" }, { gauche: "nicht nur … sondern auch", droite: "non seulement … mais aussi" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je ne bois ni café ni thé.", accepte: ["Ich trinke weder Kaffee noch Tee"], aide: "weder … noch" },
      { type: "qcm", consigne: "sondern ou aber ?", question: "Das ist nicht mein Buch, ___ deins.", options: ["sondern", "aber", "denn", "oder"], correct: 0, explication: "correction après négation → sondern." },
      { type: "qcm", consigne: "Accord du verbe.", question: "Sowohl Anna als auch Tom ___ eingeladen.", options: ["sind", "ist", "war", "hat"], correct: 0, explication: "sowohl … als auch → pluriel : sind." },
      { type: "trou", consigne: "Contraste simple (sans négation).", texte: "Die Wohnung ist klein, {0} gemütlich.", accepte: [["aber"]], indice: "contraste simple → aber" }
    ]
  },
  b1g23: {
    id: "b1g23",
    einstieg: {"intro":"Observe comment relier cause et conséquence.","exemples":[{"de":"Ich bleibe zu Hause, weil ich krank bin.","fr":"Je reste à la maison parce que je suis malade."},{"de":"Ich bin krank, deshalb bleibe ich zu Hause.","fr":"Je suis malade, c'est pourquoi je reste."},{"de":"Da es regnet, nehme ich den Schirm.","fr":"Comme il pleut, je prends le parapluie."}],"question":"Cause en subordonnée ou conséquence par connecteur ?"},
    merke: ["Cause (subordonnée) : *weil / da* → verbe à la *fin*.","Cause (coordination) : *denn* → pas d'inversion (verbe en position 2).","Conséquence (connecteur) : *deshalb, deswegen, daher* → *inversion*."],
    achtung: [{"erreur":"…, weil ich bin krank.","correct":"…, weil ich krank **bin**.","explication":"Après *weil*, le verbe va à la fin."},{"erreur":"Ich bin krank, deshalb ich bleibe zu Hause.","correct":"…, deshalb **bleibe ich** zu Hause.","explication":"*deshalb* (position 1) → inversion."}],
    kontrast: {"titre":"Cause et conséquence : allemand vs français","similitudes":["parce que/weil, c'est pourquoi/deshalb."],"differences":["*weil/da* (subordination) → verbe à la fin ; *denn* (coordination) → pas d'inversion.","*deshalb/deswegen* déclenchent l'inversion.","Trois constructions là où le français est plus souple."]}, titre: "Causes et conséquences", titreDE: "Grund und Folge", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer la cause (weil, da, denn)", "Exprimer la conséquence (deshalb, deswegen, daher)"],
    grammairePoints: ["weil, da, denn", "deshalb, deswegen, daher, darum"],
    exemplesPlus: [{"de":"Ich bleibe zu Hause, weil ich krank bin.","fr":"*weil*: der Grund, Verb am Ende."},{"de":"Da es regnet, nehmen wir den Bus.","fr":"*da*: bekannter Grund, oft am Anfang."},{"de":"Ich gehe schlafen, denn ich bin müde.","fr":"*denn*: der Grund, normale Wortstellung."},{"de":"Es war spät, deshalb sind wir gegangen.","fr":"*deshalb*: die Folge."},{"de":"Ich habe verschlafen, deswegen komme ich zu spät.","fr":"*deswegen*: die Folge."}],
    coursDE: [
      "In dieser Lektion lernst du, **Gründe** (warum?) und **Folgen** (mit welchem Ergebnis?) auszudrücken. Das Wichtigste ist die **Wortstellung**: Manche Wörter schicken das Verb ans Ende, andere nicht.",
      "Für den **Grund** (« parce que ») hast du drei Möglichkeiten. **weil** und **da** sind Subordinationen → Verb am **Ende**: « *Ich bleibe zu Hause, **weil** ich krank **bin*** ». **denn** ist eine Koordination → Verb auf **Position 2**: « *Ich bleibe zu Hause, **denn** ich **bin** krank* ».",
      "Für die **Folge** (« c'est pourquoi ») benutzt du **deshalb, deswegen, daher, darum**. Diese Wörter stehen auf **Position 1**, also kommt das Verb direkt danach: « *Ich bin krank, **deshalb** **bleibe** ich zu Hause* ».",
      "Merke dir die drei Gruppen: **weil/da** → Verb ans Ende; **denn** → Verb auf Position 2; **deshalb/deswegen/daher/darum** → Verb direkt nach dem Konnektor. Mit diesem System verbindest du Ursache und Wirkung immer korrekt."
    ],
    grammaire: [
      { exemples: [{"de":"Ich bleibe zu Hause, weil ich müde bin.","fr":"Je reste à la maison parce que je suis fatigué."},{"de":"Es ist spät, deshalb gehe ich jetzt.","fr":"Il est tard, c'est pourquoi je pars maintenant."}], regle: "**Cause** : *weil/da* (verbe **fin**), *denn* (verbe **2ᵉ**). **Conséquence** : *deshalb/deswegen/daher* (verbe **2ᵉ**).", attention: "*weil* → verbe à la fin ; *deshalb* → verbe en 2ᵉ position.", titre: "Dire pourquoi et donc", intro: "Cause : weil/da (verbe à la fin), denn (verbe 2e). Conséquence : deshalb/deswegen/daher/darum (verbe 2e).",
        tableau: { entetes: ["Mot", "Rôle / position du verbe", "Exemple"], lignes: [["weil", "cause — verbe FIN", "Ich bleibe, weil ich krank bin."], ["da", "cause (connue) — verbe FIN", "Da es regnet, bleibe ich."], ["denn", "cause — verbe 2e", "Ich bleibe, denn ich bin krank."], ["deshalb", "conséquence — verbe 2e", "Ich bin krank, deshalb bleibe ich."], ["daher / darum", "conséquence — verbe 2e", "Es regnet, daher gehe ich nicht."]] },
        schemas: [{ legende: "weil : cause, verbe à la FIN.", mots: [{ m: "Ich bleibe zu Hause,", r: "principale", c: "objet" }, { m: "weil", r: "cause", c: "conj" }, { m: "ich krank", r: "sujet + complément", c: "sujet" }, { m: "bin", r: "verbe (fin)", c: "fin" }] }],
        note: "weil/da → subordination (verbe fin). denn/deshalb/deswegen/daher/darum → coordination (verbe 2e position)." },
      { titre: "La conséquence forte : sodass / so … dass",
        regle: "Pour « si bien que / tellement … que », on emploie **sodass** (de sorte que) ou **so + adjectif + dass** : la subordonnée a le **verbe à la fin**.",
        intro: "*Es war **so** kalt, **dass** wir blieben* (tellement froid que…). *Er sprach leise, **sodass** ich nichts verstand*.",
        tableau: { entetes: ["Structure", "Sens", "Exemple"], lignes: [["sodass", "de sorte que", "Er kam spät, sodass wir warten mussten."], ["so … dass", "tellement … que", "Es war so heiß, dass ich nicht schlief."], ["dass → verbe fin", "subordonnée", "…, dass ich nichts hörte."]] },
        note: "*so … dass* encadre l'adjectif : *so + adjectif*, puis *dass + verbe à la fin*." },
      { titre: "weil, da ou denn : lequel choisir ?",
        regle: "**weil** = cause neutre (la plus fréquente). **da** = cause **déjà connue**, souvent en tête. **denn** = cause, style **coordonné** (verbe en 2ᵉ position).",
        intro: "*Ich bleibe, **weil** es regnet* · ***Da** es regnet, bleibe ich* · *Ich bleibe, **denn** es regnet*.",
        tableau: { entetes: ["Mot", "Nuance", "Place du verbe"], lignes: [["weil", "cause neutre (répond à warum?)", "à la fin"], ["da", "cause connue / évidente", "à la fin"], ["denn", "cause, registre coordonné", "en 2ᵉ position"]] },
        note: "Seul **weil** peut répondre seul à « Warum? ». **denn** ne se met jamais en tête de phrase." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « weil », le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "weil = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Cause ou conséquence ?", question: "Es regnet, ___ bleibe ich zu Hause.", options: ["deshalb", "weil", "denn nicht", "dass"], correct: 0, explication: "conséquence + verbe 2e → deshalb." },
      { type: "trou", consigne: "Complétez (weil + verbe à la fin).", texte: "Ich komme nicht, weil ich keine Zeit {0}. (haben)", accepte: [["habe"]], indice: "weil → verbe à la fin" },
      { type: "association", consigne: "Associez le mot et son rôle.", paires: [{ gauche: "weil", droite: "cause (verbe fin)" }, { gauche: "denn", droite: "cause (verbe 2e)" }, { gauche: "deshalb", droite: "conséquence" }, { gauche: "da", droite: "cause connue" }] },
      { type: "ordre", consigne: "Construisez la subordonnée de cause.", mots: ["weil", "ich", "müde", "bin"], correct: "weil ich müde bin", traduction: "parce que je suis fatigué" },
      { type: "qcm", consigne: "Conséquence forte.", question: "Es war so kalt, ___ wir drinnen blieben.", options: ["dass", "weil", "denn", "damit"], correct: 0, explication: "so + adjectif + dass = tellement … que." },
      { type: "trou", consigne: "so … dass.", texte: "Er lief {0} schnell, dass ich ihn verlor.", accepte: [["so"]], indice: "so + adjectif … dass" },
      { type: "qcm", consigne: "Réponse à « Warum? ».", question: "— Warum bleibst du? — ___ ich müde bin.", options: ["Weil", "Denn", "Deshalb", "Da"], correct: 0, explication: "Seul « weil » peut répondre seul à Warum ?" }
    ]
  }
});
