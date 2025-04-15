<script setup>
import Screen1 from '/assets/images/layout/editor/screen1.png';
import Screen2 from '/assets/images/layout/editor/screen2.png';
import Screen3 from '/assets/images/layout/editor/screen3.png';
import Screen4 from '/assets/images/layout/editor/screen4.png';
import Screen5 from '/assets/images/layout/editor/screen5.png';
import Screen6 from '/assets/images/layout/editor/screen6.png';
</script>

# Editor

The editor allows you to build your application using layouts and visual logic. It consists of several panels that serve different purposes.

<DImage 
  :src="Screen1"
  alt="Screenshot of the Luna Park editor"
/>

## The Explorer

The explorer is located at the top left of the editor. It allows you to create a new file with a `right-click`, select it with a `double-click`, and delete it with the `delete` key. You can create folders to better organize your project, but the structure does not affect the logic of your application.

<DImage 
  :src="Screen2"
  alt="Screenshot of the Luna Park editor"
/>

## Options Panel

The options panel is located at the bottom left of the editor. It displays various information related to the file currently in use. Here, a layout component is open, and the options panel displays its layout tree. To set a file as the working file, you must `double-click` it in the explorer panel.

<DImage 
  :src="Screen3"
  alt="Screenshot of the Luna Park editor"
/>

## The Inspector

The inspector is located on the right side of the editor. It displays various information related to the selected element (a file, a layout element, a logic node, etc.). Here, a layout element is selected, and the inspector displays its properties.

<DImage 
  :src="Screen4"
  alt="Screenshot of the Luna Park editor"
/>

## The Console

The console is located at the bottom of the editor. It allows you to log values to debug your application. To display a value in it, you must use the `log` node in the logic editor. Note that the value will also be sent to your browser's console.

<DImage 
  :src="Screen5"
  alt="Screenshot of the Luna Park editor"
/>

## The Main View

Finally, the main view is the central part of the editor. It displays a visualization of the working file. In this case, the builder mode of a layout component is selected, so it displays the visual builder of the layout.

<DImage 
  :src="Screen6"
  alt="Screenshot of the Luna Park editor"
/>
