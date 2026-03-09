import { Octokit, App } from "https://esm.sh/octokit?dts"
import { load } from "jsr:@std/dotenv/load"

await load()

const octokit = new Octokit({
  auth: Deno.env.get("GITHUB_TOKEN"),
})

const iterator = octokit.paginate.iterator(
  octokit.graphql,
  `query paginate($cursor: String, $owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(first: 10, after: $cursor) {
        nodes {
          title
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }`,
)
