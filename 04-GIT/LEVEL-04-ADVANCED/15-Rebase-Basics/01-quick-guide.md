# Git Rebase Basics

## In One Line
git rebase moves or combines a sequence of commits to a new base commit.

## Think Like This
Uprooting a building extension blueprint and grafting it onto a new foundation block to keep the architectural drawing linear.

## Example
```sh
git rebase main
```

## Result
Re-applies feature branch commits one-by-one on top of the target branch, avoiding merge commits.

## Remember
Never rebase commits that have been pushed to a public remote branch! It rewrites history.
