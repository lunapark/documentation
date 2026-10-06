---
description: "Organize reusable logic in Luna Park with scripts, functions, code functions, configuration files, and type files."
---

# Scripts and Functions

As your app grows, you will want to reuse logic in several places. Luna Park provides **functions**, grouped in **scripts**, as well as **configuration** and **type** files for shared values and data shapes.

## Functions

A function is a graph with **inputs** and **outputs**, like a function in code. Inside it, an **Input** node exposes its parameters and one or more **Output** nodes return its results.

Any logic file can contain functions: components, scripts, stores, routes, and crons. Create one with the **Create a new function** button of the options panel (bottom left), then double-click it to edit its graph.

Once created, a function becomes a node: drag it into a graph to call it.

### Function settings

Select a function to edit it in the **Inspector**:

| Setting | Description |
|---|---|
| **Name** | The name of the function and of its node. |
| **Type** | **Pure**: a visual scripting graph (default). **Code**: write the function in TypeScript. |
| **Export** | Makes the function callable from other files. |
| **Async** | Allows async nodes (fetch, database, sleep...) inside the function. |

::: tip
When a graph becomes long, select a group of nodes, right-click, and pick **Collapse to function** to turn them into a function.
:::

### Code functions

With the **Code** type, the graph is replaced with a TypeScript editor. The lines declaring the function's signature are locked: they follow the inputs and outputs you define. Write the body like any TypeScript function.

Use code functions for algorithms that are simpler to write than to draw, or to call browser APIs directly.

### Local variables

The options panel also lists the file's **Local Variables**. Create one with **Create a new local variable**. Local variables are shared by all the functions of the file, and each gets its own **Get** and **Set** nodes.

## Scripts

A **script** is a file that only contains logic: functions and local variables, without interface. Create one with **New > Script** in the Explorer.

Set its **Scope** in the Inspector to choose where its functions run:

- **Frontend**: in the browser (UI helpers, formatting...).
- **Backend**: on the server, to be called from [routes](../data/routes) and [crons](../data/cron).
- **Shared**: both sides (validation, calculations...).

See [Project Files](../project-files#scopes) for the full scope rules. Mark functions with **Export** to call them from other files.

::: info
Only the functions of a script are part of your app. Use the script's main graph to try them out in the editor.
:::

## Configuration files

A **configuration** file stores static values: an API URL, a feature flag, a list of countries... Create one with **New > Configuration**, define its schema, and fill in its values. A **Get** node reads it in logic.

Its **Scope** works like a script's. A **Backend** configuration is only included in the server code, so it is the right place for API keys and other secrets.

## Type files

A **type** file defines reusable data types (an `Address`, an `Order`...). Create one with **New > Type**.

Types can be used anywhere a type is expected: variables, function inputs, store schemas, route inputs and outputs. You can also reference a database row or a route's body and response as a type. Defining a shape once keeps the frontend and backend in sync.
