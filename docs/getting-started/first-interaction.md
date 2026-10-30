---
description: "Build your first interaction in Luna Park in 5 steps: a button that logs a message in the console when clicked."
---

<script setup lang="ts">
import AddNuxtButton from '/assets/images/layout/builder/add-nuxt-button.png';
import AddEvent from '/assets/images/layout/events/add-event.png';
import ClickLogGraph from '/assets/images/layout/events/click-log-graph.png';
import PreviewConsole from '/assets/images/layout/events/preview-console.png';
</script>

# Your First Interaction

In this tutorial, you build a button that logs a message when it is clicked. It takes 5 minutes and covers the basics of every Luna Park app: a layout, an event, and a graph.

The short version: **add a button, add a Click event to it, open the Logic view, connect a Log node.**

You can follow along in the [playground editor](https://luna-park.app/editor), no account needed.

## 1. Create a page

The button comes from the [Nuxt UI plugin](../integrations/plugins#nuxt-ui). It is preinstalled in the **Nuxt project** template. Otherwise, open the **Libraries** workspace (above the Explorer), then **Install plugins**, select **Nuxt UI** and click **Install plugin**.

In the **Explorer** (top left), right-click the **Root** folder, then **New** > **Page**. Name it `Home`.

The page opens in **Builder** mode: the canvas in the middle, the **layout tree** at the bottom left, and the **inspector** on the right.

## 2. Add a button

1. In the layout tree, click the **list** button under the root **Block**, then pick **Nuxt UI** > **Element** > **Button**. The button is added and selected.
2. In the **Element** panel of the inspector, set **Name** to `Hello button`.
3. In the **Properties** panel, set **label** to `Say hello`.

<DImage
:src="AddNuxtButton" :width="1280" :height="720"
alt="Element list of the layout tree open on Nuxt UI, Element, Button"
/>

See [Builder](../interface/builder) for the other ways to insert elements.

## 3. Add a Click event

Select `Hello button` again. In the **Events** panel of the inspector, click **+** and pick **Click**.

<DImage
:src="AddEvent" :width="1280" :height="720"
alt="Events panel of Hello button with the list of available events"
/>

## 4. Open the Logic view

Click **Edit logic** next to the event. The main view switches to **Logic** mode and shows the `On Click (Hello button)` node. Everything connected to its execution output runs when the button is clicked.

## 5. Connect a Log node

1. Right-click the graph and search for `log`. Pick **Log**, in the **Debug** category.
2. Drag a wire from the execution output (the square anchor) of `On Click (Hello button)` to the execution input of **Log**.
3. Type `Hello!` in the **object** input of **Log**.

<DImage
:src="ClickLogGraph" :width="1280" :height="720"
alt="On Click (Hello button) connected to a Log node with the value Hello!"
/>

## Try it

Switch to **Preview** mode, and click **Say hello**. `"Hello!"` appears in the **Console** at the bottom of the editor, and in your browser's console.

<DImage
:src="PreviewConsole" :width="1280" :height="720"
alt="Preview mode: the Console shows Hello! after clicking the button"
/>

## Going further

- **Log the mouse position**: connect the **Mouse Event** output of the event node to a `Get Property` node with the path `clientX`, and log its value. See [Events](../interface/events) for every event and its outputs.
- **Count the clicks**: add a `count` variable to the page, then chain `Set count` (with `count + 1`) before **Log**. This is the example of [The Graph](../visual-scripting/graph#example-of-logic-in-the-graph). To share the counter between pages, use a [store](../logic/store).
- **Display the value**: add a **Variable** element bound to `count` to see it update on the page.
