---
title: 'Repos'
toc: false
---

# Repositories

```js
const repos = FileAttachment('/data/gh-repos.tsv').tsv({ array: true, typed: true })
```

### search

```js
const table = Inputs.table(repos, {
  width,
  header: {
    0: 'Name',
    1: 'Description',
    2: 'Visibility',
    3: 'LastUpdate',
  },
  select: false,
  layout: 'fixed',
  multiple: false,
  rows: 25,
})
```

${resize(table)}
