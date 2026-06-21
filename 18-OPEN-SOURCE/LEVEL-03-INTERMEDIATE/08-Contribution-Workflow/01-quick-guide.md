# Contribution Workflow

## 1. What is it?
The step-by-step cycle of modifying upstream repositories: Forking, Cloning, Branching, Committing, and PR submission.

## 2. Why do we use it?
To practice the strict sequence of Forking, Cloning, Branching, Committing, pushing, and PR creation that keeps repositories organized.

## 3. How does it work?
- **Analogy**: A flight checklist. Follow the sequence strictly to avoid branch mess and build errors.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Standard Git flow for open-source development.

## 5. How do we build with it?
```sh
Fork -> Clone -> Checkout branch -> Code -> Push -> PR.
```

- **Expected Output**: Ensures clean, organized open-source code submissions.
- **Best Practice / Rule**: Never edit code directly on your fork's main branch! Always create a feature branch first.
