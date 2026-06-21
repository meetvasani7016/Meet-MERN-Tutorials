# Express Router

## 1. What is it?
Split routes into modular, mountable route handlers for clean file architecture.

## 2. Why do we use it?
Having 100 routes inside one `server.js` file is unreadable. Express Router splits paths into modular router sub-files organized by feature.

## 3. How does it work?
- **Analogy**: Dividing a dashboard cabinet into drawers: one drawer for user files, another for product inventories.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Grouping user, product, and authentication routes separately.

## 5. How do we build with it?
```js
const router = express.Router(); router.get('/');
```

- **Expected Output**: Bundles routes into mountable modular files.
- **Best Practice / Rule**: Mount routers using app.use('/prefix', routerFile) in your server file.
