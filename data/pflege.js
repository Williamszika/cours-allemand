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
      { id: "pa2-1", dom: "grund", titreDE: "Der Körper und die Pflege", titre: "Le corps et les soins", desc: "Parties du corps et vocabulaire de base des soins." },
      { id: "pa2-2", dom: "grund", titreDE: "Körperpflege und Hygiene", titre: "Toilette et hygiène", desc: "Laver, habiller, soins d'hygiène au quotidien." },
      { id: "pa2-3", dom: "heim", titreDE: "Im Pflegeheim: der Tagesablauf", titre: "En maison de retraite : la journée", desc: "Lever, repas, coucher : accompagner les résidents." },
      { id: "pa2-4", dom: "grund", titreDE: "Begrüßung und einfache Kommunikation", titre: "Accueil et communication simple", desc: "Saluer, se présenter, phrases utiles avec le patient." },
      { id: "pa2-5", dom: "grund", titreDE: "Vitalzeichen messen", titre: "Mesurer les signes vitaux", desc: "Température, pouls, tension : mots et consignes." },
      { id: "pa2-6", dom: "grund", titreDE: "Hilfsmittel und Mobilität", titre: "Aides et mobilité", desc: "Fauteuil roulant, déambulateur, aider à se déplacer." }
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
