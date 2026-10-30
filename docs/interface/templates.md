---
description: "Use conditional, repeated, and dynamic template elements in Luna Park interfaces."
---

<script setup lang="ts">
import ValuesImage from '/assets/images/layout/templates/values.png';
import WinVideo from '/assets/images/layout/templates/win.webm';
import ArticlesVariableImage from '/assets/images/layout/templates/articles-variable.png';
import ForTemplateImage from '/assets/images/layout/templates/for-template.png';

import Screen2 from '/assets/images/layout/templates/if-template.png';
import Screen3 from '/assets/images/layout/templates/computed-graph.png';
import Screen6 from '/assets/images/layout/templates/for-result.png';
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

<DImage
  :src="ValuesImage" :width="1280" :height="720"
  alt="Inspector with a score Number variable and a displayWin Boolean computed variable"
/>

### 2. Use the Computed Variable in the Interface

1. Add a **Template** element to the interface.
2. Inside the Template, insert a text component with the message "You win".
3. In the inspection panel, link the **Template** component to the condition `displayWin`.
    - If `displayWin` is true, the message will be displayed.
    - If `displayWin` is false, the message will not be displayed.

<DImage
  :src="Screen2" :width="1280" :height="720"
  alt="Template element with If logic bound to displayWin, wrapping the You win text"
/>

### 3. Define the Logic for the Computed Variable

1. In the graph, add a **Get score** node to retrieve the current value of the `score` variable.
2. Use a **Condition** node (`A >= B`) to check if the score is greater than or equal to `10`.
3. Connect the result of this condition to the **computed variable displayWin**.

<DImage
  :src="Screen3" :width="1280" :height="720"
  alt="displayWin computed graph comparing the score to 10 with an A ≥ B node"
/>

### 4. Test Your Logic

- Modify the score using the buttons in the interface.
- When the score reaches or exceeds `10`, the message "You win" should automatically appear.

<DImage
  :src="WinVideo" :width="1280" :height="720"
  alt="Preview mode: increasing the score until the You win message appears"
/>

## For Templates

The For template allows you to repeat an element multiple times based on an array or list. It is useful for dynamically displaying similar elements in the interface.

Example: Display a list of items

### 1. Create the Page and the Articles Variable

1. Create a new page named **Articles**.
2. In the **Inspector** panel, add a variable of type **Array** (array) called `articles`.
3. Fill this variable with values, for example: <br/> <DSchemaValue :value='["sushi", "onigiri", "takoyaki", "tsukune"]'/>.

<DImage
  :src="ArticlesVariableImage" :width="1280" :height="720"
  alt="articles Array variable containing sushi, onigiri, takoyaki and tsukune"
/>

### 2. Set Up the Loop Logic

1. Add a **Template** component to the interface.
2. Configure the Template with the **For** logic and link it to the `articles` variable.
3. The For logic allows you to iterate over each element of the `articles` array.
4. The Template will execute its content once for each article.

<DImage
  :src="ForTemplateImage" :width="1280" :height="720"
  alt="Template element inspector with For logic iterating over articles"
/>

### 3. Display the Elements in the Interface

1. Inside the Template, add a **Block**.
2. Insert a **Variable** component into this div.
3. Link this variable to `Template[].Value`, which corresponds to each element of the iterated array.
4. Now, when you view the **Articles** page in the interface, you will see each element of the `articles` array displayed in a new block.

<DImage
:src="Screen6" :width="1280" :height="720"
alt="Variable element bound to Template[].value, listing each article in the preview"
/>
