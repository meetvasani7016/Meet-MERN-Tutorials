# 1. Alice creates a branch to work on a contact form
git checkout -b alice-contact-form
echo "Contact us at contact@test.com" > contact.html
git add contact.html
git commit -m "Add contact info page"

# 2. Bob creates a branch to work on an FAQ section
# (Bob branches off main)
git checkout main
git checkout -b bob-faq-page
echo "FAQ: How to use Git?" > faq.html
git add faq.html
git commit -m "Create FAQ guide page"

# 3. Alice merges her work into main branch
git checkout main
git merge alice-contact-form

# 4. Bob merges his work into main branch
# (This is a three-way merge because both branches diverged)
git merge bob-faq-page

# 5. Clean up feature branches
git branch -d alice-contact-form
git branch -d bob-faq-page

# 6. View the visual layout log
git log --oneline --graph