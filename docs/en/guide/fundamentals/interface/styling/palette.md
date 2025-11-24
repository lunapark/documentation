<script setup lang="ts">
import Screen3 from '/assets/images/layout/styling/screen3.png';
import {faPalette} from "@fortawesome/pro-solid-svg-icons";
</script>

# Palette

The `palette` defines the global colors of your application. It controls all hues used by components, backgrounds, and text.

You can access the `palette` via the <LIcon :icon="faPalette" /> button in the top bar of the editor.
The main colors (primary, secondary, content) can be modified at any time. Associated shades and gradients are **automatically generated** to ensure **visual consistency** throughout the application.

The `Match editor` option allows you to apply the same colors to the editor interface. Useful for **reducing visual fatigue** during design.
<DImage
:src="Screen3"
alt="Screenshot of the Luna Park editor"
/>

_Note: The palette serves as a base for your color tokens: any global change is automatically reflected there._
