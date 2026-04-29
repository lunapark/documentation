<script setup lang="ts">
import Plugins from "/assets/images/plugins/introduction/plugins.png";
import Install from "/assets/images/plugins/introduction/install.png";
</script>

# Plugins

Un plugin ajoute à Luna Park de nouveaux composants, nœuds logiques, design tokens ou intégrations avec des services externes.

Contrairement à un package [NPM](./npm) classique, un plugin est conçu spécifiquement pour Luna Park : ce qu'il expose s'intègre directement dans l'éditeur (composants dans la palette, nœuds dans le graphe, tokens dans le panneau de style, onglets de configuration dans les paramètres).

## Installer un plugin

La liste des plugins disponibles se trouve dans `Libraries > Plugins > Install Plugins`.

<DImage
:src="Plugins"
alt="Liste des plugins disponibles"
/>

Sélectionnez un plugin et cliquez sur `Install plugin`.

<DImage
:src="Install"
alt="Installation d'un plugin"
/>

## Plugins officiels

### Ferris Wheel
`@luna-park/plugin-ferris-wheel`

Le design system de Luna Park. Fournit la bibliothèque de composants de base et génère automatiquement les déclinaisons de couleurs à partir de la palette (primaire, contenu, etc.).

<!-- TODO: confirm package name for ferris-wheel -->

### Nuxt UI
`@luna-park/plugin-nuxt-ui`

Intègre la collection de composants [Nuxt UI](https://ui.nuxt.com/) dans Luna Park : chat, dashboard, data, formulaires, navigation, overlays, layout. Configurable depuis les paramètres du plugin (couleur primaire, couleur neutre, mode clair/sombre/auto, rayon de bordure global).

### Tailwind
`@luna-park/plugin-tailwind`

Active l'utilisation des classes [Tailwind CSS](https://tailwindcss.com/) dans les propriétés de style des composants une fois le plugin installé.

<!-- TODO: confirm package name for tailwind -->

### Users
`@luna-park/plugin-users`

Gestion des comptes utilisateurs : inscription, connexion, sessions, OAuth2 (Google, GitHub, etc.) et rôles avec permissions. Ajoute des nœuds dédiés au graphe (`user/connect`, `user/disconnect`, `oauth/connect`, `roles/has-permission`, `roles/assert-permission`, `hash/hash-argon2`, `hash/verify-argon2`) et deux onglets de configuration (général, OAuth2). Mots de passe hashés en Argon2id, bases users et sessions initialisées automatiquement.

---

:::info Créer votre propre plugin
Si vous êtes à l'aise avec TypeScript (et Vue pour les composants), vous pouvez écrire vos propres plugins. Voir [Développer un plugin](/fr/guide/plugins/introduction).
:::
