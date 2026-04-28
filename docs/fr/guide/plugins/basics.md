<script setup lang="ts">
import Config from "/assets/images/plugins/basics/config.png";
</script>

# Bases des plugins

Le package `@luna-park/plugin` fournit des aides essentielles pour la création de plugins.

Votre plugin doit exporter un objet défini en utilisant la fonction `makePlugin` :

```ts
import { makePlugin } from '@luna-park/plugin';
import myIcon from './my-icon.svg';

export default makePlugin({
    id: 'my-plugin',
    name: 'Mon Plugin',
    icon: myIcon
});
```

Les propriétés suivantes sont requises :
- `id` : L'identifiant unique du plugin (doit être unique parmi tous les plugins).
- `name` : Le nom d'affichage du plugin.
- `icon` : L'icône du plugin (peut être une string URL ou une string SVG).

## Configuration

La propriété `config` vous permet de définir un formulaire de configuration pour votre plugin. Cette configuration apparaît sur la page des paramètres du plugin et dans la barre supérieure de l'éditeur, et est sauvegardée avec les données du plugin.

Elle est définie comme un objet `LogicType`. Pour plus de détails, référez-vous à la section [Typage](./typing).

Exemple :

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    /* ... */
    config: LogicType.object({
        name: LogicType.string({ default: "Marty McFly" })
    })
});
```

Cela crée un formulaire avec un seul champ texte, ayant pour valeur par défaut "Marty McFly".

<DImage
:src="Config"
alt="Formulaire de configuration du plugin"
/>

L'objet `config` est disponible dans les hooks et les fonctions d'initialisation de votre plugin. Dans cet exemple, la propriété `name` peut être accédée via `config.name`.

## État interne

Utilisez la propriété `internal` pour stocker des données liées à votre plugin. Ces données sont sauvegardées avec le plugin mais ne sont pas visibles sur la page des paramètres. Vous devez définir une valeur par défaut pour l'état interne.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    /* ... */
    internal: {
        tutorial: true
    }
});
```

L'objet `internal` est disponible dans les hooks et les fonctions d'initialisation de votre plugin. Dans cet exemple, la propriété `tutorial` peut être accédée via `internal.tutorial`.


# Personnalisation

Les options de personnalisation suivantes peuvent être définies soit comme :
- Un objet direct.
- Une fonction qui retourne l'objet.

Si une fonction est utilisée, elle peut être asynchrone et recevra les arguments suivants :
- `config` : La configuration actuelle.
- `internal` : L'état interne actuel.
- `mode` : `build` ou `editor`, selon l'environnement.
- `app` : L'instance entière de l'application du projet.

Vous pouvez modifier ces objets durant l'exécution de la fonction.

## Hooks de cycle de vie

### Mount

Appelé lorsque le plugin est monté dans l'éditeur, soit lors de l'installation, soit lors du chargement du projet.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        mount: () => { console.log("Plugin monté !") }
    }
});
```

### Unmount

Appelé lorsque le plugin est désinstallé.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        unmount: () => { console.log("Au revoir !") }
    }
});
```

### Update

Appelé à chaque fois que la configuration du plugin est mise à jour.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        update: ({config}) => { console.log("Nouvelle config :", config) }
    }
});
```

## Injections

La propriété `inject` vous permet d'injecter du CSS ou du JavaScript dans l'éditeur.

### Injection CSS

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    inject: {
        css: `#app { background-color: red; }` // Notez que cela peut être une fonction retournant une string
    }
});
```

### Injection JavaScript

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    inject: {
        js: `alert("Salut !");` // Notez que cela peut être une fonction retournant une string
    }
});
```

## Fenêtres personnalisées

Les plugins peuvent définir et ouvrir des fenêtres personnalisées pour étendre l'éditeur avec des panneaux d'interface utilisateur sur mesure. Utilisez le composant `LPluginWindow` pour charger dynamiquement les fenêtres de votre plugin.

Le composant `LPluginWindow` charge les fenêtres via des paramètres d'URL, ce qui permet à votre plugin de contrôler le contenu et le comportement des panneaux personnalisés.

```ts
import { LPluginWindow } from '@luna-park/plugin';

export default({
    /* ... */
    components: {
        MyWindow: LPluginWindow
    }
});
```

Vous pouvez ensuite ouvrir une fenêtre à partir de votre logique de plugin en passant les paramètres d'URL appropriés. <!-- TODO: confirm API shape for opening windows and parameter passing --> Les fenêtres personnalisées apparaissent comme des panneaux flottants dans l'éditeur et restent accessibles pendant la session de travail.

## Templates

Les plugins peuvent fournir des fichiers de template que les utilisateurs peuvent importer dans leurs projets. Cela permet aux plugins d'offrir des mises en page de démarrage et des composants.

Définissez les templates de votre plugin en utilisant la propriété `templates` :

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    /* ... */
    templates: [
        /* Templates définis ici */
    ]
});
```

<!-- TODO: confirm template structure and properties -->

Une fois définis, les templates apparaissent dans l'interface d'importation de l'éditeur. Les utilisateurs peuvent les sélectionner pour créer rapidement de nouveaux composants avec la mise en page et les composants prédéfinis offerts par votre plugin.

---

:::info
Les composants et les nœuds logiques sont couverts dans les sections suivantes.
:::