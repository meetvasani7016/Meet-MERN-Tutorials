# Sync fork's main branch with upstream main
git checkout main
git fetch upstream
git merge upstream/main
git push origin main