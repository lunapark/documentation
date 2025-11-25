<script setup lang="ts">
import UrlInstall from "/assets/images/plugins/setup/url-install.png";
</script>

# Configuration de l'environnement

Pour créer des plugins pour Luna Park, un IDE moderne tel que WebStorm ou Visual Studio Code est recommandé. Une connaissance de base de TypeScript et Vue est également requise.

## Téléchargement du modèle (Boilerplate)

Commencez par cloner le dépôt du modèle de plugin :
```bash
git clone https://github.com/lunapark/plugin-boilerplate
```

:::info
Nous utilisons PNPM au lieu de NPM. Si vous ne l'avez pas installé, vous pouvez l'installer en utilisant `npm install -g pnpm`.
:::

Ensuite, installez les dépendances du projet :
```bash
pnpm install
```

## Tester votre plugin

Pour tester votre plugin (ou le modèle), vous devrez exécuter deux instances de terminal séparées :

1. Une pour compiler le plugin et surveiller les changements :
```bash
pnpm run dev
```
2. Une pour servir le plugin :
```bash
pnpm run preview
```

Vous pouvez maintenant installer le plugin directement dans Luna Park. Ouvrez un projet ou l'[éditeur playground](https://luna-park.app/editor), puis naviguez vers `Libraries > Plugins > Install plugins`.

Localisez le champ de saisie "Installer depuis une URL" en bas du panneau des plugins.

<DImage
:src="UrlInstall"
alt="Installer depuis une URL"
/>

Collez l'URL de votre plugin (par défaut : `http://127.0.0.1:2084`) et appuyez sur Entrée.

Vous devriez voir le message **Plugin Boilerplate successfully installed.** dans la console.

## Compiler votre plugin

Pour compiler votre plugin pour la distribution, exécutez la commande suivante :
```bash
pnpm run build
```
