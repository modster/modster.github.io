---
theme: dark
title: GitHub user dashboard
toc: false
---

```js
const user = await FileAttachment("/data/user.json").json();
const userJsonUrl = FileAttachment("/data/user.json").href;

const joinedAt = new Date(user.created_at);
const updatedAt = new Date(user.updated_at);
const now = new Date();
const accountAgeDays = Math.floor((now - joinedAt) / (1000 * 60 * 60 * 24));
const accountAgeYears = Math.floor(accountAgeDays / 365.25);

const blogUrl = user.blog
  ? user.blog.startsWith("http")
    ? user.blog
    : `https://${user.blog}`
  : null;

const followerRatio = user.following
  ? (user.followers / user.following).toFixed(2)
  : "0.00";

const updatedLabel = updatedAt.toLocaleDateString("en-CA", {
  year: "numeric",
  month: "short",
  day: "2-digit"
});
```

<section class="hero">
  <div class="hero-card">
    <div class="hero-meta">
      <div class="avatar-wrap">
        <img src="${user.avatar_url}" alt="${user.login} avatar" />
      </div>
      <div>
        <p class="kicker">GitHub profile</p>
        <h1>${user.name ?? user.login}</h1>
        <p class="handle">@${user.login}</p>
        <p class="bio">${user.bio ?? ""}</p>
      </div>
    </div>
    <div class="hero-links">
      <a class="pill" href="${user.html_url}">Profile</a>
      ${blogUrl ? `<a class="pill" href="${blogUrl}">Website</a>` : ""}
      ${user.twitter_username ? `<a class="pill" href="https://twitter.com/${user.twitter_username}">Twitter</a>` : ""}
      ${user.email ? `<a class="pill" href="mailto:${user.email}">Email</a>` : ""}
    </div>
  </div>
</section>

<section class="grid grid-cols-4 stats">
  <div class="card">
    <p class="label">Public repos</p>
    <p class="metric">${user.public_repos.toLocaleString("en-US")}</p>
  </div>
  <div class="card">
    <p class="label">Followers</p>
    <p class="metric">${user.followers.toLocaleString("en-US")}</p>
  </div>
  <div class="card">
    <p class="label">Following</p>
    <p class="metric">${user.following.toLocaleString("en-US")}</p>
  </div>
  <div class="card">
    <p class="label">Gists</p>
    <p class="metric">${user.public_gists.toLocaleString("en-US")}</p>
  </div>
</section>

<section class="grid grid-cols-3 detail-grid">
  <div class="card">
    <h2>Profile snapshot</h2>
    <dl>
      <div>
        <dt>Company</dt>
        <dd>${user.company ?? "Not listed"}</dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>${user.location ?? "Not listed"}</dd>
      </div>
      <div>
        <dt>Hireable</dt>
        <dd>${user.hireable ? "Yes" : "No"}</dd>
      </div>
      <div>
        <dt>Account type</dt>
        <dd>${user.type}</dd>
      </div>
    </dl>
  </div>
  <div class="card">
    <h2>Account timeline</h2>
    <dl>
      <div>
        <dt>Joined</dt>
        <dd>${joinedAt.toLocaleDateString("en-CA")}</dd>
      </div>
      <div>
        <dt>Account age</dt>
        <dd>${accountAgeYears} years (${accountAgeDays.toLocaleString("en-US")} days)</dd>
      </div>
      <div>
        <dt>Last updated</dt>
        <dd>${updatedLabel}</dd>
      </div>
    </dl>
  </div>
  <div class="card">
    <h2>Social balance</h2>
    <div class="ratio">
      <span>Followers per following</span>
      <strong>${followerRatio}</strong>
    </div>
    <p class="hint">Based on ${user.followers.toLocaleString("en-US")} followers and ${user.following.toLocaleString("en-US")} following.</p>
    <a class="link" href="${user.followers_url}">View followers</a>
  </div>
</section>

<section class="card data-card">
  <div>
    <h2>Data source</h2>
    <p class="muted">This dashboard is powered by the JSON snapshot in the repo.</p>
  </div>
  <div class="code-pill">
    <span>File</span>
    <a href="${userJsonUrl}">/data/user.json</a>
  </div>
</section>

<style>
.hero {
  margin: 2.5rem 0 2rem;
}

.hero-card {
  border: 1px solid var(--theme-foreground-muted);
  border-radius: 24px;
  padding: 2.25rem;
}

.hero-meta {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 2rem;
  align-items: center;
}

.avatar-wrap {
  width: 140px;
  height: 140px;
  border-radius: 24px;
  overflow: hidden;
}

.avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.kicker {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: var(--theme-foreground-muted);
  margin: 0 0 0.5rem;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 3.5rem);
}

.handle {
  margin: 0.2rem 0 0.8rem;
  font-weight: 600;
}

.bio {
  margin: 0;
  max-width: 44rem;
  color: var(--theme-foreground-muted);
  font-size: 1rem;
  line-height: 1.6;
}

.hero-links {
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.pill {
  padding: 0.6rem 1.1rem;
  border: 1px solid var(--theme-foreground-muted);
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.pill:hover {
  transform: translateY(-2px);
}

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

.detail-grid h2 {
  margin-top: 0;
}

dl {
  margin: 0;
  display: grid;
  gap: 1rem;
}

dt {
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-foreground-muted);
}

dd {
  margin: 0.2rem 0 0;
  font-weight: 600;
}

.ratio {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.ratio strong {
  font-size: 2rem;
}

.hint {
  margin: 0 0 1rem;
  color: var(--theme-foreground-muted);
}

.data-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border: 1px dashed var(--theme-foreground-muted);
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
  .hero-meta {
    grid-template-columns: 1fr;
  }

  .avatar-wrap {
    margin: 0 auto;
  }

  .hero-card {
    text-align: center;
  }

  .hero-links {
    justify-content: center;
  }

  .data-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .hero-card {
    padding: 1.8rem;
  }

  .ratio {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
