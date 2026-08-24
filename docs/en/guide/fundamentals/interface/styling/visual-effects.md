---
description: "Add depth and visual polish with radius, shadows, borders, and other effects."
---

<script setup lang="ts">
import Screen6 from "/assets/images/fundamentals/styling/screen6.png";
import Screen7 from "/assets/images/fundamentals/styling/screen7.png";
import Screen8 from "/assets/images/fundamentals/styling/screen8.png";
import Gif1 from "/assets/images/fundamentals/styling/gif1.gif";
import Gif2 from "/assets/images/fundamentals/styling/gif2.gif";
import ShadowPanel from "/assets/images/layout/styling/shadow-panel.png";
</script>

# Visual effects

Visual effects let you add depth and relief to your interface.
They influence the perception of elements without modifying their structure.

## Rounded corners (`Radius`)

| Property | Description |
|------------|--------------|
| **Border Radius** | Defines the curvature radius of corners. Can be applied uniformly or individually (top-left, top-right, etc.). |

<DImage
:src="Screen6"
alt="Example of rounded corners on different elements"
/>


---

## Borders (`Border`)

| Property | Description |
|------------|--------------|
| **Width** | Border thickness. |
| **Color** | Border color. |
| **Style** | Border style (solid, dashed, dotted). |

<DImage
:src="Screen7"
alt="Examples of border styles"
/>

---

## Shadows (`Shadow`)

| Property | Description |
|------------|--------------|
| **Blur Radius** | Shadow blur. |
| **Spread Radius** | Shadow size. |
| **Offset X/Y** | Horizontal and vertical offset. |
| **Color** | Shadow color. |

<DImage :src="ShadowPanel" alt="Shadow properties configuration panel in the Luna Park editor" />

---

## Opacity (`Opacity`)

| Property | Description                                                                                       |
|------------|---------------------------------------------------------------------------------------------------|
| **Opacity** | Defines the transparency of the element (from 0 to 100%). |

<DImage
:src="Screen8"
alt="Examples of opacity levels"
/>

---

## Transformations (`Transform`)

Transformations let you modify the position, size, and orientation of an element without affecting its flow in the page.
They are often used to create animations or dynamic visual effects.

| Property | Description                                                                    |
|------------|--------------------------------------------------------------------------------|
| **Translate** | Moves an element on the X, Y, or Z axis. Example: `translateX(50px)`.          |
| **Rotate** | Rotates an element around its center. Example: `rotate(45deg)`.       |
| **Scale** | Enlarges or shrinks an element. Example: `scale(110%)`.                        |

---

## Hover effects (`Hover`)

Luna Park lets you add specific styles when an element is hovered.
To activate *hover* mode, click the **hand** icon in the properties bar.
A new style state then appears, letting you freely modify properties (color, shadow, opacity, etc.) applied only on hover.

<DImage
:src="Gif2"
alt="Activating hover style in the Luna Park editor"
/>

---


## Transitions (`Transition`)

| Property | Description |
|------------|--------------|
| **Duration** | Defines the animation duration (in ms). |
| **Timing Function** | Transition speed curve (ease, linear, etc.). |
| **Delay** | Defines the delay before the effect starts. |

<DImage
:src="Gif1"
alt="Example of transition applied to a button"
/>

## Going further

- [Complete list of CSS properties – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Properties)
