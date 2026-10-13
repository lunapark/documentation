---
description: "Ajoutez, imbriquez et réorganisez les éléments de mise en page en mode Builder : l'arborescence, le mode insertion, la liste des éléments, les composants de plugins et les templates."
---

<script setup lang="ts">
import LayoutTree from '/assets/images/layout/builder/layout-tree.png';
import ContextMenu from '/assets/images/layout/builder/context-menu.png';
import AddNuxtButton from '/assets/images/layout/builder/add-nuxt-button.png';
import InsertMode from '/assets/images/layout/builder/insert-mode.png';
</script>

# Builder

Le mode **Builder** permet de construire l'interface d'une page ou d'un composant. Ouvrez un fichier page ou composant, et choisissez **Builder** dans le sélecteur de mode sous la vue principale.

En mode Builder :

- la **vue principale** affiche le canevas, un rendu en direct de la mise en page ;
- le **panneau des options** (en bas à gauche) affiche l'**arborescence de mise en page**, la liste des éléments ;
- l'**inspecteur** (à droite) affiche les panneaux de l'élément sélectionné : **Element**, **Properties**, **Rendering**, **Events** et **Style**.

<DImage
:src="LayoutTree" :width="1280" :height="720"
alt="Mode Builder : l'arborescence à gauche, le canevas au milieu et l'inspecteur de l'élément sélectionné à droite"
/>

## L'arborescence de mise en page

L'arborescence reflète le canevas : chaque ligne est un élément, et les lignes indentées sont ses enfants. L'élément racine, en haut, est le composant lui-même.

- `Cliquez` sur une ligne (ou sur l'élément dans le canevas) pour le sélectionner et afficher ses panneaux dans l'inspecteur.
- `Double-cliquez` sur une ligne pour replier ou déplier ses enfants.
- Faites glisser une ligne par sa poignée pour la déplacer avant, après ou dans un autre élément. Dans le canevas, maintenez `Ctrl` pour déplacer rapidement les éléments.
- `Ctrl + X` / `Ctrl + C` / `Ctrl + V` coupent, copient et collent les éléments, `Suppr` les supprime.

L'icône au début de chaque ligne indique le type de l'élément. Cliquez dessus pour changer le type d'un élément existant.

## Insérer des éléments

Il y a trois façons d'ajouter un élément.

### Depuis l'arborescence

Sous les enfants de chaque élément, l'arborescence affiche deux boutons :

- **+** ajoute un **Block** vide à la fin ;
- le bouton **liste** ouvre la liste des éléments : choisissez un type pour l'ajouter à la fin.

### Avec le menu contextuel

Faites un clic droit sur un élément de l'arborescence pour créer un élément avant (**Create before**), après (**Create after**) ou dedans (**Create inside**). Le nouvel élément est un **Block** : changez son type depuis le panneau **Element** de l'inspecteur.

Le même menu permet d'envelopper la sélection dans un nouveau fichier composant (**Wrap in component**), de supprimer un élément en gardant ses enfants (**Unwrap and delete**), et de copier ou coller un style.

<DImage
:src="ContextMenu" :width="1280" :height="720"
alt="Menu contextuel d'un élément avec Create before, Create after, Create inside, Wrap in component et Copy Style"
/>

### Avec le mode insertion

Activez **Show insert mode** dans la barre d'outils sous la vue principale. Des points d'insertion apparaissent autour et à l'intérieur des éléments du canevas. Cliquez sur l'un d'eux pour ouvrir la liste des éléments et insérer l'élément à cet endroit.

<DImage
:src="InsertMode" :width="1280" :height="720"
alt="Mode insertion : des points d'insertion bleus dans le canevas et la liste des éléments ouverte après un bouton"
/>

## La liste des éléments

| Élément | Description |
|---|---|
| **Block** | Un conteneur qui peut avoir des enfants. Choisissez sa balise HTML (**Tag**) dans le panneau Element : `div`, `section`, `header`, `nav`, `form`, `button`, `hr`... |
| **Package** | Un composant fourni par un [package npm](../../integrations/npm) installé. |
| **Slot** | L'endroit où s'affichent les enfants donnés à ce composant. Voir [Composants](./components). |
| **Template** | Afficher un contenu sous condition, ou le répéter pour chaque élément d'une liste. Voir [Conditions et boucles](./templates). |
| **Custom text** | Du texte écrit directement dans le canevas, avec des variables. Choisissez sa balise : `span`, `p`, `h1`, `h2`, `h3`... |
| **Custom HTML** | Du code HTML brut. |
| **Variable** | Afficher la valeur d'une variable. |
| **Link** | Un lien vers une page de votre application ou vers une URL. |
| **Input** | Un champ de texte (`input` ou `textarea`), avec un type, un placeholder et une valeur. |
| **Media** | Une image, une vidéo ou un fichier audio. |
| **Component** | L'un des composants de votre projet. Affiché dès que le projet a au moins un composant. |

::: tip Boutons
Pour un bouton stylisé, utilisez un composant de plugin comme **Nuxt UI** > **Element** > **Button**, et réglez son **label** dans le panneau **Properties**. Pour un bouton natif, utilisez un **Block** avec la balise `button`, et un **Custom text** à l'intérieur pour son libellé.
:::

## Composants de plugins

Chaque [plugin](../../integrations/plugins) installé qui fournit des composants ajoute une entrée à son nom (par exemple **Nuxt UI**) dans la liste des éléments, à côté de **Package**. Ouvrez-la pour choisir l'un de ses composants. Ses options apparaissent dans le panneau **Properties** de l'inspecteur, et ses propres événements dans le panneau **Events**. Si le composant a des slots (comme `leading` et `trailing` pour un bouton Nuxt UI), ils sont listés sous lui dans l'arborescence : ajoutez des éléments dans un slot pour le remplir.

<DImage
:src="AddNuxtButton" :width="1280" :height="720"
alt="Liste des éléments de l'arborescence ouverte sur Nuxt UI, Element, Button"
/>

Préférez un composant de plugin pour un widget stylisé et accessible (boutons, modales, listes déroulantes, tableaux...). Préférez les éléments natifs pour garder le contrôle total du balisage et du style.

Les plugins peuvent aussi fournir des **templates** : des blocs prêts à l'emploi listés dans l'onglet **Templates** du panneau du bas. Glissez-en un dans la mise en page pour l'utiliser.

## Sélectionner un élément

Les panneaux de l'inspecteur pour l'élément sélectionné :

| Panneau | Contenu |
|---|---|
| **Element** | Nom, type, balise HTML et classes CSS. |
| **Properties** | Les attributs de l'élément (ou du composant de plugin), fixes ou liés à une variable. |
| **Rendering** | Afficher l'élément sous une condition (**Condition**), ou le répéter avec une boucle (**Loop**) sur une liste. **Simulation** choisit son affichage dans l'éditeur. |
| **Events** | Ce qui se passe quand l'utilisateur interagit avec l'élément. Voir [Événements](./events). |
| **Style** | Quick style, media queries, survol et toutes les propriétés CSS. Voir [Style](./styling). |

Donnez un nom (**Name**) aux éléments importants : il est affiché dans l'arborescence et dans le nom de leurs nœuds d'événement (`On Click (Hello button)`).

## Où est passé mon élément ?

Si un élément est dans l'arborescence mais pas dans le canevas :

- lui ou l'un de ses parents a peut-être une **Condition** fausse ou une **Loop** sur une liste vide (dans le panneau **Rendering**, ou sur un **Template**). Réglez **Simulation** sur `display` pour le voir pendant l'édition ;
- son parent n'a peut-être pas de taille (un Block vide sans marge intérieure) ;
- un style le masque peut-être (`display: none`, `opacity: 0`, en dehors d'un parent en `overflow: hidden`) ;
- une [media query](./styling) change peut-être son style à la taille d'aperçu actuelle.
