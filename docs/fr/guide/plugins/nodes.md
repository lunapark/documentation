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
src="/assets/images/plugins/nodes/function.png"
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
src="/assets/images/plugins/nodes/operation.png"
alt="Nœud d'opération"
/>
