---
description: "Configurez la version web d'une application Luna Park : nom de l'application, mode d'historique, Progressive Web App et réglages du backend."
---

<script setup lang="ts">
import {faGear} from "@fortawesome/pro-solid-svg-icons";
</script>

# Application web

La version web de votre application est une **application monopage** (Vue, construite avec Vite), servie par son backend Node.js ou par n'importe quel hébergeur statique. C'est ce que vous obtenez en [compilant](./compilation) votre projet, depuis la version cloud ou l'application desktop. Pour la mettre en ligne, voir [Auto-hébergement](./deployment).

## Paramètres généraux

Les paramètres sont disponibles dans le bouton <LIcon :icon="faGear"/> **General Settings** de la barre supérieure. Vous pouvez y modifier le nom de votre application et choisir le mode d'historique :

- **Hash Mode** (par défaut) : Génère des liens de type `monApp.com/#/accueil/tableau-de-bord`. Ce mode fonctionne dans la plupart des cas mais n'est pas optimal pour le SEO et ne fonctionne pas avec les ancres de page.
- **Web Mode** : Génère des liens de type `monApp.com/accueil/tableau-de-bord`. Ce mode est meilleur pour le SEO mais nécessite de configurer le serveur pour rediriger toutes les erreurs 404 vers le fichier `index`.
- **Memory Mode** : Génère des liens de type `monApp.com/` (le chemin est caché). Ce mode fonctionne dans toutes les conditions mais n'est pas optimal pour le SEO.

Les applications [desktop](./desktop) et [mobiles](./mobile) utilisent toujours le Hash Mode.

## Progressive Web App

Une Progressive Web App (PWA) s'installe depuis le navigateur, sur un ordinateur ou un téléphone : elle obtient une icône, s'ouvre dans sa propre fenêtre, et charge son interface sans réseau une fois installée.

Activez-la dans la section **Progressive Web App** des <LIcon :icon="faGear"/> **General Settings** :

| Paramètre | Par défaut | Description |
|---|---|---|
| **Enabled** | Désactivé | Transforme l'application en PWA. |
| **Short name** | Nom de l'application | Le nom affiché sous l'icône, quand la place est limitée. |
| **Description** | Vide | Une courte description de l'application. |
| **Icon (512×512)** | Icône Luna Park | L'URL d'une image carrée de 512×512 utilisée comme icône de l'application. |
| **Theme color** | `#ffffff` | La couleur de la barre de titre et de l'interface du navigateur autour de l'application. |
| **Background** | `#ffffff` | La couleur de l'écran de démarrage affiché pendant le lancement de l'application. |
| **Display** | Standalone | **Standalone** (fenêtre dédiée, comme une application native), **Fullscreen** (plein écran), **Minimal UI** (fenêtre dédiée avec des boutons de navigation simples) ou **Browser** (onglet classique). |
| **Orientation** | Any | Verrouille l'orientation de l'écran : **Any** (libre), **Portrait** ou **Landscape** (paysage). |

L'application compilée contient alors un manifeste d'application web et un service worker. Le service worker met en cache les fichiers du frontend (HTML, CSS, JS, images, polices) et les met à jour automatiquement quand vous déployez une nouvelle version. Les requêtes vers le backend (`/api`) passent toujours par le serveur.

::: info
- Les navigateurs ne proposent d'installer une PWA que si elle est servie en **HTTPS** (ou depuis `localhost`).
- Le service worker n'est généré que par le build de production : testez l'installation avec **Production** dans l'application desktop, pas avec **Watch**.
- Les applications desktop et mobiles ignorent cette option.
:::

## Réglages du backend

Le bouton **Backend Settings** définit un **Proxy** sortant pour le backend et le **Cookie salt** utilisé pour signer les cookies.
