# Caching Basics

## 1. What is it?
Caching is storing frequently accessed database records inside ultra-fast temporary RAM memory to speed up load times.

## 2. Why do we use it?
To store active read queries in fast RAM memory (like Redis) so servers resolve requests instantly without querying slower hard disk databases.

## 3. How does it work?
- **Analogy**: Keeping frequently used spices on the kitchen counter (caching) instead of walking to the basement pantry (database disk) every single time.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Optimizing high-read databases workloads and routes speeds.

## 5. How do we build with it?
```js
Using Redis database to cache API responses, resolving queries in 2ms instead of 200ms database lookups.
```

- **Expected Output**: Reduces server load and boosts API response speeds.
- **Best Practice / Rule**: Always configure cache invalidation guidelines (expiration times) so users do not see outdated data.
