<script setup lang="ts">
import {faLink, faGear, faHammer, faUpRightFromSquare} from "@fortawesome/pro-solid-svg-icons";
</script>

# Export for the Web

To export for the web, simply click on the <LIcon :icon="faHammer"/> (Compile) icon in the top bar.

Then, click either `Download` to get the source code or export code of your application, which you can host anywhere, or `Deploy` to make your application accessible via a Luna Park link (for frontend testing only).

To access your deployed application on Luna Park, simply click on the <LIcon :icon="faUpRightFromSquare" /> icon next to the `Deploy` button.

### Source Code

The source code is the complete npm project of your application. It contains, among other things, the source files of your interface (Luna Park generates `.vue` files for each component of your application).

### Export Code

The export code is the result of compiling your application. It contains all the files necessary to run your application but not the source files. It is optimized for deployment on a web server.

### Settings

The settings are available in the `General Settings` tab of the inspection panel (<LIcon :icon="faGear"/> icon in the top bar). You can modify the name of your application there, as well as define whether you want it to be a PWA (Progressive Web App). This means your application can be installed directly on compatible browsers.

::: warning PWA Not Available
PWA mode is not ready yet.
:::

You can also choose the history mode from the following types:

- **Hash Mode** (default): Generates links like `myApp.com/#/home/dashboard`. This mode works in most cases but is not optimal for SEO and does not work with page anchors.
- **Web Mode**: Generates links like `myApp.com/home/dashboard`. This mode is better for SEO but requires server configuration to redirect all 404 errors to the `index` file.
- **Memory Mode**: Generates links like `myApp.com/` (the path is hidden). This mode works in all conditions but is not optimal for SEO.

## Export a Desktop Application

To export a desktop application, simply click on the <LIcon :icon="faHammer"/> (Compile) icon in the top bar. Then, choose the OS on which you want to export (Windows, Linux, or Mac) in the `portable` or `installer` section.

- **Portable**: Generates a single executable that can be run directly. Useful for quick tests, but not recommended for distribution.
- **Installer**: Generates an installer that can be distributed. Recommended for distributing your application.

::: warning MacOS Compilation Not Available
Export for MacOS is not ready yet.
:::

### Settings

The settings are available in the `Desktop Settings` tab of the inspection panel (<LIcon :icon="faGear"/> icon in the top bar).

- **Package Name**: Used for updates, it must remain the same. It is currently automatically generated from the name of your application.
- **Version**: Used for updates, follow the semver format (e.g., 1.0.0).
- **Dimensions**: Default size of your application window.
- **Resizable**: Indicates whether the window can be resized or not.
- **Full Screen**: Indicates whether the window should be full screen by default.

## Export for Mobile

<br/>

::: warning Mobile Export Not Available
Export for mobile is not ready yet.
:::

