---
description: "Create reusable visual components for Luna Park application interfaces."
---

<script setup>
import TypeToPageVideo from '/assets/images/layout/components/type-to-page.webm';
import Model from '/assets/images/layout/components/model.png';
import ModelBinding from '/assets/images/layout/components/model-binding.png';
import {faSquare} from "@fortawesome/pro-regular-svg-icons";
import { faBolt, faBox, faGear, faPuzzlePiece, faQuoteLeft, faCode } from "@fortawesome/pro-solid-svg-icons";

import Screen1 from '/assets/images/layout/components/editor.png';
</script>

# Components

**Component** files are used to define the interface of your application. They allow you to create reusable visual elements throughout your project.

<DImage
  :src="Screen1" :width="1280" :height="720"
  alt="Editor with the Layout component open: explorer, element tree, preview and inspector"
/>

## Component configuration

When selecting a component file, you'll get a few configuration options in the inspector panel. Here are the most common ones:

- **Component** - This allows you to toggle between the page and component mode, as well as changing the preview mode (see [Preview](./preview)), and to add a [model](#model).
- **Properties** - Here, you can add custom properties which will be available as variable inside your component.
- **Variables** - Those will be the variables you want to use, but not exposed as properties.
- **Computed** - The computed variables are variables whose value is automatically recalculated based on other variables or conditions.
- **Events** - This is where you can define the events that can be triggered by your component.
- **Default** - In this section, you can write the default value of your properties and variables.

## Layout tree

The layout tree accessible in the options panel allows you to build the architecture of your component. To add an element to the tree, simply click on the button (see [Builder](./builder) for every way to insert elements). Some elements can have children. These slots for children are called slots.

Here are a few options at your disposal for each layout element, here are the most common ones:

- <LIcon :icon="faSquare" /> **Block** - Most basic element type, it's just a box that can have children.
- <LIcon :icon="faBox" /> **Component** - Use one of the custom components you created.
- <LIcon :icon="faPuzzlePiece" /> **Slot** - Indicate where the children of this component should go.
- <LIcon :icon="faGear" /> **Template** - This allows you to do conditional or loop rendering.
- <LIcon :icon="faQuoteLeft" /> **Custom text** - Write markdown text.
- <LIcon :icon="faCode" /> **Custom HTML** - Write custom HTML code.
- <LIcon :icon="faBolt" /> **Variable** - Use this kind of element to display a variable.

## Model

A **model** is a value shared both ways between a component and the component that uses it, like the value of a text field: the parent gives a variable, the component reads it and can change it, and the parent's variable follows. Use it for components that edit a value: a rating, a color picker, a custom input.

### Add a model

1. Click the component in the **Explorer**. In the **Component** section of the inspector, click **Add model** in the **Model** row.
2. Pick its type (for example **Number** for a rating).

A component has one model. Pages don't have one. The **×** of the row removes it.

<DImage
  :src="Model" :width="1280" :height="720"
  alt="Component section of the Rating component with a Number model"
/>

### Use it inside the component

- In the logic, the **Get Model** node reads the model, and **Set Model** changes it.
- In the [bindings](./bindings#picking-a-variable), the model is listed as `<Component name> Model`.

### Bind it from a parent

Select an instance of the component in the parent's layout tree. The **Element** panel shows a **Model** row: pick the variable to share. **New variable** in the picker creates one of the right type.

When the component calls **Set Model**, the parent's variable changes, and when the parent changes its variable, the component's model follows.

<DImage
  :src="ModelBinding" :width="1280" :height="720"
  alt="Rating instance selected in a page, with its Model row bound to the score variable"
/>

The same **Model** row binds the value of an **Input** element, and of plugin components that have a value (a select, a checkbox...). Some plugin components have several models: add the others with the **+** of the **Models** row.

::: tip
The model has no default value in the exported app: always bind it in the parent. In the editor, an unbound model starts at the default value of its type.
:::

## Pages

To define a component as a **page**, simply change its type in the inspector. You can then define a path to access the page. The main page of your application will always be `/` (with nothing following). See [Pages and Navigation](./navigation) for paths, dynamic segments, and links between pages.

<DImage
  :src="TypeToPageVideo" :width="1280" :height="720"
  alt="Changing a component's type to Page in the inspector"
/>
