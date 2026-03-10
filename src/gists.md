---
title: "Gists"
toc: false
---

```js
import { utcParse } from "npm:d3-time-format"
const gists = FileAttachment("/data/gh/gh-gists.tsv").tsv({ array: true, typed: true })
// const columns [0, 1, 2, 3, 4] = gists.columns

const link = `https://gist.github.com/`
const source = FileAttachment("/data/gh/gh-gists.tsv").href
```

## Gists

```js
const columns = gists.map((gist) => {
    return {
      [gist[0]]: name,
      [gist[1]]: description,
      [gist[2]]: files,
      [gist[3]]: visibility,
      [gist[4]]: lastUpdate,
    }
  }),
)
```

### Select

<div class="card" style="height: 500px;">
<h2>Gists</h2>
  <h3>
    <a href=${source} target="\_blank">source</a>
  </h3>
  ${resize((width, height) => Inputs.table(gistsData, {
    width,
    columns: [name, description, files, visibility, lastUpdate],
    format: {
      1: (description) => html`<a href=${link} target="\_blank" alt=${description}>${description}</a>`,
      4: (date) => new Date(date).toLocaleString(),
    },
    select: false,
    layout: "fixed",
    multiple: false,
  }),
)}
</div>
