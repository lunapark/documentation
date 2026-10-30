---
description: "Add, nest, and reorder layout elements in Builder mode: the layout tree, insert mode, the element list, plugin components, and templates."
---

<script setup lang="ts">
import LayoutTree from '/assets/images/layout/builder/layout-tree.png';
import ContextMenu from '/assets/images/layout/builder/context-menu.png';
import AddNuxtButton from '/assets/images/layout/builder/add-nuxt-button.png';
import InsertVideo from '/assets/images/layout/builder/insert.webm';
</script>

# Builder

**Builder** mode is where you build the interface of a page or component. Open a page or component file, and pick **Builder** in the mode selector under the main view. See [Preview](./preview) for the canvas itself: device sizes, breakpoints, and the other modes.

In Builder mode:

- the **main view** shows the canvas, a live rendering of the layout;
- the **options panel** (bottom left) shows the **layout tree**, the list of elements;
- the **inspector** (right) shows the panels of the selected element: **Element**, **Properties**, **Rendering**, **Events**, and **Style**.

<DImage
:src="LayoutTree" :width="1280" :height="720"
alt="Builder mode: the layout tree on the left, the canvas in the middle, and the inspector of the selected element on the right"
/>

## The layout tree

The layout tree mirrors the canvas: each line is an element, and indented lines are its children. The root element at the top is the component itself.

- `Click` a line (or the element on the canvas) to select it and show its panels in the inspector.
- `Double-click` a line to collapse or expand its children.
- Drag a line by its grip to move it before, after, or inside another element. On the canvas, hold `Ctrl` to drag elements quickly.
- `Ctrl + X` / `Ctrl + C` / `Ctrl + V` cut, copy, and paste elements, `Del` deletes them.

The icon at the start of each line is the element type. Click it to change the type of an existing element.

## Inserting elements

There are three ways to add an element.

### From the layout tree

Under the children of each element, the layout tree shows two buttons:

- **+** adds an empty **Block** at the end;
- the **list** button opens the element list: pick a type to add it at the end.

### With the context menu

Right-click an element in the tree to **Create before**, **Create after**, or **Create inside** it. The new element is a **Block**; change its type from the **Element** panel of the inspector.

The same menu can **Wrap in component** (wrap the selection in a new **Block**), **Unwrap and delete** (remove an element but keep its children), and copy or paste a style.

<DImage
:src="ContextMenu" :width="1280" :height="720"
alt="Context menu of a layout element with Create before, Create after, Create inside, Wrap in component, and Copy Style"
/>

### With insert mode

Toggle **Show insert mode** in the toolbar under the main view. Insertion points appear around and inside the elements of the canvas. Click one to open the element list and insert the element right there.

<DImage
:src="InsertVideo" :width="1280" :height="720"
alt="Insert mode: blue insertion points on the canvas and the element list opened after a button"
/>

## The element list

| Element | Description |
|---|---|
| **Block** | A container that can have children. Pick its HTML **Tag** in the Element panel: `div`, `section`, `header`, `nav`, `form`, `button`, `hr`... |
| **Package** | A component provided by an installed [npm package](../integrations/npm). |
| **Slot** | Where the children given to this component are displayed. See [Components](./components). |
| **Template** | Show content under a condition, or repeat it for each item of a list. See [Conditions and Loops](./templates). |
| **Custom text** | Text written directly on the canvas, with formatting and variables. Pick its **Tag**: `span`, `p`, `h1`, `h2`, `h3`... See [Text](./text). |
| **Custom HTML** | Raw HTML code. See [Text](./text#custom-html). |
| **Variable** | Display the value of a variable. |
| **Link** | A link to a page of your app or to a URL. |
| **Input** | A text field (`input` or `textarea`), with a type, a placeholder, and a value. |
| **Media** | An image, a video, or an audio file. |
| **Component** | One of the components of your project. Shown once the project has at least one component. |

::: tip Buttons
For a styled button, use a plugin component such as **Nuxt UI** > **Element** > **Button**, and set its **label** in the **Properties** panel. For a native button, use a **Block** with the `button` tag, with a **Custom text** inside it for the label.
:::

## Plugin components

Each installed [plugin](../integrations/plugins) that provides components adds an entry named after the plugin (for example **Nuxt UI**) to the element list, next to **Package**. Open it to pick one of its components. Its options appear in the **Properties** panel of the inspector, and its own events in the **Events** panel. If the component has slots (like `leading` and `trailing` for a Nuxt UI Button), they are listed under it in the layout tree: add elements inside a slot to fill it.

<DImage
:src="AddNuxtButton" :width="1280" :height="720"
alt="Element list of the layout tree open on Nuxt UI, Element, Button"
/>

Prefer a plugin component when you want a styled, accessible widget (buttons, modals, selects, tables...). Prefer native elements when you want full control over the markup and the style.

Plugins can also provide **templates**: ready-made components listed in the **Templates** tab of the bottom panel. Drag one into the **Explorer** to add it to your project as a new file.

## Selecting an element

The inspector panels of the selected element:

| Panel | Content |
|---|---|
| **Element** | Name, type, HTML tag, [classes](../styling/classes), and [model](./components#model). |
| **Properties** | Attributes of the element (or of the plugin component), static or [bound to a variable](./bindings). |
| **Rendering** | Show the element under a **Condition**, or repeat it with a **Loop** over a list. **Simulation** picks how it is shown in the editor. |
| **Events** | What happens when the user interacts with the element. See [Events](./events). |
| **Style** | Quick style, media queries, hover, and every CSS property. See [Styling](../styling/overview). |

Give important elements a **Name**: it is shown in the layout tree and in the name of their event nodes (`On Click (Hello button)`).

## Where did my element go?

If an element is in the layout tree but not on the canvas:

- it, or one of its parents, may have a **Condition** that is false or a **Loop** over an empty list (in the **Rendering** panel, or on a **Template**). Set **Simulation** to `display` to see it while editing;
- its parent may have no size (an empty Block with no padding);
- a style may hide it (`display: none`, `opacity: 0`, outside of an `overflow: hidden` parent);
- a [media query](../styling/overview) may change its style at the current preview size.
