---
title: "GitHub Profile Card"
draft: true
---



```js
const user = await FileAttachment("data/user.json").json()
const blogUrl = user.blog ? `https://${user.blog}` : null


```

## Sidebar -->
### Profile Card -->

<div class="flex flex-col items-center lg:items-start gap-4">

#### Avatar with Glow -->

<div class="avatar-container">
    <div class="avatar-glow"></div>
    <div class="avatar-ring">
    ${html`<img 
        src="${user.avatar_url}&size=150"
        alt="${user.login} avatar" 
        class="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover"
    />`}
    </div>
</div>

#### Profile Info -->

<div class="text-center lg:text-left">
    <h1 class="text-3xl font-bold mb-1">${user.name || user.login}</h1>
    <h2 class="text-xl text-neon mb-2">${user.status || ""}</h2>
    <p class="text-primary text-lg mb-3">@${user.login}</p>
    <p class="text-muted text-sm leading-relaxed max-w-sm">${user.bio || ""}</p>
</div>
<!-- Action Buttons -->
<div class="flex flex-col w-full gap-2">
    ${html`<a href="${user.html_url}" target="_blank" class="btn-primary text-center">
    <span>Follow</span>
    </a>`}
    <a href="https://github.com/sponsors/${user.login}" target="_blank" class="btn-outline flex items-center justify-center gap-2">
    <span>Sponsor</span>
    <span class="material-symbols-outlined">dollar</span>
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
${user.blog ?
<a href="../${blogUrl}" target="_blank" class="social-link">
    <div class="social-icon">
    <span class="material-symbols-outlined">link</span>
    </div>
    <div>
    <p class="text-xs text-faint uppercase tracking-wider">Website</p>
    <p class="text-sm">${user.blog}</p>
    </div>
</a>
` : ''}
${user.email ?
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
${user.company ?
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
${user.location ?
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