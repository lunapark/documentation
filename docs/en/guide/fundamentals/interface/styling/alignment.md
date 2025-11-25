<script setup>
import screen2 from '/assets/images/fundamentals/styling/screen2.png';
import screen3 from '/assets/images/fundamentals/styling/screen3.png';
import screen4 from '/assets/images/fundamentals/styling/screen4.png';
import screen5 from '/assets/images/fundamentals/styling/screen5.png';
</script>

# Layout and Alignment

Layout controls how elements are organized in space.
Luna Park uses **CSS layout** principles, but in a visual interface.

---

## Container and Children

Each element acts as a **container block** (parent) that can organize its **children**.
Layout properties therefore apply to the **parent**, while alignment influences the position of children inside.

<DImage
  :src="screen2"
  alt="Screenshot of a container with multiple children"
/>

---

## Layout Type

You can define the main layout mode of the element:

| Mode | Description |
|------|--------------|
| **Block** | Elements are placed one below the other. |
| **Inline** | Elements are displayed sequentially on a line. |
| **Flex** | Flexible organization of children (direction, wrap, alignment). |
| **Grid** | Grid organization with defined columns and rows. |

> *Flex* and *Grid* modes are recommended for structuring complex interfaces.

<DImage
  :src="screen3"
  alt="Selection of Flex mode in the style panel"
/>

---

## Alignment (in Flex or Grid mode)

Once a container is in Flex or Grid mode, several properties control the position of children:

| Property | Description |
|------------|--------------|
| **Direction** | Defines the display direction: `row`, `column`, `row-reverse`, `column-reverse`. |
| **Justify Content** | Aligns children on the main axis (defined by `Direction`). |
| **Align Items** | Aligns children on the secondary axis. |
| **Gap** | Space between children (horizontal and/or vertical). |
| **Wrap** | Indicates if elements should wrap to the next line when space is insufficient. |

<DImage
  :src="screen4"
  alt="Flex container with direction, justify and align"
/>

---

## Absolute Positioning

For cases requiring free placement (overlays, badges, tooltips), you can enable **absolute positioning**.

| Property | Description |
|------------|--------------|
| **Position** | Switches the element to `absolute` or `relative`. |
| **Top / Right / Bottom / Left** | Defines the exact position within the parent. |
| **Z-index** | Manages layering between elements. |

<DImage
  :src="screen5"
  alt="Example of absolute positioning in Luna Park"
/>

---

## Best Practices

- Use **Flex** for simple layouts (bars, columns, lists).
- Use **Grid** for complex structures (tables, dashboards).
- Avoid absolute positioning except for specific UI cases.
- Prefer **gaps** to manual margins for consistent responsive rendering.

## Going Further

Luna Park relies on the same principles as CSS. If you want to deepen the logic behind these properties:

- [Flexbox Guide - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Grid Guide - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [CSS Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
