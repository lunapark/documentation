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

### Resizing the Console Panel

The console panel can be resized vertically to adapt the space it occupies to your needs. Point your cursor at the bottom border of the panel (it becomes a resize handle) and drag it up or down to adjust the height.

SCREEN_HERE: console panel with the resize handle visible on the bottom border.

## The Main View

Finally, the main view is the central part of the editor. It displays a visualization of the working file. In this case, the builder mode of a layout component is selected, so it displays the visual builder of the layout.

<DImage 
  :src="Screen6"
  alt="Screenshot of the Luna Park editor"
/>

## Loading Progress Indicators

When initializing a project, the editor displays progress messages detailing each step of the process:

- **Sanitizing** - Validation and cleanup of project structures.
- **Migrating** - Migration to the current format if necessary.
- **Populating** - Loading project data into the editor.

These messages give you better visibility into the current loading status.

SCREEN_HERE: project initialization window showing the progress messages.

## Immersive Mode

**Immersive mode** hides the side panels (explorer, inspector, console) to maximize the available space on the canvas. The panels reappear when you need them.

To access the panels in immersive mode:

- Press `Tab` to show or hide the panels quickly.
- Click the handles located on the screen edges to drag the panels.

Immersive mode is ideal when you are working on complex layouts or want a clear view of the canvas.

SCREEN_HERE: editor in immersive mode with panels hidden.

## Sharing Projects by URL

Luna Park projects can be shared by encoding them directly in the browser's URL address. This approach does not require saving the project on the backend server, which is ideal for quickly sharing drafts and work in progress.

In offline mode, click the save button to generate a shareable URL containing your compressed project. This URL can be shared directly with other users who will open it without needing server infrastructure.

To share a project:

1. Complete your changes in offline mode.
2. Click the save button.
3. A shareable URL is generated and placed in the address bar.
4. Copy the URL and share it with other users.
5. Recipients open the URL directly in the browser to access the project.

SCREEN_HERE: address bar showing the encoded URL containing the project.

## Category Icons in the Inspector

The titles of the inspector panels now display visual icons to quickly identify the panel type. Each category has its own icon:

- **Explorer** - tree icon to identify files and folders.
- **Variables** - variable icon to access the component state.
- **Nodes** - graph icon to identify visual logic panels.
- **Properties** - settings icon for layout and style options.

These icons help you navigate quickly between different inspector types and make the interface more intuitive.

SCREEN_HERE: inspector panel with category icons displayed next to the titles.