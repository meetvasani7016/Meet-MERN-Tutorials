# Environment Variables

## 1. What is it?
Environment variables secure credentials outside of source code configurations.

## 2. Why do we use it?
Database credentials, API tokens, and secret encryption keys must never be hardcoded into your git repository. Environment variables keep secrets secure and separated from code.

## 3. How does it work?
- **Analogy**: A locked safe. You keep API keys and passwords outside of the code. If a burglar steals your code files, they still can't open the database safe.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Storing MongoDB cluster passwords and JWT token signing secrets.

## 5. How do we build with it?
```js
process.env.PORT || 3000
```

- **Expected Output**: Reads the runtime port value from OS environments.
- **Best Practice / Rule**: Always add your `.env` configuration file to `.gitignore` to keep from committing secrets to GitHub.
