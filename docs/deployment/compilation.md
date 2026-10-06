---
description: "Compile a Luna Park application: deploy it for testing, download its code, or run it locally with the desktop app."
---

<script setup lang="ts">
import {faGear, faHammer, faUpRightFromSquare} from "@fortawesome/pro-solid-svg-icons";
</script>

# Compilation

Luna Park compiles your project into a standard web application: a **Vue** frontend and a **Node.js** backend (Fastify and PostgreSQL). You own the generated code and can host it anywhere.

## Compile in the Cloud Version

Click the <LIcon :icon="faHammer"/> **Compile** button in the top bar. The **Web** section offers three options.

### Hosting

Click `Deploy` to publish the frontend of your application on a Luna Park link, then click the <LIcon :icon="faUpRightFromSquare" /> icon next to it to open it. This is meant for testing and sharing: the backend (routes, database, crons) is not hosted.

### Source code

`Download` the readable source code of your application: the npm project with a `.vue` file for each component and the TypeScript of your logic. It needs to be compiled before deployment. Not available on the Free plan.

### Export code

`Download` the compiled application, ready to deploy: the built frontend (HTML, CSS, JS), the backend, and the tools to run them. See [Self-hosting](./deployment) to put it online.

## Compile in the Desktop App

In the [desktop app](../getting-started/desktop-app), the <LIcon :icon="faHammer"/> **Compile** button works on your machine:

| Section | Action | Description |
|---|---|---|
| Build | **Generate** | Generates the code of the application in the project folder. A button opens the folder. |
| Server | **Watch** | Starts a development server with hot reload at `http://127.0.0.1:1980`. Re-generate the code and the server updates. |
| Server | **Production** | Starts a server with the final build (what you would deploy) at `http://127.0.0.1:3080`. |

These actions need Node.js 24 to 26 and pnpm 12 or newer (see [Prerequisites](./prerequisites)). To build desktop or mobile apps, see [Native Apps](./native-apps).

## Settings

The settings are available in the <LIcon :icon="faGear"/> **General Settings** button of the top bar. You can change the name of your application there, and choose the history mode:

- **Hash Mode** (default): Generates links like `myApp.com/#/home/dashboard`. This mode works in most cases but is not optimal for SEO and does not work with page anchors.
- **Web Mode**: Generates links like `myApp.com/home/dashboard`. This mode is better for SEO but requires server configuration to redirect all 404 errors to the `index` file.
- **Memory Mode**: Generates links like `myApp.com/` (the path is hidden). This mode works in all conditions but is not optimal for SEO.

Native apps always use Hash Mode.

::: warning PWA Not Available
The **PWA** option (installing the app from the browser) is not ready yet.
:::

The **Backend Settings** button sets an outgoing **Proxy** for the backend and the **Cookie salt** used to sign cookies.
