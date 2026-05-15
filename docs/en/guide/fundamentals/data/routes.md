<script setup lang="ts">
import InputNode from "/assets/images/data/input-node.png";
import OutputNode from "/assets/images/data/output-node.png";
import GetArticlesGraph from "/assets/images/data/get-articles-graph.png";
import ArticlesVariable from "/assets/images/data/articles-variable.png";
import OnMountedGraph from "/assets/images/data/onmounted-graph.png";
import TemplateComponent from "/assets/images/data/template-component.png";
import TemplateTitle from "/assets/images/data/template-title.png";
</script>

# Routes

A **route** is an HTTP endpoint defined in Luna Park. It wraps server-side logic (database queries, computations, transformations) and exposes it to the interface, which can call it like a function.

## Creating a route

In the **Explorer**, right-click and pick **New > Route**. Two main properties:

- **HTTP method**: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.
- **Path**: the endpoint path. By default it matches the route name (a `get-articles` route is exposed at `/api/get-articles`).

## Anatomy of a route

A route's graph runs from an **input** node to an **output** node. In between, you wire the logic: DB nodes, operations, conditions, etc.

### Input

The input node exposes the data received by the route on four optional anchors:

- `headers`: HTTP headers (auth, content-type...).
- `body`: request body (typical for `POST`, `PUT`, `PATCH`).
- `query`: query string parameters (`?id=5&limit=10`).
- `params`: path parameters (`/articles/:id`).

You pull what you need and pass it to the downstream nodes. For example, an `id` coming from `params` can feed a `DB Find by Id`.

<DImage :src="InputNode" alt="Route input node with its headers/body/query/params anchors" />

### Output

The output node receives what the route sends back to the caller. Whatever you plug into its anchor becomes the HTTP response body.

<DImage :src="OutputNode" alt="Route output node wired to the result of a DB Find" />

## Calling a route from the interface

Every time you create a route, Luna Park automatically generates a node named after it (`get-articles`, `create-user`...). You use it directly inside a frontend component's graph: its output holds the response, ready to wire into the interface (for example a `Template` to loop over it).

## Guided example: display a list of articles

This example starts from an `articles` table (see [Database](./database#preparing-the-articles-table) to create it), creates a `get-articles` route that reads it, and renders the results in the interface.

### 1. Create the `get-articles` route

1. Create a route named `get-articles`.
2. In its properties, pick the `GET` method.
3. In the route's graph, add a **DB Find** node on the `articles` table.
4. Wire the **DB Find** output to the route output.
5. Set the output `Response` to an `Array` of `Object`.

<DImage :src="GetArticlesGraph" alt="get-articles route graph with the DB Find wired to the output" />

### 2. Call the route from the interface

1. In the page, create an `articles` variable typed as `Array` of `Object` with a `title` field (string). This way only the titles show up in the interface, without `id`, `created_at`, or `updated_at`.

   <DImage :src="ArticlesVariable" alt="Variables panel with the articles variable defined as Array of Object with the title field" />

2. In the graph, add an `On Mounted` node to trigger the call on page load, then add the `get-articles` node and wire its output to `Set articles`.

   <DImage :src="OnMountedGraph" alt="Graph with On Mounted wired to get-articles, whose output is wired to Set articles" />

3. Add a `Template` component (`For` loop) in the interface and bind it to the `articles` variable.

   <DImage :src="TemplateComponent" alt="Template component in the interface, bound to the articles variable" />

4. Inside the template, create a `Block`, then add a variable bound to `Template[].value.title` to display each article's title.

   <DImage :src="TemplateTitle" alt="Text inside the template bound to Template[].value.title, with the list of titles rendered" />
