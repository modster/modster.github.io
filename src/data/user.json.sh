#!/usr/bin/env bash

gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /user \
  --jq '{login, name, company, location, email, bio}' > user.json
