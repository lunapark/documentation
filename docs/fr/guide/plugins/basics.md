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
src="/assets/images/plugins/basics/config.png"
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

---

:::info
Les composants et les nœuds logiques sont couverts dans les sections suivantes.
:::
