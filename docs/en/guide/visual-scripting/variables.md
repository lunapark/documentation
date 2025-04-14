<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";
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

### Computed Variables

**Computed** variables are variables whose value is automatically recalculated based on other variables or conditions. They are also **reactive**.

## Defining, Displaying, and Updating a Variable

### 1. Define a Variable

1. Select a component in the editor by clicking on it in the explorer.
2. In the inspection panel, add a variable by clicking the `+` button in the **Variables** section.
3. Give it a name and a type (e.g., `score` of type **Number**).
4. Give it an initial value in the **Default** section (e.g., `0`).

<DImage 
  src="/assets/visual-scripting/variables/screen1.png"
  alt="Screenshot of the Luna Park editor"
/>

### 2. Add a Display Element

1. Insert a **Variable** element into your component's tree.
2. Select this element and link it to a variable in the inspection panel.

<DImage 
  src="/assets/visual-scripting/variables/screen2.png"
  alt="Screenshot of the Luna Park editor"
/>

### 3. Add Buttons to Modify the Variable

1. Add two buttons to the interface, one to **add** and one to **subtract** a point from the score.
2. Configure the buttons to trigger an **On Click** event.

<DImage 
  src="/assets/visual-scripting/variables/gif1.gif"
  alt="Screenshot of the Luna Park editor"
/>

### 4. Create the Logic to Update the Variable

1. Use the On Click node connected to the `+` button.
2. Add the following nodes:
   - `Get score` to retrieve the current value of the score.
   - `Add (+)` to add `1` to this value.
   - `Set score` to update the variable with the new score.
3. Repeat the process for the `-` button, but use the `Subtract (-)` node instead of `Add (+)`.

![Screenshot of the Luna Park editor](/assets/visual-scripting/variables/screen3.png)

### 5. Test and Verify

- Switch to `Preview` mode to test your application.
- Click the `+` and `-` buttons in the interface.
- You should see the variable's value update in real-time.

![Screenshot of the Luna Park editor](/assets/visual-scripting/variables/gif2.gif)

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

