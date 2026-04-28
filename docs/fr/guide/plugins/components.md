# Composants personnalisés

Vous pouvez exposer des composants personnalisés à l'éditeur, permettant la création de bibliothèques de composants.

```ts
import { makePlugin } from '@luna-park/plugin';
import MyComponentA from './MyComponentA.ts';
import MyComponentB from './MyComponentB.ts';

export default({
    editor: {
        components: [MyComponentA, MyComponentB, ...]
    }
});
```

Ci-dessous un exemple de définition de composant personnalisé :
```ts
import { TComponent } from '@luna-park/plugin';
import BaseComponent from './BaseComponent.vue';

export default {
    name: 'Dossier/MonComposant',
    component: BaseComponent,
    properties: {
        placeholder: LogicType.string()
    },
    models: {
        modelValue: LogicType.string()
    },
    slots: {
        default: LogicType.void()
    },
    emits: {
        send: LogicType.function()
    }
} satisfies TComponent;
```

`BaseComponent` est un composant Vue standard. Ses props, événements, slots et modèles sont mappés au système de typage de Luna Park.

## Documentation des composants

Vous pouvez ajouter un lien vers la documentation de votre composant personnalisé. Ce lien apparaît dans le panneau d'inspection lorsque le composant est sélectionné, offrant un accès rapide à sa documentation.

```ts
import { TComponent } from '@luna-park/plugin';
import BaseComponent from './BaseComponent.vue';

export default {
    name: 'Dossier/MonComposant',
    component: BaseComponent,
    properties: {
        placeholder: LogicType.string()
    },
    models: {
        modelValue: LogicType.string()
    },
    slots: {
        default: LogicType.void()
    },
    emits: {
        send: LogicType.function()
    },
    documentation: {
        url: 'https://example.com/docs/my-component'
    }
} satisfies TComponent;
```

L'URL spécifiée dans la propriété `documentation` est accessible directement depuis l'inspection, permettant aux utilisateurs de consulter la documentation sans quitter l'éditeur.

## Wrapper de composant

Si votre application nécessite un wrapper (par exemple, pour l'injection de contexte), vous pouvez l'exposer comme suit :
```ts
import { makePlugin } from '@luna-park/plugin';
import MyWrapper from './MyWrapper.vue';

export default({
    editor: {
        wrapper: MyWrapper
    }
});
```