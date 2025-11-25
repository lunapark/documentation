# Custom components

You can expose custom components to the editor, for example, to create a component library.

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

Here is an example of a custom component:
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

The `BaseComponent` is a Vue component, with its props, events, slots and model transcripted into Luna Park's typing system.

## Wrapper

If your app needs to run inside a wrapper (for example, to inject some context), you can expose it like this:
```ts
import { makePlugin } from '@luna-park/plugin';
import MyWrapper from './MyWrapper.vue';

export default({
    editor: {
        wrapper: MyWrapper
    }
});
```