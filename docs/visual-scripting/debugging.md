---
description: "Debug visual scripts in Luna Park with breakpoints, step-by-step execution, value inspection, and the console."
---

<script setup lang="ts">
import ToggleBreakpoint from '/assets/images/visual-scripting/debugging/toggle-breakpoint.png';
import Breakpoint from '/assets/images/visual-scripting/debugging/breakpoint.png';
import Paused from '/assets/images/visual-scripting/debugging/paused.png';
import StepInto from '/assets/images/visual-scripting/debugging/step-into.png';
import Console from '/assets/images/visual-scripting/debugging/console.png';
import {LogicType} from "@luna-park/logicnodes";
import {faBug, faEye, faPlay, faArrowRight, faArrowDownToLine, faArrowUpFromLine, faCrosshairs, faStop} from "@fortawesome/pro-solid-svg-icons";
</script>

# Debugging

Luna Park runs your logic directly in the editor. Pause it on a node with a **breakpoint**, run it node by node, and check the values it carries.

## Breakpoints

Right-click a node and select <LIcon :icon="faBug" /> **Toggle breakpoint**. Only nodes with an execution input (<DSchemaType :schema="LogicType.exec()" />) can hold a breakpoint.

<DImage
:src="ToggleBreakpoint" :width="1280" :height="720"
alt="Node context menu with the Toggle breakpoint option"
/>

A red <LIcon :icon="faBug" /> badge marks the node. Click the badge to remove the breakpoint.

<DImage
:src="Breakpoint" :width="1280" :height="720"
alt="Function node with a breakpoint badge on its top-left corner"
/>

Breakpoints are not saved with the project: they are cleared when you reload the editor.

## Pausing the Execution

Run your app as usual, in the **Preview** panel for example. When the execution reaches a node with a breakpoint, it pauses **before** running the node: the editor opens the logic containing the node, outlines it, and shows the debugger bar at the bottom of the logic editor, with the name of the paused node.

<DImage
:src="Paused" :width="1280" :height="720"
alt="Execution paused on a function node, with the debugger bar at the bottom of the logic editor"
/>

| Button | Action |
|---|---|
| <LIcon :icon="faPlay" /> **Continue** | Resume until the next breakpoint. |
| <LIcon :icon="faArrowRight" /> **Step** | Pause on the next node of the current logic. A function call runs entirely. |
| <LIcon :icon="faArrowDownToLine" /> **Step into function** | Pause on the next node, inside the called function if the paused node is a function call. |
| <LIcon :icon="faArrowUpFromLine" /> **Exit function** | Run the rest of the current function, and pause on the next node after the call. |
| <LIcon :icon="faCrosshairs" /> **Show paused node** | Go back to the paused node after navigating elsewhere. |
| <LIcon :icon="faStop" /> **Stop** | Stop the execution. The rest of the flow doesn't run. |

<DImage
:src="StepInto" :width="1280" :height="720"
alt="Execution paused on the first node inside the called function"
/>

When several flows reach a breakpoint at the same time, they pause one after the other.

## Inspecting Values

Press `Ctrl + Space` (or `Ctrl + Q`), or click the <LIcon :icon="faEye" /> button of the logic editor, to show the values held by the anchors. See [Inspecting the Graph](./graph#inspecting-the-graph).

## Logging to the Console

The **Log** node prints a value in the [console](../workspace/editor#the-console) at the bottom of the editor, and in your browser's console. Logs are useful to follow values over many runs without pausing.

<DImage
:src="Console" :width="1280" :height="720"
alt="Log node and the console showing its message"
/>

## Stopping Runaway Logic

- While logic runs, the **Computing** indicator appears at the bottom of the main view. Click its <LIcon :icon="faStop" /> button to stop every running flow. The console logs the node where it stopped.
- The **Stack Limit** session flag stops a flow after too many node executions without a pause, which usually means an infinite loop. It is enabled by default. Session flags are in the **Flags** menu of the [top bar](../workspace/editor#the-top-bar).
- The **Animation** session flag slows the execution down and animates the wires, to follow the flow by eye.
