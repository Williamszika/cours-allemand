/* =====================================================================
   MODULE A1.1 — Les fondations (Grundlagen)
   Cours d'allemand intensif. Méthode communicative (GER/CECRL),
   inspirée des manuels utilisés en Allemagne (Menschen, Schritte,
   Netzwerk). Explications en français, contenu en allemand.
   ===================================================================== */
window.MODULE_A11 = {
  id: "a1-1",
  titre: "A1.1 — Les fondations",
  sousTitre: "Grundlagen",
  description:
    "Premiers contacts avec l'allemand : se présenter, compter, parler de soi, " +
    "de son travail et de ses loisirs, réserver une chambre, s'orienter et commander au restaurant.",
  couleur: "#1d4ed8",
  lecons: [
    /* ---------------------------------------------------------------- */
    {
      id: "l01",
      rp: {
        "scene": "Erstes Treffen — Première rencontre",
        "intro": "Tu rencontres Zika pour la première fois. Réponds-lui en allemand.",
        "tours": [
          {
            "de": "Hallo! Wie heißt du?",
            "fr": "Salut ! Comment t'appelles-tu ?",
            "bravo": "Enchanté !",
            "options": [
              {
                "de": "Ich heiße Sofia.",
                "ok": true
              },
              {
                "de": "Mir geht es gut.",
                "hint": "Zika demande ton NOM, pas comment tu vas. Commence par « Ich heiße… »."
              },
              {
                "de": "Ich komme aus Spanien.",
                "hint": "Là tu dis ton pays. Zika veut ton nom : « Ich heiße… »."
              }
            ]
          },
          {
            "de": "Woher kommst du?",
            "fr": "D'où viens-tu ?",
            "bravo": "Super !",
            "options": [
              {
                "de": "Ich komme aus Italien.",
                "ok": true
              },
              {
                "de": "Ich bin Lehrerin.",
                "hint": "Ça, c'est ta profession. Pour l'origine : « Ich komme aus… »."
              },
              {
                "de": "Ich wohne hier.",
                "hint": "« wohnen » = habiter. Pour l'origine, utilise « kommen aus »."
              }
            ]
          },
          {
            "de": "Und wo wohnst du jetzt?",
            "fr": "Et où habites-tu maintenant ?",
            "bravo": "Parfait !",
            "options": [
              {
                "de": "Ich wohne in Berlin.",
                "ok": true
              },
              {
                "de": "Ich komme aus Berlin.",
                "hint": "Ici il faut « wohnen in » (habiter à), pas « kommen aus »."
              }
            ]
          }
        ],
        "fin": "Bravo ! Tu sais te présenter en allemand."
      },
      vocCours: [
        "Ce premier champ lexical réunit les **formules de salutation** et les mots pour **se présenter** — la base de tout premier contact. Distingue les salutations selon le **moment** : *Guten Morgen* (le matin), *Guten Tag* (la journée), *Guten Abend* (le soir), et le passe-partout familier *Hallo*.",
        "Fais surtout attention au **registre**. *Tschüss* et *Hallo* sont **familiers** : on les emploie avec des amis, des collègues proches, des jeunes. *Auf Wiedersehen* et *Guten Tag* sont **polis** et conviennent partout (commerce, administration, inconnus). En cas de doute, choisis la forme polie : elle est toujours correcte.",
        "Quelques verbes clés structurent la présentation : *heißen* (s'appeler), *kommen aus* (venir de), *wohnen in* (habiter à), *sein* (être). Mémorise-les avec leur **petite construction** : *kommen* va avec *aus* (« *Ich komme **aus** Frankreich* »), *wohnen* avec *in* (« *Ich wohne **in** Berlin* »).",
        "Astuce : apprends ces mots **par paires de dialogue** (question → réponse), car c'est ainsi qu'ils fonctionnent : « *Wie heißt du? – Ich heiße…* », « *Woher kommst du? – Ich komme aus…* ». Répète-les à voix haute : ce sont les premières phrases que tu utiliseras vraiment."
      ],
      numero: 1,
      titre: "Se présenter",
      titreDE: "Sich vorstellen",
      theme: "Se présenter / pays / professions",
      duree: 45,
      objectifs: [
        "Saluer et prendre congé",
        "Dire son nom, son origine et où l'on habite",
        "Poser des questions simples (Wie? Woher? Wo?)"
      ],
      grammairePoints: ["Pronoms personnels", "sein, heißen, kommen, wohnen au présent"],
      vocabulaire: [
        { de: "Hallo", fr: "Salut / Bonjour", ex: "Hallo, ich bin Anna." },
        { de: "Guten Tag", fr: "Bonjour (journée)", ex: "Guten Tag, Frau Meyer!" },
        { de: "Guten Morgen", fr: "Bonjour (matin)", ex: "Guten Morgen zusammen!" },
        { de: "Guten Abend", fr: "Bonsoir", ex: "Guten Abend, Herr Klein." },
        { de: "Auf Wiedersehen", fr: "Au revoir", ex: "Auf Wiedersehen!" },
        { de: "Tschüss", fr: "Salut (au revoir)", ex: "Tschüss, bis morgen!" },
        { de: "der Name", fr: "le nom", ex: "Mein Name ist Tom." },
        { de: "heißen", fr: "s'appeler", ex: "Ich heiße Lena." },
        { de: "kommen", fr: "venir", ex: "Ich komme aus Frankreich." },
        { de: "wohnen", fr: "habiter", ex: "Wir wohnen in Berlin." },
        { de: "sein", fr: "être", ex: "Ich bin Student." },
        { de: "das Land", fr: "le pays", ex: "Welches Land ist das?" },
        { de: "ja", fr: "oui", ex: "Ja, genau!" },
        { de: "nein", fr: "non", ex: "Nein, danke." },
        { de: "danke", fr: "merci", ex: "Danke schön!" },
        { de: "bitte", fr: "s'il vous plaît / je vous en prie", ex: "Bitte schön." }
      ],
      grammaire: [
        { attention: "Ne confonds pas **sie** (elle/ils, minuscule) et **Sie** (vous de politesse, **toujours** majuscule).",
          titre: "Les pronoms personnels (Personalpronomen)",
          intro:
            "Le pronom personnel indique qui fait l'action. Il détermine la terminaison du verbe.",
          tableau: {
            entetes: ["Pronom", "Traduction"],
            lignes: [
              ["ich", "je"],
              ["du", "tu"],
              ["er / sie / es", "il / elle / (neutre)"],
              ["wir", "nous"],
              ["ihr", "vous (familier, pluriel)"],
              ["sie / Sie", "ils-elles / vous (poli)"]
            ]
          },
          note:
            "« Sie » avec majuscule = vouvoiement poli (singulier ou pluriel). « sie » minuscule = elle / ils-elles."
        },
        {
          titre: "Le présent : verbes réguliers et le verbe « sein »",
          intro:
            "Au présent, on enlève le -en de l'infinitif (komm-en → komm-) puis on ajoute la terminaison.",
          tableau: {
            entetes: ["Pronom", "komm-en", "wohn-en", "heiß-en", "sein (irrég.)"],
            lignes: [
              ["ich", "komme", "wohne", "heiße", "bin"],
              ["du", "kommst", "wohnst", "heißt", "bist"],
              ["er/sie/es", "kommt", "wohnt", "heißt", "ist"],
              ["wir", "kommen", "wohnen", "heißen", "sind"],
              ["ihr", "kommt", "wohnt", "heißt", "seid"],
              ["sie/Sie", "kommen", "wohnen", "heißen", "sind"]
            ]
          },
          note:
            "« sein » (être) est irrégulier : apprenez-le par cœur. C'est le verbe le plus utilisé."
        }
      ],
      dialogue: {
        titre: "Erstes Treffen (Première rencontre)",
        lieu: "Im Sprachkurs (au cours de langue)",
        lignes: [
          { loc: "Anna", de: "Hallo! Ich heiße Anna. Und du?", fr: "Salut ! Je m'appelle Anna. Et toi ?" },
          { loc: "Tom", de: "Hallo Anna! Ich bin Tom. Woher kommst du?", fr: "Salut Anna ! Je suis Tom. D'où viens-tu ?" },
          { loc: "Anna", de: "Ich komme aus Österreich, aus Wien. Und du?", fr: "Je viens d'Autriche, de Vienne. Et toi ?" },
          { loc: "Tom", de: "Ich komme aus Frankreich. Ich wohne jetzt in Berlin.", fr: "Je viens de France. J'habite maintenant à Berlin." },
          { loc: "Anna", de: "Schön! Berlin ist toll.", fr: "Super ! Berlin est génial." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la forme correcte du verbe.",
          question: "Woher ___ du? — Ich komme aus Italien.",
          options: ["kommst", "komme", "kommt", "kommen"],
          correct: 0,
          explication: "Avec « du », la terminaison est -st : du kommst."
        },
        {
          type: "qcm",
          consigne: "Choisissez la salutation adaptée au matin.",
          question: "Il est 8h du matin, vous saluez un collègue :",
          options: ["Guten Morgen!", "Guten Abend!", "Gute Nacht!", "Auf Wiedersehen!"],
          correct: 0,
          explication: "Le matin, on dit « Guten Morgen »."
        },
        {
          type: "trou",
          consigne: "Complétez avec le bon pronom personnel.",
          texte: "{0} heiße Lena und {1} komme aus Spanien.",
          accepte: [["ich"], ["ich"]],
          indice: "1re personne du singulier"
        },
        {
          type: "conjugaison",
          consigne: "Conjuguez « wohnen » (habiter) au présent.",
          verbe: "wohnen",
          items: [
            { pronom: "ich", reponse: "wohne" },
            { pronom: "du", reponse: "wohnst" },
            { pronom: "er/sie/es", reponse: "wohnt" },
            { pronom: "wir", reponse: "wohnen" },
            { pronom: "ihr", reponse: "wohnt" },
            { pronom: "sie/Sie", reponse: "wohnen" }
          ]
        },
        {
          type: "ordre",
          consigne: "Remettez les mots dans l'ordre pour former une phrase.",
          mots: ["Ich", "komme", "aus", "Deutschland"],
          correct: "Ich komme aus Deutschland",
          traduction: "Je viens d'Allemagne."
        },
        {
          type: "ecoute",
          consigne: "Écoutez (🔊) et choisissez ce que vous entendez.",
          audio: "Ich wohne in Berlin",
          options: ["Ich wohne in Berlin", "Ich komme aus Berlin", "Ich heiße Berlin"],
          correct: 0
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je m'appelle Thomas et je viens de France.",
          accepte: [
            "Ich heiße Thomas und ich komme aus Frankreich",
            "Ich heiße Thomas und komme aus Frankreich"
          ],
          aide: "heißen / kommen aus"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l02",
      vocCours: [
        "Ce vocabulaire couvre l'**alphabet** et les **nombres**, indispensables pour épeler son nom, donner un numéro ou un prix. L'alphabet ressemble au français, mais certaines lettres se prononcent très différemment : *e* se dit « é », *i* comme « ie », *j* « yot », *v* « fau », *w* « vé » et *z* « tsett ».",
        "N'oublie pas les caractères propres à l'allemand : les **Umlaute** *ä, ö, ü* et le **ß** (*Eszett*, prononcé comme « ss »). Pour épeler *ä*, on peut dire « *a-Umlaut* ».",
        "Pour les **nombres**, une particularité déroute les francophones : à partir de 21, on dit l'**unité avant la dizaine**, reliées par *und* : *einundzwanzig* = « un-et-vingt » (21), *dreiundvierzig* (43). On lit donc le nombre « à l'envers ».",
        "Conseil : entraîne-toi avec des **données réelles** — ton numéro de téléphone, ton code postal, des prix. Compter à voix haute de 0 à 20 chaque jour ancre les bases ; ensuite les dizaines (*zwanzig, dreißig, vierzig…*) se combinent facilement."
      ],
      numero: 2,
      titre: "L'alphabet et les chiffres",
      titreDE: "Das Alphabet und die Zahlen",
      theme: "L'alphabet et les chiffres",
      duree: 45,
      objectifs: [
        "Épeler son nom (buchstabieren)",
        "Compter de 0 à 100",
        "Donner un numéro de téléphone et un âge"
      ],
      grammairePoints: ["W-Fragen (questions en W)", "Verbe sein avec les nombres"],
      vocabulaire: [
        { de: "das Alphabet", fr: "l'alphabet", ex: "Das Alphabet hat 26 Buchstaben." },
        { de: "buchstabieren", fr: "épeler", ex: "Buchstabieren Sie bitte!" },
        { de: "der Buchstabe", fr: "la lettre", ex: "Der erste Buchstabe ist A." },
        { de: "die Zahl", fr: "le nombre", ex: "Welche Zahl ist das?" },
        { de: "die Nummer", fr: "le numéro", ex: "Wie ist deine Nummer?" },
        { de: "die Telefonnummer", fr: "le numéro de téléphone", ex: "Meine Telefonnummer ist..." },
        { de: "das Alter", fr: "l'âge", ex: "Wie ist dein Alter?" },
        { de: "null", fr: "zéro", ex: "null Komma fünf" },
        { de: "eins", fr: "un", ex: "eins, zwei, drei" },
        { de: "zehn", fr: "dix", ex: "zehn Euro" },
        { de: "zwanzig", fr: "vingt", ex: "zwanzig Jahre" },
        { de: "hundert", fr: "cent", ex: "hundert Prozent" },
        { de: "die Umlaute (ä, ö, ü)", fr: "les voyelles infléchies", ex: "ä = a-Umlaut" },
        { de: "das Eszett (ß)", fr: "le « s dur »", ex: "ß = scharfes S" }
      ],
      grammaire: [
        { attention: "**eins** devient **ein** devant un nom (*ein Buch*) ; et *sechs/sieben* → **sechzehn/siebzehn** (on perd le -s/-en).",
          titre: "Les nombres de 0 à 20 (Die Zahlen)",
          intro: "Les nombres de base à mémoriser. Attention : on dit l'unité AVANT la dizaine à partir de 21.",
          tableau: {
            entetes: ["Chiffre", "Allemand", "Chiffre", "Allemand"],
            lignes: [
              ["0", "null", "11", "elf"],
              ["1", "eins", "12", "zwölf"],
              ["2", "zwei", "13", "dreizehn"],
              ["3", "drei", "14", "vierzehn"],
              ["4", "vier", "15", "fünfzehn"],
              ["5", "fünf", "16", "sechzehn"],
              ["6", "sechs", "17", "siebzehn"],
              ["7", "sieben", "18", "achtzehn"],
              ["8", "acht", "19", "neunzehn"],
              ["9", "neun", "20", "zwanzig"],
              ["10", "zehn", "100", "hundert"]
            ]
          },
          note:
            "21 = einundzwanzig (un-et-vingt), 35 = fünfunddreißig (cinq-et-trente). On lit de droite à gauche !"
        },
        {
          titre: "Les questions en W (W-Fragen)",
          intro: "Les mots interrogatifs commencent souvent par W. Le verbe est en 2e position.",
          tableau: {
            entetes: ["Mot", "Sens", "Exemple"],
            lignes: [
              ["Wie?", "Comment ?", "Wie heißt du?"],
              ["Wer?", "Qui ?", "Wer ist das?"],
              ["Was?", "Quoi ?", "Was ist das?"],
              ["Woher?", "D'où ?", "Woher kommst du?"],
              ["Wo?", "Où ?", "Wo wohnst du?"],
              ["Wie viel?", "Combien ?", "Wie alt bist du?"]
            ]
          },
          note: "« Wie alt bist du? » = Quel âge as-tu ? (litt. « Comment vieux es-tu ? »)"
        }
      ],
      dialogue: {
        titre: "Am Telefon (au téléphone)",
        lieu: "Anmeldung (inscription)",
        lignes: [
          { loc: "Sekretärin", de: "Guten Tag, wie heißen Sie?", fr: "Bonjour, comment vous appelez-vous ?" },
          { loc: "Herr Schäfer", de: "Mein Name ist Schäfer.", fr: "Mon nom est Schäfer." },
          { loc: "Sekretärin", de: "Buchstabieren Sie bitte!", fr: "Épelez s'il vous plaît !" },
          { loc: "Herr Schäfer", de: "S-C-H-Ä-F-E-R. Schäfer.", fr: "S-C-H-A umlaut-F-E-R. Schäfer." },
          { loc: "Sekretärin", de: "Und Ihre Telefonnummer?", fr: "Et votre numéro de téléphone ?" },
          { loc: "Herr Schäfer", de: "Null-eins-sieben-sechs ...", fr: "Zéro-un-sept-six ..." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Quel nombre entendez-vous ?",
          question: "« siebzehn » correspond à :",
          options: ["17", "70", "7", "16"],
          correct: 0,
          explication: "siebzehn = 17. (70 = siebzig, 7 = sieben.)"
        },
        {
          type: "qcm",
          consigne: "Comment lit-on 24 en allemand ?",
          question: "24 =",
          options: ["vierundzwanzig", "zwanzigvier", "zwanzigundvier", "zweiundvierzig"],
          correct: 0,
          explication: "On dit l'unité d'abord : vier-und-zwanzig (4 et 20)."
        },
        {
          type: "trou",
          consigne: "Écrivez le nombre en lettres (allemand).",
          texte: "8 = {0}",
          accepte: [["acht"]],
          indice: "huit"
        },
        {
          type: "association",
          consigne: "Associez le chiffre et le mot allemand.",
          paires: [
            { gauche: "3", droite: "drei" },
            { gauche: "12", droite: "zwölf" },
            { gauche: "20", droite: "zwanzig" },
            { gauche: "15", droite: "fünfzehn" },
            { gauche: "100", droite: "hundert" }
          ]
        },
        {
          type: "ecoute",
          consigne: "Écoutez (🔊) le mot interrogatif et choisissez sa traduction.",
          audio: "Woher",
          options: ["D'où ?", "Où ?", "Comment ?", "Qui ?"],
          correct: 0
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Quel âge as-tu ?",
          accepte: ["Wie alt bist du", "Wie alt bist du?"],
          aide: "alt = vieux"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l03",
      rp: {
        "scene": "Im Café — Au café",
        "intro": "Tu discutes de langues et de pays avec Zika.",
        "tours": [
          {
            "de": "Welche Sprachen sprichst du?",
            "fr": "Quelles langues parles-tu ?",
            "bravo": "Super, deux langues !",
            "options": [
              {
                "de": "Ich spreche Französisch und Englisch.",
                "ok": true
              },
              {
                "de": "Ich wohne in Frankreich.",
                "hint": "Là tu dis où tu habites. Pour les langues : « Ich spreche… »."
              },
              {
                "de": "Ich heiße Paul.",
                "hint": "Zika demande tes LANGUES. Utilise « Ich spreche… »."
              }
            ]
          },
          {
            "de": "Sprichst du auch Deutsch?",
            "fr": "Parles-tu aussi allemand ?",
            "bravo": "Très bien, tu apprends justement !",
            "options": [
              {
                "de": "Ja, ein bisschen.",
                "ok": true
              },
              {
                "de": "Nein, danke.",
                "hint": "« Nein, danke » sert à refuser. Ici réponds plutôt « Ja, ein bisschen » (oui, un peu)."
              }
            ]
          },
          {
            "de": "Woher kommst du?",
            "fr": "D'où viens-tu ?",
            "bravo": "La Suisse, génial !",
            "options": [
              {
                "de": "Ich komme aus der Schweiz.",
                "ok": true
              },
              {
                "de": "Ich gehe nach Hause.",
                "hint": "Pour l'origine : « Ich komme aus… »."
              }
            ]
          }
        ],
        "fin": "Super ! Tu parles de langues et d'origines."
      },
      vocCours: [
        "Ce champ lexical relie **pays**, **nationalités** et **langues**. Bonne nouvelle : le nom de beaucoup de langues est identique à l'adjectif de nationalité au neutre : *Deutsch*, *Französisch*, *Englisch*, *Spanisch*.",
        "Maîtrise deux questions essentielles : **Woher?** (d'où ?) appelle *aus* (« *Ich komme **aus** Italien* »), tandis que **Wo?** (où ?) appelle *in* (« *Ich wohne **in** Italien* »). C'est la base pour parler de ses origines et de son lieu de vie.",
        "Attention au **genre des pays** : la plupart sont neutres et s'emploient **sans article** (*Deutschland, Frankreich, Italien*), mais certains prennent l'article : *die Schweiz*, *die Türkei*, *die USA* (pluriel). Avec ceux-là : *in **der** Schweiz*, *in **die** Türkei*.",
        "Pour le verbe *sprechen* (parler), souviens-toi qu'il change de voyelle (*du sprichst*, *er spricht*). Mémorise d'abord les langues qui te concernent, et associe chaque pays à un fait personnel — plus facile à retenir qu'une liste abstraite."
      ],
      numero: 3,
      titre: "Langues et pays",
      titreDE: "Sprachen und Länder",
      theme: "Langues et pays",
      duree: 45,
      objectifs: [
        "Nommer des pays et des nationalités",
        "Dire quelles langues on parle",
        "Utiliser le verbe « sprechen »"
      ],
      grammairePoints: ["Verbe sprechen (changement de voyelle)", "in / aus + pays"],
      vocabulaire: [
        { de: "das Land", fr: "le pays", ex: "Deutschland ist ein Land." },
        { de: "die Sprache", fr: "la langue", ex: "Deutsch ist eine Sprache." },
        { de: "sprechen", fr: "parler", ex: "Ich spreche Französisch." },
        { de: "Deutschland — Deutsch", fr: "Allemagne — allemand", ex: "In Deutschland spricht man Deutsch." },
        { de: "Frankreich — Französisch", fr: "France — français", ex: "Sie spricht Französisch." },
        { de: "Österreich", fr: "Autriche", ex: "Wien ist in Österreich." },
        { de: "die Schweiz", fr: "la Suisse", ex: "Ich wohne in der Schweiz." },
        { de: "England — Englisch", fr: "Angleterre — anglais", ex: "Englisch ist international." },
        { de: "Spanien — Spanisch", fr: "Espagne — espagnol", ex: "Er lernt Spanisch." },
        { de: "Italien — Italienisch", fr: "Italie — italien", ex: "Italienisch klingt schön." },
        { de: "die Muttersprache", fr: "la langue maternelle", ex: "Meine Muttersprache ist Arabisch." },
        { de: "lernen", fr: "apprendre", ex: "Wir lernen Deutsch." },
        { de: "ein bisschen", fr: "un peu", ex: "Ich spreche ein bisschen Deutsch." },
        { de: "man", fr: "on", ex: "In Italien spricht man Italienisch." }
      ],
      grammaire: [
        { attention: "Le changement de voyelle ne touche **que** *du* et *er/sie/es* (*du **sprichst***) ; *wir/ihr/sie* gardent *sprechen*.",
          titre: "Le verbe « sprechen » (parler) — verbe à changement de voyelle",
          intro:
            "Certains verbes changent leur voyelle aux 2e et 3e personnes du singulier : e → i.",
          tableau: {
            entetes: ["Pronom", "sprechen", "Remarque"],
            lignes: [
              ["ich", "spreche", "—"],
              ["du", "sprichst", "e → i"],
              ["er/sie/es", "spricht", "e → i"],
              ["wir", "sprechen", "—"],
              ["ihr", "sprecht", "—"],
              ["sie/Sie", "sprechen", "—"]
            ]
          },
          note: "Même schéma pour « essen » (manger : du isst) et « nehmen » (prendre : du nimmst)."
        },
        {
          titre: "Pays : « in » (où ?) et « aus » (d'où ?)",
          intro: "La plupart des pays sont neutres et sans article. On dit alors :",
          tableau: {
            entetes: ["Question", "Préposition", "Exemple"],
            lignes: [
              ["Wo? (où ?)", "in", "Ich wohne in Deutschland."],
              ["Woher? (d'où ?)", "aus", "Ich komme aus Italien."]
            ]
          },
          note:
            "Exceptions avec article : die Schweiz, die Türkei, die USA → in der Schweiz / aus der Schweiz."
        }
      ],
      dialogue: {
        titre: "Im Café (au café)",
        lieu: "Internationales Treffen",
        lignes: [
          { loc: "Maria", de: "Welche Sprachen sprichst du?", fr: "Quelles langues parles-tu ?" },
          { loc: "Yusuf", de: "Ich spreche Türkisch, Deutsch und ein bisschen Englisch.", fr: "Je parle turc, allemand et un peu anglais." },
          { loc: "Maria", de: "Toll! Ich spreche Spanisch und lerne jetzt Deutsch.", fr: "Super ! Je parle espagnol et j'apprends l'allemand maintenant." },
          { loc: "Yusuf", de: "Woher kommst du?", fr: "D'où viens-tu ?" },
          { loc: "Maria", de: "Aus Mexiko. Und du?", fr: "Du Mexique. Et toi ?" },
          { loc: "Yusuf", de: "Aus der Türkei, aber ich wohne in Köln.", fr: "De Turquie, mais j'habite à Cologne." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez la forme correcte.",
          question: "Du ___ sehr gut Deutsch!",
          options: ["sprichst", "sprechst", "sprechen", "spricht"],
          correct: 0,
          explication: "« sprechen » change e → i : du sprichst."
        },
        {
          type: "association",
          consigne: "Associez le pays et sa langue.",
          paires: [
            { gauche: "Deutschland", droite: "Deutsch" },
            { gauche: "Frankreich", droite: "Französisch" },
            { gauche: "Spanien", droite: "Spanisch" },
            { gauche: "Italien", droite: "Italienisch" },
            { gauche: "England", droite: "Englisch" }
          ]
        },
        {
          type: "trou",
          consigne: "Complétez avec « in » ou « aus ».",
          texte: "Ich komme {0} Portugal, aber ich wohne {1} Deutschland.",
          accepte: [["aus"], ["in"]],
          indice: "Woher → aus ; Wo → in"
        },
        {
          type: "conjugaison",
          consigne: "Conjuguez « sprechen » au présent.",
          verbe: "sprechen",
          items: [
            { pronom: "ich", reponse: "spreche" },
            { pronom: "du", reponse: "sprichst" },
            { pronom: "er/sie/es", reponse: "spricht" },
            { pronom: "wir", reponse: "sprechen" },
            { pronom: "ihr", reponse: "sprecht" },
            { pronom: "sie/Sie", reponse: "sprechen" }
          ]
        },
        {
          type: "ordre",
          consigne: "Remettez la phrase dans l'ordre.",
          mots: ["In", "Österreich", "spricht", "man", "Deutsch"],
          correct: "In Österreich spricht man Deutsch",
          traduction: "En Autriche, on parle allemand."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je parle un peu allemand.",
          accepte: ["Ich spreche ein bisschen Deutsch"],
          aide: "ein bisschen"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l04",
      vocCours: [
        "Ce vocabulaire permet de parler des **personnes de ton entourage** et de tes **loisirs**. Ici apparaît un petit mot très utile : **gern**, qui exprime le **goût** après un verbe : « *Ich spiele **gern** Fußball* », « *Ich lese **gern*** ».",
        "Pour nuancer, retiens l'échelle : *nicht gern* (ne pas aimer) < *gern* (aimer) < *sehr gern* (beaucoup aimer) < *am liebsten* (préférer par-dessus tout). Avec *gern*, tu exprimes déjà tes préférences sans connaître le verbe « aimer ».",
        "Les noms de loisirs sont souvent des **emprunts internationaux** (*das Hobby*, *der Sport*, *die Musik*), faciles à mémoriser. Apprends-les avec un verbe d'action : *Musik **hören***, *Sport **machen***, *Freunde **treffen*** (retrouver des amis).",
        "Astuce : construis **deux ou trois phrases sur toi-même** (« *In meiner Freizeit…* »). Le vocabulaire qu'on relie à sa propre vie se retient bien mieux que des mots isolés."
      ],
      numero: 4,
      titre: "Personnes et loisirs",
      titreDE: "Personen und Hobbys",
      theme: "Personnes et loisirs",
      duree: 50,
      objectifs: [
        "Parler de ses loisirs",
        "Exprimer ce qu'on aime faire (gern)",
        "Présenter d'autres personnes"
      ],
      grammairePoints: ["Verbes + gern", "er/sie (3e personne)"],
      vocabulaire: [
        { de: "das Hobby", fr: "le loisir", ex: "Mein Hobby ist Lesen." },
        { de: "die Freizeit", fr: "le temps libre", ex: "In der Freizeit lese ich." },
        { de: "spielen", fr: "jouer", ex: "Ich spiele Fußball." },
        { de: "lesen", fr: "lire", ex: "Er liest gern Bücher." },
        { de: "hören", fr: "écouter", ex: "Sie hört Musik." },
        { de: "die Musik", fr: "la musique", ex: "Ich liebe Musik." },
        { de: "der Sport", fr: "le sport", ex: "Sport ist gesund." },
        { de: "schwimmen", fr: "nager", ex: "Wir schwimmen gern." },
        { de: "tanzen", fr: "danser", ex: "Sie tanzt sehr gut." },
        { de: "kochen", fr: "cuisiner", ex: "Ich koche gern italienisch." },
        { de: "reisen", fr: "voyager", ex: "Er reist viel." },
        { de: "gern", fr: "volontiers / aimer (faire)", ex: "Ich spiele gern Tennis." },
        { de: "der Freund / die Freundin", fr: "l'ami / l'amie", ex: "Das ist meine Freundin." },
        { de: "die Familie", fr: "la famille", ex: "Meine Familie ist groß." }
      ],
      grammaire: [
        { attention: "**gern** se place **après** le verbe : *Ich spiele **gern** Fußball* (et non avant comme en français).",
          titre: "Exprimer le goût : verbe + « gern »",
          intro:
            "Pour dire qu'on aime FAIRE quelque chose, on place « gern » après le verbe. Pas besoin d'un verbe « aimer » !",
          tableau: {
            entetes: ["Phrase", "Sens"],
            lignes: [
              ["Ich spiele gern Fußball.", "J'aime jouer au foot."],
              ["Sie liest gern.", "Elle aime lire."],
              ["Wir tanzen gern.", "Nous aimons danser."],
              ["Ich spiele nicht gern Tennis.", "Je n'aime pas jouer au tennis."]
            ]
          },
          note: "Plus fort : « sehr gern » (beaucoup) ; contraire : « nicht gern » (ne pas aimer)."
        },
        {
          titre: "Le verbe « lesen » (lire) — e → ie",
          intro: "Comme « sprechen », « lesen » change de voyelle au singulier (e → ie).",
          tableau: {
            entetes: ["Pronom", "lesen", "sehen (voir)"],
            lignes: [
              ["ich", "lese", "sehe"],
              ["du", "liest", "siehst"],
              ["er/sie/es", "liest", "sieht"],
              ["wir", "lesen", "sehen"],
              ["ihr", "lest", "seht"],
              ["sie/Sie", "lesen", "sehen"]
            ]
          },
          note: "du liest = tu lis (un seul « s » à l'oral, le -t suffit)."
        }
      ],
      dialogue: {
        titre: "Hobbys (les loisirs)",
        lieu: "In der Pause (pendant la pause)",
        lignes: [
          { loc: "Lena", de: "Was machst du gern in der Freizeit?", fr: "Qu'aimes-tu faire pendant ton temps libre ?" },
          { loc: "Paul", de: "Ich spiele gern Gitarre und höre Musik. Und du?", fr: "J'aime jouer de la guitare et écouter de la musique. Et toi ?" },
          { loc: "Lena", de: "Ich lese gern und ich koche sehr gern.", fr: "J'aime lire et j'aime beaucoup cuisiner." },
          { loc: "Paul", de: "Kochst du oft?", fr: "Tu cuisines souvent ?" },
          { loc: "Lena", de: "Ja, jeden Tag! Mein Freund kocht nicht gern.", fr: "Oui, tous les jours ! Mon copain n'aime pas cuisiner." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Que signifie « Ich tanze gern »?",
          question: "Ich tanze gern.",
          options: ["J'aime danser.", "Je danse maintenant.", "Je ne danse pas.", "Je veux danser."],
          correct: 0,
          explication: "verbe + gern = aimer faire quelque chose."
        },
        {
          type: "trou",
          consigne: "Complétez avec le verbe « lesen » à la bonne forme.",
          texte: "Er {0} gern Krimis (des romans policiers).",
          accepte: [["liest"]],
          indice: "3e personne : e → ie"
        },
        {
          type: "association",
          consigne: "Associez l'activité et sa traduction.",
          paires: [
            { gauche: "schwimmen", droite: "nager" },
            { gauche: "kochen", droite: "cuisiner" },
            { gauche: "tanzen", droite: "danser" },
            { gauche: "reisen", droite: "voyager" },
            { gauche: "Musik hören", droite: "écouter de la musique" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase.",
          mots: ["Ich", "spiele", "gern", "Fußball"],
          correct: "Ich spiele gern Fußball",
          traduction: "J'aime jouer au foot."
        },
        {
          type: "ecoute",
          consigne: "Écoutez (🔊) et choisissez la phrase correcte.",
          audio: "Sie hört gern Musik",
          options: ["Sie hört gern Musik", "Sie spielt gern Musik", "Er hört gern Musik"],
          correct: 0
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Nous aimons voyager.",
          accepte: ["Wir reisen gern"],
          aide: "reisen + gern"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l05",
      rp: {
        "scene": "Im Büro — Au bureau",
        "intro": "Zika te pose des questions sur ton travail.",
        "tours": [
          {
            "de": "Was sind Sie von Beruf?",
            "fr": "Quelle est votre profession ?",
            "bravo": "Intéressant !",
            "options": [
              {
                "de": "Ich bin Ingenieur.",
                "ok": true
              },
              {
                "de": "Ich bin ein Ingenieur.",
                "hint": "Pour un métier, PAS d'article : « Ich bin Ingenieur » (sans « ein »)."
              },
              {
                "de": "Ich habe Hunger.",
                "hint": "Ça veut dire « j'ai faim » ! Pour le métier : « Ich bin… »."
              }
            ]
          },
          {
            "de": "Wo arbeiten Sie?",
            "fr": "Où travaillez-vous ?",
            "bravo": "Très bien !",
            "options": [
              {
                "de": "Ich arbeite bei Siemens.",
                "ok": true
              },
              {
                "de": "Ich arbeite gut.",
                "hint": "Zika demande OÙ. Utilise « Ich arbeite bei… » (chez) ou « in… »."
              }
            ]
          },
          {
            "de": "Macht Ihnen die Arbeit Spaß?",
            "fr": "Votre travail vous plaît-il ?",
            "bravo": "Ça fait plaisir !",
            "options": [
              {
                "de": "Ja, sehr!",
                "ok": true
              },
              {
                "de": "Ich bin müde.",
                "hint": "Réponds à la question : « Ja, sehr! » (oui, beaucoup) ou « Nein, nicht so. »"
              }
            ]
          }
        ],
        "fin": "Bravo ! Tu sais parler de ton travail."
      },
      vocCours: [
        "Ce champ lexical porte sur le **travail** et les **professions**. Point important : les métiers ont une forme masculine et une forme féminine, cette dernière en ajoutant le plus souvent **-in** : *der Lehrer → die Lehrer**in***, *der Arzt → die Ärzt**in***.",
        "Pour dire son métier, l'allemand n'utilise **pas d'article** : « *Ich bin Lehrer* » (et non « ~~ein Lehrer~~ »). C'est une nette différence avec le français. La question est « *Was sind Sie von Beruf?* ».",
        "Tu rencontreras l'**article indéfini** *ein/eine* et les **possessifs** *mein/dein*, utiles pour parler de « mon travail », « mon bureau », « mon collègue ». Apprends *der Kollege* (collègue) et *der Chef* (patron) : ils reviennent sans cesse.",
        "Conseil : regroupe le vocabulaire par **lieu** (*das Büro*, *die Firma*, *die Fabrik*) et par **activité**. Associe ton propre métier (réel ou souhaité) à ce champ lexical pour le rendre concret et mémorable."
      ],
      numero: 5,
      titre: "Le travail, le lieu de travail",
      titreDE: "Arbeit und Arbeitsplatz",
      theme: "Le travail, le lieu de travail",
      duree: 50,
      objectifs: [
        "Nommer des professions",
        "Dire où l'on travaille",
        "Utiliser les adjectifs possessifs mein / dein"
      ],
      grammairePoints: ["Articles indéfinis ein/eine", "Possessifs mein/dein", "als + profession"],
      vocabulaire: [
        { de: "die Arbeit", fr: "le travail", ex: "Die Arbeit beginnt um 9 Uhr." },
        { de: "der Beruf", fr: "la profession", ex: "Was ist Ihr Beruf?" },
        { de: "arbeiten", fr: "travailler", ex: "Ich arbeite in einem Büro." },
        { de: "der Arzt / die Ärztin", fr: "le médecin", ex: "Sie ist Ärztin." },
        { de: "der Lehrer / die Lehrerin", fr: "l'enseignant(e)", ex: "Er ist Lehrer." },
        { de: "der Ingenieur", fr: "l'ingénieur", ex: "Mein Vater ist Ingenieur." },
        { de: "der Student / die Studentin", fr: "l'étudiant(e)", ex: "Ich bin Studentin." },
        { de: "das Büro", fr: "le bureau", ex: "Das Büro ist groß." },
        { de: "die Firma", fr: "l'entreprise", ex: "Die Firma heißt Siemens." },
        { de: "das Krankenhaus", fr: "l'hôpital", ex: "Sie arbeitet im Krankenhaus." },
        { de: "die Schule", fr: "l'école", ex: "Er arbeitet in einer Schule." },
        { de: "der Kollege / die Kollegin", fr: "le/la collègue", ex: "Mein Kollege ist nett." },
        { de: "der Chef / die Chefin", fr: "le/la chef", ex: "Die Chefin ist streng." }
      ],
      grammaire: [
        { attention: "À l'accusatif, *ein* (masc.) devient **einen** : *Ich habe **einen** Hund* ; *eine* et *ein* (neutre) ne changent pas.",
          titre: "L'article indéfini : ein / eine (un / une)",
          intro: "Pour dire la profession, on utilise souvent SANS article : « Ich bin Lehrer. »",
          tableau: {
            entetes: ["Genre", "Article", "Exemple"],
            lignes: [
              ["masculin (der)", "ein", "ein Arzt"],
              ["féminin (die)", "eine", "eine Ärztin"],
              ["neutre (das)", "ein", "ein Büro"]
            ]
          },
          note:
            "Profession : « Ich bin Arzt. » (sans article). Mais : « Das ist ein Arzt. » (présentation)."
        },
        {
          titre: "Les adjectifs possessifs : mein / dein",
          intro: "Ils s'accordent au genre du nom qui suit (comme ein/eine).",
          tableau: {
            entetes: ["Possesseur", "masc./neutre", "féminin/pluriel"],
            lignes: [
              ["mon / ma (ich)", "mein Beruf", "meine Arbeit"],
              ["ton / ta (du)", "dein Chef", "deine Firma"],
              ["votre (Sie)", "Ihr Büro", "Ihre Kollegin"]
            ]
          },
          note: "mein → meine devant un nom féminin ou un pluriel."
        }
      ],
      dialogue: {
        titre: "Was sind Sie von Beruf? (Quelle est votre profession ?)",
        lieu: "Beim Networking",
        lignes: [
          { loc: "Frau Weber", de: "Was sind Sie von Beruf?", fr: "Quelle est votre profession ?" },
          { loc: "Herr Bauer", de: "Ich bin Ingenieur. Und Sie?", fr: "Je suis ingénieur. Et vous ?" },
          { loc: "Frau Weber", de: "Ich bin Ärztin. Ich arbeite im Krankenhaus.", fr: "Je suis médecin. Je travaille à l'hôpital." },
          { loc: "Herr Bauer", de: "Interessant! Wo ist Ihre Firma?", fr: "Intéressant ! Où est votre entreprise ?" },
          { loc: "Frau Weber", de: "In München. Mein Büro ist im Zentrum.", fr: "À Munich. Mon bureau est dans le centre." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez l'article indéfini correct.",
          question: "Das ist ___ Ärztin.",
          options: ["eine", "ein", "einen", "der"],
          correct: 0,
          explication: "« Ärztin » est féminin (die) → eine."
        },
        {
          type: "qcm",
          consigne: "Choisissez le possessif correct.",
          question: "Wo ist ___ Büro? (à toi)",
          options: ["dein", "deine", "mein", "Ihre"],
          correct: 0,
          explication: "« Büro » est neutre (das) → dein."
        },
        {
          type: "trou",
          consigne: "Complétez avec « mein » ou « meine ».",
          texte: "{0} Chef ist nett, aber {1} Arbeit ist schwer.",
          accepte: [["mein"], ["meine"]],
          indice: "der Chef (m) / die Arbeit (f)"
        },
        {
          type: "association",
          consigne: "Associez la profession et le lieu de travail.",
          paires: [
            { gauche: "die Ärztin", droite: "das Krankenhaus" },
            { gauche: "der Lehrer", droite: "die Schule" },
            { gauche: "die Sekretärin", droite: "das Büro" },
            { gauche: "der Student", droite: "die Universität" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase.",
          mots: ["Ich", "arbeite", "in", "einem", "Büro"],
          correct: "Ich arbeite in einem Büro",
          traduction: "Je travaille dans un bureau."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je suis enseignant.",
          accepte: ["Ich bin Lehrer", "Ich bin Lehrerin"],
          aide: "sans article !"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l06",
      vocCours: [
        "Ce vocabulaire combine les **loisirs** et l'expression de l'**heure**. Pour l'heure courante, l'allemand compte souvent par rapport à la demie : *halb drei* signifie « deux heures et demie » (littéralement « la moitié vers trois »), ce qui surprend les francophones.",
        "Tu verras ici des **verbes à particule séparable** (*aufstehen* se lever, *fernsehen* regarder la télé, *einkaufen* faire les courses). Retiens que la particule **se détache** : « *Ich sehe abends **fern*** ». C'est une famille de mots très productive.",
        "Distingue *die Zeit* (le temps qui passe), *die Freizeit* (le temps libre) et *die Uhrzeit* (l'heure). Pour demander l'heure : « *Wie spät ist es?* » ou « *Wie viel Uhr ist es?* ».",
        "Astuce : associe chaque activité à un **moment** (*am Morgen, am Abend, am Wochenende*). Décrire ta propre journée type avec ces mots crée un récit personnel qui fixe durablement le vocabulaire."
      ],
      numero: 6,
      titre: "Le temps libre",
      titreDE: "Die Freizeit",
      theme: "Temps libre",
      duree: 50,
      objectifs: [
        "Dire l'heure (Uhrzeit)",
        "Nommer les jours de la semaine",
        "Utiliser les verbes à particule séparable"
      ],
      grammairePoints: ["Verbes à particule séparable", "Uhrzeit (l'heure)", "Wann?"],
      vocabulaire: [
        { de: "die Uhr", fr: "l'heure / la montre", ex: "Wie viel Uhr ist es?" },
        { de: "die Zeit", fr: "le temps", ex: "Ich habe keine Zeit." },
        { de: "der Tag", fr: "le jour", ex: "Schönen Tag!" },
        { de: "die Woche", fr: "la semaine", ex: "Die Woche hat sieben Tage." },
        { de: "Montag", fr: "lundi", ex: "Am Montag arbeite ich." },
        { de: "Samstag", fr: "samedi", ex: "Am Samstag schlafe ich lange." },
        { de: "Sonntag", fr: "dimanche", ex: "Am Sonntag ruhe ich mich aus." },
        { de: "aufstehen", fr: "se lever", ex: "Ich stehe um 7 Uhr auf." },
        { de: "einkaufen", fr: "faire les courses", ex: "Wir kaufen am Samstag ein." },
        { de: "fernsehen", fr: "regarder la télé", ex: "Er sieht abends fern." },
        { de: "anrufen", fr: "appeler (tél.)", ex: "Ich rufe dich an." },
        { de: "ankommen", fr: "arriver", ex: "Der Zug kommt um 8 an." },
        { de: "die Stunde", fr: "l'heure (durée)", ex: "Eine Stunde hat 60 Minuten." },
        { de: "halb", fr: "demie", ex: "Es ist halb drei (14h30)." }
      ],
      grammaire: [
        { attention: "Le préfixe se détache et part **à la fin** : *Ich **stehe** um sieben **auf*** (et non « ich aufstehe »).",
          titre: "Les verbes à particule séparable (trennbare Verben)",
          intro:
            "Beaucoup de verbes ont un préfixe (auf-, ein-, an-, fern-) qui se SÉPARE et part à la fin de la phrase.",
          tableau: {
            entetes: ["Infinitif", "Phrase", "Sens"],
            lignes: [
              ["aufstehen", "Ich stehe um 7 Uhr auf.", "Je me lève à 7h."],
              ["einkaufen", "Wir kaufen am Samstag ein.", "Nous faisons les courses samedi."],
              ["fernsehen", "Er sieht gern fern.", "Il aime regarder la télé."],
              ["anrufen", "Ich rufe dich an.", "Je t'appelle."]
            ]
          },
          note: "Le préfixe (auf, ein, an, fern...) saute toujours à la FIN de la phrase au présent."
        },
        {
          titre: "Dire l'heure (Die Uhrzeit) — langage courant",
          intro: "À l'oral, on utilise « nach » (après) et « vor » (avant), et « halb » (demie).",
          tableau: {
            entetes: ["Heure", "Allemand courant", "Sens littéral"],
            lignes: [
              ["13:00", "Es ist eins / ein Uhr.", "Il est une heure."],
              ["13:15", "Es ist Viertel nach eins.", "Et quart après une."],
              ["13:30", "Es ist halb zwei.", "« demie vers deux » !"],
              ["13:45", "Es ist Viertel vor zwei.", "Moins le quart avant deux."]
            ]
          },
          note:
            "⚠️ « halb zwei » = 13h30 (la demie EN ROUTE vers 2), pas 2h30 ! Piège classique pour les francophones."
        }
      ],
      dialogue: {
        titre: "Am Wochenende (le week-end)",
        lieu: "Telefongespräch",
        lignes: [
          { loc: "Sara", de: "Was machst du am Samstag?", fr: "Que fais-tu samedi ?" },
          { loc: "Jan", de: "Ich stehe spät auf und kaufe dann ein.", fr: "Je me lève tard puis je fais les courses." },
          { loc: "Sara", de: "Und am Abend?", fr: "Et le soir ?" },
          { loc: "Jan", de: "Am Abend sehe ich fern oder ich rufe Freunde an.", fr: "Le soir je regarde la télé ou j'appelle des amis." },
          { loc: "Sara", de: "Rufst du mich um halb acht an?", fr: "Tu m'appelles à 19h30 ?" },
          { loc: "Jan", de: "Ja, klar!", fr: "Oui, bien sûr !" }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Où va la particule séparable ?",
          question: "Ich ___ um 7 Uhr ___ . (aufstehen)",
          options: ["stehe ... auf", "aufstehe ... —", "auf ... stehe", "stehe auf ... —"],
          correct: 0,
          explication: "Le verbe conjugué en 2e position, la particule « auf » à la fin."
        },
        {
          type: "qcm",
          consigne: "Quelle heure est « halb zwei » ?",
          question: "halb zwei =",
          options: ["13:30", "14:30", "12:30", "01:00"],
          correct: 0,
          explication: "halb zwei = la demie vers 2 = 13h30 (ou 1h30)."
        },
        {
          type: "trou",
          consigne: "Complétez avec le verbe séparable « einkaufen ».",
          texte: "Wir {0} am Samstag {1}.",
          accepte: [["kaufen"], ["ein"]],
          indice: "verbe conjugué + particule à la fin"
        },
        {
          type: "association",
          consigne: "Associez le jour et sa traduction.",
          paires: [
            { gauche: "Montag", droite: "lundi" },
            { gauche: "Mittwoch", droite: "mercredi" },
            { gauche: "Freitag", droite: "vendredi" },
            { gauche: "Samstag", droite: "samedi" },
            { gauche: "Sonntag", droite: "dimanche" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase (verbe séparable).",
          mots: ["Er", "sieht", "abends", "fern"],
          correct: "Er sieht abends fern",
          traduction: "Il regarde la télé le soir."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je me lève à sept heures.",
          accepte: ["Ich stehe um sieben Uhr auf", "Ich stehe um 7 Uhr auf"],
          aide: "aufstehen (séparable)"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l07",
      rp: {
        "scene": "An der Rezeption — À la réception de l'hôtel",
        "intro": "Tu arrives à l'hôtel. Zika est le réceptionniste.",
        "tours": [
          {
            "de": "Guten Abend! Haben Sie eine Reservierung?",
            "fr": "Bonsoir ! Avez-vous une réservation ?",
            "bravo": "Un instant, s'il vous plaît…",
            "options": [
              {
                "de": "Ja, auf den Namen Klein.",
                "ok": true
              },
              {
                "de": "Nein, ich heiße gut.",
                "hint": "« Ich heiße gut » n'a pas de sens. Réponds « Ja, auf den Namen… » (au nom de…)."
              }
            ]
          },
          {
            "de": "Möchten Sie ein Einzelzimmer oder ein Doppelzimmer?",
            "fr": "Voulez-vous une chambre simple ou double ?",
            "bravo": "Très bien, une chambre simple.",
            "options": [
              {
                "de": "Ein Einzelzimmer, bitte.",
                "ok": true
              },
              {
                "de": "Ich möchte einen Kaffee.",
                "hint": "Zika parle de la CHAMBRE. Choisis « ein Einzelzimmer » ou « ein Doppelzimmer »."
              }
            ]
          },
          {
            "de": "Hier ist Ihr Schlüssel. Gute Nacht!",
            "fr": "Voici votre clé. Bonne nuit !",
            "bravo": "Dormez bien !",
            "options": [
              {
                "de": "Vielen Dank! Gute Nacht!",
                "ok": true
              },
              {
                "de": "Auf Wiedersehen, guten Morgen!",
                "hint": "C'est le soir : réponds « Gute Nacht! », pas « guten Morgen »."
              }
            ]
          }
        ],
        "fin": "Parfait ! Tu sais arriver à l'hôtel."
      },
      vocCours: [
        "Ce champ lexical est **fonctionnel** : il te prépare à **réserver et séjourner à l'hôtel**. Le mot central est *das Zimmer* (la chambre), décliné en *das Einzelzimmer* (chambre simple) et *das Doppelzimmer* (chambre double) — de beaux **noms composés** où le dernier élément (*Zimmer*) donne le sens et le genre.",
        "Deux outils de langue dominent. D'abord *es gibt* (il y a) + accusatif, pour dire ce que propose l'hôtel : « *Es gibt **einen** Pool* ». Ensuite le verbe poli *möchten* (j'aimerais) : « *Ich **möchte** ein Zimmer reservieren* ».",
        "Mémorise les **équipements** (*das Frühstück* petit-déjeuner, *das Bad* salle de bain, *der Schlüssel* clé, *die Rezeption* réception) et des verbes utiles : *reservieren, buchen* (réserver), *bezahlen* (payer).",
        "Conseil : entraîne-toi en jouant **le dialogue à la réception** dans les deux rôles. Ce vocabulaire très concret devient immédiatement utilisable en voyage dès qu'on le met en scène."
      ],
      numero: 7,
      titre: "À l'hôtel",
      titreDE: "Im Hotel",
      theme: "À l'hôtel",
      duree: 50,
      objectifs: [
        "Réserver une chambre",
        "Comprendre les prix et les services",
        "Utiliser « es gibt » + accusatif"
      ],
      grammairePoints: ["es gibt + accusatif", "möchten (politesse)", "haben"],
      vocabulaire: [
        { de: "das Hotel", fr: "l'hôtel", ex: "Das Hotel ist im Zentrum." },
        { de: "das Zimmer", fr: "la chambre", ex: "Ich brauche ein Zimmer." },
        { de: "das Einzelzimmer", fr: "la chambre simple", ex: "Ein Einzelzimmer, bitte." },
        { de: "das Doppelzimmer", fr: "la chambre double", ex: "Wir möchten ein Doppelzimmer." },
        { de: "die Nacht", fr: "la nuit", ex: "Für zwei Nächte." },
        { de: "reservieren", fr: "réserver", ex: "Ich möchte reservieren." },
        { de: "frei", fr: "libre / disponible", ex: "Ist ein Zimmer frei?" },
        { de: "das Frühstück", fr: "le petit-déjeuner", ex: "Mit Frühstück, bitte." },
        { de: "der Schlüssel", fr: "la clé", ex: "Hier ist Ihr Schlüssel." },
        { de: "die Rezeption", fr: "la réception", ex: "Die Rezeption ist offen." },
        { de: "kosten", fr: "coûter", ex: "Was kostet das Zimmer?" },
        { de: "der Preis", fr: "le prix", ex: "Der Preis ist gut." },
        { de: "möchten", fr: "vouloir / aimerais", ex: "Ich möchte ein Zimmer." },
        { de: "es gibt", fr: "il y a", ex: "Es gibt einen Lift." }
      ],
      grammaire: [
        { attention: "**es gibt** est suivi de l'**accusatif** : *Es gibt **einen** Park* (masculin → einen).",
          titre: "« es gibt » + accusatif (il y a)",
          intro:
            "« es gibt » est toujours suivi de l'accusatif. À l'accusatif, seul le masculin change : der → den, ein → einen.",
          tableau: {
            entetes: ["Genre", "Nominatif", "Accusatif (après es gibt)"],
            lignes: [
              ["masculin", "ein Lift", "Es gibt einen Lift."],
              ["féminin", "eine Bar", "Es gibt eine Bar."],
              ["neutre", "ein Restaurant", "Es gibt ein Restaurant."],
              ["pluriel", "Zimmer", "Es gibt Zimmer."]
            ]
          },
          note: "Le masculin est le seul à changer à l'accusatif : ein → einen, der → den."
        },
        {
          titre: "Le verbe poli « möchten » (j'aimerais)",
          intro: "« möchten » sert à exprimer un souhait poliment. Le 2e verbe (s'il y a) va à l'infinitif, à la fin.",
          tableau: {
            entetes: ["Pronom", "möchten", "Exemple"],
            lignes: [
              ["ich", "möchte", "Ich möchte ein Zimmer."],
              ["du", "möchtest", "Möchtest du Kaffee?"],
              ["er/sie/es", "möchte", "Sie möchte reservieren."],
              ["wir", "möchten", "Wir möchten bleiben."],
              ["ihr", "möchtet", "Möchtet ihr essen?"],
              ["sie/Sie", "möchten", "Möchten Sie Frühstück?"]
            ]
          },
          note: "ich et er/sie/es ont la MÊME forme : möchte (pas de -t)."
        }
      ],
      dialogue: {
        titre: "An der Rezeption (à la réception)",
        lieu: "Hotel Adler",
        lignes: [
          { loc: "Gast", de: "Guten Tag, haben Sie ein Zimmer frei?", fr: "Bonjour, avez-vous une chambre libre ?" },
          { loc: "Rezeption", de: "Ja. Einzel- oder Doppelzimmer?", fr: "Oui. Chambre simple ou double ?" },
          { loc: "Gast", de: "Ein Einzelzimmer für zwei Nächte, bitte.", fr: "Une chambre simple pour deux nuits, s'il vous plaît." },
          { loc: "Rezeption", de: "Das macht 90 Euro mit Frühstück.", fr: "Cela fait 90 euros avec petit-déjeuner." },
          { loc: "Gast", de: "Gut. Gibt es WLAN?", fr: "Bien. Y a-t-il le wifi ?" },
          { loc: "Rezeption", de: "Ja, es gibt kostenloses WLAN. Hier ist Ihr Schlüssel.", fr: "Oui, il y a le wifi gratuit. Voici votre clé." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez l'accusatif correct.",
          question: "Es gibt ___ Lift im Hotel.",
          options: ["einen", "ein", "eine", "den"],
          correct: 0,
          explication: "« der Lift » est masculin → accusatif : einen Lift."
        },
        {
          type: "qcm",
          consigne: "Choisissez la forme correcte de « möchten ».",
          question: "Ich ___ ein Doppelzimmer.",
          options: ["möchte", "möchtest", "möchten", "mag"],
          correct: 0,
          explication: "ich möchte (sans -t)."
        },
        {
          type: "trou",
          consigne: "Complétez avec l'article à l'accusatif.",
          texte: "Es gibt {0} Restaurant und {1} Bar.",
          accepte: [["ein"], ["eine"]],
          indice: "das Restaurant (neutre), die Bar (fém.)"
        },
        {
          type: "association",
          consigne: "Associez le mot allemand et sa traduction.",
          paires: [
            { gauche: "der Schlüssel", droite: "la clé" },
            { gauche: "das Frühstück", droite: "le petit-déjeuner" },
            { gauche: "die Nacht", droite: "la nuit" },
            { gauche: "frei", droite: "libre" },
            { gauche: "der Preis", droite: "le prix" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase polie.",
          mots: ["Ich", "möchte", "ein", "Zimmer", "reservieren"],
          correct: "Ich möchte ein Zimmer reservieren",
          traduction: "Je voudrais réserver une chambre."
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Avez-vous une chambre libre ?",
          accepte: ["Haben Sie ein Zimmer frei", "Haben Sie ein Zimmer frei?"],
          aide: "haben Sie ... frei"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l08",
      vocCours: [
        "Ce vocabulaire permet de **t'orienter en ville** et de **demander ton chemin**. Au cœur du thème : les noms de bâtiments (*die Bank*, *die Post*, *der Bahnhof* la gare, *die Apotheke* la pharmacie, *das Rathaus* la mairie) et les prépositions de lieu.",
        "Apprends les **directions** comme un bloc : *links* (à gauche), *rechts* (à droite), *geradeaus* (tout droit), *die erste Straße* (la première rue). Les deux questions clés : « *Wo ist…?* » et « *Wie komme ich zu…?* ».",
        "Attention au **faux-ami** *das Rathaus* : rien à voir avec un rat ! C'est la **mairie** (de *Rat*, le conseil). De même, *das Gymnasium* est un **lycée**, pas un gymnase. Repérer ces faux-amis évite des contresens.",
        "Astuce : visualise un **plan mental** de ta propre ville et nomme chaque lieu en allemand. Décrire un trajet réel (« tout droit, puis à gauche… ») ancre vocabulaire et prépositions de mouvement."
      ],
      numero: 8,
      titre: "Le plan de la ville",
      titreDE: "Der Stadtplan",
      theme: "Le plan de la ville",
      duree: 50,
      objectifs: [
        "Demander et indiquer le chemin",
        "Nommer les lieux de la ville",
        "Utiliser les prépositions de lieu"
      ],
      grammairePoints: ["Prépositions de lieu (in, neben, hinter...)", "Wo ist...?", "es gibt"],
      vocabulaire: [
        { de: "die Stadt", fr: "la ville", ex: "Die Stadt ist schön." },
        { de: "der Stadtplan", fr: "le plan de la ville", ex: "Wo ist der Stadtplan?" },
        { de: "die Straße", fr: "la rue", ex: "Die Straße ist lang." },
        { de: "der Platz", fr: "la place", ex: "Der Platz ist groß." },
        { de: "der Bahnhof", fr: "la gare", ex: "Der Bahnhof ist da." },
        { de: "die Bank", fr: "la banque", ex: "Die Bank ist geschlossen." },
        { de: "die Post", fr: "la poste", ex: "Die Post ist neben der Bank." },
        { de: "das Museum", fr: "le musée", ex: "Das Museum ist toll." },
        { de: "die Apotheke", fr: "la pharmacie", ex: "Wo ist die Apotheke?" },
        { de: "links", fr: "à gauche", ex: "Gehen Sie links." },
        { de: "rechts", fr: "à droite", ex: "Die Bank ist rechts." },
        { de: "geradeaus", fr: "tout droit", ex: "Gehen Sie geradeaus." },
        { de: "neben", fr: "à côté de", ex: "Die Post ist neben dem Hotel." },
        { de: "zwischen", fr: "entre", ex: "Die Bank ist zwischen Post und Café." }
      ],
      grammaire: [
        { attention: "Ici on situe (Wo?) → **datif** : *im Zimmer*, *auf **dem** Tisch*. (*in dem* = **im**, *an dem* = **am**.)",
          titre: "Les prépositions de lieu (lokale Präpositionen)",
          intro: "Pour situer (Wo? = où ?), on emploie ces prépositions, souvent + datif.",
          tableau: {
            entetes: ["Préposition", "Sens", "Exemple"],
            lignes: [
              ["in", "dans", "Das Café ist in der Stadt."],
              ["neben", "à côté de", "Die Post ist neben der Bank."],
              ["vor", "devant", "Das Taxi ist vor dem Hotel."],
              ["hinter", "derrière", "Der Park ist hinter dem Museum."],
              ["zwischen", "entre", "... zwischen der Bank und dem Café."],
              ["an", "près de / à", "Das Hotel ist am Bahnhof."]
            ]
          },
          note: "« an dem » se contracte en « am », « in dem » en « im »."
        },
        {
          titre: "Demander son chemin (Wo ist...? / Wie komme ich...?)",
          intro: "Phrases-clés à connaître pour s'orienter.",
          tableau: {
            entetes: ["Phrase", "Sens"],
            lignes: [
              ["Wo ist der Bahnhof?", "Où est la gare ?"],
              ["Wie komme ich zum Museum?", "Comment vais-je au musée ?"],
              ["Gehen Sie geradeaus.", "Allez tout droit."],
              ["Nehmen Sie die erste Straße links.", "Prenez la 1re rue à gauche."]
            ]
          },
          note: "« zum » = zu dem (vers le, masc./neutre) ; « zur » = zu der (vers la, fém.)."
        }
      ],
      dialogue: {
        titre: "Entschuldigung, wo ist...? (Pardon, où est...?)",
        lieu: "Auf der Straße",
        lignes: [
          { loc: "Tourist", de: "Entschuldigung, wo ist der Bahnhof?", fr: "Pardon, où est la gare ?" },
          { loc: "Frau", de: "Gehen Sie geradeaus und dann links.", fr: "Allez tout droit puis à gauche." },
          { loc: "Tourist", de: "Ist es weit?", fr: "Est-ce loin ?" },
          { loc: "Frau", de: "Nein, fünf Minuten. Der Bahnhof ist neben der Post.", fr: "Non, cinq minutes. La gare est à côté de la poste." },
          { loc: "Tourist", de: "Gibt es da eine Apotheke?", fr: "Y a-t-il une pharmacie là-bas ?" },
          { loc: "Frau", de: "Ja, zwischen der Post und dem Café.", fr: "Oui, entre la poste et le café." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Que signifie « geradeaus »?",
          question: "Gehen Sie geradeaus.",
          options: ["tout droit", "à gauche", "à droite", "en arrière"],
          correct: 0,
          explication: "geradeaus = tout droit."
        },
        {
          type: "trou",
          consigne: "Complétez avec la bonne préposition (à côté de).",
          texte: "Die Post ist {0} der Bank.",
          accepte: [["neben"]],
          indice: "à côté de"
        },
        {
          type: "association",
          consigne: "Associez le lieu et sa traduction.",
          paires: [
            { gauche: "der Bahnhof", droite: "la gare" },
            { gauche: "die Apotheke", droite: "la pharmacie" },
            { gauche: "das Museum", droite: "le musée" },
            { gauche: "die Post", droite: "la poste" },
            { gauche: "der Platz", droite: "la place" }
          ]
        },
        {
          type: "qcm",
          consigne: "Choisissez la préposition « entre ».",
          question: "Die Bank ist ___ der Post und dem Café.",
          options: ["zwischen", "neben", "vor", "hinter"],
          correct: 0,
          explication: "zwischen = entre."
        },
        {
          type: "ordre",
          consigne: "Construisez la question.",
          mots: ["Wo", "ist", "der", "Bahnhof"],
          correct: "Wo ist der Bahnhof",
          traduction: "Où est la gare ?"
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Le musée est à côté de la banque.",
          accepte: ["Das Museum ist neben der Bank"],
          aide: "neben + datif"
        }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "l09",
      rp: {
        "scene": "Im Restaurant — Au restaurant",
        "intro": "Tu commandes au restaurant. Zika est le serveur.",
        "tours": [
          {
            "de": "Guten Tag! Was möchten Sie trinken?",
            "fr": "Bonjour ! Que voulez-vous boire ?",
            "bravo": "Avec plaisir !",
            "options": [
              {
                "de": "Ein Wasser, bitte.",
                "ok": true
              },
              {
                "de": "Ich heiße Tom.",
                "hint": "Zika demande ta BOISSON : « Ein Wasser / einen Kaffee, bitte »."
              },
              {
                "de": "Es ist kalt.",
                "hint": "Réponds sur la boisson : « Ein Wasser, bitte »."
              }
            ]
          },
          {
            "de": "Und was möchten Sie essen?",
            "fr": "Et que voulez-vous manger ?",
            "bravo": "Bon choix !",
            "options": [
              {
                "de": "Ich nehme eine Suppe.",
                "ok": true
              },
              {
                "de": "Ich trinke einen Saft.",
                "hint": "Là c'est une boisson. Pour manger : « Ich nehme… » + un plat (eine Suppe, einen Salat)."
              }
            ]
          },
          {
            "de": "Möchten Sie zahlen?",
            "fr": "Voulez-vous payer ?",
            "bravo": "Tout de suite !",
            "options": [
              {
                "de": "Ja, die Rechnung, bitte.",
                "ok": true
              },
              {
                "de": "Ja, die Speisekarte, bitte.",
                "hint": "« Speisekarte » = la carte. Pour payer, demande « die Rechnung » (l'addition)."
              }
            ]
          }
        ],
        "fin": "Bravo ! Tu sais commander au restaurant."
      },
      vocCours: [
        "Ce champ lexical, très utile, couvre la **nourriture**, les **boissons** et la **commande au restaurant**. Tu apprendras les repas (*das Frühstück*, *das Mittagessen* déjeuner, *das Abendessen* dîner) et des aliments à mémoriser **avec leur article**, car le genre est imprévisible : *der Kaffee*, *das Brot*, *die Suppe*.",
        "Deux mécanismes sont centraux : l'**accusatif** après *nehmen* (prendre), *möchten* et *bestellen* (commander) — « *Ich nehme **einen** Salat* » — et la **négation** *kein* pour « pas de » : « *Ich trinke **keinen** Alkohol* ».",
        "Soigne le **registre poli** : *möchten* (« *Ich möchte bestellen* »), *die Speisekarte* (la carte), *die Rechnung* (l'addition), et *Zahlen, bitte!*. Ces expressions toutes faites sont à connaître par cœur.",
        "Astuce : classe le vocabulaire par **catégories** (boissons, entrées, plats, desserts), comme une vraie carte. Imagine-toi commander ton repas préféré : le vocabulaire utile à *toi* est celui qui restera."
      ],
      numero: 9,
      titre: "Nourriture, boisson et restaurant",
      titreDE: "Essen und Trinken / Im Restaurant",
      theme: "Nourriture et boisson / au restaurant",
      duree: 55,
      objectifs: [
        "Commander au restaurant",
        "Nommer aliments et boissons",
        "Utiliser la négation kein et l'accusatif"
      ],
      grammairePoints: ["La négation : nicht / kein", "Accusatif des articles", "möchten / nehmen"],
      vocabulaire: [
        { de: "das Essen", fr: "le repas / la nourriture", ex: "Das Essen ist lecker." },
        { de: "das Getränk", fr: "la boisson", ex: "Was möchten Sie als Getränk?" },
        { de: "das Wasser", fr: "l'eau", ex: "Ein Wasser, bitte." },
        { de: "der Kaffee", fr: "le café", ex: "Ich nehme einen Kaffee." },
        { de: "das Bier", fr: "la bière", ex: "Ein Bier, bitte." },
        { de: "der Saft", fr: "le jus", ex: "Ich möchte einen Apfelsaft." },
        { de: "das Brot", fr: "le pain", ex: "Das Brot ist frisch." },
        { de: "die Suppe", fr: "la soupe", ex: "Die Suppe ist warm." },
        { de: "der Salat", fr: "la salade", ex: "Ich nehme einen Salat." },
        { de: "die Rechnung", fr: "l'addition", ex: "Die Rechnung, bitte!" },
        { de: "bestellen", fr: "commander", ex: "Wir möchten bestellen." },
        { de: "nehmen", fr: "prendre", ex: "Ich nehme die Suppe." },
        { de: "lecker", fr: "délicieux", ex: "Das ist sehr lecker!" },
        { de: "die Speisekarte", fr: "le menu / la carte", ex: "Die Speisekarte, bitte." }
      ],
      grammaire: [
        { attention: "**kein** pour un nom sans article (*kein Geld*) ; **nicht** pour le reste, souvent placé **à la fin**.",
          titre: "La négation : « nicht » vs « kein »",
          intro:
            "« kein » nie un NOM (avec article indéfini ou sans article). « nicht » nie un verbe, un adjectif ou un nom défini.",
          tableau: {
            entetes: ["Cas", "Négation", "Exemple"],
            lignes: [
              ["nom indéfini", "kein", "Ich habe keinen Hunger."],
              ["nom défini", "nicht", "Ich nehme die Suppe nicht."],
              ["verbe", "nicht", "Ich trinke nicht."],
              ["adjectif", "nicht", "Das ist nicht lecker."]
            ]
          },
          note: "kein se décline comme ein : keinen (m. acc.), keine (f.), kein (n.), keine (pl.)."
        },
        {
          titre: "L'accusatif (Akkusativ) après nehmen / möchten / bestellen",
          intro: "Le complément d'objet direct est à l'accusatif. Seul le masculin change.",
          tableau: {
            entetes: ["Genre", "Nominatif", "Accusatif"],
            lignes: [
              ["masculin", "der/ein Kaffee", "den/einen Kaffee"],
              ["féminin", "die/eine Suppe", "die/eine Suppe"],
              ["neutre", "das/ein Bier", "das/ein Bier"],
              ["pluriel", "die Pommes", "die Pommes"]
            ]
          },
          note: "« Ich nehme einen Kaffee. » (der Kaffee → einen Kaffee)."
        }
      ],
      dialogue: {
        titre: "Im Restaurant (au restaurant)",
        lieu: "Restaurant « Zur Post »",
        lignes: [
          { loc: "Kellner", de: "Guten Abend! Was möchten Sie bestellen?", fr: "Bonsoir ! Que désirez-vous commander ?" },
          { loc: "Gast", de: "Ich nehme eine Suppe und einen Salat.", fr: "Je prends une soupe et une salade." },
          { loc: "Kellner", de: "Und zu trinken?", fr: "Et à boire ?" },
          { loc: "Gast", de: "Ein Wasser, bitte. Ich trinke keinen Alkohol.", fr: "Une eau, s'il vous plaît. Je ne bois pas d'alcool." },
          { loc: "Kellner", de: "Gerne. Sonst noch etwas?", fr: "Avec plaisir. Autre chose ?" },
          { loc: "Gast", de: "Nein, danke. Später die Rechnung, bitte.", fr: "Non, merci. Plus tard l'addition, s'il vous plaît." }
        ]
      },
      exercices: [
        {
          type: "qcm",
          consigne: "Choisissez « nicht » ou « kein ».",
          question: "Ich habe ___ Hunger.",
          options: ["keinen", "nicht", "keine", "nein"],
          correct: 0,
          explication: "« der Hunger » est masculin, sans article → keinen Hunger."
        },
        {
          type: "qcm",
          consigne: "Choisissez l'accusatif correct.",
          question: "Ich nehme ___ Kaffee.",
          options: ["einen", "ein", "eine", "der"],
          correct: 0,
          explication: "« der Kaffee » (masc.) à l'accusatif → einen."
        },
        {
          type: "trou",
          consigne: "Complétez avec « kein/keine/keinen ».",
          texte: "Ich trinke {0} Bier und ich esse {1} Suppe.",
          accepte: [["kein"], ["keine"]],
          indice: "das Bier (neutre), die Suppe (fém.)"
        },
        {
          type: "association",
          consigne: "Associez l'aliment/boisson et sa traduction.",
          paires: [
            { gauche: "das Wasser", droite: "l'eau" },
            { gauche: "der Saft", droite: "le jus" },
            { gauche: "das Brot", droite: "le pain" },
            { gauche: "die Rechnung", droite: "l'addition" },
            { gauche: "der Salat", droite: "la salade" }
          ]
        },
        {
          type: "ordre",
          consigne: "Construisez la phrase.",
          mots: ["Ich", "möchte", "einen", "Apfelsaft"],
          correct: "Ich möchte einen Apfelsaft",
          traduction: "Je voudrais un jus de pomme."
        },
        {
          type: "ecoute",
          consigne: "Écoutez (🔊) la commande et choisissez.",
          audio: "Die Rechnung, bitte",
          options: ["L'addition, s'il vous plaît", "Le menu, s'il vous plaît", "L'eau, s'il vous plaît"],
          correct: 0
        },
        {
          type: "traduction",
          consigne: "Traduisez en allemand.",
          source: "Je ne bois pas de café.",
          accepte: ["Ich trinke keinen Kaffee"],
          aide: "kein + accusatif (der Kaffee)"
        }
      ]
    }
  ]
};
