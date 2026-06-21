# Protected Routes

## 1. What is it?
Restrict access to dashboard pages on the client and API endpoints on the server.

## 2. Why do we use it?
To prevent unauthorized visitors from accessing dashboards, and to block unauthorized requests on API ports using verification middleware.

## 3. How does it work?
- **Analogy**: A hotel elevator requiring keycards. If you try to go to the penthouse suite (dashboard page) without a card, the elevator redirects you.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Dashboard route locks, admin panels, and user edit forms.

## 5. How do we build with it?
```jsx
if (!token) return <Navigate to="/login" />;
```

- **Expected Output**: Redirects unauthorized users to public login forms.
- **Best Practice / Rule**: Always validate tokens on BOTH frontend (for clean page redirects) and backend (for database security).
