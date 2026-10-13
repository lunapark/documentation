---
description: "Réagissez aux clics, aux touches et aux mouvements de souris sur les éléments de mise en page : ajoutez un événement depuis le panneau Events, utilisez son nœud dans le graphe, passez des paramètres et supprimez-le."
---

<script setup lang="ts">
import AddEvent from '/assets/images/layout/events/add-event.png';
import ClickEvent from '/assets/images/layout/events/click-event.png';
import EventNode from '/assets/images/layout/events/event-node.png';
</script>

# Événements

Les événements démarrent un [graphe](../visual-scripting/graph) quand quelque chose se produit. Certains existent dans chaque composant (`On Mounted`, `On Unmounted`, `On Load`, voir [Bibliothèques de nœuds](../visual-scripting/libraries#evenements)). Cette page couvre les événements des **éléments de mise en page** : l'utilisateur clique sur un bouton, tape dans un champ, survole une carte...

## Ajouter un événement à un élément

1. Ouvrez une page ou un composant en mode **Builder** (voir [Builder](./builder)).
2. Sélectionnez l'élément dans le canevas ou dans l'arborescence.
3. Dans l'inspecteur, cliquez sur le **+** du panneau **Events** et choisissez un événement, par exemple **Click**.

<DImage
:src="AddEvent" :width="1280" :height="720"
alt="Panneau Events d'un bouton avec la liste des événements disponibles : Click, Key Down, Mouse Enter, Mouse Leave, Mouse Down, Mouse Up, Mouse Move, Wheel"
/>

L'événement est listé dans le panneau. Cliquez sur **Edit logic** pour ouvrir la vue **Logic** du même fichier, centrée sur son nœud d'événement.

<DImage
:src="ClickEvent" :width="1280" :height="720"
alt="Événement Click ajouté dans le panneau Events, avec le bouton Edit logic"
/>

## Le nœud d'événement

Ajouter un événement crée un nœud dans la logique principale du fichier, nommé `On <événement> (<nom de l'élément>)`, par exemple `On Click (Hello button)`. Nommez vos éléments dans le panneau **Element** pour distinguer les nœuds d'événement.

<DImage
:src="EventNode" :width="1280" :height="720"
alt="Nœud d'événement On Click (Hello button) avec une sortie d'exécution et une sortie Mouse Event"
/>

Le nœud a :

- une **sortie d'exécution** : connectez-la au premier nœud à exécuter quand l'événement se déclenche ;
- une **sortie d'événement** (`Mouse Event`, `Keyboard Event`, `Wheel Event`) avec les détails de l'événement ;
- une sortie par [paramètre](#parametres-d-evenement) de l'événement.

Chaque nœud d'événement n'existe qu'une fois par élément et par événement, et ne peut pas être supprimé depuis le graphe : retirez plutôt l'événement depuis le panneau **Events**. Double-cliquez sur le nœud pour sélectionner son élément dans le builder.

Dans l'inspecteur du nœud, l'option **Async** exécute l'événement de façon asynchrone, pour que les nœuds suivants puissent attendre des promesses (`Fetch`, requêtes en base de données...).

## Événements disponibles

| Événement | Déclenché quand | Sortie d'événement |
|---|---|---|
| **Click** | L'utilisateur clique sur l'élément. | Mouse Event |
| **Key Down** | L'utilisateur appuie sur une touche pendant que l'élément a le focus (un champ, un bouton...). | Keyboard Event |
| **Mouse Enter** | Le pointeur entre dans l'élément. | Mouse Event |
| **Mouse Leave** | Le pointeur quitte l'élément. | Mouse Event |
| **Mouse Down** | Un bouton de la souris est enfoncé au-dessus de l'élément. | Mouse Event |
| **Mouse Up** | Un bouton de la souris est relâché au-dessus de l'élément. | Mouse Event |
| **Mouse Move** | Le pointeur bouge au-dessus de l'élément. | Mouse Event |
| **Wheel** | La molette de la souris tourne au-dessus de l'élément. | Wheel Event |

Les [composants](./components) de votre projet et les [composants de plugins](./builder#composants-de-plugins) ajoutent leurs propres événements à la liste. Par exemple, un composant qui déclare un événement `Update` dans sa section **Events** propose **Update** dans le panneau Events de chaque élément qui l'utilise. Sa valeur est la sortie d'événement.

Les éléments **Slot** et **Template** n'ont pas de panneau Events.

### Sorties d'événement

Connectez la sortie d'événement à un nœud `Spread` pour obtenir une sortie par propriété, ou à `Get Property` pour en lire une seule :

| Sortie d'événement | Propriétés principales |
|---|---|
| **Mouse Event** | `clientX`, `clientY`, `offsetX`, `offsetY`, `pageX`, `pageY`, `button`, `altKey`, `ctrlKey`, `shiftKey`, `metaKey` |
| **Keyboard Event** | `key` (`"a"`, `"Enter"`...), `code` (`"KeyA"`), `repeat`, `altKey`, `ctrlKey`, `shiftKey`, `metaKey` |
| **Wheel Event** | `deltaX`, `deltaY`, `deltaZ`, `deltaMode` |

Toutes ont aussi `target` (l'élément HTML) et `preventDefault`, pour annuler le comportement par défaut du navigateur (envoi d'un formulaire, défilement...).

## Paramètres d'événement

Cliquez sur le **+** à côté de **Edit logic** pour ajouter un **paramètre** à un événement. Donnez-lui un nom et une valeur : une constante, ou une valeur liée à une variable du composant. Le nœud d'événement obtient une sortie par paramètre, avec sa valeur au moment où l'événement s'est déclenché.

Les paramètres sont surtout utiles dans les éléments répétés.

## Événements dans des éléments répétés

Quand un élément est répété, avec une **Loop** dans son panneau **Rendering** ou à l'intérieur d'un [template](./templates) **For**, l'événement se déclenche pour l'occurrence avec laquelle l'utilisateur a interagi. Il n'y a toujours qu'un seul nœud d'événement.

Pour savoir quel élément a été cliqué, ajoutez un paramètre à l'événement et liez-le à l'élément de la boucle : `<nom de l'élément>[].value` pour l'élément, ou `<nom de l'élément>[].index` pour sa position (`Template[].value` dans un template For). La sortie du paramètre contient alors l'élément cliqué.

## Supprimer un événement

Cliquez sur le bouton de suppression de l'événement dans le panneau **Events**. Son nœud d'événement est retiré du graphe, avec ses fils. Supprimer l'élément supprime tous ses événements.

Pour renommer un nœud d'événement, renommez son élément.

## Et ensuite

- Suivez [Votre première interaction](../getting-started/first-interaction) pour un exemple complet : un bouton qui affiche un message dans la console.
- Apprenez à connecter des nœuds dans [Le Graphe](../visual-scripting/graph).
- Mettez à jour l'interface depuis un événement avec les [variables](../logic/variables) et les [stores](../logic/store).
