---
description: "Configure the visual appearance of Luna Park applications with global styling controls."
---

<script setup lang="ts">
import TokenLinkVideo from '/assets/images/layout/styling/token-link.webm';
import VariableBindVideo from '/assets/images/layout/styling/variable-bind.webm';
import TokensWorkspace from '/assets/images/layout/styling/tokens-workspace.png';
import Screen2 from '/assets/images/layout/styling/style-section.png';
import QuickStylePanels from '/assets/images/layout/styling/quick-style-panels.png';
</script>

# Styling

## Global Styling

The global colors of your application (primary and content colors, generated shades, light and dark theme) are set by your design system plugin. With [Ferris Wheel](../integrations/plugins#ferris-wheel), open its button in the top bar to edit its palette. [Nuxt UI](../integrations/plugins#nuxt-ui) has its own color settings.

Reusable values shared across your components are [tokens](#design-tokens).

## Element Styling

Each element of your project can be styled individually in the inspector, under the **style** tab. This lets you customize the appearance of each component of your application, such as text, images, or buttons.

To add a style category (e.g., color, typography, size), simply click the **+** button in the style tab. You can enable or disable each property by clicking on its name.

<DImage
:src="Screen2" :width="1280" :height="720"
alt="Style section of the inspector for a selected text element"
/>

Some properties accept two values, such as translation (X/Y) or spacing (horizontal/vertical). Luna Park then displays two input fields, each with its unit menu, editable independently.

_Note: All styling rules available in Luna Park correspond to the CSS rules found in web standards._

## Quick style panels

For common edits, some style categories are accessible directly from the **layout builder**, without going through the inspector's style tab. Select an element to bring up the `quick style panels` (border, background, size, spacing, text, shadow, etc.).

<DImage :src="QuickStylePanels" :width="1280" :height="720" alt="Quick style panels displayed next to a selected element in the layout builder" />

## Design Tokens

Luna Park also allows the use of design tokens. These are reusable values that ensure a consistent style throughout the application. For example, you can define a primary color and use it everywhere in your application. This makes style management easier and allows for quick global changes. Manage them in the **Tokens** [workspace](../workspace/editor#the-workspace), see [Tokens](./tokens).

<DImage
:src="TokensWorkspace" :width="1280" :height="720"
alt="Tokens workspace with the color tokens, and the selected token in the inspector"
/>


To use a design token:

1. Hover over the value you want to change.
2. Click the link icon to switch to design token selection mode.
3. Select the design token you want to use.

<DImage
  :src="TokenLinkVideo" :width="1280" :height="720"
  alt="Linking a style property to a design token from the inspector"
/>

## Style Variables

You can also use variables to style your components. These variables can be used in the style properties of your components. This lets you create dynamic styles that change based on the state of your application.

To use a variable in a property of your component:

1. Hover over the value you want to link to a variable.
2. Click the lightning icon to switch to variable selection mode.
3. Select the variable you want to use.

<DImage
  :src="VariableBindVideo" :width="1280" :height="720"
  alt="Binding a style property to a variable with the lightning icon"
/>

_Note: Only variables matching the expected type for this property will be available in the list. For example, a numeric variable will only appear for a property expected to be a number._
