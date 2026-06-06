# 🇩🇪 Allemand intensif — A1 → C2

Application web d'apprentissage de l'allemand, **interactive et auto-corrigée**,
couvrant **tout le parcours CECRL, de A1 à C2**. Méthode communicative inspirée
des manuels allemands (*Menschen, Schritte international, Netzwerk*), guidée par
le coach **« Zika »**. Les niveaux se débloquent l'un après l'autre grâce aux
**examens**. Prête comme **Telegram Mini App** et déployable sur **Vercel**.

> *Von Null bis C2 — De zéro à la maîtrise.*

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

- **6 niveaux · 12 modules** (A1.1 → C2.2) — un parcours unique et progressif.
- **219 leçons** (cours thématiques + fiches de grammaire interclassées) :

  | Niveau | A1 | A2 | B1 | B2 | C1 | C2 |
  |:------:|:--:|:--:|:--:|:--:|:--:|:--:|
  | Leçons | 31 | 36 | 50 | 30 | 33 | 39 |

- **1 263 mots** de vocabulaire avec **prononciation audio** (de-DE), versés dans
  la **révision espacée**.
- **1 389 exercices** auto-corrigés, organisés en plusieurs temps :
  **📖 Compréhension** (dialogue) → **🎧 Écoute** → **🎯 Grammaire approfondie** →
  **✍️ Production** écrite & orale.
- **Parcours séquentiel** : chaque leçon se **déverrouille** quand la précédente
  est validée (seuil **70 %**) ; seule la première est ouverte au départ.
- **🎓 9 examens-verrous** entre les niveaux (A1, A2, A1+A2, B1, B2, B1+B2, C1, C2,
  C1+C2), seuil de réussite **60 %**, corrections détaillées.
- **🧭 Test de placement** (*Einstufungstest*) pour démarrer au bon niveau.
- **🔁 Révision espacée** (système de Leitner) et **suivi de progression**.

### 🗣️ Tuteur IA « Zika »
Un **tuteur conversationnel** (texte **+ voix**) qui s'adapte à ton niveau, corrige
tes fautes, propose des **sujets de prise de parole** par niveau et des **jeux de
rôle** (parcours général ou Pflege).

### 🩺 Deutsch für die Pflege
Parcours **spécialisé pour les métiers du soin** (dès l'A2) : soins infirmiers,
hôpital, maison de retraite, soins à domicile.

### 🌍 Multilingue & immersion
Interface et explications en **14 langues** traduites à la main (français, anglais,
allemand, turc, arabe, russe, ukrainien, persan, espagnol, italien, portugais,
polonais, roumain, néerlandais) — plus d'autres via traduction automatique.
**Mode immersion** : les niveaux A1-A2 sont expliqués dans ta langue, puis **dès
B1 tout se passe en allemand simple**.

### Grammaire couverte
De l'**A1** (présent, articles der/die/das, accusatif, négation nicht/kein,
prépositions…) jusqu'au **C2** (idiomes, particules modales, registres, faux-amis,
Konjunktiv I…), interclassée avec les leçons thématiques.

---

## ▶️ Ouvrir / tester

Aucune installation, aucun build nécessaire.

- **Version multi-fichiers** : ouvrez `index.html`.
- **Version « 1 seul fichier »** : ouvrez `dist/allemand-a1.html` (tout est inclus —
  ouvrable d'un double-clic, même hors-ligne). Régénération : `node build.js` (le
  bundle reprend automatiquement **tout ce que charge `index.html`**).

> 🔊 **Audio** : synthèse vocale du navigateur (de-DE). 🎤 **Production orale** :
> reconnaissance vocale (Chrome/Edge) ou écoute-modèle + auto-évaluation.
> 🖼️ Les **photos** se chargent en ligne (le HTTPS de Vercel/Telegram est requis).

---

## 🌐 Déploiement (Vercel)
Site essentiellement **statique**, cours **à la racine**, avec une fonction
serverless `api/tts.js` (proxy de synthèse vocale) → voir **[DEPLOY.md](DEPLOY.md)**.

## 🤖 Telegram Mini App
SDK intégré, **thème clair/sombre synchronisé**, **bouton principal** et **bouton
retour** natifs, **retour haptique**, et **synchronisation de la progression entre
appareils** (CloudStorage). Le **tuteur** et la **synthèse vocale** s'appuient sur
un petit backend (`server/tts-proxy.js`). Mise en place via @BotFather →
**[TELEGRAM.md](TELEGRAM.md)**.

---

## 🗂️ Architecture

```
.
├── index.html · build.js · vercel.json · sw.js · manifest.webmanifest
├── admin.html                      # tableau de bord (suivi des apprenants)
├── tuteur.html                     # tuteur IA conversationnel (chat + voix)
├── css/styles.css                  # design responsive + thème sombre Telegram
├── js/
│   ├── app.js                      # routage, parcours séquentiel, examens, menu
│   ├── exercises.js                # types d'exercices (+ mode examen)
│   ├── i18n.js                     # multilingue (14 langues curées + auto)
│   ├── speech.js                   # synthèse + reconnaissance vocale (de-DE)
│   ├── revision.js                 # répétition espacée (Leitner)
│   ├── adaptatif.js · objectif.js  # moteur pédagogique adaptatif / objectifs
│   ├── progress.js · sync.js       # progression + synchro CloudStorage
│   ├── telegram.js                 # intégration Mini App
│   └── legal.js                    # pages légales (Impressum/Datenschutz/AGB/Widerruf)
├── data/
│   ├── lecons-a11.js … lecons-c22.js   # 12 modules de leçons (A1.1 → C2.2)
│   ├── grammaire*.js                   # points de grammaire par niveau
│   ├── comprehension.js · production.js · ecoute.js · dictees.js
│   ├── vocplus.js · c2diff.js · competences.js
│   ├── placement.js                    # test de placement (Einstufungstest)
│   ├── pflege.js                       # parcours « Deutsch für die Pflege »
│   ├── sujets-parole.js                # sujets de prise de parole du tuteur
│   ├── illustrations.js                # photos + intros par leçon
│   └── cours.js                        # assemblage des niveaux + stats
├── api/tts.js                      # fonction serverless (proxy TTS)
├── server/tts-proxy.js             # backend tuteur + TTS + utilisateurs
├── dist/allemand-a1.html           # version autonome (générée par build.js)
└── apercu/                         # captures d'écran
```

*Cours d'allemand intensif · A1 → C2 · Méthode communicative (CECRL), tuteur IA et révision espacée.*
