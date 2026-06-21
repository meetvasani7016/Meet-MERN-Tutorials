# Push branch changes to remote origin
git checkout -b feature-styles
echo "styles" > main.css
git add main.css
git commit -m "Add basic css style file"
git push origin feature-styles

# Open GitHub website, click "Compare & pull request" button to launch PR form