<script setup>
import {faSquare} from "@fortawesome/pro-regular-svg-icons";
import { faBolt, faBox, faGear, faPuzzlePiece, faQuoteLeft, faSprayCan, faCode } from "@fortawesome/pro-solid-svg-icons";

import Screen1 from '/assets/images/layout/components/screen1.png';
</script>

# Components

**Component** files are used to define the interface of your application. They allow you to create reusable visual elements throughout your project.

<DImage
  :src="Screen1"
  alt="Screenshot of the Luna Park editor"
/>

## Component configuration

When selecting a component file, you'll get a few configuration options in the inspector panel. Here are the most common ones:

- **Component** - This allows you to toggle between the page and component mode, as well as changing the preview mode.
- **Properties** - Here, you can add custom properties which will be available as variable inside your component.
- **Variables** - Those will be the variables you want to use, but not exposed as properties.
- **Computed** - The computed variables are variables whose value is automatically recalculated based on other variables or conditions.
- **Events** - This is where you can define the events that can be triggered by your component.
- **Default** - In this section, you can write the default value of your properties and variables.

## Layout tree

The layout tree accessible in the options panel allows you to build the architecture of your component. To add an element to the tree, simply click on the

button. Some of the elements can have children. Those kind of emplacement to put children are called slots.

There are a few options at your disposal for each layout element, here are the most common ones:

- <LIcon :icon="faSquare" /> **Block** - Most basic element type, it's just a box that can have children.
- <LIcon :icon="faSprayCan" /> **UI Library** - Pre-made UI elements to speed up the building of your app.
- <LIcon :icon="faBox" /> **Component** - Use one the custom components you created.
- <LIcon :icon="faPuzzlePiece" /> **Slot** - Indicate where the children of this component should go.
- <LIcon :icon="faGear" /> **Template** - This allows you to do conditional or loop rendering.
- <LIcon :icon="faQuoteLeft" /> **Custom text** - Write markdown text.
- <LIcon :icon="faCode" /> **Custom HTML** - Write custom HTML code.
- <LIcon :icon="faBolt" /> **Variable** - Use this kind of element to display a variable.

## Pages

To define a component as a **page**, simply change its type in the inspector. You can then define a path to access the page. The main page of your application will always be `/` (with nothing following).

![Screenshot of the Luna Park editor](/assets/images/layout/components/gif1.gif)
