# Simulate a conflict setup
git checkout -b branch-a
echo "Original text: A" > conflict.txt
git add conflict.txt
git commit -m "Change to A"

git checkout main
git checkout -b branch-b
echo "Original text: B" > conflict.txt
git add conflict.txt
git commit -m "Change to B"

# Trigger conflict by attempting merge
git checkout branch-a
git merge branch-b
# Console reports: CONFLICT (content): Merge conflict in conflict.txt

# Open conflict.txt, delete markers, pick the correct version. Then:
git add conflict.txt
git commit -m "Resolve merge conflict between branch-a and branch-b"