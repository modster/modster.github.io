---
title: Contributions
draft: false
---

# Contribution Graph

```js
const userContributions = await FileAttachment(
  "/data/contributions.json",
).json()
/**
 *   [
 *     {
 *       "contributionCount": 2,
 *       "date": "2025-03-16T00:00:00.000Z",
 *       "weekday": 0,
 *       "contributionLevel": 1
 *     },
 * ]
 */
const days = userContributions.dailyContributions.slice(-365)
display(userContributions.dailyContributions.slice(-365))
```

## Contributions
<div class="grid grid-cols-1">
<card>
<h2>Daily Contributions</h2>
<h3>${userContributions.totalContributions || "0"} contributions in the last year</h3>
${resize((width) => Plot.cell(days,{
      width,
      x: (d) => new Date(d.date).getUTCDate(),
      y: (d) => new Date(d.date).getUTCMonth(),
      fill: "contributionCount",
      tip: true,
      inset: 0.5,
    },
).plot({
  marginTop: 0,
  height: 240,
  padding: 0,
  color: {scheme: "turbo", legend: true, label: "Daily Contributions", tickFormat: null, domain: [0, 5]},
  y: {tickFormat: Plot.formatMonth("en", "narrow"), tickSize: 0},
  })
)}
```
</card>
</grid>