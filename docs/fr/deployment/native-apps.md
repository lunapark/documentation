---
description: "Créez des applications desktop, Android et iOS à partir d'un projet Luna Park avec l'éditeur desktop."
---

# Applications natives

L'[application desktop](../getting-started/desktop-app) transforme votre projet en application native pour Windows, macOS, Linux, Android ou iOS. Cliquez sur le bouton **Native app** de la barre supérieure.

::: info Licence
Les builds natifs nécessitent une licence **Edu** ou **Pro**.
:::

## Fonctionnement

Une application native contient le **frontend** de votre projet. Si votre application utilise un backend (routes, base de données, crons), [déployez-le sur un serveur](./deployment) d'abord et indiquez son adresse dans **Backend URL**. Les applications uniquement frontend peuvent la laisser vide.

Pour chaque cible, le panneau vérifie votre machine et liste les outils à installer sous **Missing requirements**, avec des liens et des commandes. Toutes les cibles nécessitent **Rust**, installé avec rustup.

Les builds s'exécutent un par un et peuvent être annulés.

## Réglages natifs

| Réglage | Description |
|---|---|
| **Package name** | Le nom de l'application. |
| **Identifier** | L'identifiant unique de l'application (par ex. `com.entreprise.app`). Enregistré avant le premier build : ne le changez jamais une fois l'application publiée. |
| **Version** | La version de l'application, au format semver (par ex. `1.0.0`). |
| **Backend URL** | L'adresse de votre backend déployé. |

## Desktop

| Réglage | Description |
|---|---|
| **Dimension** | La taille par défaut de la fenêtre. |
| **Resizable** | Indique si la fenêtre peut être redimensionnée. |
| **Fullscreen** | Indique si la fenêtre s'ouvre en plein écran. |

- **Preview** ouvre l'application dans une fenêtre native, connectée au serveur **Watch** avec rechargement à chaud.
- **Build** crée les installeurs pour le système d'exploitation courant. Pour Windows, macOS et Linux, lancez-le sur chaque système.

## Android

Prérequis : Android Studio avec le SDK et le NDK Android, un JDK 17+ (celui fourni avec Android Studio convient) et les cibles Rust Android.

- Choisissez un appareil (**Device**) : un téléphone connecté en débogage USB, un émulateur lancé, ou un appareil virtuel que Luna Park démarre.
- **Preview** lance l'application sur l'appareil avec rechargement à chaud.
- **Test** crée un APK de débogage.
- **Build** crée un APK et un AAB signés, prêts pour le Play Store.

::: danger Keystore
Les builds de release sont signés avec un keystore que Luna Park crée pour l'identifiant de votre application. Utilisez le bouton de clé pour l'exporter avec son mot de passe, et gardez cette sauvegarde en lieu sûr : sans elle, vous ne pourrez pas publier de mises à jour de votre application.
:::

## iOS

Prérequis : un Mac avec Xcode, XcodeGen, CocoaPods et la cible Rust iOS. Renseignez votre **Apple team ID** : la signature utilise le compte Apple connecté dans Xcode.

- **Test** exporte l'application pour vos appareils enregistrés.
- **Build** l'exporte pour App Store Connect.
