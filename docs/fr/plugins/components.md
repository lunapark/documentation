---
description: "Exposez des composants personnalisés depuis un plugin Luna Park pour créer des bibliothèques réutilisables."
---

# Composants personnalisés

Vous pouvez exposer des composants personnalisés à l'éditeur, permettant la création de bibliothèques de composants.

```ts
import { makePlugin } from '@luna-park/plugin';
import { myComponentA } from './myComponentA.ts';
import { myComponentB } from './myComponentB.ts';

export default makePlugin({
    /* ... */
    editor: {
        components: [myComponentA, myComponentB]
    }
});
```

Ci-dessous un exemple de définition de composant personnalisé, avec `makeComponent` pour la vérification des types :

```ts
import { LogicType, makeComponent } from '@luna-park/plugin';
import BaseComponent from './BaseComponent.vue';

export const myComponentA = makeComponent({
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
});
```

`BaseComponent` est un composant Vue standard. Ses props, événements, slots et modèles sont mappés au système de typage de Luna Park. La partie de `name` avant le `/` est le dossier du composant dans l'éditeur.

## Options d'un composant

| Option | Description |
|---|---|
| `name` | Nom d'affichage, avec un dossier optionnel (`Dossier/Nom`). |
| `component` | Le composant Vue. |
| `properties` | Les props, typées avec `LogicType` (voir [Typage](./typing)). |
| `models` | Les liaisons `v-model`. |
| `slots` | Les slots. Un slot est `LogicType.void()`, ou un type objet pour les scoped slots. Peut être une fonction des propriétés courantes. |
| `emits` | Les événements. |
| `icon` | L'icône affichée dans l'éditeur. |
| `documentation` | `description` et `link`, affichés dans l'éditeur. |
| `llm` | Instructions données à Sidekick et aux agents IA sur l'utilisation du composant. |
| `preview` | Propriétés, contenu des slots et style utilisés pour l'aperçu du composant dans l'éditeur. |
| `build` | Comment l'application compilée importe le composant (voir ci-dessous). |

## Application compilée

Dans l'application compilée, le composant est utilisé comme balise dans les fichiers `.vue` générés. Indiquez au compilateur d'où l'importer avec `build` :

- `imports` : l'import à ajouter (`name`, `from`, et `default` pour un export par défaut) ;
- `name` : le nom de la balise (par défaut, la dernière partie du `name` du composant).

```ts
makeComponent({
    name: 'Content/Alert',
    component: MyAlert,
    build: {
        imports: [{ name: 'MyAlert', from: 'my-design-system/MyAlert', default: true }],
        name: 'MyAlert'
    }
});
```

Publiez vos composants Vue dans un package npm et ajoutez-le aux dépendances de l'application avec `build.frontImports` (voir [Backend et build](./backend#dependances)).

## Wrapper de composants

Si vos composants ont besoin d'un wrapper autour de toute l'application (par exemple pour l'injection de contexte ou un fournisseur de thème), exposez-le comme suit :

```ts
import { makePlugin } from '@luna-park/plugin';
import MyWrapper from './MyWrapper.vue';

export default makePlugin({
    /* ... */
    editor: {
        wrapper: { name: 'wrapper', component: MyWrapper }
    }
});
```
