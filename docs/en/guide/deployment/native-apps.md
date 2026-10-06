---
description: "Build desktop, Android, and iOS apps from a Luna Park project with the desktop editor."
---

# Native Apps

The [desktop app](../getting-started/desktop-app) turns your project into a native application for Windows, macOS, Linux, Android, or iOS. Click the **Native app** button in the top bar.

::: info License
Native builds need an **Edu** or **Pro** license.
:::

## How it works

A native app contains the **frontend** of your project. If your app uses a backend (routes, database, crons), [deploy it on a server](./deployment) first and set its address in **Backend URL**. Frontend-only apps can leave it empty.

For each target, the panel checks your machine and lists the tools to install under **Missing requirements**, with links and commands. Every target needs **Rust**, installed with rustup.

Builds run one at a time and can be cancelled.

## Native settings

| Setting | Description |
|---|---|
| **Package name** | The name of the app. |
| **Identifier** | The unique app id (e.g. `com.company.app`). Saved before the first build: never change it once the app is published. |
| **Version** | The app version, in semver format (e.g. `1.0.0`). |
| **Backend URL** | The address of your deployed backend. |

## Desktop

| Setting | Description |
|---|---|
| **Dimension** | The default size of the window. |
| **Resizable** | Whether the window can be resized. |
| **Fullscreen** | Whether the window opens in full screen. |

- **Preview** opens the app in a native window, connected to the **Watch** server with hot reload.
- **Build** creates the installers for the current operating system. To build for Windows, macOS, and Linux, run it on each system.

## Android

Requirements: Android Studio with the Android SDK and NDK, a JDK 17+ (the one bundled with Android Studio works), and the Rust Android targets.

- Pick a **Device**: a phone connected with USB debugging, a running emulator, or a virtual device that Luna Park starts.
- **Preview** runs the app on the device with hot reload.
- **Test** builds a debug APK.
- **Build** creates a signed APK and AAB, ready for the Play Store.

::: danger Keystore
Release builds are signed with a keystore that Luna Park creates for your app identifier. Use the key button to export it with its password, and keep the backup safe: without it, you cannot publish updates of your app.
:::

## iOS

Requirements: a Mac with Xcode, XcodeGen, CocoaPods, and the Rust iOS target. Set your **Apple team ID**: signing uses the Apple account signed in to Xcode.

- **Test** exports the app for your registered devices.
- **Build** exports it for App Store Connect.
