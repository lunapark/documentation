---
description: "Expose custom components from a Luna Park plugin to build reusable component libraries."
---

# Custom components

You can expose custom components to the editor, enabling the creation of component libraries.

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

Below is an example of a custom component definition, using `makeComponent` for type checking:

```ts
import { LogicType, makeComponent } from '@luna-park/plugin';
import BaseComponent from './BaseComponent.vue';

export const myComponentA = makeComponent({
    name: 'Folder/MyComponent',
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

`BaseComponent` is a standard Vue component. Its props, events, slots, and models are mapped to Luna Park's typing system. The part of `name` before the `/` is the folder of the component in the editor.

## Component options

| Option | Description |
|---|---|
| `name` | Display name, with an optional folder (`Folder/Name`). |
| `component` | The Vue component. |
| `properties` | Props, typed with `LogicType` (see [Typing](./typing)). |
| `models` | `v-model` bindings. |
| `slots` | Slots. A slot is `LogicType.void()`, or an object type for scoped slots. Can be a function of the current properties. |
| `emits` | Events. |
| `icon` | Icon shown in the editor. |
| `documentation` | `description` and `link`, shown in the editor. |
| `llm` | Instructions given to Sidekick and AI agents on how to use the component. |
| `preview` | Properties, slot contents, and style used to preview the component in the editor. |
| `build` | How the compiled app imports the component (see below). |

## Compiled app

In the compiled app, the component is used as a tag in the generated `.vue` files. Tell the compiler where to import it from with `build`:

- `imports`: the import to add (`name`, `from`, and `default` for a default export);
- `name`: the tag name (defaults to the last part of the component's `name`).

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

Publish your Vue components in an npm package and add it to the app's dependencies with `build.frontImports` (see [Backend and Build](./backend#dependencies)).

## Component wrapper

If your components need a wrapper around the whole app (e.g. for context injection or a theme provider), expose it as follows:

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
