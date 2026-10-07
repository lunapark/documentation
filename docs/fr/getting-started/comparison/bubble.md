---
title: "Alternative à Bubble avec export du code : Luna Park vs Bubble"
description: "Vous cherchez une alternative à Bubble ? Comparez Luna Park et Bubble : export du code, hébergement, modèle de prix, logique, backend et applications mobiles."
---

# Luna Park vs Bubble

Vous cherchez une **alternative à Bubble** avec export du code ? Luna Park est un éditeur visuel qui construit l'interface, la logique et le backend de votre application, et la compile en une application Vue et Node.js standard, qui vous appartient et que vous hébergez où vous voulez.

Bubble est la plateforme no-code full-stack la plus établie. Comme Luna Park, elle permet de créer l'interface, la logique et les données d'une application sans écrire de code. Les deux outils diffèrent surtout par **ce que vous obtenez à la fin** : Bubble fait tourner votre application sur sa propre plateforme, alors que Luna Park génère une application standard qui vous appartient.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Bubble |
|---|---|---|
| **Interface** | Arborescence de composants, style basé sur le CSS, tokens de design | Canvas visuel avec moteur de mise en page responsive |
| **Logique** | Graphes de visual scripting | Workflows (événement + liste d'actions) |
| **Exécution** | Compilée en JavaScript et Vue | Interprétée par le moteur de Bubble |
| **Extensibilité** | Paquets npm, fonctions TypeScript, plugins | Marketplace de plugins, JavaScript personnalisé |
| **IA** | Sidekick, agents externes via MCP | Génération d'applications et assistant IA |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Bubble |
|---|---|---|
| **Base de données** | PostgreSQL | Base de données Bubble intégrée |
| **Requêtes** | Jointures, agrégats, regroupements, transactions | Recherches avec contraintes et filtres |
| **Logique backend** | Routes, crons, scripts backend | Backend workflows, workflows planifiés |
| **Sécurité des données** | Guards de routes, rôles et permissions | Privacy rules sur chaque type de données |
| **Authentification** | Plugin Users (sessions, rôles, OAuth2) | Intégrée, OAuth via plugins |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Bubble |
|---|---|---|
| **Export du code** | Code Vue + Node.js lisible | Non ([source](https://manual.bubble.io/account-and-marketplace/application-and-data-ownership)) |
| **Hébergement** | Où vous voulez | Infrastructure de Bubble uniquement |
| **Modèle de prix** | Abonnement fixe | Offre + usage ([workload units](https://manual.bubble.io/help-guides/workload/understanding-workload)) |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web, mobile (Android, iOS) |
| **Écosystème** | Communauté jeune et en croissance | Très grande communauté, agences, templates |

</DTable>

::: info
Cette comparaison reflète notre compréhension de Bubble en octobre 2026. Bubble évolue vite : consultez [bubble.io](https://bubble.io) pour ses fonctionnalités et prix actuels.
:::

## Les points forts de Bubble

- **Entièrement géré** : hébergement, base de données, montée en charge, sauvegardes et mises à jour de sécurité sont gérés pour vous. Vous ne touchez jamais à un serveur.
- **Maturité et écosystème** : Bubble existe depuis plus de dix ans. Vous trouverez des milliers de plugins et de templates, de nombreux tutoriels et des agences à qui confier un projet.
- **Prise en main** : les premiers écrans et workflows arrivent vite, et le modèle événement + actions est facile à comprendre pour des applications simples.

## Les points forts de Luna Park

### Votre application vous appartient

D'après la [documentation de Bubble](https://manual.bubble.io/account-and-marketplace/application-and-data-ownership), les applications Bubble ne peuvent tourner que sur la plateforme Bubble et ne peuvent pas être exportées en code : si vous partez, vous reconstruisez la logique. Luna Park [compile](../../deployment/compilation) votre projet en un frontend Vue et un backend Node.js (Fastify et PostgreSQL) standards. Vous pouvez télécharger le code source lisible, l'héberger où vous voulez, et le confier à une équipe de développement si votre projet dépasse le no-code.

### Des coûts prévisibles

Bubble facture une partie de ses offres en [**workload units**](https://manual.bubble.io/help-guides/workload/understanding-workload), qui mesurent l'activité serveur de votre application : requêtes en base, workflows, appels d'API, envois de fichiers. L'usage au-delà du quota de votre offre est facturé en plus (voir les [tarifs de Bubble](https://bubble.io/pricing)) : le coût suit votre trafic et la façon dont vos workflows sont construits. Avec Luna Park, vous payez un abonnement fixe pour l'éditeur. Votre application tourne sur votre propre serveur, au prix de ce serveur, quel que soit le nombre d'utilisateurs.

### Du code compilé que vous hébergez

Les applications Bubble tournent sur l'infrastructure gérée de Bubble, exécutées par la plateforme Bubble. Luna Park est un **compilateur** : chaque nœud d'un graphe devient une ligne de JavaScript, et chaque composant devient un composant Vue classique. Le résultat est une application Vue et Node.js classique, sans moteur Luna Park, que vous pouvez héberger, profiler et optimiser comme n'importe quelle application web.

### Une logique sans limites

Les workflows Bubble sont une liste d'actions déclenchées par un événement. La logique complexe (boucles imbriquées, transformations de données, algorithmes) passe en général par des backend workflows, des plugins ou du JavaScript personnalisé. Le [visual scripting](../../fundamentals/logic/visual-scripting/introduction) de Luna Park couvre ce que le code permet : boucles, conditions, fonctions, données typées, appels asynchrones, et les fonctions de n'importe quel [paquet npm](../../integrations/npm), chacune disponible sous forme de nœud.

### Une vraie base de données SQL

La [base de données](../../fundamentals/data/database) de Luna Park est PostgreSQL, dans l'éditeur comme en production. Les recherches Bubble filtrent un type de données à la fois : combiner des données oblige souvent à enchaîner les recherches ou à stocker des listes de références. Dans Luna Park, une seule requête peut joindre des tables, regrouper des lignes et calculer des comptes, sommes ou moyennes, et une [transaction](../../fundamentals/data/database#nodes-specialises) enregistre plusieurs modifications d'un coup, ou aucune. Vous pouvez prévisualiser le SQL de chaque requête.

En production, vos données sont dans votre propre base PostgreSQL, lisible par n'importe quel outil standard.

### Toutes les plateformes depuis le même projet

À partir d'un seul projet, Luna Park exporte une application web monopage standard, une PWA que les utilisateurs installent depuis leur navigateur et, avec l'[application desktop](../desktop-app), des applications natives pour Windows, macOS, Linux ([desktop](../../deployment/desktop)), Android et iOS ([mobile](../../deployment/mobile)). L'[éditeur mobile natif](https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android) de Bubble cible Android et iOS, avec des écrans mobiles construits séparément des pages web.

## À savoir avant de changer

- **Vous hébergez le backend.** Luna Park peut déployer votre frontend pour le tester, mais les routes, la base de données et les crons tournent sur votre propre serveur (voir [Auto-hébergement](../../deployment/deployment)). C'est du Node.js et du PostgreSQL standard, mais c'est une chose de plus à gérer.
- **La courbe d'apprentissage est similaire.** Luna Park demande à peu près la même compréhension de la logique et des données que Bubble (voir [Est-ce que Luna Park est fait pour moi ?](../target-users)). Les graphes de visual scripting prennent un peu plus de temps à apprendre que les workflows, et deviennent rentables sur la logique complexe.
- **L'écosystème est plus petit.** Il existe moins de templates et de plugins aujourd'hui. Les [paquets npm](../../integrations/npm) comblent beaucoup de manques, et vous pouvez [écrire vos propres plugins](../../plugins/introduction).

## Des concepts Bubble à Luna Park

<DTable :widths="['50%', '50%']">

| Bubble | Luna Park |
|---|---|
| Page | [Page](../../fundamentals/interface/components#pages) |
| Reusable element | [Composant](../../fundamentals/interface/components) |
| Custom state | [Variable](../../fundamentals/logic/variables) |
| Workflow | Graphe de logique d'un composant |
| Backend workflow (API workflow) | [Route](../../fundamentals/data/routes) |
| Workflow récurrent / planifié | [Cron](../../fundamentals/data/cron) |
| Data type | Table de [base de données](../../fundamentals/data/database), ou [Type](../../fundamentals/logic/scripts#fichiers-de-types) |
| Option set | Fichier de [configuration](../../fundamentals/logic/scripts#fichiers-de-configuration) |
| Privacy rules | [Guards](../../fundamentals/data/auth#proteger-les-routes) de routes et vérifications dans la logique backend |
| API Connector | Nœud `Fetch` |
| Plugin | [Plugin](../../integrations/plugins) ou [paquet npm](../../integrations/npm) |
| Styles | [Tokens de design](../../fundamentals/interface/styling#tokens-de-design) |

</DTable>

## Lequel choisir ?

**Choisissez Bubble** si vous voulez lancer vite sans jamais penser aux serveurs, si votre logique reste simple, et si dépendre d'une seule plateforme est acceptable pour votre projet.

**Choisissez Luna Park** si vous construisez un produit fait pour durer et grandir : vous gardez le code, maîtrisez vos coûts, faites tourner du code compilé standard, et pouvez aller aussi loin que votre logique l'exige.
