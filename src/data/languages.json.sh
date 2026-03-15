#!/bin/bash
# Fetch language statistics for top 100 repos via REST API
# Falls back to mock data if API call fails

set -e

USER="${GH_USERNAME:-modster}"
MOCK_FILE="src/data/mock/languages.json"
OUTPUT_FILE="src/data/languages.json"
TEMP_FILE=$(mktemp)

# Initialize language totals
languages="{}"

# Get first 100 public repos
echo "Fetching language stats for top 100 repos..."
repo_count=0

while IFS=$'\t' read -r repo_name repo_desc visibility updated_at; do
    # Skip private repos and limit to 100
    if [ "$visibility" != "public" ] || [ "$repo_count" -ge 100 ]; then
        continue
    fi
    
    # Extract repo short name (remove username prefix)
    repo_short=$(echo "$repo_name" | cut -d'/' -f2)
    
    # Fetch languages for this repo
    if lang_response=$(gh api "repos/$USER/$repo_short/languages" 2>/dev/null); then
        # Add to totals
        languages=$(echo "$languages" | jq --argjson langs "$lang_response" '
            . as $acc | $langs | to_entries | reduce .[] as $item (
                $acc; 
                .[$item.key] = (.[$item.key] // 0) + $item.value
            )
        ')
        ((repo_count++))
        echo "  Processed $repo_count: $repo_short"
    fi
done < src/data/repos.tsv

# Calculate percentages if we got data
if [ "$languages" != "{}" ]; then
    total_bytes=$(echo "$languages" | jq 'add')
    
    echo "$languages" | jq --argjson total "$total_bytes" '
        to_entries | 
        sort_by(.value) | 
        reverse | 
        reduce .[] as $item ({}; 
            .[$item.key] = {
                bytes: $item.value,
                percentage: (($item.value / $total) * 100 | round)
            }
        )
    ' > "$OUTPUT_FILE"
    
    echo "Successfully calculated language statistics ($repo_count repos)"
    rm "$TEMP_FILE"
    exit 0
fi

# Fallback to mock data
echo "API calls failed, using mock language data"
if [ -f "$MOCK_FILE" ]; then
    cp "$MOCK_FILE" "$OUTPUT_FILE"
    echo "Using mock language data"
else
    echo "Mock data not found at $MOCK_FILE"
    exit 1
fi

rm "$TEMP_FILE"
