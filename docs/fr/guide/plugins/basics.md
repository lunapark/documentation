---
description: "Découvrez la structure d'un plugin Luna Park et configurez ses métadonnées et fonctionnalités."
---

<script setup lang="ts">
import Config from "/assets/images/plugins/basics/config.png";
</script>

# Bases des plugins

Le package `@luna-park/plugin` fournit les outils nécessaires à la création de plugins. Il réexporte aussi `LogicType`, `makeLogicNode` et les types de Luna Park.

Un plugin exporte un objet défini avec `makePlugin` :

```ts
import { makePlugin } from '@luna-park/plugin';
import myIcon from './my-icon.svg';

export default makePlugin({
    id: 'my-plugin',
    name: 'Mon Plugin',
    icon: myIcon,
    description: 'Ce que fait mon plugin.'
});
```

Propriétés requises :
- `id` : identifiant unique parmi tous les plugins.
- `name` : nom d'affichage.
- `icon` : string URL ou string SVG.

Métadonnées optionnelles : `description`, `color` et `llm` (instructions données à Sidekick et aux agents IA sur l'utilisation de votre plugin).

## Vue d'ensemble

| Propriété | Description |
|---|---|
| `config` | Formulaire de configuration, voir [plus bas](#configuration). |
| `internals` | État caché du plugin, voir [plus bas](#etat-interne). |
| `settings` | Onglets de réglages personnalisés, voir [plus bas](#onglets-de-reglages). |
| `lifecycle` | Hooks `mount`, `update` et `unmount`. |
| `inject` | CSS ou JavaScript injecté dans l'éditeur. |
| `windows` | Fenêtres autonomes, voir [plus bas](#fenetres-personnalisees). |
| `editor.components` | [Composants personnalisés](./components). |
| `editor.wrapper` | Un composant qui enveloppe toute l'application, voir [Composants personnalisés](./components#wrapper-de-composants). |
| `editor.nodes` | [Nœuds logiques personnalisés](./nodes). |
| `editor.tokens` | [Design tokens](./tokens). |
| `editor.templates` | [Templates](#templates). |
| `editor.guards` | [Guards de route](./backend#guards-de-route). |
| `hooks` | [Hooks backend et base de données](./backend#hooks). |
| `build` | [Dépendances, variables d'environnement et injections de code](./backend#build) pour l'application compilée. |

## Configuration

La propriété `config` définit un formulaire affiché dans le bouton du plugin de la barre supérieure (**Config**). Les valeurs sont sauvegardées avec le projet.

`config` est un `LogicType` (voir [Typage](./typing)).

```ts
makePlugin({
    /* ... */
    config: LogicType.object({
        name: LogicType.string({ default: "Marty McFly" })
    })
});
```

<DImage
:src="Config"
alt="Formulaire de configuration du plugin"
/>

L'objet `config` est disponible dans les hooks et les fonctions d'options (e.g. `config.name`).

## État interne

`internals` stocke des données du plugin qui ne sont pas exposées dans le formulaire de configuration. Une valeur par défaut est requise.

```ts
makePlugin({
    /* ... */
    internals: {
        tutorial: true
    }
});
```

Disponible comme `config` dans les hooks et les fonctions d'options (e.g. `internals.tutorial`). Il est sauvegardé avec le projet.

## Format des options

Les options `editor`, `build` et `inject` acceptent :
- une valeur directe,
- une fonction qui renvoie la valeur (peut être asynchrone).

Quand une fonction est utilisée, elle reçoit l'**environnement** du plugin :

| Propriété | Description |
|---|---|
| `config` | La configuration courante. |
| `internals` | L'état interne courant. |
| `mode` | `build` ou `editor` selon l'environnement. |
| `app` | L'application du projet. |
| `getFile(id)` | Lit un fichier du projet. |
| `addFile(file, parentId?)` | Ajoute un fichier au projet (une base de données, un store...). |
| `log(message, severity?)` | Écrit dans la console de l'éditeur. |
| `backend.cookies` | Les cookies du backend de l'éditeur. |

Le même environnement est passé aux hooks de cycle de vie.

## Hooks de cycle de vie

### Mount

Appelé quand le plugin est monté dans l'éditeur (installation ou chargement du projet). C'est l'endroit où créer les fichiers dont votre plugin a besoin, avec `addFile`.

```ts
makePlugin({
    lifecycle: {
        mount: ({ app, addFile }) => { console.log("Plugin monté !") }
    }
});
```

### Unmount

Appelé quand le plugin est désinstallé.

```ts
makePlugin({
    lifecycle: {
        unmount: () => { console.log("Au revoir !") }
    }
});
```

### Update

Appelé à chaque mise à jour de la configuration du plugin.

```ts
makePlugin({
    lifecycle: {
        update: ({ config }) => { console.log("Nouvelle config :", config) }
    }
});
```

## Injections

`inject` injecte du CSS ou du JavaScript dans l'éditeur :

```ts
makePlugin({
    inject: {
        css: `#app { background-color: red; }`,
        js: `alert("Hey!");`
    }
});
```

Chaque entrée peut être une string ou une fonction qui renvoie une string. Pour injecter du code dans l'application compilée, utilisez [`build.injections`](./backend#injections-de-code).

## Onglets de réglages

Pour les réglages qu'un formulaire ne peut pas exprimer, ajoutez vos propres composants Vue comme onglets des réglages (**Settings**) du plugin :

```ts
import { shallowRef } from 'vue';
import { faGear } from '@fortawesome/pro-solid-svg-icons';
import MySettings from './MySettings.vue';

makePlugin({
    settings: [
        { label: 'General', icon: faGear, component: shallowRef(MySettings) }
    ]
});
```

## Fenêtres personnalisées

Un plugin peut fournir des pages autonomes, ouvertes dans une fenêtre séparée du navigateur (un callback OAuth, un outil...). Déclarez-les dans `windows` :

```ts
import MyWindow from './MyWindow.vue';

makePlugin({
    windows: {
        MyWindow
    }
});
```

Une fenêtre est accessible à l'adresse `https://luna-park.app/plugin?plugin=<package>&window=<nom>`, par exemple avec `window.open()`. Les fenêtres des plugins hors `@luna-park/` demandent une confirmation avant de se charger.

## Templates

Un plugin peut fournir des blocs de mise en page prêts à l'emploi. Ils apparaissent dans l'onglet **Templates** du panneau du bas de l'éditeur, et les utilisateurs les glissent dans leurs mises en page.

```ts
makePlugin({
    editor: {
        templates: [
            {
                name: 'Formulaire de connexion',
                preview: 'https://example.com/preview.png',
                template: loginFormFile
            }
        ]
    }
});
```

`template` est un fichier de composant au format de projet Luna Park, et `preview` une URL d'image optionnelle.

---

:::info
Les composants, nœuds logiques, tokens et fonctionnalités backend sont détaillés dans les pages suivantes.
:::
