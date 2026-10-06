---
description: "Compile a Luna Park application for the web, desktop, or mobile, from the cloud version or the desktop app."
---

<script setup lang="ts">
import {faHammer, faUpRightFromSquare, faWindow} from "@fortawesome/pro-solid-svg-icons";
</script>

# Compilation

Luna Park compiles your project into a standard application: a **Vue** frontend and a **Node.js** backend (Fastify and PostgreSQL). You own the generated code and can host it anywhere.

## Targets

From the same project, you can build:

| Target | Output | Available in | Learn more |
|---|---|---|---|
| **Web app** | A single-page application and its backend | Cloud version and desktop app | [Web App](./web) |
| **PWA** | A web app that users install from their browser | Cloud version and desktop app | [Progressive Web App](./web#progressive-web-app) |
| **Desktop app** | Installers for Windows, macOS, and Linux | Desktop app only | [Desktop Apps](./desktop) |
| **Mobile app** | APK and AAB for Android, IPA for iOS | Desktop app only | [Mobile Apps](./mobile) |

Desktop and mobile apps contain the frontend of your project. If your app uses a backend (routes, database, crons), it runs on a server: see [Self-hosting](./deployment).

## Compile in the Cloud Version

Click the <LIcon :icon="faHammer"/> **Compile** button in the top bar. The **Web** section offers three options.

### Hosting

Click `Deploy` to publish the frontend of your application on a Luna Park link, then click the <LIcon :icon="faUpRightFromSquare" /> icon next to it to open it. This is meant for testing and sharing: the backend (routes, database, crons) is not hosted.

### Source code

`Download` the readable source code of your application: the npm project with a `.vue` file for each component and the TypeScript of your logic. It needs to be compiled before deployment. Not available on the Free plan.

### Export code

`Download` the compiled application, ready to deploy: the built frontend (HTML, CSS, JS), the backend, and the tools to run them. See [Self-hosting](./deployment) to put it online.

::: info Desktop and mobile apps
Desktop and mobile builds run on your own machine: they are only available in the [desktop app](../getting-started/desktop-app).
:::

## Compile in the Desktop App

In the [desktop app](../getting-started/desktop-app), the <LIcon :icon="faHammer"/> **Compile** button works on your machine:

| Section | Action | Description |
|---|---|---|
| Build | **Generate** | Generates the code of the application in the project folder. A button opens the folder. |
| Server | **Watch** | Starts a development server with hot reload at `http://127.0.0.1:1980`. Re-generate the code and the server updates. |
| Server | **Production** | Starts a server with the final build (what you would deploy) at `http://127.0.0.1:3080`. |

These actions need Node.js 24 to 26 and pnpm 12 or newer (see [Prerequisites](./prerequisites)).

The <LIcon :icon="faWindow"/> **Native app** button builds the [desktop](./desktop) and [mobile](./mobile) apps.
