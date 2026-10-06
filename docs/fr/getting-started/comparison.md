---
description: "Comparez Luna Park aux outils no-code, éditeurs de mise en page et frameworks JavaScript."
---

# Quelles différences avec les autres outils no-code ?

## Les solutions no-code traditionnelles

Les solutions no-code sont généralement des **sociétés d'hébergement**, ce qui signifie qu'elles hébergent votre projet et vous payez selon l'utilisation de leurs serveurs.

Leur motivation est de vous garder sur leur plateforme, ce qui signifie que vous êtes lié à leurs serveurs et à leurs limitations. Ils sont incités à ne pas générer d'applications trop performantes pour vous vendre des serveurs plus puissants.

## Notre solution, Luna Park

Luna Park, quant à lui, est un **environnement de développement** (IDE). Vous payez un montant fixe, quel que soit votre projet. Le code généré vous appartient, vous pouvez donc l’héberger où vous voulez sans aucune contrainte.

Notre motivation est de vous permettre de créer des applications **performantes et évolutives**, de manière **rapide** et **efficace**. Nous sommes incités à vous fournir le meilleur outil pour créer vos applications.

## La contrepartie

Luna Park est un outil plus bas niveau que les autres solutions no-code. Cela signifie qu'il est un peu moins simple à apprendre, mais permet de **faire beaucoup plus** et offre des **performances natives**.

<DInfoCard
:cards="[
{
title: 'CONSTRUCTEUR D’APPLICATIONS',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques heures', styleClass: 'success' },
{ label: 'Création', value: 'Quelques heures', styleClass: 'success' },
{ label: 'Fonctionnalités', value: 'Statique', styleClass: 'danger' },
{ label: 'Performance', value: 'Mauvaise', styleClass: 'danger' }
]
},
{
title: 'ÉDITEUR DE MISE EN PAGE',
accent:true,
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques jours', styleClass: 'info' },
{ label: 'Création', value: 'Quelques jours', styleClass: 'info' },
{ label: 'Fonctionnalités', value: 'Réactivité moderne', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
},
{
title: 'FRAMEWORK JS',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques mois', styleClass: 'danger' },
{ label: 'Création', value: 'Quelques mois', styleClass: 'danger' },
{ label: 'Fonctionnalités', value: 'Réactivité moderne', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
}
]"
/>

## Luna Park et les outils populaires

Chaque outil fait des choix différents. Le tableau ci-dessous résume les principaux. Chaque outil a sa propre page avec une comparaison détaillée.

| | Luna Park | Bubble | WeWeb | FlutterFlow | Webflow | Constructeurs IA |
|---|---|---|---|---|---|---|
| **Usage principal** | Applications web et natives full-stack | Applications web full-stack | Applications web | Applications mobiles | Sites web et CMS | Applications générées par prompt |
| **Logique** | Visual scripting, compilé en JavaScript | Workflows | Workflows et formules | Action flows, code Dart personnalisé | Interactions, code personnalisé | Code écrit par l'IA |
| **Exécution** | Code généré | Moteur de Bubble | Moteur de workflows de WeWeb | Code Flutter généré | Pages statiques | Code généré |
| **Backend** | Intégré (routes, PostgreSQL, crons) | Intégré | Intégré, ou Xano, Supabase... | Firebase ou Supabase | CMS uniquement | Supabase ou celui de la plateforme |
| **Export du code** | Application complète (Vue + Node.js) | Non | Frontend Vue (offres payantes) | Code Flutter (offres payantes) | HTML/CSS statique (sans CMS) | Oui (React) |
| **Hébergement** | Où vous voulez | Bubble uniquement | WeWeb Cloud ou frontend auto-hébergé | Au choix | Webflow | Plateforme ou au choix |
| **Modèle de prix** | Abonnement fixe | Offres + usage (workload units) | Sièges + offre d'hébergement par app | Sièges | Offres site + espace de travail | Crédits par message IA |
| **Plateformes** | Web, PWA, desktop, mobile | Web, mobile | Web, PWA | Mobile d'abord, web, desktop | Web | Surtout web |

::: info
Cette comparaison reflète notre compréhension de chaque outil en octobre 2026. Ces produits évoluent vite : consultez leurs sites pour les fonctionnalités et prix actuels.
:::

- [**Luna Park vs Bubble**](./comparison/bubble) : l'alternative no-code la plus proche. La propriété du code, les coûts et les performances font la différence.
- [**Luna Park vs WeWeb**](./comparison/weweb) : les deux génèrent du code Vue. Luna Park construit le frontend et le backend dans un seul projet.
- [**Luna Park vs FlutterFlow**](./comparison/flutterflow) : mobile d'abord contre web d'abord.
- [**Luna Park vs Webflow**](./comparison/webflow) : sites web contre applications.
- [**Luna Park vs constructeurs IA**](./comparison/ai-app-builders) : Lovable, Bolt, et la différence entre code généré et logique visuelle.

## Quand Luna Park n'est pas le meilleur choix

Pour être honnêtes, d'autres outils sont plus adaptés si :

- vous voulez une plateforme **entièrement gérée** : Luna Park peut déployer votre frontend pour le tester, mais vous hébergez le backend vous-même (voir [Auto-hébergement](../deployment/deployment)) ;
- vous avez besoin dès aujourd'hui d'un **large écosystème** de templates et de plugins prêts à l'emploi : Luna Park est plus jeune et sa communauté plus petite ;
- vous créez un **site de contenu** (blog, landing page) plutôt qu'une application ;
- vous voulez un résultat en **quelques heures** sans apprendre de notions de logique.
