---
description: "Découvrez les types de fichiers d'un projet Luna Park et à quoi sert chacun."
---

# Fichiers du projet

Un projet Luna Park est une arborescence de fichiers affichée dans l'**Explorer**. Faites un clic droit dans l'Explorer et choisissez **New** pour en créer un.

## Types de fichiers

| Type | Rôle | En savoir plus |
|---|---|---|
| Folder | Regroupe des fichiers. Les dossiers ne changent pas le fonctionnement de l'application. | |
| Media | Une image, une vidéo ou un autre fichier importé. | |
| Component | Un morceau d'interface réutilisable, avec sa propre logique. | [Composants](./interface/components) |
| Page | Un composant accessible via une URL. | [Composants](./interface/components) |
| Store | Un état global partagé par tous les composants. | [Store](./logic/store) |
| Text | Du texte riche écrit dans le markdown de Luna Park, affiché avec l'élément **Custom text**. | |
| Route | Un endpoint HTTP du backend. | [Routes](./data/routes) |
| Database | Une table et ses lignes. | [Base de données](./data/database) |
| Cron | Une tâche backend exécutée selon un planning. | [Cron](./data/cron) |
| Configuration | Des valeurs statiques (URL, réglages, clés) pour le frontend, le backend ou les deux. | [Scripts et fonctions](./logic/scripts#fichiers-de-configuration) |
| Script | Des fonctions logiques réutilisables, sans interface. | [Scripts et fonctions](./logic/scripts) |
| Type | Des types de données réutilisables dans tout le projet. | [Scripts et fonctions](./logic/scripts#fichiers-de-types) |

Actions de l'Explorer : **Cut** (`Ctrl + X`), **Copy** (`Ctrl + C`), **Paste** (`Ctrl + V`), **Rename** (`F2`) et **Delete** (`Suppr`). Double-cliquez sur un fichier pour l'ouvrir.

## Scopes

Les fichiers de logique (scripts, configurations) ont un **Scope** dans l'Inspector. Il décide où le code s'exécute :

| Scope | S'exécute dans | Peut utiliser |
|---|---|---|
| Frontend | Le navigateur | Les fichiers Frontend et Shared |
| Backend | Le serveur | Les fichiers Backend et Shared |
| Shared | Les deux | Les fichiers Shared |
| Desktop | Les applications desktop natives | Les fichiers Desktop, Frontend et Shared |

Les routes, crons et bases de données sont toujours backend. Les pages, composants et stores sont toujours frontend.

::: warning Secrets
Ne mettez jamais de secrets (clés d'API, mots de passe) dans un fichier Frontend ou Shared : ils se retrouvent dans le code envoyé au navigateur. Utilisez plutôt une configuration Backend.
:::

## Format sur disque

Dans l'[application desktop](../getting-started/desktop-app), un projet est un dossier. Le fichier `luna.config.json` est à la racine et les sources sont dans `src/`, avec un fichier par élément de l'Explorer :

| Fichier | Nom sur le disque |
|---|---|
| Page ou composant | `<nom>.lpml` |
| Route | `<nom>.route.lpl` |
| Script | `<nom>.lpl` |
| Store | `<nom>.lps` |
| Database | `<nom>.db.json` |
| Configuration | `<nom>.json` |
| Text | `<nom>.md` |
| Cron | `<nom>.cron.lpl` |
| Type | `<nom>.type.json` |
| Media | Le fichier binaire, par ex. `photo.beef1234.jpg` |

Les design tokens sont stockés dans `src/.tokens/` et les réglages des plugins dans `src/.plugins/`. Ces formats texte fonctionnent bien avec Git et avec les [agents IA](../integrations/ai-agents).
