# 💎 Premium & paiements (Telegram Stars)

Ce module ajoute un **accès Premium payant** au cours et un **tableau de bord
propriétaire** qui affiche chaque paiement reçu, en temps réel.

- **Gratuit** : module **A1.1** (premier module).
- **Premium** : module **A1.2** (et modules suivants).
- **Paiement** : **Telegram Stars** (devise `XTR`) — aucun prestataire de
  paiement externe requis, c'est intégré à Telegram.
- **Tableau de bord** : route `#/tableau-de-bord`, visible uniquement par le
  propriétaire (`OWNER_TELEGRAM_ID`).

> ⚠️ **Sans configuration, rien ne change.** Tant que le backend n'est pas
> configuré, aucune leçon n'est verrouillée et aucune offre n'apparaît : le
> cours reste 100 % gratuit et fonctionne comme avant.

---

## 1. Architecture

```
cours-allemand/
├── api/                      ← fonctions serverless Vercel (Node 18+)
│   ├── _lib/telegram.js      ← validation initData + appels API Bot
│   ├── _lib/store.js         ← stockage (Vercel KV / Upstash, sinon mémoire)
│   ├── premium-status.js     ← GET  : état Premium de l'utilisateur
│   ├── create-invoice.js     ← POST : crée la facture Stars
│   ├── webhook.js            ← POST : reçoit paiements + pre_checkout
│   └── payments.js           ← GET  : liste des paiements (propriétaire)
├── js/premium.js             ← offre, achat (openInvoice), verrouillage
└── js/dashboard.js           ← rendu du tableau de bord
```

Le front authentifie chaque appel avec l'`initData` signé de la Mini App
(en-tête `X-Telegram-Init-Data`), vérifié côté serveur par HMAC-SHA256.

---

## 2. Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Obligatoire | Description |
|---|---|---|
| `BOT_TOKEN` | ✅ | Jeton du bot (BotFather). |
| `OWNER_TELEGRAM_ID` | ✅ | Votre ID Telegram numérique (voir §5). |
| `WEBHOOK_SECRET` | ✅ | Chaîne aléatoire ; protège le webhook. |
| `KV_REST_API_URL` | ✅ | Fournie par l'intégration Vercel KV / Upstash. |
| `KV_REST_API_TOKEN` | ✅ | Idem. |
| `PREMIUM_PRICE_STARS` | ⬜ | Prix en Stars (défaut : `150`). |
| `PREMIUM_TITLE` | ⬜ | Titre de l'offre (défaut fourni). |
| `PREMIUM_DESC` | ⬜ | Description de la facture. |

> Sans `KV_REST_API_URL`/`KV_REST_API_TOKEN`, le stockage retombe en mémoire
> **volatile** (les paiements sont perdus au redémarrage) : à n'utiliser qu'en
> test. Ajoutez un magasin **Vercel KV** (Marketplace → Upstash Redis) pour la
> persistance ; les deux variables sont alors injectées automatiquement.

---

## 3. Créer le bot et la Mini App

1. **BotFather** → `/newbot` → récupérez le `BOT_TOKEN`.
2. **BotFather** → `/newapp` (ou *Bot Settings → Menu Button*) → pointez la
   Mini App vers l'URL Vercel du cours (ex. `https://votre-app.vercel.app`).
3. Les **Telegram Stars** ne nécessitent aucun *provider token* : la devise
   `XTR` fonctionne directement.

---

## 4. Déploiement & webhook

1. Déployez sur Vercel (le dossier `cours-allemand/` est la racine du projet).
   Vercel détecte automatiquement le dossier `api/` comme fonctions serverless.
2. Renseignez les variables d'environnement (§2), puis redéployez.
3. Enregistrez le webhook du bot (remplacez les valeurs) :

```bash
curl "https://api.telegram.org/bot<BOT_TOKEN>/setWebhook" \
  -d "url=https://votre-app.vercel.app/api/webhook" \
  -d "secret_token=<WEBHOOK_SECRET>" \
  -d 'allowed_updates=["message","pre_checkout_query"]'
```

Vérifiez : `https://api.telegram.org/bot<BOT_TOKEN>/getWebhookInfo`.

---

## 5. Trouver votre `OWNER_TELEGRAM_ID`

Écrivez à [@userinfobot](https://t.me/userinfobot) sur Telegram : il répond
votre identifiant numérique. C'est lui qui débloque le tableau de bord.

---

## 6. Parcours utilisateur

1. L'utilisateur ouvre le cours dans Telegram → l'offre Premium s'affiche sur
   l'accueil ; le module A1.2 montre un cadenas 🔒.
2. Il appuie sur **« Débloquer pour ⭐ N »** → `create-invoice` génère une
   facture Stars → `openInvoice` ouvre le paiement natif.
3. Après paiement, Telegram envoie `successful_payment` au **webhook** :
   le paiement est **enregistré** et l'accès Premium **accordé**.
4. L'app réinterroge `premium-status` → le contenu se déverrouille.
5. Côté **propriétaire**, `#/tableau-de-bord` liste tous les paiements
   (date, client, produit, montant) avec les totaux.

---

## 7. Remboursements (optionnel)

Un paiement en Stars peut être remboursé via l'API Bot
`refundStarPayment(user_id, telegram_payment_charge_id)`. Le `chargeId` est
stocké avec chaque paiement (visible dans les données du tableau de bord).
