<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
import {graphLogLog} from "/assets/examples/graphLogLog.ts";
import {graphIf} from "/assets/examples/graphIf.ts";
import {graphFor} from "/assets/examples/graphFor.ts";
</script>

# Flow Control

The logic flow is the order in which your nodes are executed. Usually, the flow start on a triggered event (manual play node, on load node, function...). Then, it follows the execution thread represented by a bold white link.

<DExampleEditor graph="loglog" animation :zoomLevel="1"/>

Flow control allows you to define the **execution order** of nodes in your graph and manage **conditions** or **repetitions** of actions.

Flow control is divided into three main categories:
- **Triggers**: Start the execution flow.
- **Conditional Nodes**: Change the execution flow based on a condition.
- **Loops**: Repeat actions based on a given criterion.

## Triggers

Trigger nodes start the execution of logic when a specific event occurs.

Example: **Trigger the increment of a score**

1. Add an **On Click** node connected to a button in your interface.
2. Connect it to a **Log** node.

When the user clicks the button, the **On Click** node triggers the execution of the logic, and the **Log** node displays a message in the console.

## Conditional Nodes (If)

Conditional nodes allow you to test a condition and execute different actions based on the result.
A conditional node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A condition input (<DSchemaType :schema="LogicType.boolean()" />)
- A true output (<DSchemaType :schema="LogicType.exec()" />)
- A false output (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor graph="if" animation :zoomLevel="1"/>

## Switch Node

The **Switch** node routes execution based on the value of an input, like a `switch` in JavaScript. For each declared case, a dedicated execution output is exposed; a `default` output catches unmatched values.

A Switch node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A value input (<DSchemaType :schema="LogicType.union(LogicType.string(), LogicType.number())" />)
- One execution output per declared case (<DSchemaType :schema="LogicType.exec()" />)
- A `default` output (<DSchemaType :schema="LogicType.exec()" />)

## Loop Nodes (For, While)

Loop nodes allow you to repeat an action multiple times based on a condition or a list.

### For Loop

A For loop node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- An array input (<DSchemaType :schema="LogicType.array(LogicType.unknown())" />)
- An execution output (<DSchemaType :schema="LogicType.exec()" />)
- An element output (of the array element type)
- An index output (<DSchemaType :schema="LogicType.number()" />)
- An end output (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor graph="for" animation :zoomLevel="1"/>

### While Loop

A While loop node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A condition input (<DSchemaType :schema="LogicType.boolean()" />)
- An execution output (<DSchemaType :schema="LogicType.exec()" />)
- An end output (<DSchemaType :schema="LogicType.exec()" />)

## Async operations

The execution flow natively handles **async** operations. When a node has to wait for a result that takes time (API call, DB query, etc.), the flow pauses until that result is ready; it then resumes with the value available on the node's output.

_For JavaScript developers: this is the equivalent of an `await` on a promise._