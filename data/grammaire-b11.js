/* =====================================================================
   grammaire-b11.js — 14 LEÇONS DE GRAMMAIRE du module B1.1
   (window.GRAMMAIRE_B1). Suit fidèlement les 14 points de grammaire B1.1
   du programme. Schémas colorés de structure pour les points clés
   (subjonctif II, relatives, passif, position du verbe).
   ===================================================================== */
window.GRAMMAIRE_B1 = Object.assign(window.GRAMMAIRE_B1 || {}, {
  b1g01: {
    id: "b1g01", titre: "Les temps du passé", titreDE: "Perfekt, Präteritum, Plusquamperfekt", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B1",
    objectifs: ["Distinguer Perfekt, Präteritum et Plusquamperfekt", "Choisir le bon temps selon l'oral/l'écrit et la chronologie"],
    grammairePoints: ["Perfekt (oral)", "Präteritum (récit écrit)", "Plusquamperfekt (antériorité)"],
    grammaire: [
      { exemples: [{"de":"Nachdem er gegessen hatte, ging er schlafen.","fr":"Après avoir mangé, il est allé dormir."},{"de":"Als ich ankam, war der Zug schon weg.","fr":"Quand je suis arrivé, le train était déjà parti."}], regle: "Trois temps : **Perfekt** (oral), **Präteritum** (récit écrit), **Plusquamperfekt** (*hatte/war* + participe = action **antérieure** à une autre action passée).", attention: "Avec **nachdem** : subordonnée au **plus-que-parfait**, principale au prétérit/Perfekt.", titre: "Trois temps pour le passé", intro: "Perfekt = passé parlé. Präteritum = passé du récit écrit. Plusquamperfekt = action antérieure à une autre action passée.",
        tableau: { entetes: ["Temps", "Formation", "Exemple"], lignes: [["Perfekt", "haben/sein + participe II", "Ich habe gegessen."], ["Präteritum", "radical + -te / Ablaut", "Ich aß. / Ich ging."], ["Plusquamperfekt", "hatte/war + participe II", "Ich hatte gegessen."], ["sein/haben/modaux", "Präteritum à l'oral aussi", "Ich war / hatte / musste"]] },
        schemas: [{ legende: "Plusquamperfekt + nachdem : l'antériorité.", mots: [{ m: "Nachdem ich gegessen hatte,", r: "antérieur (Plusqpf.)", c: "conj" }, { m: "ging", r: "verbe (1)", c: "verbe" }, { m: "ich", r: "sujet", c: "sujet" }, { m: "los", r: "complément", c: "fin" }] }],
        note: "À l'oral on emploie le Perfekt ; le Präteritum domine à l'écrit. sein, haben et les modaux se mettent au Präteritum même à l'oral." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le Plusquamperfekt exprime…", options: ["une action antérieure à une autre action passée", "le futur", "une habitude présente"], correct: 0, explication: "C'est le « passé du passé »." },
      { type: "qcm", consigne: "Choisissez le temps oral.", question: "À l'oral, pour raconter, on préfère…", options: ["le Perfekt", "le Präteritum", "le Plusquamperfekt", "le Futur"], correct: 0, explication: "Oral → Perfekt ; écrit → Präteritum." },
      { type: "trou", consigne: "Complétez (Plusquamperfekt : hatte/war).", texte: "Als wir ankamen, {0} der Film schon angefangen.", accepte: [["hatte"]], indice: "anfangen → haben → hatte angefangen" },
      { type: "association", consigne: "Associez l'infinitif et son prétérit.", paires: [{ gauche: "gehen", droite: "ging" }, { gauche: "kommen", droite: "kam" }, { gauche: "sein", droite: "war" }, { gauche: "haben", droite: "hatte" }] },
      { type: "ordre", consigne: "Phrase au Plusquamperfekt.", mots: ["Ich", "hatte", "den", "Brief", "schon", "geschrieben"], correct: "Ich hatte den Brief schon geschrieben", traduction: "J'avais déjà écrit la lettre." }
    ]
  },
  b1g02: {
    id: "b1g02", titre: "Verbes avec prépositions", titreDE: "Verben mit Präpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Mémoriser les verbes à préposition fixe", "Appliquer le cas imposé par la préposition"],
    grammairePoints: ["warten auf, denken an", "sich freuen über/auf"],
    grammaire: [
      { exemples: [{"de":"Wir freuen uns auf die Ferien.","fr":"Nous nous réjouissons des vacances."},{"de":"Ich interessiere mich für Geschichte.","fr":"Je m'intéresse à l'histoire."}], regle: "Verbes à **préposition fixe**, à mémoriser par paires (*warten auf, denken an, sich interessieren für*) : la préposition fixe le **cas**.", attention: "Chose → reprise par *da(r)-* (*darauf*) et question par *wo(r)-* (*Worauf?*) ; personne → *préposition + wen/wem*.", titre: "Verbe + préposition + cas fixe", intro: "Beaucoup de verbes se construisent avec une préposition imposée, qui fixe le cas. À apprendre par cœur.",
        tableau: { entetes: ["Verbe", "Préposition + cas", "Exemple"], lignes: [["warten", "auf + Akk.", "Ich warte auf den Bus."], ["denken", "an + Akk.", "Ich denke an dich."], ["sich freuen", "auf + Akk. (futur)", "Ich freue mich auf den Urlaub."], ["sich freuen", "über + Akk. (présent)", "Ich freue mich über das Geschenk."], ["sprechen", "mit + Dat. / über + Akk.", "Ich spreche mit ihm über die Arbeit."], ["sich interessieren", "für + Akk.", "Ich interessiere mich für Musik."]] },
        note: "« sich freuen auf » = se réjouir d'avance (futur) ; « sich freuen über » = être content de (présent/passé)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« warten » se construit avec…", options: ["auf + accusatif", "an + datif", "für + datif"], correct: 0, explication: "warten auf + accusatif." },
      { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich interessiere mich ___ Politik.", options: ["für", "auf", "an", "über"], correct: 0, explication: "sich interessieren für + accusatif." },
      { type: "trou", consigne: "Complétez (an + accusatif).", texte: "Ich denke oft {0} meine Familie.", accepte: [["an"]], indice: "denken an + accusatif" },
      { type: "association", consigne: "Associez le verbe et sa préposition.", paires: [{ gauche: "warten", droite: "auf" }, { gauche: "denken", droite: "an" }, { gauche: "sich interessieren", droite: "für" }, { gauche: "sprechen", droite: "mit" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je me réjouis des vacances.", accepte: ["Ich freue mich auf den Urlaub", "Ich freue mich auf die Ferien"], aide: "sich freuen auf + accusatif" }
    ]
  },
  b1g03: {
    id: "b1g03", titre: "Particules d'interrogation", titreDE: "Frage- und Pronominaladverbien", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Poser une question avec wo(r)- + préposition", "Reprendre avec da(r)- + préposition"],
    grammairePoints: ["Wofür? Worauf? Woran?", "dafür, darauf, daran"],
    grammaire: [
      { regle: "Interroger sur une **chose** : **wo(r)-** + préposition (*Worauf? Woran?*). Reprendre : **da(r)-** + préposition (*darauf, daran*).", attention: "On ajoute **-r-** devant une voyelle : *wo**r**auf*, *da**r**auf*. Pour une **personne** : *Auf **wen**?*", exemples: [{"de":"Worauf wartest du? – Ich warte darauf.","fr":"Qu'attends-tu ? – Je l'attends."},{"de":"An wen denkst du?","fr":"À qui penses-tu ?"}], titre: "Wo(r)- pour les choses, da(r)- pour répondre", intro: "Pour interroger sur une CHOSE avec un verbe à préposition, on fusionne wo(+r) + préposition. Pour reprendre, on emploie da(+r) + préposition.",
        tableau: { entetes: ["Verbe + prép.", "Question (chose)", "Reprise"], lignes: [["warten auf", "Worauf wartest du?", "Ich warte darauf."], ["denken an", "Woran denkst du?", "Ich denke daran."], ["sich freuen über", "Worüber freust du dich?", "Ich freue mich darüber."], ["sprechen über", "Worüber sprecht ihr?", "Wir sprechen darüber."]] },
        note: "On ajoute « -r- » devant une voyelle : wo + (r) + auf = worauf ; da + (r) + auf = darauf. Pour une PERSONNE, on garde « préposition + qui » : Auf wen wartest du?" }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Pour interroger sur une chose avec « warten auf », on dit…", options: ["Worauf?", "Auf wen?", "Wofür?"], correct: 0, explication: "wo + r + auf = worauf (chose)." },
      { type: "qcm", consigne: "Choisissez la reprise.", question: "Denkst du an den Termin? – Ja, ich denke ___.", options: ["daran", "darauf", "darüber", "dafür"], correct: 0, explication: "denken an → daran." },
      { type: "trou", consigne: "Complétez (worüber/darüber).", texte: "{0} freust du dich? – Ich freue mich darüber.", accepte: [["Worüber"]], indice: "question sur une chose, sich freuen über" },
      { type: "association", consigne: "Associez le verbe et son adverbe pronominal.", paires: [{ gauche: "warten auf", droite: "darauf" }, { gauche: "denken an", droite: "daran" }, { gauche: "sprechen über", droite: "darüber" }, { gauche: "sich interessieren für", droite: "dafür" }] },
      { type: "qcm", consigne: "Personne ou chose ?", question: "Pour « Je pense à ma mère », on demande…", options: ["An wen denkst du?", "Woran denkst du?", "Wofür denkst du?", "Daran denkst du?"], correct: 0, explication: "Personne → préposition + wen : An wen?" }
    ]
  },
  b1g04: {
    id: "b1g04", titre: "Verbes modaux & brauchen + zu", titreDE: "Modalverben, brauchen … zu", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Nuancer avec les modaux", "Remplacer müssen (négatif) par brauchen … zu"],
    grammairePoints: ["müssen, dürfen, sollen…", "nicht brauchen + zu + Infinitiv"],
    grammaire: [
      { exemples: [{"de":"Du brauchst dir keine Sorgen zu machen.","fr":"Tu n'as pas besoin de t'inquiéter."},{"de":"Du brauchst nur anzurufen.","fr":"Tu n'as qu'à appeler."}], regle: "« **(nicht/nur) brauchen … zu** + infinitif » remplace souvent *müssen* : *Du **brauchst nicht zu** kommen* (= tu n'as pas besoin de venir).", attention: "« brauchen … zu » s'emploie surtout au **négatif** (nicht) ou **restrictif** (nur) ; sinon on garde **müssen**.", titre: "Les modaux et « (nicht) brauchen … zu »", intro: "Les modaux placent l'infinitif à la fin. « nicht/nur brauchen … zu + infinitif » remplace souvent « nicht/nur müssen ».",
        tableau: { entetes: ["Verbe", "Sens", "Exemple"], lignes: [["müssen", "devoir (obligation)", "Ich muss arbeiten."], ["dürfen", "avoir le droit", "Du darfst gehen."], ["sollen", "devoir (consigne)", "Du sollst pünktlich sein."], ["nicht brauchen + zu", "ne pas avoir besoin de", "Du brauchst nicht zu kommen."], ["nur brauchen + zu", "n'avoir qu'à", "Du brauchst nur zu fragen."]] },
        schemas: [{ legende: "brauchen (2) … zu + infinitif (fin).", mots: [{ m: "Du", r: "sujet", c: "sujet" }, { m: "brauchst", r: "brauchen (2)", c: "verbe" }, { m: "nicht", r: "négation", c: "objet" }, { m: "zu kommen", r: "zu + infinitif (fin)", c: "fin" }] }],
        note: "« brauchen … zu » s'emploie surtout au négatif (nicht) ou restrictif (nur). À l'affirmatif simple, on garde müssen." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Du brauchst nicht zu kommen » signifie…", options: ["Tu n'as pas besoin de venir", "Tu dois venir", "Tu ne peux pas venir"], correct: 0, explication: "nicht brauchen zu = pas besoin de." },
      { type: "qcm", consigne: "Choisissez.", question: "Avec « brauchen », l'infinitif est précédé de…", options: ["zu", "rien", "um", "dass"], correct: 0, explication: "brauchen … zu + infinitif." },
      { type: "trou", consigne: "Complétez (zu).", texte: "Du brauchst nur {0} fragen.", accepte: [["zu"]], indice: "nur brauchen zu + infinitif" },
      { type: "association", consigne: "Associez le modal et son sens.", paires: [{ gauche: "müssen", droite: "devoir" }, { gauche: "dürfen", droite: "avoir le droit" }, { gauche: "sollen", droite: "consigne" }, { gauche: "wollen", droite: "vouloir" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Du", "brauchst", "nicht", "zu", "warten"], correct: "Du brauchst nicht zu warten", traduction: "Tu n'as pas besoin d'attendre." }
    ]
  },
  b1g05: {
    id: "b1g05", titre: "Le subjonctif II (conditionnel)", titreDE: "Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B1",
    objectifs: ["Formuler demandes polies et souhaits", "Exprimer l'irréel au présent et au passé"],
    grammairePoints: ["würde, könnte, hätte, wäre", "hätte/wäre + participe (passé)"],
    grammaire: [
      { exemples: [{"de":"Wenn ich reich wäre, würde ich reisen.","fr":"Si j'étais riche, je voyagerais."},{"de":"An deiner Stelle würde ich es versuchen.","fr":"À ta place, j'essaierais."}], regle: "Irréel / politesse / souhait : **würde** + infinitif, ou **hätte, wäre, könnte, sollte**. Passé : **hätte/wäre + participe**.", attention: "Conseil : *An deiner Stelle **würde** ich…* / *Du **solltest**…*", titre: "Présent et passé du Konjunktiv II", intro: "Présent : würde + infinitif, ou hätte/wäre/könnte… Passé (irréel/regret) : hätte/wäre + participe II.",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["Politesse", "könnte / würde", "Könnten Sie mir helfen?"], ["Souhait", "hätte / wäre gern", "Ich hätte gern einen Kaffee."], ["Conseil", "sollte / würde", "Du solltest mehr schlafen."], ["Irréel présent", "würde + infinitif", "Ich würde gern kommen."], ["Irréel passé", "hätte/wäre + participe", "Ich hätte das nicht gesagt."]] },
        schemas: [{ legende: "Irréel passé : hätte (2) … participe (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "hätte", r: "hätte (2)", c: "verbe" }, { m: "das anders", r: "complément", c: "objet" }, { m: "gemacht", r: "participe (fin)", c: "fin" }] }],
        note: "Regret : « Ich hätte mehr lernen sollen » (j'aurais dû travailler plus). « An deiner Stelle hätte ich… » = à ta place, j'aurais…" }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le subjonctif II passé se forme avec…", options: ["hätte/wäre + participe II", "würde + infinitif", "haben + infinitif"], correct: 0, explication: "Ich hätte gesagt / Ich wäre gegangen." },
      { type: "qcm", consigne: "Demande polie.", question: "___ Sie mir bitte helfen?", options: ["Könnten", "Können", "Konnten", "Kannst"], correct: 0, explication: "Konjunktiv II poli : Könnten Sie…?" },
      { type: "trou", consigne: "Complétez (Konjunktiv II de haben).", texte: "Ich {0} gern einen Tee.", accepte: [["hätte"]], indice: "haben → hätte (souhait poli)" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "können", droite: "könnte" }, { gauche: "werden", droite: "würde" }] },
      { type: "oral", consigne: "Production orale.", prompt: "Exprimez un regret au passé (j'aurais dû / je n'aurais pas dû…).", attendus: ["hätte", "sollen"], modele: "Ich hätte mehr lernen sollen. Ich hätte das nicht sagen sollen." }
    ]
  },
  b1g06: {
    id: "b1g06", titre: "Verbes avec datif et accusatif", titreDE: "Verben mit Dativ und Akkusativ", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Reconnaître les verbes à datif", "Construire « donner qqch à qqn »"],
    grammairePoints: ["geben, schenken, zeigen", "datif (personne) + accusatif (chose)"],
    grammaire: [
      { exemples: [{"de":"Ich empfehle Ihnen dieses Buch.","fr":"Je vous recommande ce livre."},{"de":"Gib mir bitte das Salz.","fr":"Passe-moi le sel, s'il te plaît."}], regle: "Verbes à **datif (personne) + accusatif (chose)** : *geben, schenken, zeigen, empfehlen*. Datif avant accusatif (deux noms).", attention: "Si la **chose est un pronom**, elle passe **avant** : *Ich gebe **es** dem Kind*.", titre: "Datif (à qui) + accusatif (quoi)", intro: "Certains verbes prennent un datif (personne) ET un accusatif (chose). Ordre habituel : datif avant accusatif quand ce sont des noms.",
        tableau: { entetes: ["Verbe", "Construction", "Exemple"], lignes: [["geben", "jdm etwas", "Ich gebe dem Kind einen Apfel."], ["schenken", "jdm etwas", "Er schenkt ihr Blumen."], ["zeigen", "jdm etwas", "Ich zeige dir das Foto."], ["empfehlen", "jdm etwas", "Ich empfehle Ihnen das Buch."], ["erklären", "jdm etwas", "Er erklärt mir die Regel."]] },
        schemas: [{ legende: "Donner : à QUI (datif) + QUOI (accusatif).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "gebe", r: "verbe (2)", c: "verbe" }, { m: "dem Kind", r: "datif (à qui)", c: "objet" }, { m: "einen Apfel", r: "accusatif (quoi)", c: "fin" }] }],
        note: "Si la chose est un pronom, il passe avant : « Ich gebe es dem Kind. » (accusatif pronom avant datif nom)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « geben », l'ordre habituel (deux noms) est…", options: ["datif puis accusatif", "accusatif puis datif", "nominatif puis datif"], correct: 0, explication: "à qui (datif) avant quoi (accusatif)." },
      { type: "qcm", consigne: "Complétez (datif).", question: "Ich zeige ___ das Foto. (à toi)", options: ["dir", "dich", "du", "deiner"], correct: 0, explication: "zeigen + datif → dir." },
      { type: "trou", consigne: "Complétez (datif + accusatif).", texte: "Ich gebe {0} Kind {1} Apfel.", accepte: [["dem"], ["einen"]], indice: "à qui (datif) / quoi (accusatif)" },
      { type: "association", consigne: "Associez le verbe et sa construction.", paires: [{ gauche: "schenken", droite: "jdm etwas" }, { gauche: "empfehlen", droite: "jdm etwas" }, { gauche: "helfen", droite: "+ datif" }, { gauche: "sehen", droite: "+ accusatif" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je recommande le livre à mon amie.", accepte: ["Ich empfehle meiner Freundin das Buch"], aide: "empfehlen + datif (personne) + accusatif (chose)" }
    ]
  },
  b1g07: {
    id: "b1g07", titre: "La déclinaison en -n (N-Deklination)", titreDE: "Die N-Deklination", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Reconnaître les noms de la N-Deklination", "Ajouter -n / -en hors nominatif"],
    grammairePoints: ["der Junge → den Jungen", "Herr, Kollege, Student, Mensch"],
    grammaire: [
      { regle: "Un groupe de **masculins** (souvent des personnes : *Junge, Kollege, Student, Mensch, Herr*) prend **-(e)n** partout **sauf au nominatif singulier**.", attention: "Indices : noms en **-e**, professions/nationalités (*Polizist*) ; *Herr* fait *Herr**n***.", exemples: [{"de":"Ich frage den Polizisten.","fr":"Je demande au policier."},{"de":"Ich helfe dem Kollegen.","fr":"J'aide le collègue."}], titre: "Ces masculins prennent -(e)n partout sauf au nominatif singulier", intro: "Un groupe de noms masculins (souvent des personnes) ajoute -n ou -en à l'accusatif, au datif et au génitif.",
        tableau: { entetes: ["Nominatif", "Accusatif/Datif", "Sens"], lignes: [["der Junge", "den/dem Jungen", "le garçon"], ["der Kollege", "den/dem Kollegen", "le collègue"], ["der Student", "den/dem Studenten", "l'étudiant"], ["der Mensch", "den/dem Menschen", "l'être humain"], ["der Herr", "den/dem Herrn", "monsieur"], ["der Name", "den/dem Namen", "le nom"]] },
        note: "Indices : beaucoup finissent en -e (Junge, Kollege), ou sont des nationalités/professions (Student, Polizist), ou viennent du grec (Tourist, Journalist)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "La N-Deklination ajoute -n/-en…", options: ["partout sauf au nominatif singulier", "seulement au pluriel", "jamais"], correct: 0, explication: "Acc./Dat./Gén. → -(e)n." },
      { type: "qcm", consigne: "Complétez.", question: "Ich kenne den ___. (Student)", options: ["Studenten", "Student", "Studente", "Studentes"], correct: 0, explication: "accusatif → den Studenten." },
      { type: "trou", consigne: "Complétez (N-Deklination).", texte: "Ich helfe dem {0}. (Kollege)", accepte: [["Kollegen"]], indice: "datif → den/dem …en" },
      { type: "association", consigne: "Associez nominatif et accusatif.", paires: [{ gauche: "der Junge", droite: "den Jungen" }, { gauche: "der Herr", droite: "den Herrn" }, { gauche: "der Name", droite: "den Namen" }, { gauche: "der Mensch", droite: "den Menschen" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "frage", "den", "Polizisten"], correct: "Ich frage den Polizisten", traduction: "Je demande au policier." }
    ]
  },
  b1g08: {
    id: "b1g08", titre: "Indicateurs de temps", titreDE: "Temporale Präpositionen", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Situer une action dans le temps", "Choisir la préposition et le cas corrects"],
    grammairePoints: ["vor, seit, bis, ab", "über, innerhalb (+ Gen.)"],
    grammaire: [
      { exemples: [{"de":"Vor zwei Wochen war ich krank.","fr":"Il y a deux semaines, j'étais malade."},{"de":"Bis morgen muss ich fertig sein.","fr":"Je dois avoir fini d'ici demain."}], regle: "Prépositions temporelles : **vor** (il y a), **seit** (depuis), **bis** (jusqu'à), **ab** (à partir de), **innerhalb** (en l'espace de, + génitif).", attention: "*seit* + datif + **présent** = « depuis » ; à ne pas confondre avec *vor* (il y a) : *vor zwei Jahren* ≠ *seit zwei Jahren*.", titre: "Les prépositions temporelles fréquentes", intro: "Chaque préposition temporelle impose un cas. La plupart régissent le datif.",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["vor + Dat.", "il y a / avant", "vor zwei Jahren"], ["seit + Dat.", "depuis", "seit Montag"], ["bis", "jusqu'à", "bis morgen"], ["ab + Dat.", "à partir de", "ab nächster Woche"], ["über + Akk.", "pendant (durée)", "über das Wochenende"], ["innerhalb + Gen.", "en l'espace de", "innerhalb einer Stunde"]] },
        note: "« seit » + datif et un verbe au présent traduisent le français « depuis » : « Ich lerne seit zwei Jahren Deutsch »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« seit » exprime…", options: ["le point de départ d'une durée (depuis)", "la fin (jusqu'à)", "le futur lointain"], correct: 0, explication: "seit = depuis (+ datif, présent)." },
      { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich wohne ___ drei Jahren hier.", options: ["seit", "bis", "vor", "ab"], correct: 0, explication: "Durée qui continue → seit." },
      { type: "trou", consigne: "Complétez.", texte: "Wir haben {0} morgen Zeit. (jusqu'à)", accepte: [["bis"]], indice: "jusqu'à = bis" },
      { type: "association", consigne: "Associez la préposition et son sens.", paires: [{ gauche: "vor", droite: "il y a / avant" }, { gauche: "seit", droite: "depuis" }, { gauche: "bis", droite: "jusqu'à" }, { gauche: "ab", droite: "à partir de" }] },
      { type: "traduction", consigne: "Traduisez.", source: "J'apprends l'allemand depuis deux ans.", accepte: ["Ich lerne seit zwei Jahren Deutsch", "Seit zwei Jahren lerne ich Deutsch"], aide: "seit + datif, présent" }
    ]
  },
  b1g09: {
    id: "b1g09", titre: "Adverbes de temps", titreDE: "Temporaladverbien", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Enrichir un récit avec des adverbes temporels", "Ordonner les étapes (d'abord, ensuite, enfin)"],
    grammairePoints: ["damals, früher, neulich", "zuerst, dann, schließlich"],
    grammaire: [
      { exemples: [{"de":"Früher habe ich in Köln gewohnt.","fr":"Autrefois, j'habitais à Cologne."},{"de":"Zuerst arbeite ich, dann entspanne ich mich.","fr":"D'abord je travaille, ensuite je me détends."}], regle: "Adverbes pour situer/enchaîner : **damals, früher, neulich** (passé) ; **zuerst, dann, schließlich** (ordre).", attention: "Placé **en 1ʳᵉ position**, l'adverbe entraîne l'**inversion** : *Dann **gehe** ich…* (verbe en 2ᵉ).", titre: "Situer et enchaîner dans le temps", intro: "Les adverbes de temps précisent QUAND et dans quel ORDRE. Ils peuvent occuper la 1re position (le verbe reste 2e).",
        tableau: { entetes: ["Adverbe", "Sens", "Exemple"], lignes: [["damals", "à l'époque", "Damals war ich jung."], ["früher", "autrefois", "Früher rauchte er."], ["neulich", "récemment / l'autre jour", "Neulich traf ich ihn."], ["zuerst", "d'abord", "Zuerst frühstücke ich."], ["dann / danach", "ensuite", "Dann gehe ich zur Arbeit."], ["schließlich", "finalement", "Schließlich kam er doch."]] },
        schemas: [{ legende: "Adverbe en tête → verbe toujours en 2e position.", mots: [{ m: "Damals", r: "adverbe (1)", c: "objet" }, { m: "wohnte", r: "verbe (2)", c: "verbe" }, { m: "ich", r: "sujet", c: "sujet" }, { m: "in Köln", r: "complément", c: "fin" }] }],
        note: "Quand l'adverbe ouvre la phrase, on a l'inversion : sujet APRÈS le verbe (« Dann gehe ich… »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« schließlich » signifie…", options: ["finalement", "d'abord", "récemment"], correct: 0, explication: "schließlich = enfin / finalement." },
      { type: "qcm", consigne: "Choisissez.", question: "___ war ich Kind, jetzt bin ich erwachsen.", options: ["Damals", "Bald", "Gleich", "Jetzt"], correct: 0, explication: "damals = à l'époque (passé)." },
      { type: "trou", consigne: "Complétez (inversion).", texte: "Zuerst {0} ich, dann arbeite ich. (frühstücken)", accepte: [["frühstücke"]], indice: "adverbe en tête → verbe en 2e position" },
      { type: "association", consigne: "Associez l'adverbe et son sens.", paires: [{ gauche: "zuerst", droite: "d'abord" }, { gauche: "dann", droite: "ensuite" }, { gauche: "schließlich", droite: "finalement" }, { gauche: "früher", droite: "autrefois" }] },
      { type: "ordre", consigne: "Construisez la phrase (inversion).", mots: ["Dann", "gehe", "ich", "nach", "Hause"], correct: "Dann gehe ich nach Hause", traduction: "Ensuite je rentre à la maison." }
    ]
  },
  b1g10: {
    id: "b1g10", titre: "Les verbes réfléchis", titreDE: "Reflexive Verben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Conjuguer un verbe réfléchi", "Placer le pronom réfléchi (accusatif/datif)"],
    grammairePoints: ["sich freuen, sich interessieren", "mich/mir, dich/dir…"],
    grammaire: [
      { exemples: [{"de":"Ich freue mich über dein Geschenk.","fr":"Je suis content de ton cadeau."},{"de":"Wir treffen uns um acht.","fr":"On se retrouve à huit heures."}], regle: "Verbes réfléchis : pronom accordé au sujet (**mich, dich, sich, uns, euch**). En général **accusatif** ; **datif** s'il y a déjà un COD.", attention: "Datif : *Ich wasche **mir** die Hände* (le COD *die Hände* force le réfléchi au datif).", titre: "Le pronom réfléchi s'accorde avec le sujet", intro: "Les verbes réfléchis ont un pronom (mich, dich, sich…). En général à l'accusatif ; au datif quand il y a déjà un COD.",
        tableau: { entetes: ["Sujet", "Réfléchi (Akk.)", "Exemple"], lignes: [["ich", "mich", "Ich freue mich."], ["du", "dich", "Du erinnerst dich."], ["er/sie/es", "sich", "Er interessiert sich."], ["wir", "uns", "Wir treffen uns."], ["ihr", "euch", "Ihr entspannt euch."], ["sie/Sie", "sich", "Sie waschen sich."]] },
        schemas: [{ legende: "Le réfléchi suit le verbe conjugué.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "interessiere", r: "verbe (2)", c: "verbe" }, { m: "mich", r: "réfléchi (acc.)", c: "objet" }, { m: "für Sport", r: "prép. + complément", c: "fin" }] }],
        note: "Datif : « Ich wasche mir die Hände » (le COD die Hände force le réfléchi au datif : mir)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le pronom réfléchi s'accorde avec…", options: ["le sujet", "le COD", "le verbe seul"], correct: 0, explication: "ich → mich, du → dich, etc." },
      { type: "qcm", consigne: "Choisissez le réfléchi.", question: "Wir treffen ___ um acht.", options: ["uns", "sich", "euch", "mich"], correct: 0, explication: "wir → uns." },
      { type: "trou", consigne: "Complétez (réfléchi).", texte: "Ich interessiere {0} für Musik.", accepte: [["mich"]], indice: "ich → mich" },
      { type: "association", consigne: "Associez le sujet et le réfléchi.", paires: [{ gauche: "ich", droite: "mich" }, { gauche: "du", droite: "dich" }, { gauche: "wir", droite: "uns" }, { gauche: "ihr", droite: "euch" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je me réjouis.", accepte: ["Ich freue mich"], aide: "sich freuen → ich freue mich" }
    ]
  },
  b1g11: {
    id: "b1g11", titre: "Le passif", titreDE: "Das Passiv", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Former le passif au présent", "Mettre l'accent sur l'action plutôt que l'agent"],
    grammairePoints: ["werden + participe II", "von + datif (agent)"],
    grammaire: [
      { exemples: [{"de":"Das Haus wird gerade renoviert.","fr":"La maison est en cours de rénovation."},{"de":"Die Briefe werden jeden Tag verschickt.","fr":"Les lettres sont envoyées chaque jour."}], regle: "**Passif** = **werden** (2ᵉ position) + **participe II** (fin). L'agent éventuel : **von + datif**.", attention: "Le **COD** de la phrase active devient le **sujet** au passif. Au Perfekt passif, *werden → **worden***.", titre: "werden + participe II (à la fin)", intro: "Le passif met en valeur l'ACTION. On conjugue « werden » en 2e position et on place le participe II à la fin. L'agent éventuel : « von + datif ».",
        tableau: { entetes: ["Voix", "Exemple"], lignes: [["Actif", "Der Techniker repariert das Auto."], ["Passif", "Das Auto wird repariert."], ["Passif + agent", "Das Auto wird von dem Techniker repariert."], ["Pluriel", "Die Nachrichten werden gesendet."]] },
        schemas: [{ legende: "Passif présent : werden (2) + participe (fin).", mots: [{ m: "Das Auto", r: "sujet", c: "sujet" }, { m: "wird", r: "werden (2)", c: "verbe" }, { m: "gerade", r: "complément", c: "objet" }, { m: "repariert", r: "participe (fin)", c: "fin" }] }],
        note: "Le COD de la phrase active (das Auto) devient le SUJET au passif. L'agent (souvent omis) : von + datif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le passif présent se forme avec…", options: ["werden + participe II", "haben + participe II", "sein + infinitif"], correct: 0, explication: "Das Auto wird repariert." },
      { type: "qcm", consigne: "Mettez au passif.", question: "Actif : « Man sendet die Nachrichten. » → Die Nachrichten ___ gesendet.", options: ["werden", "wird", "sind", "haben"], correct: 0, explication: "Pluriel → werden + participe." },
      { type: "trou", consigne: "Complétez (werden).", texte: "Das Buch {0} oft gelesen.", accepte: [["wird"]], indice: "singulier → wird + participe" },
      { type: "association", consigne: "Associez l'infinitif et le participe II.", paires: [{ gauche: "reparieren", droite: "repariert" }, { gauche: "senden", droite: "gesendet" }, { gauche: "schreiben", droite: "geschrieben" }, { gauche: "bauen", droite: "gebaut" }] },
      { type: "ordre", consigne: "Construisez la phrase au passif.", mots: ["Das", "Auto", "wird", "repariert"], correct: "Das Auto wird repariert", traduction: "La voiture est réparée." }
    ]
  },
  b1g12: {
    id: "b1g12", titre: "Adjectifs : comparatif et superlatif", titreDE: "Komparativ und Superlativ", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Former le comparatif et le superlatif", "Employer l'adjectif comparatif devant le nom"],
    grammairePoints: ["-er / am -sten", "der/die/das + -ste"],
    grammaire: [
      { regle: "Comparatif : adjectif **+ -er** (+ **als** = que). Superlatif : **am … -sten**, ou **der/die/das … -ste** devant un nom.", attention: "Beaucoup prennent un **Umlaut** (*alt → älter*) ; irréguliers : *gut → besser → am besten*. « que » = **als**.", exemples: [{"de":"Berlin ist größer als Bonn.","fr":"Berlin est plus grand que Bonn."},{"de":"Das ist der schnellste Zug.","fr":"C'est le train le plus rapide."}], titre: "Les trois degrés", intro: "Comparatif : adjectif + -er (+ als). Superlatif : am + adjectif + -sten, ou article + adjectif + -ste devant un nom.",
        tableau: { entetes: ["Positif", "Comparatif", "Superlatif"], lignes: [["schnell", "schneller", "am schnellsten"], ["alt", "älter", "am ältesten"], ["gut", "besser", "am besten"], ["gern", "lieber", "am liebsten"], ["hoch", "höher", "am höchsten"]] },
        note: "Devant un nom, le superlatif se décline : « der schnellste Zug », « die beste Idee ». Comparatif d'égalité : so … wie." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le comparatif de supériorité se construit avec…", options: ["adjectif + -er + als", "so + adjectif + wie", "am + -sten"], correct: 0, explication: "schneller als = plus rapide que." },
      { type: "qcm", consigne: "Comparatif de « gut ».", question: "Mein Auto ist ___ als deins.", options: ["besser", "guter", "gutter", "am besten"], correct: 0, explication: "gut → besser (irrégulier)." },
      { type: "trou", consigne: "Complétez (superlatif).", texte: "Der ICE ist der {0} Zug. (schnell)", accepte: [["schnellste"]], indice: "der + -ste devant le nom" },
      { type: "association", consigne: "Associez positif et comparatif.", paires: [{ gauche: "alt", droite: "älter" }, { gauche: "gut", droite: "besser" }, { gauche: "gern", droite: "lieber" }, { gauche: "hoch", droite: "höher" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Berlin est plus grand que Munich.", accepte: ["Berlin ist größer als München"], aide: "groß → größer … als" }
    ]
  },
  b1g13: {
    id: "b1g13", titre: "Le génitif", titreDE: "Der Genitiv", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer l'appartenance avec le génitif", "Employer les prépositions à génitif"],
    grammairePoints: ["des Mannes, der Frau", "wegen, trotz, während (+ Gen.)"],
    grammaire: [
      { exemples: [{"de":"Trotz des schlechten Wetters fahren wir.","fr":"Malgré le mauvais temps, nous partons."},{"de":"Das ist die Meinung der Experten.","fr":"C'est l'avis des experts."}], regle: "Le **génitif** marque l'appartenance : masc./neutre **des …(e)s**, fém./pluriel **der**. Prépositions : *wegen, trotz, während, statt*.", attention: "À l'oral on dit souvent **von + datif** (*das Auto **von** dem Mann*).", titre: "Le cas de l'appartenance", intro: "Le génitif indique à qui appartient quelque chose. Masc./neutre : des + nom + -(e)s. Fém./pluriel : der.",
        tableau: { entetes: ["Genre", "Article", "Exemple"], lignes: [["masculin", "des …(e)s", "das Auto des Mannes"], ["neutre", "des …(e)s", "die Farbe des Hauses"], ["féminin", "der", "das Buch der Frau"], ["pluriel", "der", "die Zimmer der Kinder"], ["prépositions", "+ génitif", "wegen des Wetters, trotz der Kälte"]] },
        note: "À l'oral, on remplace souvent le génitif par « von + datif » : « das Auto von dem Mann ». Prépositions à génitif : wegen (à cause de), trotz (malgré), während (pendant)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le génitif exprime…", options: ["l'appartenance", "le lieu où l'on va", "le moment précis"], correct: 0, explication: "das Auto des Mannes = la voiture de l'homme." },
      { type: "qcm", consigne: "Choisissez (masculin génitif).", question: "Das ist das Auto ___ Mannes.", options: ["des", "der", "dem", "den"], correct: 0, explication: "masculin génitif → des + -(e)s." },
      { type: "trou", consigne: "Complétez (wegen + génitif).", texte: "Wegen {0} Wetters bleiben wir zu Hause.", accepte: [["des"]], indice: "wegen + génitif, neutre das Wetter → des" },
      { type: "association", consigne: "Associez la préposition et son sens.", paires: [{ gauche: "wegen", droite: "à cause de" }, { gauche: "trotz", droite: "malgré" }, { gauche: "während", droite: "pendant" }, { gauche: "statt", droite: "au lieu de" }] },
      { type: "traduction", consigne: "Traduisez.", source: "C'est la voiture de la femme.", accepte: ["Das ist das Auto der Frau"], aide: "féminin génitif → der Frau" }
    ]
  },
  b1g14: {
    id: "b1g14", titre: "Les propositions relatives", titreDE: "Relativsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B1",
    objectifs: ["Relier deux phrases avec un pronom relatif", "Choisir le pronom (nominatif/accusatif/datif, avec préposition)"],
    grammairePoints: ["der/die/das relatifs", "préposition + pronom relatif"],
    grammaire: [
      { regle: "Le **pronom relatif** reprend le nom en **genre/nombre**, mais prend le **cas** de sa fonction. Le **verbe va à la fin**.", attention: "Avec préposition, celle-ci **précède** le pronom : *der Kollege, **mit dem** ich arbeite*.", exemples: [{"de":"Das ist die Frau, die hier arbeitet.","fr":"C'est la femme qui travaille ici."},{"de":"Der Film, den ich sah, war gut.","fr":"Le film que j'ai vu était bon."}], titre: "Le pronom relatif = article + verbe à la fin", intro: "Le pronom relatif reprend le nom (genre/nombre) mais prend le CAS de sa fonction dans la relative. Le verbe va à la fin. Avec préposition, celle-ci précède le pronom.",
        tableau: { entetes: ["Cas", "masculin", "féminin", "neutre", "pluriel"], lignes: [["Nominatif", "der", "die", "das", "die"], ["Accusatif", "den", "die", "das", "die"], ["Datif", "dem", "der", "dem", "denen"]] },
        schemas: [{ legende: "Relative : virgule, pronom relatif, … verbe à la FIN.", mots: [{ m: "Das ist der Mann,", r: "principale", c: "objet" }, { m: "der", r: "relatif (nom.)", c: "conj" }, { m: "Deutsch", r: "complément", c: "sujet" }, { m: "spricht", r: "verbe (fin)", c: "fin" }] }],
        note: "Avec préposition : « der Kollege, mit dem ich arbeite » (mit + datif). La préposition reste collée au pronom." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Dans une relative, le verbe conjugué se place…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "Comme toute subordonnée." },
      { type: "qcm", consigne: "Choisissez le pronom.", question: "Das ist die Frau, ___ hier arbeitet.", options: ["die", "der", "das", "den"], correct: 0, explication: "die Frau, sujet → nominatif féminin = die." },
      { type: "trou", consigne: "Complétez (der/den).", texte: "Der Film, {0} ich gesehen habe, war gut.", accepte: [["den"]], indice: "COD masculin → accusatif = den" },
      { type: "association", consigne: "Associez le nom et son pronom relatif au nominatif.", paires: [{ gauche: "der Mann", droite: "der" }, { gauche: "die Frau", droite: "die" }, { gauche: "das Kind", droite: "das" }, { gauche: "die Leute", droite: "die" }] },
      { type: "ordre", consigne: "Construisez la relative (avec préposition).", mots: ["mit", "dem", "ich", "arbeite"], correct: "mit dem ich arbeite", traduction: "avec qui je travaille" }
    ]
  }
});
