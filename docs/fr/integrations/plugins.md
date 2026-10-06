---
description: "Installez et utilisez des plugins Luna Park qui ajoutent composants, nœuds logiques, tokens et intégrations."
---

<script setup lang="ts">
import Plugins from "/assets/images/plugins/introduction/plugins.png";
import Install from "/assets/images/plugins/introduction/install.png";
</script>

# Plugins

Un plugin ajoute à Luna Park de nouveaux composants, nœuds logiques, design tokens, guards de route ou intégrations avec des services externes.

Contrairement à un package [NPM](./npm) classique, un plugin est conçu spécifiquement pour Luna Park : ce qu'il expose s'intègre directement dans l'éditeur (composants dans la palette, nœuds dans le graphe, tokens dans le panneau de style, réglages dans la barre supérieure) et dans l'application exportée.

## Installer un plugin

Ouvrez **Libraries** dans la barre supérieure, puis **Install plugins**. L'onglet **Plugins** cherche parmi les plugins disponibles ; l'onglet **Installed** liste les plugins du projet.

<DImage
:src="Plugins" :width="623" :height="411"
alt="Liste des plugins disponibles"
/>

Sélectionnez un plugin et cliquez sur `Install plugin`.

<DImage
:src="Install" :width="744" :height="382"
alt="Installation d'un plugin"
/>

Installer un plugin publié hors du scope `@luna-park/` demande une confirmation : un plugin exécute du code dans l'éditeur et dans votre application, n'installez donc que des plugins de confiance.

### Installer depuis une URL

Pour installer un plugin non publié (un plugin que vous développez, par exemple), collez son URL dans le champ **Install from URL** en bas du panneau des plugins.

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

Comptes utilisateurs : inscription, connexion, sessions, OAuth2 (Google, GitHub, Discord, Microsoft, GitLab...) et rôles avec permissions. Ajoute des guards de route et des nœuds dédiés. Voir [Authentification](../fundamentals/data/auth).

### Mail
`@luna-park/plugin-mail`

Envoie des emails depuis le backend via n'importe quel serveur SMTP (Gmail, Mailgun, Postmark, Amazon SES, Brevo...). Renseignez l'hôte, le port, le TLS, les identifiants et l'expéditeur par défaut dans ses réglages **SMTP**, puis utilisez le nœud `mail/send` dans la logique backend. Dans l'éditeur, les emails sont affichés dans la console au lieu d'être envoyés. Le mot de passe SMTP va dans le fichier `.env` de l'application exportée, sous le nom `MAIL_SMTP_PASSWORD`.

---

:::info Créer votre propre plugin
Si vous êtes à l'aise avec TypeScript (et Vue pour les composants), vous pouvez écrire vos propres plugins. Voir [Développer un plugin](/fr/plugins/introduction).
:::
