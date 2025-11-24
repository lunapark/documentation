<script setup lang="ts">
import Screen1 from '/assets/images/layout/styling/screen1.png';
import Screen2 from '/assets/images/layout/styling/screen2.png';
import Screen3 from '/assets/images/layout/styling/screen3.png';
import {faLink, faBolt} from "@fortawesome/pro-solid-svg-icons";
</script>

# Tokens and Style Variables

**Tokens** are reusable values that define the visual foundations of your application (colors, sizes, spacing, fonts, etc.).
They ensure **style consistency** and allow you to modify the global appearance without having to edit each component individually.

For example, if you modify the `primary-color` token, all areas using it will be updated instantly.

<DImage
:src="Screen1"
alt="Screenshot of the Luna Park editor"
/>


### Using a Design Token

1. Hover over the value you want to modify.
2. Click the **<LIcon :icon="faLink" />** icon to activate token selection mode.
3. Select the design token you want to use.

<DImage
src="/assets/images/layout/styling/gif1.gif"
alt="Example of token usage"
/>

_Note: Tokens replace hardcoded values and serve as a basis for global style customization._

## Style Variables

**Style variables** allow you to make your components dynamic: a color, size, or property can change based on the state or data of your application.

Unlike tokens, which are static and global, variables are **contextual and reactive**. They are used to visually adapt components according to your application logic (e.g., if `loggedIn = true`, then `color = success-color`).

### Using a Style Variable

1. Hover over the value you want to link to a variable.
2. Click the **<LIcon :icon="faBolt" />** icon to switch to variable selection mode.
3. Select the variable you want to use.

<DImage
src="/assets/images/layout/styling/gif2.gif"
alt="Example of variable usage"
/>


_Note: Only variables compatible with the property type will appear in the list. For example, a numeric variable will only be available for a number type property._
