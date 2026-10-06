---
description: "Comparez Luna Park et Webflow : sites web contre applications, logique, données, export du code et hébergement."
---

# Luna Park vs Webflow

Webflow et Luna Park sont rarement en concurrence sur le même projet. Webflow est fait pour les **sites web** : pages marketing, blogs, portfolios, contenu géré dans un CMS. Luna Park est fait pour les **applications** : logique, comptes utilisateurs, données que les utilisateurs créent et modifient.

## En un coup d'œil

### Construction

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Webflow |
|---|---|---|
| **Fait pour** | Applications web | Sites web et contenu |
| **Interface** | Arborescence de composants, style basé sur le CSS, tokens de design | Canvas visuel lié au HTML et au CSS, interactions et animations |
| **Logique** | Graphes de visual scripting, compilés en JavaScript | Interactions, code personnalisé, outils externes |

</DTable>

### Données et backend

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Webflow |
|---|---|---|
| **Données** | Base PostgreSQL, lue et écrite par votre application | Collections CMS, éditées par votre équipe |
| **Backend** | Intégré : routes, crons | Pas de backend visuel. Webflow Cloud héberge des applications codées |
| **Comptes utilisateurs** | Plugin Users (sessions, rôles, OAuth2) | Outils tiers (Memberstack, Outseta...) |

</DTable>

### Propriété et coûts

<DTable :widths="['24%', '38%', '38%']">

| | Luna Park | Webflow |
|---|---|---|
| **Export du code** | Application complète | HTML, CSS et JavaScript statiques, sans le contenu CMS |
| **Hébergement** | Où vous voulez | Hébergement Webflow |
| **Modèle de prix** | Abonnement fixe | Offres site + offres espace de travail |
| **Plateformes** | Web (application monopage, PWA), desktop (Windows, macOS, Linux), mobile (Android, iOS) | Web (sites) |

</DTable>

::: info
Cette comparaison reflète notre compréhension de Webflow en octobre 2026. Webflow évolue vite : consultez [webflow.com](https://webflow.com) pour ses fonctionnalités et prix actuels.
:::

## Les points forts de Webflow

- **Liberté de design** : un contrôle précis au pixel près de la mise en page, de la typographie et des animations, avec un canvas proche de ce qu'attendent les designers.
- **Gestion de contenu** : le CMS permet aux rédacteurs de publier du contenu sans toucher au design.
- **SEO et marketing** : pages rendues côté serveur, réglages SEO, localisation, formulaires et hébergement mondial rapide.
- **Écosystème** : de nombreux templates, designers et agences.

## Les points forts de Luna Park

### La logique applicative

Webflow a retiré son outil d'automatisation visuelle (Logic) en 2025 et ses User Accounts en 2026. La logique applicative repose désormais sur des outils externes comme Zapier ou Make, ou sur du code personnalisé. Dans Luna Park, la logique est au cœur de l'outil : le [visual scripting](../../fundamentals/logic/visual-scripting/introduction) tourne dans l'interface comme dans le backend.

### Des données qui appartiennent à votre application

Un CMS Webflow sert au contenu de votre équipe. La [base de données](../../fundamentals/data/database) de Luna Park stocke ce que vos utilisateurs créent : commandes, messages, profils, avec relations, contraintes et transactions. Les [routes](../../fundamentals/data/routes) et l'[authentification](../../fundamentals/data/auth) contrôlent qui lit et écrit quoi.

### Un export complet

L'export de code de Webflow laisse de côté tout ce qui est dynamique : contenu CMS, formulaires, comptes utilisateurs. Luna Park [exporte](../../deployment/compilation) l'application complète, frontend et backend, prête à être [auto-hébergée](../../deployment/deployment).

## À savoir avant de changer

- **Luna Park n'est pas un CMS.** Pour un blog ou un site marketing, Webflow reste un meilleur outil.
- **SEO** : Luna Park génère une application monopage. Utilisez le mode d'historique **Web** pour des URL propres (voir [Application web](../../deployment/web#parametres-generaux)). Pour des sites riches en contenu qui dépendent du trafic des moteurs de recherche, un constructeur de sites comme Webflow est plus adapté.
- **Utilisez les deux** : beaucoup de produits ont un site marketing sous Webflow et une application construite avec un autre outil. Luna Park trouve naturellement sa place derrière votre bouton « Se connecter ».

## Lequel choisir ?

**Choisissez Webflow** pour un site web : pages marketing, blog, portfolio, contenu édité par votre équipe.

**Choisissez Luna Park** pour une application : SaaS, tableau de bord, marketplace, outil interne, tout ce qui a des comptes utilisateurs et de la logique.
