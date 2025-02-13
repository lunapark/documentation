<script setup lang="ts">
import {faLink, faGear, faHammer} from "@fortawesome/pro-solid-svg-icons";

</script>

# Web exporter

To export for the web, simply click on the <font-awesome-icon :icon="faHammer"/> icon (Compile) on the top bar.

icon (Compile) on the top bar. Then either click on <Highlight text="download" /> to get the code of your app that you can host anywhere. Or click on <Highlight text="deploy"/> to make your app available through a Luna Park link (this option is only for testing purpose for now).

To access your app deployed on Luna Park, simply click on the <Highlight text="open"/> icon next to the <Highlight text="deploy"/> button. The link is also available under the Hosting menu ( <font-awesome-icon :icon="faLink"/>  icon in the top bar) 

## Settings 

Settings are available in the <Highlight text="settings"/> tab of the inspector panel ( <font-awesome-icon :icon="faGear"/> icon in the top bar). You can update the name of your app, aswell as if you want it to be a PWA (Progressive Web App). This means that your app can be installed directly on browsers that support it.

<Warning title="PWA is not available" content="The PWA mode is not ready yet" />

You can also choose the history mode among these types:

- **Hash mode** (default): Produce links like <Highlight text="myApp.com/#home/dashboard"/>
    This will work in most cases but it's not the best mode for SEO, and it won't work with page anchors.
    
- **Web mode**: Produce links like <Highlight text="myApp.com/home/dashboard"/>
    This is best for SEO but requires some configuration on your server to redirect all 404 to the <Highlight text="index"/> file.
    
- **Memory mode**: Produce links like <Highlight text="myApp.com/"/> (path is hidden)
    This will work in any condition but is the worst for SEO and UX. 

# Desktop export

To export for desktop, simply click on the <font-awesome-icon :icon="faHammer"/> icon (Compile) on the top bar. Then either click on the OS you want to export to (Windows, Linux or Mac) on the <Highlight text="portable"/> or <Highlight text="installer"/> section.

- **Portable**: Will generate a single executable that can be directly launched. 
 <br/>
  Useful for quick test, but not recommended for distribution as it may not work on older systems.
- **Installer**: Will generate an installer to install your app.
  <br/>
Best for distribution, support updates and can be installed anywhere. 

<Warning title="MacOS compilation is not available" content="The export for MacOS is not ready yet. " />

## Settings

Settings are available in the <Highlight text="settings"/> tab of the inspector panel ( <font-awesome-icon :icon="faGear"/> icon in the top bar).

- **Package name**: Used for updates, this should stay the same. It is currently automatically generated from the name of your app.
- **Version**: Used for updates, use the semver format (ex: 1.0.0).
- **Dimension**: This is the default window size of your app.
- **Resizable**: Whether or not the window can be resized.
- **Fullscreen**: Whether or not the window should be fullscreen by default.

# Mobile export

<br/>

<Warning title="Mobile export is not available" content="The export for mobile is not ready yet. " />