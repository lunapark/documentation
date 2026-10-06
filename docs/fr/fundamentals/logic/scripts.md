---
description: "Organisez la logique réutilisable de Luna Park avec les scripts, les fonctions, les fonctions en code, les fichiers de configuration et les fichiers de types."
---

# Scripts et fonctions

Quand votre application grandit, vous voudrez réutiliser de la logique à plusieurs endroits. Luna Park propose des **fonctions**, regroupées dans des **scripts**, ainsi que des fichiers de **configuration** et de **types** pour les valeurs et les formes de données partagées.

## Fonctions

Une fonction est un graphe avec des **entrées** et des **sorties**, comme une fonction en code. À l'intérieur, un nœud **Input** expose ses paramètres et un ou plusieurs nœuds **Output** renvoient ses résultats.

Tout fichier de logique peut contenir des fonctions : composants, scripts, stores, routes et crons. Créez-en une avec le bouton **Create a new function** du panneau des options (en bas à gauche), puis double-cliquez dessus pour modifier son graphe.

Une fois créée, une fonction devient un nœud : glissez-la dans un graphe pour l'appeler.

### Réglages d'une fonction

Sélectionnez une fonction pour la modifier dans l'**Inspector** :

| Réglage | Description |
|---|---|
| **Name** | Le nom de la fonction et de son nœud. |
| **Type** | **Pure** : un graphe de script visuel (par défaut). **Code** : écrivez la fonction en TypeScript. |
| **Export** | Rend la fonction appelable depuis d'autres fichiers. |
| **Async** | Autorise les nœuds asynchrones (fetch, base de données, sleep...) dans la fonction. |

::: tip
Quand un graphe devient long, sélectionnez un groupe de nœuds, faites un clic droit et choisissez **Collapse to function** pour les transformer en fonction.
:::

### Fonctions en code

Avec le type **Code**, le graphe est remplacé par un éditeur TypeScript. Les lignes qui déclarent la signature de la fonction sont verrouillées : elles suivent les entrées et sorties que vous définissez. Écrivez le corps comme n'importe quelle fonction TypeScript.

Utilisez les fonctions en code pour les algorithmes plus simples à écrire qu'à dessiner, ou pour appeler directement les API du navigateur.

### Variables locales

Le panneau des options liste aussi les variables locales du fichier (**Local Variables**). Créez-en une avec **Create a new local variable**. Les variables locales sont partagées par toutes les fonctions du fichier, et chacune a ses nœuds **Get** et **Set**.

## Scripts

Un **script** est un fichier qui ne contient que de la logique : des fonctions et des variables locales, sans interface. Créez-en un avec **New > Script** dans l'Explorer.

Réglez son **Scope** dans l'Inspector pour choisir où ses fonctions s'exécutent :

- **Frontend** : dans le navigateur (utilitaires d'interface, mise en forme...).
- **Backend** : sur le serveur, pour être appelées depuis des [routes](../data/routes) et des [crons](../data/cron).
- **Shared** : des deux côtés (validation, calculs...).

Voir [Fichiers du projet](../project-files#scopes) pour toutes les règles de scope. Cochez **Export** sur les fonctions à appeler depuis d'autres fichiers.

::: info
Seules les fonctions d'un script font partie de votre application. Utilisez le graphe principal du script pour les essayer dans l'éditeur.
:::

## Fichiers de configuration

Un fichier de **configuration** stocke des valeurs statiques : une URL d'API, une option activable, une liste de pays... Créez-en un avec **New > Configuration**, définissez son schéma et remplissez ses valeurs. Un nœud **Get** le lit dans la logique.

Son **Scope** fonctionne comme celui d'un script. Une configuration **Backend** n'est incluse que dans le code serveur : c'est le bon endroit pour les clés d'API et autres secrets.

## Fichiers de types

Un fichier de **type** définit des types de données réutilisables (une `Address`, une `Order`...). Créez-en un avec **New > Type**.

Les types s'utilisent partout où un type est attendu : variables, entrées de fonctions, schémas de stores, entrées et sorties de routes. Vous pouvez aussi référencer une ligne de base de données ou le body et la réponse d'une route comme type. Définir une forme une seule fois garde le frontend et le backend synchronisés.
