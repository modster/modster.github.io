```js
const info = FileAttachment(`${/data/gh/gists.json}.json`).json()

const {
  html_url,
  created_at,
  updated_at,
  description,
  comments,
  user,
  comments_url,
  owner,
  login,
  id,
  node_id,
  avatar_url,
  gravatar_id,
  url,
  html_url,
  followers_url,
  following_url,
  gists_url,
  starred_url,
  subscriptions_url,
  organizations_url,
  repos_url,
} = info
```
# Gist: ${hmlt`<a href='${`https://github.com/${login}/${id}`}' alt='${description}'>${description}</a>`}
## ${html`Description: ${description}`}

Created at: ${new Date(created_at).toLocaleString()} (updated ${new Date(updated_at).toLocaleString()})  

<grid class="grid-cols-2">
  <div>
  ${html`<a href='${html_url}' alt='${login}'><img src='${avatar_url}' alt='${description}'></a>`}
    </div>
    ${html`Owner: <a href='${owner.html_url}' alt='${owner.login}'><img src='${owner.avatar_url}' alt='${owner.login}'></a>`}
  </div>
  <div>
    ${comments === 0 ? "No comments" : html`<a href='${comments_url}' alt='view comments'>View comments</a>`}
  </div>
</div>

${html`<a href='${html_url}' alt='view gist on github'>View on GitHub</a>`}

<grid class="grid-cols-1">
  <div class="card">
    <h2>Files</h2>
    ${files.map(file => html`<div><strong>${file.filename}</strong> (${file.language}, ${file.size} bytes) <a href='${file.raw_url}' alt='view raw file'>View raw</a></div>`)}
  </div>
</grid>

${ files.map(file => html`<div><strong>${file.filename}</strong> (${file.language}, ${file.size} bytes) <a href='${file.raw_url}' alt='view raw file'>View raw</a></div>`)}

${html`<a href='${comments_url}' alt='view comments on github'>View comments on GitHub</a>`}

${comments.map( comment => html`<div class="card"><strong>${comment.user.login}</strong> commented at ${new Date(comment.created_at).toLocaleString()}: <p class="comment"> ${comment.body} </p></div>`)}

```js
// "description": "BYD reducer oil wholesaler[www.my81.me] - W7w5",
// "comments": 0,
// "user": null,
// "comments_url": "https://api.github.com/gists/ae00ea7b371230b415867c072aa68f77/comments",
// "owner": {
// "login": "chavezdaviddiego29072003-collab",
// "id": 265666432,
// "node_id": "U_kgDOD9W_gA",
// "avatar_url": "https://avatars.githubusercontent.com/u/265666432?v=4",
// "gravatar_id": "",
// "url": "https://api.github.com/users/chavezdaviddiego29072003-collab",
// "html_url": "https://github.com/chavezdaviddiego29072003-collab",
// "followers_url": "https://api.github.com/users/chavezdaviddiego29072003-collab/followers",
// "following_url": "https://api.github.com/users/chavezdaviddiego29072003-collab/following{/other_user}",
// "gists_url": "https://api.github.com/users/chavezdaviddiego29072003-collab/gists{/gist_id}",
// "starred_url": "https://api.github.com/users/chavezdaviddiego29072003-collab/starred{/owner}{/repo}",
// "subscriptions_url": "https://api.github.com/users/chavezdaviddiego29072003-collab/subscriptions",
// "organizations_url": "https://api.github.com/users/chavezdaviddiego29072003-collab/orgs",
// "repos_url":
```
