#!/usr/bin/env bash

# https://api.github.com/users/modster/repos

gh repo list \
    --json name \
    --jq '.[].name' > repos.tsv