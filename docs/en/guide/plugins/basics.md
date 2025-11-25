<script setup lang="ts">
import Config from "/assets/images/plugins/basics/config.png";
</script>

# Plugin Basics

The `@luna-park/plugin` package provides essential helpers for creating plugins.

Your plugin must export an object defined using the `makePlugin` function:

```ts
import { makePlugin } from '@luna-park/plugin';
import myIcon from './my-icon.svg';

export default makePlugin({
    id: 'my-plugin',
    name: 'My Plugin',
    icon: myIcon
});
```

The following properties are required:
- `id`: The plugin's unique identifier (must be unique across all plugins).
- `name`: The display name of the plugin.
- `icon`: The plugin's icon (can be a URL string or an SVG string).

## Configuration

The `config` property allows you to define a configuration form for your plugin. This configuration appears on the plugin's settings page and the editor's top bar, and is saved alongside the plugin's data.

It is defined as a `LogicType` object. For more details, refer to the [Typing](./typing) section.

Example:

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    /* ... */
    config: LogicType.object({
        name: LogicType.string({ default: "Marty McFly" })
    })
});
```

This creates a form with a single text field, defaulting to "Marty McFly".

<DImage
:src="Config"
alt="Plugin configuration form"
/>

The `config` object is available in your plugin's hooks and initialization functions. In this example, the `name` property can be accessed via `config.name`.

## Internal State

Use the `internal` property to store data related to your plugin. This data is saved with the plugin but is not visible on the settings page. You must define a default value for the internal state.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    /* ... */
    internal: {
        tutorial: true
    }
});
```

The `internal` object is available in your plugin's hooks and initialization functions. In this example, the `tutorial` property can be accessed via `internal.tutorial`.


# Customization

The following customization options can be defined as either:
- A direct object.
- A function that returns the object.

If a function is used, it can be asynchronous and will receive the following arguments:
- `config`: The current configuration.
- `internal`: The current internal state.
- `mode`: `build` or `editor`, depending on the environment.
- `app`: The entire project application instance.

You can modify these objects during the function's execution.

## Lifecycle Hooks

### Mount

Called when the plugin is mounted in the editor, either upon installation or when the project loads.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        mount: () => { console.log("Plugin mounted!") }
    }
});
```

### Unmount

Called when the plugin is uninstalled.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        unmount: () => { console.log("Goodbye!") }
    }
});
```

### Update

Called whenever the plugin's configuration is updated.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        update: ({config}) => { console.log("New config:", config) }
    })
});
```

## Injections

The `inject` property allows you to inject CSS or JavaScript into the editor.

### CSS Injection

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    inject: {
        css: `#app { background-color: red; }` // Note that this can be a function returning a string
    }
});
```

### JavaScript Injection

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    inject: {
        js: `alert("Hey there!");` // Note that this can be a function returning a string
    }
});
```

---

:::info
Components and logic nodes are covered in later sections.
:::