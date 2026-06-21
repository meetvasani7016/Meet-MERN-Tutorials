# Big O Notation Basics

## 1. What is it?
Big O Notation measures the performance speed (Time Complexity) and memory usage (Space Complexity) of algorithms as inputs grow.

## 2. Why do we use it?
To evaluate how execution speed and memory usage grow as data scales, enabling developers to write optimized loops and avoid interface lag on large grids.

## 3. How does it work?
- **Analogy**: Shipping speed scales. O(1) is sending a text (same speed regardless of length). O(N) is counting pages (takes longer as pages count grows).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Evaluating nested array loops in React rendering methods.

## 5. How do we build with it?
```js
Reading array index is O(1); looping through an array is O(N); nested loop is O(N^2).
```

- **Expected Output**: Enables code performance optimizations.
- **Best Practice / Rule**: Focus on how time grows, not physical millisecond speeds (which depend on hardware).
