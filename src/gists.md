---
title: Gists
toc: false
---

```js
import { utcParse } from "npm:d3-time-format"
const gists = FileAttachment("/data/gh/gh-gists.tsv").tsv({ array: true, typed: true })
const link = (id) => `https://gist.github.com/${id}`
const source = FileAttachment("/data/gh/gh-gists.tsv").href
```

## Gists

### Select

```js
const table = Inputs.table(gists, {
  width,
  columns: [1, 2, 3, 4],
  header: {
    1: "Description",
    2: "Files",
    3: "Visibility",
    4: "Last Update",
  },
  format: {
    1: (description) => html`<a href=${link} target="_blank" alt=${description}>${description}</a>`,
    4: (date) => new Date(date).toLocaleString(),
  },
  select: false,
  layout: "fixed",
  rows: 25,
  multiple: false,
})
```

<div class="grid grid-cols-2"  style="grid-auto-rows: auto;">
  <div class="card" style="padding: 0; grid-column: span 2;">
    ${resize((width, height) => table)}

  </div>
  <div class="card" style="padding: 0;">
    <h1>1</h1>
  </div>
  <div class="card" style="padding: 0;">
    <h1>2</h1>
  </div>
</div>
