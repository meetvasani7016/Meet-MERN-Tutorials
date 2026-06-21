# Stateful vs Stateless Auth

## 1. What is it?
Secure user sessions using server-side session databases (stateful) or self-contained signed tokens (stateless).

## 2. Why do we use it?
To persist user identity securely across stateless HTTP networks using server-side session ledgers or cryptographically signed client-side tokens (JWT).

## 3. How does it work?
- **Analogy**: Renting a hotel room (Stateful - front desk checks reservation records) vs buying a concert ticket (Stateless - ticket contains signature seal).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Protected dashboards, shopping carts, and private API routes.

## 5. How do we build with it?
```js
Express-Session database records vs JWT validation tokens checked locally via cryptographic keys.
```

- **Expected Output**: Enables secure full-stack authentication models.
- **Best Practice / Rule**: JWTs cannot be easily revoked before expiration without building blacklist databases.
