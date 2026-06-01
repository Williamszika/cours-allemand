# 🇩🇪 Allemand intensif — Niveau A1

Une **application web d'apprentissage de l'allemand** interactive, complète et
auto-corrigée, couvrant l'intégralité du niveau **A1 du CECRL**. Méthode
**communicative** inspirée des manuels utilisés en Allemagne (*Menschen, Schritte
international, Netzwerk*), explications en français. Prête comme **Telegram Mini App**
et déployable sur **Vercel**.

> *Von Null auf Deutsch — De zéro à l'allemand.*

---

## 📸 Aperçu

| Page d'accueil (programme complet) | Une leçon |
|:---:|:---:|
| ![Accueil](apercu/apercu-01-accueil.png) | ![Leçon](apercu/apercu-03-lecon.png) |

| Exercice auto-corrigé | Telegram (thème sombre) |
|:---:|:---:|
| ![Exercice](apercu/apercu-04-exercice.png) | ![Telegram sombre](apercu/apercu-13-tg-dark-accueil.png) |

---

## ▶️ Comment l'ouvrir / le tester

Aucune installation, aucun serveur, aucun build.

- **Version multi-fichiers** : ouvrez `index.html`.
- **Version « 1 seul fichier »** : ouvrez `dist/allemand-a1.html` (tout est inclus —
  téléchargeable, ouvrable d'un double-clic, même hors-ligne). Régénération :
  `node build.js`.

> 🔊 **Prononciation audio** : synthèse vocale du navigateur (allemand). Activez le son.
> 🎤 **Production orale** : reconnaissance vocale (Chrome/Edge) ou écoute-modèle + auto-évaluation.

### 🌐 Déploiement
Site 100 % statique → voir **[DEPLOY.md](DEPLOY.md)** (Vercel en quelques clics).

### 🤖 Telegram Mini App
SDK intégré, **thème clair/sombre synchronisé**, **bouton principal** et **bouton
retour** natifs, **retour haptique**, et **synchronisation de la progression entre
appareils** (CloudStorage). Mise en place via @BotFather → **[TELEGRAM.md](TELEGRAM.md)**.

---

## 📚 Contenu

- **2 modules** : A1.1 (*Grundlagen*) et A1.2 (*Alltag*)
- **19 leçons** thématiques
- **267 mots** de vocabulaire (avec exemples et audio)
- **153 exercices** : 115 auto-corrigés + 19 de production écrite + 19 de production orale
- **~16 heures** de cours

### Module A1.1 — Les fondations
1. Se présenter · 2. L'alphabet et les chiffres · 3. Langues et pays ·
4. Personnes et loisirs · 5. Le travail · 6. Le temps libre ·
7. À l'hôtel · 8. Le plan de la ville · 9. Nourriture & restaurant

### Module A1.2 — Le quotidien
10. La routine quotidienne · 11. Le stress au bureau · 12. L'ordinateur ·
13. Prendre un rendez-vous · 14. Saisons & météo · 15. Voyages ·
16. Transports · 17. Logement & meubles · 18. Santé · 19. Excuses

### Grammaire couverte
- **A1.1** : pronoms & présent · articles der/die/das · verbes (réguliers, irréguliers,
  à changement de voyelle) · négation nicht/kein · prépositions de lieu · accusatif
- **A1.2** : verbes modaux, séparables, passé composé (Perfekt) · prépositions de temps ·
  conjonctions (und, aber, denn, weil) · datif · indicateurs de lieu · adjectifs

---

## 🧩 9 types d'exercices interactifs

Choix multiple · texte à trous · association · conjugaison · remise en ordre ·
compréhension orale · traduction · **production écrite** (feedback mots-clés + modèle) ·
**production orale** (reconnaissance vocale ou écoute-modèle).

Chaque exercice se corrige **instantanément**, avec **explication pédagogique** et
**barre de progression**. Mode **révision** (répétition espacée — système de Leitner) et
**test de fin de module noté** (20 questions, score /100, seuil 60 %).

---

## 🗂️ Architecture

```
.
├── index.html              # Point d'entrée (application monopage)
├── build.js                # Génère la version « 1 seul fichier »
├── vercel.json             # Config de déploiement statique
├── css/styles.css          # Design responsive + thème sombre Telegram
├── js/
│   ├── app.js              # Routage + rendu (aperçu, leçons, révision, test)
│   ├── exercises.js        # Moteur des 9 types d'exercices (+ mode test)
│   ├── speech.js           # Synthèse + reconnaissance vocale (de-DE)
│   ├── revision.js         # Répétition espacée (Leitner)
│   ├── telegram.js         # Intégration Telegram Mini App
│   ├── sync.js             # Synchro multi-appareils (CloudStorage)
│   └── progress.js         # Suivi de progression (localStorage)
├── data/
│   ├── lecons-a11.js       # Module A1.1 (9 leçons)
│   ├── lecons-a12.js       # Module A1.2 (10 leçons)
│   ├── production.js       # Exercices de production écrite/orale
│   └── cours.js            # Assemblage + métadonnées
├── dist/allemand-a1.html   # Version autonome (générée)
├── apercu/                 # Captures d'écran
└── README.md · DEPLOY.md · TELEGRAM.md
```

*Cours d'allemand intensif · Niveau A1 · Méthode communicative (CECRL).*
