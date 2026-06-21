# Ensure your main entry file is named index.html
echo "<h1>My Online Portfolio</h1>" > index.html
git add index.html
git commit -m "Configure entry page for web deployment"
git push origin main
# Go to GitHub settings -> Pages -> Select 'main' branch, click Save