---
description: "Install NPM packages in a Luna Park project and use their functions as logic nodes."
---

# NPM

Luna Park can use packages from the [npm](https://www.npmjs.com/) registry, the largest library of JavaScript code. Their functions become logic nodes, and Vue component packages add components to the editor.

## Install a package

1. Click **Libraries** in the top bar, then **Install packages**.
2. In the **Packages** tab, search for a package by name.
3. Select it and click **Scan package**: Luna Park reads its type definitions to find what it exports.
4. Click **Install**.

The **Installed** tab lists the packages of the project.

::: tip Sub-paths
Some packages expose features under a sub-path (for example `date-fns/locale`). Once a package is installed, open the `...` menu next to **Package installed** and enter the **Child package** name.
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

To remove a package, open it and click **Uninstall**.
