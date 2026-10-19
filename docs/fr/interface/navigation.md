---
description: "Donner un chemin d'URL à chaque page, utiliser des segments dynamiques comme /product/:id, et naviguer entre les pages avec un élément Lien ou le nœud Navigate."
---

<script setup lang="ts">
import PagePath from '/assets/images/layout/navigation/page-path.png';
import NavigateNode from '/assets/images/layout/navigation/navigate-node.png';
</script>

# Pages et navigation

Chaque **page** de votre application est accessible par son propre chemin d'URL. Cette page explique comment définir ce chemin, lire des parties de l'URL et passer d'une page à une autre.

## Chemin de la page

Sélectionnez un fichier page et regardez le panneau **Component** de l'inspecteur : le champ **Path** définit l'URL de la page, par exemple `about` pour `/about`. Le `/` initial est ajouté automatiquement.

<DImage
:src="PagePath" :width="1280" :height="720"
alt="Panneau Component d'une page avec son champ Path défini à about"
/>

Les nouvelles pages commencent avec le chemin `/`. Donnez à chaque page son propre chemin : quand deux pages partagent le même, le champ affiche **Path already used by** avec le nom des autres pages, et une seule d'entre elles est accessible.

La page dont le chemin est `/` est la page d'accueil de votre application.

::: tip Transformer un composant en page
Le champ **Path** n'apparaît qu'une fois le type du fichier passé à **Page**. Voir [Composants](./components#pages).
:::

## Segments dynamiques

Un segment de chemin commençant par `:` accepte n'importe quelle valeur. Une page à `/product/:id` s'ouvre avec `/product/12`, `/product/shoes`...

Lisez la valeur dans le graphe avec le nœud `Get Router` : sa sortie `currentRoute` contient `params`, avec une entrée par segment dynamique (ici `params.id`). `currentRoute` donne aussi le `path` courant et les paramètres `query` (`?sort=price`).

`/product/:id` et `/product/:slug` sont le même chemin : seule la position du segment dynamique compte.

## Liens

Pour naviguer quand l'utilisateur clique sur un contenu, insérez un élément **Lien** (voir [Builder](./builder)) et renseignez son adresse :

- Un chemin de votre application, comme `/about` ou `/product/12`, ouvre cette page sans recharger l'application.
- Une URL complète commençant par `http://` ou `https://` ouvre un site externe, dans un nouvel onglet par défaut.

Placez n'importe quel contenu dans le lien : du texte, une image, une carte entière.

## Naviguer depuis le graphe

Le nœud `Navigate` (cherchez `Navigate` dans le graphe) ouvre une autre page depuis un graphe, par exemple après l'enregistrement d'un formulaire ou au clic sur un bouton de plugin :

1. Ajoutez un événement **Click** sur le bouton (voir [Événements](./events)), puis cliquez sur **Edit logic**.
2. Ajoutez un nœud `Navigate` et reliez-y le nœud d'événement.
3. Tapez la destination dans son entrée **path**, par exemple `/about`, ou reliez une valeur construite dans le graphe, comme `/product/` suivi d'un identifiant.

<DImage
:src="NavigateNode" :width="1280" :height="720"
alt="Graphe avec un événement On Click (About button) relié à un nœud Navigate dont le chemin est /about, et l'inspecteur avec ses entrées optionnelles query et hash"
/>

`Navigate` a aussi deux entrées optionnelles :

| Entrée | Description |
|---|---|
| **query** | Paramètres ajoutés après `?`. Ajoutez une entrée par paramètre. |
| **hash** | Un fragment ajouté après `#`, comme `#pricing`. |

## Mode d'historique

L'apparence des chemins dans la barre d'adresse (`/about`, `/#/about` ou masqués) dépend du **mode d'historique** défini dans les [paramètres web](../deployment/web). Les chemins de page, les liens et `Navigate` s'écrivent de la même façon dans tous les modes.
