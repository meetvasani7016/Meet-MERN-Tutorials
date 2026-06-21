# Project Architecture

## 1. What is it?
Organize full-stack projects by separating client and server repositories or configuring monorepos.

## 2. Why do we use it?
Separating dependencies ensures frontend code does not include server-only modules (like bcrypt or dotenv), optimizing browser bundles and security boundaries.

## 3. How does it work?
- **Analogy**: An office split: one floor for client sales panels (frontend folder), another floor for security backend servers (backend folder).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Structuring full-stack repositories with `client/` and `server/` subfolders.

## 5. How do we build with it?
```sh
Folders: client/ and server/ side-by-side.
```

- **Expected Output**: Keeps package dependencies and build systems isolated.
- **Best Practice / Rule**: Always maintain separate package.json files for client (React) and server (Express) folders.
