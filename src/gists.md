---
title: "Gists"
toc: false
---

```js
// import { utcParse } from "npm:d3-time-format"
const gists = FileAttachment("/data/gh-gists.tsv").tsv({ array: true, typed: true })
// const columns [0, 1, 2, 3, 4] = gists.columns

const link = "https://gist.github.com/"
const source = FileAttachment("/data/gh-gists.tsv").href
```

## Gists

```js
display(gists.map((gist) => {
    return {
      name: gist[0],
      description: gist[1],
      files: gist[2],
      visibility: gist[3],
      lastUpdate: gist[4],
    }
  }),
)
```

### Select

<div class="card" style="height: 500px;">
<h2>Gists</h2>
<h3><a href=${source} target="\_blank">source</a></h3>
  ${resize((width) => Inputs.table(gists, {
    width,
    columns: [0,1,2,3,4],
    header: [
      0: "Name", 
      1: "Description", 
      2: "Files", 
      3: "Visibility", 
      4: "Last Update"
    ],
    format: {
      1: (description) => html`<a href=${link} target="\_blank" alt=${description}>${description}</a>`,
      4: (date) => new Date(date).toLocaleString(),
    },
    select: false,
    layout: "fixed",
    multiple: false,
  }))}
</div>
