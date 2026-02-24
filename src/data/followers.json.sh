#!/usr/bin/env bash

const followersApiUrl = "https://api.github.com/users/modster/followers";

gh api \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /modster/followers