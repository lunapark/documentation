# Environment setup

To build plugins for Luna Park, you'll need a modern IDE like WebStorm or Visual Studio Code. You'll also need some basic knowledge of TypeScript and Vue.

## Download the boilerplate

Start by cloning the boilerplate repository:
```bash
git clone https://github.com/lunapark/plugin-boilerplate
```

:::info
We use PNPM instead of NPM, so might want to install it with `npm install -g pnpm` if you don't have it yet.
:::

Now, you can install the dependencies with:
```bash
pnpm install
```

## Testing your plugin

To test your plugin (you can directly test the boilerplate as an example), you'll need to run two terminals:
- one to build the plugin and watch for changes
```bash
pnpm run dev
```
- one to serve the plugin
```bash
pnpm run preview 
```

You can now install the plugin directly in Luna Park. Open a project or the [playground editor](https://luna-park.app/editor), then click on the `Libraries/Plugins/Install plugins`.

You'll find an input with the label "Install from URL" at the bottom off the plugins panel.

<DImage
src="/assets/images/plugins/setup/url-install.png"
alt="Install from URL"
/>

Paste the URL of your plugin (default is `http://127.0.0.1:2084`) and hit enter.

You should see **Plugin Boilerplate successfully installed.** displayed in the console.

## Build your plugin

When you want to distribute your plugin, you can build it with:
```bash
pnpm run build
```
