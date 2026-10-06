---
description: "Partagez un état réactif entre pages et composants avec les stores de Luna Park, éventuellement enregistrés dans le navigateur."
---

# Store

Un **store** contient un état global : des données partagées par toutes les pages et tous les composants de votre application (l'utilisateur connecté, un panier, un thème...). Il est réactif : quand une valeur change, tous les éléments qui l'affichent se mettent à jour.

::: info Variable ou store ?
Une [variable](./variables) appartient à un composant. Un store est global. Utilisez un store quand plusieurs composants ont besoin des mêmes données.
:::

## Créer un store

Dans l'**Explorer**, faites un clic droit et choisissez **New > Store**. L'éditeur du store affiche deux vues :

- **Default** : la valeur initiale du store ;
- **Preview** : sa valeur en direct pendant que vous testez l'application.

## Réglages du store

Sélectionnez le store pour modifier ses réglages dans l'**Inspector** :

| Réglage | Description |
|---|---|
| **Type** | Où la valeur est conservée (voir ci-dessous). |
| **Schema** | La forme du store. C'est toujours un objet, avec des champs typés. |
| Reset this store | Remet la valeur par défaut. |

| Type | Comportement |
|---|---|
| **Memory** | La valeur est en mémoire et se réinitialise au rechargement de la page. |
| **Session** | La valeur est enregistrée dans le stockage de session du navigateur et survit aux rechargements jusqu'à la fermeture de l'onglet. |
| **Local** | La valeur est enregistrée dans le stockage local du navigateur et survit aux redémarrages. |

::: tip
Utilisez **Local** pour les préférences de l'utilisateur (thème, langue) et **Memory** pour les données temporaires.
:::

## Utiliser un store

- **Dans une mise en page** : liez n'importe quel texte ou propriété à `stores.<store>.<champ>`, par exemple `{{stores.theme.darkMode}}`, ou une condition comme `stores.theme.darkMode`.
- **Dans la logique** : utilisez le nœud **Get** du store pour le lire, et modifiez ses champs comme n'importe quel objet. Un nœud **Reset** restaure la valeur par défaut.

## Fonctions du store

Un store peut contenir des [fonctions](./scripts#fonctions), listées dans le panneau des options. Utilisez-les pour regrouper les opérations sur le store (ajouter au panier, vider le panier...) en un seul endroit. Un store n'a jamais de logique principale.

## Réinitialiser les stores

Le bouton **Stores** de la barre supérieure permet de :

- réinitialiser tous les stores à leur valeur par défaut (**Reset all**) ;
- effacer (**Clear**) les valeurs enregistrées dans le navigateur par les stores Session et Local.
