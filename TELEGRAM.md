# 🤖 Mettre le cours en Telegram Mini App

Le cours est déjà préparé comme **Telegram Mini App** (Web App) :

- **SDK** `telegram-web-app.js` intégré (chargé uniquement dans Telegram).
- **Thème synchronisé** : l'interface bascule automatiquement en **clair/sombre**
  selon le thème Telegram de l'utilisateur, et la couleur d'en-tête s'accorde.
- **Bouton principal (MainButton)** natif, contextuel :
  - Accueil → « ▶ Commencer / Continuer la leçon »
  - Leçon → « Leçon suivante → » (ou « 🎉 Terminer le cours »)
  - Test → « Terminer le test » puis « Retour à l'aperçu »
- **Bouton retour (BackButton)** natif dans les leçons, la révision et les tests.
- **Retour haptique** (vibrations) sur les bonnes/mauvaises réponses.
- **Confirmation de fermeture** activée pendant un test (évite de perdre ses réponses).
- **Synchronisation multi-appareils** : la progression (leçons, scores de tests,
  révision espacée) est enregistrée dans **Telegram CloudStorage** et **fusionnée**
  (union non destructive) entre tous vos appareils.

> Hors de Telegram, tout cela est **sans effet** : la page reste un site web normal.

---

## Étape 1 — Mettre le cours en ligne (HTTPS obligatoire)

Telegram exige une URL **HTTPS**. Déployez d'abord sur Vercel (voir
[DEPLOY.md](DEPLOY.md)). Vous obtiendrez une URL du type :

```
https://allemand-a1.vercel.app
```

## Étape 2 — Créer le bot

1. Dans Telegram, ouvrez **[@BotFather](https://t.me/BotFather)**.
2. Envoyez `/newbot`, choisissez un **nom** et un **username** (finissant par `bot`).
3. BotFather vous donne un **token** (gardez-le ; utile seulement si vous ajoutez
   un backend plus tard — ici l'app fonctionne sans serveur).

## Étape 3 — Déclarer la Mini App

**Option A — Lien direct de Mini App** (recommandé)
1. Envoyez `/newapp` à BotFather, sélectionnez votre bot.
2. Renseignez **titre**, **description**, **image** (640×360), puis collez l'**URL HTTPS**
   du cours et choisissez un **short name** (ex. `cours`).
3. Vous obtenez un lien partageable : `https://t.me/votre_bot/cours`.

**Option B — Bouton de menu permanent**
1. `/mybots` → votre bot → **Bot Settings** → **Menu Button**.
2. Choisissez **Edit menu button URL**, collez l'URL HTTPS, donnez un libellé
   (ex. « 🇩🇪 Cours d'allemand »).
3. Le bouton apparaît en bas de la conversation avec le bot et ouvre le cours.

## Étape 4 — Tester

Ouvrez le lien `t.me/votre_bot/cours` (ou le bouton de menu) **dans Telegram**
(mobile ou desktop). Le cours s'ouvre en plein écran, au thème de votre Telegram,
avec le bouton principal en bas. 🎉

---

## Notes

- **Progression** : synchronisée via `Telegram.WebApp.CloudStorage` (partagée entre
  vos appareils Telegram), avec une **fusion non destructive** (une leçon terminée
  ou un mot appris sur un appareil le reste partout ; les scores prennent le maximum).
  Repli automatique sur le localStorage hors de Telegram. Les données sont découpées
  en morceaux pour respecter la limite de ~4 Ko par entrée CloudStorage.
- **Sécurité / `initData`** : utile seulement si vous ajoutez un backend
  (authentifier l'utilisateur Telegram). L'app actuelle est 100 % côté client,
  donc rien à valider côté serveur.
- **Mise à jour** : après toute modification, régénérez la version autonome puis
  redéployez :
  ```bash
  node build.js   # met à jour dist/allemand-a1.html
  git add -A && git commit -m "maj" && git push   # Vercel redéploie tout seul
  ```
