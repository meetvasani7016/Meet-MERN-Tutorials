# MERN API Integration

## 1. What is it?
Synchronize React component lifecycle states to Express backend APIs using useEffect.

## 2. Why do we use it?
To load server-stored persistent database records into React user interfaces dynamically when pages load.

## 3. How does it work?
- **Analogy**: Entering a hotel lobby. As soon as you step inside (mount), the front desk loads your reservation lists.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Fetching dashboards data, loading products grids, and loading inbox lists.

## 5. How do we build with it?
```jsx
useEffect(() => { loadAPI(); }, []);
```

- **Expected Output**: Loads database arrays into active React state buffers on startup.
- **Best Practice / Rule**: Always define loading status states so users see feedback indicators during fetching lag.
