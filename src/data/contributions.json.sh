#!/bin/bash
# Fetch GitHub contribution graph data via GraphQL
# Falls back to mock data if API call fails

set -e

USER="${GH_USERNAME:-modster}"
MOCK_FILE="src/data/mock/contributions.json"
OUTPUT_FILE="src/data/contributions.json"

# GraphQL query for contribution graph
QUERY='
query($login: String!) {
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
}'

# Try to fetch real data
echo "Fetching contribution data for $USER..."
if response=$(gh api graphql -f query="$QUERY" -F login="$USER" 2>/dev/null); then
    # Check if response contains data
    if echo "$response" | jq -e '.data.user.contributionsCollection' >/dev/null 2>&1; then
        # Transform to our format
        echo "$response" | jq '{
            totalContributions: .data.user.contributionsCollection.contributionCalendar.totalContributions,
            weeks: [.data.user.contributionsCollection.contributionCalendar.weeks[] | {
                contributionDays: .contributionDays
            }]
        }' > "$OUTPUT_FILE"
        echo "Successfully fetched contribution data"
        exit 0
    fi
fi

# Fallback to mock data
echo "API call failed, using mock contribution data"
if [ -f "$MOCK_FILE" ]; then
    cp "$MOCK_FILE" "$OUTPUT_FILE"
    echo "Using mock contribution data"
else
    echo "Mock data not found at $MOCK_FILE"
    exit 1
fi
