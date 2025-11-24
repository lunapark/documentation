<script setup lang="ts">
import Screen1 from '/assets/images/layout/styling/screen1.png';
import Screen2 from '/assets/images/layout/styling/screen2.png';
import Screen3 from '/assets/images/layout/styling/screen3.png';
</script>

# Styling

## Global Styling

The global styling of your app is accessible from the `Palette` button on the top bar of the editor. You can update the primary and the content colors, the shades will automatically be generated.

Note that you can match the editor colors with your app colors by using the match editor option. This can make the building easier for your eyes.

<DImage
:src="Screen3"
alt="Screenshot of the Luna Park editor"
/>

## Element Styling

Each element of your project can be styled individually in the inspector, under the **style** tab. This allows you to customize the appearance of each component of your application, such as text, images, or buttons.

To add a style category (e.g., color, typography, size), simply click the **+** button in the style tab. You can enable or disable each property by clicking on its name.

<DImage
:src="Screen2"
alt="Screenshot of the Luna Park editor"
/>

_Note: All styling rules available in Luna Park correspond to the CSS rules found in web standards._

## Design Tokens

Luna Park also allows the use of design tokens. These are reusable values that ensure a consistent style throughout the application. For example, you can define a primary color and use it everywhere in your application. This makes style management easier and allows for quick global changes.

<DImage
:src="Screen1"
alt="Screenshot of the Luna Park editor"
/>

_Note: For now, design tokens are fixed. It is not yet possible to modify or add them in the editor._

To use a design token:

1. Hover over the value you want to change.
2. Click the link icon to switch to design token selection mode.
3. Select the design token you want to use.

![Screenshot of the Luna Park editor](/assets/images/layout/styling/gif1.gif)

## Style Variables

It is also possible to use variables to style your components. These variables can be used in the style properties of your components. This allows you to create dynamic styles that change based on the state of your application.

To use a variable in a property of your component:

1. Hover over the value you want to link to a variable.
2. Click the lightning icon to switch to variable selection mode.
3. Select the variable you want to use.

![Screenshot of the Luna Park editor](/assets/images/layout/styling/gif2.gif)

_Note: Only variables matching the expected type for this property will be available in the list. For example, a numeric variable will only appear for a property expected to be a number._

