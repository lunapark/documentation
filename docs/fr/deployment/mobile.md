---
description: "Créez des applications Android et iOS à partir d'un projet Luna Park avec l'éditeur desktop."
---

<script setup lang="ts">
import {faWindow} from "@fortawesome/pro-solid-svg-icons";
</script>

# Applications mobiles

L'[application desktop](../getting-started/desktop-app) transforme votre projet en application native pour **Android** et **iOS**. Cliquez sur le bouton <LIcon :icon="faWindow"/> **Native app** de la barre supérieure.

::: info Application desktop et licence
Les builds mobiles s'exécutent sur votre machine : ils ne sont disponibles que dans l'application desktop, avec une licence **Edu** ou **Pro**.
:::

## Fonctionnement

Une application mobile contient le **frontend** de votre projet, affiché par la web view du téléphone. Si votre application utilise un backend (routes, base de données, crons), [déployez-le sur un serveur](./deployment) d'abord et indiquez son adresse dans **Backend URL** : le téléphone doit pouvoir y accéder.

L'identifiant, la version et l'URL du backend sont les [réglages natifs](./desktop#reglages-natifs) partagés avec les applications desktop.

Le panneau vérifie votre machine pour chaque plateforme et liste les outils manquants sous **Missing requirements**, avec des liens et des commandes d'installation. Chaque plateforme nécessite Node.js, pnpm et **Rust**, installé avec rustup.

## Android

### Prérequis

- **Android Studio**, avec le SDK Android. Définissez `ANDROID_HOME` si le SDK est à un emplacement personnalisé.
- Le **NDK Android** : dans Android Studio, ouvrez le SDK Manager, puis SDK Tools, et installez « NDK (Side by side) ».
- Un **JDK 17** ou plus récent. Celui fourni avec Android Studio convient.
- Les cibles Rust Android (le panneau donne la commande).

### Aperçu

Choisissez un appareil (**Device**) : un téléphone connecté en débogage USB, un émulateur lancé, ou un appareil virtuel que Luna Park démarre. **Preview** lance le serveur **Watch** et l'application sur l'appareil, avec rechargement à chaud.

### Build

| Action | Résultat |
|---|---|
| **Test** | Un APK de débogage, à installer sur vos propres appareils. |
| **Build** | Un APK et un AAB signés, prêts pour Google Play. |

**Open folder** ouvre le dossier du dernier build.

::: danger Keystore
Les builds de release sont signés avec un keystore d'upload que Luna Park crée pour l'identifiant de votre application. Cliquez sur **Export** à côté de **Keystore** pour l'enregistrer avec son mot de passe, et gardez cette sauvegarde en lieu sûr : sans elle, vous ne pourrez pas publier de mises à jour de votre application.
:::

## iOS

### Prérequis

- Un **Mac** avec **Xcode**, **XcodeGen** et **CocoaPods**.
- La cible Rust iOS (le panneau donne la commande).
- Votre **Apple team ID**, disponible dans les détails d'adhésion (Membership details) de votre compte Apple Developer. La signature utilise le compte Apple connecté dans Xcode.

### Build

| Action | Résultat |
|---|---|
| **Test** | Un IPA pour vos appareils enregistrés. |
| **Build** | Un IPA pour App Store Connect. |
