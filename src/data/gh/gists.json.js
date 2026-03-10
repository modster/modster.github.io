import "dotenv/config"
import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const repositories = await octokit
  .request("GET /gists/public", {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      accept: "application/vnd.github+json",
    },
  })
  .then(({ data }) => {
    const gists = data.map((gist) => ({
      url: gist.url,
      forks_url: gist.forks_url,
      commits_url: gist.commits_url,
      id: gist.id,
      node_id: gist.node_id,
      git_pull_url: gist.git_pull_url,
      git_push_url: gist.git_push_url,
      html_url: gist.html_url,
      files: { ...gist.files },
      public: gist.public,
      created_at: gist.created_at,
      updated_at: gist.updated_at,
      description: gist.description,
      comments: gist.comments,
      user: gist.user,
      comments_url: gist.comments_url,
      owner: gist.owner,
      login: gist.login,
      avatar_url: gist.avatar_url,
      gravatar_id: gist.gravatar_id,
      followers_url: gist.followers_url,
      following_url: gist.following_url,
      gists_url: gist.gists_url,
      starred_url: gist.starred_url,
      subscriptions_url: gist.subscriptions_url,
      organizations_url: gist.organizations_url,
      repos_url: gist.repos_url,
      events_url: gist.events_url,
      received_events_url: gist.received_events_url,
      type: gist.type,
      site_admin: gist.site_admin,
      truncated: gist.truncated,
    }))
    // process.stdout.write(JSON.stringify(gists, null, 2))
    return gists
  })
  .catch((error) => {
    console.error(error)
  })

console.log(repositories)
