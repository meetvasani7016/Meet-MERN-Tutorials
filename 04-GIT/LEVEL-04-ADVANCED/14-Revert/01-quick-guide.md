# Git Revert

## In One Line
git revert creates a new commit that applies inverse edits to undo past commits safely.

## Think Like This
Writing an entry in a bank ledger stating 'Returned item refund +$50' to cancel a past error transaction of -$50, keeping the bank history clean and audit-ready.

## Example
```sh
git revert <commit-hash>
```

## Result
Creates a new commit that undoes the targeted commit changes without rewriting history.

## Remember
Revert is safe for shared repositories since it does not modify the existing history tree.
