# Team Collaboration Simulation Project

## In One Line
Simulate two developers (Alice and Bob) pushing commits to origin and merging their branches.

## Think Like This
Two architects writing plans on a shared blueprint: they check out copies, make edits, and sync them back to the office server.

## Example
```bash
git checkout -b alice-dev
# work and commit
git checkout main
git merge alice-dev
```

## Result
Simulates merging a team branch.

## Remember
Pull the latest remote code before you push your local commits.
