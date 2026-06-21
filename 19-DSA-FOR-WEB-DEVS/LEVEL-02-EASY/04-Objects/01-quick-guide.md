# DSA Objects

## 1. What is it?
Objects are key-value stores allowing fast property lookups in constant time.

## 2. Why do we use it?
To store key-value associations, enabling instant property lookups in O(1) constant time without scanning entire arrays.

## 3. How does it work?
- **Analogy**: A telephone directory. You lookup a name (key) to get their number (value) instantly.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Managing user profiles state keys, configuration maps, and session stores.

## 5. How do we build with it?
```js
const user = { name: 'Alice' }; user.name -> returns 'Alice' O(1).
```

- **Expected Output**: Enables fast attribute indexing lookups.
- **Best Practice / Rule**: Object keys must be unique. Adding duplicate keys overrides the existing value.
