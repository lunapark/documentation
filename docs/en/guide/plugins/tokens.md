<script setup>
import ApplyColorToken from "/assets/images/plugins/apply-color-token.png"
</script>

# Design tokens in plugins

Your `plugins` can define **design tokens** to expose your own color, length, typography, and other style primitive values. These tokens appear in the style editor alongside the built-in tokens and can be used to style `components`.

## What is a plugin design token?

A **design token** is a reusable style primitive: a color, a dimension, a typography, or any other presentation property that you want to normalize. When you expose tokens from a `plugin`, users of your plugin can leverage them in their compositions without needing to know the exact values.

For example, if your plugin provides a complete brand palette, you define the tokens once in the plugin. Users who install your plugin then see these colors in the style editor and can apply them to `components`.

## Supported token types

You can define the following token types:

- **Color**, a color value in hexadecimal or RGB<br>
  example: `#FF6B35` or `rgb(255, 107, 53)`
- **Length**, a dimension in pixels or other CSS units<br>
  example: `16px`, `1rem`, `2em`
- **Font**, a font family name available in your plugin<br>
  example: `Inter`, `Roboto`, `Georgia`
- **Other**, for any other type of reusable value<br>
  example: an animation duration, an opacity, a border radius

## Defining design tokens in your plugin

Tokens are defined in your plugin's configuration or metadata. Consult your plugin's documentation to learn the specific format for exposing tokens.

### Example token structure

A plugin typically exposes its tokens via a structured declaration. Here is the general form:

```
tokens: {
  colors: {
    primary: "#FF6B35",
    secondary: "#004E89",
    background: "#F5F5F5"
  },
  lengths: {
    spacing: "16px",
    borderRadius: "4px"
  },
  fonts: {
    heading: "Inter",
    body: "System"
  }
}
```

<!-- TODO: confirm exact API shape and configuration format -->

## Using design tokens from a plugin

Once the `plugin` is installed, its **design tokens** appear in the style panel of the editor. You can select and apply these tokens like any other style value.

### Accessing plugin tokens

1. Select an element in your `component`.
2. Open the inspection panel and navigate to the **Styling** section.
3. For each style property (color, dimension, typography), click on the value field.
4. A dropdown list displays the available tokens, grouped by plugin and by type.
5. Select the token you want to apply.

SCREEN_HERE: style panel showing the list of available tokens with plugin groups.

## Benefits of exposing tokens

- **Consistency** - Users of your plugin apply the same presentation values uniformly.
- **Maintenance** - If you update a token in your plugin, all `components` using it automatically reflect the change.
- **Discovery** - Tokens appear directly in the editor, without external documentation.
- **Integration** - Tokens blend with Luna Park's built-in primitives for a cohesive experience.

## Guided example: Creating and using a plugin color palette

### 1. Define color tokens in your plugin

1. In your `plugin` configuration, declare a `tokens` section with a `colors` group.
2. List the colors of your palette (e.g., `primary: "#FF6B35"`, `secondary: "#004E89"`, etc.).
3. Give each color a descriptive name that reflects its usage or position in the palette.

SCREEN_HERE: plugin configuration file with color tokens defined.

### 2. Install the plugin

1. In Luna Park, go to the **Plugins** section of the editor.
2. Search for or upload your `plugin`.
3. Click the `Install` button to register the plugin and load its tokens.

SCREEN_HERE: plugin installation dialog in Luna Park.

### 3. Use plugin colors in a component

1. Create a new `component` or open an existing one.
2. Add an element to which you want to apply a color (e.g., a **Block** of type Container or Text).
3. Select this element and open the inspection panel.
4. Go to the **Styling** section and find the `background-color` or `color` property as needed.
5. Click on the value field to open the list of available tokens.
6. Select a color token from your plugin's group (e.g., `primary` or `secondary`).

<DImage 
  :src="ApplyColorToken"
  alt="Style panel applying a color token from a plugin"
/>

### 4. Apply multiple tokens to a component

1. Repeat step 3 for other properties (border-color, shadow, etc.).
2. You can combine tokens from different plugins or mix tokens and custom values as needed.

### 5. Test and verify

- Switch to `Preview` mode to see your `component` styled with the plugin's tokens.
- Colors applied via tokens should be consistent with the plugin's definitions.
- If you update a token's value in the `plugin`, reload the editor to see the change reflected on all `components` using it.