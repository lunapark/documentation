---
description: "Control execution paths in visual scripts with conditions, loops, and other flow nodes."
---

<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
</script>

# Flow Control

The logic flow is the order in which your nodes are executed. Usually, the flow start on a triggered event (manual play node, on load node, function...). Then, it follows the execution thread represented by a bold white link.

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#tVHbDoIwDP2XPmNkRBPDF_gBJj6SOaqZjpXAUJHw73bDRCUYnnzpejk9O207UNJeZQ1pB4aUdJqs9--QxhG0bPsIHkQFpII9SzkGbOxNLp30r2pqR8WuLYeathkdzqicD6wsEFJ4JfqeSbR1WFlpBmzZuHEX7KkyOYOjsaZN0LRIQuWkFWNzPDSnJUfASfFXWVs0hqZkLdYzupJPXVmtH_x56BTDlldTpOLntKWRbdBx09XHPY6Vv1MHF-Q2oMZleEcFw9k4k3gpjt4QHu4bIQJr2OIcGUNnyGK_1_4J"/>

Flow control allows you to define the **execution order** of nodes in your graph and manage **conditions** or **repetitions** of actions.

Flow control is divided into three main categories:
- **Triggers**: Start the execution flow.
- **Conditional Nodes**: Change the execution flow based on a condition.
- **Loops**: Repeat actions based on a given criterion.

## Triggers

Trigger nodes start the execution of logic when a specific event occurs.

Example: **Log a message on click**

1. Add an **On Click** node connected to a button in your interface.
2. Connect it to a **Log** node.

When the user clicks the button, the **On Click** node triggers the execution of the logic, and the **Log** node displays a message in the console.

Other triggers include **On Mounted**, **On Load**, and the input node of functions, routes, and crons. See [Node Libraries](./libraries#events).

## Conditional Nodes (If)

Conditional nodes allow you to test a condition and execute different actions based on the result.
A conditional node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A condition input (<DSchemaType :schema="LogicType.boolean()" />)
- A true output (<DSchemaType :schema="LogicType.exec()" />)
- A false output (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#tZLBboMwDIbfxWdQCe20idv2DLujNIQqW4gRhLUU8e6zk0lrC9W0Qy8hcX5__mMzgZLuS_ZQTGBRSW_Q8f4ERZbASOucwBmxgULQzmGlgzbjpZJe8lcNvcfmfWzjnXEl7j-08nxwstFQwE9gnglinNedkzZq28HfZsEbCZNbPy_BD7uweDCKZJXeD4cNnYCC4tJR2ZszlQ15Ij5kt4JMxXO4S_MFtbVyZGwevd1xrNBVJgJ9N-i1Ek_LCrXF48bUjN8-tI-v9_uY7tYbSdGj6S6GXHc8_Ak-NWUBDr7UJ60g_gsUEfwMj78SMnCtyAM1zGcJE7W0vb4S_4HLAi7MZYnLeAz_oW25l_M3"/>

## Switch Node

The **Switch** node routes execution based on the value of an input, like a `switch` in JavaScript. For each declared case, a dedicated execution output is exposed; a `default` output catches unmatched values.

A Switch node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A value input (<DSchemaType :schema="LogicType.union([LogicType.string(), LogicType.number()])" />)
- One execution output per declared case (<DSchemaType :schema="LogicType.exec()" />)
- A `default` output (<DSchemaType :schema="LogicType.exec()" />)

## Loop Nodes (For, For Each, While)

Loop nodes allow you to repeat an action multiple times based on a condition or a list.

Loops have an **async** mode: when enabled, each iteration waits for the previous one to finish before starting.

### For Loop

The **For** node runs its loop output once for each index from `0` to `count - 1`, then runs its end output.

### For Each Loop

The **For Each** node runs its loop output for each element of an array. A For Each node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- An array input (<DSchemaType :schema="LogicType.array(LogicType.unknown())" />)
- An execution output (<DSchemaType :schema="LogicType.exec()" />)
- An element output (of the array element type)
- An index output (<DSchemaType :schema="LogicType.number()" />)
- An end output (<DSchemaType :schema="LogicType.exec()" />)

<DExampleEditor target="https://luna-park.app/editor/script?animation&clean&console=80px#pZJBboMwEEXP0lkTBUNUVax7hO6RY0zk1ngQmAaCuHvHJm0oJs2iG2ObP28-fxhBcPPJW8hG0Ci4VWjcvocsjmCgdYrgglhBxmhnsJBeG7ul4Ja7p-hai9XbUM_vlMnx-C6FdQfDKwkZXC-miSDKWNkYrmdt3dl1FbyikU8kjtaeXrwn50TjSQmSFvLYnfZ0Arpk_3C12Wl3uNcqWbbKW3Uhni9kc26HDeaOXalJQK01Hxw2na3eCUhgZ8h_usV-DtGlxvO-xMYneVbNYnRl40Y6woekIsDO5kyZQvYwz5juUmfH4k10C_BHwzzZpx4CY41Y_82TvRRrmg82pP2WJg9h1O47zhCWyF4tPuOxtdj9I9MX"/>

### While Loop

A While loop node has:
- An execution input (<DSchemaType :schema="LogicType.exec()" />)
- A condition input (<DSchemaType :schema="LogicType.boolean()" />)
- An execution output (<DSchemaType :schema="LogicType.exec()" />)
- An end output (<DSchemaType :schema="LogicType.exec()" />)

## Sequence and Parallel

- **Then** runs its outputs one after the other: `Out 0`, then `Out 1`, then `Out 2`... Use it to split a long flow into readable steps.
- **Parallel** runs all its outputs at the same time and waits for all of them to finish before running `Done`. Use it to run several API calls or queries at once.

## Timing

| Node | Description |
|---|---|
| **Sleep** | Waits `time` milliseconds, then continues. The flow is paused. |
| **Timeout** | Runs its output after `time` milliseconds, without pausing the flow. |
| **Debounce** | Delays execution by `time` milliseconds. Each new trigger resets the timer, so only the latest one continues. Useful for search inputs. |

## Errors

The **Try** node runs its `try` branch. If a node in it throws an error, the `catch` branch runs with the error message. The `finally` branch runs in both cases. **Throw** raises an error yourself. See [Node Libraries](./libraries#errors).

## Async operations

The execution flow natively handles **async** operations. When a node has to wait for a result that takes time (API call, DB query, etc.), the flow pauses until that result is ready; it then resumes with the value available on the node's output.

_For JavaScript developers: this is the equivalent of an `await` on a promise._
