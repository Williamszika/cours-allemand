/* =====================================================================
   DEUTSCH FÜR DIE PFLEGE — Allemand pour les métiers du soin (A2 → C2)
   Parcours spécialisé, accessible après l'examen A2 du cours général.
   Domaines : soins infirmiers (bases), hôpital, maison de retraite,
   soins à domicile (ambulante Pflege).

   Pour l'instant : le PROGRAMME (curriculum). Le contenu interactif des
   leçons sera ajouté niveau par niveau. Pour ajouter/éditer une leçon,
   modifie le tableau « lecons » du niveau concerné ci-dessous.
   ===================================================================== */
window.PFLEGE = {
  titre: "Deutsch für die Pflege",
  sousTitre: "Allemand pour les métiers du soin",
  description:
    "L'allemand professionnel des soignants : soins infirmiers, hôpital, maison de retraite et soins à domicile. " +
    "Le parcours démarre au niveau A2 et va jusqu'au C2.",
  prerequis: "a2", // examen requis dans le cours général pour débloquer
  domaines: {
    grund: { ic: "🩺", nom: "Soins infirmiers" },
    kh:    { ic: "🏥", nom: "Hôpital" },
    heim:  { ic: "🏡", nom: "Maison de retraite" },
    ambul: { ic: "🚗", nom: "Soins à domicile" }
  },
  niveaux: [
    { code: "A2", titre: "Premiers pas dans le soin", lecons: [
      { id: "pa2-1", dom: "grund", titreDE: "Der Körper und die Pflege", titre: "Le corps et les soins", desc: "Parties du corps et vocabulaire de base des soins.",
        vocCours: [
          "Pour soigner, il faut d'abord savoir nommer le corps. Apprends chaque mot avec son article : der Kopf (la tête), der Arm (le bras), das Bein (la jambe), der Rücken (le dos), die Hand (la main).",
          "Tu parleras aussi du patient et de son état : der Patient / die Patientin, die Pflegekraft (le soignant), Schmerzen haben (avoir mal). Ce sont les tout premiers mots du quotidien soignant."
        ],
        vocabulaire: [
          { de: "der Körper", fr: "le corps", ex: "Der Körper des Patienten ist warm." },
          { de: "der Kopf", fr: "la tête", ex: "Der Kopf tut ihm weh." },
          { de: "der Arm", fr: "le bras", ex: "Heben Sie bitte den Arm." },
          { de: "das Bein", fr: "la jambe", ex: "Das linke Bein ist geschwollen." },
          { de: "der Rücken", fr: "le dos", ex: "Sie hat Schmerzen im Rücken." },
          { de: "die Hand", fr: "la main", ex: "Geben Sie mir bitte die Hand." },
          { de: "der Bauch", fr: "le ventre", ex: "Der Bauch ist weich." },
          { de: "der Patient / die Patientin", fr: "le patient / la patiente", ex: "Der Patient liegt in Zimmer 12." },
          { de: "die Pflegekraft", fr: "le soignant / la soignante", ex: "Die Pflegekraft hilft beim Aufstehen." },
          { de: "die Schmerzen", fr: "les douleurs", ex: "Haben Sie Schmerzen?" }
        ],
        grammaire: [
          { titre: "L'impératif de politesse", titreDE: "Der Imperativ mit Sie",
            regle: "Pour demander poliment à un patient de faire quelque chose, on utilise l'impératif avec « Sie » : verbe en première position + Sie. Exemple : « Heben Sie den Arm. » (Levez le bras.) On ajoute souvent « bitte » pour rester poli.",
            points: [
              "« Atmen Sie tief ein. » — Respirez profondément.",
              "« Kommen Sie bitte. » — Venez, s'il vous plaît.",
              "« Drücken Sie hier. » — Appuyez ici."
            ],
            exemples: [
              { de: "Heben Sie bitte den Arm.", fr: "Levez le bras, s'il vous plaît." },
              { de: "Öffnen Sie den Mund.", fr: "Ouvrez la bouche." },
              { de: "Atmen Sie ruhig.", fr: "Respirez calmement." }
            ],
            note: "Avec « Sie », on reste toujours poli et respectueux — la règle de base avec les patients." }
        ],
        dialogue: { titre: "Wo haben Sie Schmerzen?", lieu: "Im Patientenzimmer", lignes: [
          { loc: "L'aide-soignante salue le patient", de: "Guten Morgen, Herr Bauer. Wie geht es Ihnen?", fr: "Bonjour M. Bauer. Comment allez-vous ?" },
          { de: "Nicht so gut. Mein Rücken tut weh.", fr: "Pas très bien. J'ai mal au dos." },
          { de: "Wo genau haben Sie Schmerzen?", fr: "Où avez-vous mal exactement ?" },
          { de: "Hier unten, im unteren Rücken.", fr: "Ici en bas, dans le bas du dos." },
          { de: "Ich helfe Ihnen. Drehen Sie sich bitte langsam.", fr: "Je vous aide. Tournez-vous lentement, s'il vous plaît." },
          { de: "Danke, das tut gut.", fr: "Merci, ça fait du bien." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was tut Herrn Bauer weh?", options: ["Der Kopf", "Der Rücken", "Das Bein"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe chaque mot à sa traduction.", paires: [ { gauche: "der Kopf", droite: "la tête" }, { gauche: "die Hand", droite: "la main" }, { gauche: "das Bein", droite: "la jambe" }, { gauche: "der Rücken", droite: "le dos" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'impératif de politesse.", texte: "Heben Sie bitte {0} Arm.", accepte: [["den"]], indice: "Accusatif masculin de « der »." },
          { type: "qcm", cat: "appro", consigne: "Choisis la formulation polie.", question: "Comment dire poliment « Ouvrez la bouche » ?", options: ["Mach den Mund auf.", "Öffnen Sie den Mund.", "Du öffnest den Mund."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Heben", "Sie", "den", "Arm"], correct: "Heben Sie den Arm", traduction: "Levez le bras." },
          { type: "production", cat: "prod", prompt: "Écris une phrase pour demander poliment à un patient de lever le bras.", modele: "Heben Sie bitte den Arm." }
        ],
        exemplesPlus: [
          { de: "Guten Morgen! Wie geht es Ihnen heute?", fr: "Bonjour ! Comment allez-vous aujourd'hui ?" },
          { de: "Haben Sie Schmerzen?", fr: "Avez-vous des douleurs ?" },
          { de: "Heben Sie bitte langsam den Arm.", fr: "Levez le bras lentement, s'il vous plaît." },
          { de: "Ich helfe Ihnen beim Aufstehen.", fr: "Je vous aide à vous lever." },
          { de: "Der Rücken tut weh.", fr: "Le dos fait mal." }
        ],
        documentation: { task: "Note ton observation dans le rapport de soins : M. Bauer a des douleurs dans le bas du dos depuis ce matin.", modele: "Herr Bauer klagt seit heute Morgen über Schmerzen im unteren Rücken." },
        rp: { scene: "Zika joue M. Bauer, un patient alité. Toi, tu es l'aide-soignant(e).", intro: "Salue-le, demande où il a mal, puis propose ton aide.", fin: "Super! Du hast freundlich reagiert und alles dokumentiert.", tours: [
          { de: "Guten Morgen. Mir geht es heute nicht so gut.", fr: "Bonjour. Je ne vais pas très bien aujourd'hui.", options: [ { de: "Wo haben Sie Schmerzen?", ok: true }, { de: "Tschüss, bis morgen!", ok: false }, { de: "Stehen Sie schnell auf!", ok: false } ] },
          { de: "Mein Rücken tut weh, hier unten.", fr: "J'ai mal au dos, ici en bas.", options: [ { de: "Ich helfe Ihnen. Drehen Sie sich bitte langsam.", ok: true }, { de: "Das ist nicht so schlimm.", ok: false } ] },
          { de: "Danke. Können Sie das aufschreiben?", fr: "Merci. Pouvez-vous le noter ?", options: [ { de: "Ja, ich dokumentiere die Schmerzen.", ok: true }, { de: "Nein, das ist nicht wichtig.", ok: false } ] }
        ] } },
      { id: "pa2-2", dom: "grund", titreDE: "Körperpflege und Hygiene", titre: "Toilette et hygiène", desc: "Laver, habiller, soins d'hygiène au quotidien.",
        vocCours: [
          "La toilette est un soin quotidien. Mots-clés : waschen (laver), sich waschen (se laver), die Seife (le savon), das Handtuch (la serviette), die Zähne putzen (se brosser les dents).",
          "Beaucoup de verbes du soin sont pronominaux (avec « sich ») : sich waschen, sich anziehen (s'habiller), sich duschen. Tu les apprendras dans la partie grammaire."
        ],
        vocabulaire: [
          { de: "waschen", fr: "laver", ex: "Ich wasche dem Patienten den Rücken." },
          { de: "sich waschen", fr: "se laver", ex: "Können Sie sich allein waschen?" },
          { de: "die Seife", fr: "le savon", ex: "Hier ist die Seife." },
          { de: "das Handtuch", fr: "la serviette", ex: "Ich bringe Ihnen ein frisches Handtuch." },
          { de: "die Zähne putzen", fr: "se brosser les dents", ex: "Bitte putzen Sie die Zähne." },
          { de: "sich anziehen", fr: "s'habiller", ex: "Möchten Sie sich jetzt anziehen?" },
          { de: "duschen", fr: "se doucher", ex: "Heute duschen wir zusammen." },
          { de: "die Windel", fr: "la protection / couche", ex: "Ich wechsle jetzt die Windel." },
          { de: "die Haut", fr: "la peau", ex: "Die Haut ist trocken." },
          { de: "sauber", fr: "propre", ex: "Jetzt sind Sie wieder sauber." }
        ],
        grammaire: [
          { titre: "Les verbes pronominaux", titreDE: "Reflexive Verben (sich)",
            regle: "Beaucoup de gestes de la toilette se disent avec un verbe pronominal : sich waschen (se laver), sich anziehen (s'habiller). Le pronom « sich » change avec la personne : ich wasche mich, Sie waschen sich.",
            points: [
              "ich wasche mich — je me lave",
              "Sie waschen sich — vous vous lavez",
              "er/sie wäscht sich — il/elle se lave"
            ],
            exemples: [
              { de: "Können Sie sich allein waschen?", fr: "Pouvez-vous vous laver seul ?" },
              { de: "Ich ziehe mich an.", fr: "Je m'habille." },
              { de: "Möchten Sie sich duschen?", fr: "Voulez-vous vous doucher ?" }
            ],
            note: "Quand TU fais le soin, le verbe redevient simple : « Ich wasche Ihnen den Rücken. » (Je vous lave le dos.)" }
        ],
        dialogue: { titre: "Die Morgenpflege", lieu: "Im Badezimmer des Pflegeheims", lignes: [
          { loc: "L'aide-soignante propose la toilette", de: "Guten Morgen, Frau Lang. Möchten Sie sich jetzt waschen?", fr: "Bonjour Mme Lang. Voulez-vous vous laver maintenant ?" },
          { de: "Ja, gern. Aber ich brauche Hilfe.", fr: "Oui, volontiers. Mais j'ai besoin d'aide." },
          { de: "Kein Problem. Hier sind Seife und Handtuch.", fr: "Pas de problème. Voici le savon et la serviette." },
          { de: "Können Sie mir den Rücken waschen?", fr: "Pouvez-vous me laver le dos ?" },
          { de: "Natürlich. Putzen Sie danach bitte die Zähne.", fr: "Bien sûr. Brossez-vous les dents ensuite, s'il vous plaît." },
          { de: "Danke, jetzt fühle ich mich sauber.", fr: "Merci, maintenant je me sens propre." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was braucht Frau Lang?", options: ["Medikamente", "Hilfe beim Waschen", "ein Glas Wasser"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Seife", droite: "le savon" }, { gauche: "das Handtuch", droite: "la serviette" }, { gauche: "die Haut", droite: "la peau" }, { gauche: "sauber", droite: "propre" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec le bon pronom réfléchi.", texte: "Können Sie {0} allein waschen?", accepte: [["sich"]], indice: "Forme de politesse (Sie)." },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne phrase.", question: "Comment dire « Je m'habille » ?", options: ["Ich ziehe mich an.", "Ich ziehe Sie an.", "Du ziehst sich an."], correct: 0 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Möchten", "Sie", "sich", "duschen"], correct: "Möchten Sie sich duschen", traduction: "Voulez-vous vous doucher ?" },
          { type: "production", cat: "prod", prompt: "Propose poliment à un résident de se laver maintenant.", modele: "Möchten Sie sich jetzt waschen?" }
        ],
        exemplesPlus: [
          { de: "Möchten Sie sich jetzt waschen?", fr: "Voulez-vous vous laver maintenant ?" },
          { de: "Ich wasche Ihnen den Rücken.", fr: "Je vous lave le dos." },
          { de: "Hier sind Seife und Handtuch.", fr: "Voici le savon et la serviette." },
          { de: "Bitte putzen Sie die Zähne.", fr: "Brossez-vous les dents, s'il vous plaît." },
          { de: "Ich wechsle jetzt die Windel.", fr: "Je change la protection maintenant." }
        ],
        documentation: { task: "Note dans le rapport : Mme Lang a été lavée, peau intacte, aucune rougeur.", modele: "Frau Lang gewaschen, Haut intakt, keine Rötung." },
        rp: { scene: "Zika joue Frau Lang pendant la toilette. Toi, tu es l'aide-soignant(e).", intro: "Propose-lui la toilette, rassure-la, puis contrôle l'état de la peau.", fin: "Sehr gut! Du hast geholfen und die Haut kontrolliert.", tours: [
          { de: "Ich möchte mich waschen, aber ich brauche Hilfe.", fr: "Je voudrais me laver, mais j'ai besoin d'aide.", options: [ { de: "Kein Problem, ich helfe Ihnen gern.", ok: true }, { de: "Machen Sie das bitte allein.", ok: false }, { de: "Ich habe keine Zeit.", ok: false } ] },
          { de: "Können Sie mir den Rücken waschen?", fr: "Pouvez-vous me laver le dos ?", options: [ { de: "Natürlich, ich wasche Ihnen den Rücken.", ok: true }, { de: "Nein, das geht nicht.", ok: false } ] },
          { de: "Ist meine Haut in Ordnung?", fr: "Ma peau va bien ?", options: [ { de: "Ja, Ihre Haut ist intakt, keine Rötung.", ok: true }, { de: "Das weiß ich nicht.", ok: false } ] }
        ] } },
      { id: "pa2-3", dom: "heim", titreDE: "Im Pflegeheim: der Tagesablauf", titre: "En maison de retraite : la journée", desc: "Lever, repas, coucher : accompagner les résidents.",
        vocCours: [
          "En maison de retraite (das Pflegeheim), la journée du résident (der Bewohner / die Bewohnerin) est rythmée : aufstehen (se lever), das Frühstück (le petit-déjeuner), das Mittagessen (le déjeuner), das Abendessen (le dîner), ins Bett gehen (aller au lit).",
          "Beaucoup de ces verbes sont « séparables » : aufstehen, anziehen, einnehmen. Le préfixe part à la fin de la phrase : « Ich stehe um 7 Uhr auf. »"
        ],
        vocabulaire: [
          { de: "das Pflegeheim", fr: "la maison de retraite", ex: "Sie wohnt seit zwei Jahren im Pflegeheim." },
          { de: "der Bewohner / die Bewohnerin", fr: "le résident / la résidente", ex: "Die Bewohnerin möchte aufstehen." },
          { de: "aufstehen", fr: "se lever", ex: "Frau Klein steht um sieben Uhr auf." },
          { de: "das Frühstück", fr: "le petit-déjeuner", ex: "Das Frühstück ist um halb neun." },
          { de: "das Mittagessen", fr: "le déjeuner", ex: "Nach dem Mittagessen ruhen sich viele aus." },
          { de: "das Abendessen", fr: "le dîner", ex: "Das Abendessen gibt es um achtzehn Uhr." },
          { de: "die Mahlzeit", fr: "le repas", ex: "Guten Appetit, eine schöne Mahlzeit!" },
          { de: "die Medikamente einnehmen", fr: "prendre les médicaments", ex: "Bitte nehmen Sie jetzt die Medikamente ein." },
          { de: "ins Bett gehen", fr: "aller au lit", ex: "Möchten Sie schon ins Bett gehen?" },
          { de: "der Spaziergang", fr: "la promenade", ex: "Am Nachmittag machen wir einen Spaziergang." }
        ],
        grammaire: [
          { titre: "Les verbes à particule séparable", titreDE: "Trennbare Verben",
            regle: "Des verbes comme aufstehen, anziehen, einnehmen ont un préfixe « séparable ». Dans une phrase simple, le préfixe se place tout à la fin : « Ich stehe um 7 Uhr auf. » (auf-stehen).",
            points: [
              "aufstehen → Ich stehe auf.",
              "einnehmen → Sie nehmen die Tablette ein.",
              "anziehen → Wir ziehen die Jacke an."
            ],
            exemples: [
              { de: "Frau Klein steht um sieben Uhr auf.", fr: "Mme Klein se lève à sept heures." },
              { de: "Bitte nehmen Sie die Medikamente ein.", fr: "Prenez vos médicaments, s'il vous plaît." },
              { de: "Wir gehen jetzt ins Bett.", fr: "Nous allons au lit maintenant." }
            ],
            note: "À l'impératif aussi, le préfixe part à la fin : « Stehen Sie bitte auf. »" }
        ],
        dialogue: { titre: "Der Morgen im Heim", lieu: "Im Zimmer der Bewohnerin", lignes: [
          { loc: "L'aide-soignant accompagne le lever", de: "Guten Morgen, Frau Klein. Es ist sieben Uhr. Möchten Sie aufstehen?", fr: "Bonjour Mme Klein. Il est sept heures. Voulez-vous vous lever ?" },
          { de: "Ja. Gibt es bald Frühstück?", fr: "Oui. Y a-t-il bientôt le petit-déjeuner ?" },
          { de: "Das Frühstück ist um halb neun.", fr: "Le petit-déjeuner est à huit heures et demie." },
          { de: "Gut. Und meine Tabletten?", fr: "Bien. Et mes comprimés ?" },
          { de: "Die nehmen Sie nach dem Frühstück ein.", fr: "Vous les prenez après le petit-déjeuner." },
          { de: "Am Nachmittag machen wir einen Spaziergang, ja?", fr: "L'après-midi, nous faisons une promenade, d'accord ?" }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wann ist das Frühstück?", options: ["Um sieben Uhr", "Um halb neun", "Am Nachmittag"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le repas à sa traduction.", paires: [ { gauche: "das Frühstück", droite: "le petit-déjeuner" }, { gauche: "das Mittagessen", droite: "le déjeuner" }, { gauche: "das Abendessen", droite: "le dîner" }, { gauche: "der Spaziergang", droite: "la promenade" } ] },
          { type: "trou", cat: "appro", consigne: "Complète le verbe séparable (la particule à la fin).", texte: "Frau Klein steht um sieben Uhr {0}.", accepte: [["auf"]], indice: "auf-stehen." },
          { type: "qcm", cat: "appro", consigne: "Choisis la phrase correcte.", question: "Quelle phrase est juste ?", options: ["Ich auf stehe um 7 Uhr.", "Ich stehe um 7 Uhr auf.", "Ich stehe auf um 7 Uhr."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Bitte", "nehmen", "Sie", "die", "Tablette", "ein"], correct: "Bitte nehmen Sie die Tablette ein", traduction: "Prenez le comprimé, s'il vous plaît." },
          { type: "production", cat: "prod", prompt: "Demande poliment à un résident s'il veut se lever maintenant.", modele: "Möchten Sie jetzt aufstehen?" }
        ],
        exemplesPlus: [
          { de: "Es ist sieben Uhr. Möchten Sie aufstehen?", fr: "Il est sept heures. Voulez-vous vous lever ?" },
          { de: "Das Frühstück ist um halb neun.", fr: "Le petit-déjeuner est à huit heures et demie." },
          { de: "Bitte nehmen Sie die Medikamente ein.", fr: "Prenez vos médicaments, s'il vous plaît." },
          { de: "Am Nachmittag machen wir einen Spaziergang.", fr: "L'après-midi, nous faisons une promenade." },
          { de: "Möchten Sie jetzt ins Bett gehen?", fr: "Voulez-vous aller au lit maintenant ?" }
        ],
        documentation: { task: "Transmets à l'écrit : Mme Klein s'est levée à 7h, a pris son petit-déjeuner et ses médicaments.", modele: "Frau Klein um 7 Uhr aufgestanden, gefrühstückt, Medikamente eingenommen." },
        rp: { scene: "Zika joue ta collègue infirmière. Vous faites la transmission du matin (Übergabe).", intro: "Dis-lui comment s'est passée la matinée de Mme Klein.", fin: "Perfekt! Eine klare Übergabe unter Kollegen.", tours: [
          { de: "Wie war der Morgen bei Frau Klein?", fr: "Comment s'est passée la matinée avec Mme Klein ?", options: [ { de: "Sie ist um sieben Uhr aufgestanden.", ok: true }, { de: "Das weiß ich nicht.", ok: false }, { de: "Frag jemand anderen.", ok: false } ] },
          { de: "Hat sie ihre Medikamente genommen?", fr: "A-t-elle pris ses médicaments ?", options: [ { de: "Ja, nach dem Frühstück.", ok: true }, { de: "Vielleicht.", ok: false } ] },
          { de: "Gibt es etwas Besonderes?", fr: "Y a-t-il quelque chose de particulier ?", options: [ { de: "Nein, alles ist in Ordnung.", ok: true }, { de: "Keine Ahnung.", ok: false } ] }
        ] } },
      { id: "pa2-4", dom: "grund", titreDE: "Begrüßung und einfache Kommunikation", titre: "Accueil et communication simple", desc: "Saluer, se présenter, phrases utiles avec le patient.",
        vocCours: [
          "Le premier contact compte. On salue (begrüßen), on se présente (sich vorstellen) et on demande comment va la personne : « Wie geht es Ihnen? ». Des mots simples mettent le patient en confiance.",
          "Pour comprendre les besoins, on pose des questions en W : Wie? (comment), Wo? (où), Was? (quoi), Wann? (quand). Ce sont tes outils de tous les jours."
        ],
        vocabulaire: [
          { de: "begrüßen", fr: "saluer", ex: "Ich begrüße jeden Bewohner freundlich." },
          { de: "sich vorstellen", fr: "se présenter", ex: "Darf ich mich vorstellen? Ich bin Frau Sané." },
          { de: "Wie geht es Ihnen?", fr: "Comment allez-vous ?", ex: "Guten Tag! Wie geht es Ihnen?" },
          { de: "der Durst", fr: "la soif", ex: "Haben Sie Durst?" },
          { de: "der Hunger", fr: "la faim", ex: "Haben Sie Hunger?" },
          { de: "müde", fr: "fatigué", ex: "Sind Sie müde?" },
          { de: "brauchen", fr: "avoir besoin de", ex: "Brauchen Sie etwas?" },
          { de: "helfen", fr: "aider", ex: "Kann ich Ihnen helfen?" },
          { de: "verstehen", fr: "comprendre", ex: "Verstehen Sie mich?" },
          { de: "langsam", fr: "lentement", ex: "Ich spreche langsam." }
        ],
        grammaire: [
          { titre: "Les questions en W", titreDE: "W-Fragen",
            regle: "Pour s'informer, on commence la question par un mot en W : Wie? (comment), Wo? (où), Was? (quoi), Wann? (quand), Warum? (pourquoi). Le verbe vient juste après : « Wo haben Sie Schmerzen? »",
            points: [
              "Wie geht es Ihnen? — Comment allez-vous ?",
              "Wo tut es weh? — Où avez-vous mal ?",
              "Was brauchen Sie? — De quoi avez-vous besoin ?"
            ],
            exemples: [
              { de: "Wie heißen Sie?", fr: "Comment vous appelez-vous ?" },
              { de: "Wann haben Sie Schmerzen?", fr: "Quand avez-vous mal ?" },
              { de: "Was möchten Sie trinken?", fr: "Que voulez-vous boire ?" }
            ],
            note: "Avec un patient, parle lentement (langsam) et répète si besoin." }
        ],
        dialogue: { titre: "Die neue Bewohnerin", lieu: "Im Aufnahmezimmer", lignes: [
          { loc: "Le soignant accueille une nouvelle résidente", de: "Guten Tag! Darf ich mich vorstellen? Ich bin Herr Sané, Ihre Pflegekraft.", fr: "Bonjour ! Puis-je me présenter ? Je suis M. Sané, votre soignant." },
          { de: "Guten Tag. Ich bin Frau Weber.", fr: "Bonjour. Je suis Mme Weber." },
          { de: "Wie geht es Ihnen heute, Frau Weber?", fr: "Comment allez-vous aujourd'hui, Mme Weber ?" },
          { de: "Ein bisschen müde. Und ich habe Durst.", fr: "Un peu fatiguée. Et j'ai soif." },
          { de: "Brauchen Sie etwas zu trinken? Ich bringe Wasser.", fr: "Avez-vous besoin de boire ? J'apporte de l'eau." },
          { de: "Ja, danke. Sie sprechen schön langsam.", fr: "Oui, merci. Vous parlez bien lentement." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was braucht Frau Weber?", options: ["Etwas zu trinken", "Ein Medikament", "Einen Spaziergang"], correct: 0 },
          { type: "association", cat: "comp", consigne: "Associe le mot interrogatif à son sens.", paires: [ { gauche: "Wie?", droite: "comment ?" }, { gauche: "Wo?", droite: "où ?" }, { gauche: "Was?", droite: "quoi ?" }, { gauche: "Wann?", droite: "quand ?" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec le bon mot en W.", texte: "{0} geht es Ihnen heute?", accepte: [["Wie"]], indice: "On demande l'état (comment)." },
          { type: "qcm", cat: "appro", consigne: "Choisis la question correcte.", question: "Comment demander « Où avez-vous mal ? »", options: ["Was tut weh Ihnen?", "Wo tut es weh?", "Wie weh Sie haben?"], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la question dans l'ordre.", mots: ["Was", "brauchen", "Sie"], correct: "Was brauchen Sie", traduction: "De quoi avez-vous besoin ?" },
          { type: "production", cat: "prod", prompt: "Présente-toi à un patient et demande comment il va.", modele: "Guten Tag, ich bin Ihre Pflegekraft. Wie geht es Ihnen?" }
        ],
        exemplesPlus: [
          { de: "Darf ich mich vorstellen? Ich bin Ihre Pflegekraft.", fr: "Puis-je me présenter ? Je suis votre soignant." },
          { de: "Wie geht es Ihnen heute?", fr: "Comment allez-vous aujourd'hui ?" },
          { de: "Haben Sie Durst oder Hunger?", fr: "Avez-vous soif ou faim ?" },
          { de: "Brauchen Sie etwas?", fr: "Avez-vous besoin de quelque chose ?" },
          { de: "Ich spreche langsam. Verstehen Sie mich?", fr: "Je parle lentement. Me comprenez-vous ?" }
        ],
        documentation: { task: "Note l'accueil : nouvelle résidente, Mme Weber, fatiguée et a soif.", modele: "Neue Bewohnerin Frau Weber aufgenommen, müde, hat Durst." },
        rp: { scene: "Zika joue Frau Weber, une nouvelle résidente. Toi, tu l'accueilles.", intro: "Présente-toi, demande comment elle va, puis réponds à ses besoins.", fin: "Klasse! Eine warme und freundliche Aufnahme.", tours: [
          { de: "Guten Tag. Ich bin neu hier.", fr: "Bonjour. Je suis nouvelle ici.", options: [ { de: "Herzlich willkommen! Ich bin Ihre Pflegekraft.", ok: true }, { de: "Und was wollen Sie?", ok: false }, { de: "Setzen Sie sich woanders hin.", ok: false } ] },
          { de: "Ich bin ein bisschen müde.", fr: "Je suis un peu fatiguée.", options: [ { de: "Möchten Sie sich ausruhen?", ok: true }, { de: "Das ist doch normal.", ok: false } ] },
          { de: "Und ich habe Durst.", fr: "Et j'ai soif.", options: [ { de: "Ich bringe Ihnen ein Glas Wasser.", ok: true }, { de: "Trinken Sie später.", ok: false } ] }
        ] } },
      { id: "pa2-5", dom: "grund", titreDE: "Vitalzeichen messen", titre: "Mesurer les signes vitaux", desc: "Température, pouls, tension : mots et consignes.",
        vocCours: [
          "Chaque jour, on mesure les signes vitaux (die Vitalzeichen) : die Temperatur (la température), der Puls (le pouls), der Blutdruck (la tension). Le verbe clé est messen (mesurer).",
          "On décrit ensuite les valeurs : hoch (élevé), niedrig (bas), normal. Et on dit ce qu'on doit faire avec « müssen » : « Ich muss den Blutdruck messen. »"
        ],
        vocabulaire: [
          { de: "die Vitalzeichen", fr: "les signes vitaux", ex: "Ich kontrolliere die Vitalzeichen." },
          { de: "die Temperatur", fr: "la température", ex: "Ich messe jetzt die Temperatur." },
          { de: "das Fieber", fr: "la fièvre", ex: "Der Patient hat Fieber." },
          { de: "der Puls", fr: "le pouls", ex: "Der Puls ist regelmäßig." },
          { de: "der Blutdruck", fr: "la tension artérielle", ex: "Der Blutdruck ist ein bisschen hoch." },
          { de: "messen", fr: "mesurer", ex: "Ich muss den Blutdruck messen." },
          { de: "das Thermometer", fr: "le thermomètre", ex: "Wo ist das Thermometer?" },
          { de: "hoch", fr: "élevé / haut", ex: "Die Temperatur ist hoch." },
          { de: "niedrig", fr: "bas", ex: "Der Blutdruck ist niedrig." },
          { de: "der Wert", fr: "la valeur", ex: "Ich notiere den Wert." }
        ],
        grammaire: [
          { titre: "Le verbe de modalité « müssen »", titreDE: "Modalverb: müssen",
            regle: "Pour dire ce qu'on DOIT faire, on utilise « müssen ». Le verbe principal va à l'infinitif, tout à la fin : « Ich muss den Blutdruck messen. » (Je dois mesurer la tension.)",
            points: [
              "ich muss … messen — je dois … mesurer",
              "Sie müssen … bleiben — vous devez … rester",
              "L'infinitif (messen, bleiben) se place à la fin."
            ],
            exemples: [
              { de: "Ich muss die Temperatur messen.", fr: "Je dois mesurer la température." },
              { de: "Sie müssen ruhig sitzen.", fr: "Vous devez rester assis tranquillement." },
              { de: "Wir müssen den Wert notieren.", fr: "Nous devons noter la valeur." }
            ],
            note: "Pour annoncer un soin avec douceur : « Ich muss jetzt … » + infinitif." }
        ],
        dialogue: { titre: "Blutdruck und Temperatur", lieu: "Am Patientenbett", lignes: [
          { loc: "L'infirmière annonce la mesure", de: "Guten Morgen. Ich muss jetzt den Blutdruck messen.", fr: "Bonjour. Je dois maintenant mesurer la tension." },
          { de: "In Ordnung. Tut das weh?", fr: "D'accord. Est-ce que ça fait mal ?" },
          { de: "Nein, gar nicht. Bitte sitzen Sie ruhig.", fr: "Non, pas du tout. Restez assis tranquillement, s'il vous plaît." },
          { de: "Und meine Temperatur?", fr: "Et ma température ?" },
          { de: "Die messe ich auch. Sie haben kein Fieber.", fr: "Je la mesure aussi. Vous n'avez pas de fièvre." },
          { de: "Der Blutdruck ist ein bisschen hoch. Ich notiere den Wert.", fr: "La tension est un peu élevée. Je note la valeur." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Hat der Patient Fieber?", options: ["Ja", "Nein", "Man weiß es nicht"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le signe vital à sa traduction.", paires: [ { gauche: "die Temperatur", droite: "la température" }, { gauche: "der Puls", droite: "le pouls" }, { gauche: "der Blutdruck", droite: "la tension" }, { gauche: "das Fieber", droite: "la fièvre" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec « müssen » (infinitif à la fin).", texte: "Ich {0} den Blutdruck messen.", accepte: [["muss"]], indice: "1re personne du singulier de müssen." },
          { type: "qcm", cat: "appro", consigne: "Choisis la phrase correcte.", question: "Quelle phrase est juste ?", options: ["Ich muss messen den Blutdruck.", "Ich muss den Blutdruck messen.", "Ich den Blutdruck muss messen."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Sie", "müssen", "ruhig", "sitzen"], correct: "Sie müssen ruhig sitzen", traduction: "Vous devez rester assis tranquillement." },
          { type: "production", cat: "prod", prompt: "Annonce à un patient que tu dois mesurer sa température.", modele: "Ich muss jetzt die Temperatur messen." }
        ],
        exemplesPlus: [
          { de: "Ich muss jetzt den Blutdruck messen.", fr: "Je dois maintenant mesurer la tension." },
          { de: "Bitte sitzen Sie ruhig.", fr: "Restez assis tranquillement, s'il vous plaît." },
          { de: "Sie haben kein Fieber.", fr: "Vous n'avez pas de fièvre." },
          { de: "Der Blutdruck ist ein bisschen hoch.", fr: "La tension est un peu élevée." },
          { de: "Ich notiere den Wert.", fr: "Je note la valeur." }
        ],
        documentation: { task: "Documente les valeurs : tension 150/95 (élevée), pas de fièvre, patient sans plainte.", modele: "RR 150/95 mmHg (erhöht), kein Fieber, Patient beschwerdefrei." },
        rp: { scene: "Zika joue le médecin. Il te demande les signes vitaux de M. Klein.", intro: "Réponds avec les valeurs que tu as mesurées, puis confirme la documentation.", fin: "Ausgezeichnet! Klare Kommunikation mit dem Arzt und saubere Dokumentation.", tours: [
          { de: "Guten Tag. Wie ist der Blutdruck von Herrn Klein?", fr: "Bonjour. Quelle est la tension de M. Klein ?", options: [ { de: "Der Blutdruck ist 150 zu 95, etwas erhöht.", ok: true }, { de: "Das habe ich vergessen.", ok: false }, { de: "Fragen Sie ihn selbst.", ok: false } ] },
          { de: "Hat er Fieber?", fr: "A-t-il de la fièvre ?", options: [ { de: "Nein, kein Fieber.", ok: true }, { de: "Vielleicht ein bisschen.", ok: false } ] },
          { de: "Gut. Bitte dokumentieren Sie die Werte.", fr: "Bien. Documentez les valeurs, s'il vous plaît.", options: [ { de: "Ja, ich trage die Werte sofort ein.", ok: true }, { de: "Später vielleicht.", ok: false } ] }
        ] } },
      { id: "pa2-6", dom: "grund", titreDE: "Hilfsmittel und Mobilität", titre: "Aides et mobilité", desc: "Fauteuil roulant, déambulateur, aider à se déplacer.",
        vocCours: [
          "Aider à se déplacer fait partie du soin. Les aides (die Hilfsmittel) : der Rollstuhl (le fauteuil roulant), der Rollator (le déambulateur), die Gehhilfe (l'aide à la marche).",
          "On accompagne les gestes : aufstehen (se lever), sich setzen (s'asseoir), sich festhalten (se tenir). Et on rassure avec « können » : « Sie können sich an mir festhalten. »"
        ],
        vocabulaire: [
          { de: "das Hilfsmittel", fr: "l'aide technique", ex: "Der Rollator ist ein Hilfsmittel." },
          { de: "der Rollstuhl", fr: "le fauteuil roulant", ex: "Ich hole den Rollstuhl." },
          { de: "der Rollator", fr: "le déambulateur", ex: "Mit dem Rollator gehen Sie sicher." },
          { de: "aufstehen", fr: "se lever", ex: "Können Sie allein aufstehen?" },
          { de: "sich setzen", fr: "s'asseoir", ex: "Bitte setzen Sie sich langsam." },
          { de: "sich festhalten", fr: "se tenir / s'agripper", ex: "Halten Sie sich gut fest." },
          { de: "der Sturz", fr: "la chute", ex: "Wir wollen einen Sturz vermeiden." },
          { de: "fallen", fr: "tomber", ex: "Vorsicht, nicht fallen!" },
          { de: "vorsichtig", fr: "prudent / doucement", ex: "Wir machen das vorsichtig." },
          { de: "langsam", fr: "lentement", ex: "Stehen Sie langsam auf." }
        ],
        grammaire: [
          { titre: "Le verbe de modalité « können »", titreDE: "Modalverb: können",
            regle: "Pour parler de ce qu'on PEUT (ou ne peut pas) faire, on utilise « können ». L'infinitif va à la fin : « Können Sie allein aufstehen? » (Pouvez-vous vous lever seul ?)",
            points: [
              "Ich kann Ihnen helfen. — Je peux vous aider.",
              "Können Sie aufstehen? — Pouvez-vous vous lever ?",
              "Sie können sich festhalten. — Vous pouvez vous tenir."
            ],
            exemples: [
              { de: "Können Sie allein aufstehen?", fr: "Pouvez-vous vous lever seul ?" },
              { de: "Ich kann Ihnen helfen.", fr: "Je peux vous aider." },
              { de: "Sie können sich an mir festhalten.", fr: "Vous pouvez vous tenir à moi." }
            ],
            note: "« können » rassure : il propose de l'aide sans imposer." }
        ],
        dialogue: { titre: "Vom Bett in den Rollstuhl", lieu: "Im Zimmer", lignes: [
          { loc: "Le soignant aide au transfert", de: "Frau Hofer, möchten Sie aufstehen? Ich hole den Rollstuhl.", fr: "Mme Hofer, voulez-vous vous lever ? Je vais chercher le fauteuil roulant." },
          { de: "Ja, aber ich habe Angst zu fallen.", fr: "Oui, mais j'ai peur de tomber." },
          { de: "Keine Sorge. Halten Sie sich gut an mir fest.", fr: "Pas d'inquiétude. Tenez-vous bien à moi." },
          { de: "Können Sie mir helfen?", fr: "Pouvez-vous m'aider ?" },
          { de: "Natürlich. Wir machen das langsam und vorsichtig.", fr: "Bien sûr. Nous faisons ça lentement et prudemment." },
          { de: "Gut, jetzt sitze ich sicher im Rollstuhl.", fr: "Bien, maintenant je suis assise en sécurité dans le fauteuil." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wovor hat Frau Hofer Angst?", options: ["Vor dem Essen", "Zu fallen", "Vor dem Arzt"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe l'aide à sa traduction.", paires: [ { gauche: "der Rollstuhl", droite: "le fauteuil roulant" }, { gauche: "der Rollator", droite: "le déambulateur" }, { gauche: "der Sturz", droite: "la chute" }, { gauche: "vorsichtig", droite: "prudemment" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec « können » (infinitif à la fin).", texte: "{0} Sie allein aufstehen?", accepte: [["Können"]], indice: "Question polie avec können." },
          { type: "qcm", cat: "appro", consigne: "Choisis la phrase correcte.", question: "Comment dire « Je peux vous aider » ?", options: ["Ich kann Ihnen helfen.", "Ich helfen kann Ihnen.", "Ich kann helfen Ihnen."], correct: 0 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Halten", "Sie", "sich", "gut", "fest"], correct: "Halten Sie sich gut fest", traduction: "Tenez-vous bien." },
          { type: "production", cat: "prod", prompt: "Propose ton aide à un résident pour se lever.", modele: "Kann ich Ihnen beim Aufstehen helfen?" }
        ],
        exemplesPlus: [
          { de: "Möchten Sie aufstehen? Ich hole den Rollstuhl.", fr: "Voulez-vous vous lever ? Je vais chercher le fauteuil roulant." },
          { de: "Halten Sie sich gut an mir fest.", fr: "Tenez-vous bien à moi." },
          { de: "Können Sie mir helfen?", fr: "Pouvez-vous m'aider ?" },
          { de: "Wir machen das langsam und vorsichtig.", fr: "Nous faisons ça lentement et prudemment." },
          { de: "Stehen Sie bitte langsam auf.", fr: "Levez-vous lentement, s'il vous plaît." }
        ],
        documentation: { task: "Note : Mme Hofer transférée du lit au fauteuil roulant, sans chute, installée en sécurité.", modele: "Frau Hofer vom Bett in den Rollstuhl transferiert, kein Sturz, sicher gelagert." },
        rp: { scene: "Zika joue Frau Hofer. Tu l'aides à passer du lit au fauteuil roulant.", intro: "Rassure-la, propose ton aide, puis vérifie qu'elle est bien installée.", fin: "Bravo! Sicherer Transfer und beruhigende Worte.", tours: [
          { de: "Ich möchte aufstehen, aber ich habe Angst zu fallen.", fr: "Je veux me lever, mais j'ai peur de tomber.", options: [ { de: "Keine Sorge, halten Sie sich gut an mir fest.", ok: true }, { de: "Stehen Sie einfach schnell auf.", ok: false }, { de: "Bleiben Sie lieber liegen.", ok: false } ] },
          { de: "Können Sie mir helfen?", fr: "Pouvez-vous m'aider ?", options: [ { de: "Natürlich, wir machen das langsam und vorsichtig.", ok: true }, { de: "Nein, ich habe keine Zeit.", ok: false } ] },
          { de: "Geschafft! Sitze ich sicher?", fr: "Ça y est ! Suis-je bien assise ?", options: [ { de: "Ja, Sie sitzen sicher im Rollstuhl.", ok: true }, { de: "Ich glaube schon.", ok: false } ] }
        ] } }
    ]},
    { code: "B1", titre: "Communiquer dans le soin", lecons: [
      { id: "pb1-1", dom: "kh", titreDE: "Aufnahme eines Patienten", titre: "Admission d'un patient", desc: "Données personnelles et anamnèse simple.",
        vocCoursDE: [
          "Bei der **Aufnahme** kommt ein neuer Patient ins Krankenhaus. Du fragst nach den persönlichen Daten: Name, Geburtsdatum und Krankenversicherung.",
          "Wichtig sind auch die **Beschwerden** (die Probleme des Patienten), **Vorerkrankungen** und **Allergien**. Frag freundlich und langsam und trag alles in den Aufnahmebogen ein."
        ],
        vocabulaire: [
          { de: "die Aufnahme", fr: "l'admission", ex: "Die Aufnahme dauert etwa zwanzig Minuten." },
          { de: "aufnehmen", fr: "admettre / accueillir", ex: "Wir nehmen den Patienten jetzt auf." },
          { de: "die Beschwerden", fr: "les troubles / plaintes", ex: "Welche Beschwerden haben Sie?" },
          { de: "die Vorerkrankung", fr: "l'antécédent médical", ex: "Haben Sie Vorerkrankungen?" },
          { de: "die Allergie", fr: "l'allergie", ex: "Haben Sie eine Allergie gegen Medikamente?" },
          { de: "die Versichertenkarte", fr: "la carte d'assuré", ex: "Bitte geben Sie mir Ihre Versichertenkarte." },
          { de: "das Geburtsdatum", fr: "la date de naissance", ex: "Wie ist Ihr Geburtsdatum?" },
          { de: "der Aufnahmebogen", fr: "le formulaire d'admission", ex: "Ich fülle den Aufnahmebogen aus." },
          { de: "die Station", fr: "le service / l'unité", ex: "Sie kommen auf die Station 3." },
          { de: "der Hausarzt", fr: "le médecin traitant", ex: "Wer ist Ihr Hausarzt?" }
        ],
        grammaire: [
          { titre: "Le passé composé (Perfekt) pour l'anamnèse", titreDE: "Das Perfekt",
            regle: "Pour demander ce qui s'est passé, on utilise le Perfekt : haben/sein + participe passé (à la fin). Ex. : « Wann haben die Beschwerden angefangen? » On emploie sein pour un mouvement (stürzen, kommen), haben dans les autres cas.",
            points: [ "« Was ist passiert? » — Qu'est-il arrivé ?", "« Seit wann haben Sie Schmerzen? » — Depuis quand avez-vous mal ?", "« Ich habe schon Medikamente genommen. »" ],
            exemples: [
              { de: "Wann haben die Beschwerden angefangen?", fr: "Frage nach dem Beginn — Perfekt mit *haben*." },
              { de: "Der Patient ist gestürzt.", fr: "Perfekt mit *sein* (Bewegung)." },
              { de: "Ich habe gestern schlecht geschlafen.", fr: "Perfekt mit *haben*." }
            ],
            note: "Le participe passé (angefangen, gestürzt, geschlafen) se place toujours à la fin de la phrase." }
        ],
        dialogue: { titre: "Die Aufnahme", lieu: "An der Aufnahme im Krankenhaus", lignes: [
          { loc: "Le soignant accueille le patient", de: "Guten Tag. Ich nehme Sie jetzt auf. Wie ist Ihr Name?", fr: "Bonjour. Je vais vous admettre. Quel est votre nom ?" },
          { de: "Mein Name ist Peter Frank, geboren am 3. Mai 1958.", fr: "Je m'appelle Peter Frank, né le 3 mai 1958." },
          { de: "Welche Beschwerden haben Sie?", fr: "Quels sont vos troubles ?" },
          { de: "Ich habe seit zwei Tagen starke Bauchschmerzen.", fr: "J'ai de fortes douleurs au ventre depuis deux jours." },
          { de: "Haben Sie Vorerkrankungen oder Allergien?", fr: "Avez-vous des antécédents ou des allergies ?" },
          { de: "Ja, ich habe Diabetes. Allergien habe ich keine.", fr: "Oui, j'ai du diabète. Je n'ai pas d'allergies." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Seit wann hat Herr Frank Bauchschmerzen?", options: ["Seit zwei Tagen", "Seit einer Woche", "Seit heute Morgen"], correct: 0 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Aufnahme", droite: "l'admission" }, { gauche: "die Beschwerden", droite: "les troubles" }, { gauche: "die Allergie", droite: "l'allergie" }, { gauche: "der Aufnahmebogen", droite: "le formulaire d'admission" } ] },
          { type: "trou", cat: "appro", consigne: "Complète au passé composé (Perfekt).", texte: "Wann {0} die Beschwerden angefangen?", accepte: [["haben"]], indice: "haben + Partizip à la fin." },
          { type: "qcm", cat: "appro", consigne: "Choisis l'auxiliaire correct.", question: "Quelle phrase est juste ?", options: ["Der Patient hat gestürzt.", "Der Patient ist gestürzt.", "Der Patient gestürzt ist."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la question dans l'ordre.", mots: ["Haben", "Sie", "Vorerkrankungen"], correct: "Haben Sie Vorerkrankungen", traduction: "Avez-vous des antécédents médicaux ?" },
          { type: "production", cat: "prod", prompt: "Demande poliment au patient son nom et sa date de naissance.", modele: "Wie ist Ihr Name und Ihr Geburtsdatum?" }
        ],
        documentation: { task: "Note à l'admission : M. Frank, douleurs abdominales depuis 2 jours, antécédent de diabète, pas d'allergie.", modele: "Herr Frank aufgenommen: seit 2 Tagen Bauchschmerzen, Vorerkrankung Diabetes, keine Allergien bekannt." },
        rp: { scene: "Zika spielt den neuen Patienten Herrn Frank. Du nimmst ihn auf.", intro: "Begrüße ihn, frag nach Beschwerden, Vorerkrankungen und Allergien.", fin: "Sehr gut! Du hast die Aufnahme freundlich und vollständig gemacht.", tours: [
          { de: "Guten Tag. Ich soll heute aufgenommen werden.", options: [ { de: "Guten Tag. Wie ist Ihr Name und Ihr Geburtsdatum?", ok: true }, { de: "Warten Sie draußen.", ok: false }, { de: "Das interessiert mich nicht.", ok: false } ] },
          { de: "Peter Frank, geboren 1958. Ich habe Bauchschmerzen.", options: [ { de: "Seit wann haben Sie die Schmerzen?", ok: true }, { de: "Das ist nicht wichtig.", ok: false } ] },
          { de: "Seit zwei Tagen. Was brauchen Sie noch?", options: [ { de: "Haben Sie Vorerkrankungen oder Allergien?", ok: true }, { de: "Nichts, gehen Sie.", ok: false } ] }
        ] } },
      { id: "pb1-2", dom: "grund", titreDE: "Schmerzen erfassen", titre: "Évaluer la douleur", desc: "« Où avez-vous mal ? », l'échelle de la douleur.",
        vocCoursDE: [
          "Um Schmerzen zu **erfassen**, fragst du: Wo? Seit wann? Wie stark? Mit der **Schmerzskala** von 0 bis 10 beschreibt der Patient die **Intensität**.",
          "Du beschreibst die Art des Schmerzes: **stechend** (wie eine Nadel), **dumpf** (nicht klar), **drückend**. Manchmal **strahlt** der Schmerz in einen anderen Körperteil **aus**."
        ],
        vocabulaire: [
          { de: "erfassen", fr: "évaluer / recueillir", ex: "Ich erfasse jetzt Ihre Schmerzen." },
          { de: "die Schmerzskala", fr: "l'échelle de la douleur", ex: "Auf der Schmerzskala von 0 bis 10?" },
          { de: "die Intensität", fr: "l'intensité", ex: "Wie ist die Intensität der Schmerzen?" },
          { de: "stechend", fr: "lancinant (comme une piqûre)", ex: "Der Schmerz ist stechend." },
          { de: "dumpf", fr: "sourd", ex: "Ich habe einen dumpfen Schmerz." },
          { de: "drückend", fr: "oppressant", ex: "Es ist ein drückendes Gefühl in der Brust." },
          { de: "ausstrahlen", fr: "irradier", ex: "Der Schmerz strahlt in den Arm aus." },
          { de: "erträglich", fr: "supportable", ex: "Sind die Schmerzen erträglich?" },
          { de: "unerträglich", fr: "insupportable", ex: "Der Schmerz ist fast unerträglich." },
          { de: "lindern", fr: "soulager", ex: "Dieses Medikament lindert den Schmerz." }
        ],
        grammaire: [
          { titre: "Préciser l'intensité et la durée", titreDE: "seit, wie stark, immer noch",
            regle: "Pour situer la douleur dans le temps, on utilise seit + datif (seit zwei Tagen). Pour l'intensité, on demande « Wie stark? » et on compare : stark, stärker, am stärksten.",
            points: [ "« Seit wann haben Sie Schmerzen? » + seit + datif", "« Wie stark sind die Schmerzen? » (0–10)", "« Wird es besser oder schlechter? »" ],
            exemples: [
              { de: "Ich habe seit drei Tagen Kopfschmerzen.", fr: "*seit* + Dativ für die Dauer." },
              { de: "Heute sind die Schmerzen stärker als gestern.", fr: "Vergleich: *stärker als*." },
              { de: "Der Schmerz strahlt in den Rücken aus.", fr: "trennbares Verb *ausstrahlen*." }
            ],
            note: "Note toujours l'intensité avec un chiffre (z. B. 7/10) — c'est précis et utile pour le médecin." }
        ],
        dialogue: { titre: "Wie stark sind die Schmerzen?", lieu: "Am Krankenbett", lignes: [
          { loc: "Le soignant évalue la douleur", de: "Sie sehen blass aus. Haben Sie Schmerzen?", fr: "Vous êtes pâle. Avez-vous mal ?" },
          { de: "Ja, hier in der Brust. Es drückt sehr.", fr: "Oui, ici dans la poitrine. Ça appuie fort." },
          { de: "Auf einer Skala von 0 bis 10 — wie stark?", fr: "Sur une échelle de 0 à 10, c'est quelle intensité ?" },
          { de: "Ungefähr 7. Und es strahlt in den linken Arm aus.", fr: "Environ 7. Et ça irradie dans le bras gauche." },
          { de: "Seit wann haben Sie diese Schmerzen?", fr: "Depuis quand avez-vous ces douleurs ?" },
          { de: "Seit etwa einer halben Stunde.", fr: "Depuis environ une demi-heure." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wie stark sind die Schmerzen?", options: ["3 von 10", "7 von 10", "10 von 10"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le type de douleur à sa traduction.", paires: [ { gauche: "stechend", droite: "lancinant" }, { gauche: "dumpf", droite: "sourd" }, { gauche: "drückend", droite: "oppressant" }, { gauche: "unerträglich", droite: "insupportable" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec la bonne préposition de durée.", texte: "Ich habe {0} drei Tagen Schmerzen.", accepte: [["seit"]], indice: "seit + datif." },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne question.", question: "Comment demander l'intensité ?", options: ["Wo sind die Schmerzen?", "Wie stark sind die Schmerzen?", "Wann kommen Sie?"], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Der", "Schmerz", "strahlt", "in", "den", "Arm", "aus"], correct: "Der Schmerz strahlt in den Arm aus", traduction: "La douleur irradie dans le bras." },
          { type: "production", cat: "prod", prompt: "Demande au patient où il a mal et l'intensité sur 10.", modele: "Wo haben Sie Schmerzen und wie stark sind sie von 0 bis 10?" }
        ],
        documentation: { task: "Note la douleur : poitrine, oppressante, 7/10, irradiant dans le bras gauche, depuis 30 minutes.", modele: "Schmerzen Brustbereich, drückend, 7/10, Ausstrahlung in den linken Arm, seit ca. 30 Min." },
        rp: { scene: "Zika spielt einen Patienten mit Schmerzen. Du erfasst die Schmerzen.", intro: "Frag, wo es wehtut, wie stark (0–10) und seit wann.", fin: "Sehr gut! Du hast die Schmerzen genau erfasst und kannst sie dokumentieren.", tours: [
          { de: "Es tut so weh in der Brust!", options: [ { de: "Auf einer Skala von 0 bis 10 — wie stark?", ok: true }, { de: "Das ist sicher nicht so schlimm.", ok: false }, { de: "Trinken Sie einen Kaffee.", ok: false } ] },
          { de: "So ungefähr 7. Es drückt sehr.", options: [ { de: "Strahlt der Schmerz irgendwohin aus?", ok: true }, { de: "Gut, dann warten wir.", ok: false } ] },
          { de: "Ja, in den linken Arm. Seit einer halben Stunde.", options: [ { de: "Ich informiere sofort den Arzt und dokumentiere alles.", ok: true }, { de: "Das geht bestimmt von allein weg.", ok: false } ] }
        ] } },
      { id: "pb1-3", dom: "grund", titreDE: "Medikamente verabreichen", titre: "Donner les médicaments", desc: "Comprimés, gouttes, dosage et horaires.",
        vocCoursDE: [
          "Du **verabreichst** Medikamente nach Plan: die richtige **Dosis**, zur richtigen Zeit. Manche Tabletten nimmt man **nüchtern** (vor dem Essen), andere **nach dem Essen**.",
          "Achte auf **Nebenwirkungen** und erkläre dem Patienten ruhig, was er nimmt. Bei Fragen hilft der **Beipackzettel**."
        ],
        vocabulaire: [
          { de: "verabreichen", fr: "administrer", ex: "Ich verabreiche jetzt Ihre Medikamente." },
          { de: "die Dosis", fr: "la dose", ex: "Die Dosis ist eine Tablette." },
          { de: "die Tablette", fr: "le comprimé", ex: "Nehmen Sie die Tablette mit Wasser." },
          { de: "die Tropfen", fr: "les gouttes", ex: "Zehn Tropfen am Morgen." },
          { de: "nüchtern", fr: "à jeun", ex: "Dieses Medikament nehmen Sie nüchtern." },
          { de: "die Nebenwirkung", fr: "l'effet secondaire", ex: "Das Medikament hat wenige Nebenwirkungen." },
          { de: "einnehmen", fr: "prendre (un médicament)", ex: "Bitte nehmen Sie die Tablette jetzt ein." },
          { de: "regelmäßig", fr: "régulièrement", ex: "Nehmen Sie das Medikament regelmäßig." },
          { de: "die Spritze", fr: "la piqûre / seringue", ex: "Sie bekommen eine Spritze." },
          { de: "der Beipackzettel", fr: "la notice", ex: "Lesen Sie bitte den Beipackzettel." }
        ],
        grammaire: [
          { titre: "Indiquer le moment et la fréquence", titreDE: "vor/nach dem Essen, dreimal täglich",
            regle: "Pour dire QUAND prendre un médicament : vor dem Essen (avant le repas), nach dem Essen (après), zur Nacht (au coucher). Pour la fréquence : einmal / zweimal / dreimal täglich (une/deux/trois fois par jour).",
            points: [ "« Nehmen Sie die Tablette nach dem Essen. »", "« dreimal täglich » = 3 fois par jour", "« morgens, mittags und abends »" ],
            exemples: [
              { de: "Nehmen Sie die Tablette dreimal täglich.", fr: "Häufigkeit: *dreimal täglich*." },
              { de: "Diese Tropfen nehmen Sie vor dem Essen.", fr: "Zeitpunkt: *vor dem Essen* (Dativ)." },
              { de: "Das Medikament wirkt nach einer Stunde.", fr: "*nach* + Dativ für die Zeit." }
            ],
            note: "vor / nach / zu sont suivis du datif : vor dem Essen, nach dem Frühstück." }
        ],
        dialogue: { titre: "Die Medikamentengabe", lieu: "Im Patientenzimmer", lignes: [
          { loc: "Le soignant apporte les médicaments", de: "Guten Morgen. Hier sind Ihre Medikamente für heute.", fr: "Bonjour. Voici vos médicaments pour aujourd'hui." },
          { de: "Was muss ich denn nehmen?", fr: "Que dois-je prendre ?" },
          { de: "Eine Tablette gegen den Blutdruck, dreimal täglich.", fr: "Un comprimé pour la tension, trois fois par jour." },
          { de: "Vor oder nach dem Essen?", fr: "Avant ou après le repas ?" },
          { de: "Nach dem Essen, bitte. Hier ist ein Glas Wasser.", fr: "Après le repas, s'il vous plaît. Voici un verre d'eau." },
          { de: "Gut. Gibt es Nebenwirkungen?", fr: "Bien. Y a-t-il des effets secondaires ?" }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wann soll der Patient die Tablette nehmen?", options: ["Nüchtern", "Nach dem Essen", "Zur Nacht"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Dosis", droite: "la dose" }, { gauche: "nüchtern", droite: "à jeun" }, { gauche: "die Nebenwirkung", droite: "l'effet secondaire" }, { gauche: "die Spritze", droite: "la piqûre" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec la bonne préposition (+ datif).", texte: "Nehmen Sie die Tablette {0} dem Essen.", accepte: [["nach", "vor"]], indice: "vor / nach + datif." },
          { type: "qcm", cat: "appro", consigne: "Choisis « 3 fois par jour ».", question: "Comment dire « trois fois par jour » ?", options: ["dreimal täglich", "drei Tage lang", "um drei Uhr"], correct: 0 },
          { type: "ordre", cat: "appro", consigne: "Remets la consigne dans l'ordre.", mots: ["Nehmen", "Sie", "die", "Tablette", "nach", "dem", "Essen"], correct: "Nehmen Sie die Tablette nach dem Essen", traduction: "Prenez le comprimé après le repas." },
          { type: "production", cat: "prod", prompt: "Explique au patient de prendre un comprimé trois fois par jour, après le repas.", modele: "Nehmen Sie bitte eine Tablette dreimal täglich, nach dem Essen." }
        ],
        documentation: { task: "Note l'administration : comprimé pour la tension donné après le déjeuner, patient l'a pris sans problème.", modele: "Blutdrucktablette nach dem Mittagessen verabreicht, vom Patienten problemlos eingenommen." },
        rp: { scene: "Zika spielt einen Patienten. Du verabreichst die Medikamente und erklärst sie.", intro: "Erkläre, was er nimmt, wie oft und wann.", fin: "Sehr gut! Klare Erklärung und korrekte Gabe — und du dokumentierst es.", tours: [
          { de: "Was sind das für Tabletten?", options: [ { de: "Das ist eine Tablette gegen den Blutdruck.", ok: true }, { de: "Keine Ahnung, nehmen Sie sie einfach.", ok: false }, { de: "Das müssen Sie nicht wissen.", ok: false } ] },
          { de: "Wie oft muss ich sie nehmen?", options: [ { de: "Dreimal täglich, nach dem Essen.", ok: true }, { de: "Wann Sie wollen.", ok: false } ] },
          { de: "Gut, ich nehme sie jetzt.", options: [ { de: "Sehr gut. Ich dokumentiere die Gabe.", ok: true }, { de: "Egal, das schreibe ich nicht auf.", ok: false } ] }
        ] } },
      { id: "pb1-4", dom: "kh", titreDE: "Übergabe im Team", titre: "La transmission d'équipe", desc: "La relève : transmettre l'essentiel sans erreur.",
        vocCoursDE: [
          "Bei der **Übergabe** (am Ende der **Schicht**) informierst du das Team über jeden Patienten: Name, **Zustand** und was heute passiert ist.",
          "Sag klar, ob der Zustand **stabil** oder **auffällig** ist, und ob sich etwas **verbessert** oder **verschlechtert** hat. Kurz, präzise, vollständig."
        ],
        vocabulaire: [
          { de: "die Übergabe", fr: "la transmission / relève", ex: "Die Übergabe ist um 14 Uhr." },
          { de: "die Schicht", fr: "le poste / l'équipe (de travail)", ex: "Meine Schicht endet jetzt." },
          { de: "der Zustand", fr: "l'état", ex: "Der Zustand ist stabil." },
          { de: "stabil", fr: "stable", ex: "Der Patient ist stabil." },
          { de: "auffällig", fr: "anormal / remarquable", ex: "Der Blutdruck war heute auffällig." },
          { de: "unauffällig", fr: "sans particularité", ex: "Die Werte sind unauffällig." },
          { de: "sich verschlechtern", fr: "se dégrader", ex: "Sein Zustand hat sich verschlechtert." },
          { de: "sich verbessern", fr: "s'améliorer", ex: "Die Schmerzen haben sich verbessert." },
          { de: "melden", fr: "signaler / rapporter", ex: "Ich melde das dem Arzt." },
          { de: "der Verlauf", fr: "l'évolution", ex: "Der Verlauf ist positiv." }
        ],
        grammaire: [
          { titre: "Rapporter ce qui s'est passé pendant la garde", titreDE: "Bericht im Perfekt",
            regle: "Pour la transmission, on raconte au Perfekt ce qui s'est passé : « Frau Meier hat gut geschlafen. », « Der Blutdruck hat sich normalisiert. ». On résume l'état actuel au présent : « Der Patient ist stabil. »",
            points: [ "« Es ist nichts Besonderes passiert. »", "« Herr X hat über Schmerzen geklagt. »", "« Der Zustand ist stabil / hat sich verschlechtert. »" ],
            exemples: [
              { de: "Frau Meier hat heute gut gegessen.", fr: "Bericht im *Perfekt*." },
              { de: "Der Blutdruck hat sich normalisiert.", fr: "reflexives Verb im Perfekt." },
              { de: "Der Patient ist im Moment stabil.", fr: "aktueller Zustand im *Präsens*." }
            ],
            note: "Transmets seulement les faits importants : sommeil, douleurs, valeurs, événements, soins en attente." }
        ],
        dialogue: { titre: "Schichtübergabe", lieu: "Im Stationszimmer", lignes: [
          { loc: "La collègue de la garde de nuit transmet", de: "So, ich übergebe dir Zimmer 12, Herrn Frank.", fr: "Voilà, je te transmets la chambre 12, M. Frank." },
          { de: "Wie war die Nacht?", fr: "Comment s'est passée la nuit ?" },
          { de: "Er hat unruhig geschlafen und über Bauchschmerzen geklagt.", fr: "Il a dormi de façon agitée et s'est plaint de douleurs au ventre." },
          { de: "Wie ist sein Zustand jetzt?", fr: "Quel est son état maintenant ?" },
          { de: "Im Moment stabil. Der Arzt kommt um zehn zur Visite.", fr: "Pour l'instant stable. Le médecin passe à dix heures pour la visite." },
          { de: "Alles klar, danke für die Übergabe.", fr: "C'est noté, merci pour la transmission." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wie hat Herr Frank geschlafen?", options: ["Sehr gut", "Unruhig", "Gar nicht"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "der Zustand", droite: "l'état" }, { gauche: "stabil", droite: "stable" }, { gauche: "auffällig", droite: "anormal" }, { gauche: "die Schicht", droite: "le poste de travail" } ] },
          { type: "trou", cat: "appro", consigne: "Complète au passé composé (Perfekt).", texte: "Herr Frank {0} über Schmerzen geklagt.", accepte: [["hat"]], indice: "haben + Partizip." },
          { type: "qcm", cat: "appro", consigne: "Choisis l'état actuel au présent.", question: "Comment dire « Il est stable en ce moment » ?", options: ["Er hat stabil.", "Er ist im Moment stabil.", "Er stabil ist."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Der", "Zustand", "hat", "sich", "verschlechtert"], correct: "Der Zustand hat sich verschlechtert", traduction: "L'état s'est dégradé." },
          { type: "production", cat: "prod", prompt: "Transmets en une phrase : M. Frank a bien dormi et est stable.", modele: "Herr Frank hat gut geschlafen und ist stabil." }
        ],
        documentation: { task: "Rédige la transmission : M. Frank, nuit agitée, douleurs abdominales, état stable, visite du médecin à 10h.", modele: "Herr Frank: unruhige Nacht, Bauchschmerzen, Zustand stabil, Arztvisite um 10 Uhr." },
        rp: { scene: "Zika spielt deine Kollegin bei der Übergabe. Du übergibst Herrn Frank.", intro: "Berichte über die Nacht, den Zustand und die nächsten Schritte.", fin: "Perfekt! Eine klare und vollständige Übergabe.", tours: [
          { de: "Wie war die Nacht bei Herrn Frank?", options: [ { de: "Er hat unruhig geschlafen und über Schmerzen geklagt.", ok: true }, { de: "Weiß ich nicht mehr.", ok: false }, { de: "Frag den Patienten selbst.", ok: false } ] },
          { de: "Und wie ist sein Zustand jetzt?", options: [ { de: "Im Moment ist er stabil.", ok: true }, { de: "Keine Ahnung.", ok: false } ] },
          { de: "Gibt es heute noch etwas zu tun?", options: [ { de: "Ja, der Arzt kommt um zehn zur Visite.", ok: true }, { de: "Nein, mach was du willst.", ok: false } ] }
        ] } },
      { id: "pb1-5", dom: "heim", titreDE: "Mit Angehörigen sprechen", titre: "Parler aux proches", desc: "Informer et rassurer les familles.",
        vocCoursDE: [
          "Die **Angehörigen** (die Familie) machen sich oft **Sorgen**. Deine Aufgabe ist es, sie freundlich zu **informieren** und zu **beruhigen**.",
          "Sprich ruhig und **verständlich**. Achtung: Über medizinische Details entscheidet der Arzt — du gibst **Auskunft** im Rahmen deiner Aufgaben und zeigst **Verständnis**."
        ],
        vocabulaire: [
          { de: "die Angehörigen", fr: "les proches / la famille", ex: "Die Angehörigen sind sehr besorgt." },
          { de: "beruhigen", fr: "rassurer / calmer", ex: "Ich versuche, die Tochter zu beruhigen." },
          { de: "informieren", fr: "informer", ex: "Ich informiere Sie gern." },
          { de: "die Sorge", fr: "le souci / l'inquiétude", ex: "Ich verstehe Ihre Sorge." },
          { de: "der Besuch", fr: "la visite", ex: "Der Besuch ist von 15 bis 18 Uhr." },
          { de: "verständlich", fr: "compréhensible", ex: "Ich erkläre es Ihnen verständlich." },
          { de: "das Verständnis", fr: "la compréhension", ex: "Danke für Ihr Verständnis." },
          { de: "die Auskunft", fr: "le renseignement", ex: "Diese Auskunft gibt Ihnen der Arzt." },
          { de: "sich kümmern um", fr: "s'occuper de", ex: "Wir kümmern uns gut um Ihre Mutter." },
          { de: "geduldig", fr: "patient", ex: "Bleiben Sie bitte geduldig." }
        ],
        grammaire: [
          { titre: "La forme de politesse (Konjunktiv II)", titreDE: "Höflich: könnten, würden, hätten",
            regle: "Pour être très poli avec les proches, on utilise le Konjunktiv II : könnten Sie…? (pourriez-vous), würden Sie…? (voudriez-vous), ich hätte eine Frage. C'est plus doux que l'impératif.",
            points: [ "« Könnten Sie bitte im Wartezimmer warten? »", "« Würden Sie später noch einmal anrufen? »", "« Ich hätte eine kurze Frage. »" ],
            exemples: [
              { de: "Könnten Sie bitte kurz warten?", fr: "höfliche Bitte mit *könnten*." },
              { de: "Würden Sie mir Ihre Telefonnummer geben?", fr: "höfliche Bitte mit *würden*." },
              { de: "Ich verstehe Ihre Sorge sehr gut.", fr: "Empathie zeigen." }
            ],
            note: "Montre de l'empathie : « Ich verstehe Ihre Sorge » apaise souvent plus que l'information seule." }
        ],
        dialogue: { titre: "Ein Gespräch mit der Tochter", lieu: "Auf dem Flur des Pflegeheims", lignes: [
          { loc: "La fille d'une résidente est inquiète", de: "Entschuldigung, wie geht es meiner Mutter heute?", fr: "Excusez-moi, comment va ma mère aujourd'hui ?" },
          { de: "Guten Tag. Ihrer Mutter geht es heute besser, keine Sorge.", fr: "Bonjour. Votre mère va mieux aujourd'hui, ne vous inquiétez pas." },
          { de: "Sie hat gestern so wenig gegessen.", fr: "Elle a si peu mangé hier." },
          { de: "Ich verstehe Ihre Sorge. Heute hat sie gut gefrühstückt.", fr: "Je comprends votre inquiétude. Aujourd'hui elle a bien pris son petit-déjeuner." },
          { de: "Könnten Sie mir mehr zur Behandlung sagen?", fr: "Pourriez-vous m'en dire plus sur le traitement ?" },
          { de: "Diese Auskunft gibt Ihnen am besten der Arzt.", fr: "Pour ce renseignement, le médecin est le mieux placé." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wer gibt Auskunft über die Behandlung?", options: ["Die Pflegekraft", "Der Arzt", "Die Tochter"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Angehörigen", droite: "les proches" }, { gauche: "die Sorge", droite: "l'inquiétude" }, { gauche: "beruhigen", droite: "rassurer" }, { gauche: "der Besuch", droite: "la visite" } ] },
          { type: "trou", cat: "appro", consigne: "Complète la forme polie (Konjunktiv II).", texte: "{0} Sie bitte kurz im Wartezimmer warten?", accepte: [["Könnten", "Würden"]], indice: "könnten / würden Sie…?" },
          { type: "qcm", cat: "appro", consigne: "Choisis la phrase la plus empathique.", question: "Que dire à une proche inquiète ?", options: ["Das ist nicht mein Problem.", "Ich verstehe Ihre Sorge.", "Beruhigen Sie sich endlich."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase polie dans l'ordre.", mots: ["Könnten", "Sie", "bitte", "kurz", "warten"], correct: "Könnten Sie bitte kurz warten", traduction: "Pourriez-vous patienter un instant ?" },
          { type: "production", cat: "prod", prompt: "Rassure une proche : sa mère va mieux et a bien mangé aujourd'hui.", modele: "Keine Sorge, Ihrer Mutter geht es besser und sie hat heute gut gegessen." }
        ],
        documentation: { task: "Note l'entretien : entretien avec la fille de Mme X, informée de l'amélioration, orientée vers le médecin pour le traitement.", modele: "Gespräch mit der Tochter von Frau X: über Besserung informiert, für Behandlungsfragen an den Arzt verwiesen." },
        rp: { scene: "Zika spielt die besorgte Tochter einer Bewohnerin. Du sprichst mit ihr.", intro: "Bleib freundlich, zeig Verständnis, informiere und verweise bei medizinischen Fragen an den Arzt.", fin: "Sehr gut! Freundlich, empathisch und korrekt — genau richtig.", tours: [
          { de: "Wie geht es meiner Mutter? Ich mache mir Sorgen.", options: [ { de: "Ich verstehe Ihre Sorge. Ihrer Mutter geht es heute besser.", ok: true }, { de: "Sie müssen sich keine Sorgen machen, das nervt.", ok: false }, { de: "Dafür habe ich keine Zeit.", ok: false } ] },
          { de: "Sie hat doch gestern fast nichts gegessen!", options: [ { de: "Heute hat sie gut gefrühstückt, das ist ein gutes Zeichen.", ok: true }, { de: "Das ist mir egal.", ok: false } ] },
          { de: "Können Sie mir mehr zur Behandlung sagen?", options: [ { de: "Diese Auskunft gibt Ihnen am besten der Arzt.", ok: true }, { de: "Ja, ich ändere einfach die Medikamente.", ok: false } ] }
        ] } },
      { id: "pb1-6", dom: "grund", titreDE: "Notfälle erkennen und melden", titre: "Reconnaître et signaler une urgence", desc: "Chute, malaise, perte de connaissance.",
        vocCoursDE: [
          "Ein **Notfall** ist eine gefährliche Situation: ein **Sturz**, ein Patient ist **bewusstlos** oder die **Atmung** ist auffällig. Du musst **sofort reagieren**.",
          "Sprich den Patienten an: « Hören Sie mich? » Ist er nicht **ansprechbar**, hol Hilfe und setz den **Notruf** ab. Bleib ruhig und melde klar, was passiert ist."
        ],
        vocabulaire: [
          { de: "der Notfall", fr: "l'urgence", ex: "Das ist ein Notfall!" },
          { de: "der Sturz", fr: "la chute", ex: "Der Patient hatte einen Sturz." },
          { de: "bewusstlos", fr: "inconscient", ex: "Die Bewohnerin ist bewusstlos." },
          { de: "die Atmung", fr: "la respiration", ex: "Die Atmung ist flach." },
          { de: "ansprechbar", fr: "conscient / qui répond", ex: "Der Patient ist nicht ansprechbar." },
          { de: "der Notruf", fr: "l'appel d'urgence", ex: "Ich setze den Notruf ab." },
          { de: "sofort", fr: "immédiatement", ex: "Kommen Sie sofort!" },
          { de: "reagieren", fr: "réagir", ex: "Wir müssen schnell reagieren." },
          { de: "Hilfe holen", fr: "chercher de l'aide", ex: "Hol bitte sofort Hilfe!" },
          { de: "stabil/instabil", fr: "stable / instable", ex: "Der Zustand ist instabil." }
        ],
        grammaire: [
          { titre: "L'impératif d'urgence", titreDE: "Schnelle Anweisungen im Notfall",
            regle: "Dans l'urgence, on donne des ordres courts et clairs à l'impératif : « Holen Sie Hilfe! », « Rufen Sie den Arzt! », « Bleiben Sie bei dem Patienten! ». On tutoie souvent un collègue : « Hol den Notfallwagen! »",
            points: [ "« Holen Sie sofort den Arzt! »", "« Bleib bei ihr, ich hole Hilfe! »", "« Setzen Sie den Notruf ab! »" ],
            exemples: [
              { de: "Holen Sie sofort den Arzt!", fr: "Imperativ (Sie), dringend." },
              { de: "Bleib bei dem Patienten!", fr: "Imperativ (du) für die Kollegin." },
              { de: "Der Patient ist nicht ansprechbar.", fr: "wichtige Beobachtung melden." }
            ],
            note: "Dans l'urgence : reste calme, donne des ordres courts, et dis toujours QUI fait QUOI." }
        ],
        dialogue: { titre: "Ein Sturz im Zimmer", lieu: "Im Patientenzimmer", lignes: [
          { loc: "Une aide-soignante découvre une chute", de: "Schnell, Frau Berg liegt auf dem Boden!", fr: "Vite, Mme Berg est par terre !" },
          { de: "Ist sie ansprechbar? Frau Berg, hören Sie mich?", fr: "Est-elle consciente ? Mme Berg, vous m'entendez ?" },
          { de: "Nein, sie reagiert nicht.", fr: "Non, elle ne réagit pas." },
          { de: "Bleib bei ihr! Ich hole den Arzt und setze den Notruf ab.", fr: "Reste près d'elle ! Je vais chercher le médecin et je lance l'alerte." },
          { de: "Atmet sie normal?", fr: "Respire-t-elle normalement ?" },
          { de: "Ja, die Atmung ist da. Wir bleiben ruhig.", fr: "Oui, la respiration est présente. On reste calmes." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Ist Frau Berg ansprechbar?", options: ["Ja", "Nein, sie reagiert nicht", "Sie schläft"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "der Sturz", droite: "la chute" }, { gauche: "bewusstlos", droite: "inconscient" }, { gauche: "die Atmung", droite: "la respiration" }, { gauche: "der Notruf", droite: "l'appel d'urgence" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'ordre d'urgence (impératif, Sie).", texte: "{0} Sie sofort den Arzt!", accepte: [["Holen", "Rufen"]], indice: "Impératif : Holen/Rufen Sie…!" },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne première réaction.", question: "Un patient est par terre. Que fais-tu d'abord ?", options: ["Ich gehe weiter.", "Ich spreche ihn an: Hören Sie mich?", "Ich rufe später an."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets l'ordre d'urgence dans le bon ordre.", mots: ["Bleib", "bei", "ihr", "und", "hol", "Hilfe"], correct: "Bleib bei ihr und hol Hilfe", traduction: "Reste près d'elle et va chercher de l'aide." },
          { type: "production", cat: "prod", prompt: "Donne deux ordres clairs : aller chercher le médecin et rester près du patient.", modele: "Hol den Arzt und bleib bei dem Patienten!" }
        ],
        documentation: { task: "Note l'incident : Mme Berg trouvée au sol à 14h10, non réactive, respiration présente, médecin alerté immédiatement.", modele: "Frau Berg um 14:10 Uhr am Boden vorgefunden, nicht ansprechbar, Atmung vorhanden, Arzt sofort verständigt." },
        rp: { scene: "Zika spielt deine Kollegin. Ihr entdeckt zusammen einen Notfall (ein Sturz).", intro: "Reagiere ruhig: prüfe die Reaktion, verteile Aufgaben, hol Hilfe.", fin: "Sehr gut! Ruhig, klar und richtig gehandelt — und du dokumentierst den Notfall.", tours: [
          { de: "Hilfe! Herr Klein ist gestürzt und liegt am Boden!", options: [ { de: "Herr Klein, hören Sie mich? Sind Sie ansprechbar?", ok: true }, { de: "Lass ihn einfach liegen.", ok: false }, { de: "Ich mache erst meine Pause.", ok: false } ] },
          { de: "Er antwortet nicht!", options: [ { de: "Bleib bei ihm, ich hole sofort den Arzt!", ok: true }, { de: "Vielleicht steht er gleich von allein auf.", ok: false } ] },
          { de: "Soll ich sonst noch etwas tun?", options: [ { de: "Ja, prüfe die Atmung und bleib ruhig.", ok: true }, { de: "Nein, geh ruhig nach Hause.", ok: false } ] }
        ] } }
    ]},
    { code: "B2", titre: "Langue professionnelle et documentation", lecons: [
      { id: "pb2-1", dom: "grund", titreDE: "Pflegedokumentation", titre: "La documentation des soins", desc: "Rédiger le rapport et la planification de soins.",
        vocCoursDE: [
          "Die **Pflegedokumentation** ist Pflicht. Du **hältst** alles **fest**, was du beobachtest und tust. Ein guter **Pflegebericht** ist kurz, **objektiv** und **nachvollziehbar**.",
          "Schreib Fakten, keine Meinungen. Nicht *Der Patient ist faul*, sondern *Der Patient lehnt die Mobilisation ab*. Notiere immer die **Maßnahme**, die Uhrzeit und die Wirkung."
        ],
        vocabulaire: [
          { de: "die Pflegedokumentation", fr: "la documentation des soins", ex: "Die Pflegedokumentation ist gesetzlich vorgeschrieben." },
          { de: "der Pflegebericht", fr: "le rapport de soins", ex: "Ich schreibe den Pflegebericht am Ende der Schicht." },
          { de: "die Pflegeplanung", fr: "la planification des soins", ex: "In der Pflegeplanung stehen die Ziele." },
          { de: "dokumentieren", fr: "documenter", ex: "Bitte dokumentieren Sie jede Maßnahme." },
          { de: "der Eintrag", fr: "l'entrée / la note", ex: "Jeder Eintrag braucht Datum und Uhrzeit." },
          { de: "objektiv", fr: "objectif", ex: "Bleiben Sie objektiv, nur Fakten." },
          { de: "nachvollziehbar", fr: "traçable / compréhensible", ex: "Die Doku muss nachvollziehbar sein." },
          { de: "die Maßnahme", fr: "la mesure / l'action", ex: "Welche Maßnahme haben Sie durchgeführt?" },
          { de: "festhalten", fr: "consigner", ex: "Halten Sie die Beobachtung schriftlich fest." },
          { de: "die Wirkung", fr: "l'effet", ex: "Notieren Sie auch die Wirkung des Medikaments." }
        ],
        grammaire: [
          { titre: "Le passif pour documenter", titreDE: "Passiv im Pflegebericht",
            regle: "Pour décrire une action faite, on utilise souvent le passif : werden + participe passé. Présent : « Die Wunde wird täglich versorgt. » Passé (Präteritum) : « Der Patient wurde gewaschen. » C'est neutre et professionnel.",
            points: [ "« Der Verband wurde gewechselt. »", "« Die Medikamente werden um 8 Uhr gegeben. »", "« Der Patient wurde mobilisiert. »" ],
            exemples: [
              { de: "Der Verband wurde gewechselt.", fr: "Passiv Präteritum: *wurde* + Partizip." },
              { de: "Die Wunde wird täglich gereinigt.", fr: "Passiv Präsens für eine Routine." },
              { de: "Der Patient wurde um 14 Uhr mobilisiert.", fr: "dokumentierte Maßnahme mit Uhrzeit." }
            ],
            note: "Règle d'or : on documente des faits observables, jamais un jugement personnel." }
        ],
        dialogue: { titre: "Richtig dokumentieren", lieu: "Im Stationszimmer", lignes: [
          { loc: "Une collègue expérimentée te guide", de: "Wie schreibe ich das am besten in den Bericht?", fr: "Comment écrire ça au mieux dans le rapport ?" },
          { de: "Schreib nur, was du beobachtet hast — objektiv.", fr: "Écris seulement ce que tu as observé — de façon objective." },
          { de: "Also nicht *Er war unfreundlich*?", fr: "Donc pas « il était désagréable » ?" },
          { de: "Genau. Schreib: *Der Patient lehnte das Waschen ab*.", fr: "Exactement. Écris : « Le patient a refusé la toilette. »" },
          { de: "Und die Uhrzeit dazu?", fr: "Et l'heure avec ça ?" },
          { de: "Immer. Datum, Uhrzeit, Maßnahme und Wirkung.", fr: "Toujours. Date, heure, mesure et effet." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was gehört in jeden Eintrag?", options: ["Eine persönliche Meinung", "Datum, Uhrzeit, Maßnahme, Wirkung", "Nur der Name"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "der Pflegebericht", droite: "le rapport de soins" }, { gauche: "objektiv", droite: "objectif" }, { gauche: "die Maßnahme", droite: "la mesure" }, { gauche: "festhalten", droite: "consigner" } ] },
          { type: "trou", cat: "appro", consigne: "Complète le passif (Präteritum).", texte: "Der Verband {0} gewechselt.", accepte: [["wurde"]], indice: "werden au passé → wurde + participe." },
          { type: "qcm", cat: "appro", consigne: "Choisis la formulation objective.", question: "Quelle phrase est correcte pour un rapport ?", options: ["Der Patient ist faul.", "Der Patient lehnt die Mobilisation ab.", "Der Patient nervt."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase au passif.", mots: ["Der", "Patient", "wurde", "um", "14", "Uhr", "mobilisiert"], correct: "Der Patient wurde um 14 Uhr mobilisiert", traduction: "Le patient a été mobilisé à 14h." },
          { type: "production", cat: "prod", prompt: "Reformule de façon objective : « Le patient n'a pas voulu manger. »", modele: "Der Patient lehnte das Essen ab." }
        ],
        documentation: { task: "Rédige une entrée : pansement de la jambe gauche changé à 9h, plaie propre, pas de rougeur.", modele: "09:00 Uhr: Verband am linken Bein gewechselt, Wunde sauber, keine Rötung." },
        rp: { scene: "Zika spielt deine erfahrene Kollegin. Sie hilft dir, einen Eintrag zu formulieren.", intro: "Formuliere objektiv und vollständig (Uhrzeit, Maßnahme, Wirkung).", fin: "Sehr gut! Dein Eintrag ist objektiv, präzise und nachvollziehbar.", tours: [
          { de: "Der Patient wollte heute nicht aufstehen. Wie schreibe ich das?", options: [ { de: "Der Patient lehnte die Mobilisation ab.", ok: true }, { de: "Der Patient ist faul.", ok: false }, { de: "Der Patient hat schlechte Laune.", ok: false } ] },
          { de: "Und wenn ich ihm Medikamente gegeben habe?", options: [ { de: "Medikamente um 8 Uhr verabreicht, gut vertragen.", ok: true }, { de: "Hab ihm halt was gegeben.", ok: false } ] },
          { de: "Reicht das so?", options: [ { de: "Ja, mit Datum und Uhrzeit ist es vollständig.", ok: true }, { de: "Die Uhrzeit ist egal.", ok: false } ] }
        ] } },
      { id: "pb2-2", dom: "kh", titreDE: "Krankheitsbilder I", titre: "Tableaux cliniques I", desc: "Diabète, démence, AVC : décrire et accompagner.",
        vocCoursDE: [
          "In der Pflege triffst du oft auf typische **Krankheitsbilder**: **Diabetes** (Probleme mit dem **Blutzucker**), **Demenz** (Probleme mit dem Gedächtnis) und den **Schlaganfall** (oft mit einer **Lähmung**).",
          "Bei Demenz ist der Patient manchmal **verwirrt** und verliert die **Orientierung**. Bleib ruhig, sprich einfach und gib ihm Sicherheit."
        ],
        vocabulaire: [
          { de: "das Krankheitsbild", fr: "le tableau clinique", ex: "Demenz ist ein häufiges Krankheitsbild." },
          { de: "der Diabetes", fr: "le diabète", ex: "Der Patient hat Diabetes Typ 2." },
          { de: "der Blutzucker", fr: "la glycémie", ex: "Wir messen den Blutzucker vor dem Essen." },
          { de: "die Demenz", fr: "la démence", ex: "Bei Demenz hilft eine feste Routine." },
          { de: "der Schlaganfall", fr: "l'AVC", ex: "Nach dem Schlaganfall ist die rechte Seite gelähmt." },
          { de: "die Lähmung", fr: "la paralysie", ex: "Die Lähmung betrifft den linken Arm." },
          { de: "verwirrt", fr: "confus / désorienté", ex: "Die Bewohnerin ist heute sehr verwirrt." },
          { de: "die Orientierung", fr: "l'orientation", ex: "Er verliert oft die Orientierung." },
          { de: "das Symptom", fr: "le symptôme", ex: "Welche Symptome haben Sie bemerkt?" },
          { de: "betreuen", fr: "prendre en charge / encadrer", ex: "Wir betreuen den Patienten rund um die Uhr." }
        ],
        grammaire: [
          { titre: "Décrire avec la proposition relative", titreDE: "Der Relativsatz",
            regle: "Pour décrire un patient avec plus de précision, on utilise une relative : der Patient, der Diabetes hat… / die Bewohnerin, die an Demenz leidet… Le pronom relatif (der, die, das) reprend le nom et le verbe va à la fin.",
            points: [ "« der Patient, der einen Schlaganfall hatte »", "« die Frau, die verwirrt ist »", "Le verbe de la relative va à la fin." ],
            exemples: [
              { de: "Der Patient, der Diabetes hat, braucht eine Diät.", fr: "Relativsatz mit *der*." },
              { de: "Die Bewohnerin, die an Demenz leidet, ist oft verwirrt.", fr: "Relativsatz mit *die*." },
              { de: "Das ist der Mann, dem wir geholfen haben.", fr: "Relativpronomen im Dativ: *dem*." }
            ],
            note: "Astuce démence : phrases courtes, ton calme, et on ne contredit pas brutalement la personne." }
        ],
        dialogue: { titre: "Eine verwirrte Bewohnerin", lieu: "Im Pflegeheim", lignes: [
          { loc: "Une résidente atteinte de démence est désorientée", de: "Wo bin ich hier? Ich muss nach Hause!", fr: "Où suis-je ici ? Je dois rentrer à la maison !" },
          { de: "Sie sind hier sicher, Frau Stein. Ich bin bei Ihnen.", fr: "Vous êtes en sécurité ici, Mme Stein. Je suis avec vous." },
          { de: "Aber meine Kinder warten doch!", fr: "Mais mes enfants attendent pourtant !" },
          { de: "Ich verstehe. Möchten Sie sich kurz mit mir setzen?", fr: "Je comprends. Voulez-vous vous asseoir un instant avec moi ?" },
          { de: "Ja… vielleicht ist das gut.", fr: "Oui… c'est peut-être bien." },
          { de: "Wir trinken einen Tee, dann fühlen Sie sich besser.", fr: "On boit un thé, vous vous sentirez mieux." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wie reagiert die Pflegekraft auf die Verwirrung?", options: ["Sie widerspricht laut.", "Sie bleibt ruhig und gibt Sicherheit.", "Sie ignoriert die Bewohnerin."], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe la maladie/le mot à sa traduction.", paires: [ { gauche: "der Diabetes", droite: "le diabète" }, { gauche: "die Demenz", droite: "la démence" }, { gauche: "der Schlaganfall", droite: "l'AVC" }, { gauche: "die Lähmung", droite: "la paralysie" } ] },
          { type: "trou", cat: "appro", consigne: "Complète le pronom relatif.", texte: "Der Patient, {0} Diabetes hat, braucht eine Diät.", accepte: [["der"]], indice: "Sujet masculin → der." },
          { type: "qcm", cat: "appro", consigne: "Choisis le bon comportement face à la démence.", question: "Que faire avec une personne désorientée ?", options: ["Laut widersprechen", "Ruhig bleiben und Sicherheit geben", "Allein lassen"], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Forme la relative.", mots: ["die", "Frau", "die", "verwirrt", "ist"], correct: "die Frau die verwirrt ist", traduction: "la femme qui est désorientée" },
          { type: "production", cat: "prod", prompt: "Rassure une résidente désorientée qui veut « rentrer à la maison ».", modele: "Sie sind hier sicher, ich bin bei Ihnen. Möchten Sie sich kurz setzen?" }
        ],
        documentation: { task: "Note : Mme Stein désorientée en fin d'après-midi, voulait rentrer chez elle, rassurée et calmée.", modele: "Frau Stein am späten Nachmittag desorientiert, wollte nach Hause, durch Zuwendung beruhigt." },
        rp: { scene: "Zika spielt einen verwirrten Bewohner mit Demenz. Du beruhigst ihn.", intro: "Bleib ruhig, gib Sicherheit, widersprich nicht hart.", fin: "Sehr gut! Ruhig, empathisch und sicher — genau richtig bei Demenz.", tours: [
          { de: "Wer sind Sie? Was machen Sie in meinem Haus?", options: [ { de: "Ich bin Ihre Pflegekraft und ich bin hier, um Ihnen zu helfen.", ok: true }, { de: "Das ist nicht Ihr Haus, seien Sie still.", ok: false }, { de: "Das wissen Sie doch!", ok: false } ] },
          { de: "Ich will zu meiner Mutter!", options: [ { de: "Ich verstehe. Erzählen Sie mir von Ihrer Mutter.", ok: true }, { de: "Ihre Mutter lebt nicht mehr.", ok: false } ] },
          { de: "Vielleicht setze ich mich kurz.", options: [ { de: "Gute Idee. Wir setzen uns zusammen und trinken einen Tee.", ok: true }, { de: "Endlich, bleiben Sie einfach sitzen.", ok: false } ] }
        ] } },
      { id: "pb2-3", dom: "grund", titreDE: "Wundversorgung und Dekubitus", titre: "Plaies et escarres", desc: "Prévention et soins des plaies.",
        vocCoursDE: [
          "Bei der **Wundversorgung** arbeitest du **steril**: Hände desinfizieren, alten **Verband** entfernen, **Wunde** reinigen, neuen Verband anlegen.",
          "Ein **Dekubitus** entsteht durch zu langen Druck auf eine **Druckstelle**. Am besten **beugst** du **vor**: regelmäßig lagern und die Haut auf **Rötungen** kontrollieren."
        ],
        vocabulaire: [
          { de: "die Wunde", fr: "la plaie", ex: "Die Wunde heilt gut." },
          { de: "die Wundversorgung", fr: "le soin des plaies", ex: "Die Wundversorgung erfolgt täglich." },
          { de: "der Dekubitus", fr: "l'escarre", ex: "Wir wollen einen Dekubitus vermeiden." },
          { de: "der Verband", fr: "le pansement", ex: "Ich wechsle den Verband." },
          { de: "desinfizieren", fr: "désinfecter", ex: "Zuerst desinfiziere ich die Hände." },
          { de: "die Rötung", fr: "la rougeur", ex: "Achten Sie auf eine Rötung der Haut." },
          { de: "die Druckstelle", fr: "le point de pression", ex: "Am Steiß ist eine Druckstelle." },
          { de: "steril", fr: "stérile", ex: "Der Verband muss steril sein." },
          { de: "vorbeugen", fr: "prévenir", ex: "Regelmäßiges Lagern beugt einem Dekubitus vor." },
          { de: "die Heilung", fr: "la cicatrisation", ex: "Die Heilung dauert zwei Wochen." }
        ],
        grammaire: [
          { titre: "Décrire les étapes d'un soin", titreDE: "Reihenfolge: zuerst, dann, anschließend",
            regle: "Pour expliquer un soin étape par étape, on utilise des connecteurs : zuerst (d'abord), dann (ensuite), anschließend (après), zum Schluss (pour finir). Après ces mots en tête de phrase, le verbe reste en 2ᵉ position : « Zuerst desinfiziere ich die Hände. »",
            points: [ "« Zuerst reinige ich die Wunde. »", "« Dann lege ich einen sterilen Verband an. »", "Inversion : connecteur + verbe + sujet." ],
            exemples: [
              { de: "Zuerst desinfiziere ich die Hände.", fr: "*zuerst* + Verb an Position 2." },
              { de: "Dann reinige ich die Wunde vorsichtig.", fr: "Schritt 2 mit *dann*." },
              { de: "Anschließend lege ich einen neuen Verband an.", fr: "Schritt 3 mit *anschließend*." }
            ],
            note: "Prévention du Dekubitus : changer la position régulièrement (alle 2 Stunden lagern)." }
        ],
        dialogue: { titre: "Der Verbandwechsel", lieu: "Am Patientenbett", lignes: [
          { loc: "Le soignant explique le soin de plaie", de: "Ich wechsle jetzt den Verband an Ihrem Bein. Ist das in Ordnung?", fr: "Je change maintenant le pansement de votre jambe. C'est d'accord ?" },
          { de: "Ja. Tut das weh?", fr: "Oui. Est-ce que ça fait mal ?" },
          { de: "Nur ganz kurz. Zuerst reinige ich die Wunde.", fr: "Juste un court instant. D'abord je nettoie la plaie." },
          { de: "Und dann?", fr: "Et ensuite ?" },
          { de: "Dann lege ich einen sterilen Verband an.", fr: "Ensuite je pose un pansement stérile." },
          { de: "Die Wunde sieht heute besser aus, keine Rötung.", fr: "La plaie a l'air meilleure aujourd'hui, pas de rougeur." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wie sieht die Wunde heute aus?", options: ["Schlechter", "Besser, keine Rötung", "Stark gerötet"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Wunde", droite: "la plaie" }, { gauche: "der Dekubitus", droite: "l'escarre" }, { gauche: "steril", droite: "stérile" }, { gauche: "die Rötung", droite: "la rougeur" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'ordre des étapes.", texte: "{0} desinfiziere ich die Hände, dann reinige ich die Wunde.", accepte: [["Zuerst"]], indice: "1ʳᵉ étape = d'abord." },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne prévention du Dekubitus.", question: "Comment prévenir une escarre ?", options: ["Den Patienten liegen lassen", "Regelmäßig lagern und die Haut kontrollieren", "Nichts tun"], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets l'étape dans l'ordre.", mots: ["Dann", "lege", "ich", "einen", "sterilen", "Verband", "an"], correct: "Dann lege ich einen sterilen Verband an", traduction: "Ensuite je pose un pansement stérile." },
          { type: "production", cat: "prod", prompt: "Explique en une phrase la 1ʳᵉ étape : d'abord se désinfecter les mains.", modele: "Zuerst desinfiziere ich die Hände." }
        ],
        documentation: { task: "Note le soin : pansement de la jambe gauche refait en stérile à 10h, plaie propre, en voie de cicatrisation, pas de rougeur.", modele: "10:00 Uhr: steriler Verbandwechsel li. Bein, Wunde sauber, Heilung im Gang, keine Rötung." },
        rp: { scene: "Zika spielt einen Patienten beim Verbandwechsel. Du erklärst und beruhigst.", intro: "Erkläre die Schritte (zuerst, dann) und beruhige den Patienten.", fin: "Sehr gut! Klare Schritte, ruhiger Ton und saubere Wundkontrolle.", tours: [
          { de: "Müssen Sie wirklich an die Wunde? Ich habe Angst.", options: [ { de: "Keine Sorge, ich erkläre Ihnen jeden Schritt.", ok: true }, { de: "Stellen Sie sich nicht so an.", ok: false }, { de: "Das geht Sie nichts an.", ok: false } ] },
          { de: "Was machen Sie zuerst?", options: [ { de: "Zuerst desinfiziere ich die Hände und reinige die Wunde.", ok: true }, { de: "Das weiß ich noch nicht.", ok: false } ] },
          { de: "Und ist die Wunde schlimm?", options: [ { de: "Nein, sie heilt gut, keine Rötung. Ich dokumentiere das.", ok: true }, { de: "Sieht furchtbar aus, ehrlich gesagt.", ok: false } ] }
        ] } },
      { id: "pb2-4", dom: "kh", titreDE: "Ärztliche Anordnungen umsetzen", titre: "Appliquer les prescriptions", desc: "Comprendre et exécuter les consignes du médecin.",
        vocCoursDE: [
          "Der Arzt gibt eine **Anordnung** (eine **Verordnung**), und du **setzt** sie **um**. Wichtig: genau zuhören, bei Unklarheit **nachfragen** und im Zweifel **Rücksprache** halten.",
          "Wiederhole die Anordnung zur Sicherheit und **bestätige** sie. So vermeidest du Fehler bei **Dosierung** oder **Infusion**."
        ],
        vocabulaire: [
          { de: "die Anordnung", fr: "la prescription / consigne", ex: "Ich setze die Anordnung des Arztes um." },
          { de: "anordnen", fr: "prescrire / ordonner", ex: "Der Arzt ordnet eine Blutkontrolle an." },
          { de: "umsetzen", fr: "appliquer / mettre en œuvre", ex: "Wir setzen die Verordnung sofort um." },
          { de: "die Verordnung", fr: "l'ordonnance", ex: "Die Verordnung steht in der Akte." },
          { de: "die Infusion", fr: "la perfusion", ex: "Die Infusion läuft über zwei Stunden." },
          { de: "die Dosierung", fr: "le dosage", ex: "Bitte kontrollieren Sie die Dosierung." },
          { de: "die Rücksprache", fr: "la concertation", ex: "Ich halte Rücksprache mit dem Arzt." },
          { de: "nachfragen", fr: "demander confirmation", ex: "Bei Unklarheit fragen Sie nach." },
          { de: "bestätigen", fr: "confirmer", ex: "Ich bestätige die Anordnung." },
          { de: "kontrollieren", fr: "contrôler / vérifier", ex: "Wir kontrollieren die Werte regelmäßig." }
        ],
        grammaire: [
          { titre: "Rapporter une consigne avec « sollen »", titreDE: "Anordnungen mit sollen / indirekte Rede",
            regle: "Pour rapporter ce que le médecin a prescrit, on utilise sollen : « Ich soll die Infusion vorbereiten. » (Je dois préparer la perfusion.) Ou la subordonnée : « Der Arzt hat angeordnet, dass die Werte kontrolliert werden. »",
            points: [ "« Der Patient soll nüchtern bleiben. »", "« Ich soll den Blutdruck stündlich messen. »", "« Der Arzt sagt, dass die Dosis halbiert wird. »" ],
            exemples: [
              { de: "Der Patient soll nüchtern bleiben.", fr: "Anordnung mit *sollen*." },
              { de: "Ich soll die Infusion um 10 Uhr anhängen.", fr: "weitergegebene Anweisung." },
              { de: "Der Arzt hat angeordnet, dass wir die Werte kontrollieren.", fr: "indirekte Rede mit *dass*." }
            ],
            note: "Sécurité : répète et confirme toujours une consigne (« Also, ich soll … »), surtout pour les doses." }
        ],
        dialogue: { titre: "Die Visite", lieu: "Im Patientenzimmer, bei der Arztvisite", lignes: [
          { loc: "Le médecin donne ses consignes", de: "Frau Kraft, bitte erhöhen Sie die Infusion auf 100 ml pro Stunde.", fr: "Mme Kraft, augmentez la perfusion à 100 ml par heure." },
          { de: "Also, ich soll die Infusion auf 100 ml pro Stunde stellen?", fr: "Donc, je dois régler la perfusion à 100 ml par heure ?" },
          { de: "Genau. Und kontrollieren Sie den Blutdruck stündlich.", fr: "Exactement. Et contrôlez la tension toutes les heures." },
          { de: "In Ordnung. Soll der Patient nüchtern bleiben?", fr: "D'accord. Le patient doit-il rester à jeun ?" },
          { de: "Ja, bis morgen früh.", fr: "Oui, jusqu'à demain matin." },
          { de: "Gut, ich setze das um und dokumentiere alles.", fr: "Bien, j'applique ça et je documente tout." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Auf wie viel soll die Infusion gestellt werden?", options: ["50 ml/h", "100 ml/h", "200 ml/h"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Anordnung", droite: "la consigne" }, { gauche: "die Infusion", droite: "la perfusion" }, { gauche: "die Dosierung", droite: "le dosage" }, { gauche: "die Rücksprache", droite: "la concertation" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec le modal des consignes.", texte: "Der Patient {0} nüchtern bleiben.", accepte: [["soll"]], indice: "modal sollen (3ᵉ pers.)." },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne réaction de sécurité.", question: "Tu n'es pas sûr d'une consigne. Que fais-tu ?", options: ["Ich rate einfach.", "Ich frage beim Arzt nach.", "Ich mache es später."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Ich", "soll", "den", "Blutdruck", "stündlich", "messen"], correct: "Ich soll den Blutdruck stündlich messen", traduction: "Je dois mesurer la tension toutes les heures." },
          { type: "production", cat: "prod", prompt: "Reformule et confirme la consigne : régler la perfusion à 100 ml/h.", modele: "Also, ich soll die Infusion auf 100 ml pro Stunde stellen." }
        ],
        documentation: { task: "Note l'exécution : perfusion réglée à 100 ml/h selon prescription, tension contrôlée toutes les heures, patient à jeun.", modele: "Laut Anordnung Infusion auf 100 ml/h gestellt, RR stündlich kontrolliert, Patient nüchtern." },
        rp: { scene: "Zika spielt den Arzt bei der Visite. Du nimmst die Anordnungen entgegen.", intro: "Hör genau zu, wiederhole zur Sicherheit, frag bei Unklarheit nach.", fin: "Ausgezeichnet! Du hast die Anordnung bestätigt und sicher umgesetzt.", tours: [
          { de: "Bitte geben Sie Herrn Roth zweimal täglich das neue Medikament.", options: [ { de: "Also zweimal täglich — morgens und abends?", ok: true }, { de: "Ok, irgendwann halt.", ok: false }, { de: "Das mache ich nicht.", ok: false } ] },
          { de: "Genau. Und kontrollieren Sie den Blutzucker.", options: [ { de: "Wie oft soll ich den Blutzucker kontrollieren?", ok: true }, { de: "Blutzucker ist nicht so wichtig.", ok: false } ] },
          { de: "Dreimal täglich, vor dem Essen.", options: [ { de: "Verstanden, ich setze das um und dokumentiere es.", ok: true }, { de: "Ich schreibe das lieber nicht auf.", ok: false } ] }
        ] } },
      { id: "pb2-5", dom: "ambul", titreDE: "Ambulante Pflege: der Hausbesuch", titre: "Soins à domicile : la visite", desc: "Organiser et documenter une visite à domicile.",
        vocCoursDE: [
          "In der **ambulanten Pflege** fährst du eine **Tour** und machst **Hausbesuche**. Du kommst zum Patienten nach Hause und übernimmst dort die **Versorgung**.",
          "Sei **pünktlich**, sei freundlich und **organisiere** dich gut: Schlüssel, Material und Zeit. Nach jedem Besuch schreibst du einen kurzen **Bericht**."
        ],
        vocabulaire: [
          { de: "die ambulante Pflege", fr: "les soins à domicile", ex: "Sie arbeitet in der ambulanten Pflege." },
          { de: "der Hausbesuch", fr: "la visite à domicile", ex: "Der erste Hausbesuch ist um acht Uhr." },
          { de: "die Tour", fr: "la tournée", ex: "Meine Tour hat heute zehn Patienten." },
          { de: "der Pflegedienst", fr: "le service de soins", ex: "Der Pflegedienst kommt zweimal am Tag." },
          { de: "die Versorgung", fr: "la prise en charge", ex: "Die Versorgung zu Hause klappt gut." },
          { de: "organisieren", fr: "organiser", ex: "Ich organisiere meine Tour am Morgen." },
          { de: "pünktlich", fr: "ponctuel", ex: "Bitte seien Sie pünktlich beim Patienten." },
          { de: "der Schlüssel", fr: "la clé", ex: "Ich habe den Schlüssel für die Wohnung." },
          { de: "allein", fr: "seul", ex: "Die Patientin lebt allein." },
          { de: "der Bericht", fr: "le compte-rendu", ex: "Nach dem Besuch schreibe ich einen Bericht." }
        ],
        grammaire: [
          { titre: "Exprimer la succession et l'horaire de la tournée", titreDE: "danach, später, gegen + Uhrzeit",
            regle: "Pour organiser la journée à domicile, on relie les visites : zuerst, danach (après ça), später (plus tard), zum Schluss. Pour une heure approximative : gegen 9 Uhr (vers 9h).",
            points: [ "« Zuerst fahre ich zu Frau Adam. »", "« Danach besuche ich Herrn Veit. »", "« Gegen Mittag bin ich beim letzten Patienten. »" ],
            exemples: [
              { de: "Zuerst fahre ich zu Frau Adam.", fr: "Beginn der Tour mit *zuerst*." },
              { de: "Danach besuche ich Herrn Veit.", fr: "nächster Besuch mit *danach*." },
              { de: "Gegen zwölf Uhr ist die Tour zu Ende.", fr: "ungefähre Zeit mit *gegen*." }
            ],
            note: "À domicile, tu es souvent seul(e) : note tout de suite, sinon tu oublies des détails importants." }
        ],
        dialogue: { titre: "Beim Patienten zu Hause", lieu: "In der Wohnung von Frau Adam", lignes: [
          { loc: "Le soignant arrive pour la visite", de: "Guten Morgen, Frau Adam. Der Pflegedienst ist da.", fr: "Bonjour Mme Adam. Le service de soins est là." },
          { de: "Schön, dass Sie pünktlich sind. Kommen Sie rein.", fr: "C'est bien que vous soyez ponctuel. Entrez." },
          { de: "Wie geht es Ihnen heute? Haben Sie gut geschlafen?", fr: "Comment allez-vous aujourd'hui ? Avez-vous bien dormi ?" },
          { de: "Ganz gut. Mein Bein tut aber noch weh.", fr: "Plutôt bien. Mais ma jambe me fait encore mal." },
          { de: "Ich schaue mir das an und mache den Verband neu.", fr: "Je regarde ça et je refais le pansement." },
          { de: "Danach fahre ich zum nächsten Patienten.", fr: "Ensuite je vais chez le patient suivant." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was macht die Pflegekraft bei Frau Adam?", options: ["Nur reden", "Das Bein anschauen und den Verband wechseln", "Einkaufen"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "der Hausbesuch", droite: "la visite à domicile" }, { gauche: "die Tour", droite: "la tournée" }, { gauche: "die Versorgung", droite: "la prise en charge" }, { gauche: "pünktlich", droite: "ponctuel" } ] },
          { type: "trou", cat: "appro", consigne: "Complète le connecteur (visite suivante).", texte: "Ich versorge Frau Adam, {0} fahre ich zu Herrn Veit.", accepte: [["danach", "dann"]], indice: "« après ça »." },
          { type: "qcm", cat: "appro", consigne: "Choisis l'heure approximative.", question: "Comment dire « vers midi » ?", options: ["um Mittag genau", "gegen Mittag", "Mittag schon"], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Danach", "fahre", "ich", "zum", "nächsten", "Patienten"], correct: "Danach fahre ich zum nächsten Patienten", traduction: "Ensuite je vais chez le patient suivant." },
          { type: "production", cat: "prod", prompt: "Annonce ton arrivée et demande comment la personne va.", modele: "Guten Morgen, der Pflegedienst ist da. Wie geht es Ihnen heute?" }
        ],
        documentation: { task: "Rédige le compte-rendu de visite : Mme Adam, pansement de la jambe refait, douleur légère, état stable, prochaine visite demain.", modele: "Hausbesuch Frau Adam: Verband am Bein erneuert, leichte Schmerzen, Zustand stabil, nächster Besuch morgen." },
        rp: { scene: "Zika spielt eine Patientin, die allein zu Hause lebt. Du machst den Hausbesuch.", intro: "Begrüße freundlich, frag nach dem Befinden, kündige die Versorgung an.", fin: "Sehr gut! Freundlicher Hausbesuch, klare Versorgung und ein sauberer Bericht.", tours: [
          { de: "Oh, schon da? Ich habe Sie gar nicht erwartet.", options: [ { de: "Guten Morgen, der Pflegedienst ist pünktlich da. Darf ich reinkommen?", ok: true }, { de: "Ja, beeilen Sie sich, ich habe wenig Zeit.", ok: false }, { de: "Sie haben das doch gewusst.", ok: false } ] },
          { de: "Mein Bein tut weh.", options: [ { de: "Ich schaue es mir an und wechsle den Verband.", ok: true }, { de: "Das wird schon wieder.", ok: false } ] },
          { de: "Kommen Sie morgen wieder?", options: [ { de: "Ja, der nächste Besuch ist morgen früh. Ich notiere alles.", ok: true }, { de: "Vielleicht, mal sehen.", ok: false } ] }
        ] } },
      { id: "pb2-6", dom: "grund", titreDE: "Schwierige Gespräche führen", titre: "Conversations difficiles", desc: "Refus de soin, agressivité, désorientation.",
        vocCoursDE: [
          "Manchmal **lehnt** ein Patient die Pflege **ab** oder reagiert mit **Aggression**. Dein Ziel ist es, die Situation zu **deeskalieren** — ruhig bleiben und **einfühlsam** sprechen.",
          "Zeig **Verständnis**, **respektiere** seine **Grenze** und biete eine Wahl an. Mit **Geduld** entsteht wieder Vertrauen."
        ],
        vocabulaire: [
          { de: "ablehnen", fr: "refuser", ex: "Der Patient lehnt das Essen ab." },
          { de: "die Verweigerung", fr: "le refus", ex: "Die Verweigerung der Pflege ist sein Recht." },
          { de: "die Aggression", fr: "l'agressivité", ex: "Bei Aggression bleibe ich ruhig." },
          { de: "deeskalieren", fr: "désamorcer / apaiser", ex: "Ich versuche, die Situation zu deeskalieren." },
          { de: "beruhigen", fr: "calmer", ex: "Ruhige Worte beruhigen den Bewohner." },
          { de: "die Geduld", fr: "la patience", ex: "Schwierige Gespräche brauchen Geduld." },
          { de: "respektieren", fr: "respecter", ex: "Ich respektiere Ihre Entscheidung." },
          { de: "die Grenze", fr: "la limite", ex: "Ich achte seine Grenze." },
          { de: "einfühlsam", fr: "empathique", ex: "Sprechen Sie einfühlsam mit ihm." },
          { de: "akzeptieren", fr: "accepter", ex: "Manchmal muss man ein Nein akzeptieren." }
        ],
        grammaire: [
          { titre: "Désamorcer avec les messages en « je » et le Konjunktiv", titreDE: "Ich-Botschaften und höfliche Vorschläge",
            regle: "Pour calmer un conflit, parle de toi (Ich-Botschaft) plutôt que d'accuser : « Ich sehe, dass Sie wütend sind. » Propose en douceur avec le Konjunktiv : « Wir könnten es später versuchen. »",
            points: [ "« Ich verstehe, dass Sie das nicht möchten. »", "« Wir könnten in 10 Minuten noch einmal schauen. »", "« Ich respektiere Ihre Entscheidung. »" ],
            exemples: [
              { de: "Ich sehe, dass Sie sich ärgern.", fr: "Ich-Botschaft statt Vorwurf." },
              { de: "Wir könnten es später noch einmal versuchen.", fr: "höflicher Vorschlag mit *könnten*." },
              { de: "Ich respektiere Ihre Entscheidung.", fr: "Grenze und Respekt zeigen." }
            ],
            note: "Désescalade : ne pas hausser le ton, garder ses distances, offrir un choix et revenir plus tard." }
        ],
        dialogue: { titre: "Der Patient lehnt ab", lieu: "Im Patientenzimmer", lignes: [
          { loc: "Un patient refuse la toilette, sur un ton agacé", de: "Nein! Ich will jetzt nicht gewaschen werden. Lassen Sie mich!", fr: "Non ! Je ne veux pas être lavé maintenant. Laissez-moi !" },
          { de: "In Ordnung, ich dränge Sie nicht. Ich sehe, dass Sie verärgert sind.", fr: "D'accord, je ne vous force pas. Je vois que vous êtes contrarié." },
          { de: "Ja! Immer dieser Stress am Morgen.", fr: "Oui ! Toujours ce stress le matin." },
          { de: "Das verstehe ich. Wir könnten es in einer halben Stunde versuchen.", fr: "Je comprends. On pourrait essayer dans une demi-heure." },
          { de: "Na gut, später ist besser.", fr: "Bon d'accord, plus tard c'est mieux." },
          { de: "Danke. Ich komme dann ruhig wieder.", fr: "Merci. Je reviendrai tranquillement à ce moment-là." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wie reagiert die Pflegekraft auf das Nein?", options: ["Sie wäscht ihn trotzdem.", "Sie akzeptiert und schlägt einen späteren Zeitpunkt vor.", "Sie wird laut."], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "ablehnen", droite: "refuser" }, { gauche: "deeskalieren", droite: "apaiser" }, { gauche: "die Geduld", droite: "la patience" }, { gauche: "einfühlsam", droite: "empathique" } ] },
          { type: "trou", cat: "appro", consigne: "Complète le message en « je » (Ich-Botschaft).", texte: "{0} sehe, dass Sie verärgert sind.", accepte: [["Ich"]], indice: "Message en « je »." },
          { type: "qcm", cat: "appro", consigne: "Choisis la meilleure réaction de désescalade.", question: "Un résident refuse, agacé. Que dis-tu ?", options: ["Jetzt reichts, halten Sie still!", "Ich verstehe, wir versuchen es später.", "Sie müssen das jetzt machen!"], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la proposition polie dans l'ordre.", mots: ["Wir", "könnten", "es", "später", "versuchen"], correct: "Wir könnten es später versuchen", traduction: "Nous pourrions essayer plus tard." },
          { type: "production", cat: "prod", prompt: "Désamorce : montre que tu comprends sa colère et propose de revenir plus tard.", modele: "Ich verstehe, dass Sie verärgert sind. Wir könnten es später noch einmal versuchen." }
        ],
        documentation: { task: "Note l'événement : M. Roth a refusé la toilette le matin, contrarié, soin reporté d'un commun accord à plus tard, réalisé sans problème.", modele: "Herr Roth lehnte morgens die Körperpflege ab, verärgert; Pflege einvernehmlich verschoben, später problemlos durchgeführt." },
        rp: { scene: "Zika spielt einen verärgerten Patienten, der die Pflege ablehnt. Du deeskalierst.", intro: "Bleib ruhig, zeig Verständnis, respektiere das Nein und biete eine Alternative an.", fin: "Sehr gut! Ruhig, respektvoll und lösungsorientiert — so deeskaliert man richtig.", tours: [
          { de: "Lassen Sie mich in Ruhe! Ich will das nicht!", options: [ { de: "In Ordnung, ich dränge Sie nicht. Ich sehe, dass Sie verärgert sind.", ok: true }, { de: "Sie müssen das jetzt machen!", ok: false }, { de: "Stellen Sie sich nicht so an.", ok: false } ] },
          { de: "Immer diese Hektik am Morgen!", options: [ { de: "Das verstehe ich. Wir könnten es in einer halben Stunde versuchen.", ok: true }, { de: "Dafür habe ich keine Zeit.", ok: false } ] },
          { de: "Also gut, später vielleicht.", options: [ { de: "Danke. Ich respektiere das und komme später ruhig wieder.", ok: true }, { de: "Endlich sind Sie vernünftig.", ok: false } ] }
        ] } }
    ]},
    { code: "C1", titre: "Soins complexes et responsabilité", lecons: [
      { id: "pc1-1", dom: "kh", titreDE: "Krankheitsbilder II", titre: "Tableaux cliniques II", desc: "Soins palliatifs, oncologie, BPCO.",
        vocCoursDE: [
          "Auf dieser Stufe begegnest du schweren **Krankheitsbildern**: der **Palliativpflege** (wenn keine Heilung mehr möglich ist), der **Onkologie** (der Bereich der Krebserkrankungen) und der **COPD**, einer chronischen Lungenkrankheit mit **Atemnot**.",
          "In der Palliativpflege steht die **Lebensqualität** im Vordergrund: Schmerzen **lindern**, die **Würde** wahren und für den Menschen da sein. Sprich offen, aber **behutsam**."
        ],
        vocabulaire: [
          { de: "die Palliativpflege", fr: "les soins palliatifs", ex: "In der Palliativpflege geht es um Lebensqualität." },
          { de: "die Onkologie", fr: "l'oncologie", ex: "Sie arbeitet in der Onkologie." },
          { de: "die Atemnot", fr: "la dyspnée / détresse respiratoire", ex: "Der Patient hat starke Atemnot." },
          { de: "chronisch", fr: "chronique", ex: "COPD ist eine chronische Erkrankung." },
          { de: "lindern", fr: "soulager", ex: "Wir lindern die Schmerzen mit Medikamenten." },
          { de: "die Lebensqualität", fr: "la qualité de vie", ex: "Die Lebensqualität ist jetzt das wichtigste Ziel." },
          { de: "die Würde", fr: "la dignité", ex: "Wir wahren die Würde des Patienten." },
          { de: "behutsam", fr: "avec délicatesse", ex: "Sprechen Sie behutsam mit der Familie." },
          { de: "die Verschlechterung", fr: "l'aggravation", ex: "Wir beobachten eine Verschlechterung des Zustands." },
          { de: "begleiten", fr: "accompagner", ex: "Wir begleiten den Patienten in dieser schweren Zeit." }
        ],
        grammaire: [
          { titre: "Exprimer la concession (obwohl / trotzdem)", titreDE: "obwohl, trotzdem",
            regle: "Pour nuancer une situation difficile, on utilise obwohl (bien que, + verbe à la fin) ou trotzdem (malgré tout, en tête → inversion). Ex. : « Obwohl es keine Heilung gibt, können wir die Lebensqualität verbessern. »",
            points: [ "« Obwohl er Schmerzen hat, bleibt er ruhig. »", "« Die Prognose ist schlecht. Trotzdem geben wir Hoffnung. »", "obwohl → verbe à la fin ; trotzdem → inversion." ],
            exemples: [
              { de: "Obwohl keine Heilung möglich ist, lindern wir die Schmerzen.", fr: "*obwohl* + Verb am Satzende." },
              { de: "Er ist sehr schwach. Trotzdem möchte er aufstehen.", fr: "*trotzdem* mit Inversion." },
              { de: "Wir wahren seine Würde bis zum Schluss.", fr: "zentrale Haltung der Palliativpflege." }
            ],
            note: "En soins palliatifs : l'écoute et la présence comptent souvent autant que les soins techniques." }
        ],
        dialogue: { titre: "Ein Gespräch in der Palliativpflege", lieu: "Im Patientenzimmer", lignes: [
          { loc: "Le soignant accompagne un patient gravement malade", de: "Wie fühlen Sie sich heute, Herr Wagner?", fr: "Comment vous sentez-vous aujourd'hui, M. Wagner ?" },
          { de: "Müde. Und ich habe Angst vor dem, was kommt.", fr: "Fatigué. Et j'ai peur de ce qui vient." },
          { de: "Das ist verständlich. Ich bin für Sie da.", fr: "C'est compréhensible. Je suis là pour vous." },
          { de: "Die Schmerzen sind manchmal stark.", fr: "Les douleurs sont parfois fortes." },
          { de: "Wir können sie lindern. Sagen Sie mir, wann es schlimmer wird.", fr: "Nous pouvons les soulager. Dites-moi quand ça empire." },
          { de: "Danke, dass Sie sich Zeit nehmen.", fr: "Merci de prendre le temps." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was steht im Vordergrund?", options: ["Die Heilung um jeden Preis", "Schmerzen lindern und da sein", "Schnell entlassen"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Palliativpflege", droite: "les soins palliatifs" }, { gauche: "die Atemnot", droite: "la dyspnée" }, { gauche: "die Würde", droite: "la dignité" }, { gauche: "lindern", droite: "soulager" } ] },
          { type: "trou", cat: "appro", consigne: "Complète avec la concession.", texte: "{0} keine Heilung möglich ist, lindern wir die Schmerzen.", accepte: [["Obwohl"]], indice: "« bien que » → verbe à la fin." },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne attitude.", question: "Un patient palliatif a peur. Que dis-tu ?", options: ["Da kann man nichts machen.", "Das ist verständlich. Ich bin für Sie da.", "Denken Sie nicht daran."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase avec « trotzdem ».", mots: ["Er", "ist", "schwach", "trotzdem", "möchte", "er", "aufstehen"], correct: "Er ist schwach trotzdem möchte er aufstehen", traduction: "Il est faible, malgré tout il veut se lever." },
          { type: "production", cat: "prod", prompt: "Rassure un patient anxieux et propose de soulager ses douleurs.", modele: "Das ist verständlich. Ich bin für Sie da, und wir können die Schmerzen lindern." }
        ],
        documentation: { task: "Note en soins palliatifs : M. Wagner anxieux et fatigué, douleurs parfois fortes, entretien d'accompagnement mené, antalgiques adaptés.", modele: "Herr Wagner ängstlich und müde, zeitweise starke Schmerzen, begleitendes Gespräch geführt, Schmerztherapie angepasst." },
        rp: { scene: "Zika spielt einen schwerkranken Patienten in der Palliativpflege. Du begleitest ihn.", intro: "Hör zu, zeig Empathie, sprich behutsam und biete Linderung an.", fin: "Sehr gut! Empathisch, würdevoll und professionell begleitet.", tours: [
          { de: "Ich weiß, dass ich nicht mehr gesund werde.", options: [ { de: "Ich bin für Sie da, und wir tun alles für Ihr Wohlbefinden.", ok: true }, { de: "Sagen Sie so etwas nicht.", ok: false }, { de: "Das stimmt, da kann man nichts machen.", ok: false } ] },
          { de: "Die Schmerzen machen mir Angst.", options: [ { de: "Wir können die Schmerzen gut lindern. Sagen Sie mir, wann sie kommen.", ok: true }, { de: "Schmerzen gehören eben dazu.", ok: false } ] },
          { de: "Bleiben Sie noch einen Moment?", options: [ { de: "Natürlich, ich nehme mir die Zeit für Sie.", ok: true }, { de: "Nein, ich habe andere Patienten.", ok: false } ] }
        ] } },
      { id: "pc1-2", dom: "grund", titreDE: "Pflegeprozess und Pflegeplanung", titre: "Processus et planification de soins", desc: "Le raisonnement clinique, en allemand.",
        vocCoursDE: [
          "Der **Pflegeprozess** ist ein Kreislauf: Informationen sammeln, das **Pflegeproblem** erkennen, ein **Pflegeziel** festlegen, **Maßnahmen** planen und am Ende den Erfolg **überprüfen** (Evaluation).",
          "Eine gute **Pflegeplanung** ist **individuell**: Sie nutzt die **Ressourcen** des Patienten — also das, was er noch selbst kann."
        ],
        vocabulaire: [
          { de: "der Pflegeprozess", fr: "le processus de soins", ex: "Der Pflegeprozess hat mehrere Schritte." },
          { de: "die Pflegeplanung", fr: "la planification des soins", ex: "Die Pflegeplanung wird regelmäßig angepasst." },
          { de: "das Pflegeproblem", fr: "le problème de soins", ex: "Das Pflegeproblem ist die eingeschränkte Mobilität." },
          { de: "das Pflegeziel", fr: "l'objectif de soins", ex: "Das Pflegeziel ist mehr Selbstständigkeit." },
          { de: "die Maßnahme", fr: "la mesure / l'action", ex: "Welche Maßnahmen planen wir?" },
          { de: "die Evaluation", fr: "l'évaluation", ex: "Bei der Evaluation prüfen wir das Ergebnis." },
          { de: "die Ressource", fr: "la ressource", ex: "Wir nutzen die Ressourcen des Patienten." },
          { de: "individuell", fr: "individualisé", ex: "Jede Planung ist individuell." },
          { de: "festlegen", fr: "définir / fixer", ex: "Wir legen ein realistisches Ziel fest." },
          { de: "überprüfen", fr: "vérifier / réévaluer", ex: "Wir überprüfen das Ziel nach einer Woche." }
        ],
        grammaire: [
          { titre: "Exprimer le but (um … zu / damit)", titreDE: "Finalsätze: um…zu, damit",
            regle: "Pour exprimer le but d'une mesure, on utilise um … zu + infinitif (même sujet) ou damit + proposition (sujets différents). Ex. : « Wir mobilisieren ihn, um die Selbstständigkeit zu fördern. »",
            points: [ "« …, um Komplikationen zu vermeiden. »", "« …, damit der Patient wieder allein essen kann. »", "um…zu : même sujet ; damit : sujets différents." ],
            exemples: [
              { de: "Wir lagern den Patienten, um einen Dekubitus zu vermeiden.", fr: "Zweck mit *um…zu*." },
              { de: "Wir erklären alles, damit die Familie sich sicher fühlt.", fr: "Zweck mit *damit* (anderer Subjekt)." },
              { de: "Das Ziel ist, die Mobilität schrittweise zu verbessern.", fr: "realistisches, individuelles Ziel." }
            ],
            note: "Un bon objectif de soins est réaliste, mesurable et formulé avec le patient." }
        ],
        dialogue: { titre: "Die Pflegeplanung im Team", lieu: "Im Stationszimmer", lignes: [
          { loc: "Discussion de plan de soins avec une collègue", de: "Was ist bei Frau Adam das Hauptproblem?", fr: "Quel est le problème principal chez Mme Adam ?" },
          { de: "Sie kann nach dem Sturz schlecht gehen.", fr: "Elle marche mal depuis la chute." },
          { de: "Gut. Welches Ziel legen wir fest?", fr: "Bien. Quel objectif fixons-nous ?" },
          { de: "Sie soll in zwei Wochen wieder allein zur Toilette gehen.", fr: "Elle devrait pouvoir aller seule aux toilettes dans deux semaines." },
          { de: "Und welche Maßnahmen planen wir dafür?", fr: "Et quelles mesures planifions-nous pour ça ?" },
          { de: "Tägliche Mobilisation, um die Muskeln zu stärken.", fr: "Une mobilisation quotidienne, pour renforcer les muscles." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was ist das Pflegeziel von Frau Adam?", options: ["Wieder allein zur Toilette gehen", "Schneller essen", "Mehr schlafen"], correct: 0 },
          { type: "association", cat: "comp", consigne: "Associe l'étape à sa traduction.", paires: [ { gauche: "das Pflegeproblem", droite: "le problème de soins" }, { gauche: "das Pflegeziel", droite: "l'objectif" }, { gauche: "die Maßnahme", droite: "la mesure" }, { gauche: "die Evaluation", droite: "l'évaluation" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'expression du but.", texte: "Wir mobilisieren den Patienten, {0} die Muskeln zu stärken.", accepte: [["um"]], indice: "um … zu + infinitif." },
          { type: "qcm", cat: "appro", consigne: "Choisis la phrase avec « damit ».", question: "Quelle phrase est correcte ?", options: ["Wir erklären alles, damit fühlt sich die Familie sicher.", "Wir erklären alles, damit die Familie sich sicher fühlt.", "Wir erklären alles, um die Familie sich sicher fühlt."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets le but dans l'ordre.", mots: ["Wir", "lagern", "ihn", "um", "einen", "Dekubitus", "zu", "vermeiden"], correct: "Wir lagern ihn um einen Dekubitus zu vermeiden", traduction: "Nous le repositionnons pour éviter une escarre." },
          { type: "production", cat: "prod", prompt: "Formule un objectif et son but : mobiliser chaque jour pour renforcer les muscles.", modele: "Wir mobilisieren täglich, um die Muskeln zu stärken." }
        ],
        documentation: { task: "Note la planification : problème — mobilité réduite après chute ; objectif — toilettes en autonomie sous 2 semaines ; mesure — mobilisation quotidienne.", modele: "Pflegeproblem: eingeschränkte Mobilität nach Sturz. Ziel: in 2 Wochen selbstständiger Toilettengang. Maßnahme: tägliche Mobilisation." },
        rp: { scene: "Zika spielt deine Kollegin. Ihr erstellt zusammen eine Pflegeplanung.", intro: "Benenne das Problem, leg ein realistisches Ziel fest und plane Maßnahmen.", fin: "Sehr gut! Eine klare, individuelle und zielorientierte Planung.", tours: [
          { de: "Bei Herrn Veit — was ist das Hauptproblem?", options: [ { de: "Er kann sich nach dem Schlaganfall nicht allein anziehen.", ok: true }, { de: "Er ist einfach unmotiviert.", ok: false }, { de: "Keine Ahnung.", ok: false } ] },
          { de: "Welches Ziel setzen wir?", options: [ { de: "Er soll sich in drei Wochen das Hemd allein anziehen.", ok: true }, { de: "Er soll bald gesund sein.", ok: false } ] },
          { de: "Und die Maßnahme dazu?", options: [ { de: "Tägliches Üben, um die Bewegung zu fördern. Ich dokumentiere den Plan.", ok: true }, { de: "Wir machen einfach alles für ihn.", ok: false } ] }
        ] } },
      { id: "pc1-3", dom: "grund", titreDE: "Beratung und Anleitung", titre: "Conseil et accompagnement", desc: "Conseiller patients, proches et stagiaires.",
        vocCoursDE: [
          "Als erfahrene Pflegekraft **berätst** du Patienten und Angehörige und **leitest** **Auszubildende** **an**. Gute Anleitung ist **schrittweise**: erklären, **demonstrieren**, selbst machen lassen.",
          "Gib am Ende ein klares **Feedback** und ermutige zu **Rückfragen**. So lernt der Azubi, **selbstständig** und sicher zu arbeiten."
        ],
        vocabulaire: [
          { de: "die Beratung", fr: "le conseil", ex: "Die Beratung der Angehörigen ist wichtig." },
          { de: "anleiten", fr: "encadrer / former", ex: "Ich leite heute den Auszubildenden an." },
          { de: "der Auszubildende (Azubi)", fr: "l'apprenti", ex: "Der Azubi ist im ersten Lehrjahr." },
          { de: "demonstrieren", fr: "montrer / démontrer", ex: "Ich demonstriere den Verbandwechsel." },
          { de: "schrittweise", fr: "étape par étape", ex: "Wir gehen schrittweise vor." },
          { de: "das Feedback", fr: "le retour / feedback", ex: "Ich gebe dir gleich ein Feedback." },
          { de: "die Rückfrage", fr: "la question de clarification", ex: "Gibt es noch Rückfragen?" },
          { de: "selbstständig", fr: "de façon autonome", ex: "Bald arbeitest du selbstständig." },
          { de: "unterstützen", fr: "soutenir", ex: "Ich unterstütze dich beim ersten Mal." },
          { de: "ermutigen", fr: "encourager", ex: "Ich ermutige dich, es selbst zu versuchen." }
        ],
        grammaire: [
          { titre: "Donner des instructions claires (Achten Sie darauf, dass…)", titreDE: "Anleiten: erst…, dann…, achten Sie darauf, dass…",
            regle: "Pour guider quelqu'un, on structure : Zuerst…, dann…, zum Schluss… Et on attire l'attention : « Achten Sie darauf, dass die Hände desinfiziert sind. » (Veillez à ce que…). La subordonnée en dass a le verbe à la fin.",
            points: [ "« Zuerst bereitest du das Material vor. »", "« Achte darauf, dass alles steril ist. »", "« Versuch es jetzt selbst, ich helfe dir. »" ],
            exemples: [
              { de: "Achten Sie darauf, dass die Hände desinfiziert sind.", fr: "Hinweis mit *dass*-Satz." },
              { de: "Zuerst erkläre ich es, dann machst du es selbst.", fr: "schrittweise Anleitung." },
              { de: "Hast du noch eine Rückfrage?", fr: "zu Fragen ermutigen." }
            ],
            note: "Bonne pédagogie : expliquer → montrer → faire faire → donner un feedback bienveillant." }
        ],
        dialogue: { titre: "Anleitung eines Azubis", lieu: "Im Pflegezimmer", lignes: [
          { loc: "Tu encadres un apprenti pour un soin", de: "Heute machst du den Verbandwechsel. Ich leite dich an.", fr: "Aujourd'hui tu fais le changement de pansement. Je t'encadre." },
          { de: "Okay, aber ich bin etwas unsicher.", fr: "D'accord, mais je suis un peu hésitant." },
          { de: "Kein Problem. Zuerst — was machst du als Erstes?", fr: "Pas de problème. D'abord — que fais-tu en premier ?" },
          { de: "Die Hände desinfizieren?", fr: "Me désinfecter les mains ?" },
          { de: "Genau. Achte darauf, dass alles steril bleibt.", fr: "Exactement. Veille à ce que tout reste stérile." },
          { de: "Und wenn ich einen Fehler mache?", fr: "Et si je fais une erreur ?" }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was soll der Azubi als Erstes tun?", options: ["Den Verband anlegen", "Die Hände desinfizieren", "Den Arzt rufen"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "anleiten", droite: "encadrer" }, { gauche: "der Azubi", droite: "l'apprenti" }, { gauche: "das Feedback", droite: "le retour" }, { gauche: "selbstständig", droite: "autonome" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'instruction (subordonnée dass).", texte: "Achte darauf, {0} alles steril bleibt.", accepte: [["dass"]], indice: "« veille à ce QUE » → verbe à la fin." },
          { type: "qcm", cat: "appro", consigne: "Choisis l'encouragement.", question: "L'apprenti est hésitant. Que dis-tu ?", options: ["Lass es lieber, das kann ich.", "Versuch es selbst, ich helfe dir.", "Du schaffst das sowieso nicht."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets l'instruction dans l'ordre.", mots: ["Zuerst", "erkläre", "ich", "es", "dann", "machst", "du", "es"], correct: "Zuerst erkläre ich es dann machst du es", traduction: "D'abord je l'explique, ensuite tu le fais." },
          { type: "production", cat: "prod", prompt: "Encadre un apprenti : explique d'abord, puis laisse-le faire lui-même.", modele: "Zuerst zeige ich es dir, dann machst du es selbst." }
        ],
        documentation: { task: "Note l'encadrement : changement de pansement réalisé par l'apprenti sous supervision, déroulement stérile correct, feedback donné.", modele: "Verbandwechsel vom Azubi unter Anleitung durchgeführt, steriles Vorgehen korrekt, Feedback gegeben." },
        rp: { scene: "Zika spielt einen unsicheren Auszubildenden. Du leitest ihn bei einem Soin an.", intro: "Erkläre Schritt für Schritt, achte auf Sicherheit und ermutige ihn.", fin: "Sehr gut! Geduldig, klar strukturiert und ermutigend angeleitet.", tours: [
          { de: "Ich habe das noch nie gemacht. Was soll ich tun?", options: [ { de: "Keine Sorge, wir gehen Schritt für Schritt vor. Zuerst die Hände desinfizieren.", ok: true }, { de: "Mach einfach, ich schaue Fernsehen.", ok: false }, { de: "Das solltest du längst können.", ok: false } ] },
          { de: "Und jetzt der Verband — so richtig?", options: [ { de: "Fast. Achte darauf, dass alles steril bleibt.", ok: true }, { de: "Egal, Hauptsache fertig.", ok: false } ] },
          { de: "Hab ich es gut gemacht?", options: [ { de: "Ja, sehr ordentlich! Beim nächsten Mal schaffst du es allein.", ok: true }, { de: "Nein, das war schlecht.", ok: false } ] }
        ] } },
      { id: "pc1-4", dom: "grund", titreDE: "Ethik und Recht in der Pflege", titre: "Éthique et droit du soin", desc: "Directives anticipées, secret professionnel.",
        vocCoursDE: [
          "In der Pflege gelten **Ethik** und **Recht**. Du **wahrst** die **Schweigepflicht** — du darfst Informationen nicht einfach weitergeben. Und du achtest die **Selbstbestimmung** des Patienten.",
          "Hat der Patient eine **Patientenverfügung**, ist sein **Wille** verbindlich. Im Zweifel hältst du **Rücksprache** mit dem Arzt und übernimmst **Verantwortung**."
        ],
        vocabulaire: [
          { de: "die Ethik", fr: "l'éthique", ex: "Ethik ist ein wichtiger Teil der Pflege." },
          { de: "die Patientenverfügung", fr: "la directive anticipée", ex: "Der Patient hat eine Patientenverfügung." },
          { de: "die Schweigepflicht", fr: "le secret professionnel", ex: "Die Schweigepflicht gilt immer." },
          { de: "die Selbstbestimmung", fr: "l'autodétermination", ex: "Wir achten die Selbstbestimmung des Patienten." },
          { de: "der Wille", fr: "la volonté", ex: "Der Wille des Patienten ist verbindlich." },
          { de: "vertraulich", fr: "confidentiel", ex: "Diese Information ist vertraulich." },
          { de: "die Verantwortung", fr: "la responsabilité", ex: "Du trägst Verantwortung für deine Handlung." },
          { de: "einwilligen", fr: "consentir", ex: "Der Patient muss in die Behandlung einwilligen." },
          { de: "wahren", fr: "préserver / respecter", ex: "Wir wahren die Würde und die Rechte." },
          { de: "das Recht", fr: "le droit", ex: "Der Patient hat ein Recht auf Information." }
        ],
        grammaire: [
          { titre: "Droits et interdits (dürfen / dürfen nicht)", titreDE: "dürfen, nicht dürfen, müssen",
            regle: "Pour exprimer ce qui est permis ou interdit, on utilise dürfen : « Ich darf keine Informationen weitergeben. » (Je n'ai pas le droit de…). Pour une obligation : müssen ; pour une absence d'obligation : nicht müssen.",
            points: [ "« Sie dürfen die Behandlung ablehnen. »", "« Ich darf das nicht ohne Einwilligung tun. »", "« Wir müssen den Willen des Patienten respektieren. »" ],
            exemples: [
              { de: "Ich darf vertrauliche Daten nicht weitergeben.", fr: "Verbot mit *dürfen nicht*." },
              { de: "Der Patient darf jede Behandlung ablehnen.", fr: "Recht mit *dürfen*." },
              { de: "Wir müssen die Patientenverfügung beachten.", fr: "Pflicht mit *müssen*." }
            ],
            note: "Le patient capable de discernement a toujours le droit de refuser un soin — même si nous ne sommes pas d'accord." }
        ],
        dialogue: { titre: "Rücksprache mit dem Arzt", lieu: "Auf der Station", lignes: [
          { loc: "Tu consultes le médecin sur une question éthique", de: "Herr Doktor, Herr Meier lehnt die Infusion ab.", fr: "Docteur, M. Meier refuse la perfusion." },
          { de: "Ist er bei klarem Verstand?", fr: "Est-il en pleine possession de ses moyens ?" },
          { de: "Ja. Und er hat eine Patientenverfügung.", fr: "Oui. Et il a une directive anticipée." },
          { de: "Dann müssen wir seinen Willen respektieren.", fr: "Alors nous devons respecter sa volonté." },
          { de: "Ich darf ihn also nicht zwingen?", fr: "Je n'ai donc pas le droit de le forcer ?" },
          { de: "Nein. Dokumentieren Sie die Ablehnung sorgfältig.", fr: "Non. Documentez le refus avec soin." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was muss das Team tun?", options: ["Den Patienten zwingen", "Den Willen des Patienten respektieren", "Die Verfügung ignorieren"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Schweigepflicht", droite: "le secret professionnel" }, { gauche: "die Patientenverfügung", droite: "la directive anticipée" }, { gauche: "die Selbstbestimmung", droite: "l'autodétermination" }, { gauche: "vertraulich", droite: "confidentiel" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'interdit (modal).", texte: "Ich {0} vertrauliche Daten nicht weitergeben.", accepte: [["darf"]], indice: "« ne pas avoir le droit » → dürfen nicht." },
          { type: "qcm", cat: "appro", consigne: "Choisis la phrase correcte.", question: "Un patient lucide refuse un soin. Que vaut son refus ?", options: ["Er muss trotzdem behandelt werden.", "Er darf die Behandlung ablehnen.", "Nur der Arzt entscheidet."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase dans l'ordre.", mots: ["Wir", "müssen", "den", "Willen", "des", "Patienten", "respektieren"], correct: "Wir müssen den Willen des Patienten respektieren", traduction: "Nous devons respecter la volonté du patient." },
          { type: "production", cat: "prod", prompt: "Explique à un proche que tu ne peux pas donner d'informations confidentielles.", modele: "Es tut mir leid, aber ich darf vertrauliche Informationen nicht weitergeben." }
        ],
        documentation: { task: "Note la situation : M. Meier, lucide, refuse la perfusion, directive anticipée présente, médecin informé, volonté respectée.", modele: "Herr Meier, orientiert, lehnt Infusion ab; Patientenverfügung vorhanden; Arzt informiert; Wille respektiert und dokumentiert." },
        rp: { scene: "Zika spielt den Arzt. Du hältst Rücksprache wegen einer Behandlungsablehnung.", intro: "Schildere die Lage sachlich und frag, wie ihr den Patientenwillen wahrt.", fin: "Ausgezeichnet! Du hast ethisch korrekt gehandelt und alles dokumentiert.", tours: [
          { de: "Sie wollten mich sprechen — worum geht es?", options: [ { de: "Herr Meier lehnt die Infusion ab und hat eine Patientenverfügung.", ok: true }, { de: "Ach, eigentlich nichts Wichtiges.", ok: false }, { de: "Ich habe ihn schon zur Infusion gezwungen.", ok: false } ] },
          { de: "Ist der Patient denn entscheidungsfähig?", options: [ { de: "Ja, er ist klar und orientiert.", ok: true }, { de: "Das spielt doch keine Rolle.", ok: false } ] },
          { de: "Wie gehen wir vor?", options: [ { de: "Wir respektieren seinen Willen und ich dokumentiere die Ablehnung.", ok: true }, { de: "Wir behandeln ihn einfach trotzdem.", ok: false } ] }
        ] } },
      { id: "pc1-5", dom: "heim", titreDE: "Interkulturelle Pflege", titre: "Soins interculturels", desc: "Tenir compte des cultures et des croyances.",
        vocCoursDE: [
          "**Interkulturelle Pflege** bedeutet, die **Kultur**, die **Religion** und die **Gewohnheiten** des Patienten zu **respektieren** — zum Beispiel beim Essen, beim Waschen oder beim Gebet.",
          "Frag offen nach den Wünschen und vermeide **Vorurteile**. Bei Sprachproblemen hilft ein **Dolmetscher**. So vermeidest du **Missverständnisse**."
        ],
        vocabulaire: [
          { de: "die Kultur", fr: "la culture", ex: "Wir respektieren jede Kultur." },
          { de: "die Religion", fr: "la religion", ex: "Die Religion ist dem Patienten wichtig." },
          { de: "das Vorurteil", fr: "le préjugé", ex: "Wir arbeiten ohne Vorurteile." },
          { de: "respektieren", fr: "respecter", ex: "Ich respektiere Ihre Gewohnheiten." },
          { de: "die Gewohnheit", fr: "l'habitude / coutume", ex: "Jeder hat andere Gewohnheiten." },
          { de: "der Dolmetscher", fr: "l'interprète", ex: "Wir rufen einen Dolmetscher." },
          { de: "rücksichtsvoll", fr: "prévenant / respectueux", ex: "Bitte seien Sie rücksichtsvoll." },
          { de: "das Missverständnis", fr: "le malentendu", ex: "So vermeiden wir ein Missverständnis." },
          { de: "die Verständigung", fr: "la communication / l'entente", ex: "Die Verständigung ist manchmal schwierig." },
          { de: "berücksichtigen", fr: "prendre en compte", ex: "Wir berücksichtigen Ihre Wünsche." }
        ],
        grammaire: [
          { titre: "Demander poliment avec une interrogative indirecte (ob)", titreDE: "Indirekte Fragen: ob, wie, welche",
            regle: "Pour demander des préférences avec tact, on utilise une interrogative indirecte : « Ich möchte wissen, ob Sie bestimmte Wünsche haben. » Le verbe va à la fin. Avec ob pour une question oui/non, sinon wie, welche, wann…",
            points: [ "« Ich frage, ob Sie Schweinefleisch essen. »", "« Sagen Sie mir, welche Gewohnheiten wichtig sind. »", "Verbe à la fin de la subordonnée." ],
            exemples: [
              { de: "Ich möchte wissen, ob Sie besondere Wünsche haben.", fr: "indirekte Ja/Nein-Frage mit *ob*." },
              { de: "Sagen Sie mir bitte, welche Speisen Sie nicht essen.", fr: "indirekte Frage mit *welche*." },
              { de: "Wir berücksichtigen Ihre religiösen Gewohnheiten.", fr: "Respekt zeigen." }
            ],
            note: "Ne pas supposer : demander ouvertement les préférences est plus respectueux que de « deviner » selon l'origine." }
        ],
        dialogue: { titre: "Kulturelle Wünsche", lieu: "Im Pflegeheim, Gespräch mit dem Sohn", lignes: [
          { loc: "Le fils d'un résident exprime des besoins culturels", de: "Mein Vater isst aus religiösen Gründen kein Schweinefleisch.", fr: "Mon père ne mange pas de porc pour des raisons religieuses." },
          { de: "Danke für die Information. Das berücksichtigen wir natürlich.", fr: "Merci pour l'information. Nous en tenons compte, bien sûr." },
          { de: "Und er betet fünfmal am Tag.", fr: "Et il prie cinq fois par jour." },
          { de: "Gut zu wissen. Ich möchte wissen, ob er dafür Ruhe braucht.", fr: "Bon à savoir. J'aimerais savoir s'il a besoin de calme pour cela." },
          { de: "Ja, ein ruhiger Moment wäre ideal.", fr: "Oui, un moment calme serait idéal." },
          { de: "Wir richten das ein. Sagen Sie uns einfach Ihre Wünsche.", fr: "Nous l'organisons. Dites-nous simplement vos souhaits." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Was berücksichtigt die Pflegekraft?", options: ["Nichts", "Die religiösen Gewohnheiten (Essen, Gebet)", "Nur das Essen"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Kultur", droite: "la culture" }, { gauche: "das Vorurteil", droite: "le préjugé" }, { gauche: "der Dolmetscher", droite: "l'interprète" }, { gauche: "das Missverständnis", droite: "le malentendu" } ] },
          { type: "trou", cat: "appro", consigne: "Complète l'interrogative indirecte.", texte: "Ich möchte wissen, {0} Sie besondere Wünsche haben.", accepte: [["ob"]], indice: "question oui/non indirecte." },
          { type: "qcm", cat: "appro", consigne: "Choisis l'attitude respectueuse.", question: "Comment connaître les besoins culturels ?", options: ["Ich rate nach der Herkunft.", "Ich frage offen nach den Wünschen.", "Ich ignoriere das."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets l'interrogative indirecte dans l'ordre.", mots: ["Sagen", "Sie", "mir", "welche", "Speisen", "Sie", "nicht", "essen"], correct: "Sagen Sie mir welche Speisen Sie nicht essen", traduction: "Dites-moi quels aliments vous ne mangez pas." },
          { type: "production", cat: "prod", prompt: "Demande poliment à un proche s'il y a des besoins religieux ou alimentaires.", modele: "Ich möchte wissen, ob es religiöse oder besondere Essenswünsche gibt." }
        ],
        documentation: { task: "Note les besoins : M. X ne mange pas de porc (raison religieuse), prie 5 fois/jour, besoin d'un moment calme — pris en compte.", modele: "Herr X: kein Schweinefleisch (religiös), betet 5-mal täglich, benötigt ruhigen Moment — wird berücksichtigt." },
        rp: { scene: "Zika spielt den Angehörigen eines Bewohners mit kulturellen Wünschen. Du gehst respektvoll darauf ein.", intro: "Frag offen nach den Wünschen, zeig Respekt und sichere die Berücksichtigung zu.", fin: "Sehr gut! Offen, respektvoll und ohne Vorurteile — echte interkulturelle Pflege.", tours: [
          { de: "Meine Mutter darf aus religiösen Gründen bestimmte Speisen nicht essen.", options: [ { de: "Danke, dass Sie das sagen. Welche Speisen sind das genau?", ok: true }, { de: "Hier essen alle das Gleiche.", ok: false }, { de: "Das ist übertrieben.", ok: false } ] },
          { de: "Sie braucht auch einen ruhigen Ort zum Beten.", options: [ { de: "Das richten wir gern ein. Ich möchte wissen, wann sie betet.", ok: true }, { de: "Dafür haben wir keinen Platz.", ok: false } ] },
          { de: "Ist das wirklich kein Problem für Sie?", options: [ { de: "Überhaupt nicht. Wir berücksichtigen Ihre Wünsche und dokumentieren sie.", ok: true }, { de: "Ein bisschen schon, ehrlich gesagt.", ok: false } ] }
        ] } },
      { id: "pc1-6", dom: "grund", titreDE: "Hygiene und Qualitätsmanagement", titre: "Hygiène et qualité", desc: "Normes d'hygiène et prévention des infections.",
        vocCoursDE: [
          "**Hygiene** schützt Patienten und Personal. Die wichtigste Maßnahme ist die **Händedesinfektion**. Bei Bedarf trägst du **Schutzkleidung**, um eine **Infektion** zu **vermeiden**.",
          "Im **Qualitätsmanagement** gibt es klare **Standards** und **Richtlinien**, die alle **einhalten** müssen. Regelmäßige **Kontrollen** sichern die **Qualität** der Pflege."
        ],
        vocabulaire: [
          { de: "die Hygiene", fr: "l'hygiène", ex: "Hygiene hat oberste Priorität." },
          { de: "die Händedesinfektion", fr: "la désinfection des mains", ex: "Die Händedesinfektion ist Pflicht." },
          { de: "die Infektion", fr: "l'infection", ex: "Wir wollen jede Infektion vermeiden." },
          { de: "die Schutzkleidung", fr: "la tenue de protection", ex: "Bei diesem Patienten tragen wir Schutzkleidung." },
          { de: "der Standard", fr: "le standard / la norme", ex: "Wir arbeiten nach festen Standards." },
          { de: "die Richtlinie", fr: "la directive / le protocole", ex: "Die Richtlinie schreibt das vor." },
          { de: "einhalten", fr: "respecter (une règle)", ex: "Alle müssen die Regeln einhalten." },
          { de: "vermeiden", fr: "éviter", ex: "So vermeiden wir Fehler." },
          { de: "die Qualität", fr: "la qualité", ex: "Die Qualität der Pflege wird kontrolliert." },
          { de: "die Kontrolle", fr: "le contrôle", ex: "Es gibt regelmäßige Kontrollen." }
        ],
        grammaire: [
          { titre: "Le passif avec un modal (muss … werden)", titreDE: "Modal + Passiv: muss eingehalten werden",
            regle: "Pour exprimer une obligation impersonnelle, on combine modal + passif : müssen + participe passé + werden. Ex. : « Die Hygienestandards müssen eingehalten werden. » (Les normes d'hygiène doivent être respectées.)",
            points: [ "« Die Hände müssen desinfiziert werden. »", "« Schutzkleidung muss getragen werden. »", "Structure : … muss + Partizip + werden." ],
            exemples: [
              { de: "Die Hygienestandards müssen eingehalten werden.", fr: "Modal + Passiv: *müssen … werden*." },
              { de: "Vor jedem Kontakt müssen die Hände desinfiziert werden.", fr: "Pflicht unpersönlich ausgedrückt." },
              { de: "Fehler müssen offen gemeldet werden.", fr: "Qualitätskultur: Fehler melden." }
            ],
            note: "Culture qualité : signaler une erreur ou un manquement n'est pas une faute, c'est une protection pour le patient." }
        ],
        dialogue: { titre: "Hygiene im Alltag", lieu: "Auf dem Flur der Station", lignes: [
          { loc: "Tu rappelles gentiment une règle d'hygiène à un collègue", de: "Du, kurz — hast du dir vor dem Zimmer die Hände desinfiziert?", fr: "Dis, vite — tu t'es désinfecté les mains avant la chambre ?" },
          { de: "Oh, ich glaube, ich habe es vergessen.", fr: "Oh, je crois que j'ai oublié." },
          { de: "Kein Problem, aber es muss vor jedem Kontakt sein.", fr: "Pas de souci, mais ça doit être avant chaque contact." },
          { de: "Stimmt, das ist der Standard. Danke fürs Erinnern.", fr: "C'est vrai, c'est la norme. Merci de me le rappeler." },
          { de: "Gern. Bei Herrn Behr brauchen wir auch Schutzkleidung.", fr: "Avec plaisir. Chez M. Behr, il faut aussi une tenue de protection." },
          { de: "Gut zu wissen. Ich ziehe sie gleich an.", fr: "Bon à savoir. Je la mets tout de suite." }
        ]},
        exercices: [
          { type: "qcm", cat: "comp", consigne: "Compréhension du dialogue.", question: "Wann muss man die Hände desinfizieren?", options: ["Einmal am Tag", "Vor jedem Kontakt", "Nur nach der Pause"], correct: 1 },
          { type: "association", cat: "comp", consigne: "Associe le mot à sa traduction.", paires: [ { gauche: "die Hygiene", droite: "l'hygiène" }, { gauche: "die Infektion", droite: "l'infection" }, { gauche: "die Schutzkleidung", droite: "la tenue de protection" }, { gauche: "einhalten", droite: "respecter" } ] },
          { type: "trou", cat: "appro", consigne: "Complète le passif avec modal.", texte: "Die Hygienestandards müssen {0} werden.", accepte: [["eingehalten"]], indice: "participe passé de einhalten." },
          { type: "qcm", cat: "appro", consigne: "Choisis la bonne culture qualité.", question: "Tu as fait une erreur. Que fais-tu ?", options: ["Ich verstecke sie.", "Ich melde sie offen.", "Ich gebe einem Kollegen die Schuld."], correct: 1 },
          { type: "ordre", cat: "appro", consigne: "Remets la phrase au passif.", mots: ["Schutzkleidung", "muss", "getragen", "werden"], correct: "Schutzkleidung muss getragen werden", traduction: "Une tenue de protection doit être portée." },
          { type: "production", cat: "prod", prompt: "Rappelle (au passif) qu'il faut se désinfecter les mains avant chaque contact.", modele: "Vor jedem Kontakt müssen die Hände desinfiziert werden." }
        ],
        documentation: { task: "Note dans le contrôle qualité : règle d'hygiène rappelée à l'équipe, tenue de protection requise chez M. Behr (risque infectieux), standards respectés.", modele: "Hygieneregel im Team erinnert; bei Herrn Behr Schutzkleidung erforderlich (Infektionsrisiko); Standards eingehalten." },
        rp: { scene: "Zika spielt deine Kollegin, die die Händedesinfektion vergessen hat. Du erinnerst freundlich daran.", intro: "Sprich es sachlich und freundlich an, erkläre den Standard, biete Hilfe an.", fin: "Sehr gut! Sachlich, kollegial und korrekt — so funktioniert Qualitätssicherung.", tours: [
          { de: "Ich gehe schnell zu Herrn Behr ins Zimmer.", options: [ { de: "Hast du dir die Hände desinfiziert? Bei ihm brauchen wir auch Schutzkleidung.", ok: true }, { de: "Egal, geh einfach rein.", ok: false }, { de: "Mach was du willst.", ok: false } ] },
          { de: "Oh, das habe ich vergessen. Ist das so wichtig?", options: [ { de: "Ja, vor jedem Kontakt müssen die Hände desinfiziert werden.", ok: true }, { de: "Eigentlich nicht, aber egal.", ok: false } ] },
          { de: "Okay, danke. Ich mache es sofort.", options: [ { de: "Gern. So vermeiden wir Infektionen und halten den Standard ein.", ok: true }, { de: "Na endlich.", ok: false } ] }
        ] } }
    ]},
    { code: "C2", titre: "Expertise et encadrement", lecons: [
      { id: "pc2-1", dom: "kh", titreDE: "Fachgespräche mit Ärzten", titre: "Échanges spécialisés avec les médecins", desc: "Argumenter, alerter, proposer." },
      { id: "pc2-2", dom: "grund", titreDE: "Palliativversorgung und Sterbebegleitung", titre: "Soins palliatifs et fin de vie", desc: "Accompagner la fin de vie et les proches." },
      { id: "pc2-3", dom: "grund", titreDE: "Teamleitung und Konfliktmanagement", titre: "Encadrement et gestion des conflits", desc: "Diriger et soutenir une équipe soignante." },
      { id: "pc2-4", dom: "grund", titreDE: "Fallbesprechung und Fachvortrag", titre: "Étude de cas et exposé", desc: "Présenter un cas, intervenir en réunion." },
      { id: "pc2-5", dom: "grund", titreDE: "Pflegewissenschaft und Leitlinien", titre: "Sciences infirmières et recommandations", desc: "Lire et appliquer les recommandations." },
      { id: "pc2-6", dom: "ambul", titreDE: "Begutachtung und Pflegegrade", titre: "Évaluation et niveaux de dépendance", desc: "Évaluer l'autonomie (Pflegegrade, MD)." }
    ]}
  ]
};
