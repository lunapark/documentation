# Environment Setup

To build plugins for Luna Park, a modern IDE such as WebStorm or Visual Studio Code is recommended. Basic knowledge of TypeScript and Vue is also required.

## Downloading the Boilerplate

Start by cloning the plugin boilerplate repository:
```bash
git clone https://github.com/lunapark/plugin-boilerplate
```

:::info
We use PNPM instead of NPM. If you don't have it installed, you can install it using `npm install -g pnpm`.
:::

Next, install the project dependencies:
```bash
pnpm install
```

## Testing Your Plugin

To test your plugin (or the boilerplate), you will need to run two separate terminal instances:

1. One to build the plugin and watch for changes:
```bash
pnpm run dev
```
2. One to serve the plugin:
```bash
pnpm run preview 
```

You can now install the plugin directly in Luna Park. Open a project or the [playground editor](https://luna-park.app/editor), then navigate to `Libraries > Plugins > Install Plugins`.

Locate the "Install from URL" input field at the bottom of the plugins panel.

<DImage
src="/assets/images/plugins/setup/url-install.png"
alt="Install from URL"
/>

Paste your plugin's URL (default: `http://127.0.0.1:2084`) and press Enter.

You should see the message **Plugin Boilerplate successfully installed.** in the console.

## Building Your Plugin

To build your plugin for distribution, run the following command:
```bash
pnpm run build
```
