---
description: "Hébergez le code exporté d'une application Luna Park sur votre propre serveur, avec Node.js et PostgreSQL."
---

# Auto-hébergement

Le code exporté d'une application Luna Park (voir [Compilation](./compilation)) est un projet Node.js standard. Vous pouvez le lancer sur n'importe quel serveur : un VPS, un serveur dédié ou une plateforme de conteneurs.

## Ce qu'il faut

- **Node.js** 24 ou plus, et **pnpm**.
- Une base de données **PostgreSQL**. Les tables sont créées automatiquement au premier lancement, avec les lignes saisies dans l'éditeur.

## Structure du projet

| Dossier | Contenu |
|---|---|
| `frontend` | L'application Vue (Vite). |
| `backend` | Le serveur d'API (Fastify) : vos routes, crons et accès à la base. Il sert aussi le frontend. |
| `utils` | Un outil interactif pour configurer et lancer le serveur. |
| `.env` | La configuration du serveur. |

## Configuration

Le fichier `.env` à la racine du projet contient la configuration :

| Variable | Défaut | Description |
|---|---|---|
| `DATABASE_URL` | | Chaîne de connexion PostgreSQL (`postgresql://user:password@host:5432/database`). Obligatoire. |
| `HOST` | `127.0.0.1` | Adresse d'écoute du serveur. Utilisez `0.0.0.0` pour accepter les connexions extérieures. |
| `PORT` | `3080` | Port du serveur. |
| `PREFIX` | `/api` | Préfixe des routes. |
| `STATIC` | `frontend/dist` | Dossier du frontend construit, servi par le backend. Laissez vide pour héberger le frontend ailleurs. |
| `COOKIE_SECRET` | généré | Secret utilisé pour signer les cookies. Gardez-le privé. |
| `PROXY` | | Proxy optionnel pour les requêtes sortantes. |

Les plugins peuvent ajouter leurs propres variables (secrets OAuth ou SMTP, par exemple).

::: warning HTTPS
Les cookies sont `secure` : servez votre application en HTTPS, sinon les navigateurs ne les conserveront pas (les sessions, par exemple).
:::

## Lancer avec l'outil utils

Depuis le dossier du projet :

```bash
pnpm install
pnpm run utils
```

Le menu permet de :

- configurer le serveur (**Configure server**) : port, URL de la base de données et URL du backend utilisée par le frontend ;
- lancer le serveur (**Launch server**), ou le serveur de développement (**Launch dev server (watch mode)**) ;
- lancer un serveur permanent avec PM2 (**Launch permanent server (using PM2)**), qui le maintient en marche et le redémarre en cas d'échec, et l'arrêter (**Stop permanent server**).

Sous Windows, `launch-windows.bat` installe les prérequis et ouvre ce menu.

## Lancer manuellement

```bash
pnpm install
pnpm build
pnpm start
```

Le serveur affiche son adresse au démarrage. `GET /api/health` répond `{ "status": "ok" }` quand il tourne.

## Lancer avec Docker

L'export contient un fichier `run_basic.dockerfile` qui construit l'application et la sert avec nginx sur le port 80 :

```bash
docker build -f run_basic.dockerfile -t mon-app .
docker run -p 80:80 --env-file .env mon-app
```

## Mettre à jour

Téléchargez ou générez le nouveau code, remplacez les fichiers (gardez votre `.env`), puis reconstruisez et redémarrez le serveur.
