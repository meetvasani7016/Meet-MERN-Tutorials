# DSA LinkedLists

## 1. What is it?
LinkedLists are linear sequences of node elements connected by pointers, avoiding contiguous memory allocations.

## 2. Why do we use it?
To maintain dynamic data series that support rapid insertions and deletions at the head without memory shifts.

## 3. How does it work?
- **Analogy**: A treasure hunt map. Each clue (node) tells you the treasure location (value) and points to where the next clue is (pointer).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Implementing undo-redo states or caching strategies (LRU cache).

## 5. How do we build with it?
```js
Node mapping: { value: 10, next: { value: 20, next: null } }.
```

- **Expected Output**: Enables flexible, dynamic memory allocations.
- **Best Practice / Rule**: LinkedLists do not have indexes; looking up an item requires traversing from the head node (O(N)).
