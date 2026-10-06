---
description: "Installez des packages NPM dans un projet Luna Park et utilisez leurs fonctions comme nœuds logiques."
---

# NPM

Luna Park peut utiliser les packages du registre [npm](https://www.npmjs.com/), la plus grande bibliothèque de code JavaScript. Leurs fonctions deviennent des nœuds logiques, et les packages de composants Vue ajoutent des composants à l'éditeur.

## Installer un package

1. Cliquez sur **Libraries** dans la barre supérieure, puis sur **Install packages**.
2. Dans l'onglet **Packages**, cherchez un package par son nom.
3. Sélectionnez-le et cliquez sur **Scan package** : Luna Park lit ses définitions de types pour trouver ce qu'il exporte.
4. Cliquez sur **Install**.

L'onglet **Installed** liste les packages du projet.

::: tip Sous-chemins
Certains packages exposent des fonctionnalités sous un sous-chemin (par exemple `date-fns/locale`). Une fois le package installé, ouvrez le menu `...` à côté de **Package installed** et saisissez le nom du **Child package**.
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

Pour retirer un package, ouvrez-le et cliquez sur **Uninstall**.
