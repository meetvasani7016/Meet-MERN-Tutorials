# 1. Add upstream tracking link to keep in sync with core developers
git remote add upstream https://github.com/original-author/awesome-project.git

# 2. Fetch the latest changes from the master copy
git fetch upstream

# 3. Merge upstream changes into your local main branch
git checkout main
git merge upstream/main

# 4. Create a clean feature branch off main for your bug fix
git checkout -b patch-documentation-error

# 5. Make edits and commit the fix
echo "Updates to configuration setup instructions" >> documentation.md
git add documentation.md
git commit -m "Fix typographical error in configuration setup notes"

# 6. Push the fix branch to your cloud fork repo (origin)
git push origin patch-documentation-error

# 7. Visit GitHub and click 'Create Pull Request' to merge your patch branch into upstream/main