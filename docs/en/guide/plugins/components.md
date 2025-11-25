# Custom Components

You can expose custom components to the editor, enabling the creation of component libraries.

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

Below is an example of a custom component definition:
```ts
import { TComponent } from '@luna-park/plugin';
import BaseComponent from './BaseComponent.vue';

export default {
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
} satisfies TComponent;
```

`BaseComponent` is a standard Vue component. Its props, events, slots, and models are mapped to Luna Park's typing system.

## Component Wrapper

If your application requires a wrapper (e.g., for context injection), you can expose it as follows:
```ts
import { makePlugin } from '@luna-park/plugin';
import MyWrapper from './MyWrapper.vue';

export default({
    editor: {
        wrapper: MyWrapper
    }
});
```