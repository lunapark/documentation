---
description: "Créez des applications Windows, macOS et Linux à partir d'un projet Luna Park avec l'éditeur desktop."
---

<script setup lang="ts">
import {faWindow} from "@fortawesome/pro-solid-svg-icons";
</script>

# Applications desktop

L'[application desktop](../getting-started/desktop-app) transforme votre projet en application native pour **Windows**, **macOS** et **Linux**. Cliquez sur le bouton <LIcon :icon="faWindow"/> **Native app** de la barre supérieure.

::: info Application desktop et licence
Les builds desktop s'exécutent sur votre machine : ils ne sont disponibles que dans l'application desktop, avec une licence **Edu** ou **Pro**.
:::

## Fonctionnement

Une application desktop contient le **frontend** de votre projet, affiché dans une fenêtre native par la web view du système. Les installeurs restent légers, car aucun navigateur n'est embarqué.

Si votre application utilise un backend (routes, base de données, crons), [déployez-le sur un serveur](./deployment) d'abord et indiquez son adresse dans **Backend URL**. Les applications uniquement frontend peuvent la laisser vide.

Les builds s'exécutent un par un et peuvent être annulés avec le bouton d'arrêt.

## Réglages natifs

Ces réglages sont partagés avec les [applications mobiles](./mobile).

| Réglage | Description |
|---|---|
| **Package name** | Le nom de l'application, dérivé du nom défini dans les **General Settings**. |
| **Identifier** | L'identifiant unique de l'application (par ex. `com.entreprise.app`). Enregistré avant le premier build ou aperçu : ne le changez jamais une fois l'application publiée. |
| **Version** | La version de l'application, au format semver (par ex. `1.0.0`). |
| **Backend URL** | L'adresse de votre backend déployé (par ex. `https://example.com/api`). |

## Réglages de la fenêtre

La section **Desktop build** règle la fenêtre principale :

| Réglage | Description |
|---|---|
| **Dimension** | La taille par défaut de la fenêtre, en pixels. |
| **Resizable** | Indique si la fenêtre peut être redimensionnée. |
| **Fullscreen** | Indique si la fenêtre s'ouvre en plein écran. |

## Aperçu

**Preview** lance le serveur **Watch** et ouvre l'application dans une fenêtre native, avec rechargement à chaud. Cliquez sur **Close** pour l'arrêter.

## Build

**Build** crée les installeurs pour le système d'exploitation sur lequel vous travaillez :

| Système | Installeurs |
|---|---|
| Windows | `.msi` et installeur `.exe` |
| macOS | `.app` et `.dmg` |
| Linux | `.deb`, `.rpm` et `.AppImage` |

Pour Windows, macOS et Linux, lancez le build sur chaque système. **Open folder** ouvre le dossier du dernier build.

::: warning Signature du code
Les installeurs ne sont pas signés. Windows SmartScreen et macOS Gatekeeper avertissent les utilisateurs quand ils ouvrent une application non signée.
:::

## Prérequis

Le panneau vérifie votre machine et liste les outils manquants sous **Missing requirements**, avec des liens et des commandes d'installation. Cliquez sur **Check again** après les avoir installés. Luna Park ne les installe jamais à votre place.

| Système | Prérequis |
|---|---|
| Tous | Node.js, pnpm et Rust (installé avec rustup) |
| Windows | Microsoft C++ Build Tools |
| macOS | Xcode Command Line Tools |
| Linux | WebKitGTK et les bibliothèques système |
