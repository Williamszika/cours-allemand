# Supports publicitaires — Sprachakademie

Codes QR et affiches pour promouvoir l'application **https://sprachakademie.app**
(le scan ouvre directement le cours dans le navigateur / la PWA installable).

## Fichiers

| Fichier | Usage |
|---|---|
| `qr-sprachakademie.svg` | **QR seul, vectoriel** — à insérer dans tes propres maquettes, imprimable à n'importe quelle taille sans perte. |
| `qr-sprachakademie.png` | QR seul, haute résolution (PNG) — pour un collage rapide. |
| `affiche-sprachakademie-fr.pdf` | **Affiche A4 — français**, prête à imprimer (300 dpi). |
| `affiche-sprachakademie-fr.png` | Même affiche FR en image (réseaux sociaux, aperçu). |
| `affiche-sprachakademie-fr.svg` | Affiche FR vectorielle (modifiable, agrandissable A3/A2…). |
| `affiche-sprachakademie-de.pdf` | **Affiche A4 — allemand (niveau A2)**, prête à imprimer. |
| `affiche-sprachakademie-de.png` | Affiche DE en image. |
| `affiche-sprachakademie-de.svg` | Affiche DE vectorielle. |

## Le QR en bref
- Cible : `https://sprachakademie.app`
- Version 3 (29×29 modules), correction d'erreur **niveau Q (~25 %)** — robuste aux petites salissures et lisible de loin.
- Décodage vérifié (OpenCV) sur le QR seul **et** sur le QR intégré aux affiches.

## Conseils d'impression
- Pour une **grande affiche** (A3, A2, vitrine), pars du **`.svg`** (vectoriel, net à toute taille).
- Pour un **flyer / A4**, le **`.pdf`** suffit.
- Garde une **zone blanche** autour du QR (déjà incluse) et une taille de QR **≥ 2 cm** pour un scan fiable.
- Le texte allemand de l'affiche DE est volontairement de **niveau A2** (immersion accessible aux débutants).

## Régénérer
Les supports sont générés par un script Python (segno + Pillow). Le QR pointe vers
l'URL ci-dessus ; pour changer le texte/les couleurs, modifier les dictionnaires `TXT`
et relancer le script de génération.
