# NodeJS Modules

## 1. What is it?
Modules allow you to split your codebase into separate, reusable code files.

## 2. Why do we use it?
As projects grow, writing all code in one giant file becomes unmaintainable. Modules allow splitting the codebase into separate files with scoped variables, avoiding naming conflicts.

## 3. How does it work?
- **Analogy**: A tool box where you keep separate compartments: one drawer for screwdrivers (math utils), another for wrenches (file helpers).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Dividing controllers, models, and utility scripts in Express servers.

## 5. How do we build with it?
```js
const math = require('./math');
```

- **Expected Output**: Imports functional modules into active scripts.
- **Best Practice / Rule**: CommonJS uses require() and module.exports. ES Modules use import and export (requires type: 'module' in package.json).
