# Ensure you are on the receiver branch (main)
git checkout main

# Merge the feature branch into main
git merge feature-login

# Clean up by deleting the merged feature branch
git branch -d feature-login