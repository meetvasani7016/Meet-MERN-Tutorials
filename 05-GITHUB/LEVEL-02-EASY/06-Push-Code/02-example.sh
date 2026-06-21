# Edit a file
echo "Update" >> README.md
git commit -am "Update README details"

# Push commits to remote origin main branch
git push origin main

# DANGER: Force update remote (overwrites remote history with local)
# git push --force origin main