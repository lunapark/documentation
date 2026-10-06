---
description: "Compilez une application Luna Park : déployez-la pour la tester, téléchargez son code ou lancez-la en local avec l'application desktop."
---

<script setup lang="ts">
import {faGear, faHammer, faUpRightFromSquare} from "@fortawesome/pro-solid-svg-icons";
</script>

# Compilation

Luna Park compile votre projet en une application web standard : un frontend **Vue** et un backend **Node.js** (Fastify et PostgreSQL). Le code généré vous appartient et peut être hébergé n'importe où.

## Compiler dans la version cloud

Cliquez sur le bouton <LIcon :icon="faHammer"/> **Compile** de la barre supérieure. La section **Web** propose trois options.

### Hébergement

Cliquez sur `Deploy` pour publier le frontend de votre application sur un lien Luna Park, puis sur l'icône <LIcon :icon="faUpRightFromSquare" /> à côté pour l'ouvrir. C'est fait pour tester et partager : le backend (routes, base de données, crons) n'est pas hébergé.

### Code source

`Download` le code source lisible de votre application : le projet npm avec un fichier `.vue` pour chaque composant et le TypeScript de votre logique. Il doit être compilé avant d'être déployé. Non disponible avec l'offre Free.

### Code d'export

`Download` l'application compilée, prête à déployer : le frontend construit (HTML, CSS, JS), le backend et les outils pour les lancer. Voir [Auto-hébergement](./deployment) pour la mettre en ligne.

## Compiler dans l'application desktop

Dans l'[application desktop](../getting-started/desktop-app), le bouton <LIcon :icon="faHammer"/> **Compile** travaille sur votre machine :

| Section | Action | Description |
|---|---|---|
| Build | **Generate** | Génère le code de l'application dans le dossier du projet. Un bouton ouvre le dossier. |
| Server | **Watch** | Lance un serveur de développement avec rechargement à chaud sur `http://127.0.0.1:1980`. Régénérez le code et le serveur se met à jour. |
| Server | **Production** | Lance un serveur avec le build final (ce que vous déploieriez) sur `http://127.0.0.1:3080`. |

Ces actions nécessitent Node.js 24 à 26 et pnpm 12 ou plus (voir [Prérequis](./prerequisites)). Pour créer des applications desktop ou mobiles, voir [Applications natives](./native-apps).

## Paramètres

Les paramètres sont disponibles dans le bouton <LIcon :icon="faGear"/> **General Settings** de la barre supérieure. Vous pouvez y modifier le nom de votre application et choisir le mode d'historique :

- **Hash Mode** (par défaut) : Génère des liens de type `monApp.com/#/accueil/tableau-de-bord`. Ce mode fonctionne dans la plupart des cas mais n'est pas optimal pour le SEO et ne fonctionne pas avec les ancres de page.
- **Web Mode** : Génère des liens de type `monApp.com/accueil/tableau-de-bord`. Ce mode est meilleur pour le SEO mais nécessite de configurer le serveur pour rediriger toutes les erreurs 404 vers le fichier `index`.
- **Memory Mode** : Génère des liens de type `monApp.com/` (le chemin est caché). Ce mode fonctionne dans toutes les conditions mais n'est pas optimal pour le SEO.

Les applications natives utilisent toujours le Hash Mode.

::: warning PWA non disponible
L'option **PWA** (installer l'application depuis le navigateur) n'est pas encore prête.
:::

Le bouton **Backend Settings** définit un **Proxy** sortant pour le backend et le **Cookie salt** utilisé pour signer les cookies.
