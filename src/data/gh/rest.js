import "dotenv/config"
import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const owner = "modster"
const repositories = []

const iterator = octokit.paginate.iterator(octokit.rest.repos.listForUser, {
  username: owner,
  per_page: 100,
})

for await (const { data } of iterator) {
  for (const item of data) {
    repositories.push({
      name: item.name,
      description: item.description,
      url: item.html_url,
    })
  }
}

process.stdout.write(JSON.stringify(repositories))
