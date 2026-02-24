#!/usr/bin/env bash

gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /users/modster/following \
  --jq '.[].login' > src/following.json