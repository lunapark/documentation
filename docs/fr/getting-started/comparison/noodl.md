---
title: "Alternative à Noodl : Luna Park vs Noodl et Fluxscape"
description: "Vous cherchez une alternative à Noodl ? Comparez Luna Park à Noodl et à son fork Fluxscape : logique en nœuds, backend, export du code, hébergement et plateformes."
---

# Luna Park vs Noodl et Fluxscape

Vous cherchez une **alternative à Noodl** ? Luna Park est un éditeur visuel avec une logique en nœuds, comme Noodl, qui construit l'interface et le backend de votre application, et la compile en une application Vue et Node.js standard.

Noodl est un éditeur low-code à base de nœuds pour les applications web. En 2024, il est devenu [open source](https://github.com/noodlapp/noodl) et n'est plus géré par sa société d'origine. Son développement continue dans des forks communautaires, comme [Fluxscape](https://fluxscape.io), un fork géré avec hébergement et offres payantes. De tous les outils comparés ici, Noodl est sans doute le plus proche de Luna Park : les deux utilisent des **graphes de nœuds** plutôt que des listes d'actions.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Noodl / Fluxscape |
|---|---|---|
| **Interface** | Arborescence de composants, style basé sur le CSS, tokens de design | Nœuds visuels pour les éléments d'interface, stylés dans le panneau de propriétés |
| **Logique** | Graphes de visual scripting, données typées | Graphes de nœuds, nœuds de fonction JavaScript |
| **Exécution** | Compilée en JavaScript et Vue | Runtime Noodl, livré avec votre application |
| **Extensibilité** | Paquets npm, fonctions TypeScript, plugins | Nœuds JavaScript, modules personnalisés |
| **IA** | Sidekick, agents externes via MCP | Selon le fork |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Noodl / Fluxscape |
|---|---|---|
| **Backend** | Intégré : routes, crons, PostgreSQL | Cloud services (auto-hébergés ou gérés), Supabase dans Fluxscape, toute API REST |
| **Base de données** | PostgreSQL : jointures, agrégats, transactions | Collections d'enregistrements (« classes ») dans les cloud services |
| **Logique serveur** | Visuelle, mêmes graphes que l'interface | Cloud functions |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Noodl / Fluxscape |
|---|---|---|
| **Éditeur** | Commercial, activement développé | Open source (éditeur GPLv3, runtime MIT) ([source](https://github.com/noodlapp/noodl)) |
| **Export du code** | Code Vue + Node.js lisible | Application déployée sur le runtime Noodl |
| **Hébergement** | Où vous voulez | Auto-hébergé, ou hébergement Fluxscape |
| **Modèle de prix** | Abonnement fixe | Gratuit (communauté), offres payantes sur Fluxscape |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web |

</DTable>

::: info
Cette comparaison reflète notre compréhension de Noodl et Fluxscape en octobre 2026. Les projets communautaires évoluent vite : consultez [le dépôt Noodl](https://github.com/noodlapp/noodl) et [fluxscape.io](https://fluxscape.io) pour leur état actuel.
:::

## Les points forts de Noodl et Fluxscape

- **Open source** : l'éditeur et le runtime sont libres d'utilisation, de modification et d'auto-hébergement.
- **Un seul paradigme pour tout** : dans Noodl, les éléments d'interface sont aussi des nœuds, donc l'interface et la logique vivent dans le même graphe.
- **Projets existants** : si votre application est déjà construite avec Noodl, un fork comme Fluxscape la fait tourner sans réécriture.

## Les points forts de Luna Park

### Du code compilé, pas un runtime

Une application Noodl est déployée avec le runtime Noodl, qui exécute vos graphes de nœuds dans le navigateur. Luna Park est un **compilateur** : chaque nœud d'un graphe devient une ligne de JavaScript, et chaque composant devient un composant Vue classique. L'application [exportée](../../deployment/compilation) est du code Vue et Node.js classique, lisible par n'importe quel développeur, sans runtime Luna Park.

### Un backend dans le même langage

Dans Noodl, la logique serveur vit dans des cloud functions, rattachées à un service backend séparé. Dans Luna Park, les [routes](../../fundamentals/data/routes), les [crons](../../fundamentals/data/cron) et l'[authentification](../../fundamentals/data/auth) font partie du projet, construites avec le même visual scripting que l'interface, et les mêmes [types](../../fundamentals/logic/scripts#fichiers-de-types) décrivent vos données des deux côtés.

### Une vraie base de données SQL

La [base de données](../../fundamentals/data/database) de Luna Park est PostgreSQL, dans l'éditeur comme en production. Une seule requête peut joindre des tables, regrouper des lignes et calculer des comptes, sommes ou moyennes, et une [transaction](../../fundamentals/data/database#nodes-specialises) enregistre plusieurs modifications d'un coup, ou aucune. Une route tourne sur le même serveur que la base et lui parle directement.

### Une logique typée

Les graphes de Luna Park sont typés : chaque ancre affiche le type de la valeur qu'elle porte, et les liens ne connectent que des [types compatibles](../../fundamentals/logic/visual-scripting/graph). Les [fichiers de types](../../fundamentals/logic/scripts#fichiers-de-types) décrivent la forme de vos données une seule fois, et les mêmes types sont partagés par l'interface et le backend.

### L'écosystème du web

Luna Park utilise [npm](../../integrations/npm) : les fonctions de n'importe quel paquet deviennent des nœuds, et les paquets de composants Vue ajoutent des composants. Vous pouvez aussi écrire des [fonctions TypeScript](../../fundamentals/logic/scripts#fonctions-en-code) et des [plugins](../../plugins/introduction).

### Toutes les plateformes depuis le même projet

À partir d'un seul projet, Luna Park exporte une application web monopage, une PWA et, avec l'[application desktop](../desktop-app), des applications natives pour Windows, macOS, Linux ([desktop](../../deployment/desktop)), Android et iOS ([mobile](../../deployment/mobile)).

## À savoir avant de changer

- **Luna Park n'est pas open source.** L'éditeur est un produit commercial, et télécharger le code source de votre application demande une offre payante (voir [Offres](../quick-start#offres)). Le code exporté vous appartient.
- **Pas d'import automatique.** Les projets Noodl ne peuvent pas être importés : vous reconstruisez l'application dans Luna Park. L'approche en nœuds rend les concepts familiers.
- **Interface et logique sont séparées.** Dans Luna Park, vous construisez l'interface dans l'arborescence de composants et la logique dans des graphes, au lieu de placer les éléments d'interface comme des nœuds.
- **Vous hébergez le backend.** Les routes, la base de données et les crons tournent sur votre propre serveur (voir [Auto-hébergement](../../deployment/deployment)).

## Des concepts Noodl à Luna Park

<DTable :widths="['50%', '50%']">

| Noodl | Luna Park |
|---|---|
| Page | [Page](../../fundamentals/interface/components#pages) |
| Component | [Composant](../../fundamentals/interface/components) |
| Nœuds d'interface (Group, Text, Button...) | Éléments de l'arborescence de composants |
| Nœuds de logique | Nœuds d'un graphe de logique |
| Nœuds Variable / Object | [Variable](../../fundamentals/logic/variables), ou [Store](../../fundamentals/logic/store) pour l'état global |
| Nœud Function (JavaScript) | [Fonction](../../fundamentals/logic/scripts) (graphe ou TypeScript) |
| Cloud function | [Route](../../fundamentals/data/routes) |
| Class (cloud data) | Table de la [base de données](../../fundamentals/data/database) |
| Nœud REST | Nœud `Fetch` |
| Styles | [Tokens de design](../../fundamentals/interface/styling#tokens-de-design) |

</DTable>

## Lequel choisir ?

**Choisissez Noodl ou Fluxscape** si un éditeur open source est une exigence, ou si vous avez déjà un projet Noodl que vous voulez garder en ligne.

**Choisissez Luna Park** si vous voulez une logique en nœuds dans un outil activement développé, avec un backend PostgreSQL dans le même projet, du code compilé qui vous appartient, et des applications natives depuis le même projet.
