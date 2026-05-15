<script setup lang="ts">
import Config from "/assets/images/plugins/basics/config.png";
</script>

# Bases des plugins

Le package `@luna-park/plugin` fournit les outils nécessaires à la création de plugins.

Un plugin exporte un objet défini avec `makePlugin` :

```ts
import { makePlugin } from '@luna-park/plugin';
import myIcon from './my-icon.svg';

export default makePlugin({
    id: 'my-plugin',
    name: 'Mon Plugin',
    icon: myIcon
});
```

Propriétés requises :
- `id` : identifiant unique parmi tous les plugins.
- `name` : nom d'affichage.
- `icon` : string URL ou string SVG.

## Configuration

La propriété `config` définit un formulaire affiché dans les paramètres du plugin et dans la barre supérieure de l'éditeur. Les valeurs sont sauvegardées avec les données du plugin.

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

L'objet `config` est disponible dans les hooks et fonctions d'initialisation (e.g. `config.name`).

## État interne

`internal` stocke des données du plugin qui ne sont pas exposées dans la page des paramètres. Une valeur par défaut est requise.

```ts
makePlugin({
    /* ... */
    internal: {
        tutorial: true
    }
});
```

Disponible comme `config` dans les hooks et fonctions d'initialisation (e.g. `internal.tutorial`).

## Format des options

Les options qui suivent (hooks, injections, fenêtres, templates) acceptent indifféremment :
- un objet direct,
- une fonction qui retourne l'objet (peut être asynchrone).

Quand une fonction est utilisée, elle reçoit :

| Argument   | Description                                      |
|------------|--------------------------------------------------|
| `config`   | la configuration actuelle                        |
| `internal` | l'état interne actuel                            |
| `mode`     | `build` ou `editor` selon l'environnement        |
| `app`      | l'instance de l'application du projet            |

Ces objets peuvent être modifiés durant l'exécution.

## Hooks de cycle de vie

### Mount

Appelé lorsque le plugin est monté dans l'éditeur (installation ou chargement du projet).

```ts
makePlugin({
    lifecycle: {
        mount: () => { console.log("Plugin monté !") }
    }
});
```

### Unmount

Appelé lorsque le plugin est désinstallé.

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
        js: `alert("Salut !");`
    }
});
```

Chaque entrée peut être une string ou une fonction qui retourne une string.

## Fenêtres personnalisées

Un plugin peut afficher des fenêtres flottantes dans l'éditeur via le composant `LPluginWindow`. Son contenu et son comportement sont contrôlés par paramètres d'URL.

```ts
import { LPluginWindow } from '@luna-park/plugin';

makePlugin({
    /* ... */
    components: {
        MyWindow: LPluginWindow
    }
});
```

<!-- TODO: documenter l'ouverture d'une fenêtre et le passage de paramètres -->

## Templates

Un plugin peut fournir des templates importables dans les projets via la propriété `templates` :

```ts
makePlugin({
    /* ... */
    templates: [
        /* ... */
    ]
});
```

<!-- TODO: documenter la structure d'un template -->

Les templates apparaissent dans l'interface d'importation de l'éditeur.

---

:::info
Les composants et nœuds logiques sont couverts dans les pages suivantes.
:::
