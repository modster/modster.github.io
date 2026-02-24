---
theme: default
title: Repositories
toc: false
---

```js
const repos = FileAttachment("/data/repos.csv").csv()
Inputs.table(repos, {
  columns: ["name", "description", "visibility", "last update"]
})
```

# Repository overview

<section class="grid grid-cols-3 stats">
  <div class="card">
    <p class="label">Total repositories</p>
    <p class="metric">${totalRepos.toLocaleString("en-US")}</p>
  </div>
  <div class="card">
    <p class="label">Owners represented</p>
    <p class="metric">${uniqueOwners.toLocaleString("en-US")}</p>
  </div>
  <div class="card">
    <p class="label">Preview size</p>
    <p class="metric">${preview.length.toLocaleString("en-US")}</p>
  </div>
</section>

<section class="card">
  <h2>Repository list (alphabetical preview)</h2>
  <p class="muted">Showing the first ${preview.length.toLocaleString("en-US")} repositories sorted by name.</p>
  <div class="repo-grid">
${Inputs.table(
  preview.map((repo) => ({
    Name: repo.name,
    Owner: repo.owner,
    URL: repo.url
  })),
  {
    Name: "text",
    Owner: "text",
    URL: "url"
  }
)}
  
  </div>
</section>

<section class="card data-card">
  <div>
    <h2>Data source</h2>
    <p class="muted">This page uses the repository list stored in the project.</p>
  </div>
  <div class="code-pill">
    <span>File</span>
    <a href="/data/repoNodes.js">/data/repoNodes.js</a>
  </div>
</section>

<style>
.stats {
  margin: 2rem 0;
}

.label {
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  margin: 0 0 0.5rem;
  color: var(--theme-foreground-muted);
}

.metric {
  margin: 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
}

.repo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.repo-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--theme-foreground-muted);
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.repo-pill:hover {
  transform: translateY(-2px);
}

.data-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.code-pill {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--theme-foreground-muted);
  font-weight: 600;
}

.muted {
  color: var(--theme-foreground-muted);
}

@media (max-width: 900px) {
  .data-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
