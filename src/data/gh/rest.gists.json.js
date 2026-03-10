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
      files: Object.entries(gist.files).map(([filename]) => filename),
      public: gist.public,
      created_at: gist.created_at,
      updated_at: gist.updated_at,
      description: gist.description,
      comments: gist.comments,
      owner: {
        login: gist.owner.login,
        avatar_url: gist.owner.avatar_url,
      },
    }))
    // process.stdout.write(JSON.stringify(gists, null, 2))
    return gists
  })
  .catch((error) => {
    console.error(error)
  })

console.log(repositories)
