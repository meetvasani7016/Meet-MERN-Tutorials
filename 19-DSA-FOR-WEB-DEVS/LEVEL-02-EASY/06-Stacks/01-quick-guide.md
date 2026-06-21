# DSA Stacks

## 1. What is it?
Stacks are Last-In, First-Out (LIFO) structures where additions and removals occur at the same end.

## 2. Why do we use it?
To manage sequential operations where only the most recently added item is processed first (LIFO).

## 3. How does it work?
- **Analogy**: A stack of dinner plates. You pile plates on top (push) and remove plates from the top (pop).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Browser history navigation rollbacks and text editor undo operations.

## 5. How do we build with it?
```js
Browser history navigation: back button pops the latest visited page.
```

- **Expected Output**: Enables tracking of sequential state rollbacks.
- **Best Practice / Rule**: Additions and removals in a Stack are O(1) constant time operations.
