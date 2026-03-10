import "dotenv/config"
import { Octokit } from "octokit"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const { data } = await octokit.request("GET /user")

console.log(data)

// https://docs.github.com/en/graphql/overview/explorer
// const graphqlWithAuth = graphql.defaults({
//   headers: {
//     authorization: `token ${process.env.GITHUB_TOKEN}`,
//   },
// })

// const { viewer } = await graphqlWithAuth(`
//  query login {
//   viewer {
//     login
//   }
// }
// `)
