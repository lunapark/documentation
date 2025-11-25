# Custom logic nodes

You can create custom logic nodes to extend the visual scripting editor of Luna Park.

## Function nodes

Function nodes are used for heavy functions or promises. They need an input execution thread anchor and are computed on execution.

Example:
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
        name: "My Function Node"
    },
});
```

:::info
Note that every input key must start with `in_`, and every output key must start with `out_`. The default input and output execution thread anchors are `in_exec` and `out_exec`.
:::

This node will be displayed like this:
<DImage
src="/assets/images/plugins/nodes/function.png"
alt="Function node"
/>

## Operation nodes

Operation nodes are used for simple logic operations. They don't need an input execution thread anchor and are computed on the fly.

Example:
```ts
import { LogicType, makeLogicNode } from "@luna-park/plugin";

export const myFunctionNode = makeLogicNode({
    name: "function-node",
    inputs: {
        in_exec: LogicType.exec(),
        in_a: LogicType.number({ name: "A" }),
        in_b: LogicType.number({ name: "B" })
    },
    outputs: {
        out_exec: LogicType.exec(),
        out_result: LogicType.number({ name: "A+B" })
    },
    methods: {
        async in_exec() {
            this.out_result = this.in_a + this.in_b;
            await this.out_exec();
        }
    },
    display: {
        name: "My Function Node"
    }
});
```

This node will be displayed like this:
<DImage
src="/assets/images/plugins/nodes/operation.png"
alt="Function node"
/>
