# List all local branches
git branch

# Create and switch to new branch immediately
git checkout -b feature-login

# Make changes and commit on the branch
echo "login code" > login.js
git add login.js
git commit -m "Add basic login code"

# Switch back to the main branch
git checkout main