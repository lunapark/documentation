---
description: "Étendez le backend des applications Luna Park depuis un plugin : guards de route, hooks, dépendances, variables d'environnement et injections de code."
---

# Backend et build

En plus des fonctionnalités de l'éditeur, un plugin peut étendre le backend des applications qui l'utilisent et modifier leur compilation. Le [plugin Users](../fundamentals/data/auth) en est un exemple complet : il ajoute des tables, des guards, un contexte de requête et des endpoints serveur.

## Guards de route

Un guard vérifie une requête avant l'exécution d'une [route](../fundamentals/data/routes). Les utilisateurs ajoutent des guards dans la section **Guards** de l'Inspector d'une route.

```ts
import { LogicType, makePlugin, type TRouteGuard } from '@luna-park/plugin';

const adminGuard: TRouteGuard = {
    id: 'admin',
    label: 'Admin only',
    description: 'Seuls les administrateurs peuvent appeler cette route.',
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

| Propriété | Description |
|---|---|
| `id`, `label`, `description` | Identifient le guard. Les routes le référencent sous la forme `<plugin-id>/<guard-id>`. |
| `config` | Réglages optionnels affichés quand le guard est ajouté (une permission à vérifier, par exemple). |
| `check` | S'exécute dans l'éditeur. Levez une erreur pour rejeter la requête. |
| `build.generate` | Renvoie le code du guard dans le backend compilé : une fonction qui reçoit la requête. |
| `build.imports` | Les fonctions à importer dans la route générée. |

## Hooks

Les hooks permettent à un plugin d'agir sur chaque requête et chaque requête en base **dans l'éditeur** :

| Hook | Appelé | Paramètres |
|---|---|---|
| `backend/middleware` | Avant l'exécution de chaque route. | `cookies`, `setContextVar(key, value)` pour ajouter une valeur au contexte de la requête. |
| `backend/input-node` | À la construction du nœud d'entrée des routes. | `addInput(key, schema)` pour ajouter une sortie au nœud d'entrée. |
| `database/scope` | Avant chaque requête sur une table. | `table`, `addConditions(conditions)` pour filtrer les lignes (sécurité au niveau des lignes). |
| `database/change` | Après l'insertion, la modification ou la suppression de lignes. | `operation`, `table`, `rows`. |

Le plugin Users, par exemple, place l'utilisateur connecté dans le contexte avec `backend/middleware`, et l'expose sur chaque route avec `backend/input-node` :

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

Dans le backend compilé, reproduisez le même comportement avec des [injections de code](#injections-de-code) : un hook Fastify `preHandler` qui remplit `request.context`, et les fonctions `addDbScope` et `onDbChange` de `@/database/hooks.js`.

## Build

L'option `build` modifie l'application compilée. Comme les autres options, chaque entrée peut être une fonction de l'[environnement](./basics#format-des-options).

### Dépendances

`frontImports` et `backImports` ajoutent des packages npm aux `package.json` du frontend et du backend :

```ts
makePlugin({
    build: {
        frontImports: [{ name: 'my-design-system', version: '^1.2.0' }],
        backImports: [{ name: 'my-plugin', version: '1.0.0' }]
    }
});
```

Une pratique courante consiste à publier le code d'exécution de votre plugin dans un sous-chemin de son propre package (par ex. `my-plugin/server`) et à ajouter le package à `backImports`.

### Variables d'environnement

`env` ajoute des variables au fichier `.env` de l'application. Utilisez-le pour les secrets, afin qu'ils n'apparaissent jamais dans le code généré :

```ts
makePlugin({
    build: {
        env: ({ config }) => ({ MY_PLUGIN_API_KEY: config.apiKey })
    }
});
```

Lisez-les à l'exécution avec `process.env.MY_PLUGIN_API_KEY`.

### Injections de code

`injections` insère du code à des endroits précis du projet généré :

| Clé (`EInjectionKey`) | Inséré dans |
|---|---|
| `ViteImport` | Les imports du `vite.config.ts` du frontend. |
| `VitePlugin` | Le tableau `plugins` de la config Vite. |
| `AppImport` | Les imports du `main.ts` du frontend. |
| `AppBody` | `main.ts`, après la création de l'application (par ex. `app.use(...)`). |
| `AppSetup` | Le `<script setup>` du composant racine `App.vue`. |
| `Style` | La feuille de style globale. |
| `ServerImport` | Les imports du `server.ts` du backend. |
| `ServerBody` | `server.ts`, après la configuration du serveur (enregistrez des hooks et des routes sur `server`). |

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

## Instructions pour l'IA

La propriété `llm` d'un plugin (et de chaque composant) est transmise à [Sidekick](../getting-started/sidekick-settings) et aux [agents IA](../integrations/ai-agents). Expliquez-y comment votre plugin doit être utilisé : quels nœuds combiner, quels réglages comptent, les pièges courants.
