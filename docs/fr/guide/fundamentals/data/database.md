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

::: info pglite
La BDD est une instance **pglite** (Postgres compilé en WebAssembly). Tout le SQL standard de Postgres marche : types, contraintes, jointures, sous-requêtes, CTE.
:::

## Tables

Une table contient des lignes typées par colonnes. Le panneau **Database** permet de :

- créer une table et définir ses colonnes (nom, type, contraintes) ;
- ajouter, modifier ou supprimer des lignes à la main ;
- inspecter le contenu en temps réel.

Les colonnes `id`, `created_at` et `updated_at` sont ajoutées automatiquement à chaque table.

<DImage :src="Panel" alt="Panneau Database avec une table et ses colonnes affichées" />

## Interroger la base

Les nodes de base de données s'utilisent **dans le graphe d'une route** (voir [Routes](./routes)), pas directement dans le graphe d'un composant frontend. La route encapsule la requête et l'expose à l'interface.

### Nodes spécialisés

Luna Park fournit un node par opération SQL courante. La configuration est visuelle (table, paramètres, filtres), le SQL est généré derrière.

| Catégorie       | Nodes                                                |
|-----------------|------------------------------------------------------|
| **Lecture**     | `DB Find`, `DB Find by Id`, `DB Group By`, `DB Join` |
| **Écriture**    | `DB Insert`, `DB Update`                             |
| **Suppression** | `DB Delete`, `DB Delete by Id`                       |

Les paramètres se branchent sur les ancrages d'entrée : un id venant d'une variable, une valeur de filtre venant d'un input, etc.

<DImage :src="FindNode" alt="Node DB Find configuré sur une table, avec ses paramètres et son ancrage de sortie" />

### Composer une requête

Pour construire des requêtes plus précises, Luna Park fournit des nodes qui s'assemblent entre eux : chaque node représente une opération SQL et expose une sortie **Query** que le suivant peut consommer.

Le point de départ est toujours `DB From`, qui sélectionne la table. On branche ensuite les nodes voulus :

| Node | Rôle |
|---|---|
| `DB From` | Sélectionne la table source |
| `DB Where` | Filtre les lignes selon une ou plusieurs conditions |
| `DB Where Condition` | Définit une condition (champ, opérateur, valeur cible) |
| `DB Order` | Trie les résultats |
| `DB Group By` | Regroupe les lignes par valeur |
| `DB Join` | Joint une autre table |
| `DB Aggregate` | Calcule une agrégation (COUNT, SUM, AVG...) |
| `DB Create Query` | Combine plusieurs conditions avec un opérateur logique (`AND`, `OR`, `NOT`) |
| `DB Query Select` | Exécute la requête et retourne les résultats |

Par exemple, pour récupérer les utilisateurs de moins de 30 ans : un `DB From` pointe sur la table, un `DB Where Condition` définit `age < 30`, un `DB Where` reçoit la query et la condition, et un `DB Query Select` exécute l'ensemble.

<DImage :src="QueryBuilderGraph" alt="Graphe avec DB From, DB Where Condition, DB Where et DB Query Select chainés" />

::: info Aperçu de la requête
Pour voir le SQL réellement exécuté, sélectionnez le node `DB Query Select` et cliquez sur **Preview** dans sa config.
:::

## Préparer la table `articles`

Pour suivre l'exemple guidé de la page [Routes](./routes), créez une table `articles` :

1. Ouvrez le panneau **Database**.
2. Créez une table `articles` avec une colonne `title` (texte).
3. Insérez quelques lignes de test.

<DImage :src="ArticlesTable" alt="Table articles avec ses colonnes et quelques lignes d'exemple" />

La suite (exposer ces articles via une route et les afficher dans l'interface) est détaillée sur la page [Routes](./routes).
