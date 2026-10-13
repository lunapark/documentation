---
description: "Installez des packages NPM dans un projet Luna Park et utilisez leurs fonctions comme nœuds logiques."
---

<script setup lang="ts">
import Workspace from '/assets/images/integrations/npm/workspace.png';
import {faShelves, faDownload} from "@fortawesome/pro-solid-svg-icons";
</script>

# NPM

Luna Park peut utiliser les packages du registre [npm](https://www.npmjs.com/), la plus grande bibliothèque de code JavaScript. Leurs fonctions deviennent des nœuds logiques, et les packages de composants Vue ajoutent des composants à l'éditeur.

## Installer un package

1. Ouvrez le [workspace](../fundamentals/interface/editor#le-workspace) <LIcon :icon="faShelves" /> **Libraries** et allez à la section **Packages**.
2. Cherchez un package par son nom dans le champ **Search NPM packages...**. Chaque résultat affiche ses téléchargements mensuels et sa dernière version.
3. Cliquez sur le bouton <LIcon :icon="faDownload" /> d'un résultat pour l'analyser et l'installer directement.

Pour examiner un package d'abord, cliquez dessus : ses détails (README) s'ouvrent sur le côté. Cliquez sur **Scan package** : Luna Park lit ses définitions de types pour trouver ce qu'il exporte. Cliquez ensuite sur **Install**.

<DImage
:src="Workspace" :width="1280" :height="720"
alt="Section Packages du workspace Libraries avec des résultats de recherche, et les détails du package sélectionné"
/>

La liste **Installed** affiche les packages du projet.

::: tip Sous-chemins
Certains packages exposent des fonctionnalités sous un sous-chemin (par exemple `date-fns/locale`). Une fois le package installé, sélectionnez-le et ouvrez le menu `...` à côté de **Package installed** et saisissez le nom du **Child package**.
:::

## Utiliser un package

Chaque fonction exportée devient un nœud, que vous trouvez dans la recherche de nœuds sous le nom du package (`package/<nom>/...`). Les entrées et sorties suivent les types TypeScript de la fonction.

Les packages qui exportent des composants Vue ajoutent aussi ces composants à l'éditeur.

## Fonctionnement

- **Dans l'éditeur**, les packages sont chargés depuis le CDN [esm.sh](https://esm.sh).
- **Dans l'application exportée**, ils sont ajoutés au `package.json` du projet et installés comme n'importe quelle dépendance.

::: warning
Choisissez des packages qui fournissent des types TypeScript et qui fonctionnent dans le navigateur : sans types, Luna Park ne peut pas savoir quels nœuds créer, et l'éditeur exécute votre logique dans le navigateur.
:::

Pour retirer un package, cliquez sur son icône de corbeille dans la liste **Installed**, ou sélectionnez-le et cliquez sur **Uninstall**.
