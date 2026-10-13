---
description: "Install NPM packages in a Luna Park project and use their functions as logic nodes."
---

<script setup lang="ts">
import Workspace from '/assets/images/integrations/npm/workspace.png';
import {faShelves, faDownload} from "@fortawesome/pro-solid-svg-icons";
</script>

# NPM

Luna Park can use packages from the [npm](https://www.npmjs.com/) registry, the largest library of JavaScript code. Their functions become logic nodes, and Vue component packages add components to the editor.

## Install a package

1. Open the <LIcon :icon="faShelves" /> **Libraries** [workspace](../workspace/editor#the-workspace), and go to the **Packages** section.
2. Search for a package by name in the **Search NPM packages...** field. Each result shows its monthly downloads and latest version.
3. Click the <LIcon :icon="faDownload" /> button of a result to scan and install it right away.

To check a package first, click it: its details (README) open on the side. Click **Scan package**: Luna Park reads its type definitions to find what it exports. Then click **Install**.

<DImage
:src="Workspace" :width="1280" :height="720"
alt="Packages section of the Libraries workspace with search results, and the selected package details"
/>

The **Installed** list shows the packages of the project.

::: tip Sub-paths
Some packages expose features under a sub-path (for example `date-fns/locale`). Once a package is installed, select it and open the `...` menu next to **Package installed** and enter the **Child package** name.
:::

## Use a package

Each exported function becomes a node, found in the node search under the package's name (`package/<name>/...`). Inputs and outputs follow the function's TypeScript types.

Packages that export Vue components also add those components to the editor.

## How it works

- **In the editor**, packages are loaded from the [esm.sh](https://esm.sh) CDN.
- **In the exported app**, they are added to the project's `package.json` and installed like any dependency.

::: warning
Pick packages that ship TypeScript types and run in the browser: without types, Luna Park can't tell which nodes to create, and the editor runs your logic in the browser.
:::

To remove a package, click its trash icon in the **Installed** list, or select it and click **Uninstall**.
