import 'dotenv/config'
import { Octokit } from 'octokit'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated()

console.log('Hello, %s', login)

export { login }
