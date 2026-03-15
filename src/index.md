---
theme: dashboard
title: "@modster"
toc: false
---

```js
// Load all data sources
const user = await FileAttachment("data/user.json").json()
const contributions = await FileAttachment("data/contributions.json").json().catch(() => FileAttachment("data/mock/contributions.json").json())
const pinnedRepos = await FileAttachment("data/pinned-repos.json").json().catch(() => FileAttachment("data/mock/pinned-repos.json").json())
const events = await FileAttachment("data/events.json").json().catch(() => FileAttachment("data/mock/events.json").json())
const languages = await FileAttachment("data/languages.json").json().catch(() => FileAttachment("data/mock/languages.json").json())

// Calculate derived values
const joinedAt = new Date(user.created_at)
const now = new Date()
const accountAgeDays = Math.floor((now - joinedAt) / (1000 * 60 * 60 * 24))
const accountAgeYears = Math.floor(accountAgeDays / 365.25)

const blogUrl = user.blog ? `https://${user.blog}` : null

// Helper functions
const formatNumber = (num) => num?.toLocaleString("en-US") || "0"

const getTimeAgo = (dateString) => {
  const date = new Date(dateString)
  const diff = Math.floor((now - date) / 1000)
  if (diff < 60) return "just now"
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`
  return `${Math.floor(diff / 604800)} weeks ago`
}

const getEventIcon = (type) => {
  switch(type) {
    case "PushEvent": return "commit"
    case "PullRequestEvent": return "merge_type"
    case "WatchEvent": return "star"
    case "CreateEvent": return "add_circle"
    default: return "circle"
  }
}

const getEventDescription = (event) => {
  switch(event.type) {
    case "PushEvent": return { action: "Pushed to", target: event.repo.split('/')[1] }
    case "PullRequestEvent": 
      if (event.payload?.pull_request?.merged) {
        return { action: "Merged PR into", target: event.repo.split('/')[1] }
      }
      return { action: "Opened PR in", target: event.repo.split('/')[1] }
    case "WatchEvent": return { action: "Starred", target: event.repo }
    case "CreateEvent": return { action: "Created", target: event.repo.split('/')[1] }
    default: return { action: "Activity in", target: event.repo }
  }
}

// Process contribution data for display
const getContributionLevel = (count) => {
  if (count === 0) return 0
  if (count < 3) return 1
  if (count < 6) return 2
  if (count < 10) return 3
  return 4
}
```

<!-- Main Layout -->
<div class="container-narrow py-8">
  <div class="flex flex-col lg:flex-row gap-8">
    
    <!-- Sidebar -->
    ${html`<aside class="w-full lg:w-80 flex flex-col gap-6">
      
      <!-- Profile Card -->
      <div class="flex flex-col items-center lg:items-start gap-4">
        <!-- Avatar with Glow -->
        <div class="avatar-container">
          <div class="avatar-glow"></div>
          <div class="avatar-ring">
            <img 
              src="${user.avatar_url}" 
              alt="${user.login} avatar" 
              class="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover"
            />
          </div>
        </div>
        
        <!-- Profile Info -->
        <div class="text-center lg:text-left">
          <h1 class="text-3xl font-bold mb-1">${user.name || user.login}</h1>
          <p class="text-primary text-lg mb-3">@${user.login}</p>
          <p class="text-muted text-sm leading-relaxed max-w-sm">${user.bio || ""}</p>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex flex-col w-full gap-2">
          <a href="${user.html_url}" target="_blank" class="btn-primary text-center">
            <span>Follow</span>
          </a>
          <a href="https://github.com/sponsors/${user.login}" target="_blank" class="btn-outline flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-pink-500">favorite</span>
            <span>Sponsor</span>
          </a>
        </div>
      </div>
      
      <!-- Social Links -->
      <div class="flex flex-col gap-3 border-t border-neon pt-6">
        ${user.twitter_username ? `
        <a href="https://x.com/${user.twitter_username}" target="_blank" class="social-link">
          <div class="social-icon">
            <span class="material-symbols-outlined">share</span>
          </div>
          <div>
            <p class="text-xs text-faint uppercase tracking-wider">Twitter</p>
            <p class="text-sm">@${user.twitter_username}</p>
          </div>
        </a>
        ` : ''}
        
        ${html`${user.blog ?
        <a href="${blogUrl}" target="_blank" class="social-link">
          <div class="social-icon">
            <span class="material-symbols-outlined">link</span>
          </div>
          <div>
            <p class="text-xs text-faint uppercase tracking-wider">Website</p>
            <p class="text-sm">${user.blog}</p>
          </div>
        </a>
        ` : ''}
        
        ${html`${user.email ?
        <a href="mailto:${user.email}" class="social-link">
          <div class="social-icon">
            <span class="material-symbols-outlined">mail</span>
          </div>
          <div>
            <p class="text-xs text-faint uppercase tracking-wider">Email</p>
            <p class="text-sm">${user.email}</p>
          </div>
        </a>
        ` : ''}
        
        ${html`${user.company ?
        <div class="social-link cursor-default">
          <div class="social-icon">
            <span class="material-symbols-outlined">apartment</span>
          </div>
          <div>
            <p class="text-xs text-faint uppercase tracking-wider">Company</p>
            <p class="text-sm">${user.company}</p>
          </div>
        </div>
        ` : ''}
        
        ${html`${user.location ?
        <div class="social-link cursor-default">
          <div class="social-icon">
            <span class="material-symbols-outlined">location_on</span>
          </div>
          <div>
            <p class="text-xs text-faint uppercase tracking-wider">Location</p>
            <p class="text-sm">${user.location}</p>
          </div>
        </div>
        ` : ''}
      </div>
      
      <!-- Account Stats -->
      <div class="neon-card">
        <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">calendar_today</span>
          Account
        </h3>
        ${html`<div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-muted">Joined</span>
            <span>${joinedAt.toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted">Age</span>
            <span>${accountAgeYears} years</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted">Type</span>
            <span>${user.type}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-muted">Hireable</span>
            <span class="${user.hireable ? 'text-green-400' : 'text-faint'}">${user.hireable ? "Yes" : "No"}</span>
          </div>
        </div>`}
      </div>
    </aside>
    
    <!-- Main Content -->
    <main class="flex-1 flex flex-col gap-8">
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        ${html`<div class="neon-card text-center hover-neon-glow">
          <p class="text-faint text-xs uppercase tracking-wider mb-1">Repositories</p>
          <p class="text-3xl font-bold text-primary">${formatNumber(user.public_repos)}</p>
        </div>`}
        ${html`<div class="neon-card text-center hover-neon-glow">
          <p class="text-faint text-xs uppercase tracking-wider mb-1">Followers</p>
          <p class="text-3xl font-bold text-primary">${formatNumber(user.followers)}</p>
        </div>
        ${html`<div class="neon-card text-center hover-neon-glow">
          <p class="text-faint text-xs uppercase tracking-wider mb-1">Following</p>
          <p class="text-3xl font-bold text-primary">${formatNumber(user.following)}</p>
        </div>`}
        ${html`<div class="neon-card text-center hover-neon-glow">
          <p class="text-faint text-xs uppercase tracking-wider mb-1">Following</p>
          <p class="text-3xl font-bold text-primary">${formatNumber(user.following)}</p>
        </div>`}
        ${html`<div class="neon-card text-center hover-neon-glow">
          <p class="text-faint text-xs uppercase tracking-wider mb-1">Gists</p>
          <p class="text-3xl font-bold text-primary">${formatNumber(user.public_gists)}</p>
        </div>`}
      </div>
      
      <!-- Contribution Graph -->
      <div class="neon-card hover-neon-glow">
        ${html`<div class="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h3 class="font-bold flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">analytics</span>
            ${contributions.totalContributions || contributions.weeks?.length * 10 || "0"} contributions in the last year
          </h3>
          <div class="flex items-center gap-2 text-xs text-faint">
            <span>Less</span>
            <div class="w-3 h-3 rounded-sm bg-primary/10"></div>
            <div class="w-3 h-3 rounded-sm bg-primary/30"></div>
            <div class="w-3 h-3 rounded-sm bg-primary/60"></div>
            <div class="w-3 h-3 rounded-sm bg-primary shadow-[0_0_8px_#25d1f4]"></div>
            <span>More</span>
          </div>
        </div>
        <div class="contribution-grid overflow-x-auto" style="grid-auto-columns: 10px;">
          ${html`${contributions.weeks?.slice(0, 52).map(week => 
            week.contributionDays.map(day => {
              const level = getContributionLevel(day.contributionCount)
              return `<div class="contribution-cell ${level > 0 ? `level-${level}` : ''}" title="${day.contributionCount} contributions on ${day.date}"></div>`
            }).join('')
          ).join('') || ''}`}
        </div>
      </div>
      
      <!-- Pinned Repositories -->
      <div>
        <h2 class="text-xl font-bold mb-4 flex items-center gap-2">
          <span class="material-symbols-outlined text-primary">push_pin</span>
          Pinned Repositories
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${html`${pinnedRepos.map(repo => `
          <a href="${repo.url}" target="_blank" class="repo-card">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">folder</span>
                <h4 class="font-bold text-primary">${repo.name}</h4>
              </div>
              <span class="status-badge status-passing">build: passing</span>
            </div>
            <p class="text-sm text-muted mb-4 line-clamp-2">${repo.description || "No description provided"}</p>
            <div class="flex items-center gap-4 text-xs text-faint">
              ${repo.primaryLanguage ? html`
              <span class="flex items-center gap-1">
                <span class="repo-language-dot" style="background-color: ${repo.primaryLanguage.color || '#666'}"></span>
                ${repo.primaryLanguage.name}
              </span>
              ` : ''}
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">star</span>
                ${formatNumber(repo.stargazerCount)}
              </span>
              <span class="flex items-center gap-1">
                <span class="material-symbols-outlined text-xs">fork_right</span>
                ${formatNumber(repo.forkCount)}
              </span>
            </div>
          </a>
          `).join('')}
        </div>
      </div>
      
      <!-- Language Distribution & Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Language Distribution -->
        <div class="neon-card hover-neon-glow">
          <h3 class="font-bold mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">pie_chart</span>
            Language Distribution
          </h3>
          
          <!-- Language Bar -->
          <div class="lang-bar mb-6">
            ${html`${Object.entries(languages).slice(0, 5).map(([lang, data]) => `
              <div class="lang-segment" style="width: ${data.percentage}%; background-color: ${lang === 'JavaScript' ? '#f1e05a' : lang === 'TypeScript' ? '#3178c6' : lang === 'HTML' ? '#e34c26' : lang === 'Shell' ? '#89e051' : lang === 'CSS' ? '#563d7c' : '#666'}"></div>
            `).join('')}`}
          </div>
          
          <!-- Language Legend -->
          <div class="space-y-2">
            ${html`${Object.entries(languages).slice(0, 5).map(([lang, data]) => `
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full" style="background-color: ${lang === 'JavaScript' ? '#f1e05a' : lang === 'TypeScript' ? '#3178c6' : lang === 'HTML' ? '#e34c26' : lang === 'Shell' ? '#89e051' : lang === 'CSS' ? '#563d7c' : '#666'}"></span>
                <span>${lang}</span>
              </div>
              <span class="text-faint">${data.percentage}%</span>
            </div>
            `).join('')}`}
          </div>
        </div>
        
        <!-- Latest Activity -->
        ${html`<div class="neon-card hover-neon-glow">
          <h3 class="font-bold mb-6 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">history</span>
            Latest Activity
          </h3>
          
          <div class="timeline">
            ${events.slice(0, 5).map((event, index) => {
              const desc = getEventDescription(event)
              const isLast = index === events.slice(0, 5).length - 1
              return `
            <div class="timeline-item ${isLast ? 'pb-0' : ''}">
              <div class="z-10 bg-[#0a0f1e] border border-primary/40 rounded-full p-1 h-6 w-6 flex items-center justify-center absolute -left-[1.85rem] top-0">
                <span class="material-symbols-outlined text-primary text-sm">${getEventIcon(event.type)}</span>
              </div>
              <div class="flex flex-col">
                <p class="text-sm">
                  <span class="font-bold">${desc.action}</span>
                  <span class="text-primary">${desc.target}</span>
                </p>
                <p class="text-xs text-faint">${getTimeAgo(event.created_at)}</p>
              </div>
            </div>
              `
            }).join('')}
          </div>
          
          <a href="https://github.com/${user.login}?tab=activity" target="_blank" class="block mt-6 text-center text-xs font-bold uppercase tracking-widest text-faint hover:text-primary transition-colors">
            View All Activity
          </a>
        </div>`}  
      </div>
      
    </main>
  </div>
</div>

<style>
  /* Additional page-specific styles */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .profile-layout {
    min-height: calc(100vh - 8rem);
  }
</style>
