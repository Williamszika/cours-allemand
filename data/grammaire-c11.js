/* =====================================================================
   grammaire-c11.js — 9 LEÇONS DE GRAMMAIRE du module C1.1
   (window.GRAMMAIRE_C1). Suit les 9 points de grammaire C1.1 du
   programme. Approfondissement niveau C1, schémas colorés.
   ===================================================================== */
window.GRAMMAIRE_C1 = Object.assign(window.GRAMMAIRE_C1 || {}, {
  c1g01: {
    id: "c1g01", titre: "Les temps du passé", titreDE: "Die Vergangenheitstempora", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Choisir le temps selon le registre et la chronologie", "Combiner les temps dans un texte"],
    grammairePoints: ["Perfekt / Präteritum", "Plusquamperfekt (antériorité)"],
    coursDE: [
      "Auf C1-Niveau musst du die drei Vergangenheitstempora nicht nur bilden, sondern auch **stilistisch sicher einsetzen** können. Die Wahl zwischen Perfekt und Präteritum hängt vom **Register** und vom **Texttyp** ab, nicht vom Inhalt.",
      "Das **Perfekt** dominiert in der mündlichen Kommunikation und in persönlichen Texten, während das **Präteritum** die typische Tempusform schriftlicher Erzählungen und journalistischer Berichte ist. In gesprochener Sprache bleiben jedoch *sein, haben* und die Modalverben auch im Präteritum üblich.",
      "Das **Plusquamperfekt** markiert die **Vorzeitigkeit**: ein Ereignis, das vor einem anderen vergangenen Ereignis abgeschlossen war. In Verbindung mit *nachdem* ist die Zeitenfolge streng: « *Nachdem man die Ergebnisse **veröffentlicht hatte**, **begann** die Diskussion* ».",
      "Beachte den feinen Unterschied: Das Präteritum schildert Ereignisse als zusammenhängenden Verlauf, das Perfekt betont eher das **Resultat** und den Bezug zur Gegenwart. Auf C1-Niveau wird erwartet, dass du diese Nuancen bewusst und konsequent verwendest."
    ],
    grammaire: [
      { exemples: [{"de":"Nachdem er gegangen war, wurde es still.","fr":"Après son départ, le silence s'installa."},{"de":"Damals lebte sie noch in Berlin.","fr":"À l'époque, elle vivait encore à Berlin."}], regle: "Perfekt (oral/lettres), Präteritum (récit écrit), Plusquamperfekt (antériorité). On les **combine** dans un texte cohérent.", attention: "Le **Präteritum** domine le récit littéraire ; le **Perfekt** l'oral et la correspondance.", titre: "Trois temps, trois fonctions", intro: "Perfekt (oral, lettres), Präteritum (récit écrit, presse), Plusquamperfekt (action antérieure). On les combine dans un texte cohérent.",
        tableau: { entetes: ["Temps", "Registre / rôle", "Exemple"], lignes: [["Perfekt", "oral, e-mail", "Ich habe es erledigt."], ["Präteritum", "récit écrit", "Er verließ das Haus."], ["Plusquamperfekt", "antériorité", "Nachdem er gegangen war, …"], ["sein/haben/Modale", "Präteritum à l'oral aussi", "Ich war / hatte / musste"]] },
        schemas: [{ legende: "Antériorité : Plusquamperfekt → Präteritum.", mots: [{ m: "Nachdem er gegangen war,", r: "antérieur", c: "conj" }, { m: "schloss", r: "verbe (1)", c: "verbe" }, { m: "sie", r: "sujet", c: "sujet" }, { m: "die Tür", r: "complément", c: "fin" }] }],
        note: "Le Präteritum domine le récit littéraire ; le Perfekt domine l'oral et la correspondance." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Pour une action antérieure à une autre action passée, on emploie…", options: ["le Plusquamperfekt", "le Perfekt", "le Futur"], correct: 0, explication: "Plusquamperfekt = le passé du passé." },
      { type: "qcm", consigne: "Choisissez.", question: "Le récit littéraire écrit privilégie…", options: ["le Präteritum", "le Perfekt", "le Plusquamperfekt"], correct: 0, explication: "Präteritum = temps du récit écrit." },
      { type: "trou", consigne: "Complétez (Plusquamperfekt).", texte: "Als ich ankam, {0} der Zug bereits abgefahren.", accepte: [["war"]], indice: "abfahren → sein → war abgefahren" },
      { type: "association", consigne: "Associez le temps et son usage.", paires: [{ gauche: "Perfekt", droite: "oral / e-mail" }, { gauche: "Präteritum", droite: "récit écrit" }, { gauche: "Plusquamperfekt", droite: "antériorité" }, { gauche: "sein/haben", droite: "Präteritum à l'oral" }] },
      { type: "ordre", consigne: "Phrase au Plusquamperfekt.", mots: ["Sie", "hatte", "alles", "längst", "vergessen"], correct: "Sie hatte alles längst vergessen", traduction: "Elle avait depuis longtemps tout oublié." }
    ]
  },
  c1g02: {
    id: "c1g02", titre: "Prépositions de lieu et de temps", titreDE: "Lokale und temporale Präpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Choisir la bonne préposition et le bon cas", "Distinguer lieu et temps"],
    grammairePoints: ["an, in, auf, nach, zu", "vor, seit, bis, innerhalb"],
    coursDE: [
      "Präpositionen wirken einfach, sind aber eine der häufigsten Fehlerquellen – selbst auf hohem Niveau. Auf C1 geht es darum, **lokale** und **temporale** Präpositionen samt ihrer **Rektion** (Kasus) souverän und idiomatisch zu beherrschen.",
      "Bei den **lokalen** Präpositionen ist die Unterscheidung von Position und Richtung entscheidend (Dativ bei *Wo?*, Akkusativ bei *Wohin?*). Hinzu kommen idiomatische Feinheiten: *nach* (Städte, Länder ohne Artikel), *zu* (Personen, bestimmte Ziele), *in* (mit Artikel, z. B. *in die Schweiz*).",
      "Bei den **temporalen** Präpositionen solltest du sicher unterscheiden: *vor* (Vergangenheit, + Dativ), *seit* (Beginn bis Gegenwart, + Dativ), *bis* (Endpunkt), *innerhalb* (+ Genitiv). Eine Verwechslung von *vor* und *seit* gilt auf diesem Niveau als auffälliger Fehler.",
      "Mein Rat: Lerne Präpositionen nicht isoliert, sondern in **festen Wendungen** und mit ihrem Kasus. Achte besonders auf die formellen Genitiv-Präpositionen, die in geschriebenen Texten häufig sind und deinen Ausdruck präziser machen."
    ],
    grammaire: [
      { exemples: [{"de":"Wir fahren in die Schweiz.","fr":"Nous allons en Suisse."},{"de":"Seit Montag arbeite ich von zu Hause.","fr":"Depuis lundi, je travaille de chez moi."}], regle: "Le choix dépend du **sens** (position/direction, point/durée) et chaque préposition impose un **cas**.", attention: "*nach* + ville/pays **sans** article ; *in* + pays **avec** article (*in die Schweiz*).", titre: "Lieu et temps : préposition + cas", intro: "Le choix dépend du sens (position/direction, point/durée) et chaque préposition impose un cas.",
        tableau: { entetes: ["Type", "Préposition", "Exemple"], lignes: [["lieu (où)", "an/in + Dat.", "an der Wand, in der Stadt"], ["lieu (vers)", "nach/zu/in + …", "nach Berlin, zur Arbeit"], ["temps (point)", "an/um/in + Dat.", "am Montag, um acht, im Mai"], ["temps (durée)", "seit/während/innerhalb", "seit Jahren, innerhalb einer Woche"]] },
        note: "« nach » + ville/pays sans article (nach Berlin) ; « in » + pays avec article (in die Schweiz)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« innerhalb » exprime…", options: ["une durée (en l'espace de)", "un lieu précis", "une direction"], correct: 0, explication: "innerhalb + génitif = en l'espace de." },
      { type: "qcm", consigne: "Choisissez la préposition (direction, pays avec article).", question: "Wir fahren ___ die Schweiz.", options: ["in", "nach", "zu", "an"], correct: 0, explication: "pays avec article → in die Schweiz." },
      { type: "trou", consigne: "Complétez (temps, mois).", texte: "{0} Mai blühen die Bäume.", accepte: [["Im"]], indice: "mois → im (in dem)" },
      { type: "association", consigne: "Associez la préposition et son domaine.", paires: [{ gauche: "seit", droite: "temps (durée)" }, { gauche: "nach", droite: "lieu (direction)" }, { gauche: "an", droite: "lieu/temps (point)" }, { gauche: "innerhalb", droite: "temps/lieu (génitif)" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Depuis lundi, je travaille à la maison.", accepte: ["Seit Montag arbeite ich zu Hause", "Seit Montag arbeite ich im Homeoffice"], aide: "seit + datif" }
    ]
  },
  c1g03: {
    id: "c1g03", titre: "Connecteurs : subordonnées", titreDE: "Konnektoren: Nebensätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Relier les idées par subordination", "Placer le verbe à la fin"],
    grammairePoints: ["obwohl, indem, sodass", "während, sofern, falls"],
    coursDE: [
      "Komplexe Sätze entstehen durch **Nebensätze**, die mit einer subordinierenden Konjunktion eingeleitet werden. Auf C1 erweiterst du dein Repertoire deutlich über *weil* und *dass* hinaus. In all diesen Nebensätzen steht das **konjugierte Verb am Ende**.",
      "Für **Einräumungen** benutzt du **obwohl** (bien que): « *Obwohl es regnete, gingen wir spazieren* ». Für die **Art und Weise** dient **indem** (en … -ant): « *Man lernt eine Sprache, **indem** man sie spricht* ».",
      "Für die **Folge** steht **sodass**: « *Er sprach leise, **sodass** ihn niemand verstand* ». Für **Bedingungen** dienen **falls** und **sofern**, die präziser sind als das einfache *wenn*: « *Sofern keine Einwände bestehen, beginnen wir* ».",
      "Achte auf die Zeichensetzung: Vor dem Nebensatz steht stets ein **Komma**. Steht der Nebensatz am Anfang, folgt die Inversion im Hauptsatz. Die bewusste Variation dieser Konnektoren ist ein deutliches Merkmal eines gehobenen Stils."
    ],
    grammaire: [
      { exemples: [{"de":"Man lernt, indem man Fehler macht.","fr":"On apprend en faisant des erreurs."},{"de":"Obwohl es schwierig war, gab er nicht auf.","fr":"Bien que ce fût difficile, il n'a pas abandonné."}], regle: "Conjonctions de subordination (*obwohl, indem, sodass, sofern, falls*) → **verbe à la fin**.", attention: "*indem* = **moyen** (en faisant…) ; à ne pas confondre avec *so … dass*.", titre: "La subordination rejette le verbe à la fin", intro: "Les conjonctions de subordination introduisent une proposition où le verbe conjugué va à la fin.",
        tableau: { entetes: ["Conjonction", "Sens", "Exemple"], lignes: [["obwohl", "bien que", "Obwohl es regnet, gehe ich."], ["indem", "en (moyen)", "Man lernt, indem man übt."], ["sodass", "de sorte que", "Es war kalt, sodass wir blieben."], ["sofern", "dans la mesure où", "Sofern es klappt, komme ich."], ["falls", "au cas où", "Falls du Zeit hast, ruf an."]] },
        schemas: [{ legende: "Subordonnée en tête → principale commence par le verbe.", mots: [{ m: "Obwohl es regnet,", r: "subordonnée", c: "conj" }, { m: "gehe", r: "verbe (1)", c: "verbe" }, { m: "ich", r: "sujet", c: "sujet" }, { m: "spazieren", r: "complément", c: "fin" }] }],
        note: "« indem » exprime le moyen (en faisant…) ; « sodass » la conséquence ; à ne pas confondre avec « so … dass »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après une conjonction de subordination, le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "Subordination → verbe conjugué à la fin." },
      { type: "qcm", consigne: "Choisissez (moyen).", question: "Man verbessert sich, ___ man regelmäßig übt.", options: ["indem", "obwohl", "sodass", "falls"], correct: 0, explication: "indem = en (moyen)." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Obwohl er müde {0}, arbeitete er weiter. (sein)", accepte: [["war"]], indice: "obwohl → verbe à la fin" },
      { type: "association", consigne: "Associez la conjonction et son sens.", paires: [{ gauche: "obwohl", droite: "bien que" }, { gauche: "indem", droite: "en (moyen)" }, { gauche: "sodass", droite: "de sorte que" }, { gauche: "falls", droite: "au cas où" }] },
      { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["obwohl", "es", "spät", "war"], correct: "obwohl es spät war", traduction: "bien qu'il fût tard" }
    ]
  },
  c1g04: {
    id: "c1g04", titre: "Adjectifs à cas prépositionnel", titreDE: "Adjektive mit Präpositionalkasus", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Mémoriser les adjectifs à préposition fixe", "Appliquer le cas imposé"],
    grammairePoints: ["stolz auf, fähig zu", "verantwortlich für, überzeugt von"],
    coursDE: [
      "Wie viele Verben verlangen auch zahlreiche **Adjektive** eine feste Präposition mit einem bestimmten Kasus. Diese Verbindungen sind idiomatisch und müssen als Einheit gelernt werden, da sie sich oft nicht aus dem Französischen ableiten lassen.",
      "Häufige Beispiele mit **Akkusativ**: *stolz **auf*** (fier de), *verantwortlich **für*** (responsable de), *gespannt **auf***, *neugierig **auf***. Beispiel: « *Sie ist **verantwortlich für** das Projekt* ».",
      "Beispiele mit **Dativ**: *fähig **zu*** (capable de), *überzeugt **von*** (convaincu de), *zufrieden **mit***. Die Präposition bestimmt den Kasus: « *Ich bin **überzeugt von** seiner Ehrlichkeit* ».",
      "Für Fragen und Verweise auf Sachen gelten dieselben Pronominaladverbien wie bei den Verben: **wo(r)-** und **da(r)-** (« *Worauf bist du stolz? – Darauf.* »). Lege dir eine systematische Liste an; auf C1 zeigt die korrekte Rektion sprachliche Reife."
    ],
    grammaire: [
      { exemples: [{"de":"Ich bin gespannt auf das Ergebnis.","fr":"J'ai hâte de connaître le résultat."},{"de":"Sie ist von der Idee überzeugt.","fr":"Elle est convaincue par l'idée."}], regle: "Adjectifs à préposition fixe : *stolz **auf***, *fähig **zu***, *verantwortlich **für***, *überzeugt **von***, *abhängig **von***.", attention: "Interroger/reprendre comme les verbes : *Worauf bist du stolz? – darauf*.", titre: "Adjectif + préposition + cas", intro: "De nombreux adjectifs C1 régissent une préposition fixe (et un cas). À mémoriser par paires.",
        tableau: { entetes: ["Adjectif", "Préposition + cas", "Exemple"], lignes: [["stolz", "auf + Akk.", "stolz auf den Erfolg"], ["fähig", "zu + Dat.", "zu allem fähig"], ["verantwortlich", "für + Akk.", "verantwortlich für das Projekt"], ["überzeugt", "von + Dat.", "überzeugt von der Idee"], ["abhängig", "von + Dat.", "abhängig von der Hilfe"], ["gespannt", "auf + Akk.", "gespannt auf das Ergebnis"]] },
        note: "Pour interroger : « Worauf bist du stolz? » ; pour reprendre : « Ich bin stolz darauf. »" }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« verantwortlich » se construit avec…", options: ["für + accusatif", "von + datif", "auf + datif"], correct: 0, explication: "verantwortlich für + accusatif." },
      { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich bin überzeugt ___ deinem Talent.", options: ["von", "auf", "für", "über"], correct: 0, explication: "überzeugt von + datif." },
      { type: "trou", consigne: "Complétez (gespannt + préposition).", texte: "Ich bin gespannt {0} das Ergebnis.", accepte: [["auf"]], indice: "gespannt auf + accusatif" },
      { type: "association", consigne: "Associez l'adjectif et sa préposition.", paires: [{ gauche: "stolz", droite: "auf" }, { gauche: "fähig", droite: "zu" }, { gauche: "verantwortlich", droite: "für" }, { gauche: "überzeugt", droite: "von" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je suis fier de mon travail.", accepte: ["Ich bin stolz auf meine Arbeit"], aide: "stolz auf + accusatif" }
    ]
  },
  c1g05: {
    id: "c1g05", titre: "Connecteurs en deux parties", titreDE: "Zweiteilige Konnektoren", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Relier deux éléments avec des connecteurs corrélés", "Employer je … desto"],
    grammairePoints: ["sowohl…als auch, weder…noch", "je…desto, zwar…aber"],
    coursDE: [
      "**Zweiteilige Konnektoren** verbinden zwei Elemente durch ein festes Wortpaar. Sie verleihen deinen Sätzen Präzision und Eleganz und sind ein Markenzeichen des fortgeschrittenen Ausdrucks.",
      "Für **Aufzählung und Alternative**: *sowohl … als auch*, *weder … noch*, *entweder … oder*, *nicht nur … sondern auch*. Beispiel: « *Das Konzept ist **nicht nur** innovativ, **sondern auch** praktisch* ».",
      "Besonders nützlich ist **je … desto / umso** (plus … plus). Achte auf die Wortstellung: « ***Je** mehr man übt, **desto** sicherer wird man* » – nach *je* steht das Verb am Ende, nach *desto* folgt es direkt.",
      "Für die **Einräumung** dient *zwar … aber*: « *Das Buch ist **zwar** lang, **aber** sehr interessant* ». Mit diesen Wortpaaren strukturierst du komplexe Aussagen klar und wirkst sprachlich versiert."
    ],
    grammaire: [
      { exemples: [{"de":"Je mehr man übt, desto besser wird man.","fr":"Plus on s'entraîne, meilleur on devient."},{"de":"Entweder du kommst mit, oder du bleibst.","fr":"Soit tu viens, soit tu restes."}], regle: "Connecteurs corrélés : *sowohl … als auch*, *weder … noch*, *entweder … oder*, *nicht nur … sondern auch*, **je … desto**.", attention: "Après **je** le verbe va à la **fin** ; après **desto** il vient en **2ᵉ** position.", titre: "Les connecteurs corrélés", intro: "Ils relient deux éléments et nuancent (addition, exclusion, gradation, concession).",
        tableau: { entetes: ["Connecteur", "Sens", "Exemple"], lignes: [["sowohl … als auch", "aussi bien … que", "sowohl klug als auch fleißig"], ["weder … noch", "ni … ni", "weder Zeit noch Geld"], ["nicht nur … sondern auch", "non seulement … mais aussi", "nicht nur er, sondern auch sie"], ["entweder … oder", "soit … soit", "entweder jetzt oder nie"], ["je … desto", "plus … plus", "je mehr, desto besser"]] },
        schemas: [{ legende: "je + comparatif (verbe fin), desto + comparatif (verbe 2e).", mots: [{ m: "Je länger man wartet,", r: "je … (verbe fin)", c: "conj" }, { m: "desto schwieriger", r: "desto + comparatif", c: "objet" }, { m: "wird", r: "verbe (2)", c: "verbe" }, { m: "es", r: "sujet", c: "fin" }] }],
        note: "« weder … noch » est déjà négatif (pas d'autre négation). Après « je », verbe à la fin ; après « desto », verbe en 2e." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« je … desto » exprime…", options: ["une gradation parallèle (plus … plus)", "une exclusion", "une alternative"], correct: 0, explication: "je mehr, desto besser." },
      { type: "qcm", consigne: "Choisissez.", question: "Er ist ___ klug ___ fleißig.", options: ["sowohl … als auch", "weder … noch", "entweder … oder", "zwar … aber"], correct: 0, explication: "addition positive → sowohl … als auch." },
      { type: "trou", consigne: "Complétez (je … desto).", texte: "Je mehr man übt, {0} besser wird man.", accepte: [["desto"]], indice: "je … desto" },
      { type: "association", consigne: "Associez le connecteur et son sens.", paires: [{ gauche: "weder … noch", droite: "ni … ni" }, { gauche: "entweder … oder", droite: "soit … soit" }, { gauche: "je … desto", droite: "plus … plus" }, { gauche: "zwar … aber", droite: "certes … mais" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Plus on attend, plus cela devient difficile.", accepte: ["Je länger man wartet, desto schwieriger wird es", "Je mehr man wartet, desto schwieriger wird es"], aide: "je … desto + comparatifs" }
    ]
  },
  c1g06: {
    id: "c1g06", titre: "Connecteurs : principales", titreDE: "Verbindungsadverbien", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Relier deux principales par un adverbe connecteur", "Gérer l'inversion (verbe en 2e)"],
    grammairePoints: ["deshalb, trotzdem, dennoch", "folglich, allerdings, jedoch"],
    coursDE: [
      "**Verbindungsadverbien** (Konjunktionaladverbien) verknüpfen zwei Hauptsätze logisch. Anders als Konjunktionen besetzen sie eine **Satzposition**: Stehen sie am Anfang, folgt das Verb direkt danach (Inversion).",
      "Für die **Folge**: *deshalb, deswegen, daher, folglich, somit*. Für den **Gegensatz**: *trotzdem, dennoch* (néanmoins), *allerdings, jedoch* (cependant). Beispiel: « *Die Lage war schwierig; **dennoch** **blieb** er ruhig* ».",
      "Der entscheidende Unterschied zu Konjunktionen wie *weil* oder *obwohl* ist die Wortstellung: Nach einem Verbindungsadverb steht das Verb auf **Position 2**, nicht am Ende. Vergleiche: « *…, **obwohl** er müde **war*** » und « *…; **trotzdem** **arbeitete** er weiter* ».",
      "Diese Adverbien sind oft beweglich und können auch im Satzinneren stehen: « *Er arbeitete **trotzdem** weiter* ». Ihr bewusster Einsatz macht deine Argumentation flüssig und logisch nachvollziehbar."
    ],
    grammaire: [
      { exemples: [{"de":"Es regnete; trotzdem gingen wir spazieren.","fr":"Il pleuvait ; malgré tout, nous nous sommes promenés."},{"de":"Er log, folglich glaubt man ihm nicht mehr.","fr":"Il a menti, par conséquent on ne le croit plus."}], regle: "Adverbes connecteurs (*deshalb, trotzdem, dennoch, folglich, allerdings*) : le verbe reste en **2ᵉ position**.", attention: "Différence clé : *weil* → verbe à la **fin** ; *deshalb* → verbe en **2ᵉ** position.", titre: "Les adverbes connecteurs (Position 1 → inversion)", intro: "Contrairement aux conjonctions de subordination, ces adverbes laissent le verbe en 2e position ; placés en tête, ils provoquent l'inversion.",
        tableau: { entetes: ["Adverbe", "Sens", "Exemple"], lignes: [["deshalb", "c'est pourquoi", "Es regnet, deshalb bleibe ich."], ["trotzdem", "malgré tout", "Es regnet, trotzdem gehe ich."], ["dennoch", "néanmoins", "Schwierig, dennoch schaffte er es."], ["folglich", "par conséquent", "Er log, folglich glaubt man ihm nicht."], ["allerdings", "toutefois", "Gut, allerdings teuer."]] },
        schemas: [{ legende: "Adverbe connecteur en tête → verbe en 2e position.", mots: [{ m: "Es war spät,", r: "principale 1", c: "objet" }, { m: "trotzdem", r: "connecteur (1)", c: "conj" }, { m: "arbeiteten", r: "verbe (2)", c: "verbe" }, { m: "wir weiter", r: "sujet + complément", c: "fin" }] }],
        note: "Différence clé : « weil » → verbe à la fin ; « deshalb » → verbe en 2e position." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Après « trotzdem » en tête, le verbe se place…", options: ["en 2e position (inversion)", "à la fin", "au début"], correct: 0, explication: "Adverbe connecteur → verbe en 2e position." },
      { type: "qcm", consigne: "Choisissez (concession).", question: "Es war schwer, ___ gab er nicht auf.", options: ["dennoch", "weil", "obwohl", "damit"], correct: 0, explication: "dennoch = néanmoins (verbe en 2e)." },
      { type: "trou", consigne: "Complétez (inversion).", texte: "Es regnete; deshalb {0} wir zu Hause. (bleiben)", accepte: [["blieben"]], indice: "deshalb en tête → verbe en 2e position" },
      { type: "association", consigne: "Associez l'adverbe et son sens.", paires: [{ gauche: "deshalb", droite: "c'est pourquoi" }, { gauche: "trotzdem", droite: "malgré tout" }, { gauche: "folglich", droite: "par conséquent" }, { gauche: "allerdings", droite: "toutefois" }] },
      { type: "ordre", consigne: "Construisez la phrase (inversion).", mots: ["Trotzdem", "blieb", "er", "ruhig"], correct: "Trotzdem blieb er ruhig", traduction: "Malgré tout, il resta calme." }
    ]
  },
  c1g07: {
    id: "c1g07", titre: "Les verbes modaux", titreDE: "Die Modalverben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Distinguer sens objectif et subjectif", "Employer le modal au passé et au passif"],
    grammairePoints: ["müsste, dürfte (supposition)", "hätte … müssen, … werden müssen"],
    coursDE: [
      "Auf C1-Niveau beherrschst du die **subjektive** Bedeutung der Modalverben, mit der du den **Sicherheitsgrad** einer Vermutung ausdrückst, sowie ihre **Vergangenheitsformen**, die syntaktisch anspruchsvoll sind.",
      "Subjektive Vermutungen: *müsste* (hohe Wahrscheinlichkeit: « *Er **müsste** schon da sein* »), *dürfte* (begründete Annahme: « *Das **dürfte** stimmen* »), *könnte* (Möglichkeit), *soll* (Wiedergabe fremder Aussagen: « *Er **soll** sehr reich sein* »).",
      "Die Vergangenheit der subjektiven Modalverben bildet man mit *müsste/könnte/dürfte* + **Partizip II + haben/sein**: « *Er **müsste** das **gewusst haben*** ». Diese Konstruktion mit doppeltem Infinitiv ist typisch C1.",
      "Auch die objektive Vergangenheit verlangt im Perfekt einen **doppelten Infinitiv**: « *Ich habe arbeiten **müssen*** » (statt « gemusst »). Im Nebensatz rückt das konjugierte Verb vor die Infinitive: « *…, weil ich **habe** arbeiten müssen* ». Diese Feinheit unterscheidet fortgeschrittene Lerner."
    ],
    grammaire: [
      { exemples: [{"de":"Ich hätte früher kommen sollen.","fr":"J'aurais dû venir plus tôt."},{"de":"Das muss bis morgen erledigt werden.","fr":"Cela doit être fait pour demain."}], regle: "Sens **subjectif** (supposition : *dürfte, müsste*), combinaisons au **passé** (*hätte … müssen*) et au **passif** (*muss … werden*).", attention: "Ordre final : *Ich hätte gehen **müssen*** (infinitif + modal à l'infinitif).", titre: "Modaux : nuances avancées", intro: "Au C1, les modaux expriment la supposition (sens subjectif) et se combinent au passé et au passif.",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["supposition", "dürfte / müsste", "Er dürfte schon da sein."], ["rumeur", "sollen", "Er soll sehr reich sein."], ["prétention", "wollen", "Sie will nichts gewusst haben."], ["passé + modal", "hätte … müssen", "Ich hätte gehen müssen."], ["passif + modal", "muss … werden", "Das muss erledigt werden."]] },
        note: "Degrés : müssen (quasi sûr) > dürfte (probable) > könnte (possible)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Er dürfte schon da sein » exprime…", options: ["une probabilité", "une permission", "une obligation"], correct: 0, explication: "dürfte = supposition probable." },
      { type: "qcm", consigne: "Choisissez (passé + modal).", question: "Ich ___ früher gehen müssen.", options: ["hätte", "habe", "würde", "bin"], correct: 0, explication: "regret/obligation passée : hätte … müssen." },
      { type: "trou", consigne: "Complétez (passif + modal).", texte: "Der Bericht muss bis morgen geschrieben {0}.", accepte: [["werden"]], indice: "passif + modal → participe + werden" },
      { type: "association", consigne: "Associez le modal et son sens subjectif.", paires: [{ gauche: "müssen", droite: "quasi certain" }, { gauche: "dürfte", droite: "probable" }, { gauche: "sollen", droite: "rumeur" }, { gauche: "wollen", droite: "prétention" }] },
      { type: "ordre", consigne: "Construisez la phrase (passé + modal).", mots: ["Ich", "hätte", "anrufen", "sollen"], correct: "Ich hätte anrufen sollen", traduction: "J'aurais dû appeler." }
    ]
  },
  c1g08: {
    id: "c1g08", titre: "Le subjonctif II", titreDE: "Der Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C1",
    objectifs: ["Maîtriser présent et passé du Konjunktiv II", "Exprimer politesse, souhait et irréel"],
    grammairePoints: ["würde, hätte, wäre, könnte", "hätte/wäre + participe (passé)"],
    coursDE: [
      "Der **Konjunktiv II** ist auf C1-Niveau ein zentrales Stilmittel für **Irrealität, Höflichkeit und Distanzierung**. Du solltest die Gegenwarts- und Vergangenheitsformen mühelos und situationsgerecht einsetzen.",
      "In der **Gegenwart** stehen die echten Formen (*wäre, hätte, käme, ginge, könnte*) neben der Umschreibung *würde* + Infinitiv. In gepflegter Sprache bevorzugt man bei häufigen Verben die echte Form: « *Das **käme** für mich nicht infrage* ».",
      "Die **Vergangenheit** kennt nur eine Form: *hätte/wäre* + Partizip II: « *Wenn ich das **gewusst hätte**, **wäre** ich nicht **gekommen*** ». Sie drückt Bedauern über Nicht-Geschehenes präzise aus.",
      "Funktional dient der Konjunktiv II der **diplomatischen Distanz**: höfliche Bitten (« *Wären Sie so freundlich…* »), vorsichtige Behauptungen (« *Man könnte argumentieren, dass…* ») und irreale Vergleiche mit *als ob* (« *Er tut, **als ob** er nichts **wüsste*** »)."
    ],
    grammaire: [
      { exemples: [{"de":"An deiner Stelle wäre ich vorsichtiger.","fr":"À ta place, je serais plus prudent."},{"de":"Er tut, als ob nichts geschehen wäre.","fr":"Il fait comme si rien ne s'était passé."}], regle: "Présent (würde/hätte/wäre/könnte) et passé (**hätte/wäre + participe**) ; comparaison **als ob** + KII (fin).", attention: "Après *als ob* → verbe à la **fin** ; souhait : *Wenn ich doch nur … hätte!*", titre: "Présent et passé de l'irréel", intro: "Présent : würde + infinitif ou formes propres ; passé : hätte/wäre + participe II.",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["politesse", "könnte / würde", "Könnten Sie mir helfen?"], ["souhait irréel", "wenn … doch nur", "Wenn ich doch nur Zeit hätte!"], ["irréel présent", "würde + infinitif", "Ich würde sofort kündigen."], ["irréel passé", "hätte/wäre + participe", "Ich wäre gern gekommen."], ["comparaison", "als ob + KII (fin)", "Er tut, als ob er alles wüsste."]] },
        schemas: [{ legende: "Irréel passé : wäre (2) … participe (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "wäre", r: "wäre (2)", c: "verbe" }, { m: "gern früher", r: "complément", c: "objet" }, { m: "gekommen", r: "participe (fin)", c: "fin" }] }],
        note: "Après « als ob », le verbe (Konjunktiv II) va à la fin ; après « als » seul, juste après (« als wüsste er »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "L'irréel du passé se forme avec…", options: ["hätte/wäre + participe II", "würde + infinitif", "haben + infinitif"], correct: 0, explication: "Ich hätte gesagt / Ich wäre gegangen." },
      { type: "qcm", consigne: "Choisissez (politesse).", question: "___ Sie mir kurz helfen?", options: ["Könnten", "Können", "Konnten", "Kannst"], correct: 0, explication: "Konjunktiv II poli : Könnten Sie…?" },
      { type: "trou", consigne: "Complétez (als ob, verbe à la fin).", texte: "Er tut, als ob er alles {0}. (wissen)", accepte: [["wüsste"]], indice: "als ob + Konjunktiv II → wüsste" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "wissen", droite: "wüsste" }, { gauche: "werden", droite: "würde" }] },
      { type: "ordre", consigne: "Construisez (souhait irréel).", mots: ["Wenn", "ich", "doch", "nur", "Zeit", "hätte"], correct: "Wenn ich doch nur Zeit hätte", traduction: "Si seulement j'avais le temps !" }
    ]
  },
  c1g09: {
    id: "c1g09", titre: "Prépositions avec le génitif", titreDE: "Präpositionen mit Genitiv", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C1",
    objectifs: ["Employer les prépositions à génitif soutenues", "Exprimer cause, opposition, point de vue"],
    grammairePoints: ["wegen, trotz, während", "angesichts, hinsichtlich, zugunsten"],
    coursDE: [
      "Die **Präpositionen mit Genitiv** sind ein Kennzeichen der gehobenen Schriftsprache. Auf C1 erweiterst du die bekannten Formen um zahlreiche **formelle** Präpositionen, die in akademischen und beruflichen Texten unverzichtbar sind.",
      "Neben *wegen, trotz, während, (an)statt* treten anspruchsvollere hinzu: **angesichts** (au vu de), **hinsichtlich / bezüglich** (concernant), **zugunsten** (en faveur de), **anlässlich** (à l'occasion de), **infolge** (par suite de), **mittels** (au moyen de). Beispiel: « ***Angesichts** der Lage müssen wir handeln* ».",
      "Die Genitiv-Rektion bleibt konstant: maskulin/neutral *des …-(e)s*, feminin/Plural *der …*: « *hinsichtlich **der** Kosten* », « *infolge **des** Sturm**s*** ».",
      "Stilistisch signalisieren diese Präpositionen ein **formelles Register**. In der Umgangssprache werden manche durch *wegen + Dativ* ersetzt, doch im schriftlichen Kontext erwartet man den Genitiv. Ihr gezielter Einsatz hebt das Niveau deiner Texte deutlich."
    ],
    grammaire: [
      { exemples: [{"de":"Angesichts der Lage müssen wir handeln.","fr":"Compte tenu de la situation, nous devons agir."},{"de":"Hinsichtlich der Kosten gibt es noch Fragen.","fr":"Concernant les coûts, il reste des questions."}], regle: "Outre *wegen/trotz/während*, le C1 emploie *angesichts* (compte tenu de), *hinsichtlich* (concernant), *zugunsten*, *mangels* (+ génitif).", attention: "Registre **écrit** : à l'oral, on les remplace souvent par *wegen/von … aus*.", titre: "Le registre soutenu impose le génitif", intro: "Outre wegen/trotz/während, le C1 emploie des prépositions à génitif plus rares et formelles.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["wegen", "à cause de", "wegen des Wetters"], ["trotz", "malgré", "trotz aller Probleme"], ["angesichts", "compte tenu de", "angesichts der Lage"], ["hinsichtlich", "concernant", "hinsichtlich der Kosten"], ["zugunsten", "en faveur de", "zugunsten der Kinder"], ["mangels", "faute de", "mangels Beweisen"]] },
        note: "À l'oral, wegen/trotz tolèrent le datif ; le génitif reste la norme écrite soignée." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« angesichts » signifie…", options: ["compte tenu de", "malgré", "en faveur de"], correct: 0, explication: "angesichts = compte tenu de / face à." },
      { type: "qcm", consigne: "Choisissez (génitif masculin).", question: "Wegen ___ Sturms fiel der Zug aus.", options: ["des", "der", "dem", "den"], correct: 0, explication: "wegen + génitif, der Sturm → des Sturms." },
      { type: "trou", consigne: "Complétez (génitif féminin).", texte: "Hinsichtlich {0} Kosten gibt es noch Fragen.", accepte: [["der"]], indice: "hinsichtlich + génitif, die Kosten (pl.) → der" },
      { type: "association", consigne: "Associez la préposition et son sens.", paires: [{ gauche: "trotz", droite: "malgré" }, { gauche: "angesichts", droite: "compte tenu de" }, { gauche: "zugunsten", droite: "en faveur de" }, { gauche: "mangels", droite: "faute de" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Malgré tous les problèmes, il a réussi.", accepte: ["Trotz aller Probleme hat er es geschafft", "Trotz aller Probleme schaffte er es"], aide: "trotz + génitif" }
    ]
  }
});
