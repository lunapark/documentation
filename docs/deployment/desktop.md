---
description: "Build Windows, macOS, and Linux apps from a Luna Park project with the desktop editor."
---

<script setup lang="ts">
import {faWindow} from "@fortawesome/pro-solid-svg-icons";
</script>

# Desktop Apps

The [desktop app](../getting-started/desktop-app) turns your project into a native application for **Windows**, **macOS**, and **Linux**. Click the <LIcon :icon="faWindow"/> **Native app** button in the top bar.

::: info Desktop app and license
Desktop builds run on your machine: they are only available in the desktop app, with an **Edu** or **Pro** license.
:::

## How it works

A desktop app contains the **frontend** of your project, displayed in a native window by the system's web view. The installers stay small, since no browser is bundled.

If your app uses a backend (routes, database, crons), [deploy it on a server](./deployment) first and set its address in **Backend URL**. Frontend-only apps can leave it empty.

Builds run one at a time and can be cancelled with the stop button.

## Native settings

These settings are shared with [mobile apps](./mobile).

| Setting | Description |
|---|---|
| **Package name** | The name of the app, derived from the app name in the **General Settings**. |
| **Identifier** | The unique app id (e.g. `com.company.app`). Saved before the first build or preview: never change it once the app is published. |
| **Version** | The app version, in semver format (e.g. `1.0.0`). |
| **Backend URL** | The address of your deployed backend (e.g. `https://example.com/api`). |

## Window settings

The **Desktop build** section sets the main window:

| Setting | Description |
|---|---|
| **Dimension** | The default size of the window, in pixels. |
| **Resizable** | Whether the window can be resized. |
| **Fullscreen** | Whether the window opens in full screen. |

## Preview

**Preview** starts the **Watch** server and opens the app in a native window, with hot reload. Click **Close** to stop it.

## Build

**Build** creates the installers for the operating system you are working on:

| System | Installers |
|---|---|
| Windows | `.msi` and `.exe` setup |
| macOS | `.app` and `.dmg` |
| Linux | `.deb`, `.rpm`, and `.AppImage` |

To build for Windows, macOS, and Linux, run the build on each system. **Open folder** opens the folder of the last build.

::: warning Code signing
The installers are not code-signed. Windows SmartScreen and macOS Gatekeeper warn users when they open an unsigned app.
:::

## Requirements

The panel checks your machine and lists the missing tools under **Missing requirements**, with install links and commands. Click **Check again** after installing them. Luna Park never installs them for you.

| System | Requirements |
|---|---|
| All | Node.js, pnpm, and Rust (installed with rustup) |
| Windows | Microsoft C++ Build Tools |
| macOS | Xcode Command Line Tools |
| Linux | WebKitGTK and system libraries |
