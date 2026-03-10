import 'dotenv/config'
import { graphql } from '@octokit/graphql'

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
})

/**
 * Updates the authenticated user's GitHub status.
 *
 * @param {object} options
 * @param {string}  [options.emoji]              - Emoji to display (e.g. ":wave:")
 * @param {string}  [options.message]            - Status message text
 * @param {string}  [options.organizationId]     - Limit status visibility to an org (optional)
 * @param {boolean} [options.limitedAvailability] - Mark user as having limited availability
 * @param {string}  [options.expiresAt]          - ISO 8601 datetime when the status expires
 * @returns {Promise<object>} The updated status object
 */
export async function updateUserStatus({
  emoji = null,
  message = null,
  organizationId = null,
  limitedAvailability = false,
  expiresAt = null,
} = {}) {
  const mutation = /* GraphQL */ `
    mutation changeUserStatus(
      $emoji: String
      $message: String
    ) {
      changeUserStatus(
        input: {
          emoji: $emoji
          message: $message
        }
      ) {
        status {
          emoji
          message
          indicatesLimitedAvailability
          expiresAt
          updatedAt
          user {
            login
            name
          }
        }
      }
    }
  `

  const { changeUserStatus } = await graphqlWithAuth(mutation, {
    emoji,
    message,
    organizationId,
    limitedAvailability,
    expiresAt,
  })

  return changeUserStatus.status
}

// Example usage:
const status = await updateUserStatus({
  emoji: ':wave:',
  message: 'Available for chat!',
  limitedAvailability: false,
  expiresAt: '2026-03-10T00:00:00Z',
})
console.log(status)
