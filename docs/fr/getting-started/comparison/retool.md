---
title: "Alternative à Retool avec export du code : Luna Park vs Retool"
description: "Vous cherchez une alternative à Retool ? Comparez Luna Park et Retool : outils internes et applications clients, logique, backend, export du code, hébergement et modèle de prix."
---

# Luna Park vs Retool

Vous cherchez une **alternative à Retool** avec export du code et sans prix par utilisateur ? Luna Park construit visuellement l'interface, la logique et le backend de votre application, et la compile en une application Vue et Node.js standard, qui vous appartient et que vous hébergez où vous voulez.

Retool est l'outil de référence pour les **outils internes** : panneaux d'administration, tableaux de bord et applications de back-office construits sur vos bases de données et API existantes. Luna Park construit des **applications complètes**, internes ou destinées à vos clients, avec leur propre backend et leur propre base de données.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Retool |
|---|---|---|
| **Fait pour** | Applications web : SaaS, tableaux de bord, outils internes | Outils internes sur des données existantes |
| **Interface** | Arborescence de composants, style basé sur le CSS, tokens de design | Grille en glisser-déposer de composants prêts à l'emploi |
| **Logique** | Graphes de visual scripting, front et back | Requêtes (SQL, API), JavaScript, gestionnaires d'événements |
| **Exécution** | Compilée en JavaScript et Vue | Exécutée par la plateforme Retool |
| **IA** | Sidekick, agents externes via MCP | Retool AI, agents |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Retool |
|---|---|---|
| **Sources de données** | La base PostgreSQL du projet, des API via `Fetch` | De nombreux connecteurs : bases de données, REST, GraphQL, outils SaaS |
| **Base de données** | PostgreSQL, intégrée au projet | Vos bases existantes, ou Retool Database |
| **Logique backend** | Routes, crons, scripts backend | Requêtes exécutées par Retool, Workflows |
| **Authentification** | Plugin Users (sessions, rôles, OAuth2) pour vos propres utilisateurs | Comptes Retool, permissions, SSO sur les offres supérieures |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Retool |
|---|---|---|
| **Export du code** | Code Vue + Node.js lisible | Définition de l'application (JSON ou Toolscript), à importer dans Retool ([source](https://docs.retool.com/apps/guides/app-management/import-export)) |
| **Hébergement** | Où vous voulez | Retool Cloud, auto-hébergé en Enterprise ([source](https://retool.com/pricing)) |
| **Modèle de prix** | Abonnement fixe | Par créateur et par utilisateur ([source](https://retool.com/pricing)) |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web, mobile (Retool Mobile) |

</DTable>

::: info
Cette comparaison reflète notre compréhension de Retool en octobre 2026. Retool évolue vite : consultez [retool.com](https://retool.com) pour ses fonctionnalités et prix actuels.
:::

## Les points forts de Retool

- **Rapidité sur des données existantes** : connectez une base de données ou une API et obtenez un tableau, un formulaire ou un panneau d'administration fonctionnel en quelques minutes.
- **Connecteurs** : une longue liste d'intégrations prêtes à l'emploi avec des bases de données, des API et des outils SaaS.
- **Fonctionnalités entreprise** : SSO, journaux d'audit, permissions fines, gestion de versions et environnements.
- **Maturité** : une large base d'utilisateurs, de nombreux templates et une documentation complète.

## Les points forts de Luna Park

### Votre application vous appartient

Les applications Retool peuvent être exportées en JSON ou en Toolscript, mais ces fichiers décrivent l'application pour la plateforme Retool : ils sont faits pour être [importés dans une autre instance Retool](https://docs.retool.com/apps/guides/app-management/import-export). Luna Park [compile](../../deployment/compilation) votre projet en un frontend Vue et un backend Node.js (Fastify et PostgreSQL) standards. Vous pouvez télécharger le code source lisible, l'héberger où vous voulez, et le confier à une équipe de développement.

### Un prix qui ne grandit pas avec votre équipe

Retool [facture par créateur et par utilisateur](https://retool.com/pricing), et les utilisateurs externes sont facturés sur les offres supérieures. Avec Luna Park, vous payez un abonnement fixe pour l'éditeur. Votre application tourne sur votre propre serveur, au prix de ce serveur, quel que soit le nombre de personnes qui l'utilisent.

### Des applications pour vos clients

Retool est conçu pour des applications utilisées par votre équipe. Luna Park construit n'importe quelle application web : un SaaS pour vos clients, une marketplace, un portail client, avec votre propre design, votre propre [authentification](../../fundamentals/data/auth) et votre propre domaine. Le même projet peut aussi servir vos outils internes.

### Un contrôle total sur l'interface

Les interfaces Retool sont assemblées à partir de sa propre bibliothèque de composants, sur une grille. Dans Luna Park, vous construisez vos propres [composants](../../fundamentals/interface/components), les stylez avec du CSS et des [tokens de design](../../fundamentals/interface/styling#tokens-de-design), et utilisez des bibliothèques d'interface ou des paquets de composants Vue depuis [npm](../../integrations/npm).

### De la logique sans écrire de code

Dans Retool, la logique s'écrit en requêtes SQL, transformers JavaScript et gestionnaires d'événements. Le [visual scripting](../../fundamentals/logic/visual-scripting/introduction) de Luna Park couvre boucles, conditions, fonctions, données typées et appels asynchrones, dans l'interface comme dans le backend, sans écrire de code. Vous pouvez toujours écrire des [fonctions TypeScript](../../fundamentals/logic/scripts#fonctions-en-code) si vous préférez.

### Toutes les plateformes depuis le même projet

À partir d'un seul projet, Luna Park exporte une application web monopage, une PWA et, avec l'[application desktop](../desktop-app), des applications natives pour Windows, macOS, Linux ([desktop](../../deployment/desktop)), Android et iOS ([mobile](../../deployment/mobile)).

## À savoir avant de changer

- **Luna Park a sa propre base de données.** Les données de votre application vivent dans la [base de données](../../fundamentals/data/database) PostgreSQL du projet. Pour travailler avec une base existante ou une API interne, appelez-la depuis une [route](../../fundamentals/data/routes) avec le nœud `Fetch` ou un paquet client [npm](../../integrations/npm) : il n'y a pas de catalogue de connecteurs prêts à l'emploi.
- **Vous hébergez le backend.** Luna Park peut déployer votre frontend pour le tester, mais les routes, la base de données et les crons tournent sur votre propre serveur (voir [Auto-hébergement](../../deployment/deployment)).
- **Un simple panneau d'administration prend plus de temps.** Les tableaux et formulaires prêts à l'emploi de Retool sont difficiles à battre pour un écran CRUD rapide sur une base existante.

## Des concepts Retool à Luna Park

<DTable :widths="['50%', '50%']">

| Retool | Luna Park |
|---|---|
| App | Projet, avec ses [pages](../../fundamentals/interface/components#pages) |
| Component | [Composant](../../fundamentals/interface/components) |
| Module | [Composant](../../fundamentals/interface/components) réutilisable |
| Variable / temporary state | [Variable](../../fundamentals/logic/variables), ou [Store](../../fundamentals/logic/store) pour l'état global |
| Transformer | [Variable calculée](../../fundamentals/logic/variables#variables-calculees), ou [fonction](../../fundamentals/logic/scripts) |
| Event handler | Graphe de logique d'un composant |
| Resource query | [Route](../../fundamentals/data/routes) appelée depuis l'interface |
| Resource REST API | Nœud `Fetch` |
| Table Retool Database | Table de la [base de données](../../fundamentals/data/database) |
| Workflow | [Route](../../fundamentals/data/routes) ou [Cron](../../fundamentals/data/cron) |

</DTable>

## Lequel choisir ?

**Choisissez Retool** si vous avez besoin d'outils internes sur des bases de données et des API que vous avez déjà, rapidement, et si le prix par utilisateur et le fait de rester sur la plateforme Retool conviennent à votre équipe.

**Choisissez Luna Park** si vous construisez une application que vous voulez posséder : pour vos clients ou en interne, avec son propre backend, votre propre design, et des coûts qui ne dépendent pas du nombre d'utilisateurs.
