---
description: "Installez et utilisez des plugins Luna Park qui ajoutent composants, nœuds logiques, tokens et intégrations."
---

<script setup lang="ts">
import Workspace from "/assets/images/integrations/plugins/workspace.png";
import {faShelves, faDownload, faEllipsis} from "@fortawesome/pro-solid-svg-icons";
</script>

# Plugins

Un plugin ajoute à Luna Park de nouveaux composants, nœuds logiques, design tokens, guards de route ou intégrations avec des services externes.

Contrairement à un package [NPM](./npm) classique, un plugin est conçu spécifiquement pour Luna Park : ce qu'il expose s'intègre directement dans l'éditeur (composants dans la palette, nœuds dans le graphe, tokens dans le [workspace Tokens](../styling/tokens), réglages dans la barre supérieure) et dans l'application exportée.

## Installer un plugin

Ouvrez le [workspace](../workspace/editor#le-workspace) <LIcon :icon="faShelves" /> **Libraries** et allez à la section **Plugins**. **Installed** liste les plugins du projet ; **Available** liste les plugins publiés, les officiels en premier. Utilisez le champ **Search plugins...** pour les filtrer.

Cliquez sur le bouton <LIcon :icon="faDownload" /> d'un plugin pour l'installer. Ou cliquez sur le plugin pour lire ses détails sur le côté, puis cliquez sur **Install plugin**.

<DImage
:src="Workspace" :width="1280" :height="720"
alt="Section Plugins du workspace Libraries, avec les détails du plugin Nuxt UI sur le côté"
/>

Installer un plugin publié hors du scope `@luna-park/` demande une confirmation : un plugin exécute du code dans l'éditeur et dans votre application, n'installez donc que des plugins de confiance.

### Installer depuis une URL

Pour installer un plugin non publié (un plugin que vous développez, par exemple), cliquez sur le bouton <LIcon :icon="faEllipsis" /> à côté du champ de recherche et collez son URL dans **Install from URL**.

Pour retirer un plugin, cliquez sur son icône de corbeille dans la liste **Installed**, ou sur **Remove plugin** dans ses détails.

## Configurer un plugin

Chaque plugin installé ajoute un bouton à la barre supérieure. Il ouvre le formulaire de configuration du plugin (**Config**) et ses onglets de réglages (**Settings**).

## Plugins officiels

### Ferris Wheel
`@ferris-wheel/plugin`

Le design system de Luna Park. Fournit la bibliothèque de composants de base et des design tokens, et génère les déclinaisons de couleurs à partir de sa configuration (couleurs primaire et de contenu, bordure et arrondi, thème clair/sombre/auto). Préinstallé dans les modèles de projet Ferris Wheel et Frontend.

### Nuxt UI
`@luna-park/plugin-nuxt-ui`

Intègre la collection de composants [Nuxt UI](https://ui.nuxt.com/) dans Luna Park : chat, dashboard, data, formulaires, navigation, overlays, layout. Configurable depuis les paramètres du plugin (couleur primaire, couleur neutre, mode clair/sombre/auto, rayon de bordure global).

### Tailwind
`@luna-park/plugin-tailwind`

Active les classes [Tailwind CSS](https://tailwindcss.com/) dans le champ **Classes** des composants.

### Users
`@luna-park/plugin-users`

Comptes utilisateurs : inscription, connexion, sessions, OAuth2 (Google, GitHub, Discord, Microsoft, GitLab...) et rôles avec permissions. Ajoute des guards de route et des nœuds dédiés. Voir [Authentification](../backend-data/auth).

### Mail
`@luna-park/plugin-mail`

Envoie des emails depuis le backend via n'importe quel serveur SMTP (Gmail, Mailgun, Postmark, Amazon SES, Brevo...). Renseignez l'hôte, le port, le TLS, les identifiants et l'expéditeur par défaut dans ses réglages **SMTP**, puis utilisez le nœud `mail/send` dans la logique backend. Dans l'éditeur, les emails sont affichés dans la console au lieu d'être envoyés. Le mot de passe SMTP va dans le fichier `.env` de l'application exportée, sous le nom `MAIL_SMTP_PASSWORD`.

---

:::info Créer votre propre plugin
Si vous êtes à l'aise avec TypeScript (et Vue pour les composants), vous pouvez écrire vos propres plugins. Voir [Développer un plugin](/fr/plugins/introduction).
:::
