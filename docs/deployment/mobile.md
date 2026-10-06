---
description: "Build Android and iOS apps from a Luna Park project with the desktop editor."
---

<script setup lang="ts">
import {faWindow} from "@fortawesome/pro-solid-svg-icons";
</script>

# Mobile Apps

The [desktop app](../getting-started/desktop-app) turns your project into a native application for **Android** and **iOS**. Click the <LIcon :icon="faWindow"/> **Native app** button in the top bar.

::: info Desktop app and license
Mobile builds run on your machine: they are only available in the desktop app, with an **Edu** or **Pro** license.
:::

## How it works

A mobile app contains the **frontend** of your project, displayed by the phone's web view. If your app uses a backend (routes, database, crons), [deploy it on a server](./deployment) first and set its address in **Backend URL**: the phone must be able to reach it.

The identifier, version, and backend URL are the [native settings](./desktop#native-settings) shared with desktop apps.

The panel checks your machine for each platform and lists the missing tools under **Missing requirements**, with install links and commands. Every platform needs Node.js, pnpm, and **Rust**, installed with rustup.

## Android

### Requirements

- **Android Studio**, with the Android SDK. Set `ANDROID_HOME` if the SDK is in a custom location.
- The **Android NDK**: in Android Studio, open the SDK Manager, then SDK Tools, and install "NDK (Side by side)".
- A **JDK 17** or newer. The one bundled with Android Studio works.
- The Rust Android targets (the panel gives the command).

### Preview

Pick a **Device**: a phone connected with USB debugging, a running emulator, or a virtual device that Luna Park starts. **Preview** starts the **Watch** server and runs the app on the device, with hot reload.

### Build

| Action | Output |
|---|---|
| **Test** | A debug APK, to install on your own devices. |
| **Build** | A signed APK and AAB, ready for Google Play. |

**Open folder** opens the folder of the last build.

::: danger Keystore
Release builds are signed with an upload keystore that Luna Park creates for your app identifier. Click **Export** next to **Keystore** to save it with its password, and keep the backup safe: without it, you cannot publish updates of your app.
:::

## iOS

### Requirements

- A **Mac** with **Xcode**, **XcodeGen**, and **CocoaPods**.
- The Rust iOS target (the panel gives the command).
- Your **Apple team ID**, found under Membership details in your Apple Developer account. Signing uses the Apple account signed in to Xcode.

### Build

| Action | Output |
|---|---|
| **Test** | An IPA for your registered devices. |
| **Build** | An IPA for App Store Connect. |
