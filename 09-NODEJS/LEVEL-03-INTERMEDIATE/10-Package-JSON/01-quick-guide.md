# Package JSON

## 1. What is it?
package.json is the project manifest file storing configurations, metadata, and dependencies.

## 2. Why do we use it?
To keep track of project metadata, scripts definitions, and package versions required by your project so other developers can install and run your app instantly with `npm install`.

## 3. How does it work?
- **Analogy**: A blueprint catalog of a ship: it labels the name, version, author, running commands, and lists all component parts required to build it.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
The root configuration file of every modern JavaScript package or workspace.

## 5. How do we build with it?
```json
Create project manifest using 'npm init -y'.
```

- **Expected Output**: Generates a default package.json file.
- **Best Practice / Rule**: Running 'npm install' in a folder with a package.json automatically downloads all listed dependencies.
