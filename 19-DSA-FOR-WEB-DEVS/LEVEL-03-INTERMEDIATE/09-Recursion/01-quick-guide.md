# DSA Recursion

## 1. What is it?
Recursion is a programming technique where a function calls itself to solve smaller sub-problems.

## 2. Why do we use it?
To parse hierarchically nested structures naturally by writing functions that invoke themselves with smaller inputs.

## 3. How does it work?
- **Analogy**: Russian nesting dolls. You open a doll (function call) to find a smaller doll inside, stopping only at the base doll (base case).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Rendering nested comment trees and parsing JSON configuration models.

## 5. How do we build with it?
```js
Calculating factorials or walking nested comment threads.
```

- **Expected Output**: Enables elegant parsing of nested tree structures.
- **Best Practice / Rule**: Always define a base case, or your function will loop infinitely and crash with a Stack Overflow error!
