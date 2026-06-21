# Commit staged files with a descriptive message
git commit -m "Create home and about pages"

# Make a quick edit to index.html
echo "<h1>Welcome Home</h1>" > index.html

# Check status (index.html is modified)
git status

# Shortcut: Stage and commit modified files in one command
# Note: This only works for tracked files (already committed in past)
git commit -am "Update heading text"