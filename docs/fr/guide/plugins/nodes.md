---
description: "Créez des nœuds logiques personnalisés pour étendre l'éditeur de scripting visuel Luna Park."
---

<script setup lang="ts">
import Function from "/assets/images/plugins/nodes/function.png";
import Operation from "/assets/images/plugins/nodes/operation.png";
</script>


# Nœuds logiques personnalisés

Vous pouvez créer des nœuds logiques personnalisés pour étendre l'éditeur de script visuel de Luna Park.

## Nœuds de fonction

Les nœuds de fonction sont conçus pour des opérations complexes ou des tâches asynchrones (promesses). Ils nécessitent une ancre d'exécution d'entrée (`in_exec`) et ne sont évalués que lorsqu'ils sont déclenchés.

Exemple :
```ts
import { LogicType, makeLogicNode } from "@luna-park/plugin";

export const myFunctionNode = makeLogicNode({
    name: "function-node",
    inputs: {
        in_exec: LogicType.exec(),
        in_a: LogicType.number({name: "A"}),
        in_b: LogicType.number({name: "B"})
    },
    outputs: {
        out_exec: LogicType.exec(),
        out_result: LogicType.number({name: "A+B"})
    },
    methods: {
        async in_exec() {
            this.out_result = this.in_a + this.in_b;
            await this.out_exec();
        }
    },
    display: {
        name: "Mon Nœud de Fonction"
    },
});
```

:::info
Notez que chaque clé d'entrée doit commencer par `in_`, et chaque clé de sortie doit commencer par `out_`. Les ancres de fil d'exécution d'entrée et de sortie par défaut sont `in_exec` et `out_exec`.
:::

Ce nœud sera affiché comme ceci :
<DImage
:src="Function"
alt="Nœud de fonction"
/>

## Nœuds d'opération

Les nœuds d'opération sont utilisés pour des opérations logiques simples et synchrones. Ils ne nécessitent pas d'ancre d'exécution d'entrée et sont évalués à la demande.

Exemple :
```ts
import { LogicType, makeLogicNode } from "@luna-park/plugin";

export const myOperationNode = makeLogicNode({
    name: "operation-node",
    inputs: {
        in_a: LogicType.number({ name: "A" }),
        in_b: LogicType.number({ name: "B" })
    },
    outputs: {
        out_result: LogicType.number({ name: "A+B" })
    },
    methods: {
        compute() {
             this.out_result = this.in_a + this.in_b;
        }
    },
    display: {
        name: "Mon Nœud d'Opération"
    }
});
```

Ce nœud sera affiché comme ceci :
<DImage
:src="Operation"
alt="Nœud d'opération"
/>

## Enregistrer les nœuds

Ajoutez vos nœuds à `editor.nodes` dans le plugin :

```ts
makePlugin({
    /* ... */
    editor: {
        nodes: [myFunctionNode, myOperationNode]
    }
});
```

Comme les autres options, `nodes` peut être une fonction qui reçoit l'[environnement](./basics#format-des-options), pour générer des nœuds à partir de la configuration du plugin.

## Scope et documentation

`display.config.scope` limite où le nœud peut être utilisé : `ELogicScope.Frontend`, `ELogicScope.Backend` ou `ELogicScope.Shared`. Un nœud backend, par exemple, n'apparaît que dans les routes, les crons et les scripts backend.

`documentation.description` est affichée dans l'éditeur et transmise à Sidekick et aux agents IA.

```ts
import { ELogicScope, LogicType, makeLogicNode } from "@luna-park/plugin";

export const sendNode = makeLogicNode({
    name: "my-plugin/send",
    /* inputs, outputs, methods */
    display: {
        name: "Send",
        config: { scope: ELogicScope.Backend }
    },
    documentation: {
        description: "Envoie un message au service."
    }
});
```

## Code compilé

À la compilation de l'application, la méthode du nœud est copiée dans le code généré. Elle doit donc être autonome : elle ne peut pas utiliser les variables ou imports de votre fichier de plugin.

Pour appeler votre propre code, fournissez `build` :

- `generate` : renvoie le code de la méthode, sous forme de string ;
- `imports` : les fonctions à importer dans le fichier généré, avec le package d'où elles viennent.

```ts
makeLogicNode({
    /* ... */
    build: {
        generate: () => `async function () {
            this.out_result = await send(this.in_message);
            await this.out_exec();
        }`,
        imports: [{ name: "send", target: "my-plugin/server" }]
    }
});
```

Le package importé doit être ajouté aux dépendances de l'application avec `build.frontImports` ou `build.backImports` (voir [Backend et build](./backend#dependances)).
