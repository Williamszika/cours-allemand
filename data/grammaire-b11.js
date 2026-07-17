/* =====================================================================
   grammaire-b11.js — 14 LEÇONS DE GRAMMAIRE du module B1.1
   (window.GRAMMAIRE_B1). Suit fidèlement les 14 points de grammaire B1.1
   du programme. Schémas colorés de structure pour les points clés
   (subjonctif II, relatives, passif, position du verbe).
   ===================================================================== */
window.GRAMMAIRE_B1 = Object.assign(window.GRAMMAIRE_B1 || {}, {
  b1g01: {
    id: "b1g01",
    einstieg: {"intro":"Observe les différents passés.","exemples":[{"de":"Ich habe gestern gearbeitet.","fr":"J'ai travaillé hier. (oral)"},{"de":"Er war müde.","fr":"Il était fatigué."},{"de":"Ich hatte gegessen, bevor er kam.","fr":"J'avais mangé avant qu'il arrive."}],"question":"Comment exprimer une action antérieure à une autre dans le passé ?"},
    merke: ["*Perfekt* (haben/sein + participe) : oral et conversation.","*Präteritum* : écrit/récit ; *sein/haben/modaux* aussi à l'oral.","*Plusquamperfekt* (*hatte/war* + participe) : action *antérieure* à un autre passé."],
    achtung: [{"erreur":"Bevor er kam, habe ich gegessen.","correct":"Bevor er kam, **hatte** ich gegessen.","explication":"L'action antérieure se met au *Plusquamperfekt* (hatte gegessen)."},{"erreur":"Ich bin gestern gearbeitet.","correct":"Ich **habe** gestern gearbeitet.","explication":"*arbeiten* prend *haben*."}],
    kontrast: {"titre":"Les temps du passé : allemand vs français","similitudes":["Plusieurs temps du passé (imparfait/PC/plus-que-parfait)."],"differences":["Le choix Perfekt/Präteritum dépend du *registre* (oral/écrit).","Le Plusquamperfekt = plus-que-parfait (antériorité).","Un seul Präteritum couvre imparfait et passé simple."]}, titre: "Les temps du passé", titreDE: "Perfekt, Präteritum, Plusquamperfekt", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B1",
    objectifs: ["Distinguer Perfekt, Präteritum et Plusquamperfekt", "Choisir le bon temps selon l'oral/l'écrit et la chronologie"],
    grammairePoints: ["Perfekt (oral)", "Präteritum (récit écrit)", "Plusquamperfekt (antériorité)"],
    exemplesPlus: [{"de":"Ich habe gestern einen guten Film gesehen.","fr":"*Perfekt* (haben/sein + Partizip): die Vergangenheit zum Sprechen."},{"de":"Wir sind am Wochenende nach Hamburg gefahren.","fr":"*Perfekt* mit *sein*, weil es eine Bewegung ist."},{"de":"Früher wohnte meine Familie in einem kleinen Dorf.","fr":"*Präteritum*: oft beim Schreiben und Erzählen."},{"de":"Nachdem ich gegessen hatte, ging ich spazieren.","fr":"*Plusquamperfekt* (hatte + Partizip): das passiert davor."},{"de":"Als der Film zu Ende war, gingen alle nach Hause.","fr":"*als* + Präteritum für eine Situation in der Vergangenheit."}],
    coursDE: [
      "Im Deutschen gibt es **drei Zeitformen für die Vergangenheit**: das **Perfekt**, das **Präteritum** und das **Plusquamperfekt**. Jede Form hat eine eigene Funktion. Wenn du sie verstehst, kannst du klar über die Vergangenheit sprechen und schreiben.",
      "Das **Perfekt** benutzt du, wenn du **sprichst** oder eine Nachricht schreibst. Du bildest es mit **haben** oder **sein** + Partizip II. Beispiel: « *Ich habe einen Film gesehen* » oder « *Ich bin nach Berlin gefahren* ». Das ist die wichtigste Vergangenheitsform für das tägliche Leben.",
      "Das **Präteritum** benutzt du vor allem beim **Schreiben**, zum Beispiel in Büchern, Geschichten und Berichten: « *Er ging nach Hause und öffnete die Tür* ». Aber Achtung: Die Verben **sein, haben** und die **Modalverben** benutzt man auch beim Sprechen im Präteritum: « *Ich war müde* », « *Ich hatte keine Zeit* », « *Ich konnte nicht kommen* ».",
      "Das **Plusquamperfekt** zeigt, dass eine Handlung **vor** einer anderen Handlung in der Vergangenheit passiert ist. Du bildest es mit **hatte** oder **war** + Partizip II. Beispiel: « *Ich hatte schon gegessen, als du kamst* » (zuerst essen, dann kommen). Oft benutzt man dazu das Wort **nachdem**.",
      "Merke dir also: **Perfekt** zum Sprechen, **Präteritum** zum Schreiben, **Plusquamperfekt** für die Zeit *vor* der Vergangenheit. Mit diesen drei Formen kannst du jede Geschichte richtig erzählen."
    ],
    grammaire: [
      { exemples: [{"de":"Nachdem er gegessen hatte, ging er schlafen.","fr":"Après avoir mangé, il est allé dormir."},{"de":"Als ich ankam, war der Zug schon weg.","fr":"Quand je suis arrivé, le train était déjà parti."}], regle: "Trois temps : **Perfekt** (oral), **Präteritum** (récit écrit), **Plusquamperfekt** (*hatte/war* + participe = action **antérieure** à une autre action passée).", attention: "Avec **nachdem** : subordonnée au **plus-que-parfait**, principale au prétérit/Perfekt.", titre: "Trois temps pour le passé", intro: "Perfekt = passé parlé. Präteritum = passé du récit écrit. Plusquamperfekt = action antérieure à une autre action passée.",
        tableau: { entetes: ["Temps", "Formation", "Exemple"], lignes: [["Perfekt", "haben/sein + participe II", "Ich habe gegessen."], ["Präteritum", "radical + -te / Ablaut", "Ich aß. / Ich ging."], ["Plusquamperfekt", "hatte/war + participe II", "Ich hatte gegessen."], ["sein/haben/modaux", "Präteritum à l'oral aussi", "Ich war / hatte / musste"]] },
        schemas: [{ legende: "Plusquamperfekt + nachdem : l'antériorité.", mots: [{ m: "Nachdem ich gegessen hatte,", r: "antérieur (Plusqpf.)", c: "conj" }, { m: "ging", r: "verbe (1)", c: "verbe" }, { m: "ich", r: "sujet", c: "sujet" }, { m: "los", r: "complément", c: "fin" }] }],
        note: "À l'oral on emploie le Perfekt ; le Präteritum domine à l'écrit. sein, haben et les modaux se mettent au Präteritum même à l'oral." },
      { titre: "Le prétérit : faible ou fort ?",
        regle: "**Verbes faibles** : radical + **-te** + terminaison (machen → mach**te**). **Verbes forts** : changement de voyelle (**Ablaut**), sans -te (gehen → **ging**, fahren → **fuhr**).",
        intro: "Terminaisons du prétérit : *–, -st, –, -en, -t, -en* — à *ich* et *er/sie/es*, **pas** de terminaison.",
        tableau: { entetes: ["Pronom", "faible : machen", "fort : gehen", "fort : fahren"], lignes: [["ich", "machte", "ging", "fuhr"], ["du", "machtest", "gingst", "fuhrst"], ["er/sie/es", "machte", "ging", "fuhr"], ["wir", "machten", "gingen", "fuhren"], ["ihr", "machtet", "gingt", "fuhrt"], ["sie/Sie", "machten", "gingen", "fuhren"]] },
        note: "À *ich* et *er/sie/es*, le prétérit n'a **pas** de terminaison (ich ging, er ging)." },
      { titre: "Verbes forts fréquents (à mémoriser)",
        regle: "Les verbes forts changent de voyelle. Apprends-les par la **triade** infinitif – prétérit – participe II.",
        intro: "Voici les plus courants — autant les automatiser tôt.",
        tableau: { entetes: ["Infinitif", "Prétérit", "Participe II"], lignes: [["gehen (aller)", "ging", "gegangen"], ["kommen (venir)", "kam", "gekommen"], ["fahren (rouler)", "fuhr", "gefahren"], ["sehen (voir)", "sah", "gesehen"], ["essen (manger)", "aß", "gegessen"], ["nehmen (prendre)", "nahm", "genommen"], ["sprechen (parler)", "sprach", "gesprochen"], ["schreiben (écrire)", "schrieb", "geschrieben"]] },
        note: "Astuce : apprends toujours les **3 formes** ensemble (gehen – ging – gegangen)." },
      { titre: "Perfekt : haben ou sein ?",
        regle: "La plupart des verbes prennent **haben**. On emploie **sein** avec les verbes de **déplacement** (gehen, fahren, kommen) et de **changement d'état** (aufstehen, einschlafen, sterben, werden) + *bleiben/sein*.",
        intro: "*Ich **habe** gegessen* mais *Ich **bin** gegangen*.",
        tableau: { entetes: ["Auxiliaire", "Type de verbe", "Exemple"], lignes: [["haben", "action / transitif (majorité)", "Ich habe gearbeitet."], ["sein", "déplacement (gehen, fahren…)", "Ich bin gefahren."], ["sein", "changement d'état", "Er ist eingeschlafen."], ["sein", "bleiben, sein, werden", "Ich bin geblieben."]] },
        note: "Test : va-t-on d'un point A à B, ou change-t-on d'état ? → **sein**. Sinon → **haben**." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le Plusquamperfekt exprime…", options: ["une action antérieure à une autre action passée", "le futur", "une habitude présente"], correct: 0, explication: "C'est le « passé du passé »." },
      { type: "qcm", consigne: "Choisissez le temps oral.", question: "À l'oral, pour raconter, on préfère…", options: ["le Perfekt", "le Präteritum", "le Plusquamperfekt", "le Futur"], correct: 0, explication: "Oral → Perfekt ; écrit → Präteritum." },
      { type: "trou", consigne: "Complétez (Plusquamperfekt : hatte/war).", texte: "Als wir ankamen, {0} der Film schon angefangen.", accepte: [["hatte"]], indice: "anfangen → haben → hatte angefangen" },
      { type: "association", consigne: "Associez l'infinitif et son prétérit.", paires: [{ gauche: "gehen", droite: "ging" }, { gauche: "kommen", droite: "kam" }, { gauche: "sein", droite: "war" }, { gauche: "haben", droite: "hatte" }] },
      { type: "ordre", consigne: "Phrase au Plusquamperfekt.", mots: ["Ich", "hatte", "den", "Brief", "schon", "geschrieben"], correct: "Ich hatte den Brief schon geschrieben", traduction: "J'avais déjà écrit la lettre." },
      { type: "qcm", consigne: "Prétérit fort.", question: "Prétérit de « gehen » (er) :", options: ["ging", "gehte", "gang", "gegangen"], correct: 0, explication: "gehen est fort : er ging (Ablaut, sans -te)." },
      { type: "trou", consigne: "Prétérit faible.", texte: "Als Kind {0} ich oft im Park. (spielen)", accepte: [["spielte"]], indice: "verbe faible → radical + -te" },
      { type: "qcm", consigne: "Perfekt : haben ou sein ?", question: "Ich ___ gestern nach Hause gefahren.", options: ["bin", "habe", "war", "hatte"], correct: 0, explication: "fahren (déplacement) → sein : ich bin gefahren." },
      { type: "trou", consigne: "Perfekt (auxiliaire).", texte: "Gestern {0} wir einen Film gesehen.", accepte: [["haben"]], indice: "sehen → haben : wir haben gesehen" }
    ]
  },
  b1g02: {
    id: "b1g02",
    einstieg: {"intro":"Observe comment on reprend ou questionne un complément prépositionnel.","exemples":[{"de":"Ich interessiere mich für Musik.","fr":"Je m'intéresse à la musique."},{"de":"Worauf wartest du?","fr":"Qu'attends-tu ?"},{"de":"Ich denke daran.","fr":"J'y pense."}],"question":"Comment poser une question ou reprendre un complément de chose ?"},
    merke: ["Verbe + préposition fixe (*sich interessieren für*, *warten auf*).","Chose : *wo(r)+prép* en question (*worauf?*), *da(r)+prép* en reprise (*daran*).","Personne : préposition + pronom (*auf wen? - auf dich*)."],
    achtung: [{"erreur":"Für was interessierst du dich?","correct":"**Wofür** interessierst du dich?","explication":"Pour une chose, on fusionne : *wofür*, pas *für was*."},{"erreur":"Ich denke an es.","correct":"Ich denke **daran**.","explication":"Pour une chose : *daran*, pas *an es*."}],
    kontrast: {"titre":"Verbes à préposition : allemand vs français","similitudes":["« penser à », « s'intéresser à » sont fixes dans les deux."],"differences":["Les formes *wo(r)-/da(r)-* (wofür, dafür) n'ont pas d'équivalent simple.","La préposition allemande diffère souvent de la française.","On distingue chose (da-/wo-) et personne (prép + pronom)."]}, titre: "Verbes avec prépositions", titreDE: "Verben mit Präpositionen", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Mémoriser les verbes à préposition fixe", "Appliquer le cas imposé par la préposition"],
    grammairePoints: ["warten auf, denken an", "sich freuen über/auf"],
    exemplesPlus: [{"de":"Ich warte schon lange auf den Bus.","fr":"*warten auf* + Akkusativ. Die Präposition gehört fest zum Verb."},{"de":"Denkst du oft an deine Familie?","fr":"*denken an* + Akkusativ."},{"de":"Wir freuen uns sehr auf die Ferien.","fr":"*sich freuen auf*: man freut sich auf etwas in der Zukunft."},{"de":"Sie freut sich über das schöne Geschenk.","fr":"*sich freuen über*: über etwas jetzt oder in der Vergangenheit."},{"de":"Ich interessiere mich für moderne Kunst.","fr":"*sich interessieren für* + Akkusativ."}],
    coursDE: [
      "Viele deutsche Verben haben eine **feste Präposition**. Das Verb und die Präposition gehören zusammen, wie ein Paar. Oft ist die Präposition **nicht logisch**, darum musst du das Verb immer **zusammen mit seiner Präposition** lernen.",
      "Wichtige Beispiele: **warten auf** (« *Ich warte auf den Bus* »), **denken an** (« *Ich denke an dich* »), **sich freuen über** (etwas Vergangenes) und **sich freuen auf** (etwas in der Zukunft). Lerne immer das ganze Paar: *warten + auf*, *denken + an*.",
      "Jede Präposition hat einen **Kasus**, den du auch lernen musst. *warten auf* + **Akkusativ**: « *auf den Bus* ». *teilnehmen an* + **Dativ**: « *an dem Kurs* ». Schreibe also immer auf: Verb + Präposition + Kasus.",
      "Sehr häufige Verben mit Präposition sind: **sich interessieren für**, **Angst haben vor** (+ Dativ), **sprechen über/mit**, **sich erinnern an**, **bitten um**, **gehören zu**. Mache dir eine kleine Liste und wiederhole sie oft. So sprichst du bald natürlich und korrekt."
    ],
    grammaire: [
      { exemples: [{"de":"Wir freuen uns auf die Ferien.","fr":"Nous nous réjouissons des vacances."},{"de":"Ich interessiere mich für Geschichte.","fr":"Je m'intéresse à l'histoire."}], regle: "Verbes à **préposition fixe**, à mémoriser par paires (*warten auf, denken an, sich interessieren für*) : la préposition fixe le **cas**.", attention: "Chose → reprise par *da(r)-* (*darauf*) et question par *wo(r)-* (*Worauf?*) ; personne → *préposition + wen/wem*.", titre: "Verbe + préposition + cas fixe", intro: "Beaucoup de verbes se construisent avec une préposition imposée, qui fixe le cas. À apprendre par cœur.",
        tableau: { entetes: ["Verbe", "Préposition + cas", "Exemple"], lignes: [["warten", "auf + Akk.", "Ich warte auf den Bus."], ["denken", "an + Akk.", "Ich denke an dich."], ["sich freuen", "auf + Akk. (futur)", "Ich freue mich auf den Urlaub."], ["sich freuen", "über + Akk. (présent)", "Ich freue mich über das Geschenk."], ["sprechen", "mit + Dat. / über + Akk.", "Ich spreche mit ihm über die Arbeit."], ["sich interessieren", "für + Akk.", "Ich interessiere mich für Musik."]] },
        note: "« sich freuen auf » = se réjouir d'avance (futur) ; « sich freuen über » = être content de (présent/passé)." },
      { titre: "Chose vs personne : da(r)- et wo(r)-",
        regle: "Pour une **chose** : reprise par **da(r)-** + préposition (*dafür, daran, darauf*) et question par **wo(r)-** + préposition (*wofür, woran, worauf*). Pour une **personne** : préposition + pronom (*für ihn*, *an wen?*).",
        intro: "On insère un **-r-** si la préposition commence par une voyelle : *da**r**auf*, *wo**r**an*.",
        tableau: { entetes: ["Prép.", "Chose (reprise)", "Chose (question)", "Personne"], lignes: [["für", "dafür", "wofür?", "für ihn / für wen?"], ["an", "daran", "woran?", "an ihn / an wen?"], ["auf", "darauf", "worauf?", "auf ihn / auf wen?"], ["über", "darüber", "worüber?", "über ihn / über wen?"], ["mit", "damit", "womit?", "mit ihm / mit wem?"]] },
        note: "Chose → **da-/wo-** (un seul mot). Personne → **préposition + pronom** séparé." },
      { titre: "Verbes à préposition — la liste à connaître",
        regle: "À apprendre par **paire** (verbe + préposition + cas). Voici les plus fréquents.",
        intro: "Astuce : mémorise-les dans une courte phrase, jamais isolés.",
        tableau: { entetes: ["Verbe", "Prép. + cas", "Sens"], lignes: [["sich interessieren", "für + Akk.", "s'intéresser à"], ["warten", "auf + Akk.", "attendre"], ["denken", "an + Akk.", "penser à"], ["sich erinnern", "an + Akk.", "se souvenir de"], ["Angst haben", "vor + Dat.", "avoir peur de"], ["bitten", "um + Akk.", "demander (qqch)"], ["teilnehmen", "an + Dat.", "participer à"], ["gehören", "zu + Dat.", "faire partie de"]] },
        note: "Le cas est **imposé** par la préposition : für/um/auf/an → accusatif ; vor/zu → datif." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« warten » se construit avec…", options: ["auf + accusatif", "an + datif", "für + datif"], correct: 0, explication: "warten auf + accusatif." },
      { type: "qcm", consigne: "Choisissez la préposition.", question: "Ich interessiere mich ___ Politik.", options: ["für", "auf", "an", "über"], correct: 0, explication: "sich interessieren für + accusatif." },
      { type: "trou", consigne: "Complétez (an + accusatif).", texte: "Ich denke oft {0} meine Familie.", accepte: [["an"]], indice: "denken an + accusatif" },
      { type: "association", consigne: "Associez le verbe et sa préposition.", paires: [{ gauche: "warten", droite: "auf" }, { gauche: "denken", droite: "an" }, { gauche: "sich interessieren", droite: "für" }, { gauche: "sprechen", droite: "mit" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je me réjouis des vacances.", accepte: ["Ich freue mich auf den Urlaub", "Ich freue mich auf die Ferien"], aide: "sich freuen auf + accusatif" },
      { type: "qcm", consigne: "Reprise d'une chose.", question: "— Denkst du an die Prüfung? — Ja, ich denke oft ___.", options: ["daran", "an sie", "darauf", "an es"], correct: 0, explication: "Chose → daran (da + r + an)." },
      { type: "qcm", consigne: "Question sur une chose.", question: "___ wartest du? — Auf den Bus.", options: ["Worauf", "Auf was", "Worüber", "Wofür"], correct: 0, explication: "warten auf + chose → Worauf ? (wo + r + auf)." },
      { type: "trou", consigne: "Reprise (personne).", texte: "Ich denke oft an meinen Bruder. → Ich denke oft an {0}. (lui)", accepte: [["ihn"]], indice: "personne → préposition + pronom (an ihn)" }
    ]
  },
  b1g03: {
    id: "b1g03",
    einstieg: {"intro":"Observe la place du verbe dans une question indirecte.","exemples":[{"de":"Wann kommst du?","fr":"Quand viens-tu ?"},{"de":"Weißt du, wann er kommt?","fr":"Sais-tu quand il vient ?"},{"de":"Ich frage, ob es regnet.","fr":"Je demande s'il pleut."}],"question":"Où va le verbe dans une question indirecte ?"},
    merke: ["Question directe : verbe en *position 2* (W-Frage) ou *position 1* (oui/non).","Question *indirecte* = subordonnée → verbe à la *fin*.","Oui/non indirecte : introduite par *ob* (si)."],
    achtung: [{"erreur":"Weißt du, wann kommt er?","correct":"Weißt du, wann er **kommt**?","explication":"Question indirecte = subordonnée : verbe à la fin."},{"erreur":"Ich frage, wenn es regnet.","correct":"Ich frage, **ob** es regnet.","explication":"« si » (oui/non) = *ob*, pas *wenn*."}],
    kontrast: {"titre":"Les questions : allemand vs français","similitudes":["Mots interrogatifs équivalents (wann/quand, warum/pourquoi)."],"differences":["La question indirecte rejette le verbe à la *fin*.","*ob* (si interrogatif) ≠ *wenn* (si conditionnel).","Pas de tournure « est-ce que »."]}, titre: "Particules d'interrogation", titreDE: "Frage- und Pronominaladverbien", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Poser une question avec wo(r)- + préposition", "Reprendre avec da(r)- + préposition"],
    grammairePoints: ["Wofür? Worauf? Woran?", "dafür, darauf, daran"],
    exemplesPlus: [{"de":"Worauf wartest du? — Auf den Bus.","fr":"Frage nach einer Sache: *wo(r)- + Präposition*."},{"de":"Worüber sprecht ihr? — Über den Film.","fr":"*worüber* fragt nach dem Thema."},{"de":"Ich interessiere mich dafür.","fr":"*da(r)- + Präposition* ersetzt eine Sache."},{"de":"Wofür brauchst du das Geld?","fr":"*wofür* = für welche Sache?"},{"de":"Auf wen wartest du? — Auf meinen Bruder.","fr":"Bei Personen: *Präposition + wen/wem*."}],
    coursDE: [
      "Wenn ein Verb eine feste Präposition hat, brauchst du besondere Wörter für Fragen und Antworten. Bei **Sachen** (nicht Personen) benutzt du keine normale Präposition + Pronomen, sondern ein zusammengesetztes Wort.",
      "Für **Fragen** über eine Sache nimmst du **wo + Präposition**: **wofür?**, **worauf?**, **woran?**, **worüber?**. Wenn die Präposition mit einem Vokal beginnt, kommt ein **-r-** dazwischen: *wo**r**auf*, *wo**r**an*. Beispiel: « *Worauf wartest du?* » – « *Auf den Bus.* »",
      "Für **Antworten** über eine Sache nimmst du **da + Präposition**: **dafür**, **darauf**, **daran**, **darüber**. Beispiel: « *Ich warte darauf* » (auf den Bus). Auch hier kommt das **-r-** vor einem Vokal: *da**r**auf*, *da**r**an*.",
      "Aber Achtung: Bei **Personen** benutzt du diese Wörter **nicht**! Dann bleibst du bei **Präposition + Pronomen**: « *Ich warte auf **ihn*** » (eine Person), aber « *Ich warte **darauf*** » (eine Sache). Diese Regel ist sehr wichtig: *wo(r)-/da(r)-* nur für Sachen."
    ],
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
    id: "b1g04",
    einstieg: {"intro":"Compare ces deux négations de l'obligation.","exemples":[{"de":"Du musst nicht kommen.","fr":"Tu n'es pas obligé de venir."},{"de":"Du darfst nicht rauchen.","fr":"Tu n'as pas le droit de fumer."},{"de":"Ich kann schwimmen.","fr":"Je sais nager."}],"question":"Quelle différence entre *nicht müssen* et *nicht dürfen* ?"},
    merke: ["Modaux : *können, müssen, dürfen, sollen, wollen, mögen* + infinitif en fin.","*nicht müssen* = pas obligé ≠ *nicht dürfen* = interdit !","*brauchen + zu* (négatif) = ne pas avoir besoin de (*du brauchst nicht zu warten*)."],
    achtung: [{"erreur":"Du darfst nicht kommen. (= pas obligé)","correct":"Du **musst** nicht kommen.","explication":"*nicht müssen* = pas obligé ; *nicht dürfen* = interdit."},{"erreur":"Du brauchst nicht kommen.","correct":"Du brauchst nicht **zu** kommen.","explication":"*brauchen* se construit avec *zu* + infinitif."}],
    kontrast: {"titre":"Verbes modaux : allemand vs français","similitudes":["Pouvoir/devoir/vouloir ont des équivalents."],"differences":["*müssen* nié = « pas obligé », pas « ne pas devoir » - piège majeur.","*dürfen* = avoir la permission (≠ können = pouvoir/savoir).","L'infinitif va en *fin de phrase*."]}, titre: "Verbes modaux & brauchen + zu", titreDE: "Modalverben, brauchen … zu", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Nuancer avec les modaux", "Remplacer müssen (négatif) par brauchen … zu"],
    grammairePoints: ["müssen, dürfen, sollen…", "nicht brauchen + zu + Infinitiv"],
    exemplesPlus: [{"de":"Ich muss heute noch viel arbeiten.","fr":"*müssen*: etwas ist nötig."},{"de":"Du darfst hier nicht rauchen.","fr":"*dürfen*: Erlaubnis oder Verbot."},{"de":"Wir sollen pünktlich sein.","fr":"*sollen*: ein Auftrag von einer anderen Person."},{"de":"Du brauchst nicht zu kommen, wenn du müde bist.","fr":"*nicht brauchen + zu*: es ist nicht nötig."},{"de":"Können Sie mir bitte helfen?","fr":"*können*: Möglichkeit oder höfliche Frage."}],
    coursDE: [
      "Die **Modalverben** kennst du schon: *können, müssen, wollen, sollen, dürfen, mögen*. Sie stehen auf **Position 2**, und das zweite Verb steht im **Infinitiv am Satzende**: « *Ich muss heute arbeiten* ». Auf B1-Niveau lernst du die Bedeutungen genauer.",
      "Wichtige Unterschiede: **müssen** = eine Notwendigkeit (« *Ich muss gehen* »); **sollen** = ein Rat oder ein Auftrag von einer anderen Person (« *Du sollst mehr schlafen* »); **dürfen** = eine Erlaubnis (« *Hier darf man rauchen* »); **können** = eine Fähigkeit oder Möglichkeit.",
      "Sehr wichtig ist die **Verneinung**. **nicht müssen** bedeutet: es ist **nicht nötig**. **nicht dürfen** bedeutet aber: es ist **verboten**! Vergleiche: « *Du musst nicht kommen* » (nicht nötig) und « *Du darfst nicht kommen* » (verboten).",
      "Statt « *nicht müssen* » sagt man oft **nicht brauchen + zu + Infinitiv**: « *Du brauchst nicht zu kommen* » (= du musst nicht kommen). Merke dir: nach **brauchen** in der Verneinung steht **zu** vor dem Infinitiv. Das ist typisch B1 und klingt natürlich."
    ],
    grammaire: [
      { exemples: [{"de":"Du brauchst dir keine Sorgen zu machen.","fr":"Tu n'as pas besoin de t'inquiéter."},{"de":"Du brauchst nur anzurufen.","fr":"Tu n'as qu'à appeler."}], regle: "« **(nicht/nur) brauchen … zu** + infinitif » remplace souvent *müssen* : *Du **brauchst nicht zu** kommen* (= tu n'as pas besoin de venir).", attention: "« brauchen … zu » s'emploie surtout au **négatif** (nicht) ou **restrictif** (nur) ; sinon on garde **müssen**.", titre: "Les modaux et « (nicht) brauchen … zu »", intro: "Les modaux placent l'infinitif à la fin. « nicht/nur brauchen … zu + infinitif » remplace souvent « nicht/nur müssen ».",
        tableau: { entetes: ["Verbe", "Sens", "Exemple"], lignes: [["müssen", "devoir (obligation)", "Ich muss arbeiten."], ["dürfen", "avoir le droit", "Du darfst gehen."], ["sollen", "devoir (consigne)", "Du sollst pünktlich sein."], ["nicht brauchen + zu", "ne pas avoir besoin de", "Du brauchst nicht zu kommen."], ["nur brauchen + zu", "n'avoir qu'à", "Du brauchst nur zu fragen."]] },
        schemas: [{ legende: "brauchen (2) … zu + infinitif (fin).", mots: [{ m: "Du", r: "sujet", c: "sujet" }, { m: "brauchst", r: "brauchen (2)", c: "verbe" }, { m: "nicht", r: "négation", c: "objet" }, { m: "zu kommen", r: "zu + infinitif (fin)", c: "fin" }] }],
        note: "« brauchen … zu » s'emploie surtout au négatif (nicht) ou restrictif (nur). À l'affirmatif simple, on garde müssen." },
      { titre: "Conjugaison des modaux au présent",
        regle: "Les modaux sont **irréguliers** : à *ich* et *er/sie/es*, **pas de terminaison**, et souvent un **changement de voyelle** au singulier.",
        intro: "Retiens surtout : *ich kann, ich muss, ich will, ich darf* (sans -e).",
        tableau: { entetes: ["Pronom", "können", "müssen", "dürfen", "wollen"], lignes: [["ich", "kann", "muss", "darf", "will"], ["du", "kannst", "musst", "darfst", "willst"], ["er/sie/es", "kann", "muss", "darf", "will"], ["wir", "können", "müssen", "dürfen", "wollen"], ["ihr", "könnt", "müsst", "dürft", "wollt"], ["sie/Sie", "können", "müssen", "dürfen", "wollen"]] },
        note: "*sollen* ne change pas de voyelle (ich soll). *möchten* (vouloir poli) : ich möchte, du möchtest." },
      { titre: "Négation : nicht müssen ≠ nicht dürfen",
        regle: "**nicht müssen** = ce n'est **pas nécessaire** (pas obligé). **nicht dürfen** = c'est **interdit**. C'est LE piège des modaux.",
        intro: "*Du **musst** nicht kommen* (libre à toi) vs *Du **darfst** nicht kommen* (interdit).",
        tableau: { entetes: ["Forme", "Sens", "Exemple"], lignes: [["nicht müssen", "pas obligé", "Du musst nicht bezahlen."], ["nicht dürfen", "interdit", "Du darfst nicht parken."], ["nicht brauchen zu", "pas besoin de", "Du brauchst nichts zu kaufen."]] },
        note: "Le français « ne pas devoir » = **nicht müssen** (pas obligé), jamais *nicht dürfen* — attention au contresens." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "« Du brauchst nicht zu kommen » signifie…", options: ["Tu n'as pas besoin de venir", "Tu dois venir", "Tu ne peux pas venir"], correct: 0, explication: "nicht brauchen zu = pas besoin de." },
      { type: "qcm", consigne: "Choisissez.", question: "Avec « brauchen », l'infinitif est précédé de…", options: ["zu", "rien", "um", "dass"], correct: 0, explication: "brauchen … zu + infinitif." },
      { type: "trou", consigne: "Complétez (zu).", texte: "Du brauchst nur {0} fragen.", accepte: [["zu"]], indice: "nur brauchen zu + infinitif" },
      { type: "association", consigne: "Associez le modal et son sens.", paires: [{ gauche: "müssen", droite: "devoir" }, { gauche: "dürfen", droite: "avoir le droit" }, { gauche: "sollen", droite: "consigne" }, { gauche: "wollen", droite: "vouloir" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Du", "brauchst", "nicht", "zu", "warten"], correct: "Du brauchst nicht zu warten", traduction: "Tu n'as pas besoin d'attendre." },
      { type: "qcm", consigne: "Conjugaison (dürfen).", question: "___ ich hier parken?", options: ["Darf", "Darfe", "Dürfe", "Darfst"], correct: 0, explication: "dürfen : ich darf (sans -e, voyelle change)." },
      { type: "qcm", consigne: "Sens de la négation.", question: "« Du musst nicht kommen » veut dire…", options: ["tu n'es pas obligé", "c'est interdit", "tu ne peux pas"], correct: 0, explication: "nicht müssen = pas obligé." },
      { type: "trou", consigne: "Interdiction (dürfen).", texte: "Hier {0} man nicht rauchen.", accepte: [["darf"]], indice: "interdit → man darf nicht" }
    ]
  },
  b1g05: {
    id: "b1g05",
    einstieg: {"intro":"Observe comment on exprime l'irréel et le souhait.","exemples":[{"de":"An deiner Stelle würde ich bleiben.","fr":"À ta place, je resterais."},{"de":"Wenn ich reich wäre, würde ich reisen.","fr":"Si j'étais riche, je voyagerais."},{"de":"Ich hätte gern Hilfe.","fr":"J'aimerais de l'aide."}],"question":"Comment exprimer une hypothèse irréelle et un conseil ?"},
    merke: ["Konjunktiv II = irréel, souhait, conseil poli.","Forme usuelle : *würde + infinitif* ; courants : *wäre, hätte, könnte, müsste*.","Conseil : *an deiner Stelle würde ich…* / *Du solltest…*"],
    achtung: [{"erreur":"Wenn ich reich bin, würde ich reisen.","correct":"Wenn ich reich **wäre**, würde ich reisen.","explication":"Irréel : Konjunktiv II dans le *wenn* (wäre)."},{"erreur":"Ich würde sein glücklich.","correct":"Ich **wäre** glücklich.","explication":"Avec *sein*, on utilise *wäre*, pas *würde sein*."}],
    kontrast: {"titre":"Le conditionnel (irréel) : allemand vs français","similitudes":["Hypothèse irréelle (« si j'étais… »)."],"differences":["*würde + infinitif* ≈ conditionnel français.","Dans *wenn* (si), l'allemand met le Konjunktiv II.","*wäre/hätte/könnte* remplacent souvent *würde sein/haben/können*."]}, titre: "Le subjonctif II (conditionnel)", titreDE: "Konjunktiv II", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B1",
    objectifs: ["Formuler demandes polies et souhaits", "Exprimer l'irréel au présent et au passé"],
    grammairePoints: ["würde, könnte, hätte, wäre", "hätte/wäre + participe (passé)"],
    exemplesPlus: [{"de":"Wenn ich Zeit hätte, würde ich dir helfen.","fr":"Irreale Bedingung: *hätte* + *würde*. Es ist gerade nicht so."},{"de":"An deiner Stelle wäre ich vorsichtiger.","fr":"*wäre*: ein höflicher Rat."},{"de":"Könntest du mir bitte das Salz geben?","fr":"*könnte*: eine höfliche Bitte."},{"de":"Ich hätte gern noch einen Kaffee.","fr":"*hätte gern*: ein höflicher Wunsch."},{"de":"Wenn er früher gekommen wäre, hätte er den Zug nicht verpasst.","fr":"Vergangenheit: *wäre/hätte* + Partizip."}],
    coursDE: [
      "Der **Konjunktiv II** ist die Form für **irreale Situationen** (« wenn ich reich wäre… »), für **Wünsche** und für **höfliche Bitten**. Er ist sehr nützlich im Alltag.",
      "Die einfachste Form ist **würde + Infinitiv**: « *Ich würde gern nach Italien fahren* ». Diese Form funktioniert mit fast allen Verben. Wenn du unsicher bist, benutze einfach *würde* + Infinitiv – das ist fast immer richtig.",
      "Einige wichtige Verben haben aber eine **eigene Form**: *sein → **wäre***, *haben → **hätte***, *können → **könnte***, *müssen → **müsste***, *dürfen → **dürfte***. Bei diesen Verben benutzt man **nicht** *würde*: « *Ich hätte gern einen Kaffee* », « *Das wäre schön* ».",
      "Sehr praktisch ist die **Höflichkeit**: « *Könnten Sie mir helfen?* » klingt viel freundlicher als « *Können Sie…* ». Auch für **Ratschläge** ist der Konjunktiv II perfekt: « *Du solltest mehr schlafen* ». Für die **Vergangenheit** nimmst du *hätte/wäre* + Partizip II: « *Ich hätte das nicht gesagt* »."
    ],
    grammaire: [
      { exemples: [{"de":"Wenn ich reich wäre, würde ich reisen.","fr":"Si j'étais riche, je voyagerais."},{"de":"An deiner Stelle würde ich es versuchen.","fr":"À ta place, j'essaierais."}], regle: "Irréel / politesse / souhait : **würde** + infinitif, ou **hätte, wäre, könnte, sollte**. Passé : **hätte/wäre + participe**.", attention: "Conseil : *An deiner Stelle **würde** ich…* / *Du **solltest**…*", titre: "Présent et passé du Konjunktiv II", intro: "Présent : würde + infinitif, ou hätte/wäre/könnte… Passé (irréel/regret) : hätte/wäre + participe II.",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["Politesse", "könnte / würde", "Könnten Sie mir helfen?"], ["Souhait", "hätte / wäre gern", "Ich hätte gern einen Kaffee."], ["Conseil", "sollte / würde", "Du solltest mehr schlafen."], ["Irréel présent", "würde + infinitif", "Ich würde gern kommen."], ["Irréel passé", "hätte/wäre + participe", "Ich hätte das nicht gesagt."]] },
        schemas: [{ legende: "Irréel passé : hätte (2) … participe (fin).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "hätte", r: "hätte (2)", c: "verbe" }, { m: "das anders", r: "complément", c: "objet" }, { m: "gemacht", r: "participe (fin)", c: "fin" }] }],
        note: "Regret : « Ich hätte mehr lernen sollen » (j'aurais dû travailler plus). « An deiner Stelle hätte ich… » = à ta place, j'aurais…" },
      { titre: "Les formes propres à connaître par cœur",
        regle: "Quatre familles ont une **forme propre** qu'on emploie à la place de *würde* : **sein → wäre**, **haben → hätte**, **werden → würde**, et les modaux (**könnte, müsste, dürfte, sollte**).",
        intro: "Elles se forment sur le prétérit + Umlaut + les terminaisons *-e, -est, -e, -en, -et, -en*.",
        tableau: { entetes: ["Pronom", "sein → wäre", "haben → hätte", "können → könnte"], lignes: [["ich", "wäre", "hätte", "könnte"], ["du", "wärst", "hättest", "könntest"], ["er/sie/es", "wäre", "hätte", "könnte"], ["wir", "wären", "hätten", "könnten"], ["ihr", "wärt", "hättet", "könntet"], ["sie/Sie", "wären", "hätten", "könnten"]] },
        note: "Ce sont parmi les formes les plus fréquentes de la langue — à automatiser." },
      { titre: "würde + infinitif ou forme propre ?",
        regle: "**Règle pratique :** pour *sein*, *haben* et les **modaux**, on emploie la **forme propre** (wäre, hätte, könnte). Pour **tous les autres verbes**, on préfère **würde + infinitif**.",
        intro: "On dit *ich **wäre** froh* (et non « würde sein »), mais *ich **würde** gern kommen* (verbe ordinaire).",
        tableau: { entetes: ["Verbe", "On dit", "On évite"], lignes: [["sein", "ich wäre", "würde sein"], ["haben", "ich hätte", "würde haben"], ["können / müssen", "ich könnte / müsste", "würde können"], ["autres verbes", "ich würde gehen / machen", "(forme propre soutenue)"]] },
        note: "En cas de doute sur un verbe ordinaire : *würde + infinitif* est presque toujours correct." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le subjonctif II passé se forme avec…", options: ["hätte/wäre + participe II", "würde + infinitif", "haben + infinitif"], correct: 0, explication: "Ich hätte gesagt / Ich wäre gegangen." },
      { type: "qcm", consigne: "Demande polie.", question: "___ Sie mir bitte helfen?", options: ["Könnten", "Können", "Konnten", "Kannst"], correct: 0, explication: "Konjunktiv II poli : Könnten Sie…?" },
      { type: "trou", consigne: "Complétez (Konjunktiv II de haben).", texte: "Ich {0} gern einen Tee.", accepte: [["hätte"]], indice: "haben → hätte (souhait poli)" },
      { type: "association", consigne: "Associez l'infinitif et sa forme.", paires: [{ gauche: "haben", droite: "hätte" }, { gauche: "sein", droite: "wäre" }, { gauche: "können", droite: "könnte" }, { gauche: "werden", droite: "würde" }] },
      { type: "oral", consigne: "Production orale.", prompt: "Exprimez un regret au passé (j'aurais dû / je n'aurais pas dû…).", attendus: ["hätte", "sollen"], modele: "Ich hätte mehr lernen sollen. Ich hätte das nicht sagen sollen." },
      { type: "trou", consigne: "Konjunktiv II de sein (irréel).", texte: "Wenn ich du {0}, würde ich es sofort machen.", accepte: [["wäre"]], indice: "sein → wäre" },
      { type: "qcm", consigne: "Quelle forme préférer ?", question: "Pour un verbe ordinaire (kommen), on dit plutôt…", options: ["ich würde kommen", "ich käme", "ich komme"], correct: 0, explication: "Verbe ordinaire → würde + infinitif (käme existe mais est soutenu)." },
      { type: "trou", consigne: "Irréel passé (sein + participe).", texte: "Wenn er früher gekommen {0}, hätte er den Zug erreicht.", accepte: [["wäre"]], indice: "kommen → wäre + gekommen" }
    ]
  },
  b1g06: {
    id: "b1g06",
    einstieg: {"intro":"Observe l'ordre quand il y a deux pronoms.","exemples":[{"de":"Ich gebe es ihm.","fr":"Je le lui donne."},{"de":"Er erklärt mir die Regel.","fr":"Il m'explique la règle."},{"de":"Ich schicke dir das Paket.","fr":"Je t'envoie le colis."}],"question":"Quand le pronom accusatif passe-t-il avant le datif ?"},
    merke: ["Datif (à qui) + accusatif (quoi) : ordre par défaut *datif puis accusatif*.","Deux *pronoms* → ordre inversé : *accusatif puis datif* (*es ihm*).","Verbes typiques : *geben, erklären, schicken, zeigen, empfehlen*."],
    achtung: [{"erreur":"Ich gebe ihm es.","correct":"Ich gebe **es ihm**.","explication":"Deux pronoms : accusatif (es) AVANT datif (ihm)."},{"erreur":"Er erklärt mich die Regel.","correct":"Er erklärt **mir** die Regel.","explication":"« à moi » = datif (mir), pas mich."}],
    kontrast: {"titre":"Datif + accusatif : allemand vs français","similitudes":["« le lui donner » existe dans les deux."],"differences":["Ordre des pronoms : accusatif avant datif (l'inverse du nom).","Le datif est marqué (mir/dir/ihm).","Certains verbes (helfen, danken) n'ont QUE le datif."]}, titre: "Verbes avec datif et accusatif", titreDE: "Verben mit Dativ und Akkusativ", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Reconnaître les verbes à datif", "Construire « donner qqch à qqn »"],
    grammairePoints: ["geben, schenken, zeigen", "datif (personne) + accusatif (chose)"],
    exemplesPlus: [{"de":"Ich gebe meinem Bruder das Buch.","fr":"Person im *Dativ*, Sache im *Akkusativ*."},{"de":"Sie schenkt ihrer Freundin eine Kette.","fr":"*schenken*: jemandem (Dativ) etwas (Akkusativ)."},{"de":"Kannst du mir bitte den Weg zeigen?","fr":"*zeigen*: mir (Dativ) den Weg (Akkusativ)."},{"de":"Der Lehrer erklärt den Schülern die Regel.","fr":"*erklären*: den Schülern (Dativ) die Regel (Akkusativ)."},{"de":"Ich bringe dir morgen die Fotos mit.","fr":"*mitbringen*: dir (Dativ) die Fotos (Akkusativ)."}],
    coursDE: [
      "Manche Verben haben **zwei Objekte**: eine **Person im Dativ** (wem?) und eine **Sache im Akkusativ** (was?). Das sind oft Verben des Gebens und Sagens: *geben, schenken, zeigen, bringen, schicken, erklären, empfehlen*.",
      "Das Modell ist: **Subjekt + Verb + Dativ (Person) + Akkusativ (Sache)**. Beispiel: « *Ich gebe **dem Kind** (Dativ) **einen Apfel** (Akkusativ)* ». Die Person, die etwas bekommt, steht im Dativ; die Sache steht im Akkusativ.",
      "Die **Reihenfolge** ist wichtig. Bei zwei Nomen: zuerst **Dativ**, dann **Akkusativ**. Aber wenn ein Objekt ein **Pronomen** ist, kommt es **nach vorne**: « *Ich gebe **es** dem Kind* ». Wenn beide Pronomen sind, kommt der Akkusativ zuerst: « *Ich gebe **es ihm*** ».",
      "Es gibt auch Verben **nur mit Dativ**: *helfen, danken, gefallen, gehören, antworten, folgen*. Beispiel: « *Ich helfe **dir*** », « *Das Buch gehört **mir*** ». Lerne bei jedem neuen Verb: Welchen Kasus braucht es? Das ist genauso wichtig wie die Bedeutung."
    ],
    grammaire: [
      { exemples: [{"de":"Ich empfehle Ihnen dieses Buch.","fr":"Je vous recommande ce livre."},{"de":"Gib mir bitte das Salz.","fr":"Passe-moi le sel, s'il te plaît."}], regle: "Verbes à **datif (personne) + accusatif (chose)** : *geben, schenken, zeigen, empfehlen*. Datif avant accusatif (deux noms).", attention: "Si la **chose est un pronom**, elle passe **avant** : *Ich gebe **es** dem Kind*.", titre: "Datif (à qui) + accusatif (quoi)", intro: "Certains verbes prennent un datif (personne) ET un accusatif (chose). Ordre habituel : datif avant accusatif quand ce sont des noms.",
        tableau: { entetes: ["Verbe", "Construction", "Exemple"], lignes: [["geben", "jdm etwas", "Ich gebe dem Kind einen Apfel."], ["schenken", "jdm etwas", "Er schenkt ihr Blumen."], ["zeigen", "jdm etwas", "Ich zeige dir das Foto."], ["empfehlen", "jdm etwas", "Ich empfehle Ihnen das Buch."], ["erklären", "jdm etwas", "Er erklärt mir die Regel."]] },
        schemas: [{ legende: "Donner : à QUI (datif) + QUOI (accusatif).", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "gebe", r: "verbe (2)", c: "verbe" }, { m: "dem Kind", r: "datif (à qui)", c: "objet" }, { m: "einen Apfel", r: "accusatif (quoi)", c: "fin" }] }],
        note: "Si la chose est un pronom, il passe avant : « Ich gebe es dem Kind. » (accusatif pronom avant datif nom)." },
      { titre: "L'ordre datif / accusatif",
        regle: "Deux **noms** : datif puis accusatif. Deux **pronoms** : **accusatif puis datif**. **Mixte** : le **pronom** passe toujours en premier.",
        intro: "*Ich gebe dem Kind das Buch* → *Ich gebe **es ihm*** → *Ich gebe **es** dem Kind*.",
        tableau: { entetes: ["Combinaison", "Ordre", "Exemple"], lignes: [["2 noms", "datif + accusatif", "Ich gebe dem Kind das Buch."], ["2 pronoms", "accusatif + datif", "Ich gebe es ihm."], ["pronom + nom", "pronom d'abord", "Ich gebe es dem Kind."]] },
        note: "Règle simple : le **pronom** passe toujours devant ; entre deux pronoms, l'**accusatif** gagne." },
      { titre: "Les verbes à datif seul",
        regle: "Certains verbes ont un **seul** complément, au **datif** (là où le français attend un COD) : *helfen, danken, gefallen, gehören, antworten, folgen, gratulieren*.",
        intro: "*Ich helfe **dir*** (je t'aide), *Das gehört **mir*** (ça m'appartient), *Das gefällt **ihm*** (ça lui plaît).",
        tableau: { entetes: ["Verbe", "Sens", "Exemple"], lignes: [["helfen", "aider", "Ich helfe dem Mann."], ["danken", "remercier", "Ich danke dir."], ["gefallen", "plaire", "Das Bild gefällt mir."], ["gehören", "appartenir", "Das Auto gehört ihm."], ["gratulieren", "féliciter", "Wir gratulieren dir!"]] },
        note: "Piège pour francophones : *helfen/danken* prennent le **datif**, pas l'accusatif (*ich helfe **dir***, non « dich »)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Avec « geben », l'ordre habituel (deux noms) est…", options: ["datif puis accusatif", "accusatif puis datif", "nominatif puis datif"], correct: 0, explication: "à qui (datif) avant quoi (accusatif)." },
      { type: "qcm", consigne: "Complétez (datif).", question: "Ich zeige ___ das Foto. (à toi)", options: ["dir", "dich", "du", "deiner"], correct: 0, explication: "zeigen + datif → dir." },
      { type: "trou", consigne: "Complétez (datif + accusatif).", texte: "Ich gebe {0} Kind {1} Apfel.", accepte: [["dem"], ["einen"]], indice: "à qui (datif) / quoi (accusatif)" },
      { type: "association", consigne: "Associez le verbe et sa construction.", paires: [{ gauche: "schenken", droite: "jdm etwas" }, { gauche: "empfehlen", droite: "jdm etwas" }, { gauche: "helfen", droite: "+ datif" }, { gauche: "sehen", droite: "+ accusatif" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je recommande le livre à mon amie.", accepte: ["Ich empfehle meiner Freundin das Buch"], aide: "empfehlen + datif (personne) + accusatif (chose)" },
      { type: "qcm", consigne: "Deux pronoms : quel ordre ?", question: "« Je le lui donne » = Ich gebe…", options: ["es ihm", "ihm es", "ihn ihm", "ihm ihn"], correct: 0, explication: "Deux pronoms → accusatif (es) avant datif (ihm)." },
      { type: "trou", consigne: "Verbe à datif seul.", texte: "Kannst du {0} helfen? (à moi)", accepte: [["mir"]], indice: "helfen + datif → mir" },
      { type: "qcm", consigne: "Datif ou accusatif ?", question: "Das Buch gehört ___. (à eux)", options: ["ihnen", "sie", "sich", "ihr"], correct: 0, explication: "gehören + datif → ihnen." }
    ]
  },
  b1g07: {
    id: "b1g07",
    einstieg: {"intro":"Observe ce qui arrive à certains noms masculins hors nominatif.","exemples":[{"de":"Der Student lernt.","fr":"L'étudiant apprend."},{"de":"Ich kenne den Studenten.","fr":"Je connais l'étudiant."},{"de":"mit dem Kollegen","fr":"avec le collègue"}],"question":"Pourquoi *Student* devient-il *Studenten* ?"},
    merke: ["Certains noms *masculins* prennent *-(e)n* à TOUS les cas sauf le nominatif singulier.","Typiques : *Student, Kollege, Junge, Mensch, Herr, Name, Kunde, Nachbar*.","Ex. : der Student → den/dem/des Student**en**."],
    achtung: [{"erreur":"Ich sehe den Student.","correct":"Ich sehe den **Studenten**.","explication":"Nom faible : -en à l'accusatif."},{"erreur":"mit dem Kollege","correct":"mit dem **Kollegen**","explication":"Nom faible au datif : -n."}],
    kontrast: {"titre":"Noms faibles : allemand vs français","similitudes":["Les noms varient au pluriel dans les deux."],"differences":["Ces masculins prennent *-(e)n* même au *singulier* (hors nominatif).","Phénomène propre à l'allemand, à mémoriser par liste.","Sans le -n, la phrase est fautive."]}, titre: "La déclinaison en -n (N-Deklination)", titreDE: "Die N-Deklination", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Reconnaître les noms de la N-Deklination", "Ajouter -n / -en hors nominatif"],
    grammairePoints: ["der Junge → den Jungen", "Herr, Kollege, Student, Mensch"],
    exemplesPlus: [{"de":"Ich kenne den Jungen aus meiner Klasse.","fr":"*der Junge → den Jungen*: diese Nomen bekommen ein *-n*."},{"de":"Wir helfen dem Studenten bei den Hausaufgaben.","fr":"*der Student → dem Studenten*."},{"de":"Kennst du diesen netten Kollegen?","fr":"*der Kollege → den Kollegen*."},{"de":"Der Name des Kunden steht auf der Liste.","fr":"*der Kunde → des Kunden* (Genitiv)."},{"de":"Ich habe mit einem Polizisten gesprochen.","fr":"*der Polizist → einem Polizisten*."}],
    coursDE: [
      "Die **N-Deklination** ist eine spezielle Gruppe von **maskulinen Nomen**. Diese Nomen bekommen in fast allen Fällen ein **-n** oder **-en** am Ende – nur im Nominativ Singular nicht. Viele Lerner vergessen dieses -n, darum ist diese Lektion wichtig.",
      "Welche Nomen gehören dazu? Oft sind es **Personen und Berufe**: *der Junge, der Kollege, der Student, der Kunde, der Nachbar, der Mensch, der Herr*. Und einige andere wie *der Name, der Tourist, der Polizist*.",
      "So funktioniert es: Nominativ « *der Junge* », aber Akkusativ « *Ich sehe **den Jungen*** », Dativ « *Ich helfe **dem Jungen*** », Genitiv « *das Buch **des Jungen*** ». Überall steht ein **-n**, nur im Nominativ nicht.",
      "Ein typischer Fehler ist « *Ich sehe der Student* ». Richtig ist « *Ich sehe **den Studenten*** ». Bei *Herr* steht im Singular **-n** (*dem Herrn*) und im Plural **-en** (*die Herren*). Merke dir die wichtigsten Wörter dieser Gruppe und denk an das **-n**."
    ],
    grammaire: [
      { regle: "Un groupe de **masculins** (souvent des personnes : *Junge, Kollege, Student, Mensch, Herr*) prend **-(e)n** partout **sauf au nominatif singulier**.", attention: "Indices : noms en **-e**, professions/nationalités (*Polizist*) ; *Herr* fait *Herr**n***.", exemples: [{"de":"Ich frage den Polizisten.","fr":"Je demande au policier."},{"de":"Ich helfe dem Kollegen.","fr":"J'aide le collègue."}], titre: "Ces masculins prennent -(e)n partout sauf au nominatif singulier", intro: "Un groupe de noms masculins (souvent des personnes) ajoute -n ou -en à l'accusatif, au datif et au génitif.",
        tableau: { entetes: ["Nominatif", "Accusatif/Datif", "Sens"], lignes: [["der Junge", "den/dem Jungen", "le garçon"], ["der Kollege", "den/dem Kollegen", "le collègue"], ["der Student", "den/dem Studenten", "l'étudiant"], ["der Mensch", "den/dem Menschen", "l'être humain"], ["der Herr", "den/dem Herrn", "monsieur"], ["der Name", "den/dem Namen", "le nom"]] },
        note: "Indices : beaucoup finissent en -e (Junge, Kollege), ou sont des nationalités/professions (Student, Polizist), ou viennent du grec (Tourist, Journalist)." },
      { titre: "Le modèle complet (der Student)",
        regle: "Un nom de la N-Deklination prend **-en** à l'**accusatif, au datif ET au génitif** — seul le **nominatif singulier** reste nu.",
        intro: "Le pluriel suit le même -en. Retiens le schéma sur un mot type.",
        tableau: { entetes: ["Cas", "Singulier", "Pluriel"], lignes: [["Nominatif", "der Student", "die Studenten"], ["Accusatif", "den Studenten", "die Studenten"], ["Datif", "dem Studenten", "den Studenten"], ["Génitif", "des Studenten", "der Studenten"]] },
        note: "Une seule forme nue : le **nominatif singulier** (der Student). Partout ailleurs : Studenten." },
      { titre: "Le cas spécial : génitif en -ns",
        regle: "Un petit groupe (surtout **der Name**) prend **-n** partout, mais **-ns** au **génitif** : *des Name**ns***.",
        intro: "Groupe à part : *Name, Wille, Gedanke, Glaube, Buchstabe* et le neutre *das Herz*.",
        tableau: { entetes: ["Nominatif", "Datif", "Génitif"], lignes: [["der Name", "dem Namen", "des Namens"], ["der Gedanke", "dem Gedanken", "des Gedankens"], ["der Wille", "dem Willen", "des Willens"], ["das Herz", "dem Herzen", "des Herzens"]] },
        note: "Ils font -n au datif/accusatif mais **-ns** au génitif. *das Herz* est le seul neutre du groupe." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "La N-Deklination ajoute -n/-en…", options: ["partout sauf au nominatif singulier", "seulement au pluriel", "jamais"], correct: 0, explication: "Acc./Dat./Gén. → -(e)n." },
      { type: "qcm", consigne: "Complétez.", question: "Ich kenne den ___. (Student)", options: ["Studenten", "Student", "Studente", "Studentes"], correct: 0, explication: "accusatif → den Studenten." },
      { type: "trou", consigne: "Complétez (N-Deklination).", texte: "Ich helfe dem {0}. (Kollege)", accepte: [["Kollegen"]], indice: "datif → den/dem …en" },
      { type: "association", consigne: "Associez nominatif et accusatif.", paires: [{ gauche: "der Junge", droite: "den Jungen" }, { gauche: "der Herr", droite: "den Herrn" }, { gauche: "der Name", droite: "den Namen" }, { gauche: "der Mensch", droite: "den Menschen" }] },
      { type: "ordre", consigne: "Construisez la phrase.", mots: ["Ich", "frage", "den", "Polizisten"], correct: "Ich frage den Polizisten", traduction: "Je demande au policier." },
      { type: "qcm", consigne: "Génitif spécial en -ns.", question: "Das ist der Anfang ___. (der Name)", options: ["des Namens", "des Namen", "des Names", "dem Namen"], correct: 0, explication: "der Name → génitif « des Namens » (-ns)." },
      { type: "trou", consigne: "Datif (N-Deklination, -ns groupe).", texte: "Von ganzem {0} danke ich dir. (das Herz)", accepte: [["Herzen"]], indice: "das Herz → dem/ganzem Herzen (datif)" }
    ]
  },
  b1g08: {
    id: "b1g08",
    einstieg: {"intro":"Observe les conjonctions qui situent dans le temps.","exemples":[{"de":"Während ich koche, höre ich Musik.","fr":"Pendant que je cuisine, j'écoute de la musique."},{"de":"Nachdem ich gegessen hatte, ging ich.","fr":"Après avoir mangé, je suis parti."},{"de":"Bevor du gehst, ruf mich an.","fr":"Avant que tu partes, appelle-moi."}],"question":"Quel rapport de temps exige *nachdem* ?"},
    merke: ["Conjonctions temporelles : *während*, *bevor*, *nachdem*, *seit(dem)*.","Ce sont des *subordonnées* → verbe à la fin.","Après *nachdem* : temps *antérieur* (Plusquamperfekt / Perfekt)."],
    achtung: [{"erreur":"Nachdem ich esse, gehe ich.","correct":"Nachdem ich gegessen **habe**, gehe ich.","explication":"*nachdem* exige l'antériorité (Perfekt/Plusquamperfekt)."},{"erreur":"Während ich koche höre ich Musik.","correct":"Während ich koche**,** höre ich Musik.","explication":"Virgule obligatoire + inversion dans la principale."}],
    kontrast: {"titre":"Conjonctions temporelles : allemand vs français","similitudes":["pendant que/während, avant que/bevor, après que/nachdem."],"differences":["Le verbe va en *fin* de subordonnée.","*nachdem* impose un décalage de temps (antériorité).","*bevor/nachdem* + indicatif (pas de subjonctif)."]}, titre: "Indicateurs de temps", titreDE: "Temporale Präpositionen", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Situer une action dans le temps", "Choisir la préposition et le cas corrects"],
    grammairePoints: ["vor, seit, bis, ab", "über, innerhalb (+ Gen.)"],
    exemplesPlus: [{"de":"Vor drei Jahren bin ich nach Berlin gezogen.","fr":"*vor* + Dativ: ein Punkt in der Vergangenheit."},{"de":"Ich lerne seit zwei Monaten Deutsch.","fr":"*seit* + Dativ: es hat angefangen und geht bis jetzt."},{"de":"Wir bleiben bis Freitag hier.","fr":"*bis*: der Endpunkt einer Zeit."},{"de":"Ab nächster Woche habe ich mehr Zeit.","fr":"*ab*: der Startpunkt."},{"de":"Innerhalb einer Woche musst du antworten.","fr":"*innerhalb* + Genitiv: in diesem Zeitraum."}],
    coursDE: [
      "**Temporale Präpositionen** sagen, **wann** etwas passiert. Auf B1-Niveau lernst du mehr als nur *am, um, im*. Die meisten dieser Präpositionen stehen mit dem **Dativ**.",
      "Für einen **Zeitpunkt in der Vergangenheit** benutzt du **vor** (+ Dativ): « *vor zwei Jahren* » (il y a deux ans). Für einen Zeitraum vom Anfang bis jetzt benutzt du **seit** (+ Dativ): « *seit drei Monaten* » (depuis trois mois). Verwechsle *vor* und *seit* nicht!",
      "Für Grenzen und die Zukunft benutzt du **bis** (jusqu'à) und **ab** (à partir de): « *bis Freitag* », « *ab Montag* ». Mit **in** (+ Dativ) sagst du, wann etwas in der Zukunft passiert: « *in einer Woche* » (dans une semaine).",
      "Wichtig ist auch **während** (pendant) mit dem **Genitiv**: « *während des Unterrichts* ». In der gesprochenen Sprache hört man oft *während* + Dativ. Mache dir eine Tabelle: Präposition → Kasus → Bedeutung. So bist du immer sicher."
    ],
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
    id: "b1g09",
    einstieg: {"intro":"Observe la nuance de ces petits mots.","exemples":[{"de":"Ich habe schon gegessen.","fr":"J'ai déjà mangé."},{"de":"Er ist noch nicht da.","fr":"Il n'est pas encore là."},{"de":"Sie kommt erst um 8.","fr":"Elle ne vient qu'à 8h."}],"question":"Quelle nuance apportent *schon*, *noch*, *erst* ?"},
    merke: ["*schon* = déjà ; *noch* = encore ; *noch nicht* = pas encore.","*erst* = seulement / pas avant (temps) : *erst um 8*.","*gerade* = juste maintenant (*ich esse gerade*)."],
    achtung: [{"erreur":"Sie kommt nur um 8. (temps)","correct":"Sie kommt **erst** um 8.","explication":"« ne… que » dans le temps = *erst*, pas *nur*."},{"erreur":"Er ist nicht noch da.","correct":"Er ist **noch nicht** da.","explication":"L'ordre figé est *noch nicht* (pas encore)."}],
    kontrast: {"titre":"Adverbes de temps : allemand vs français","similitudes":["déjà/schon, encore/noch ont des équivalents."],"differences":["*erst* (temps) = « ne… que / pas avant » - distinct de *nur* (quantité).","*noch nicht* (pas encore) est figé.","Ces nuances changent fortement le sens."]}, titre: "Adverbes de temps", titreDE: "Temporaladverbien", theme: "Grammaire", type: "grammaire", duree: 35, niveau: "B1",
    objectifs: ["Enrichir un récit avec des adverbes temporels", "Ordonner les étapes (d'abord, ensuite, enfin)"],
    grammairePoints: ["damals, früher, neulich", "zuerst, dann, schließlich"],
    exemplesPlus: [{"de":"Damals gab es noch keine Handys.","fr":"*damals*: vor langer Zeit."},{"de":"Früher habe ich viel Sport gemacht.","fr":"*früher*: in der Vergangenheit, nicht mehr heute."},{"de":"Neulich habe ich einen alten Freund getroffen.","fr":"*neulich*: vor Kurzem."},{"de":"Zuerst frühstücke ich, dann gehe ich zur Arbeit.","fr":"*zuerst … dann*: die Reihenfolge."},{"de":"Schließlich sind wir doch noch angekommen.","fr":"*schließlich*: am Ende."}],
    coursDE: [
      "**Temporaladverbien** sind Wörter, die etwas über die **Zeit** sagen, aber ohne Präposition. Sie helfen dir, eine Geschichte klar und in der richtigen Reihenfolge zu erzählen.",
      "Für die **Vergangenheit**: *damals* (à cette époque), *früher* (autrefois), *neulich* (récemment), *gestern, vorgestern*. Beispiel: « *Früher habe ich in Berlin gewohnt* ».",
      "Für die **Reihenfolge** in einer Geschichte sind diese Wörter sehr nützlich: **zuerst** (d'abord), **dann / danach** (ensuite), **später** (plus tard), **schließlich / am Ende** (finalement). Beispiel: « *Zuerst stand ich auf, dann frühstückte ich, schließlich ging ich zur Arbeit* ».",
      "Achtung bei der **Wortstellung**: Wenn ein Temporaladverb am **Anfang** steht, kommt das Verb direkt danach (Position 2): « ***Gestern** **war** ich im Kino* ». Das ist die wichtige Regel: das Verb bleibt immer auf Position 2."
    ],
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
    id: "b1g10",
    einstieg: {"intro":"Observe le pronom réfléchi.","exemples":[{"de":"Ich freue mich.","fr":"Je me réjouis."},{"de":"Ich wasche mir die Hände.","fr":"Je me lave les mains."},{"de":"Er erinnert sich an den Tag.","fr":"Il se souvient du jour."}],"question":"Le pronom réfléchi est-il toujours à l'accusatif ?"},
    merke: ["Réfléchi : *mich/dich/sich…* (accusatif) ou *mir/dir/sich* (datif).","Datif réfléchi quand il y a *déjà un COD* (*ich wasche mir die Hände*).","Beaucoup ont une préposition : *sich freuen auf/über*, *sich erinnern an*."],
    achtung: [{"erreur":"Ich wasche mich die Hände.","correct":"Ich wasche **mir** die Hände.","explication":"Avec un COD (die Hände), le réfléchi passe au datif (mir)."},{"erreur":"Er erinnert sich den Tag.","correct":"Er erinnert sich **an** den Tag.","explication":"*sich erinnern* exige *an* + accusatif."}],
    kontrast: {"titre":"Verbes pronominaux : allemand vs français","similitudes":["« se laver », « se souvenir » existent dans les deux."],"differences":["Le réfléchi peut être à l'*accusatif* OU au *datif*.","À la 3e personne, toujours *sich* (sing. et plur.).","Beaucoup demandent une préposition fixe."]}, titre: "Les verbes réfléchis", titreDE: "Reflexive Verben", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Conjuguer un verbe réfléchi", "Placer le pronom réfléchi (accusatif/datif)"],
    grammairePoints: ["sich freuen, sich interessieren", "mich/mir, dich/dir…"],
    exemplesPlus: [{"de":"Ich freue mich auf das Wochenende.","fr":"Reflexivpronomen im Akkusativ: *mich*."},{"de":"Wäschst du dir die Hände?","fr":"Mit einem Objekt steht der Dativ: *dir*."},{"de":"Wir treffen uns um acht vor dem Kino.","fr":"*sich treffen*: wir treffen uns (Akkusativ *uns*)."},{"de":"Sie interessiert sich für Politik.","fr":"*sich interessieren für* + Akkusativ."},{"de":"Setz dich bitte!","fr":"Imperativ mit Reflexivpronomen: *dich*."}],
    coursDE: [
      "**Reflexive Verben** sind Verben mit einem **Reflexivpronomen** wie *sich*. Die Handlung geht zurück auf das Subjekt: die Person macht etwas mit sich selbst. Beispiele: *sich waschen, sich freuen, sich interessieren, sich erinnern*.",
      "Die Reflexivpronomen sind: *ich → **mich***, *du → **dich***, *er/sie/es → **sich***, *wir → **uns***, *ihr → **euch***, *sie/Sie → **sich***. Beispiel: « *Ich freue mich* », « *Er wäscht sich* ».",
      "Manche reflexive Verben stehen mit dem **Dativ**, besonders wenn es ein zweites Objekt (eine Sache) gibt. Vergleiche: « *Ich wasche **mich*** » (Akkusativ), aber « *Ich wasche **mir** die Hände* » (Dativ, weil « die Hände » das Akkusativobjekt ist). Im Dativ heißt es *mir / dir*.",
      "Viele reflexive Verben haben außerdem eine feste **Präposition**: *sich freuen **auf/über***, *sich interessieren **für***, *sich erinnern **an***, *sich ärgern **über***. Lerne das Verb, das Pronomen und die Präposition immer zusammen: « *Ich interessiere mich für Musik* »."
    ],
    grammaire: [
      { exemples: [{"de":"Ich freue mich über dein Geschenk.","fr":"Je suis content de ton cadeau."},{"de":"Wir treffen uns um acht.","fr":"On se retrouve à huit heures."}], regle: "Verbes réfléchis : pronom accordé au sujet (**mich, dich, sich, uns, euch**). En général **accusatif** ; **datif** s'il y a déjà un COD.", attention: "Datif : *Ich wasche **mir** die Hände* (le COD *die Hände* force le réfléchi au datif).", titre: "Le pronom réfléchi s'accorde avec le sujet", intro: "Les verbes réfléchis ont un pronom (mich, dich, sich…). En général à l'accusatif ; au datif quand il y a déjà un COD.",
        tableau: { entetes: ["Sujet", "Réfléchi (Akk.)", "Exemple"], lignes: [["ich", "mich", "Ich freue mich."], ["du", "dich", "Du erinnerst dich."], ["er/sie/es", "sich", "Er interessiert sich."], ["wir", "uns", "Wir treffen uns."], ["ihr", "euch", "Ihr entspannt euch."], ["sie/Sie", "sich", "Sie waschen sich."]] },
        schemas: [{ legende: "Le réfléchi suit le verbe conjugué.", mots: [{ m: "Ich", r: "sujet", c: "sujet" }, { m: "interessiere", r: "verbe (2)", c: "verbe" }, { m: "mich", r: "réfléchi (acc.)", c: "objet" }, { m: "für Sport", r: "prép. + complément", c: "fin" }] }],
        note: "Datif : « Ich wasche mir die Hände » (le COD die Hände force le réfléchi au datif : mir)." },
      { titre: "Accusatif ou datif ? (seuls ich/du changent)",
        regle: "Le réfléchi est à l'**accusatif** en général, au **datif** quand il y a **déjà un COD**. Seules *ich* et *du* diffèrent : **mich/mir**, **dich/dir**.",
        intro: "*Ich wasche **mich*** (acc.) vs *Ich wasche **mir** die Hände* (dat., car « die Hände » est le COD).",
        tableau: { entetes: ["Sujet", "Accusatif", "Datif"], lignes: [["ich", "mich", "mir"], ["du", "dich", "dir"], ["er/sie/es", "sich", "sich"], ["wir", "uns", "uns"], ["ihr", "euch", "euch"], ["sie/Sie", "sich", "sich"]] },
        note: "À partir de *er/sie/es*, accusatif = datif (sich, uns, euch, sich). Seuls *ich* et *du* changent." },
      { titre: "Verbes réfléchis à préposition (à mémoriser)",
        regle: "Beaucoup de verbes réfléchis ont une **préposition fixe** qui impose le cas. À apprendre en bloc : *sich* + verbe + préposition.",
        intro: "Au quotidien : *sich freuen auf, sich interessieren für, sich erinnern an*.",
        tableau: { entetes: ["Verbe", "Prép. + cas", "Exemple"], lignes: [["sich freuen", "auf/über + Akk.", "Ich freue mich auf den Urlaub."], ["sich interessieren", "für + Akk.", "Sie interessiert sich für Kunst."], ["sich erinnern", "an + Akk.", "Ich erinnere mich an dich."], ["sich ärgern", "über + Akk.", "Er ärgert sich über den Stau."], ["sich kümmern", "um + Akk.", "Ich kümmere mich um alles."], ["sich bewerben", "um + Akk.", "Sie bewirbt sich um die Stelle."]] },
        note: "*sich freuen **auf*** = se réjouir d'avance ; *sich freuen **über*** = être content de (déjà arrivé)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le pronom réfléchi s'accorde avec…", options: ["le sujet", "le COD", "le verbe seul"], correct: 0, explication: "ich → mich, du → dich, etc." },
      { type: "qcm", consigne: "Choisissez le réfléchi.", question: "Wir treffen ___ um acht.", options: ["uns", "sich", "euch", "mich"], correct: 0, explication: "wir → uns." },
      { type: "trou", consigne: "Complétez (réfléchi).", texte: "Ich interessiere {0} für Musik.", accepte: [["mich"]], indice: "ich → mich" },
      { type: "association", consigne: "Associez le sujet et le réfléchi.", paires: [{ gauche: "ich", droite: "mich" }, { gauche: "du", droite: "dich" }, { gauche: "wir", droite: "uns" }, { gauche: "ihr", droite: "euch" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Je me réjouis.", accepte: ["Ich freue mich"], aide: "sich freuen → ich freue mich" },
      { type: "qcm", consigne: "Réfléchi au datif.", question: "Ich wasche ___ die Hände.", options: ["mir", "mich", "sich", "mein"], correct: 0, explication: "Avec un COD (die Hände) → datif : mir." },
      { type: "trou", consigne: "Réfléchi + préposition.", texte: "Ich erinnere mich gern {0} meine Kindheit.", accepte: [["an"]], indice: "sich erinnern an + accusatif" },
      { type: "qcm", consigne: "Accusatif ou datif ?", question: "Ich putze ___ die Zähne.", options: ["mir", "mich", "sich", "meine"], correct: 0, explication: "COD (die Zähne) → réfléchi datif : mir." }
    ]
  },
  b1g11: {
    id: "b1g11",
    einstieg: {"intro":"Observe l'auxiliaire du passif.","exemples":[{"de":"Das Haus wird gebaut.","fr":"La maison est construite."},{"de":"Der Brief wurde geschrieben.","fr":"La lettre a été écrite."},{"de":"Das Auto muss repariert werden.","fr":"La voiture doit être réparée."}],"question":"Quel verbe sert d'auxiliaire au passif ?"},
    merke: ["Passif (processus) : *werden* + *participe II* (*wird gebaut*).","Passé : *wurde* + participe ; avec modal : *…repariert **werden***.","L'agent : *von* + datif (*von einem Architekten*)."],
    achtung: [{"erreur":"Das Haus ist gebaut. (= en cours)","correct":"Das Haus **wird** gebaut.","explication":"Passif-processus = *werden*, pas *sein* (état)."},{"erreur":"Der Brief wurde von der Chef geschrieben.","correct":"…**von dem** Chef geschrieben.","explication":"L'agent : *von* + datif (dem Chef)."}],
    kontrast: {"titre":"Le passif : allemand vs français","similitudes":["Le passif existe dans les deux (« est construit »)."],"differences":["L'allemand utilise *werden* (≠ « être ») pour le passif-processus.","*sein* + participe = état, pas processus.","L'agent se dit *von* + datif (≈ « par »)."]}, titre: "Le passif", titreDE: "Das Passiv", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Former le passif au présent", "Mettre l'accent sur l'action plutôt que l'agent"],
    grammairePoints: ["werden + participe II", "von + datif (agent)"],
    exemplesPlus: [{"de":"Das Haus wird gerade renoviert.","fr":"Passiv: *werden* + Partizip II. Wichtig ist die Handlung."},{"de":"Der Brief wurde gestern geschrieben.","fr":"Passiv im Präteritum: *wurde* + Partizip."},{"de":"Das Auto wird von einem Mechaniker repariert.","fr":"Wer es macht, steht mit *von* + Dativ."},{"de":"Hier werden viele Autos produziert.","fr":"Passiv ohne Person: wichtig ist nur die Handlung."},{"de":"Das Fenster ist schon geöffnet.","fr":"Zustandspassiv: *sein* + Partizip (das Ergebnis)."}],
    coursDE: [
      "Das **Passiv** benutzt du, wenn die **Handlung wichtiger ist als die Person**, die sie macht. Im Aktiv steht die Person im Zentrum (« *Der Mechaniker repariert das Auto* »). Im Passiv steht die Sache im Zentrum (« *Das Auto wird repariert* »).",
      "Du bildest das Passiv mit **werden + Partizip II**. Das Verb *werden* steht auf Position 2, das Partizip II steht am Satzende: « *Das Haus **wird** **gebaut*** », « *Die Briefe **werden** **geschrieben*** ». Verwechsle dieses *werden* nicht mit dem Futur.",
      "Wenn du sagen willst, **wer** die Handlung macht, benutzt du **von + Dativ**: « *Das Auto wird **von dem Mechaniker** repariert* ». Oft lässt man die Person aber weg, denn das ist ja der Sinn des Passivs.",
      "Auch in der **Vergangenheit** gibt es das Passiv: « *Das Auto **wurde** repariert* » (Präteritum) oder « *Das Auto **ist** repariert **worden*** » (Perfekt). Im Passiv-Perfekt sagt man **worden**, nicht « geworden ». Das ist ein wichtiges Detail."
    ],
    grammaire: [
      { exemples: [{"de":"Das Haus wird gerade renoviert.","fr":"La maison est en cours de rénovation."},{"de":"Die Briefe werden jeden Tag verschickt.","fr":"Les lettres sont envoyées chaque jour."}], regle: "**Passif** = **werden** (2ᵉ position) + **participe II** (fin). L'agent éventuel : **von + datif**.", attention: "Le **COD** de la phrase active devient le **sujet** au passif. Au Perfekt passif, *werden → **worden***.", titre: "werden + participe II (à la fin)", intro: "Le passif met en valeur l'ACTION. On conjugue « werden » en 2e position et on place le participe II à la fin. L'agent éventuel : « von + datif ».",
        tableau: { entetes: ["Voix", "Exemple"], lignes: [["Actif", "Der Techniker repariert das Auto."], ["Passif", "Das Auto wird repariert."], ["Passif + agent", "Das Auto wird von dem Techniker repariert."], ["Pluriel", "Die Nachrichten werden gesendet."]] },
        schemas: [{ legende: "Passif présent : werden (2) + participe (fin).", mots: [{ m: "Das Auto", r: "sujet", c: "sujet" }, { m: "wird", r: "werden (2)", c: "verbe" }, { m: "gerade", r: "complément", c: "objet" }, { m: "repariert", r: "participe (fin)", c: "fin" }] }],
        note: "Le COD de la phrase active (das Auto) devient le SUJET au passif. L'agent (souvent omis) : von + datif." },
      { titre: "Le passif à tous les temps",
        regle: "On garde toujours **werden + participe II** ; seul *werden* change de temps. Au **Perfekt**, on dit **worden** (jamais « geworden »).",
        intro: "Le participe du verbe ne bouge pas ; c'est l'auxiliaire *werden* qui porte le temps.",
        tableau: { entetes: ["Temps", "Formation", "Exemple (reparieren)"], lignes: [["Présent", "wird + PII", "Das Auto wird repariert."], ["Prétérit", "wurde + PII", "Das Auto wurde repariert."], ["Parfait", "ist + PII + worden", "Das Auto ist repariert worden."], ["Futur", "wird + PII + werden", "Das Auto wird repariert werden."], ["+ modal", "modal + PII + werden", "Das Auto muss repariert werden."]] },
        note: "Perfekt passif : *ist … **worden*** (et non « geworden »). Avec un modal, le participe + *werden* filent à la fin." },
      { titre: "L'agent : von ou durch ?",
        regle: "**von + datif** = l'**auteur** de l'action (qui la fait). **durch + accusatif** = le **moyen** ou la cause intermédiaire (par quoi).",
        intro: "*Das Fenster wurde **von einem Kind** zerbrochen* (l'auteur) vs *Die Stadt wurde **durch einen Sturm** zerstört* (le moyen).",
        tableau: { entetes: ["Marqueur", "Rôle", "Exemple"], lignes: [["von + datif", "l'auteur (qui ?)", "von dem Architekten"], ["durch + accusatif", "le moyen (par quoi ?)", "durch einen Sturm"]] },
        note: "Le plus souvent, l'agent est **omis** — c'est même tout l'intérêt du passif." },
      { titre: "Processus (werden) vs état (sein)",
        regle: "**Vorgangspassiv** (*werden* + PII) = l'**action** en cours. **Zustandspassiv** (*sein* + PII) = le **résultat**, l'état obtenu.",
        intro: "*Die Tür **wird** geöffnet* (on est en train de l'ouvrir) vs *Die Tür **ist** geöffnet* (elle est ouverte — c'est fait).",
        tableau: { entetes: ["Type", "Auxiliaire", "Sens"], lignes: [["Vorgangspassiv", "werden + PII", "l'action se déroule"], ["Zustandspassiv", "sein + PII", "l'état / le résultat"]] },
        note: "Ne confonds pas *Das Auto **wird** repariert* (on le répare) et *Das Auto **ist** repariert* (il est réparé)." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le passif présent se forme avec…", options: ["werden + participe II", "haben + participe II", "sein + infinitif"], correct: 0, explication: "Das Auto wird repariert." },
      { type: "qcm", consigne: "Mettez au passif.", question: "Actif : « Man sendet die Nachrichten. » → Die Nachrichten ___ gesendet.", options: ["werden", "wird", "sind", "haben"], correct: 0, explication: "Pluriel → werden + participe." },
      { type: "trou", consigne: "Complétez (werden).", texte: "Das Buch {0} oft gelesen.", accepte: [["wird"]], indice: "singulier → wird + participe" },
      { type: "association", consigne: "Associez l'infinitif et le participe II.", paires: [{ gauche: "reparieren", droite: "repariert" }, { gauche: "senden", droite: "gesendet" }, { gauche: "schreiben", droite: "geschrieben" }, { gauche: "bauen", droite: "gebaut" }] },
      { type: "ordre", consigne: "Construisez la phrase au passif.", mots: ["Das", "Auto", "wird", "repariert"], correct: "Das Auto wird repariert", traduction: "La voiture est réparée." },
      { type: "qcm", consigne: "Passif au Perfekt.", question: "Das Haus ist letztes Jahr gebaut ___.", options: ["worden", "geworden", "gewesen", "gehabt"], correct: 0, explication: "Perfekt passif : ist … worden (jamais « geworden »)." },
      { type: "qcm", consigne: "von ou durch ?", question: "Die Stadt wurde ___ einen Sturm zerstört.", options: ["durch", "von", "mit", "bei"], correct: 0, explication: "durch + accusatif = le moyen / la cause (un orage)." },
      { type: "trou", consigne: "Passif avec modal (fin de phrase).", texte: "Der Text muss bis morgen übersetzt {0}.", accepte: [["werden"]], indice: "modal + participe + werden" },
      { type: "qcm", consigne: "Processus ou état ?", question: "« Die Tür ist geöffnet » exprime…", options: ["un état (résultat)", "une action en cours", "le futur"], correct: 0, explication: "sein + participe = Zustandspassiv (l'état obtenu)." }
    ]
  },
  b1g12: {
    id: "b1g12",
    einstieg: {"intro":"Observe la formation du comparatif et du superlatif.","exemples":[{"de":"schnell – schneller – am schnellsten","fr":"rapide – plus rapide – le plus rapide"},{"de":"Er ist größer als ich.","fr":"Il est plus grand que moi."},{"de":"Das ist das beste Buch.","fr":"C'est le meilleur livre."}],"question":"Comment forme-t-on le comparatif et le superlatif ?"},
    merke: ["Comparatif : adjectif + *-er* (souvent + Umlaut) : *größer, älter*.","« que » (inégalité) = *als* (jamais *wie*).","Superlatif : *am …-sten* ou *der/die/das …-ste*."],
    achtung: [{"erreur":"Er ist größer wie ich.","correct":"Er ist größer **als** ich.","explication":"Après un comparatif : *als*, pas *wie*."},{"erreur":"das gutste Buch","correct":"das **beste** Buch","explication":"*gut* est irrégulier : besser – am besten."}],
    kontrast: {"titre":"Comparatif/superlatif : allemand vs français","similitudes":["Comparatif et superlatif existent dans les deux."],"differences":["Comparatif par *-er* (pas « plus + adjectif »).","« que » = *als* (inégalité) ≠ *wie* (égalité).","Umlaut fréquent (alt → älter), irréguliers (gut → besser)."]}, titre: "Adjectifs : comparatif et superlatif", titreDE: "Komparativ und Superlativ", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Former le comparatif et le superlatif", "Employer l'adjectif comparatif devant le nom"],
    grammairePoints: ["-er / am -sten", "der/die/das + -ste"],
    exemplesPlus: [{"de":"Anna ist größer als ihr Bruder.","fr":"Komparativ: *-er* + *als*."},{"de":"Heute ist es kälter als gestern.","fr":"*kalt → kälter*: oft mit Umlaut."},{"de":"Das ist das schönste Bild im Museum.","fr":"Superlativ: *der/die/das + -ste*."},{"de":"Im Sommer sind die Tage am längsten.","fr":"*am -sten*: Superlativ als Adverb."},{"de":"Mein Auto ist gut, aber deins ist besser.","fr":"Unregelmäßig: *gut → besser → am besten*."}],
    coursDE: [
      "Mit dem **Komparativ** und dem **Superlativ** vergleichst du Dinge. Der Komparativ vergleicht **zwei** Dinge (größer), der Superlativ zeigt die **Nummer eins** (am größten).",
      "Den **Komparativ** bildest du mit **-er**, und danach kommt **als** (que): « *Anna ist **größer als** Tom* ». Viele kurze Adjektive bekommen einen **Umlaut**: *alt → **älter***, *groß → **größer***, *jung → **jünger***.",
      "Den **Superlativ** bildest du mit **am … -sten** oder mit dem Artikel + **-ste**: « *Anna ist **am größten*** » oder « *Anna ist **die größte*** ». Beispiel: *schnell → schneller → am schnellsten*.",
      "Einige Formen sind **unregelmäßig** und du musst sie auswendig lernen: *gut → besser → am besten*, *viel → mehr → am meisten*, *gern → lieber → am liebsten*, *hoch → höher → am höchsten*. Für « gleich » benutzt du **so … wie**: « *Tom ist **so groß wie** Paul* »."
    ],
    grammaire: [
      { regle: "Comparatif : adjectif **+ -er** (+ **als** = que). Superlatif : **am … -sten**, ou **der/die/das … -ste** devant un nom.", attention: "Beaucoup prennent un **Umlaut** (*alt → älter*) ; irréguliers : *gut → besser → am besten*. « que » = **als**.", exemples: [{"de":"Berlin ist größer als Bonn.","fr":"Berlin est plus grand que Bonn."},{"de":"Das ist der schnellste Zug.","fr":"C'est le train le plus rapide."}], titre: "Les trois degrés", intro: "Comparatif : adjectif + -er (+ als). Superlatif : am + adjectif + -sten, ou article + adjectif + -ste devant un nom.",
        tableau: { entetes: ["Positif", "Comparatif", "Superlatif"], lignes: [["schnell", "schneller", "am schnellsten"], ["alt", "älter", "am ältesten"], ["gut", "besser", "am besten"], ["gern", "lieber", "am liebsten"], ["hoch", "höher", "am höchsten"]] },
        note: "Devant un nom, le superlatif se décline : « der schnellste Zug », « die beste Idee ». Comparatif d'égalité : so … wie." },
      { titre: "Les deux superlatifs : am -sten ou der -ste",
        regle: "**am + adjectif + -sten** = superlatif **attribut/adverbe** (invariable). **der/die/das + adjectif + -ste** = superlatif **devant un nom** (décliné).",
        intro: "*Dieser Zug ist **am schnellsten*** (attribut) vs *der **schnellste** Zug* (devant le nom).",
        tableau: { entetes: ["Emploi", "Forme", "Exemple"], lignes: [["attribut (après sein)", "am …-sten", "Anna ist am größten."], ["devant un nom (nom.)", "der/die/das …-ste", "der größte Mann"], ["devant un nom (acc.)", "den/die/das …-ste", "Ich sehe den größten Mann."], ["adverbe", "am …-sten", "Er läuft am schnellsten."]] },
        note: "Devant un nom, le superlatif se **décline** comme un adjectif (der schnellste, den schnellsten…)." },
      { titre: "Irréguliers et la terminaison -est",
        regle: "Quelques adjectifs sont **irréguliers** (à mémoriser). Les adjectifs en **-t, -d, -s, -z, -ß** insèrent un **-e-** au superlatif : *am ält**e**sten*.",
        intro: "*gut → besser → am besten* ; *alt → älter → am ält**e**sten*.",
        tableau: { entetes: ["Positif", "Comparatif", "Superlatif"], lignes: [["gut", "besser", "am besten"], ["viel", "mehr", "am meisten"], ["gern", "lieber", "am liebsten"], ["hoch", "höher", "am höchsten"], ["nah", "näher", "am nächsten"], ["alt (-t)", "älter", "am ältesten"]] },
        note: "Comparatif d'**égalité** : *so … wie* (aussi … que) — « Tom ist so groß wie Paul »." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le comparatif de supériorité se construit avec…", options: ["adjectif + -er + als", "so + adjectif + wie", "am + -sten"], correct: 0, explication: "schneller als = plus rapide que." },
      { type: "qcm", consigne: "Comparatif de « gut ».", question: "Mein Auto ist ___ als deins.", options: ["besser", "guter", "gutter", "am besten"], correct: 0, explication: "gut → besser (irrégulier)." },
      { type: "trou", consigne: "Complétez (superlatif).", texte: "Der ICE ist der {0} Zug. (schnell)", accepte: [["schnellste"]], indice: "der + -ste devant le nom" },
      { type: "association", consigne: "Associez positif et comparatif.", paires: [{ gauche: "alt", droite: "älter" }, { gauche: "gut", droite: "besser" }, { gauche: "gern", droite: "lieber" }, { gauche: "hoch", droite: "höher" }] },
      { type: "traduction", consigne: "Traduisez.", source: "Berlin est plus grand que Munich.", accepte: ["Berlin ist größer als München"], aide: "groß → größer … als" },
      { type: "qcm", consigne: "Superlatif adverbe.", question: "Wer läuft ___? — Anna.", options: ["am schnellsten", "der schnellste", "schneller", "am schnellste"], correct: 0, explication: "adverbe → am schnellsten." },
      { type: "trou", consigne: "Superlatif avec -est (adjectif en -t).", texte: "Der Winter ist die {0} Jahreszeit. (kalt)", accepte: [["kälteste"]], indice: "kalt → -t donc -est + Umlaut : kälteste" },
      { type: "qcm", consigne: "Égalité.", question: "« Tom est aussi grand que Paul » = Tom ist so groß ___ Paul.", options: ["wie", "als", "denn", "so"], correct: 0, explication: "égalité → so … wie." }
    ]
  },
  b1g13: {
    id: "b1g13",
    einstieg: {"intro":"Observe la marque de la possession et certaines prépositions.","exemples":[{"de":"das Auto meines Bruders","fr":"la voiture de mon frère"},{"de":"während des Sommers","fr":"pendant l'été"},{"de":"trotz des Regens","fr":"malgré la pluie"}],"question":"Quelles prépositions exigent le génitif ?"},
    merke: ["Génitif : possession (*des Bruders*, *der Frau*).","Prépositions + génitif : *während, wegen, trotz, statt*.","Masc./neutre : *des* + nom en *-s/-es* ; fém./pluriel : *der*."],
    achtung: [{"erreur":"wegen dem Regen (soigné)","correct":"wegen **des** Regens","explication":"*wegen* régit le génitif à l'écrit."},{"erreur":"das Auto meines Bruder","correct":"das Auto meines **Bruders**","explication":"Génitif masculin : le nom prend *-s*."}],
    kontrast: {"titre":"Le génitif : allemand vs français","similitudes":["« de » marque la possession dans les deux."],"differences":["Cas dédié (des/der) + *-s* au nom masc./neutre.","Des prépositions régissent le génitif (während, trotz, wegen).","À l'oral, *von* + datif remplace souvent le génitif."]}, titre: "Le génitif", titreDE: "Der Genitiv", theme: "Grammaire", type: "grammaire", duree: 40, niveau: "B1",
    objectifs: ["Exprimer l'appartenance avec le génitif", "Employer les prépositions à génitif"],
    grammairePoints: ["des Mannes, der Frau", "wegen, trotz, während (+ Gen.)"],
    exemplesPlus: [{"de":"Das ist das Auto meines Vaters.","fr":"Genitiv: *des Vaters* zeigt, wem etwas gehört."},{"de":"Die Farbe der Wand gefällt mir.","fr":"*der Wand*: Genitiv feminin."},{"de":"Wegen des schlechten Wetters bleiben wir zu Hause.","fr":"*wegen* + Genitiv: der Grund."},{"de":"Trotz der Kälte gehen wir spazieren.","fr":"*trotz* + Genitiv."},{"de":"Während des Films habe ich geschlafen.","fr":"*während* + Genitiv: in dieser Zeit."}],
    coursDE: [
      "Der **Genitiv** zeigt, wem etwas **gehört** (Wessen?). Im Französischen ist das oft « de » (« la voiture **du** père »). Der Genitiv ist der vierte Kasus. Beim Sprechen ist er seltener, aber beim Schreiben ist er wichtig.",
      "Die Artikel im Genitiv sind: maskulin und neutral **des**, feminin und Plural **der**. Wichtig: Bei maskulinen und neutralen Nomen bekommt das Nomen ein **-s** oder **-es**: « *das Auto **des Mannes*** », « *das Buch **des Kindes*** ». Bei femininen Nomen ändert sich das Nomen nicht: « *das Auto **der Frau*** ».",
      "Mit einem **Namen** ist es einfach: du hängst ein **-s** an, ohne Apostroph: « ***Annas** Auto* », « ***Peters** Buch* ». Beim Sprechen benutzt man oft **von + Dativ** statt Genitiv: « *das Auto **von** meinem Vater* ». Das ist auch korrekt und sehr häufig.",
      "Einige **Präpositionen** brauchen den Genitiv: **wegen** (à cause de), **trotz** (malgré), **während** (pendant), **(an)statt** (au lieu de). Beispiel: « ***Wegen** des Wetters bleiben wir zu Hause* ». Lerne diese vier Präpositionen mit dem Genitiv zusammen."
    ],
    grammaire: [
      { exemples: [{"de":"Trotz des schlechten Wetters fahren wir.","fr":"Malgré le mauvais temps, nous partons."},{"de":"Das ist die Meinung der Experten.","fr":"C'est l'avis des experts."}], regle: "Le **génitif** marque l'appartenance : masc./neutre **des …(e)s**, fém./pluriel **der**. Prépositions : *wegen, trotz, während, statt*.", attention: "À l'oral on dit souvent **von + datif** (*das Auto **von** dem Mann*).", titre: "Le cas de l'appartenance", intro: "Le génitif indique à qui appartient quelque chose. Masc./neutre : des + nom + -(e)s. Fém./pluriel : der.",
        tableau: { entetes: ["Genre", "Article", "Exemple"], lignes: [["masculin", "des …(e)s", "das Auto des Mannes"], ["neutre", "des …(e)s", "die Farbe des Hauses"], ["féminin", "der", "das Buch der Frau"], ["pluriel", "der", "die Zimmer der Kinder"], ["prépositions", "+ génitif", "wegen des Wetters, trotz der Kälte"]] },
        note: "À l'oral, on remplace souvent le génitif par « von + datif » : « das Auto von dem Mann ». Prépositions à génitif : wegen (à cause de), trotz (malgré), während (pendant)." },
      { titre: "Les articles au génitif",
        regle: "Masc./neutre → **des / eines** (+ **-s/-es** au nom) ; fém./pluriel → **der / einer** (nom inchangé).",
        intro: "Le nom masc./neutre prend **-s** (mots longs) ou **-es** (mots courts d'une syllabe) : *des Autos*, *des Kindes*.",
        tableau: { entetes: ["Genre", "Défini", "Indéfini", "Exemple"], lignes: [["masculin", "des", "eines", "des/eines Mannes"], ["féminin", "der", "einer", "der/einer Frau"], ["neutre", "des", "eines", "des/eines Kindes"], ["pluriel", "der", "— (keiner)", "der Kinder"]] },
        note: "Mots d'une syllabe → **-es** (des Kindes, des Mannes) ; mots longs → **-s** (des Autos, des Lehrers)." },
      { titre: "Prépositions à génitif (et l'oral)",
        regle: "Quatre prépositions courantes régissent le génitif à l'écrit : **wegen** (à cause de), **trotz** (malgré), **während** (pendant), **(an)statt** (au lieu de).",
        intro: "À l'oral / familier, on entend souvent le **datif** (*wegen dem Regen*), et pour la possession **von + datif** (*das Auto von meinem Vater*).",
        tableau: { entetes: ["Préposition", "Sens", "Exemple"], lignes: [["wegen", "à cause de", "wegen des Staus"], ["trotz", "malgré", "trotz des Regens"], ["während", "pendant", "während der Woche"], ["(an)statt", "au lieu de", "statt eines Kaffees"]] },
        note: "Registre : **génitif** à l'écrit soigné ; **von + datif** / datif à l'oral courant." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Le génitif exprime…", options: ["l'appartenance", "le lieu où l'on va", "le moment précis"], correct: 0, explication: "das Auto des Mannes = la voiture de l'homme." },
      { type: "qcm", consigne: "Choisissez (masculin génitif).", question: "Das ist das Auto ___ Mannes.", options: ["des", "der", "dem", "den"], correct: 0, explication: "masculin génitif → des + -(e)s." },
      { type: "trou", consigne: "Complétez (wegen + génitif).", texte: "Wegen {0} Wetters bleiben wir zu Hause.", accepte: [["des"]], indice: "wegen + génitif, neutre das Wetter → des" },
      { type: "association", consigne: "Associez la préposition et son sens.", paires: [{ gauche: "wegen", droite: "à cause de" }, { gauche: "trotz", droite: "malgré" }, { gauche: "während", droite: "pendant" }, { gauche: "statt", droite: "au lieu de" }] },
      { type: "traduction", consigne: "Traduisez.", source: "C'est la voiture de la femme.", accepte: ["Das ist das Auto der Frau"], aide: "féminin génitif → der Frau" },
      { type: "trou", consigne: "Génitif -es (mot d'une syllabe).", texte: "Die Farbe {0} Kindes ist blau. (das Kind)", accepte: [["des"]], indice: "neutre → des + Kindes (-es)" },
      { type: "qcm", consigne: "Registre oral.", question: "À l'oral, « la voiture de mon père » se dit souvent…", options: ["das Auto von meinem Vater", "das Auto der Vater", "das Auto meinem Vater"], correct: 0, explication: "À l'oral : von + datif (l'écrit soigné dirait « meines Vaters »)." }
    ]
  },
  b1g14: {
    id: "b1g14",
    einstieg: {"intro":"Observe le pronom qui relie les deux propositions.","exemples":[{"de":"Der Mann, der dort steht, ist mein Vater.","fr":"L'homme qui est là est mon père."},{"de":"Das Buch, das ich lese, ist gut.","fr":"Le livre que je lis est bon."},{"de":"die Frau, mit der ich spreche","fr":"la femme avec qui je parle"}],"question":"Comment choisir le pronom relatif et son cas ?"},
    merke: ["Relatif = *der/die/das* (pluriel *die*), accordé en *genre/nombre* avec l'antécédent.","Son *cas* dépend de sa fonction *dans la relative*.","Relative = subordonnée → verbe à la *fin*, virgules obligatoires."],
    achtung: [{"erreur":"Das Buch, das ich lese ist gut.","correct":"Das Buch, das ich lese**,** ist gut.","explication":"La relative est encadrée de virgules ; verbe à la fin."},{"erreur":"Die Frau, mit die ich spreche","correct":"Die Frau, mit **der** ich spreche","explication":"Après *mit* (datif), le relatif féminin est *der*."}],
    kontrast: {"titre":"Les relatives : allemand vs français","similitudes":["« qui/que/dont » introduisent une relative."],"differences":["Le relatif allemand se *décline* (der/den/dem/dessen).","Son cas vient de sa fonction dans la relative.","Verbe en fin + virgules obligatoires."]}, titre: "Les propositions relatives", titreDE: "Relativsätze", theme: "Grammaire", type: "grammaire", duree: 45, niveau: "B1",
    objectifs: ["Relier deux phrases avec un pronom relatif", "Choisir le pronom (nominatif/accusatif/datif, avec préposition)"],
    grammairePoints: ["der/die/das relatifs", "préposition + pronom relatif"],
    exemplesPlus: [{"de":"Das ist der Mann, der nebenan wohnt.","fr":"Relativpronomen *der* im Nominativ."},{"de":"Die Frau, die ich gestern traf, ist Lehrerin.","fr":"*die* im Akkusativ (Objekt)."},{"de":"Das Kind, dem ich geholfen habe, lacht wieder.","fr":"*dem* im Dativ (helfen + Dativ)."},{"de":"Der Freund, mit dem ich reise, kommt aus Wien.","fr":"Präposition + Relativpronomen: *mit dem*."},{"de":"Das ist das Buch, das mir am besten gefällt.","fr":"*das*: Nominativ neutrum."}],
    coursDE: [
      "Ein **Relativsatz** gibt mehr Informationen über ein Nomen. Er beginnt mit einem **Relativpronomen** (*der, die, das*) und – sehr wichtig – das **Verb steht am Ende** des Relativsatzes. Beispiel: « *Das ist der Mann, **der** in Berlin **wohnt*** ».",
      "Das Relativpronomen hat das **Genus und den Numerus** des Nomens (maskulin, feminin, neutral oder Plural). Aber den **Kasus** bekommt es von seiner **Funktion im Relativsatz**. Das ist der schwierige, aber logische Teil.",
      "Vergleiche: « *Der Mann, **der** dort steht* » (Nominativ: der Mann ist Subjekt) und « *Der Mann, **den** ich kenne* » (Akkusativ: der Mann ist Objekt). Das Pronomen ist also *der* oder *den*, je nach Funktion im Nebensatz.",
      "Wenn das Verb eine **Präposition** braucht, steht die Präposition **vor** dem Relativpronomen: « *Der Bus, **auf den** ich warte* », « *Die Frau, **mit der** ich spreche* ». Vergiss nie die zwei Regeln: das Verb am Ende und ein Komma vor dem Relativsatz."
    ],
    grammaire: [
      { regle: "Le **pronom relatif** reprend le nom en **genre/nombre**, mais prend le **cas** de sa fonction. Le **verbe va à la fin**.", attention: "Avec préposition, celle-ci **précède** le pronom : *der Kollege, **mit dem** ich arbeite*.", exemples: [{"de":"Das ist die Frau, die hier arbeitet.","fr":"C'est la femme qui travaille ici."},{"de":"Der Film, den ich sah, war gut.","fr":"Le film que j'ai vu était bon."}], titre: "Le pronom relatif = article + verbe à la fin", intro: "Le pronom relatif reprend le nom (genre/nombre) mais prend le CAS de sa fonction dans la relative. Le verbe va à la fin. Avec préposition, celle-ci précède le pronom.",
        tableau: { entetes: ["Cas", "masculin", "féminin", "neutre", "pluriel"], lignes: [["Nominatif", "der", "die", "das", "die"], ["Accusatif", "den", "die", "das", "die"], ["Datif", "dem", "der", "dem", "denen"]] },
        schemas: [{ legende: "Relative : virgule, pronom relatif, … verbe à la FIN.", mots: [{ m: "Das ist der Mann,", r: "principale", c: "objet" }, { m: "der", r: "relatif (nom.)", c: "conj" }, { m: "Deutsch", r: "complément", c: "sujet" }, { m: "spricht", r: "verbe (fin)", c: "fin" }] }],
        note: "Avec préposition : « der Kollege, mit dem ich arbeite » (mit + datif). La préposition reste collée au pronom." },
      { titre: "Tableau complet des pronoms relatifs",
        regle: "Le pronom relatif **ressemble à l'article défini**, sauf au **génitif** (dessen/deren) et au **datif pluriel** (denen).",
        intro: "Genre et nombre viennent du **nom** ; le **cas** vient de la **fonction** dans la relative.",
        tableau: { entetes: ["Cas", "masculin", "féminin", "neutre", "pluriel"], lignes: [["Nominatif", "der", "die", "das", "die"], ["Accusatif", "den", "die", "das", "die"], ["Datif", "dem", "der", "dem", "denen"], ["Génitif", "dessen", "deren", "dessen", "deren"]] },
        note: "Seules 4 formes diffèrent de l'article : **dessen, deren** (génitif) et **denen** (datif pluriel)." },
      { titre: "Le génitif relatif : dessen / deren (= dont)",
        regle: "Pour l'appartenance (« dont »), on emploie **dessen** (antécédent masc./neutre) et **deren** (fém./pluriel). Le nom qui suit **n'a pas d'article**.",
        intro: "*Der Mann, **dessen** Auto rot ist* (dont la voiture…). *Die Frau, **deren** Sohn hier wohnt* (dont le fils…).",
        tableau: { entetes: ["Antécédent", "Relatif", "Exemple"], lignes: [["masculin", "dessen", "der Mann, dessen Auto…"], ["féminin", "deren", "die Frau, deren Sohn…"], ["neutre", "dessen", "das Kind, dessen Spielzeug…"], ["pluriel", "deren", "die Leute, deren Haus…"]] },
        note: "*dessen/deren* sont invariables et le nom suivant ne prend **pas** d'article (*dessen Auto*, non « dessen das Auto »)." },
      { titre: "was et wo (relatifs particuliers)",
        regle: "**was** remplace le relatif après *alles, etwas, nichts, das*, ou reprend **toute une phrase**. **wo** relie un **lieu**.",
        intro: "*Alles, **was** ich habe* (tout ce que j'ai). *Die Stadt, **wo** ich wohne* (= in der ich wohne).",
        tableau: { entetes: ["Mot", "Emploi", "Exemple"], lignes: [["was", "après alles/etwas/nichts/das", "Das ist alles, was ich weiß."], ["was", "reprend toute une phrase", "Er kam zu spät, was mich ärgerte."], ["wo", "un lieu (= in dem/der)", "Das Café, wo wir uns trafen."]] },
        note: "*wo* peut remplacer *préposition + relatif* pour un lieu : *die Stadt, in der / **wo** ich wohne*." }
    ],
    exercices: [
      { type: "qcm", cat: "comp", consigne: "Choisissez.", question: "Dans une relative, le verbe conjugué se place…", options: ["à la fin", "en 2e position", "au début"], correct: 0, explication: "Comme toute subordonnée." },
      { type: "qcm", consigne: "Choisissez le pronom.", question: "Das ist die Frau, ___ hier arbeitet.", options: ["die", "der", "das", "den"], correct: 0, explication: "die Frau, sujet → nominatif féminin = die." },
      { type: "trou", consigne: "Complétez (der/den).", texte: "Der Film, {0} ich gesehen habe, war gut.", accepte: [["den"]], indice: "COD masculin → accusatif = den" },
      { type: "association", consigne: "Associez le nom et son pronom relatif au nominatif.", paires: [{ gauche: "der Mann", droite: "der" }, { gauche: "die Frau", droite: "die" }, { gauche: "das Kind", droite: "das" }, { gauche: "die Leute", droite: "die" }] },
      { type: "ordre", consigne: "Construisez la relative (avec préposition).", mots: ["mit", "dem", "ich", "arbeite"], correct: "mit dem ich arbeite", traduction: "avec qui je travaille" },
      { type: "trou", consigne: "Génitif relatif (masculin).", texte: "Der Mann, {0} Auto vor der Tür steht, ist mein Nachbar.", accepte: [["dessen"]], indice: "dont (masc.) → dessen" },
      { type: "trou", consigne: "Génitif relatif (féminin).", texte: "Die Kollegin, {0} Büro neben meinem ist, heißt Anna.", accepte: [["deren"]], indice: "dont (fém.) → deren" },
      { type: "qcm", consigne: "Choisissez le relatif.", question: "Das ist alles, ___ ich weiß.", options: ["was", "das", "dass", "wie"], correct: 0, explication: "Après « alles », on emploie « was »." },
      { type: "trou", consigne: "Relatif de lieu.", texte: "Das ist die Stadt, {0} ich geboren bin.", accepte: [["wo"]], indice: "un lieu → wo (= in der)" }
    ]
  }
});
