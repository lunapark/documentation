---
description: "Use reusable style tokens to keep colors, sizes, spacing, and typography consistent."
---

<script setup lang="ts">
import TokensWorkspace from '/assets/images/layout/styling/tokens-workspace.png';
import FontPicker from '/assets/images/layout/styling/font-picker.png';
import {faLink, faBolt, faSwatchbook} from "@fortawesome/pro-solid-svg-icons";
import gif1 from '/assets/images/layout/styling/gif1.gif';
import gif2 from '/assets/images/layout/styling/gif2.gif';
</script>

# Tokens and Style Variables

**Tokens** are reusable values that define the visual foundations of your application: colors, fonts, and lengths (spacing, radius, sizes).
They ensure **style consistency** and allow you to modify the global appearance without having to edit each component individually.

For example, if you modify the `Brand` color token, all areas using it will be updated instantly.

## The Tokens workspace

Click <LIcon :icon="faSwatchbook" /> **Tokens** in the [Workspace](../editor#the-workspace) to open the tokens of your project. They are grouped in three sections: **Colors**, **Fonts**, and **Lengths**. The toolbar jumps to a section, and the search field filters the tokens by name or value.

<DImage
:src="TokensWorkspace" :width="1280" :height="720"
alt="Tokens workspace with the color tokens, and the selected token in the inspector"
/>

- Click **Add color**, **Add font**, or **Add length** to create a token.
- Click a token to edit its **Name** and **Value** in the inspector. The **Variable** field gives its CSS variable, to use it in [custom CSS](./advanced-style).
- Drag a token to reorder it.
- Hover a token and click its trash icon to delete it (hold `Ctrl` to skip the confirmation).

### Fonts

Use the **Search fonts...** field of the **Fonts** section to add a font from [Fontsource](https://fontsource.org/), filtered by category (**Sans**, **Serif**, **Mono**, **Display**, **Handwriting**). The font is loaded from the Fontsource CDN, in the editor and in your app.

<DImage
:src="FontPicker" :width="1280" :height="720"
alt="Font picker of the Fonts section, with the font categories and previews"
/>

In the inspector, a font token has two more options:

| Option | Description |
|---|---|
| **Fontsource** | Load the font stylesheet from the Fontsource CDN. Uncheck it for a font that is already available (system font, or loaded with [code injection](./advanced-style)). |
| **Default** | Apply this font to the whole application. Only one font can be the default. |

### Responsive strategy

The **Responsive** option of the toolbar sets the direction of the media queries applied in your styles: **Desktop** (desktop first) or **Mobile** (mobile first).

For a breakpoint set at `1024px`:

- **Mobile first**: the rule applies to screens **≥ 1024**.
- **Desktop first**: the rule applies to screens **≤ 1024**.

## Using a Design Token

1. Hover over the value you want to modify.
2. Click the **<LIcon :icon="faLink" />** icon to activate token selection mode.
3. Select the design token you want to use.

<DImage
  :src="gif1" :width="990" :height="369"
  alt="Example of token usage"
/>

_Note: Tokens replace hardcoded values and serve as a basis for global style customization. [Plugins](../../../integrations/plugins) can add their own tokens._

## Style Variables

**Style variables** allow you to make your components dynamic: a color, size, or property can change based on the state or data of your application.

Unlike tokens, which are static and global, variables are **contextual and reactive**. They are used to visually adapt components according to your application logic (e.g., if `loggedIn = true`, then `color = success-color`).

### Using a Style Variable

1. Hover over the value you want to link to a variable.
2. Click the **<LIcon :icon="faBolt" />** icon to switch to variable selection mode.
3. Select the variable you want to use.

<DImage
  :src="gif2" :width="990" :height="504"
  alt="Example of variable usage"
/>


_Note: Only variables compatible with the property type will appear in the list. For example, a numeric variable will only be available for a number type property._
