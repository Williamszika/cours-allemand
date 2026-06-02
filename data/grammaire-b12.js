/* =====================================================================
   grammaire-b12.js — 9 LEÇONS DE GRAMMAIRE du module B1.2
   (extension de window.GRAMMAIRE_B1). Suit les 9 points B1.2 du
   programme. Schémas colorés pour les structures clés.
   ===================================================================== */
window.GRAMMAIRE_B1 = Object.assign(window.GRAMMAIRE_B1 || {}, {
  b1g15: {
    id: "b1g15", titre: "Indicateurs de conditionnel", titreDE: "Irreale Bedingungen (wenn)", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer une hypothèse irréelle", "Relier condition et conséquence (wenn … würde)"],
    grammairePoints: ["wenn + Konjunktiv II", "sonst, andernfalls"],
    grammaire: [
      { regle: "Condition irréelle : **wenn + Konjunktiv II**, conséquence avec **würde / hätte / wäre**. *sonst* = sinon.", attention: "On peut inverser sans *wenn* : *Hätte ich Zeit, würde ich kommen*.", exemples: [{"de":"Wenn ich Zeit hätte, würde ich dir helfen.","fr":"Si j'avais le temps, je t'aiderais."},{"de":"Beeil dich, sonst kommen wir zu spät.","fr":"Dépêche-toi, sinon nous arriverons en retard."}], titre: "La condition irréelle", intro: "« Wenn + Konjunktiv II », conséquence avec würde / hätte / wäre. « sonst » = sinon.",
        tableau: { entetes: ["Condition", "Conséquence"], lignes: [["Wenn ich Zeit hätte,", "würde ich dir helfen."], ["Wenn ich reich wäre,", "würde ich reisen."], ["Beeil dich,", "sonst kommst du zu spät."]] },
        schemas: [{ legende: "wenn en tête → la principale commence par le verbe.", mots: [{ m: "Wenn ich Zeit hätte,", r: "condition (wenn)", c: "conj" }, { m: "würde", r: "verbe (1)", c: "verbe" }, { m: "ich dir", r: "sujet + datif", c: "sujet" }, { m: "helfen", r: "infinitif (fin)", c: "fin" }] }],
        note: "On peut inverser : « Ich würde dir helfen, wenn ich Zeit hätte. » « sonst » introduit la conséquence négative." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Une condition irréelle se construit avec…", options: ["wenn + Konjunktiv II", "wenn + présent", "weil + indicatif"], correct: 0, explication: "Wenn ich Zeit hätte, würde ich…" },
      { type: "qcm", consigne: "Choisissez.", question: "Wenn ich du ___, würde ich es sofort machen.", options: ["wäre", "bin", "war", "bist"], correct: 0, explication: "sein → wäre (Konjunktiv II)." },
      { type: "trou", consigne: "Complétez (sonst).", texte: "Beeil dich, {0} verpassen wir den Zug.", accepte: [["sonst"]], indice: "sinon = sonst" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "werden", droite: "würde" }, { gauche: "können", droite: "könnte" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Si j'avais le temps, je viendrais.", accepte: ["Wenn ich Zeit hätte, würde ich kommen", "Ich würde kommen, wenn ich Zeit hätte"], aide: "wenn + hätte … würde" }
    ]
  },
  b1g16: {
    id: "b1g16", titre: "Les propositions finales", titreDE: "Finalsätze: um … zu / damit", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer un but", "Choisir um … zu (même sujet) ou damit (sujet différent)"],
    grammairePoints: ["um … zu + Infinitiv", "damit + Nebensatz"],
    grammaire: [
      { regle: "Exprimer le **but** : **um … zu** + infinitif (même sujet) ou **damit** + subordonnée (sujet différent, verbe à la fin).", attention: "Test : même sujet → *um … zu* ; nouveau sujet → *damit*.", titre: "Exprimer le but", intro: "« um … zu + infinitif » si le sujet est le même. « damit » si le sujet change (verbe à la fin).",
        tableau: { entetes: ["Structure", "Condition", "Exemple"], lignes: [["um … zu + Inf.", "même sujet", "Ich spare, um zu reisen."], ["damit", "sujet différent", "Ich spare, damit meine Kinder studieren können."]] },
        schemas: [{ legende: "damit : verbe conjugué à la FIN.", mots: [{ m: "Ich erkläre es,", r: "principale", c: "objet" }, { m: "damit", r: "but", c: "conj" }, { m: "du es", r: "sujet + objet", c: "sujet" }, { m: "verstehst", r: "verbe (fin)", c: "fin" }] }],
        note: "Test : si on peut garder le même sujet → um … zu ; s'il faut un nouveau sujet → damit." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« um … zu » s'emploie quand…", options: ["le sujet est le même", "le sujet change", "il y a deux verbes conjugués"], correct: 0, explication: "Même sujet → um … zu." },
      { type: "qcm", consigne: "um…zu ou damit ?", question: "Ich spreche langsam, ___ alle mich verstehen.", options: ["damit", "um zu", "weil", "um"], correct: 0, explication: "sujet différent (alle) → damit." },
      { type: "trou", consigne: "Complétez (um … zu).", texte: "Ich lerne Deutsch, {0} in Berlin zu arbeiten.", accepte: [["um"]], indice: "but, même sujet : um … zu" },
      { type: "association", consigne: "Associez.", paires: [{ gauche: "um … zu", droite: "même sujet" }, { gauche: "damit", droite: "sujet différent" }, { gauche: "weil", droite: "cause" }, { gauche: "obwohl", droite: "concession" }] },
      { type: "ordre", consigne: "Construisez la finale.", mots: ["um", "Geld", "zu", "sparen"], correct: "um Geld zu sparen", traduction: "pour économiser de l'argent" }
    ]
  },
  b1g17: {
    id: "b1g17", titre: "Noms, verbes & connecteurs", titreDE: "Nomen-Verb-Verbindungen & Konnektoren", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Utiliser des locutions nom + verbe", "Relier ses idées avec des connecteurs"],
    grammairePoints: ["eine Entscheidung treffen", "trotzdem, außerdem, deswegen"],
    grammaire: [
      { regle: "Locutions figées **nom + verbe** (*eine Entscheidung **treffen***, *eine Frage **stellen***) et connecteurs (*außerdem, trotzdem, deswegen*).", attention: "Après *außerdem/trotzdem/deswegen* en tête, le verbe reste en **2ᵉ position**.", titre: "Locutions figées et connecteurs", intro: "Beaucoup d'expressions associent un nom et un verbe précis. Les connecteurs relient les phrases (et placent le verbe en 2e position).",
        tableau: { entetes: ["Locution / connecteur", "Sens", "Exemple"], lignes: [["eine Entscheidung treffen", "prendre une décision", "Ich treffe eine Entscheidung."], ["eine Frage stellen", "poser une question", "Er stellt eine Frage."], ["außerdem", "de plus", "Es ist teuer; außerdem ist es weit."], ["trotzdem", "malgré tout", "Es regnet; trotzdem gehe ich."], ["deswegen", "c'est pourquoi", "Ich bin krank; deswegen bleibe ich."]] },
        note: "Après außerdem / trotzdem / deswegen en tête, le verbe reste en 2e position (inversion)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez le verbe.", question: "eine Entscheidung ___", options: ["treffen", "machen", "geben", "nehmen"], correct: 0, explication: "Locution figée : eine Entscheidung treffen." },
      { type: "qcm", consigne: "Choisissez le connecteur.", question: "Es regnet. ___ gehe ich spazieren. (malgré tout)", options: ["Trotzdem", "Deswegen", "Außerdem", "Weil"], correct: 0, explication: "trotzdem = malgré tout." },
      { type: "trou", consigne: "Complétez (inversion après deswegen).", texte: "Ich bin müde, deswegen {0} ich nach Hause. (gehen)", accepte: [["gehe"]], indice: "deswegen en tête → verbe en 2e position" },
      { type: "association", consigne: "Associez le connecteur et son sens.", paires: [{ gauche: "außerdem", droite: "de plus" }, { gauche: "trotzdem", droite: "malgré tout" }, { gauche: "deswegen", droite: "c'est pourquoi" }, { gauche: "eine Frage stellen", droite: "poser une question" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je prends une décision.", accepte: ["Ich treffe eine Entscheidung"], aide: "eine Entscheidung treffen" }
    ]
  },
  b1g18: {
    id: "b1g18", titre: "Les temps du passé (récit)", titreDE: "Vergangenheit im Text", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Choisir le bon temps dans un récit", "Combiner Präteritum et Plusquamperfekt"],
    grammairePoints: ["Präteritum (récit écrit)", "Plusquamperfekt (antériorité)"],
    grammaire: [
      { regle: "Dans un récit, le **Präteritum** porte le fil ; le **Plusquamperfekt** marque ce qui s'était passé **avant**.", attention: "Concordance avec *nachdem* : subordonnée **plus-que-parfait** → principale **prétérit**.", titre: "Construire un récit cohérent", intro: "Dans un texte au passé, le Präteritum porte le fil du récit ; le Plusquamperfekt marque ce qui s'était passé AVANT.",
        tableau: { entetes: ["Plan", "Temps", "Exemple"], lignes: [["fil du récit", "Präteritum", "Sie kam nach Hause und kochte."], ["antériorité", "Plusquamperfekt", "Sie hatte schon eingekauft."], ["dialogue/oral inséré", "Perfekt", "« Ich habe das gemacht », sagte sie."]] },
        note: "Mots utiles : zuerst, dann, danach, schließlich, nachdem (+ Plusquamperfekt)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Dans un récit écrit, le fil principal est au…", options: ["Präteritum", "Perfekt", "Plusquamperfekt"], correct: 0, explication: "Le Präteritum porte le récit écrit." },
      { type: "qcm", consigne: "Choisissez (antériorité).", question: "Als er ankam, ___ der Film schon begonnen.", options: ["hatte", "hat", "war", "ist"], correct: 0, explication: "beginnen → haben → hatte begonnen (antérieur)." },
      { type: "trou", consigne: "Complétez (Präteritum).", texte: "Sie {0} nach Hause und machte das Essen. (kommen)", accepte: [["kam"]], indice: "kommen → kam" },
      { type: "association", consigne: "Associez le rôle et le temps.", paires: [{ gauche: "fil du récit", droite: "Präteritum" }, { gauche: "antériorité", droite: "Plusquamperfekt" }, { gauche: "oral/dialogue", droite: "Perfekt" }, { gauche: "sein/haben", droite: "Präteritum" }] },
      { type: "ordre", consigne: "Phrase au plus-que-parfait.", mots: ["Er", "hatte", "vorher", "angerufen"], correct: "Er hatte vorher angerufen", traduction: "Il avait appelé avant." }
    ]
  },
  b1g19: {
    id: "b1g19", titre: "Propositions temporelles", titreDE: "Temporalsätze: Gleichzeitigkeit & Vorzeitigkeit", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer la simultanéité (während, solange)", "Exprimer la non-simultanéité (bevor, nachdem, sobald)"],
    grammairePoints: ["während, solange", "bevor, nachdem, sobald"],
    grammaire: [
      { regle: "**Simultanéité** : *während, solange*. **Succession** : *bevor* (avant), *nachdem* (après), *sobald* (dès que). Verbe à la fin.", attention: "Avec **nachdem**, pense à la concordance des temps (plus-que-parfait → prétérit).", titre: "Simultané ou successif ?", intro: "Simultanéité : während, solange. Non-simultanéité : bevor (avant), nachdem (après), sobald (dès que). Verbe à la fin.",
        tableau: { entetes: ["Conjonction", "Relation", "Exemple"], lignes: [["während", "simultané", "Während ich koche, deckst du den Tisch."], ["solange", "simultané (durée)", "Solange es regnet, bleiben wir drin."], ["bevor", "avant", "Bevor ich gehe, esse ich."], ["nachdem", "après (antériorité)", "Nachdem ich gegessen hatte, ging ich."], ["sobald", "dès que", "Sobald er kommt, fangen wir an."]] },
        schemas: [{ legende: "während : verbe à la FIN dans la subordonnée.", mots: [{ m: "Während ich", r: "subordonnée (während)", c: "conj" }, { m: "Musik", r: "complément", c: "sujet" }, { m: "höre,", r: "verbe (fin)", c: "fin" }, { m: "koche ich", r: "principale (verbe 1)", c: "verbe" }] }],
        note: "Avec « nachdem », pensez à la concordance des temps : subordonnée plus-que-parfait → principale prétérit." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« während » exprime…", options: ["la simultanéité", "l'antériorité", "la cause"], correct: 0, explication: "während = pendant que (en même temps)." },
      { type: "qcm", consigne: "Choisissez.", question: "___ er kommt, fangen wir an. (dès que)", options: ["Sobald", "Bevor", "Nachdem", "Obwohl"], correct: 0, explication: "sobald = dès que." },
      { type: "trou", consigne: "Complétez (verbe à la fin).", texte: "Bevor ich {0}, frühstücke ich. (gehen)", accepte: [["gehe"]], indice: "bevor → verbe à la fin" },
      { type: "association", consigne: "Associez la conjonction et la relation.", paires: [{ gauche: "während", droite: "simultané" }, { gauche: "bevor", droite: "avant" }, { gauche: "nachdem", droite: "après" }, { gauche: "sobald", droite: "dès que" }] },
      { type: "ordre", consigne: "Construisez la subordonnée.", mots: ["während", "ich", "arbeite"], correct: "während ich arbeite", traduction: "pendant que je travaille" }
    ]
  },
  b1g20: {
    id: "b1g20", titre: "Les prépositions", titreDE: "Wechselpräpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Choisir le cas après une préposition mixte", "Distinguer lieu (Dat.) et direction (Akk.)"],
    grammairePoints: ["an, auf, in, über…", "Wo? + Dat. / Wohin? + Akk."],
    grammaire: [
      { regle: "Neuf prépositions mixtes (*an, auf, hinter, in, neben, über, unter, vor, zwischen*) : **datif** si position (**Wo?**), **accusatif** si direction (**Wohin?**).", attention: "Couples : *liegen/legen, stehen/stellen, sitzen/setzen* — position (Dat.) vs action de placer (Akk.).", titre: "Les prépositions mixtes (Wechselpräpositionen)", intro: "Neuf prépositions de lieu prennent le datif (position : Wo?) ou l'accusatif (direction : Wohin?).",
        tableau: { entetes: ["Question", "Cas", "Exemple"], lignes: [["Wo? (position)", "datif", "Das Buch liegt auf dem Tisch."], ["Wohin? (direction)", "accusatif", "Ich lege das Buch auf den Tisch."], ["Wo?", "datif", "Ich bin in der Schule."], ["Wohin?", "accusatif", "Ich gehe in die Schule."]] },
        schemas: [{ legende: "Wohin ? → accusatif (mouvement vers).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "stelle", r: "verbe (2)", c: "verbe" }, { m: "die Vase", r: "accusatif (quoi)", c: "objet" }, { m: "auf den Tisch", r: "direction (acc.)", c: "fin" }] }],
        note: "Les 9 : an, auf, hinter, in, neben, über, unter, vor, zwischen. Position = Dat., direction = Akk." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Pour une DIRECTION (Wohin?), on emploie…", options: ["l'accusatif", "le datif", "le génitif"], correct: 0, explication: "Wohin? → accusatif." },
      { type: "qcm", consigne: "Choisissez le cas.", question: "Ich hänge das Bild an ___ Wand. (Wohin?)", options: ["die", "der", "dem", "den"], correct: 0, explication: "direction + die Wand (f.) accusatif → die." },
      { type: "trou", consigne: "Complétez (position, datif).", texte: "Das Bild hängt an {0} Wand.", accepte: [["der"]], indice: "Wo? → datif, féminin die Wand → der" },
      { type: "association", consigne: "Associez la question et le cas.", paires: [{ gauche: "Wo?", droite: "datif" }, { gauche: "Wohin?", droite: "accusatif" }, { gauche: "liegen", droite: "position" }, { gauche: "legen", droite: "direction" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je vais à l'école.", accepte: ["Ich gehe in die Schule"], aide: "direction → in + accusatif" }
    ]
  },
  b1g21: {
    id: "b1g21", titre: "Adjectifs avec prépositions", titreDE: "Adjektive mit Präpositionen", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Mémoriser les adjectifs à préposition fixe", "Appliquer le cas imposé"],
    grammairePoints: ["stolz auf, zufrieden mit", "böse auf, bereit zu"],
    grammaire: [
      { regle: "Des **adjectifs** imposent une préposition fixe : *stolz **auf***, *zufrieden **mit***, *bereit **zu***, *abhängig **von***.", attention: "Interroger/reprendre comme les verbes : *Worauf bist du stolz? – Ich bin stolz **darauf***.", titre: "Adjectif + préposition + cas", intro: "Comme les verbes, certains adjectifs imposent une préposition et un cas. À apprendre par paires.",
        tableau: { entetes: ["Adjectif", "Préposition + cas", "Exemple"], lignes: [["stolz", "auf + Akk.", "stolz auf den Erfolg"], ["zufrieden", "mit + Dat.", "zufrieden mit der Note"], ["böse", "auf + Akk.", "böse auf den Kollegen"], ["bereit", "zu + Dat.", "bereit zur Abreise"], ["verliebt", "in + Akk.", "verliebt in sie"], ["abhängig", "von + Dat.", "abhängig von den Eltern"]] },
        note: "Pour interroger : « Worauf bist du stolz? » ; pour reprendre : « Ich bin stolz darauf. »" }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« zufrieden » se construit avec…", options: ["mit + datif", "auf + accusatif", "für + accusatif"], correct: 0, explication: "zufrieden mit + datif." },
      { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich bin stolz ___ meine Arbeit.", options: ["auf", "mit", "von", "zu"], correct: 0, explication: "stolz auf + accusatif." },
      { type: "trou", consigne: "Complétez (abhängig + préposition).", texte: "Er ist noch abhängig {0} seinen Eltern.", accepte: [["von"]], indice: "abhängig von + datif" },
      { type: "association", consigne: "Associez l'adjectif et sa préposition.", paires: [{ gauche: "stolz", droite: "auf" }, { gauche: "zufrieden", droite: "mit" }, { gauche: "bereit", droite: "zu" }, { gauche: "verliebt", droite: "in" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je suis content de ma note.", accepte: ["Ich bin zufrieden mit meiner Note"], aide: "zufrieden mit + datif" }
    ]
  },
  b1g22: {
    id: "b1g22", titre: "Les énumérations", titreDE: "Doppelkonnektoren", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Relier deux éléments avec des connecteurs doubles", "Nuancer (et… et, ni… ni, soit… soit)"],
    grammairePoints: ["sowohl … als auch", "weder … noch, entweder … oder, nicht nur … sondern auch"],
    grammaire: [
      { regle: "Connecteurs doubles : **sowohl … als auch**, **weder … noch**, **entweder … oder**, **nicht nur … sondern auch**.", attention: "*weder … noch* est **déjà négatif**. Après *sondern*, on corrige une **négation** précédente.", titre: "Les connecteurs doubles", intro: "Ils relient deux éléments de même nature pour énumérer ou opposer.",
        tableau: { entetes: ["Connecteur", "Sens", "Exemple"], lignes: [["sowohl … als auch", "aussi bien … que", "Sie spricht sowohl Deutsch als auch Englisch."], ["weder … noch", "ni … ni", "Ich trinke weder Kaffee noch Tee."], ["entweder … oder", "soit … soit", "Wir fahren entweder nach Rom oder nach Paris."], ["nicht nur … sondern auch", "non seulement … mais aussi", "Er ist nicht nur klug, sondern auch fleißig."]] },
        note: "« weder … noch » est déjà négatif : pas d'autre négation. Après « sondern », on corrige une négation précédente." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« weder … noch » signifie…", options: ["ni … ni", "soit … soit", "aussi bien … que"], correct: 0, explication: "weder … noch = ni … ni." },
      { type: "qcm", consigne: "Choisissez.", question: "Wir fahren ___ nach Rom ___ nach Paris.", options: ["entweder … oder", "weder … noch", "sowohl … als", "nicht … sondern"], correct: 0, explication: "soit … soit → entweder … oder." },
      { type: "trou", consigne: "Complétez (sowohl … als auch).", texte: "Sie spricht sowohl Deutsch {0} auch Englisch.", accepte: [["als"]], indice: "sowohl … als auch" },
      { type: "association", consigne: "Associez le connecteur et son sens.", paires: [{ gauche: "sowohl … als auch", droite: "aussi bien … que" }, { gauche: "weder … noch", droite: "ni … ni" }, { gauche: "entweder … oder", droite: "soit … soit" }, { gauche: "nicht nur … sondern auch", droite: "non seulement … mais aussi" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je ne bois ni café ni thé.", accepte: ["Ich trinke weder Kaffee noch Tee"], aide: "weder … noch" }
    ]
  },
  b1g23: {
    id: "b1g23", titre: "Causes et conséquences", titreDE: "Grund und Folge", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer la cause (weil, da, denn)", "Exprimer la conséquence (deshalb, deswegen, daher)"],
    grammairePoints: ["weil, da, denn", "deshalb, deswegen, daher, darum"],
    grammaire: [
      { regle: "**Cause** : *weil/da* (verbe **fin**), *denn* (verbe **2ᵉ**). **Conséquence** : *deshalb/deswegen/daher* (verbe **2ᵉ**).", attention: "*weil* → verbe à la fin ; *deshalb* → verbe en 2ᵉ position.", titre: "Dire pourquoi et donc", intro: "Cause : weil/da (verbe à la fin), denn (verbe 2e). Conséquence : deshalb/deswegen/daher/darum (verbe 2e).",
        tableau: { entetes: ["Mot", "Rôle / position du verbe", "Exemple"], lignes: [["weil", "cause — verbe FIN", "Ich bleibe, weil ich krank bin."], ["da", "cause (connue) — verbe FIN", "Da es regnet, bleibe ich."], ["denn", "cause — verbe 2e", "Ich bleibe, denn ich bin krank."], ["deshalb", "conséquence — verbe 2e", "Ich bin krank, deshalb bleibe ich."], ["daher / darum", "conséquence — verbe 2e", "Es regnet, daher gehe ich nicht."]] },
        schemas: [{ legende: "weil : cause, verbe à la FIN.", mots: [{ m: "Ich bleibe zu Hause,", r: "principale", c: "objet" }, { m: "weil", r: "cause", c: "conj" }, { m: "ich krank", r: "sujet + complément", c: "sujet" }, { m: "bin", r: "verbe (fin)", c: "fin" }] }],
        note: "weil/da → subordination (verbe fin). denn/deshalb/deswegen/daher/darum → coordination (verbe 2e position)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « weil », le verbe va…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "weil = subordination → verbe à la fin." },
      { type: "qcm", consigne: "Cause ou conséquence ?", question: "Es regnet, ___ bleibe ich zu Hause.", options: ["deshalb", "weil", "denn nicht", "dass"], correct: 0, explication: "conséquence + verbe 2e → deshalb." },
      { type: "trou", consigne: "Complétez (weil + verbe à la fin).", texte: "Ich komme nicht, weil ich keine Zeit {0}. (haben)", accepte: [["habe"]], indice: "weil → verbe à la fin" },
      { type: "association", consigne: "Associez le mot et son rôle.", paires: [{ gauche: "weil", droite: "cause (verbe fin)" }, { gauche: "denn", droite: "cause (verbe 2e)" }, { gauche: "deshalb", droite: "conséquence" }, { gauche: "da", droite: "cause connue" }] },
      { type: "ordre", consigne: "Construisez la subordonnée de cause.", mots: ["weil", "ich", "müde", "bin"], correct: "weil ich müde bin", traduction: "parce que je suis fatigué" }
    ]
  }
});
