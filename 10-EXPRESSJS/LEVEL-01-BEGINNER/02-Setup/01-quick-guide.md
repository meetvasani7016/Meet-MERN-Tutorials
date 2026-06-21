# Express Setup

## 1. What is it?
Install and configure an Express server with automatic development reloaders.

## 2. Why do we use it?
To initialize an Express server runtime and open network ports to listen and respond to incoming HTTP client connections.

## 3. How does it work?
- **Analogy**: Installing a automatic compiler in your cockpit. Every time you change dashboard layouts (save edits), the dials refresh automatically.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Every web service or application API start script.

## 5. How do we build with it?
```sh
npm install express; npm install -D nodemon
```

- **Expected Output**: Scaffolds dependency workspaces for server runs.
- **Best Practice / Rule**: Use nodemon for local development so you don't have to restart your server after every code change.
