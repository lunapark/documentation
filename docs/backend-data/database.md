---
description: "Use Luna Park's built-in PostgreSQL database to create tables, store data, and run queries."
---

<script setup lang="ts">
import EditRowVideo from '/assets/images/data/edit-row.webm';
import Constraints from '/assets/images/data/constraints.png';
import Rows from '/assets/images/data/rows.png';
import FindNode from "/assets/images/data/find-node.png";
import QueryBuilderGraph from "/assets/images/data/query-builder-graph.png";
import ArticlesTable from "/assets/images/data/articles-table.png";
</script>

# Database

Luna Park ships a SQL database inside the editor. No server, no setup: you create tables, store rows, and query them from the graph.

::: info PostgreSQL everywhere
In the editor, the database is a **PGlite** instance (PostgreSQL compiled to WebAssembly) running in your browser. In the exported app, the same tables run on a real **PostgreSQL** server, set with the `DATABASE_URL` variable (see [Self-hosting](../deployment/deployment)). The rows you create in the editor are inserted as initial data when the table is created on the server. Later changes to the rows in the editor don't reach an existing production table.
:::

## Tables

Each **Database** file is a table. Create one in the **Explorer** with **New > Database**, then open it to define its columns (name and type) in the **Columns** section of the Inspector, and [edit its rows](#editing-rows) in the main view.

The `id`, `created_at`, and `updated_at` columns are added automatically to every table and can't be edited. `id` is a UUID, and `updated_at` is refreshed on every update.

In the editor, the rows are saved in the Database file, with the project. Rows written by logic you run in the editor (a route test, a cron run) are saved too.


### Column types

| Type | Stored as |
|---|---|
| **String** | `text` |
| **Number** | `numeric` |
| **Boolean** | `bool` |
| **Interface** > **Date** | `timestamptz` |
| **Object**, **Record** | `jsonb` |
| **Array** | a PostgreSQL array of its item type |
| **Foreign Key** | `uuid`: a link to a row of another table, picked in the dropdown next to the type |

Other types (Union, Unknown...) are stored as `text`.

Changing the type of a column converts its values. Values that can't be converted are emptied.

### Constraints

The **Constraints** section of the Inspector sets, for each column:

| Constraint | Effect |
|---|---|
| **Required** | The column can't be empty. |
| **Unique** | Two rows can't share the same value. |
| **Index** | Speeds up filters and sorting on this column. |
| **Search** | Speeds up text search ([`DB Search`](#text-search), `LIKE`, `ILIKE`) on this column. Only for String columns. |

<DImage
  :src="Constraints" :width="1280" :height="720"
  alt="Constraints section of a products table: name is required and searchable, description searchable, price indexed"
/>

Turning **Required** on fills the empty values of existing rows with the default value of the type. When a constraint can't be applied (turning **Unique** on for a column with duplicates), the console shows an error and the constraint is skipped.

A **Foreign Key** column also has an **On delete** setting: what happens to the row when the row it links to is deleted.

| On delete | Effect |
|---|---|
| **Block** (default) | The linked row can't be deleted while this row points to it. |
| **Restrict** | Same as Block, but checked right away, even inside a transaction. |
| **Delete rows too** | This row is deleted together with the linked row. |
| **Set to empty** | This row is kept, and its link is emptied. Not available on a Required column. |

## Editing rows

Open a Database file to see its rows, the most recently updated first.

- **Add row** inserts a row with default values. A required Foreign Key is filled with the last updated row of the linked table, which must have at least one row.
- Double-click a row (or click its pencil) to edit it. `Enter` saves, `Esc` cancels. Object, Record, and Array values open a form, with a button to reset them to their default.
- The trash button deletes a row, without confirmation.
- **Search...** filters the rows on every column. `Esc` clears it.
- The pagination at the bottom shows 20, 50, or 100 rows per page.
- Ids and foreign keys are shown as a readable name. Click one to **Copy id**, or to go to the row in the linked table.
- Drag the edge of a column header to resize the column.

<DImage
  :src="Rows" :width="1280" :height="720"
  alt="Rows of a products table with Add row, the search field, and the pagination"
/>

<DImage
  :src="EditRowVideo" :width="1280" :height="720"
  alt="Double-clicking a row of the articles table, editing its title, and saving with Enter"
/>

## Querying the database

Database nodes are used **inside backend logic**: [routes](./routes), [crons](./cron), and backend [scripts](../logic/scripts). The interface calls a route, which runs the query and returns the result.

### Specialized nodes

Luna Park provides one node per common operation. Configuration is visual (table, parameters, filters), and the SQL is generated behind the scenes.

| Category | Nodes |
|---|---|
| **Read** | `DB Find`, `DB Find By Id` |
| **Write** | `DB Insert`, `DB Update`, `DB Update By Id` |
| **Delete** | `DB Delete`, `DB Delete By Id` |
| **Transaction** | `DB Transaction` |

Parameters plug into the input anchors: an id coming from a variable, a filter value coming from an input, etc.

<DImage :src="FindNode" :width="1280" :height="720" alt="DB Find node configured on a table, with its parameters and output anchor" />

`DB Transaction` runs the operations wired to its **Run** output all at once: if one fails, none is saved. **Then** runs after the changes are saved.

### Build a query

For more precise queries, Luna Park provides nodes that chain together: each node adds a SQL clause and exposes a **Query** output that the next one consumes.

The starting point is always `DB From`, which selects the table. You then plug in the nodes you need, and finish with an execution node.

| Node | Role |
|---|---|
| `DB From` | Selects the source table. |
| `DB Select` | Chooses the returned columns (all by default). See [Choosing columns](#choosing-columns). |
| `DB Where` | Filters rows with one or more conditions. |
| `DB Where Condition` | Compares a column with a value or another column. |
| `DB Where Conditions` | Combines conditions with `AND` or `OR`. |
| `DB Search` | Keeps the rows matching a text typed by the user. See [Text search](#text-search). |
| `DB Join` / `DB Join Condition` | Joins another table (`inner`, `left`, `right`, `full`). Give the join an **Alias** to join the same table twice (an author and an owner, both users). |
| `DB Order` / `DB Order Direction` | Sorts the results. |
| `DB Group By` | Groups rows by value. |
| `DB Aggregate` | Computes `count`, `sum`, `avg`, `min`, or `max` under an **Alias**. `count` can count **Distinct** values. |

Execution nodes:

| Node | Role |
|---|---|
| `DB Query Select` | Runs the query and returns the rows. **Limit** and **Offset** [paginate](#pagination) them. |
| `DB Query Update` | Updates the matching rows. |
| `DB Query Delete` | Deletes the matching rows. |
| `DB Query Explain` | Shows how PostgreSQL plans to run the query, to understand a slow query in the editor. |

`DB Query Update` and `DB Query Delete` only work on queries without joins, groups, or aggregates.

`DB Where Condition` compares a column with a value, or with another column when its **Type** config is `column`. The comparisons offered depend on the column type:

| Column type | Comparisons |
|---|---|
| Any | `=`, `≠`, `IS NULL`, `IS NOT NULL` |
| Number, String | `IN` (the target becomes a list) |
| Number, Date | `>`, `≥`, `<`, `≤` |
| String | `LIKE`, `ILIKE` (ignores case): `%` matches any text, `_` one character |
| Object | `@>` (contains) |

For example, to fetch users under 30: a `DB From` points to the table, a `DB Where Condition` defines `age < 30`, a `DB Where` receives the query and the condition, and a `DB Query Select` runs the whole thing.

<DImage :src="QueryBuilderGraph" :width="1280" :height="720" alt="Graph with DB From, DB Where Condition, DB Where, and DB Query Select chained together" />

::: info Query preview
To see the SQL that actually runs, select the `DB Query Select` node and turn on **Preview SQL** in its config. The SQL is shown under the node.
:::

### Choosing columns

`DB Select` lists its columns inside the node: click **Add columns** (once a query is linked) and check the ones to return. Each column has an alias field: the alias becomes the key of the column in the result. Give an alias to columns that have the same name in joined tables (two `id` columns, for example), or one value overwrites the other.

### Pagination

**Limit** and **Offset** on `DB Query Select` return one page of results: for page `page` with `limit` rows per page, set **Offset** to `(page - 1) * limit`. Sort the query with `DB Order` first, so the pages are stable. Leave them empty (or `0`) to return every row.

## Text search

`DB Search` filters a query with a text typed by the user, like a search box.

| Input | Description |
|---|---|
| **Query** | The query to filter. |
| **Term** | The text to search. Each word must be found in at least one of the columns. An empty term keeps every row. |
| **Fuzzy** | Also match words with small typos (`carousle` finds `Carousel`). Short words must be spelled almost right. |
| **Sort by relevance** | Put the best matches first, before the `DB Order` directions. On by default. |
| **Column 1...N** | The String columns to search in, joined tables included. Set how many in the **Number of columns** config. |

The search ignores case and accents. It is combined with the `DB Where` conditions of the query with `AND`.

Turn on the **Search** [constraint](#constraints) on the searched columns to keep the search fast on large tables.

::: info In production
Text search uses the `pg_trgm` and `unaccent` PostgreSQL extensions. The exported backend enables them at startup: the PostgreSQL server must provide them, and the database user must be allowed to create extensions. Otherwise, the server logs that text search is unavailable, and `DB Search` fails.
:::

## Preparing the `articles` table

To follow the guided example on the [Routes](./routes) page, create an `articles` table:

1. Create a **Database** file named `articles`.
2. Add a `title` column (String).
3. Insert a few test rows.

<DImage :src="ArticlesTable" :width="1280" :height="720" alt="articles table with its columns and a few example rows" />

The rest (exposing these articles through a route and rendering them in the interface) is covered on the [Routes](./routes) page.
