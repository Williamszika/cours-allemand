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
        ] },
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
        ] },
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
        ] },
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
        ] },
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
        ] },
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
        ] }
    ]},
    { code: "B1", titre: "Communiquer dans le soin", lecons: [
      { id: "pb1-1", dom: "kh", titreDE: "Aufnahme eines Patienten", titre: "Admission d'un patient", desc: "Données personnelles et anamnèse simple." },
      { id: "pb1-2", dom: "grund", titreDE: "Schmerzen erfassen", titre: "Évaluer la douleur", desc: "« Où avez-vous mal ? », l'échelle de la douleur." },
      { id: "pb1-3", dom: "grund", titreDE: "Medikamente verabreichen", titre: "Donner les médicaments", desc: "Comprimés, gouttes, dosage et horaires." },
      { id: "pb1-4", dom: "kh", titreDE: "Übergabe im Team", titre: "La transmission d'équipe", desc: "La relève : transmettre l'essentiel sans erreur." },
      { id: "pb1-5", dom: "heim", titreDE: "Mit Angehörigen sprechen", titre: "Parler aux proches", desc: "Informer et rassurer les familles." },
      { id: "pb1-6", dom: "grund", titreDE: "Notfälle erkennen und melden", titre: "Reconnaître et signaler une urgence", desc: "Chute, malaise, perte de connaissance." }
    ]},
    { code: "B2", titre: "Langue professionnelle et documentation", lecons: [
      { id: "pb2-1", dom: "grund", titreDE: "Pflegedokumentation", titre: "La documentation des soins", desc: "Rédiger le rapport et la planification de soins." },
      { id: "pb2-2", dom: "kh", titreDE: "Krankheitsbilder I", titre: "Tableaux cliniques I", desc: "Diabète, démence, AVC : décrire et accompagner." },
      { id: "pb2-3", dom: "grund", titreDE: "Wundversorgung und Dekubitus", titre: "Plaies et escarres", desc: "Prévention et soins des plaies." },
      { id: "pb2-4", dom: "kh", titreDE: "Ärztliche Anordnungen umsetzen", titre: "Appliquer les prescriptions", desc: "Comprendre et exécuter les consignes du médecin." },
      { id: "pb2-5", dom: "ambul", titreDE: "Ambulante Pflege: der Hausbesuch", titre: "Soins à domicile : la visite", desc: "Organiser et documenter une visite à domicile." },
      { id: "pb2-6", dom: "grund", titreDE: "Schwierige Gespräche führen", titre: "Conversations difficiles", desc: "Refus de soin, agressivité, désorientation." }
    ]},
    { code: "C1", titre: "Soins complexes et responsabilité", lecons: [
      { id: "pc1-1", dom: "kh", titreDE: "Krankheitsbilder II", titre: "Tableaux cliniques II", desc: "Soins palliatifs, oncologie, BPCO." },
      { id: "pc1-2", dom: "grund", titreDE: "Pflegeprozess und Pflegeplanung", titre: "Processus et planification de soins", desc: "Le raisonnement clinique, en allemand." },
      { id: "pc1-3", dom: "grund", titreDE: "Beratung und Anleitung", titre: "Conseil et accompagnement", desc: "Conseiller patients, proches et stagiaires." },
      { id: "pc1-4", dom: "grund", titreDE: "Ethik und Recht in der Pflege", titre: "Éthique et droit du soin", desc: "Directives anticipées, secret professionnel." },
      { id: "pc1-5", dom: "heim", titreDE: "Interkulturelle Pflege", titre: "Soins interculturels", desc: "Tenir compte des cultures et des croyances." },
      { id: "pc1-6", dom: "grund", titreDE: "Hygiene und Qualitätsmanagement", titre: "Hygiène et qualité", desc: "Normes d'hygiène et prévention des infections." }
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
