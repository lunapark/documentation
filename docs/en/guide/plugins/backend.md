---
description: "Extend the backend of Luna Park apps from a plugin: route guards, hooks, dependencies, environment variables, and code injections."
---

# Backend and Build

Besides editor features, a plugin can extend the backend of the apps that use it, and change how they are compiled. The [Users plugin](../fundamentals/data/auth) is a complete example: it adds tables, guards, a request context, and server endpoints.

## Route guards

A guard checks a request before a [route](../fundamentals/data/routes) runs. Users add guards in the **Guards** section of a route's Inspector.

```ts
import { LogicType, makePlugin, type TRouteGuard } from '@luna-park/plugin';

const adminGuard: TRouteGuard = {
    id: 'admin',
    label: 'Admin only',
    description: 'Only admins can call this route.',
    config: LogicType.object({}),
    check: ({ config, context }) => assertAdmin(context.in_user),
    build: {
        generate: (config) => `async (request) => assertAdmin(request.context.in_user)`,
        imports: [{ name: 'assertAdmin', target: 'my-plugin/server' }]
    }
};

export default makePlugin({
    /* ... */
    editor: {
        guards: [adminGuard]
    }
});
```

| Property | Description |
|---|---|
| `id`, `label`, `description` | Identify the guard. Routes reference it as `<plugin-id>/<guard-id>`. |
| `config` | Optional settings shown when the guard is added (a permission to check, for example). |
| `check` | Runs in the editor. Throw an error to reject the request. |
| `build.generate` | Returns the code of the guard in the compiled backend: a function receiving the request. |
| `build.imports` | Functions to import in the generated route. |

## Hooks

Hooks let a plugin act on every request and every database query **in the editor**:

| Hook | Called | Parameters |
|---|---|---|
| `backend/middleware` | Before each route runs. | `cookies`, `setContextVar(key, value)` to add a value to the request context. |
| `backend/input-node` | When the route input node is built. | `addInput(key, schema)` to add an output to the route input node. |
| `database/scope` | Before each query on a table. | `table`, `addConditions(conditions)` to filter rows (row-level security). |
| `database/change` | After rows are inserted, updated, or deleted. | `operation`, `table`, `rows`. |

The Users plugin, for example, puts the connected user in the context with `backend/middleware`, and exposes it on every route with `backend/input-node`:

```ts
makePlugin({
    hooks: {
        'backend/middleware': async ({ setContextVar }) => {
            setContextVar('in_user', await resolveUser());
        },
        'backend/input-node': ({ addInput }) => {
            addInput('in_user', userSchema);
        }
    }
});
```

In the compiled backend, reproduce the same behavior with [code injections](#code-injections): a Fastify `preHandler` hook filling `request.context`, and the `addDbScope` and `onDbChange` functions of `@/database/hooks.js`.

## Build

The `build` option changes the compiled app. Like other options, each entry can be a function of the [environment](./basics#option-format).

### Dependencies

`frontImports` and `backImports` add npm packages to the frontend and backend `package.json`:

```ts
makePlugin({
    build: {
        frontImports: [{ name: 'my-design-system', version: '^1.2.0' }],
        backImports: [{ name: 'my-plugin', version: '1.0.0' }]
    }
});
```

A common pattern is to publish the runtime code of your plugin as a sub-path of its own package (e.g. `my-plugin/server`) and add the package to `backImports`.

### Environment variables

`env` adds variables to the app's `.env` file. Use it for secrets, so they never appear in the generated code:

```ts
makePlugin({
    build: {
        env: ({ config }) => ({ MY_PLUGIN_API_KEY: config.apiKey })
    }
});
```

Read them at runtime with `process.env.MY_PLUGIN_API_KEY`.

### Code injections

`injections` inserts code at fixed places of the generated project:

| Key (`EInjectionKey`) | Inserted in |
|---|---|
| `ViteImport` | Imports of the frontend `vite.config.ts`. |
| `VitePlugin` | The `plugins` array of the Vite config. |
| `AppImport` | Imports of the frontend `main.ts`. |
| `AppBody` | `main.ts`, after the app is created (e.g. `app.use(...)`). |
| `AppSetup` | The `<script setup>` of the root `App.vue`. |
| `Style` | The global stylesheet. |
| `ServerImport` | Imports of the backend `server.ts`. |
| `ServerBody` | `server.ts`, after the server is set up (register hooks and routes on `server`). |

```ts
import { EInjectionKey, makePlugin } from '@luna-park/plugin';

makePlugin({
    build: {
        injections: {
            [EInjectionKey.AppImport]: `import MyLib from "my-lib";`,
            [EInjectionKey.AppBody]: `app.use(MyLib);`
        }
    }
});
```

## Instructions for AI

The `llm` property of a plugin (and of each component) is given to [Sidekick](../getting-started/sidekick-settings) and [AI agents](../integrations/ai-agents). Explain there how your plugin is meant to be used: which nodes to combine, which settings matter, common pitfalls.
