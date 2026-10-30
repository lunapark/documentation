---
description: "Utilisez la base PostgreSQL intégrée à Luna Park pour créer des tables, stocker des données et exécuter des requêtes."
---

<script setup lang="ts">
import Constraints from '/assets/images/data/constraints.png';
import Rows from '/assets/images/data/rows.png';
import Panel from "/assets/images/data/panel.png";
import FindNode from "/assets/images/data/find-node.png";
import QueryBuilderGraph from "/assets/images/data/query-builder-graph.png";
import ArticlesTable from "/assets/images/data/articles-table.png";
</script>

# Base de données

Luna Park intègre une base de données SQL dans l'éditeur. Pas de serveur, pas de configuration : vous créez des tables, vous y stockez des lignes, vous les interrogez depuis le graphe.

::: info PostgreSQL partout
Dans l'éditeur, la base est une instance **PGlite** (PostgreSQL compilé en WebAssembly) qui tourne dans votre navigateur. Dans l'application exportée, les mêmes tables tournent sur un vrai serveur **PostgreSQL**, défini par la variable `DATABASE_URL` (voir [Auto-hébergement](../deployment/deployment)). Les lignes créées dans l'éditeur sont insérées comme données initiales quand la table est créée sur le serveur. Les modifications ultérieures des lignes dans l'éditeur n'atteignent pas une table de production existante.
:::

## Tables

Chaque fichier **Database** est une table. Créez-en une dans l'**Explorer** avec **New > Database**, puis ouvrez-la pour définir ses colonnes (nom et type) dans la section **Columns** de l'Inspector, et [modifier ses lignes](#modifier-les-lignes) dans la vue principale.

Les colonnes `id`, `created_at` et `updated_at` sont ajoutées automatiquement à chaque table et ne sont pas modifiables. `id` est un UUID, et `updated_at` est mis à jour à chaque modification.

Dans l'éditeur, les lignes sont enregistrées dans le fichier Database, avec le projet. Les lignes écrites par la logique exécutée dans l'éditeur (un test de route, une exécution de cron) sont enregistrées aussi.

<DImage :src="Panel" :width="2560" :height="1440" alt="Éditeur de base de données avec une table et ses colonnes" />

### Types de colonnes

| Type | Stocké en |
|---|---|
| **String** | `text` |
| **Number** | `numeric` |
| **Boolean** | `bool` |
| **Interface** > **Date** | `timestamptz` |
| **Object**, **Record** | `jsonb` |
| **Array** | un tableau PostgreSQL de son type d'élément |
| **Foreign Key** | `uuid` : un lien vers une ligne d'une autre table, choisie dans la liste à côté du type |

Les autres types (Union, Unknown...) sont stockés en `text`.

Changer le type d'une colonne convertit ses valeurs. Les valeurs qui ne peuvent pas être converties sont vidées.

### Contraintes

La section **Constraints** de l'Inspector définit, pour chaque colonne :

| Contrainte | Effet |
|---|---|
| **Required** | La colonne ne peut pas être vide. |
| **Unique** | Deux lignes ne peuvent pas avoir la même valeur. |
| **Index** | Accélère les filtres et les tris sur cette colonne. |
| **Search** | Accélère la recherche de texte ([`DB Search`](#recherche-de-texte), `LIKE`, `ILIKE`) sur cette colonne. Uniquement pour les colonnes String. |

<DImage
  :src="Constraints" :width="1280" :height="720"
  alt="Section Constraints d'une table de produits : name requis et recherchable, description recherchable, price indexé"
/>

Activer **Required** remplit les valeurs vides des lignes existantes avec la valeur par défaut du type. Quand une contrainte ne peut pas être appliquée (activer **Unique** sur une colonne avec des doublons), la console affiche une erreur et la contrainte est ignorée.

Une colonne **Foreign Key** a aussi un réglage **On delete** : ce qui arrive à la ligne quand la ligne qu'elle lie est supprimée.

| On delete | Effet |
|---|---|
| **Block** (par défaut) | La ligne liée ne peut pas être supprimée tant que cette ligne pointe vers elle. |
| **Restrict** | Comme Block, mais vérifié immédiatement, même dans une transaction. |
| **Delete rows too** | Cette ligne est supprimée avec la ligne liée. |
| **Set to empty** | Cette ligne est conservée, et son lien est vidé. Indisponible sur une colonne Required. |

## Modifier les lignes

Ouvrez un fichier Database pour voir ses lignes, les plus récemment modifiées en premier.

- **Add row** insère une ligne avec les valeurs par défaut. Une Foreign Key requise reçoit la dernière ligne modifiée de la table liée, qui doit avoir au moins une ligne.
- Double-cliquez sur une ligne (ou cliquez sur son crayon) pour la modifier. `Entrée` enregistre, `Échap` annule. Les valeurs Object, Record et Array ouvrent un formulaire, avec un bouton pour les remettre à leur valeur par défaut.
- La corbeille supprime une ligne, sans confirmation.
- **Search...** filtre les lignes sur toutes les colonnes. `Échap` vide la recherche.
- La pagination en bas affiche 20, 50 ou 100 lignes par page.
- Les ids et les clés étrangères s'affichent sous forme de nom lisible. Cliquez dessus pour **Copy id**, ou pour aller à la ligne dans la table liée.
- Faites glisser le bord d'un en-tête de colonne pour la redimensionner.

<DImage
  :src="Rows" :width="1280" :height="720"
  alt="Lignes d'une table de produits avec Add row, le champ de recherche et la pagination"
/>

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

<DImage :src="FindNode" :width="2560" :height="1440" alt="Node DB Find configuré sur une table, avec ses paramètres et son ancrage de sortie" />

`DB Transaction` exécute d'un coup les opérations branchées sur sa sortie **Run** : si l'une échoue, aucune n'est enregistrée. **Then** s'exécute une fois les modifications enregistrées.

### Composer une requête

Pour construire des requêtes plus précises, Luna Park fournit des nodes qui s'assemblent entre eux : chaque node ajoute une clause SQL et expose une sortie **Query** que le suivant consomme.

Le point de départ est toujours `DB From`, qui sélectionne la table. On branche ensuite les nodes voulus, puis un node d'exécution.

| Node | Rôle |
|---|---|
| `DB From` | Sélectionne la table source. |
| `DB Select` | Choisit les colonnes renvoyées (toutes par défaut). Voir [Choisir les colonnes](#choisir-les-colonnes). |
| `DB Where` | Filtre les lignes selon une ou plusieurs conditions. |
| `DB Where Condition` | Compare une colonne à une valeur ou à une autre colonne. |
| `DB Where Conditions` | Combine des conditions avec `AND` ou `OR`. |
| `DB Search` | Garde les lignes qui correspondent à un texte saisi par l'utilisateur. Voir [Recherche de texte](#recherche-de-texte). |
| `DB Join` / `DB Join Condition` | Joint une autre table (`inner`, `left`, `right`, `full`). Donnez un **Alias** à la jointure pour joindre deux fois la même table (un auteur et un propriétaire, tous deux utilisateurs). |
| `DB Order` / `DB Order Direction` | Trie les résultats. |
| `DB Group By` | Regroupe les lignes par valeur. |
| `DB Aggregate` | Calcule `count`, `sum`, `avg`, `min` ou `max` sous un **Alias**. `count` peut compter les valeurs distinctes (**Distinct**). |

Nodes d'exécution :

| Node | Rôle |
|---|---|
| `DB Query Select` | Exécute la requête et renvoie les lignes. **Limit** et **Offset** les [paginent](#pagination). |
| `DB Query Update` | Met à jour les lignes correspondantes. |
| `DB Query Delete` | Supprime les lignes correspondantes. |
| `DB Query Explain` | Montre comment PostgreSQL prévoit d'exécuter la requête, pour comprendre une requête lente dans l'éditeur. |

`DB Query Update` et `DB Query Delete` ne fonctionnent que sur des requêtes sans jointure, regroupement ni agrégat.

`DB Where Condition` compare une colonne à une valeur, ou à une autre colonne quand sa config **Type** vaut `column`. Les comparaisons proposées dépendent du type de la colonne :

| Type de colonne | Comparaisons |
|---|---|
| Tous | `=`, `≠`, `IS NULL`, `IS NOT NULL` |
| Number, String | `IN` (la cible devient une liste) |
| Number, Date | `>`, `≥`, `<`, `≤` |
| String | `LIKE`, `ILIKE` (ignore la casse) : `%` correspond à n'importe quel texte, `_` à un caractère |
| Object | `@>` (contient) |

Par exemple, pour récupérer les utilisateurs de moins de 30 ans : un `DB From` pointe sur la table, un `DB Where Condition` définit `age < 30`, un `DB Where` reçoit la query et la condition, et un `DB Query Select` exécute l'ensemble.

<DImage :src="QueryBuilderGraph" :width="2560" :height="1440" alt="Graphe avec DB From, DB Where Condition, DB Where et DB Query Select chainés" />

::: info Aperçu de la requête
Pour voir le SQL réellement exécuté, sélectionnez le node `DB Query Select` et activez **Preview SQL** dans sa config. Le SQL s'affiche sous le node.
:::

### Choisir les colonnes

`DB Select` liste ses colonnes dans le node : cliquez sur **Add columns** (une fois une requête branchée) et cochez celles à renvoyer. Chaque colonne a un champ d'alias : l'alias devient la clé de la colonne dans le résultat. Donnez un alias aux colonnes qui portent le même nom dans des tables jointes (deux colonnes `id`, par exemple), sinon une valeur écrase l'autre.

### Pagination

**Limit** et **Offset** sur `DB Query Select` renvoient une page de résultats : pour la page `page` avec `limit` lignes par page, réglez **Offset** sur `(page - 1) * limit`. Triez d'abord la requête avec `DB Order`, pour que les pages soient stables. Laissez-les vides (ou à `0`) pour renvoyer toutes les lignes.

## Recherche de texte

`DB Search` filtre une requête avec un texte saisi par l'utilisateur, comme un champ de recherche.

| Entrée | Description |
|---|---|
| **Query** | La requête à filtrer. |
| **Term** | Le texte à rechercher. Chaque mot doit se trouver dans au moins une des colonnes. Un terme vide garde toutes les lignes. |
| **Fuzzy** | Trouve aussi les mots avec de petites fautes (`carousle` trouve `Carousel`). Les mots courts doivent être presque bien écrits. |
| **Sort by relevance** | Place les meilleurs résultats en premier, avant les directions de `DB Order`. Activé par défaut. |
| **Column 1...N** | Les colonnes String où chercher, tables jointes comprises. Réglez leur nombre dans la config **Number of columns**. |

La recherche ignore la casse et les accents. Elle se combine avec les conditions `DB Where` de la requête par un `AND`.

Activez la [contrainte](#contraintes) **Search** sur les colonnes recherchées pour garder une recherche rapide sur les grandes tables.

::: info En production
La recherche de texte utilise les extensions PostgreSQL `pg_trgm` et `unaccent`. Le backend exporté les active au démarrage : le serveur PostgreSQL doit les fournir, et l'utilisateur de la base doit avoir le droit de créer des extensions. Sinon, le serveur indique dans ses logs que la recherche de texte est indisponible, et `DB Search` échoue.
:::

## Préparer la table `articles`

Pour suivre l'exemple guidé de la page [Routes](./routes), créez une table `articles` :

1. Créez un fichier **Database** nommé `articles`.
2. Ajoutez une colonne `title` (String).
3. Insérez quelques lignes de test.

<DImage :src="ArticlesTable" :width="2560" :height="1440" alt="Table articles avec ses colonnes et quelques lignes d'exemple" />

La suite (exposer ces articles via une route et les afficher dans l'interface) est détaillée sur la page [Routes](./routes).
