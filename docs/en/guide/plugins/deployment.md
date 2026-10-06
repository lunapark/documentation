---
description: "Learn how to distribute Luna Park plugins for private and public use."
---

# Deployment

Build your plugin with `pnpm run build`. The editor loads plugins as ES modules from [esm.sh](https://esm.sh), with `vue`, `vue-router`, and `@luna-park/design` kept external: declare them as peer dependencies.

## Restricted Distribution

If you wish to distribute your plugin privately, you can host it on GitHub and use a service like [pkg.pr.new](https://pkg.pr.new/). Users will need to manually enter your plugin's URL in the **Install from URL** field.

## Public Distribution

To make your plugin discoverable in Luna Park's plugin search, publish it to npm with the keywords `luna-park` and `plugin` in its `package.json`:

```json
{
    "keywords": ["luna-park", "plugin"]
}
```

Plugins published outside the `@luna-park/` scope show a confirmation before being installed.

## In compiled apps

When a project is compiled, the plugin's `build` options are applied: dependencies, environment variables, and code injections (see [Backend and Build](./backend#build)). Make sure every node, component, and guard that users can add has what it needs to run outside the editor:

- nodes: a self-contained method or `build.generate` (see [Custom nodes](./nodes#compiled-code));
- components: `build.imports` (see [Custom components](./components#compiled-app));
- guards: `build.generate`.
