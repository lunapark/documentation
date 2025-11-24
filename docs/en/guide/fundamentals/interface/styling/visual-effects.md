# Visual Effects

Visual effects allow you to add depth and relief to your interface.
They influence the perception of elements without modifying their structure.

## Rounded Corners (`Radius`)

| Property | Description |
|------------|--------------|
| **Border Radius** | Defines the curvature radius of corners. Can be applied uniformly or individually (top-left, top-right, etc.). |

<DImage
src="/assets/images/fundamentals/styling/screen6.png"
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
src="/assets/images/fundamentals/styling/screen7.png"
alt="Examples of border styles"
/>

---
## Opacity (`Opacity`)

| Property | Description                                                                                       |
|------------|---------------------------------------------------------------------------------------------------|
| **Opacity** | Defines the transparency of the element (from 0 to 100%). |

<DImage
src="/assets/images/fundamentals/styling/screen8.png"
alt="Examples of opacity levels"
/>

---

## Transformations (`Transform`)

Transformations allow you to modify the position, size, and orientation of an element without affecting its flow in the page.
They are often used to create animations or dynamic visual effects.

| Property | Description                                                                    |
|------------|--------------------------------------------------------------------------------|
| **Translate** | Moves an element on the X, Y, or Z axis. Example: `translateX(50px)`.          |
| **Rotate** | Rotates an element around its center. Example: `rotate(45deg)`.       |
| **Scale** | Enlarges or reduces an element. Example: `scale(110%)`.                        |

---

## Hover Effects (`Hover`)

Luna Park allows adding specific styles when an element is hovered.
To activate *hover* mode, click on the **hand** icon in the properties bar.
A new style state then appears, allowing you to freely modify properties (color, shadow, opacity, etc.) applied only on hover.

<DImage
src="/assets/images/fundamentals/styling/gif2.gif"
alt="Activation of hover style in Luna Park editor"
/>

---


## Transitions (`Transition`)

| Property | Description |
|------------|--------------|
| **Duration** | Defines the animation duration (in ms). |
| **Timing Function** | Transition speed curve (ease, linear, etc.). |
| **Delay** | Defines the delay before the effect starts. |

<DImage
src="/assets/images/fundamentals/styling/gif1.gif"
alt="Example of transition applied on a button"
/>

## Going Further

- [Complete list of CSS properties – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Properties)
