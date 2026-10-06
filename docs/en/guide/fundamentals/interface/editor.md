---
description: "Learn how to use the Luna Park editor's panels, top bar, modes, and keyboard shortcuts."
---

<script setup lang="ts">
import Screen1 from '/assets/images/layout/editor/screen1.png';
import Screen2 from '/assets/images/layout/editor/screen2.png';
import Screen3 from '/assets/images/layout/editor/screen3.png';
import Screen4 from '/assets/images/layout/editor/screen4.png';
import Screen5 from '/assets/images/layout/editor/screen5.png';
import Screen6 from '/assets/images/layout/editor/screen6.png';
import ImmersiveMode from '/assets/images/layout/editor/immersive-mode.png';
</script>

# Editor

The editor lets you build your application using layouts and visual logic. It consists of several panels that serve different purposes. Every panel can be resized, and its size is remembered.

<DImage
:src="Screen1"
alt="Overview of the Luna Park editor"
/>

## The Explorer

The explorer is located at the top left of the editor. It lists the [files of your project](../project-files). Create a new file with a `right-click`, open it with a `double-click`, rename it with `F2`, and delete it with the `Del` key. You can create folders to better organize your project, but the structure does not affect the logic of your application.

The sort button switches between sorting by type and by name.

<DImage
:src="Screen2"
alt="Explorer panel with the project files"
/>

## Options Panel

The options panel is located at the bottom left of the editor. Its content depends on the open file:

- for a page or component, it displays the **layout tree** (use **Collapse layout** to fold it);
- for a script, a route, or a store, it lists its **Local Variables** and **Functions**.

<DImage
:src="Screen3"
alt="Options panel showing the layout tree of a component"
/>

## Tabs

Each opened file gets a tab above the main view. Right-click a tab to **Close** it, **Close other tabs**, or **Close all tabs**.

## The Inspector

The inspector is located on the right side of the editor. It displays information related to the selected element (a file, a layout element, a logic node, etc.). Use the pin button to keep it on the current element while selecting others.

<DImage
:src="Screen4"
alt="Inspector displaying the properties of a layout element"
/>

## The Console

The console is located at the bottom of the editor. It lets you log values to debug your application. To display a value in it, use the `Log` node in the logic editor. The value is also sent to your browser's console.

The bottom panel has a second tab, **Templates**, listing ready-made blocks provided by your plugins. Drag one into your layout to use it.

Point your cursor at the panel's border and drag it to resize it, or use the toggle button to hide it.

<DImage
:src="Screen5"
alt="Console panel with logged values"
/>

## The Main View

The main view is the central part of the editor. It displays the working file. For a page or component, three modes are available:

| Mode | Description |
|---|---|
| **Builder** | Edit the layout visually. Side panels give access to **Quick style**, **Properties**, **Events**, **Rendering**, **Classes**, **Style**, **Media query**, and **Hover**. |
| **Preview** | Use the component as in the final app. |
| **Logic** | Edit the component's visual scripting graph. |

Other options let you **Open preview in new window**, **Block interactions**, **Lock preview mode**, and show or hide the insert mode.

<DImage
:src="Screen6"
alt="Main view in builder mode"
/>

## Navigator and Finder

Press `Shift` twice to open the **Navigator**:

- press `F` for the **Finder**: search any file or element of the project, move with the arrow keys and open with `Enter`. Shortcut: `Ctrl + Shift + F`;
- press `S` for [Sidekick](../../getting-started/sidekick-settings), the AI assistant. Shortcut: `Ctrl + Shift + X`.

`Esc` closes it.

## The Top Bar

| Button | Content |
|---|---|
| Save / Auto-save | Save the project, or toggle automatic saving. |
| Undo / Redo | Undo or redo the last change. |
| **Palette** | Design [tokens](./styling/tokens) (colors, lengths, fonts), code injection, and the responsive strategy. See [Palette](./styling/palette). |
| **Stores** | Reset all [stores](../logic/store), or clear their saved values in browser storage. |
| **Libraries** | Enable [node libraries](../logic/visual-scripting/libraries), install [plugins](../../integrations/plugins) and [npm packages](../../integrations/npm). |
| **Sidekick AI** | Open [Sidekick](../../getting-started/sidekick-settings) and configure its provider. |
| **General Settings** | App name, PWA, and history mode (see [Compilation](../../deployment/compilation)). |
| **Backend Settings** | Outgoing **Proxy**, **Cookie salt**, and the cookies stored by the editor's backend. |
| **Compile** | Deploy or export the app (see [Compilation](../../deployment/compilation)). |
| Plugins | One button per installed plugin, with its **Config** and **Settings**. |
| **History** | Local undo snapshots of the current file. They are not saved. |
| **Debug** | **Import/Export**: copy the whole project to the clipboard, or paste one. |
| **Flags** | Editor flags (**Autosave**, **Immersive**, **Light Mode**) and session flags (animation, debug output...). |
| **Help** | Links to Discord, YouTube, and this documentation. |

The [desktop app](../../getting-started/desktop-app) adds the **MCP server** and **Native app** buttons.

## Keyboard Shortcuts

| Context | Shortcut | Action |
|---|---|---|
| Everywhere | `Ctrl + S` | Save |
| Everywhere | `Ctrl + Z` / `Ctrl + Y` | Undo / Redo |
| Everywhere | `Shift` `Shift` | Navigator |
| Everywhere | `Ctrl + Shift + F` | Finder |
| Everywhere | `Ctrl + Shift + X` | Sidekick |
| Explorer, layout tree, variables | `Ctrl + X` / `C` / `V` | Cut / Copy / Paste |
| Explorer, layout tree, variables | `F2` | Rename |
| Explorer, layout tree, variables | `Del` | Delete |
| Builder | Hold `Ctrl` | Drag elements quickly |
| Logic graph | See [The Graph](../logic/visual-scripting/graph) | |

Right-click a layout element for more actions: **Create before**, **Create after**, **Create inside**, **Wrap in component**, **Unwrap and delete**, **Copy Style**, and **Paste Style**.

## Immersive Mode

**Immersive mode** hides the side panels (explorer, inspector, console) to maximize the available space on the canvas. The panels reappear when you need them.

Enable it by checking **Immersive** in the **Flags** menu of the top bar.

Once closed, the panels appear as a thin bar with their name on the edges of the screen. Hover over a panel's bar to reopen it.

Immersive mode is ideal when working on complex layouts or when you want an unobstructed view of the canvas.

<DImage :src="ImmersiveMode" alt="Editor in immersive mode with panels hidden" />
