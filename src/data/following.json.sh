#!/usr/bin/env bash

gh api \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  -H 'Accept: application/vnd.github.v3.raw+json' \
  /users/"$GITHUB_USER"/following > following.json
