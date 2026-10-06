---
description: "Comparez Luna Park et WeWeb : frontend et backend, logique, export du code, hébergement, modèle de prix et applications natives."
---

# Luna Park vs WeWeb

WeWeb a commencé comme un constructeur de frontend qui se branche sur des backends comme Xano ou Supabase, et a ajouté son propre backend en 2026. Comme Luna Park, il génère du code **Vue.js** exportable. Les différences tiennent à la façon de construire la logique, à la place du backend, et à l'endroit où tourne votre application.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | WeWeb |
|---|---|---|
| **Interface** | Arborescence de composants, style basé sur le CSS, tokens de design | Canvas visuel, fonctionnalités de design riches |
| **Logique** | Graphes de visual scripting, front et back | Workflows (liste d'actions) et formules |
| **Exécution** | Compilée en JavaScript et Vue | Application Vue qui exécute le moteur de workflows de WeWeb |
| **Extensibilité** | Paquets npm, fonctions TypeScript, plugins | Composants codés, JavaScript personnalisé |
| **IA** | Sidekick, agents externes via MCP | WeWeb AI (pages, données, workflows, tests) |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | WeWeb |
|---|---|---|
| **Backend** | Intégré : routes, crons, PostgreSQL | Backend de WeWeb, ou Xano, Supabase, Airtable, n'importe quelle API |
| **Frontend et backend** | Un projet, un seul langage de logique | Un ou deux outils, selon votre configuration |
| **Accès à la base** | Les routes interrogent PostgreSQL directement, sur le même serveur | Via l'API HTTP du backend |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | WeWeb |
|---|---|---|
| **Export du code** | Application complète : frontend et backend | Application monopage du frontend (offres payantes) |
| **Hébergement** | Où vous voulez | WeWeb Cloud, ou frontend auto-hébergé |
| **Modèle de prix** | Abonnement fixe | Sièges + offre d'hébergement par application sur WeWeb Cloud |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web, PWA |

</DTable>

::: info
Cette comparaison reflète notre compréhension de WeWeb en octobre 2026. WeWeb évolue vite : consultez [weweb.io](https://www.weweb.io) pour ses fonctionnalités et prix actuels.
:::

## Les points forts de WeWeb

- **Outils de design** : l'éditeur de WeWeb est soigné, et créer une interface réussie est rapide.
- **Choix du backend** : les intégrations natives avec Xano, Supabase, Airtable et les API REST en font un choix naturel si vous avez déjà un backend, ou si votre équipe utilise un outil backend dédié.
- **Hébergement géré** : WeWeb Cloud publie votre application en un clic, sans serveur à gérer.
- **IA** : WeWeb AI génère des pages, des liaisons de données et des workflows, et peut tester votre application.

## Les points forts de Luna Park

### Toute la stack au même endroit

Dans Luna Park, l'interface, les [routes](../../fundamentals/data/routes), la [base de données](../../fundamentals/data/database), les [crons](../../fundamentals/data/cron) et l'[authentification](../../fundamentals/data/auth) vivent dans le même projet. Les mêmes [types](../../fundamentals/logic/scripts#fichiers-de-types) décrivent vos données des deux côtés, et l'interface appelle une route comme une fonction. Pas de second outil à apprendre, connecter et payer.

### Un seul langage de logique, front et back

Les workflows sont faits d'actions prédéfinies, complétées par des formules et du JavaScript personnalisé quand elles ne suffisent pas. Le [visual scripting](../../fundamentals/logic/visual-scripting/introduction) de Luna Park est un modèle de programmation complet : boucles, fonctions, données typées, appels asynchrones, chaque [paquet npm](../../integrations/npm) sous forme de nœuds. Vous l'utilisez partout : composants, stores, routes et crons.

### La base de données à côté de votre logique

Quand WeWeb est connecté à Supabase ou Xano, votre application accède aux données via une API HTTP : chaque requête est un aller-retour réseau, et les requêtes complexes doivent être écrites dans l'outil backend, sous forme de fonctions SQL ou d'endpoints.

Dans Luna Park, une [route](../../fundamentals/data/routes) tourne sur le même serveur que PostgreSQL et lui parle directement. Un seul appel depuis l'interface peut exécuter plusieurs requêtes, avec jointures, agrégats et [transactions](../../fundamentals/data/database#nodes-specialises), et votre logique entre les deux. Moins d'allers-retours, c'est des pages plus rapides, et toute la requête reste visuelle.

### Du vrai code, pas un moteur d'exécution

WeWeb exporte une application Vue, mais vos workflows et formules sont stockés sous forme de données et exécutés par le moteur de WeWeb, livré avec votre application. Dans Luna Park, la logique elle-même est compilée : chaque nœud devient une ligne de JavaScript. Rien n'interprète votre application à l'exécution : elle charge moins de code et tourne à la vitesse d'un code écrit à la main.

### Exporter l'application complète

L'export de code de WeWeb est l'application monopage du frontend. L'[export](../../deployment/compilation) de Luna Park est l'application complète, backend compris, prête à être [auto-hébergée](../../deployment/deployment) avec Node.js et PostgreSQL, ou lancée avec Docker.

### Un coût qui ne grandit pas avec vos applications

Sur WeWeb Cloud, chaque application publiée demande sa propre offre d'hébergement en plus des sièges de l'éditeur. Avec Luna Park, l'abonnement couvre l'éditeur, et vous hébergez autant d'applications que vous voulez sur vos propres serveurs.

### Toutes les plateformes depuis le même projet

Comme WeWeb, Luna Park exporte une application web monopage et une PWA. Avec l'[application desktop](../desktop-app), le même projet devient aussi une application native pour Windows, macOS, Linux ([desktop](../../deployment/desktop)), Android et iOS ([mobile](../../deployment/mobile)).

## À savoir avant de changer

- **Vous hébergez le backend.** Luna Park peut déployer votre frontend pour le tester, mais le backend tourne sur votre propre serveur (voir [Auto-hébergement](../../deployment/deployment)).
- **Moins de design prêt à l'emploi.** WeWeb propose plus de templates et de fonctionnalités de design d'origine. Dans Luna Park, le design repose sur les [tokens de design](../../fundamentals/interface/styling#tokens-de-design) et des bibliothèques d'interface comme [Ferris Wheel ou Nuxt UI](../../integrations/plugins#plugins-officiels).
- **Le visual scripting prend un peu plus de temps à apprendre** que les workflows, et devient rentable sur la logique complexe.

## Des concepts WeWeb à Luna Park

<DTable :widths="['50%', '50%']">

| WeWeb | Luna Park |
|---|---|
| Page | [Page](../../fundamentals/interface/components#pages) |
| Composant | [Composant](../../fundamentals/interface/components) |
| Variable | [Variable](../../fundamentals/logic/variables), ou [Store](../../fundamentals/logic/store) pour l'état global |
| Formule | [Variable calculée](../../fundamentals/logic/variables#variables-calculees), ou nœuds d'opération |
| Workflow | Graphe de logique |
| Workflow global | [Fonction](../../fundamentals/logic/scripts) dans un script |
| Collection / source de données | [Route](../../fundamentals/data/routes) appelée depuis l'interface |
| Table backend | Table de [base de données](../../fundamentals/data/database) |
| Composant codé | Composant de [plugin](../../plugins/introduction) |

</DTable>

## Lequel choisir ?

**Choisissez WeWeb** si vous avez déjà un backend à conserver, si la rapidité du design est votre priorité, ou si vous voulez un hébergement géré.

**Choisissez Luna Park** si vous voulez un seul outil et un seul langage de logique pour toute l'application, le code complet du frontend et du backend, et des applications natives depuis le même projet.
