# Find the hash of the commit you want to undo
git log --oneline

# Revert the commit changes (opens editor for commit message, or auto-saves)
git revert a1b2c3d --no-edit

# Inspect logs to see new commit undoing the changes
git log --oneline