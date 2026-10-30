---
description: "Construisez votre première interaction dans Luna Park en 5 étapes : un bouton qui affiche un message dans la console quand on clique dessus."
---

<script setup lang="ts">
import AddNuxtButton from '/assets/images/layout/builder/add-nuxt-button.png';
import AddEvent from '/assets/images/layout/events/add-event.png';
import ClickLogGraph from '/assets/images/layout/events/click-log-graph.png';
import PreviewConsole from '/assets/images/layout/events/preview-console.png';
</script>

# Votre première interaction

Dans ce tutoriel, vous construisez un bouton qui affiche un message quand on clique dessus. Cela prend 5 minutes et couvre les bases de toute application Luna Park : une mise en page, un événement et un graphe.

En résumé : **ajoutez un bouton, ajoutez-lui un événement Click, ouvrez la vue Logic, connectez un nœud Log.**

Vous pouvez suivre dans l'[éditeur playground](https://luna-park.app/editor), sans compte.

## 1. Créer une page

Le bouton vient du [plugin Nuxt UI](../integrations/plugins#nuxt-ui). Il est préinstallé dans le modèle **Nuxt project**. Sinon, ouvrez le workspace **Libraries** (au-dessus de l'Explorer), puis **Install plugins**, sélectionnez **Nuxt UI** et cliquez sur **Install plugin**.

Dans l'**explorateur** (en haut à gauche), faites un clic droit sur le dossier **Root**, puis **New** > **Page**. Nommez-la `Home`.

La page s'ouvre en mode **Builder** : le canevas au milieu, l'**arborescence de mise en page** en bas à gauche et l'**inspecteur** à droite.

## 2. Ajouter un bouton

1. Dans l'arborescence, cliquez sur le bouton **liste** sous le **Block** racine, puis choisissez **Nuxt UI** > **Element** > **Button**. Le bouton est ajouté et sélectionné.
2. Dans le panneau **Element** de l'inspecteur, réglez **Name** sur `Hello button`.
3. Dans le panneau **Properties**, réglez **label** sur `Say hello`.

<DImage
:src="AddNuxtButton" :width="1280" :height="720"
alt="Liste des éléments de l'arborescence ouverte sur Nuxt UI, Element, Button"
/>

Voir [Builder](../interface/builder) pour les autres façons d'insérer des éléments.

## 3. Ajouter un événement Click

Sélectionnez à nouveau `Hello button`. Dans le panneau **Events** de l'inspecteur, cliquez sur **+** et choisissez **Click**.

<DImage
:src="AddEvent" :width="1280" :height="720"
alt="Panneau Events de Hello button avec la liste des événements disponibles"
/>

## 4. Ouvrir la vue Logic

Cliquez sur **Edit logic** à côté de l'événement. La vue principale passe en mode **Logic** et affiche le nœud `On Click (Hello button)`. Tout ce qui est connecté à sa sortie d'exécution s'exécute quand on clique sur le bouton.

## 5. Connecter un nœud Log

1. Faites un clic droit sur le graphe et cherchez `log`. Choisissez **Log**, dans la catégorie **Debug**.
2. Tirez un fil depuis la sortie d'exécution (l'ancrage carré) de `On Click (Hello button)` jusqu'à l'entrée d'exécution de **Log**.
3. Tapez `Hello!` dans l'entrée **object** de **Log**.

<DImage
:src="ClickLogGraph" :width="1280" :height="720"
alt="On Click (Hello button) connecté à un nœud Log avec la valeur Hello!"
/>

## Essayez

Passez en mode **Preview** et cliquez sur **Say hello**. `"Hello!"` apparaît dans la **console** en bas de l'éditeur, ainsi que dans la console de votre navigateur.

<DImage
:src="PreviewConsole" :width="1280" :height="720"
alt="Mode Preview : la console affiche Hello! après un clic sur le bouton"
/>

## Aller plus loin

- **Afficher la position de la souris** : connectez la sortie **Mouse Event** du nœud d'événement à un nœud `Get Property` avec le chemin `clientX`, et affichez sa valeur. Voir [Événements](../interface/events) pour tous les événements et leurs sorties.
- **Compter les clics** : ajoutez une variable `count` à la page, puis enchaînez `Set count` (avec `count + 1`) avant **Log**. C'est l'exemple du [Graphe](../visual-scripting/graph#exemple-de-logique-dans-le-graphe). Pour partager le compteur entre les pages, utilisez un [store](../logic/store).
- **Afficher la valeur** : ajoutez un élément **Variable** lié à `count` pour la voir se mettre à jour sur la page.
