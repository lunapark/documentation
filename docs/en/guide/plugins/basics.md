# Plugin basics

The `@luna-park/plugin` package provides helpers for creating plugins.

Your plugin should expose an object which is typed by the `makePlugin` function:

```ts
import { makePlugin } from '@luna-park/plugin';
import myIcon from './my-icon.svg';

export default makePlugin({
    id: 'my-plugin',
    name: 'My Plugin',
    icon: myIcon
});
```

Here are the required properties:
- `id`: the plugin's unique identifier (this must not conflict with other plugins)
- `name`: the plugin's name
- `icon`: the plugin's icon (this can be a URL string, or a SVG string)

## Config

You can use the `config` property to expose a configuration form for your plugin. The configuration will be displayed on the plugin's settings page, on the top bar of the editor, and be saved with the plugin's data.

It's a `LogicType` object, which you can learn more about in the [Typing](./typing) section.

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

This will expose a form with a single text field, with the default value "Marty McFly".

<DImage
src="/assets/images/plugins/basics/config.png"
alt="Plugin configuration form"
/>

The `config` property will be available on your plugin's hooks and init functions. Here, the `name` will be find under `config.name`.

## Internal state

If you ever need to save some data related to your plugin, you can use the `internal` property. The data will be saved with the plugin's data, but won't be displayed on the settings page. You must set the default value of the internal state.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    /* ... */
    internal: {
        tutorial: true
    }
});
```

The `internal` property will be available on your plugin's hooks and init functions. Here, the `tutorial` will be find under `internal.tutorial`.


# Customization

All the following customization options can either be:
- an object of the type of the customization
- a function returning an object of the type of the customization

If you use a function, this function can be asynchronous, and will be called with some useful arguments:
- `config`: the plugin's configuration
- `internal`: the plugin's internal state
- `mode`: "build" or "editor", depending on the current mode
- `app`: the whole project application instance

You can update those objects during the execution of these functions.

## Lifecycles

### Mount

This function is called when the plugin is mounted in the editor, either on installation, or when the project is loaded.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        mount: () => { console.log("Plugin mounted!") }
    }
});
```

### Unmount

This function is called when the plugin is uninstalled.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        unmount: () => { console.log("Goodbye!") }
    }
});
```

### Update

This function is called when the configuration of the plugin is updated.

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    lifecycle: {
        update: ({config}) => { console.log("New config:", config) }
    }
});
```

## Injections

You can inject CSS or JS into the editor using the `inject` property.

### CSS

```ts
import { makePlugin } from '@luna-park/plugin';

export default({
    inject: {
        css: `#app { background-color: red; }` // Note that this can be a function returning a string
    }
});
```

### JS

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