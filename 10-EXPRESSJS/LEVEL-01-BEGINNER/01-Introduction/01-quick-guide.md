# ExpressJS Introduction

## 1. What is it?
Express is a fast, unopinionated, minimalist web framework for Node.js.

## 2. Why do we use it?
Writing routing logic, request parsers, and custom headers using Node's native `http` module requires hundreds of lines of boilerplate code. Express simplifies this with clean APIs.

## 3. How does it work?
- **Analogy**: Imagine building a restaurant. Instead of hiring carpenters to build tables (writing native HTTP servers), you rent a pre-built dining hall with lights, doors, and kitchens installed, and you just add the food menu.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
API backends for web and mobile clients.

## 5. How do we build with it?
```js
const app = express(); app.get('/', (req, res) => res.send('Hi'));
```

- **Expected Output**: Creates a fully routed Express web server.
- **Best Practice / Rule**: Express sits on top of Node's HTTP modules, adding middleware layouts and clean routing APIs.
