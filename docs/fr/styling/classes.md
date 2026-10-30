---
description: "Partagez un style entre plusieurs éléments d'un composant avec les classes de composant : créer, appliquer, modifier, extraire, et comment elles se combinent avec le style des éléments."
---

<script setup lang="ts">
import ExtractVideo from '/assets/images/styling/classes/extract.webm';
import ClassesPanel from '/assets/images/styling/classes/classes-panel.png';
import Target from '/assets/images/styling/classes/target.png';
</script>

# Classes

Une **classe** est un style nommé partagé par plusieurs éléments d'un même composant. Modifiez la classe une fois, et tous les éléments qui l'utilisent changent. Utilisez les classes pour les éléments répétés : les cartes d'une liste, les entrées d'un menu, les champs d'un formulaire.

Les classes appartiennent à leur composant : les autres composants ne peuvent pas les utiliser. Pour un style partagé par toute l'application, utilisez les [design tokens](./tokens) ou une classe CSS globale (voir [Styles avancés](./advanced-style#classes-css)).

## Créer une classe

Cliquez sur le composant dans l'**Explorer** pour afficher ses réglages dans l'inspector, puis ouvrez **Classes** :

- **+** (**Add a new class**) crée une classe et ouvre son style.
- Tapez dans le champ du nom pour la renommer. Les noms ne contiennent que des lettres, des chiffres, `-` et `_`. Le renommage s'applique avec `Entrée` ou en quittant le champ.
- Le nombre à côté du nom indique combien d'éléments utilisent la classe.
- **Edit class style** ouvre le style de la classe sous la liste : le même panneau **Style** que pour un élément, avec les media queries et le survol.
- **Delete class** la retire de tous les éléments, puis la supprime.

<DImage
  :src="ClassesPanel" :width="1280" :height="720"
  alt="Section Classes d'une page avec une classe card, et le style de la classe ouvert en dessous"
/>

## Appliquer une classe

Sélectionnez un élément, et dans le panneau **Element** :

1. Cliquez sur le **+** de **Classes**.
2. Passez la nouvelle entrée en type **Token** (voir [Liaisons](../interface/bindings#types-de-valeur)).
3. Choisissez la classe (`.card`) dans la liste.

Un élément peut avoir plusieurs classes. Une entrée de classe peut aussi être une **Constant** (des noms de classes bruts, séparés par des espaces, pour les classes CSS globales) ou une **Variable** (une classe qui dépend d'une valeur). Seules les entrées **Token** sont comptées et listées dans la liste **Target** ci-dessous.

## Modifier une classe depuis un élément

Quand l'élément sélectionné a une classe, le panneau **Style** affiche une liste **Target** :

- **This element** modifie le style propre de l'élément ;
- `.card (3 elements)` modifie le style de la classe, partagé par tous les éléments qui l'utilisent.

<DImage
  :src="Target" :width="1280" :height="720"
  alt="Panneau Style de l'élément Featured card avec la liste Target ouverte sur This element et .card (3 elements)"
/>

## Extraire un style dans une classe

Quand un élément a déjà le bon style, transformez-le en classe : dans son panneau **Style**, avec **Target** sur **This element**, cliquez sur **Extract style to a new class**. Tout le style de l'élément (media queries et survol compris) passe dans une nouvelle classe nommée d'après l'élément, la classe est appliquée à l'élément, et **Target** passe sur elle. Appliquez ensuite la classe aux autres éléments.

<DImage
  :src="ExtractVideo" :width="1280" :height="720"
  alt="Extract style to a new class : le style de Featured card passe dans une classe featured-card"
/>

## Style de classe et style d'élément

Un élément peut avoir une classe et son propre style. Quand les deux définissent la même propriété, **le style de l'élément l'emporte**. Utilisez-le pour les exceptions : une classe `.card` pour toutes les cartes, et un fond différent sur l'une d'elles.

Dans le code exporté, les classes sont des classes CSS scopées du composant (`<style scoped>`), avec le survol en `:hover` et les media queries en règles `@media`.
