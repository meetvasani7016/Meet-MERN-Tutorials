# Move active feature branch base to main head commit
git checkout feature-login
git rebase main

# Perform interactive rebase to squash last two commits
# (Launches terminal editor to choose actions e.g. pick/squash)
git rebase -i HEAD~2