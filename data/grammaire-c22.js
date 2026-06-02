/* =====================================================================
   grammaire-c22.js — 8 LEÇONS DE GRAMMAIRE du module C2.2
   (extension de window.GRAMMAIRE_C2). Suit les 8 points C2.2 du
   programme : passif et substituts, modaux, déclinaison/comparaison des
   adjectifs, adjectifs à complément, formation d'adjectifs, style nominal,
   prépositions de la langue écrite.
   ===================================================================== */
window.GRAMMAIRE_C2 = Object.assign(window.GRAMMAIRE_C2 || {}, {
  c2g12: {
    id: "c2g12", titre: "Le passif", titreDE: "Das Passiv", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Maîtriser le passif à tous les temps", "Employer le passif avec modal"],
    grammairePoints: ["werden + participe (tous temps)", "sein-Passiv, modal + werden"],
    grammaire: [
      { exemples: [{"de":"Das Gesetz wurde 2020 verabschiedet.","fr":"La loi a été adoptée en 2020."},{"de":"Der Brief muss heute unterschrieben werden.","fr":"La lettre doit être signée aujourd'hui."}], regle: "Passif à **tous les temps** (*wird / wurde / ist … worden / wird … werden*) ; avec modal : participe + **werden** (fin).", attention: "Perfekt passif : *werden → **worden*** ; agent : *von + datif*, cause : *durch + accusatif*.", titre: "Le passif sous toutes ses formes", intro: "Le Vorgangspassiv (werden + participe) existe à tous les temps ; avec un modal, l'infinitif passif (… werden) va à la fin.",
        tableau: { entetes: ["Temps", "Forme", "Exemple"], lignes: [["présent", "wird + participe", "Das Haus wird gebaut."], ["prétérit", "wurde + participe", "Das Haus wurde gebaut."], ["parfait", "ist + participe + worden", "Das Haus ist gebaut worden."], ["futur", "wird + participe + werden", "Das Haus wird gebaut werden."], ["+ modal", "muss … participe + werden", "Es muss gebaut werden."]] },
        schemas: [{ legende: "Passif + modal : participe + werden (à la fin).", mots: [{ m: "Der Vertrag", r: "sujet", c: "sujet" }, { m: "muss", r: "modal (2)", c: "verbe" }, { m: "heute", r: "complément", c: "objet" }, { m: "unterschrieben werden", r: "participe + werden (fin)", c: "fin" }] }],
        note: "Au Perfekt passif, le participe de werden devient « worden » (sans ge-). Agent : von + datif ; cause : durch + accusatif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Au Perfekt passif, on emploie…", options: ["ist + participe + worden", "ist + geworden", "hat + participe"], correct: 0, explication: "Das Haus ist gebaut worden." },
      { type: "qcm", consigne: "Choisissez (passif + modal).", question: "Der Brief muss heute geschrieben ___.", options: ["werden", "worden", "wird", "sein"], correct: 0, explication: "passif + modal → participe + werden." },
      { type: "trou", consigne: "Complétez (passif prétérit).", texte: "Das Gesetz {0} 2020 verabschiedet.", accepte: [["wurde"]], indice: "prétérit passif → wurde + participe" },
      { type: "association", consigne: "Associez le temps et la forme.", paires: [{ gauche: "présent", droite: "wird gebaut" }, { gauche: "prétérit", droite: "wurde gebaut" }, { gauche: "parfait", droite: "ist gebaut worden" }, { gauche: "futur", droite: "wird gebaut werden" }] },
      { type: "ordre", consigne: "Construisez (passif + modal).", mots: ["Es", "muss", "sofort", "erledigt", "werden"], correct: "Es muss sofort erledigt werden", traduction: "Cela doit être fait immédiatement." }
    ]
  },
  c2g13: {
    id: "c2g13", titre: "Substituts du passif", titreDE: "Passiversatzformen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Remplacer le passif élégamment", "Employer man, sich lassen, sein+zu+Inf., -bar"],
    grammairePoints: ["man, sich lassen", "sein + zu + Inf., adjectifs en -bar"],
    grammaire: [
      { exemples: [{"de":"Das Buch liest sich gut.","fr":"Ce livre se lit bien."},{"de":"Das Problem ist nicht zu lösen.","fr":"Le problème ne peut pas être résolu."}], regle: "Alléger le passif : *man*, *sich lassen* (= können werden), *sein + zu + Inf.* (= müssen/können werden), adjectifs en **-bar**.", attention: "*Das Buch liest **sich** gut* : tournure pronominale à valeur **passive**.", titre: "Les alternatives au passif", intro: "Pour alléger le style, on remplace le passif par des tournures actives ou modales.",
        tableau: { entetes: ["Forme", "Exemple", "Équivaut à"], lignes: [["man", "Man löst das Problem.", "Das Problem wird gelöst."], ["sich lassen", "Das lässt sich lösen.", "kann gelöst werden"], ["sein + zu + Inf.", "Das ist zu lösen.", "muss/kann gelöst werden"], ["adjectif -bar", "lösbar, machbar", "kann gelöst/gemacht werden"], ["sich + Inf.", "Das Buch liest sich gut.", "kann gut gelesen werden"]] },
        schemas: [{ legende: "sein + zu + infinitif = nécessité/possibilité passive.", mots: [{ m: "Das Problem", r: "sujet", c: "sujet" }, { m: "ist", r: "sein (2)", c: "verbe" }, { m: "leicht", r: "complément", c: "objet" }, { m: "zu lösen", r: "zu + infinitif (fin)", c: "fin" }] }],
        note: "« Das Buch liest sich gut » : tournure pronominale à valeur passive (peut se lire facilement)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« lösbar » équivaut à…", options: ["kann gelöst werden", "muss gelöst werden", "wurde gelöst"], correct: 0, explication: "-bar = possibilité passive." },
      { type: "qcm", consigne: "Choisissez (substitut).", question: "Das Problem ___ sich leicht lösen.", options: ["lässt", "wird", "ist", "hat"], correct: 0, explication: "sich lassen = kann … werden." },
      { type: "trou", consigne: "Complétez (sein + zu + Inf.).", texte: "Diese Aufgabe ist leicht zu {0}. (lösen)", accepte: [["lösen"]], indice: "sein + zu + infinitif" },
      { type: "association", consigne: "Associez la forme et son équivalent.", paires: [{ gauche: "man macht", droite: "es wird gemacht" }, { gauche: "lässt sich machen", droite: "kann gemacht werden" }, { gauche: "ist zu machen", droite: "muss gemacht werden" }, { gauche: "machbar", droite: "kann gemacht werden" }] },
      { type: "ordre", consigne: "Construisez (Passiversatz).", mots: ["Das", "lässt", "sich", "leicht", "erklären"], correct: "Das lässt sich leicht erklären", traduction: "Cela peut s'expliquer facilement." }
    ]
  },
  c2g14: {
    id: "c2g14", titre: "Les verbes modaux", titreDE: "Die Modalverben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Maîtriser le sens subjectif des modaux", "Combiner modal, temps et passif"],
    grammairePoints: ["müsste, dürfte, soll, will (subjectif)", "hätte … müssen"],
    grammaire: [
      { exemples: [{"de":"Sie soll sehr begabt sein.","fr":"On dit qu'elle est très douée."},{"de":"Er will nichts davon gewusst haben.","fr":"Il prétend n'en avoir rien su."}], regle: "Sens subjectif (supposition : *dürfte/müsste* ; rumeur : *sollen* ; prétention : *wollen*) + combinaisons passé/passif.", attention: "*Er **will** es nicht gewusst haben* = il **prétend** ne pas l'avoir su.", titre: "Modaux : objectif, subjectif, composé", intro: "Au C2, les modaux nuancent la supposition et se combinent au passé et au passif.",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["supposition", "dürfte / müsste", "Er dürfte recht haben."], ["rumeur", "sollen", "Sie soll sehr begabt sein."], ["prétention", "wollen", "Er will es nicht gewusst haben."], ["passé + modal", "hätte … müssen", "Ich hätte fragen müssen."], ["passif + modal", "muss … werden", "Es muss geprüft werden."]] },
        note: "« Er will es nicht gewusst haben » = il prétend ne pas l'avoir su (wollen subjectif au passé)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Sie soll sehr begabt sein » exprime…", options: ["une rumeur (on dit que)", "une obligation", "une capacité"], correct: 0, explication: "sollen subjectif = on dit que." },
      { type: "qcm", consigne: "Choisissez (passé + modal).", question: "Ich ___ vorher fragen müssen.", options: ["hätte", "habe", "würde", "bin"], correct: 0, explication: "regret/obligation passée : hätte … müssen." },
      { type: "trou", consigne: "Complétez (supposition probable).", texte: "Er {0} inzwischen angekommen sein. (probablement)", accepte: [["dürfte"]], indice: "supposition probable → dürfte + infinitif passé" },
      { type: "association", consigne: "Associez le modal et son sens subjectif.", paires: [{ gauche: "müssen", droite: "quasi certain" }, { gauche: "dürfte", droite: "probable" }, { gauche: "sollen", droite: "rumeur" }, { gauche: "wollen", droite: "prétention" }] },
      { type: "ordre", consigne: "Construisez (passé + modal).", mots: ["Ich", "hätte", "es", "wissen", "müssen"], correct: "Ich hätte es wissen müssen", traduction: "J'aurais dû le savoir." }
    ]
  },
  c2g15: {
    id: "c2g15", titre: "Adjectifs : déclinaison et comparaison", titreDE: "Adjektive: Deklination und Komparation", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Décliner sans faute", "Maîtriser comparatif et superlatif (y compris irréguliers)"],
    grammairePoints: ["faible/mixte/forte", "-er / am -sten, irréguliers"],
    grammaire: [
      { exemples: [{"de":"Das ist der schönste Tag meines Lebens.","fr":"C'est le plus beau jour de ma vie."},{"de":"Heute ist es wärmer als gestern.","fr":"Aujourd'hui, il fait plus chaud qu'hier."}], regle: "Déclinaison (faible/mixte/forte) + degrés : comparatif **-er**, superlatif **am … -sten / der … -ste**, avec irréguliers.", attention: "Irréguliers : *gut → besser → am besten* ; *viel → mehr → am meisten* ; *hoch → höher*.", titre: "Déclinaison et degrés", intro: "L'adjectif épithète se décline selon le déterminant ; les degrés se forment en -er / am -sten, avec des irréguliers.",
        tableau: { entetes: ["Aspect", "Règle", "Exemple"], lignes: [["après der", "faible (-e/-en)", "der gute Wein"], ["après ein", "mixte", "ein guter Wein"], ["sans article", "forte", "guter Wein"], ["comparatif", "-er (+ Umlaut)", "alt → älter"], ["superlatif", "am -sten / der -ste", "am ältesten / der älteste"]] },
        note: "Irréguliers : gut → besser → am besten ; viel → mehr → am meisten ; hoch → höher → am höchsten ; gern → lieber → am liebsten." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Sans article, l'adjectif prend…", options: ["la marque forte du cas", "toujours -e", "aucune terminaison"], correct: 0, explication: "guter Wein, kaltes Wasser." },
      { type: "qcm", consigne: "Choisissez (superlatif irrégulier).", question: "gut → besser → am ___", options: ["besten", "gutesten", "bessten", "meisten"], correct: 0, explication: "gut → besser → am besten." },
      { type: "trou", consigne: "Complétez (comparatif avec Umlaut).", texte: "Mein Bruder ist {0} als ich. (alt)", accepte: [["älter"]], indice: "alt → älter (Umlaut)" },
      { type: "association", consigne: "Associez positif et comparatif.", paires: [{ gauche: "gut", droite: "besser" }, { gauche: "viel", droite: "mehr" }, { gauche: "hoch", droite: "höher" }, { gauche: "gern", droite: "lieber" }] },
      { type: "traduction", consigne: "Traduisez.", source: "le plus beau jour de ma vie", accepte: ["der schönste Tag meines Lebens"], aide: "superlatif décliné : der schönste + génitif" }
    ]
  },
  c2g16: {
    id: "c2g16", titre: "Adjectifs et leurs compléments", titreDE: "Adjektive mit Ergänzungen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Employer adjectifs à datif/génitif", "Maîtriser adjectifs à préposition"],
    grammairePoints: ["+ datif (treu, ähnlich)", "+ génitif, + préposition"],
    grammaire: [
      { exemples: [{"de":"Ich bin mir des Risikos bewusst.","fr":"Je suis conscient du risque."},{"de":"Der Sohn ist dem Vater sehr ähnlich.","fr":"Le fils ressemble beaucoup au père."}], regle: "La **rection des adjectifs** : datif (*treu, ähnlich*), **génitif** (*(sich) bewusst, sicher*), préposition (*stolz auf, fähig zu*).", attention: "Adjectifs à génitif (soutenus) : *Ich bin mir des Problems **bewusst***.", titre: "La rection des adjectifs", intro: "Certains adjectifs régissent un datif, un génitif ou une préposition fixe.",
        tableau: { entetes: ["Adjectif", "Complément", "Exemple"], lignes: [["treu / ähnlich", "+ Dat.", "Er bleibt sich treu."], ["bewusst / sicher", "+ Gen.", "Ich bin mir der Lage bewusst."], ["stolz", "auf + Akk.", "stolz auf den Erfolg"], ["fähig", "zu + Dat.", "zu allem fähig"], ["reich", "an + Dat.", "reich an Erfahrung"]] },
        note: "Adjectifs à génitif (soutenus) : (sich) bewusst, sicher, würdig, verdächtig, schuldig." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« sich einer Sache bewusst sein » régit…", options: ["le génitif", "le datif", "l'accusatif"], correct: 0, explication: "bewusst + génitif : der Lage bewusst." },
      { type: "qcm", consigne: "Choisissez (datif).", question: "Der Sohn ist ___ Vater sehr ähnlich.", options: ["dem", "den", "des", "der"], correct: 0, explication: "ähnlich + datif → dem Vater." },
      { type: "trou", consigne: "Complétez (reich an).", texte: "Die Region ist reich {0} Bodenschätzen.", accepte: [["an"]], indice: "reich an + datif" },
      { type: "association", consigne: "Associez l'adjectif et son complément.", paires: [{ gauche: "treu", droite: "datif" }, { gauche: "bewusst", droite: "génitif" }, { gauche: "stolz", droite: "auf + Akk." }, { gauche: "fähig", droite: "zu + Dat." }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je suis conscient du problème.", accepte: ["Ich bin mir des Problems bewusst"], aide: "bewusst + génitif (des Problems)" }
    ]
  },
  c2g17: {
    id: "c2g17", titre: "Formation des adjectifs", titreDE: "Wortbildung: Adjektive", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Reconnaître les suffixes adjectivaux", "Former des adjectifs à partir de noms/verbes"],
    grammairePoints: ["-bar, -los, -haft, -ig", "-lich, -sam, -voll"],
    grammaire: [
      { exemples: [{"de":"Das Problem ist durchaus lösbar.","fr":"Le problème est tout à fait soluble."},{"de":"Eine sinnvolle Lösung wäre besser.","fr":"Une solution sensée serait préférable."}], regle: "Suffixes adjectivaux : **-bar** (possibilité), **-los** (sans), **-haft, -ig, -lich**, **-voll/-reich** (abondance).", attention: "Opposition utile : *-voll* (plein de) ↔ *-los* (sans) : *sinnvoll / sinnlos*.", titre: "Les suffixes adjectivaux", intro: "On forme des adjectifs par dérivation ; chaque suffixe apporte une nuance.",
        tableau: { entetes: ["Suffixe", "Sens", "Exemple"], lignes: [["-bar", "possibilité (passive)", "lösbar, essbar"], ["-los", "absence (sans)", "arbeitslos, hilflos"], ["-haft", "qui a la qualité de", "vorbildhaft, fehlerhaft"], ["-ig", "qualité", "sonnig, mutig"], ["-lich", "relation/atténuation", "freundlich, rötlich"], ["-voll / -reich", "abondance", "wertvoll, erfolgreich"]] },
        note: "Opposition utile : -voll (plein de) vs -los (sans) : sinnvoll / sinnlos, hoffnungsvoll / hoffnungslos." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le suffixe « -los » exprime…", options: ["l'absence (sans)", "la possibilité", "l'abondance"], correct: 0, explication: "arbeitslos = sans travail." },
      { type: "qcm", consigne: "Choisissez (possibilité).", question: "Ce qui peut être mangé est…", options: ["essbar", "esslos", "esshaft", "essig"], correct: 0, explication: "-bar = possibilité : essbar." },
      { type: "trou", consigne: "Complétez (Sinn + -voll).", texte: "Eine sinn{0}e Aufgabe motiviert. (suffixe d'abondance)", accepte: [["voll"]], indice: "sinnvoll (plein de sens)" },
      { type: "association", consigne: "Associez le suffixe et son sens.", paires: [{ gauche: "-bar", droite: "possibilité" }, { gauche: "-los", droite: "sans" }, { gauche: "-voll", droite: "plein de" }, { gauche: "-ig", droite: "qualité" }] },
      { type: "traduction", consigne: "Traduisez.", source: "sans espoir", accepte: ["hoffnungslos"], aide: "Hoffnung + -los" }
    ]
  },
  c2g18: {
    id: "c2g18", titre: "Le style nominal", titreDE: "Der Nominalstil", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "C2",
    objectifs: ["Transformer le verbal en nominal", "Reconnaître le style écrit soutenu"],
    grammairePoints: ["Nominalstil ↔ Verbalstil", "prépositions + nominalisation"],
    grammaire: [
      { regle: "Le **style nominal** condense une subordonnée en groupe nominal (préposition + nom, souvent génitif) — typique de l'écrit soutenu.", attention: "Excessif, il **alourdit** ; au C2, on l'emploie **à bon escient**.", exemples: [{"de":"Wegen steigender Preise sank die Nachfrage.","fr":"En raison de la hausse des prix, la demande a baissé."},{"de":"Nach Prüfung der Unterlagen entschied sie.","fr":"Après examen des documents, elle a décidé."}], titre: "Du verbe au nom (registre écrit)", intro: "Le style nominal condense une subordonnée en groupe nominal ; il est typique de l'écrit administratif et scientifique.",
        tableau: { entetes: ["Verbal (subordonnée)", "Nominal (groupe)"], lignes: [["weil die Preise steigen", "wegen steigender Preise"], ["nachdem man geprüft hat", "nach der Prüfung"], ["obwohl es Widerstand gab", "trotz des Widerstands"], ["wenn man ankommt", "bei der Ankunft"], ["um zu informieren", "zur Information"]] },
        schemas: [{ legende: "Subordonnée → préposition + groupe nominal (souvent génitif).", mots: [{ m: "wegen", r: "préposition", c: "conj" }, { m: "steigender", r: "adjectif décliné", c: "objet" }, { m: "Preise", r: "nom (génitif)", c: "sujet" }, { m: "(stieg die Inflation)", r: "principale", c: "verbe" }] }],
        note: "Le style nominal alourdit s'il est excessif ; au C2 on l'emploie à bon escient pour la densité et l'objectivité." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le style nominal est typique…", options: ["de l'écrit administratif/scientifique", "de l'oral familier", "des SMS"], correct: 0, explication: "Registre écrit soutenu, dense et objectif." },
      { type: "qcm", consigne: "Choisissez (nominalisation).", question: "weil die Preise steigen → ___ steigender Preise", options: ["wegen", "trotz", "bei", "nach"], correct: 0, explication: "weil → wegen (cause)." },
      { type: "trou", consigne: "Complétez (nachdem → nach).", texte: "{0} der Prüfung erhielt sie das Zeugnis. (nachdem → préposition)", accepte: [["Nach"]], indice: "nachdem → nach + datif" },
      { type: "association", consigne: "Associez le verbal et le nominal.", paires: [{ gauche: "weil … steigen", droite: "wegen steigender Preise" }, { gauche: "nachdem … geprüft", droite: "nach der Prüfung" }, { gauche: "obwohl … Widerstand", droite: "trotz des Widerstands" }, { gauche: "um zu informieren", droite: "zur Information" }] },
      { type: "traduction", consigne: "Traduisez (style nominal).", source: "En raison de la hausse des prix, la demande a baissé.", accepte: ["Wegen steigender Preise sank die Nachfrage", "Aufgrund steigender Preise sank die Nachfrage"], aide: "wegen/aufgrund + génitif" }
    ]
  },
  c2g19: {
    id: "c2g19", titre: "Prépositions de la langue écrite", titreDE: "Präpositionen der Schriftsprache", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "C2",
    objectifs: ["Employer les prépositions soutenues à génitif", "Choisir la nuance exacte"],
    grammairePoints: ["mittels, anhand, infolge", "angesichts, seitens, zwecks"],
    grammaire: [
      { exemples: [{"de":"Mittels eines Codes wird entschlüsselt.","fr":"On déchiffre au moyen d'un code."},{"de":"Infolge des Unfalls war die Straße gesperrt.","fr":"À la suite de l'accident, la route était fermée."}], regle: "Prépositions à génitif de l'écrit : *mittels* (au moyen de), *anhand* (à l'aide de), *infolge* (à la suite de), *angesichts, seitens, zwecks*.", attention: "Surtout à l'**écrit** ; à l'oral on dit plutôt *mit, wegen, von … aus*.", titre: "Les prépositions à génitif du registre écrit", intro: "La langue administrative et scientifique emploie des prépositions à génitif précises.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["mittels", "au moyen de", "mittels eines Codes"], ["anhand", "à l'aide de", "anhand der Daten"], ["infolge", "à la suite de", "infolge des Unfalls"], ["angesichts", "compte tenu de", "angesichts der Lage"], ["seitens", "de la part de", "seitens der Behörde"], ["zwecks", "aux fins de", "zwecks Überprüfung"]] },
        note: "Ces prépositions appartiennent surtout à l'écrit ; à l'oral, on les remplace souvent par « mit, wegen, von … aus »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« anhand » signifie…", options: ["à l'aide de", "malgré", "en faveur de"], correct: 0, explication: "anhand = à l'aide de (+ génitif)." },
      { type: "qcm", consigne: "Choisissez (génitif).", question: "Infolge ___ Unfalls war die Straße gesperrt.", options: ["des", "der", "dem", "den"], correct: 0, explication: "infolge + génitif, der Unfall → des Unfalls." },
      { type: "trou", consigne: "Complétez (au moyen de).", texte: "{0} eines Algorithmus wird sortiert. (au moyen de)", accepte: [["Mittels"]], indice: "au moyen de = mittels + génitif" },
      { type: "association", consigne: "Associez la préposition et son sens.", paires: [{ gauche: "mittels", droite: "au moyen de" }, { gauche: "anhand", droite: "à l'aide de" }, { gauche: "infolge", droite: "à la suite de" }, { gauche: "seitens", droite: "de la part de" }] },
      { type: "traduction", consigne: "Traduisez (langue écrite).", source: "Compte tenu de la situation, des mesures ont été prises.", accepte: ["Angesichts der Lage wurden Maßnahmen ergriffen", "Angesichts der Situation wurden Maßnahmen ergriffen"], aide: "angesichts + génitif + passif" }
    ]
  }
});
