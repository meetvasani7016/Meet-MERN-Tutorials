# 🤝 Contributing to MeetTutorials

Thank you for your interest in contributing to MeetTutorials! We want to keep this platform the most consistent, beginner-friendly, and high-quality programming curriculum on the web. 

To maintain this standard, all contributors must follow the guidelines outlined below.

---

## 🚦 Repository Rules

1.  **Strict Schema**: Every tutorial topic folder MUST contain exactly the 6 files defined in our schema. No files may be added or removed.
2.  **No Placeholders**: Never submit code or guides containing placeholder comments, "Coming Soon" sections, or "TODO" items.
3.  **Runnable Code**: Every code example in \`02-example.*\` must be syntactically valid and runnable without edits.
4.  **Meaningful Tasks**: Practice and challenge tasks must be practical. Challenges must be conceptually or programmatically harder than practice tasks.

---

## 📁 Folder Naming Conventions

*   **Phases/Sections**: Use double digits followed by upper-case dash-separated technology names:
    -   *Correct*: \`01-HTML\`, \`09-NODEJS\`, \`12-MERN\`
    -   *Incorrect*: \`html-tutorials\`, \`NodeJS\`, \`12-mern\`
*   **Levels**: Folders must belong to one of our 5 learning levels:
    -   \`LEVEL-01-BEGINNER\`
    -   \`LEVEL-02-EASY\`
    -   \`LEVEL-03-INTERMEDIATE\`
    -   \`LEVEL-04-ADVANCED\`
    -   \`LEVEL-05-PROJECTS\`
*   **Topics**: Use double digits followed by capitalized dash-separated concept titles:
    -   *Correct*: \`01-Introduction\`, \`07-Route-Parameters\`
    -   *Incorrect*: \`01-intro\`, \`route_parameters\`, \`07RouteParameters\`

---

## 📄 File Naming Conventions

Every topic folder must contain exactly these six files:

```text
01-quick-guide.md
02-example.[ext]      <-- (allowed extensions: html, css, js, jsx, sh, json)
03-practice-task.md
04-challenge-task.md
05-summary.md
06-visual-guide.md
```

*   **Example File Extension**: The extension for \`02-example\` must match the language of the topic (e.g. \`.html\` for HTML topics, \`.js\` for Node/JS topics, \`.json\` for configs/interviews, \`.sh\` for Git/Github command lists).

---

## ✍️ Writing Style Guidelines

### 1. Quick Guides (\`01-quick-guide.md\`)
Quick guides must follow the strict **5-Question Format**:
-   \`## 1. What is it?\` (Single-sentence definition)
-   \`## 2. Why do we use it?\` (Real-world benefit and purpose)
-   \`## 3. How does it work?\` (Contains a **Think Like This** analogy and the core mechanism)
-   \`## 4. Where is it used?\` (Direct real-world applications)
-   \`## 5. How do we build with it?\` (Clear code block, followed by expected output and a best-practice rule)

### 2. Practice & Challenge Tasks
-   Practice tasks must give step-by-step guidance.
-   Challenge tasks should test edge cases, optimizations, or slightly advanced additions, encouraging independent problem-solving.

### 3. Summaries (\`05-summary.md\`)
Keep summaries highly concise. Use bullet points highlighting the 3-4 key takeaways from the lesson.

---

## 📥 Pull Request Guidelines

1.  **Fork & Branch**: Fork this repository and create a branch using a descriptive prefix (e.g. \`fix/typo-in-flexbox\`, \`feature/add-dsa-trees\`).
2.  **Validate Locally**: Run the automated verification checks before pushing:
    \`\`\`sh
    node verify.js
    \`\`\`
    Your pull request will be automatically rejected if it fails the validator check.
3.  **Detailed Descriptions**: Write a clear PR description detailing:
    -   Which folder/topic you edited.
    -   The changes made.
    -   Linked issue numbers.
