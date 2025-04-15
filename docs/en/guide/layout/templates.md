<script setup lang="ts">
import {LogicType} from "@luna-park/logicnodes";

import Screen2 from '/assets/images/layout/templates/screen2.png';
import Screen3 from '/assets/images/layout/templates/screen3.png';
import Screen6 from '/assets/images/layout/templates/screen6.png';
</script>

# Template Elements

## If Templates

If template elements allow you to display or hide interface elements based on a condition.

Example: Display a conditional message with a computed variable

In this example, we will display a message "You win" when the score exceeds a certain value. To do this, we will:

1. **Create a computed variable** to check if the score is greater than `10`.
2. **Use this computed variable** to display or hide a message in the interface.

### 1. Define the Computed Variable

1. Select the **Layout** component.
2. In the **Inspector** panel, add a computed variable called `displayWin`.
3. Define it as a **boolean** (true or false).

![Screenshot of the Luna Park editor](/assets/images/layout/templates/screen1.png)

### 2. Use the Computed Variable in the Interface

1. Add a **Template** element to the interface.
2. Inside the Template, insert a text component with the message "You win".
3. In the inspection panel, link the **Template** component to the condition `displayWin`.
    - If `displayWin` is true, the message will be displayed.
    - If `displayWin` is false, the message will not be displayed.

<DImage
  :src="Screen2"
  alt="Screenshot of the Luna Park editor"
/>

### 3. Define the Logic for the Computed Variable

1. In the graph, add a **Get score** node to retrieve the current value of the `score` variable.
2. Use a **Condition** node (`A >= B`) to check if the score is greater than or equal to `10`.
3. Connect the result of this condition to the **computed variable displayWin**.

<DImage
  :src="Screen3"
  alt="Screenshot of the Luna Park editor"
/>

### 4. Test Your Logic

- Modify the score using the buttons in the interface.
- When the score reaches or exceeds `10`, the message "You win" should automatically appear.

![Screenshot of the Luna Park editor](/assets/images/layout/templates/gif1.gif)

## For Templates

The For template allows you to repeat an element multiple times based on an array or list. It is useful for dynamically displaying similar elements in the interface.

Example: Display a list of items

### 1. Create the Page and the Articles Variable

1. Create a new page named **Articles**.
2. In the **Inspector** panel, add a variable of type **Array** (array) called `articles`.
3. Fill this variable with values, for example: <br/> <DSchemaValue :value='["sushi", "onigiri", "takoyaki", "tsukune"]'/>.

![Screenshot of the Luna Park editor](/assets/images/layout/templates/screen4.png)

### 2. Set Up the Loop Logic

1. Add a **Template** component to the interface.
2. Configure the Template with the **For** logic and link it to the `articles` variable.
3. The For logic allows you to iterate over each element of the `articles` array.
4. The Template will execute its content once for each article.

![Screenshot of the Luna Park editor](/assets/images/layout/templates/screen5.png)

### 3. Display the Elements in the Interface

1. Inside the Template, add a **Div**.
2. Insert a **Variable** component into this div.
3. Link this variable to `Template[].Value`, which corresponds to each element of the iterated array.
4. Now, when you view the **Articles** page in the interface, you will see each element of the `articles` array displayed in a new block.

<DImage
:src="Screen6"
alt="Screenshot of the Luna Park editor"
/>
