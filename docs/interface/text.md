---
description: "Write formatted text in Luna Park: the Custom text markup, variables in text, Custom HTML, and Text files."
---

<script setup lang="ts">
import EditingImage from '/assets/images/interface/text/editing.png';
import TypingVideo from '/assets/images/interface/text/typing.webm';
import PreviewTextImage from '/assets/images/interface/text/preview-text.png';
import TextFileImage from '/assets/images/interface/text/text-file.png';
</script>

# Text

The **Custom text** element holds text written directly on the canvas, with formatting and variables. Add one from the element list of the [layout tree](./builder#the-element-list), and pick its HTML **Tag** in the **Element** panel: `span` (default), `p`, `div`, `h1`, `h2`, or `h3`.

## Writing on the canvas

In [Builder mode](./preview#builder-mode), click a Custom text on the canvas to edit it in place. The formatting markers stay visible while you edit, so you always see what you typed.

<DImage
  :src="TypingVideo" :width="1280" :height="720"
  alt="Typing at the end of a Custom text on the canvas: the bold marker is formatted as it is typed"
/>

To see the text as visitors will, turn on **Preview text** in the toolbar under the main view, or switch to **Preview** mode.

<DImage
  :src="PreviewTextImage" :width="1280" :height="720"
  alt="Preview text turned on: the formatting markers are hidden and the stock and price placeholders show their values"
/>

## Formatting

Wrap words with a marker to format them:

| You type | Result |
|---|---|
| `*bold*` | **bold** |
| `/italic/` | *italic* |
| `_underline_` | <u>underline</u> |
| `~strikethrough~` | ~~strikethrough~~ |
| `=highlight=` | <mark>highlight</mark> |
| `` `code` `` | `code` |
| `[Luna Park](https://luna-park.app)` | a link, opened in a new tab |
| `https://luna-park.app` | an automatic link |

This is not standard Markdown: `**bold**`, `_italic_`, or `# Title` are not formatting in a Custom text. To make a heading, pick an `h1`, `h2`, or `h3` **Tag** instead.

## Variables in text

Type a name between braces, like `{price}`, to insert a value in the text. Each placeholder appears as a property of the element in the **Properties** panel: [bind](./bindings) it to a variable, a property of the component, a loop item, or give it a constant value.

```text
Only {stock} left, from {price} €
```

<DImage
  :src="EditingImage" :width="1280" :height="720"
  alt="Custom text with the stock and price placeholders, bound to the stock and price variables in the Properties panel"
/>

- Names contain letters, digits, `_`, and `$`.
- Renaming a placeholder keeps its binding.
- Placeholders also work inside links: `[See the product](https://shop.example.com/{slug})`.
- Values are inserted as text: HTML in a value is shown as is, not interpreted.

In Builder mode, placeholders are shown with their name. **Preview text** shows their values.

## Custom HTML

The **Custom HTML** element renders raw HTML, for markup the other elements don't cover (an embed, an SVG, a table). Edit it in the code editor of the element.

Insert values with double braces, like `{{price}}`. As for Custom text, each placeholder becomes a property to bind in the **Properties** panel. Unlike Custom text, values are inserted as HTML: never put values typed by visitors in a Custom HTML element.

## Text files

A **Text** file (**New > Text** in the Explorer) is a document made of blocks, for content longer than a few lines: a guide, terms of service, release notes. `Enter` starts a new block, and `Backspace` at the start of a block merges it with the previous one.

Text files use the same inline formatting as Custom text, plus a marker at the start of a block to change its kind:

| Block starts with | Result |
|---|---|
| `#` | Heading |
| `##` | Subheading |
| `###` | Smaller heading |
| `"` | Quote |
| `-` | Bulleted list |
| `.` | Numbered list |
| `$` | Code block |
| `\` | Paragraph |

Write the marker without a space after it: `#Release notes`, `-First item`. In a list or a code block, a single line break adds an item or a line.

<DImage
  :src="TextFileImage" :width="1280" :height="720"
  alt="Text file with a heading, a paragraph, a subheading, a list, a quote, and a code block"
/>
