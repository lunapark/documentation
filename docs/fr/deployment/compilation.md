---
description: "Compilez une application Luna Park pour le web, le desktop ou le mobile, depuis la version cloud ou l'application desktop."
---

<script setup lang="ts">
import {faHammer, faUpRightFromSquare, faWindow} from "@fortawesome/pro-solid-svg-icons";
</script>

# Compilation

Luna Park compile votre projet en une application standard : un frontend **Vue** et un backend **Node.js** (Fastify et PostgreSQL). Le code généré vous appartient et peut être hébergé n'importe où.

## Cibles

À partir du même projet, vous pouvez créer :

| Cible | Résultat | Disponible dans | En savoir plus |
|---|---|---|---|
| **Application web** | Une application monopage et son backend | Version cloud et application desktop | [Application web](./web) |
| **PWA** | Une application web que les utilisateurs installent depuis leur navigateur | Version cloud et application desktop | [Progressive Web App](./web#progressive-web-app) |
| **Application desktop** | Des installeurs pour Windows, macOS et Linux | Application desktop uniquement | [Applications desktop](./desktop) |
| **Application mobile** | APK et AAB pour Android, IPA pour iOS | Application desktop uniquement | [Applications mobiles](./mobile) |

Les applications desktop et mobiles contiennent le frontend de votre projet. Si votre application utilise un backend (routes, base de données, crons), il tourne sur un serveur : voir [Auto-hébergement](./deployment).

## Compiler dans la version cloud

Cliquez sur le bouton <LIcon :icon="faHammer"/> **Compile** de la barre supérieure. La section **Web** propose trois options.

### Hébergement

Cliquez sur `Deploy` pour publier le frontend de votre application sur un lien Luna Park, puis sur l'icône <LIcon :icon="faUpRightFromSquare" /> à côté pour l'ouvrir. C'est fait pour tester et partager : le backend (routes, base de données, crons) n'est pas hébergé.

### Code source

`Download` le code source lisible de votre application : le projet npm avec un fichier `.vue` pour chaque composant et le TypeScript de votre logique. Il doit être compilé avant d'être déployé. Non disponible avec l'offre Free.

### Code d'export

`Download` l'application compilée, prête à déployer : le frontend construit (HTML, CSS, JS), le backend et les outils pour les lancer. Voir [Auto-hébergement](./deployment) pour la mettre en ligne.

::: info Applications desktop et mobiles
Les builds desktop et mobiles s'exécutent sur votre propre machine : ils ne sont disponibles que dans l'[application desktop](../getting-started/desktop-app).
:::

## Compiler dans l'application desktop

Dans l'[application desktop](../getting-started/desktop-app), le bouton <LIcon :icon="faHammer"/> **Compile** travaille sur votre machine :

| Section | Action | Description |
|---|---|---|
| Build | **Generate** | Génère le code de l'application dans le dossier du projet. Un bouton ouvre le dossier. |
| Server | **Watch** | Lance un serveur de développement avec rechargement à chaud sur `http://127.0.0.1:1980`. Régénérez le code et le serveur se met à jour. |
| Server | **Production** | Lance un serveur avec le build final (ce que vous déploieriez) sur `http://127.0.0.1:3080`. |

Ces actions nécessitent Node.js 24 à 26 et pnpm 12 ou plus (voir [Prérequis](./prerequisites)).

Le bouton <LIcon :icon="faWindow"/> **Native app** crée les applications [desktop](./desktop) et [mobiles](./mobile).
