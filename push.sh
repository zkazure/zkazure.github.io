#!/bin/bash

timestamp=$(date "+%Y-%m-%d %H:%M:%S")

git add --all :!themes
git diff --cached --quiet && echo "无变更，跳过" && exit 0
git commit -m "$timestamp"
git push

