---
title: "Alternative à FlutterFlow pour le web : Luna Park vs FlutterFlow"
description: "Vous cherchez une alternative à FlutterFlow pour une application web ? Comparez Luna Park et FlutterFlow : cibles web et mobile, logique, backend, export du code et prix."
---

# Luna Park vs FlutterFlow

Vous cherchez une **alternative à FlutterFlow** pour une application web d'abord, avec le backend intégré ? Luna Park génère une application Vue et Node.js standard avec une base PostgreSQL, et l'exporte aussi en applications desktop et mobiles.

FlutterFlow est un constructeur visuel pour **Flutter**, le framework de Google pour les applications mobiles. Luna Park repose sur la stack **web** (Vue et Node.js). Les deux génèrent du code exportable et produisent des applications natives : la vraie question est quelle plateforme passe en premier dans votre projet.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | FlutterFlow |
|---|---|---|
| **Cible principale** | Web, puis desktop et mobile | Mobile, puis web et desktop |
| **Interface** | Arborescence de composants, style basé sur le CSS, tokens de design | Arbre de widgets Flutter, thèmes |
| **Logique** | Graphes de visual scripting | Action flows, code Dart personnalisé |
| **Exécution** | Compilée en JavaScript et Vue | Compilée en Flutter (Dart) |
| **Extensibilité** | Paquets npm, fonctions TypeScript, plugins | Paquets Dart, widgets et actions personnalisés |
| **IA** | Sidekick, agents externes via MCP | Génération IA, DreamFlow |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | FlutterFlow |
|---|---|---|
| **Backend** | Intégré : routes, crons, PostgreSQL | Firebase ou Supabase, API, cloud functions |
| **Accès à la base** | Les routes interrogent PostgreSQL directement, sur le même serveur | Depuis l'application, via les API de Firebase ou Supabase |
| **Logique serveur** | Visuelle, même langage que l'interface | Cloud functions, écrites en code |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | FlutterFlow |
|---|---|---|
| **Export du code** | Code source lisible (offres payantes) | Code Flutter ([offres payantes](https://www.flutterflow.io/pricing), [docs](https://docs.flutterflow.io/flutterflow-cli/exporting)) |
| **Hébergement** | Où vous voulez | Stores d'applications, hébergement web FlutterFlow, ou au choix |
| **Modèle de prix** | Abonnement fixe | Sièges ([source](https://www.flutterflow.io/pricing)) |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Mobile (Android, iOS), web, desktop |

</DTable>

::: info
Cette comparaison reflète notre compréhension de FlutterFlow en octobre 2026. FlutterFlow évolue vite : consultez [flutterflow.io](https://flutterflow.io) pour ses fonctionnalités et prix actuels.
:::

## Les points forts de FlutterFlow

- **Mobile d'abord** : Flutter dessine lui-même chaque pixel, donc les applications mobiles ont le même rendu et le même comportement sur Android et iOS, avec des animations fluides.
- **Outils mobiles** : publication sur les stores, notifications push, fonctionnalités de l'appareil et données hors ligne sont bien couverts.
- **Intégration Firebase** : authentification, Firestore, stockage et cloud functions sont intégrés en profondeur.
- **Écosystème mature** : une grande communauté, de nombreux templates, et tout l'écosystème Flutter derrière.

## Les points forts de Luna Park

### Conçu pour le web

Les applications web Flutter [s'affichent dans un canvas](https://docs.flutter.dev/platform-integration/web/renderers) au lieu de produire des éléments HTML classiques. Cela affecte l'indexation par les moteurs de recherche, le poids du chargement initial, la sélection de texte et l'accessibilité. Luna Park génère une application Vue classique : du HTML et du CSS que les navigateurs, les moteurs de recherche et les technologies d'assistance comprennent nativement, et qui reste légère.

### Backend inclus

FlutterFlow s'appuie sur Firebase ou Supabase pour les données et la logique serveur, et la logique serveur complexe part dans des cloud functions écrites en code. Dans Luna Park, les [routes](../../fundamentals/data/routes), les [crons](../../fundamentals/data/cron) et la [base de données](../../fundamentals/data/database) PostgreSQL font partie du projet, construits avec le même visual scripting que l'interface.

### La base de données à côté de votre logique

Avec Firebase ou Supabase, l'application interroge les données via leurs API, à travers le réseau. Firestore est une base orientée documents : pas de jointures, et des agrégats limités. Supabase est du PostgreSQL, mais les requêtes complexes demandent des fonctions SQL écrites à la main.

Dans Luna Park, une [route](../../fundamentals/data/routes) tourne sur le même serveur que PostgreSQL et lui parle directement. Un seul appel depuis l'application peut exécuter plusieurs requêtes, avec jointures, agrégats et [transactions](../../fundamentals/data/database#nodes-specialises), et votre logique entre les deux, le tout construit visuellement.

### Une logique sans passer au code

Dans FlutterFlow, la logique qui dépasse les actions intégrées s'écrit souvent en code Dart personnalisé. Le [visual scripting](../../fundamentals/logic/visual-scripting/introduction) de Luna Park couvre les boucles, fonctions, données typées et appels asynchrones : la logique complexe peut rester visuelle. Vous pouvez toujours écrire des [fonctions TypeScript](../../fundamentals/logic/scripts#fonctions-en-code) si vous préférez.

### L'écosystème web

Luna Park utilise [npm](../../integrations/npm), la plus grande bibliothèque de code : les fonctions d'un paquet deviennent des nœuds, et les paquets de composants Vue ajoutent des composants.

## À savoir avant de changer

- **Les applications natives sont basées sur le web.** Les [applications mobiles](../../deployment/mobile) de Luna Park font tourner votre frontend web dans une coque native. Elles sont légères et conviennent à la plupart des applications métier, mais FlutterFlow est plus adapté aux applications mobiles très graphiques ou qui utilisent beaucoup de fonctionnalités de l'appareil.
- **Vous hébergez le backend.** Les routes, la base de données et les crons tournent sur votre propre serveur (voir [Auto-hébergement](../../deployment/deployment)).
- **Les builds natifs demandent l'application desktop** et une licence Edu ou Pro.

## Des concepts FlutterFlow à Luna Park

<DTable :widths="['50%', '50%']">

| FlutterFlow | Luna Park |
|---|---|
| Page | [Page](../../fundamentals/interface/components#pages) |
| Component | [Composant](../../fundamentals/interface/components) |
| Page state / component state | [Variable](../../fundamentals/logic/variables) |
| App state | [Store](../../fundamentals/logic/store) |
| Action flow | Graphe de logique |
| Custom function / custom action | [Fonction](../../fundamentals/logic/scripts) (graphe ou TypeScript) |
| Custom widget | Composant de [plugin](../../plugins/introduction) |
| Collection Firestore / table Supabase | Table de [base de données](../../fundamentals/data/database) |
| Cloud function | [Route](../../fundamentals/data/routes) |
| API call | Nœud `Fetch` |
| Thème | [Tokens de design](../../fundamentals/interface/styling#tokens-de-design) |

</DTable>

## Lequel choisir ?

**Choisissez FlutterFlow** si votre produit est d'abord une application mobile, avec une expérience native riche, et que le web est secondaire.

**Choisissez Luna Park** si votre produit est d'abord une application web (SaaS, tableau de bord, outil interne) que vous voulez aussi sur desktop et mobile, avec le backend construit dans le même outil.
