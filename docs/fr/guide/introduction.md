# Commencer

Bienvenue dans la documentation de Luna Park. Si vous souhaitez rapidement essayer l'éditeur de logique, nous vous suggérons d'essayer le [Luna Park challenge](https://luna-park.app/challenge), une série de puzzles conçus pour introduire les notions de scripting visuel de manière ludique.

## Accès rapide

Voici une liste de raccourcis pour accéder rapidement à la documentation.

<QuickAccess :items="[
{ title: 'LUNA PARK', link: '/fr/what-is-luna-park', description: 'Découvrez ce qui rend Luna Park unique par rapport aux autres solutions no-code.' },
{ title: 'ÉDITEUR', link: '/fr/editor', description: 'Découvrez tous les panneaux de l’éditeur et leurs fonctionnalités.' },
{ title: 'MISES EN PAGE', link: '/fr/layouts', description: 'Apprenez à construire et utiliser des mises en page.' },
{ title: 'STYLISATION', link: '/fr/styling', description: 'Apprenez à styliser tous les éléments de votre application.' },
{ title: 'COMPOSANTS', link: '/fr/custom-components', description: 'Apprenez à créer et utiliser des composants personnalisés.' },
{ title: 'VARIABLES', link: '/fr/variables', description: 'Apprenez à créer et utiliser des variables réactives.' },
{ title: 'SCRIPTING VISUEL', link: '/fr/visual-scripting-editor', description: 'Découvrez l’éditeur de scripting visuel et ses fonctionnalités.' },
{ title: 'LOGIQUE', link: '/fr/logic-flow', description: 'Apprenez à créer des flux logiques en utilisant des branches, des boucles, etc.' },
{ title: 'EXPORT', link: '/fr/export', description: 'Apprenez à exporter votre application en tant que site autonome.' }
]" />

<br/>

# Qu'est-ce que Luna Park ?

Luna Park est un **framework de scripting visuel**. C’est comme tout framework JS connu (comme React, Vue ou Angular), mais sans code. Vous obtenez toutes les fonctionnalités avancées et puissantes d’un framework traditionnel, avec la simplicité et la rapidité d’un éditeur visuel.

## En quoi Luna Park est différent des autres créateurs d’applications ?

Les solutions no-code traditionnelles sont généralement des sociétés d'hébergement, ce qui signifie qu'elles hébergent votre projet, vous bloquent, et vous payez selon l'utilisation de la bande passante. Luna Park, quant à lui, est un environnement de développement. Le code généré vous appartient, vous pouvez donc l’héberger où vous voulez, ou distribuer votre logiciel compilé, **sans aucune contrainte**.

La différence réside aussi dans le fait que l’**éditeur de mise en page de Luna Park** est plus bas niveau que les autres solutions no-code. Cela signifie qu'il est un peu moins simple à apprendre, mais permet de faire beaucoup plus et offre des **performances natives** : votre application sera aussi performante que si elle était codée par une équipe de développeurs expérimentés.

<InfoCard
:cards="[
{
title: 'CONSTRUCTEUR D’APPLICATIONS',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques heures', styleClass: 'info' },
{ label: 'Création', value: 'Quelques heures', styleClass: 'success' },
{ label: 'Fonctionnalités', value: 'Statique', styleClass: 'danger' },
{ label: 'Performance', value: 'Mauvaise', styleClass: 'danger' }
]
},
{
title: 'ÉDITEUR DE MISE EN PAGE',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques jours', styleClass: 'info' },
{ label: 'Création', value: 'Quelques jours', styleClass: 'success' },
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

## En quoi le scripting visuel diffère-t-il des autres logiques no-code ?

Le **moteur de scripting visuel de Luna Park** vous permet de construire n'importe quel type de logique possible en code, avec des performances natives. Il n'y a aucune limite à la complexité, ni aucun ralentissement introduit par d'autres constructeurs de logique no-code.

D'un point de vue technique, la logique que vous créez avec l'éditeur de scripting visuel est compilée en **véritable code JS**, chaque nœud étant équivalent à une ligne de code. En production, il n'est pas lu par un interpréteur lourd comme le font d'autres outils, ce qui le rend extrêmement léger et performant.

<InfoCard
:cards="[
{
title: 'NO-CODE',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques heures' },
{ label: 'Création', value: 'Quelques heures' },
{ label: 'Liberté', value: 'Cas d’utilisation spécifiques', styleClass: 'danger' },
{ label: 'Performance', value: 'Mauvaise', styleClass: 'danger' }
]
},
{
title: 'SCRIPTING VISUEL',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques jours' },
{ label: 'Création', value: 'Quelques jours' },
{ label: 'Liberté', value: 'Presque tout', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
},
{
title: 'CODE',
infoPairs: [
{ label: 'Apprentissage', value: 'Quelques mois', styleClass: 'danger' },
{ label: 'Création', value: 'Quelques mois', styleClass: 'danger' },
{ label: 'Liberté', value: 'Tout', styleClass: 'success' },
{ label: 'Performance', value: 'Native', styleClass: 'success' }
]
}
]"
/>
