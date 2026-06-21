# Create a .gitignore file
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore

# View file list to make sure git status ignores node_modules folder
mkdir node_modules
touch node_modules/library.js
git status # node_modules will not be listed!