---
description: "Create Luna Park plugins that extend the editor with components, logic nodes, tokens, hooks, and more."
---

# Introduction

This section covers creating plugins for Luna Park. If you are looking to install and use an existing plugin instead, see [Integrations > Plugins](/en/guide/integrations/plugins).

## What a plugin can extend

A plugin can expose:

- **Custom components**: Vue components that appear in the editor palette, with typed props, slots, events, and models.
- **Custom logic nodes**: operations and functions available in the visual scripting graph.
- **Design tokens**: reusable style values (colors, lengths, fonts) that appear in the style panel.
- **Lifecycle hooks**: code that runs on mount, update, or unmount of the plugin.
- **Injections**: CSS or JavaScript injected into the editor.
- **Custom windows**: tailored UI panels opened from your plugin.
- **Templates**: ready-made compositions that users can import into their projects.

## Prerequisites

- **TypeScript** for the plugin definition.
- **Vue** if you expose custom components.

## Get started

1. [Environment setup](./setup) to initialize a plugin project.
2. [Basics](./basics) for the structure of a plugin (id, config, internal state, hooks).
3. The following sections cover components, nodes, tokens, and deployment.
