# 🇩🇪 Allemand intensif — Niveau A1

Application web d'apprentissage de l'allemand, **interactive et auto-corrigée**,
couvrant **tout le niveau A1** (CECRL). Méthode communicative inspirée des manuels
allemands (*Menschen, Schritte international, Netzwerk*), explications en français.
Le cours se suit **leçon par leçon** et se conclut par un **examen final**.
Prête comme **Telegram Mini App** et déployable sur **Vercel**.

> *Von Null auf Deutsch — De zéro à l'allemand.*

---

## 📸 Aperçu

| Une leçon (vraie photo + explication) | Accueil (thème Telegram sombre) |
|:---:|:---:|
| ![Leçon](apercu/apercu-16-lecon-photo.png) | ![Telegram](apercu/apercu-13-tg-dark-accueil.png) |

| Exercice auto-corrigé | Version mobile |
|:---:|:---:|
| ![Exercice](apercu/apercu-04-exercice.png) | ![Mobile](apercu/apercu-05-mobile.png) |

---

## ✨ Au programme

- **2 modules · 19 leçons** couvrant les thèmes A1 (se présenter, hôtel, restaurant,
  travail, transports, santé, etc.)
- **Parcours séquentiel** : chaque leçon se **déverrouille** lorsque la précédente est
  terminée (seule la leçon 1 est ouverte au départ).
- **Chaque leçon est illustrée** d'une **vraie photo** et introduite par une
  **explication** claire du thème et de la grammaire.
- **267 mots** de vocabulaire avec **prononciation audio** (de-DE).
- **191 exercices** organisés en trois temps :
  **📖 Compréhension** (basée sur le dialogue) → **🎯 Approfondi** (grammaire) →
  **✍️ Production** écrite & orale.
- **🎓 Examen final** unique, **débloqué après les 19 leçons** : 20 questions tirées de
  tout l'A1, seuil de réussite 60 %, corrections détaillées.
- **🔁 Révision espacée** (système de Leitner) et **suivi de progression**.

### Grammaire couverte
- **A1.1** : pronoms & présent · articles der/die/das · verbes (réguliers, irréguliers,
  à changement de voyelle) · négation nicht/kein · prépositions de lieu · accusatif
- **A1.2** : verbes modaux, séparables, passé composé (Perfekt) · prépositions de temps ·
  conjonctions (und, aber, denn, weil) · datif · indicateurs de lieu · adjectifs

---

## ▶️ Ouvrir / tester

Aucune installation, aucun build.

- **Version multi-fichiers** : ouvrez `index.html`.
- **Version « 1 seul fichier »** : ouvrez `dist/allemand-a1.html` (tout est inclus —
  ouvrable d'un double-clic, même hors-ligne). Régénération : `node build.js`.

> 🔊 **Audio** : synthèse vocale du navigateur. 🎤 **Production orale** : reconnaissance
> vocale (Chrome/Edge) ou écoute-modèle + auto-évaluation. 🖼️ Les **photos** se chargent
> en ligne (le HTTPS de Vercel/Telegram est requis).

---

## 🌐 Déploiement (Vercel)
Site 100 % statique, cours **à la racine** → voir **[DEPLOY.md](DEPLOY.md)**
(import du dépôt → Deploy, sans réglage « Root Directory »).

## 🤖 Telegram Mini App
SDK intégré, **thème clair/sombre synchronisé**, **bouton principal** et **bouton retour**
natifs, **retour haptique**, et **synchronisation de la progression entre appareils**
(CloudStorage). Mise en place via @BotFather → **[TELEGRAM.md](TELEGRAM.md)**.

---

## 🗂️ Architecture

```
.
├── index.html · build.js · vercel.json
├── css/styles.css                 # design responsive + thème sombre Telegram
├── js/
│   ├── app.js                     # routage, parcours séquentiel, examen final
│   ├── exercises.js               # 9 types d'exercices (+ mode examen)
│   ├── speech.js                  # synthèse + reconnaissance vocale (de-DE)
│   ├── revision.js                # répétition espacée (Leitner)
│   ├── telegram.js · sync.js      # Mini App + synchro CloudStorage
│   └── progress.js                # suivi de progression
├── data/
│   ├── lecons-a11.js · lecons-a12.js   # les 19 leçons
│   ├── comprehension.js                # exercices de compréhension (dialogue)
│   ├── production.js                   # production écrite & orale
│   ├── illustrations.js                # photos + intros par leçon
│   └── cours.js                        # assemblage + métadonnées
├── dist/allemand-a1.html          # version autonome (générée)
└── apercu/                        # captures d'écran
```

*Cours d'allemand intensif · Niveau A1 · Méthode communicative (CECRL).*
