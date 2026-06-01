#!/usr/bin/env bash
# Publie ce dossier dans le dépôt GitHub cours-allemand.
# Pré-requis : être authentifié sur GitHub (gh auth login, ou gestionnaire d'identifiants git).
set -e
REMOTE="https://github.com/Williamszika/cours-allemand.git"
git init -b main 2>/dev/null || { git init; git checkout -B main; }
git add -A
git commit -m "Cours d'allemand intensif A1 — application interactive (Telegram Mini App + Vercel)"
git remote add origin "$REMOTE" 2>/dev/null || git remote set-url origin "$REMOTE"
echo "→ Envoi vers $REMOTE ..."
git push -u origin main || {
  echo
  echo "⚠️  Si le dépôt contient déjà un commit (README créé à l'init), relancez :"
  echo "    git push -u --force origin main"
}
