# 🚀 Déployer sur Vercel

Le cours est un site **100 % statique** (HTML/CSS/JS, sans build ni serveur). Ce
dépôt contient le cours **à la racine**, donc le déploiement est immédiat — pas de
« Root Directory » à régler. Le HTTPS de Vercel active aussi le **micro** (production
orale) et le **SDK Telegram**.

---

## Méthode 1 — Tableau de bord Vercel (recommandé)

1. Sur https://vercel.com → **Add New… → Project**, importez ce dépôt.
2. Configuration :
   - **Framework Preset** → **Other**
   - **Build Command** → laissez **vide**
   - **Output Directory** → laissez **vide**
   - **Root Directory** → laissez la **racine** (par défaut)
3. **Deploy**.

Vous obtenez une URL du type `https://cours-allemand.vercel.app`. Le fichier
`vercel.json` fournit déjà les bons en-têtes (cache des assets, sécurité). La version
« 1 seul fichier » reste accessible à `…/dist/allemand-a1.html`.

---

## Méthode 2 — Vercel CLI

```bash
npm i -g vercel
vercel          # déploiement de prévisualisation
vercel --prod   # déploiement en production
```

---

## Redéploiement automatique

Chaque **push** sur la branche connectée redéclenche un déploiement. Si vous modifiez
le contenu, régénérez la version autonome avant de pousser :

```bash
node build.js   # met à jour dist/allemand-a1.html
git commit -am "maj" && git push
```

> Pour publier le cours comme **Telegram Mini App**, voir **[TELEGRAM.md](TELEGRAM.md)**.
