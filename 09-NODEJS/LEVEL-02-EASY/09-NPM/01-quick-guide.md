# NPM Package Manager

## 1. What is it?
NPM is the package manager for Node.js, allowing you to install third-party libraries and tools.

## 2. Why do we use it?
Instead of writing complex packages (like cryptographies, styling engines, routers) from scratch, NPM lets you install pre-built packages created by other developers in seconds.

## 3. How does it work?
- **Analogy**: An app store for developers. You type 'install package' and download prebuilt code modules (like Express or lodash) into your project.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Adding tools like express, mongoose, or bcrypt to a backend workspace.

## 5. How do we build with it?
```sh
npm install lodash
```

- **Expected Output**: Downloads lodash package into node_modules and registers it in package.json.
- **Best Practice / Rule**: Never upload the node_modules folder to GitHub! Keep it in your .gitignore file.
