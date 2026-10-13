---
description: "Create and use variables to store and manipulate data in visual scripts."
---

<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";

import Screen1 from '/assets/images/visual-scripting/variables/screen1.png';
import Screen2 from '/assets/images/visual-scripting/variables/screen2.png';
import Screen3 from '/assets/images/visual-scripting/variables/screen3.png';
import Gif1 from '/assets/images/visual-scripting/variables/gif1.gif';
</script>

# Variables

Variables are containers used to store information that you can use and manipulate in your graph.

For example:

- a username (text)
- a score (a number)
- a list of items (an array)

## Variable Types

Here are the data types you can use:

- **Text** (<DSchemaType :schema="LogicType.string()" />), a string representing text<br>
  example: <DSchemaValue value="Hello World" />
- **Number** (<DSchemaType :schema="LogicType.number()" />), a number, positive or negative, with or without a decimal<br>
  example: <DSchemaValue :value="42" />
- **Boolean** (<DSchemaType :schema="LogicType.boolean()" />), a value that is either `True` or `False`<br>
  example: <DSchemaValue :value="true" />
- **Array** (<DSchemaType :schema="LogicType.array(LogicType.number())" />), an ordered list of values<br>
  example: <DSchemaValue :value="[1, 2, 3]" />
- **Object** (<DSchemaType :schema="LogicType.object({name: LogicType.string(), age: LogicType.number()})" />), a set of properties and values<br>
  example: <DSchemaValue :value="{ name: 'John', age: 30 }" />

A variable can also be **computed**: its value is recalculated automatically (see [below](#computed-variables)).

## Defining, Displaying, and Updating a Variable

### 1. Define a Variable

1. Select a component in the editor by clicking on it in the explorer.
2. In the inspection panel, add a variable by clicking the `+` button in the **Variables** section.
3. Give it a name and a type (e.g., `score` of type **Number**).
4. Give it an initial value in the **Default** section (e.g., `0`).

<DImage 
  :src="Screen1" :width="1216" :height="684"
  alt="Inspector with a score variable of type Number and a default value of 0"
/>

### 2. Add a Display Element

1. Insert a **Variable** element into your component's tree.
2. Select this element and link it to a variable in the inspection panel.

<DImage
  :src="Screen2" :width="1216" :height="684"
  alt="Variable element bound to the score variable in the inspector"
/>

### 3. Add Buttons to Modify the Variable

1. Add two buttons to the interface, one to **add** and one to **subtract** a point from the score.
2. Configure the buttons to trigger an **On Click** event.

<DImage 
  :src="Gif1" :width="995" :height="537"
  alt="Adding plus and minus buttons around the score and setting their On Click event"
/>

### 4. Create the Logic to Update the Variable

1. Use the On Click node connected to the `+` button.
2. Add the following nodes:
   - `Get score` to retrieve the current value of the score.
   - `Add (+)` to add `1` to this value.
   - `Set score` to update the variable with the new score.
3. Repeat the process for the `-` button, but use the `Subtract (-)` node instead of `Add (+)`.

<DImage
:src="Screen3" :width="765" :height="380"
alt="On Click on the plus button sets score to score + 1"
/>

### 5. Test and Verify

- Switch to `Preview` mode to test your application.
- Click the `+` and `-` buttons in the interface.
- You should see the variable's value update in real-time.

![Preview mode: clicking the plus and minus buttons updates the score](/assets/images/visual-scripting/variables/gif2.gif){width=1265 height=607}

## Variable Reactivity

### In the Interface

Variables can be used to display dynamic information in the user interface. If you modify a variable, the interface automatically updates to reflect this change.

### Computed Variables

**Computed** variables are variables whose value is automatically recalculated based on other variables or conditions.

How it works:

- A **computed** variable depends on one or more other variables.
- When these variables change, the value of the **computed** variable is automatically updated.

Imagine you have a variable `score` and you want to display double this score in the interface. You can create a **computed** variable that doubles the value of `score`.

If `score` is `10`, the **computed** variable will display `20`. If `score` changes to `15`, the **computed** variable will automatically display `30`.

::: tip Sharing data between components
A variable belongs to its component. To share data across pages and components, use a [store](./store).
:::
