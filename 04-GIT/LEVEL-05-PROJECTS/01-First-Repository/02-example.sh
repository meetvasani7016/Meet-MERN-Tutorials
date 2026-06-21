# 1. Create a fresh project folder and enter it
mkdir my-first-git-project
cd my-first-git-project

# 2. Turn on Git surveillance
git init

# 3. Create initial website files
echo "<!DOCTYPE html><html><body><h1>Project Zero</h1></body></html>" > index.html
echo "body { background: #f0f0f0; }" > style.css

# 4. Check tracking status
git status

# 5. Stage both files
git add index.html style.css

# 6. Verify they are green in staging
git status

# 7. Commit changes to history
git commit -m "Initial commit: Set up page structure and basic styling"

# 8. View history logs
git log --oneline