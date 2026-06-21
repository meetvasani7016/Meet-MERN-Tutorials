# Environment Management

## 1. What is it?
Configure separate variables for local development and live production environments.

## 2. Why do we use it?
To automatically toggle connection URLs and logs depending on whether code runs locally on your PC (`development`) or live on server hosts (`production`).

## 3. How does it work?
- **Analogy**: A stunt double vs a real actor. During rehearsals (dev), you use stunt doubles (local DB). During the real show (production), you use the main actor (cloud DB).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Toggling connection strings from localhost to MongoDB Atlas clusters.

## 5. How do we build with it?
```js
const db = process.env.NODE_ENV === 'production' ? cloudDB : localDB;
```

- **Expected Output**: Adapts runtime connection endpoints automatically.
- **Best Practice / Rule**: Always verify your environment variables list on Vercel/Render when deploying update packages.
