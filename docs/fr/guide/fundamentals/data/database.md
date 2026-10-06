---
description: "Utilisez la base PostgreSQL intégrée à Luna Park pour créer des tables, stocker des données et exécuter des requêtes."
---

<script setup lang="ts">
import Panel from "/assets/images/data/panel.png";
import FindNode from "/assets/images/data/find-node.png";
import QueryBuilderGraph from "/assets/images/data/query-builder-graph.png";
import ArticlesTable from "/assets/images/data/articles-table.png";
</script>

# Base de données

Luna Park intègre une base de données SQL dans l'éditeur. Pas de serveur, pas de configuration : vous créez des tables, vous y stockez des lignes, vous les interrogez depuis le graphe.

::: info PostgreSQL partout
Dans l'éditeur, la base est une instance **PGlite** (PostgreSQL compilé en WebAssembly) qui tourne dans votre navigateur. Dans l'application exportée, les mêmes tables tournent sur un vrai serveur **PostgreSQL**, défini par la variable `DATABASE_URL` (voir [Auto-hébergement](../../deployment/deployment)). Les lignes créées dans l'éditeur sont insérées comme données initiales au premier lancement.
:::

## Tables

Chaque fichier **Database** est une table. Créez-en une dans l'**Explorer** avec **New > Database**, puis ouvrez-la pour :

- définir ses colonnes (nom et type) dans la section **Columns** de l'Inspector ;
- ajouter, modifier, supprimer et rechercher des lignes ;
- inspecter le contenu en temps réel.

Les colonnes `id`, `created_at` et `updated_at` sont ajoutées automatiquement à chaque table. `id` est un UUID.

<DImage :src="Panel" alt="Éditeur de base de données avec une table et ses colonnes" />

### Types de colonnes

| Type | Stocké en |
|---|---|
| Texte | `text` |
| Nombre | `numeric` |
| Booléen | `bool` |
| Date | `timestamptz` |
| Objet | `jsonb` |
| Tableau | un tableau PostgreSQL |
| Référence à une autre table | `uuid` (clé étrangère) |

### Contraintes

La section **Constraints** de l'Inspector définit, pour chaque colonne :

| Contrainte | Effet |
|---|---|
| **Required** | La colonne ne peut pas être vide. |
| **Unique** | Deux lignes ne peuvent pas avoir la même valeur. |
| **Index** | Accélère les recherches et les tris sur cette colonne. |

Une colonne qui référence une autre table définit aussi ce qui se passe quand la ligne référencée est supprimée : **Block** (par défaut), **Restrict**, **Delete rows too** ou **Set to empty**.

## Interroger la base

Les nodes de base de données s'utilisent **dans la logique backend** : [routes](./routes), [crons](./cron) et [scripts](../logic/scripts) backend. L'interface appelle une route, qui exécute la requête et renvoie le résultat.

### Nodes spécialisés

Luna Park fournit un node par opération courante. La configuration est visuelle (table, paramètres, filtres), le SQL est généré derrière.

| Catégorie | Nodes |
|---|---|
| **Lecture** | `DB Find`, `DB Find By Id` |
| **Écriture** | `DB Insert`, `DB Update`, `DB Update By Id` |
| **Suppression** | `DB Delete`, `DB Delete By Id` |
| **Transaction** | `DB Transaction` |

Les paramètres se branchent sur les ancrages d'entrée : un id venant d'une variable, une valeur de filtre venant d'un input, etc.

<DImage :src="FindNode" alt="Node DB Find configuré sur une table, avec ses paramètres et son ancrage de sortie" />

`DB Transaction` exécute d'un coup les opérations branchées sur sa sortie **Run** : si l'une échoue, aucune n'est enregistrée. **Then** s'exécute une fois les modifications enregistrées.

### Composer une requête

Pour construire des requêtes plus précises, Luna Park fournit des nodes qui s'assemblent entre eux : chaque node ajoute une clause SQL et expose une sortie **Query** que le suivant consomme.

Le point de départ est toujours `DB From`, qui sélectionne la table. On branche ensuite les nodes voulus, puis un node d'exécution.

| Node | Rôle |
|---|---|
| `DB From` | Sélectionne la table source. |
| `DB Select` | Choisit les colonnes renvoyées (toutes par défaut). |
| `DB Where` | Filtre les lignes selon une ou plusieurs conditions. |
| `DB Where Condition` | Compare une colonne à une valeur ou à une autre colonne. |
| `DB Where Conditions` | Combine des conditions avec `AND` ou `OR`. |
| `DB Join` / `DB Join Condition` | Joint une autre table (`inner`, `left`, `right`, `full`). |
| `DB Order` / `DB Order Direction` | Trie les résultats. |
| `DB Group By` | Regroupe les lignes par valeur. |
| `DB Aggregate` | Calcule `count`, `sum`, `avg`, `min` ou `max`, éventuellement sur des valeurs distinctes. |

Nodes d'exécution :

| Node | Rôle |
|---|---|
| `DB Query Select` | Exécute la requête et renvoie les lignes. |
| `DB Query Update` | Met à jour les lignes correspondantes. |
| `DB Query Delete` | Supprime les lignes correspondantes. |
| `DB Query Explain` | Montre comment PostgreSQL prévoit d'exécuter la requête. |

Comparaisons disponibles : égal, différent, supérieur/inférieur (ou égal), in, is null, like, ilike, contains.

Par exemple, pour récupérer les utilisateurs de moins de 30 ans : un `DB From` pointe sur la table, un `DB Where Condition` définit `age < 30`, un `DB Where` reçoit la query et la condition, et un `DB Query Select` exécute l'ensemble.

<DImage :src="QueryBuilderGraph" alt="Graphe avec DB From, DB Where Condition, DB Where et DB Query Select chainés" />

::: info Aperçu de la requête
Pour voir le SQL réellement exécuté, sélectionnez le node `DB Query Select` et cliquez sur **Preview** dans sa config.
:::

## Préparer la table `articles`

Pour suivre l'exemple guidé de la page [Routes](./routes), créez une table `articles` :

1. Créez un fichier **Database** nommé `articles`.
2. Ajoutez une colonne `title` (texte).
3. Insérez quelques lignes de test.

<DImage :src="ArticlesTable" alt="Table articles avec ses colonnes et quelques lignes d'exemple" />

La suite (exposer ces articles via une route et les afficher dans l'interface) est détaillée sur la page [Routes](./routes).
