#!/bin/bash
# Fetch pinned repositories via GraphQL
# Falls back to mock data if API call fails

set -e

USER="${GH_USERNAME:-modster}"
MOCK_FILE="src/data/mock/pinned-repos.json"
OUTPUT_FILE="src/data/pinned-repos.json"

# GraphQL query for pinned repositories
QUERY='
query($login: String!) {
  user(login: $login) {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          primaryLanguage {
            name
            color
          }
          stargazerCount
          forkCount
          defaultBranchRef {
            name
          }
        }
      }
    }
  }
}'

# Try to fetch real data
echo "Fetching pinned repositories for $USER..."
if response=$(gh api graphql -f query="$QUERY" -F login="$USER" 2>/dev/null); then
    # Check if response contains data
    if echo "$response" | jq -e '.data.user.pinnedItems.nodes' >/dev/null 2>&1; then
        # Transform to our format with build status placeholder
        echo "$response" | jq '[.data.user.pinnedItems.nodes[] | {
            name: .name,
            description: (.description // "No description provided"),
            url: .url,
            primaryLanguage: .primaryLanguage,
            stargazerCount: .stargazerCount,
            forkCount: .forkCount,
            buildStatus: "passing"
        }]' > "$OUTPUT_FILE"
        echo "Successfully fetched pinned repositories"
        exit 0
    fi
fi

# Fallback to mock data
echo "API call failed, using mock pinned repositories"
if [ -f "$MOCK_FILE" ]; then
    cp "$MOCK_FILE" "$OUTPUT_FILE"
    echo "Using mock pinned repositories"
else
    echo "Mock data not found at $MOCK_FILE"
    exit 1
fi
