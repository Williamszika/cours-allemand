# 🎙️ Voix naturelles ElevenLabs — proxy derrière Caddy

`server/tts-proxy.js` est un mini-service Node (sans dépendance) qui appelle
ElevenLabs. Caddy renvoie `/api/*` vers ce service. La clé reste **sur le
serveur** (variable d'environnement), jamais dans le dépôt ni dans l'app.

L'app appelle déjà `/api/tts?text=...` quand la case **« 🌟 Voix naturelles »**
(page langue) est cochée, avec repli automatique sur la voix de l'appareil.

---

## 0) Pré-requis
- Accès **SSH** au serveur qui héberge `sprachakademie.app` (Caddy).
- **Node 14+** : `node -v` (sinon : `sudo apt install nodejs`).
- Connaître le **dossier du site** (là où le dépôt est déployé), noté `SITE_DIR`
  ci-dessous (ex. `/var/www/sprachakademie`).

## 1) Service systemd (lance le proxy en permanence)
Crée `/etc/systemd/system/tts-proxy.service` :

```ini
[Unit]
Description=ElevenLabs TTS proxy (cours d'allemand)
After=network.target

[Service]
Environment=ELEVENLABS_API_KEY=COLLE_TA_NOUVELLE_CLE_ICI
Environment=ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
Environment=TTS_PORT=3001
ExecStart=/usr/bin/node SITE_DIR/server/tts-proxy.js
Restart=always
RestartSec=3
User=www-data

[Install]
WantedBy=multi-user.target
```
> Remplace `COLLE_TA_NOUVELLE_CLE_ICI`, `SITE_DIR`, et le chemin de `node`
> (`which node`). `ELEVENLABS_VOICE_ID` = l'ID d'une voix de ton compte
> ElevenLabs (onglet Voices) — sinon laisse la valeur par défaut.

Active-le :
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now tts-proxy
sudo systemctl status tts-proxy      # doit afficher "active (running)" et "clé OK"
curl "http://127.0.0.1:3001/tts?text=Hallo" -o /tmp/test.mp3 && file /tmp/test.mp3   # doit dire "Audio"
```

## 2) Caddy → renvoie /api vers le service
Dans le bloc de ton site (Caddyfile), AVANT le `file_server`, ajoute :

```caddy
sprachakademie.app {
    # ... ta config existante (root, encode, etc.) ...

    # Voix naturelles ElevenLabs
    reverse_proxy /api/* 127.0.0.1:3001

    file_server
}
```
Recharge Caddy :
```bash
sudo systemctl reload caddy      # ou : caddy reload --config /etc/caddy/Caddyfile
```

## 3) Vérifier
```bash
curl -s -o /tmp/t.mp3 -w "%{http_code} %{content_type}\n" \
  -H "Referer: https://sprachakademie.app/" \
  "https://sprachakademie.app/api/tts?text=Hallo%20Welt"
```
Attendu : `200 audio/mpeg` (et `/tmp/t.mp3` est un fichier audio).

## 4) Activer dans l'app
Menu → 🌐 langue → **« 🔊 Voix allemande »** → coche **« 🌟 Voix naturelles
en ligne (ElevenLabs) »**. Tous les audios (mots, « tout écouter », dialogues,
dictée) passent en voix ElevenLabs ; repli automatique sur la voix de
l'appareil si le service est coupé ou hors-ligne.

---

### Notes
- **Sécurité** : la clé n'est que dans le service systemd (droits root). Mets
  une **nouvelle** clé (révoque celle déjà partagée).
- **Coût** : ElevenLabs facture aux caractères. L'app **met chaque audio en
  cache** (chaque mot/phrase = 1 seul appel). Le proxy limite aussi à 80
  requêtes/min par IP. Surveille ton quota ElevenLabs.
- **Mise à jour** : à chaque déploiement du dépôt, le fichier est mis à jour ;
  relance le service si besoin : `sudo systemctl restart tts-proxy`.
