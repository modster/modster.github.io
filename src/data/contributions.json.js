import "varlock/auto-load"
import { Octokit } from "@octokit/core"

const octokit = new Octokit({ auth: `${process.env.GH_PAT}` })

function getContributionLevel(count) {
  if (count === 0) return 0
  if (count >= 1 && count <= 3) return 1
  if (count >= 4 && count <= 9) return 2
  if (count >= 10 && count <= 19) return 3
  return 4
}

const login = process.env.GITHUB_USER || process.env.GH_USER || "modster"

if (!process.env.GH_PAT) {
  throw new Error(
    "Missing GH_PAT. Set a GitHub token to query the GraphQL API.",
  )
}

const response = await octokit.graphql(
  /* GraphQL */
  `
    query ($login: String!) {
      user(login: $login) {
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
          }
        }
      }
    }
  `,
  { login },
)

const contributionCalendar =
  response.user.contributionsCollection.contributionCalendar
const dailyContributions = contributionCalendar.weeks.flatMap((week) =>
  week.contributionDays.map((day) => ({
    ...day,
    date: new Date(day.date),
    contributionLevel: getContributionLevel(day.contributionCount),
  })),
)

process.stdout.write(
  JSON.stringify(
    {
      login,
      totalContributions: contributionCalendar.totalContributions,
      days: dailyContributions.length,
      dailyContributions,
    },
    null,
    2,
  ),
)
