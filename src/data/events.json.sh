#!/bin/bash
# Fetch recent GitHub events/activity via REST API
# Falls back to mock data if API call fails

set -e

USER="${GH_USERNAME:-modster}"
MOCK_FILE="src/data/mock/events.json"
OUTPUT_FILE="src/data/events.json"

# Try to fetch real data
echo "Fetching recent events for $USER..."
if response=$(gh api "users/$USER/events" --paginate 2>/dev/null); then
    # Filter and transform events
    echo "$response" | jq '[.[] | select(.type == "PushEvent" or .type == "CreateEvent" or .type == "WatchEvent" or .type == "PullRequestEvent") | {
        type: .type,
        repo: .repo.name,
        created_at: .created_at,
        payload: {
            action: .payload.action,
            ref: .payload.ref,
            ref_type: .payload.ref_type,
            pull_request: {
                merged: .payload.pull_request.merged
            }
        }
    }][0:10]' > "$OUTPUT_FILE"
    
    # Check if we got any events
    if [ -s "$OUTPUT_FILE" ] && [ "$(cat "$OUTPUT_FILE")" != "[]" ]; then
        echo "Successfully fetched events"
        exit 0
    fi
fi

# Fallback to mock data
echo "API call failed or no events found, using mock events"
if [ -f "$MOCK_FILE" ]; then
    cp "$MOCK_FILE" "$OUTPUT_FILE"
    echo "Using mock events"
else
    echo "Mock data not found at $MOCK_FILE"
    exit 1
fi
