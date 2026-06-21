# Undo last commit, keeping your files staged (safe edit)
git reset --soft HEAD~1

# Undo last commit and unstage changes (keeps edits in working directory)
git reset HEAD~1

# DANGER: Wipe out last commit and all active modifications
git reset --hard HEAD~1