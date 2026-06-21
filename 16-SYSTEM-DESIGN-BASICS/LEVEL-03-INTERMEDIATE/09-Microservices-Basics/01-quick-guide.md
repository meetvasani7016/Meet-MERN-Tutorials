# Microservices Basics

## 1. What is it?
Microservices is an architectural style dividing a monolithic app into independent, loosely coupled services.

## 2. Why do we use it?
To split monolithic codebases into independent, decoupled service applications that can be updated, scaled, and deployed separately.

## 3. How does it work?
- **Analogy**: A mall food court. Instead of one restaurant attempting to serve pizza, sushi, and burgers (monolith), separate dedicated kitchens serve each item.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Large corporate web systems (like Netflix or Spotify architecture).

## 5. How do we build with it?
```js
Deploying user authentication, catalog search, and ordering routes as separate Node.js services.
```

- **Expected Output**: Enables scaling and upgrading parts of a system independently.
- **Best Practice / Rule**: Microservices introduce complexity in network communications and database consistency.
