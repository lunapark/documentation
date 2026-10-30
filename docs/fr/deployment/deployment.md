---
description: "Hébergez le code exporté d'une application Luna Park sur votre propre serveur, avec Node.js et PostgreSQL."
---

# Auto-hébergement

Le code exporté d'une application Luna Park (voir [Compilation](./compilation)) est un projet Node.js standard. Vous pouvez le lancer sur n'importe quel serveur : un VPS, un serveur dédié ou une plateforme de conteneurs.

## Ce qu'il faut

- **Node.js** 24 ou plus, et **pnpm**.
- Une base de données **PostgreSQL**. Les tables sont créées et synchronisées automatiquement à chaque démarrage (voir [Schéma de la base](#schema-de-la-base)), avec les lignes saisies dans l'éditeur comme données initiales.

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
| `UPLOAD_MAX_SIZE` | `10` | Taille maximale d'un fichier envoyé, en Mo. |
| `UPLOAD_MAX_FILES` | `10` | Nombre maximal de fichiers par requête. |
| `DATABASE_BACKUP` | `true` | Mettez `false` pour désactiver les [sauvegardes automatiques](#sauvegardes). |

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

Téléchargez ou générez le nouveau code, remplacez les fichiers (gardez votre `.env` et le dossier `.backup`), puis reconstruisez et redémarrez le serveur.

## Schéma de la base

À chaque démarrage, le serveur compare la base avec les tables du projet et la met à jour :

- les nouvelles tables et colonnes sont créées, les tables et colonnes renommées sont renommées (leurs données sont conservées) ;
- **les tables et colonnes retirées du projet sont supprimées, avec leurs données** ;
- les colonnes dont le type a changé sont converties : les valeurs qui ne peuvent pas être converties sont vidées ;
- les contraintes et index sont ajoutés ou retirés. Quand **Required** est activé, les valeurs vides reçoivent la valeur par défaut du type. Une contrainte qui ne peut pas être appliquée est signalée dans les logs, et le serveur continue de tourner.

Les lignes saisies dans l'éditeur ne sont insérées qu'à la création d'une table. Les tables existantes gardent leurs données.

::: warning
Retirer un fichier Database ou une colonne du projet supprime ses données au prochain démarrage. Une sauvegarde est faite juste avant (voir ci-dessous).
:::

## Sauvegardes

Le serveur sauvegarde la base dans le dossier `.backup`, à côté de `.env` :

- à chaque démarrage, avant de mettre à jour le schéma ;
- chaque jour, tant que le serveur tourne.

Chaque sauvegarde est un fichier SQL nommé d'après sa date et son heure (UTC). Le serveur garde les sauvegardes des 7 derniers jours qui en ont, et au plus 5 par jour.

Mettez `DATABASE_BACKUP=false` pour désactiver les sauvegardes, par exemple quand votre hébergeur sauvegarde déjà la base. Si une sauvegarde échoue au démarrage, le serveur ne démarre pas.

Avec Docker, le dossier `.backup` est dans le conteneur : montez un volume sur `/app/.backup` pour garder les sauvegardes quand le conteneur est remplacé.

Pour restaurer une sauvegarde, exécutez-la sur une base vide, par exemple avec `psql "$DATABASE_URL" -f .backup/<fichier>.sql`.
