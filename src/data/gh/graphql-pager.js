import "dotenv/config"
import { Octokit } from "@octokit/core"
import { paginateGraphQL } from "@octokit/plugin-paginate-graphql"

// npm i @octokit/plugin-paginate-graphql

const MyOctokit = Octokit.plugin(paginateGraphQL)
const octokit = new MyOctokit({
  auth: `${process.env.GITHUB_TOKEN}`,
})

const pageIterator = octokit.graphql.paginate.iterator(
  `query paginate($cursor: String) {
    repository(owner: "octokit", name: "rest.js") {
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

for await (const response of pageIterator) {
  const issues = response.repository.issues.nodes
  process.stdout.write(
    JSON.stringify(
      issues.map((issue) => {
        return { title: issue.title }
      }),
    ),
  )
}
