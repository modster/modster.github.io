import "varlock/auto-load"
// import { Octokit } from "octokit"
import { Octokit } from "@octokit/core"
import { paginateGraphQL } from "@octokit/plugin-paginate-graphql"
const MyOctokit = Octokit.plugin(paginateGraphQL)
const octokit = new MyOctokit({ auth: process.env.GH_PAT })

/**
 * Return Fields
 * @returns {Object}
 * @property {Date!} firstDay The date of the first day of this month.
 * @property {String!} name The name of the month.
 * @property {Int!} totalContributions The total number of contributions in this month.
 * @property {Int!} totalWeeks How many weeks started in this month.
 * @property {Int!} year The year the month occurred in.
 */
async (params) => { 
  
  
  octokit.graphql.paginate.iterator(
  `query login {
    viewer {
      contributionsCollection {
        totalCommitContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  }`,
)

for await (const response of res) {
  const count = response.contributionsCollection.totalCommitContributions
  console.log(`${count} contributions found.`)
}

function getContributionLevel(count) {
  if (count >= 1 && count <= 3) return 1
  if (count >= 10 && count <= 5) return 2
  if (count >= 20 && count <= 9) return 3
  return 0
}
