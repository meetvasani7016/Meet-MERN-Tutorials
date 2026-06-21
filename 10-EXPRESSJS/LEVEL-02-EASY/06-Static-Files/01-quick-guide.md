# Express Static Files

## 1. What is it?
Serve static assets like HTML pages, stylesheets, and images using built-in controllers.

## 2. Why do we use it?
Web apps need to serve client assets like images, stylesheets, or compiled JavaScript bundles directly from a server directory without custom route code.

## 3. How does it work?
- **Analogy**: Setting up a public bookshelf in the lobby. Anyone can pick up catalogs directly without needing a librarian's intervention.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Serving portfolio profile pictures, custom CSS pages, and site icons.

## 5. How do we build with it?
```js
app.use(express.static('public'));
```

- **Expected Output**: Serves files inside 'public' folder directly at root domains.
- **Best Practice / Rule**: Static files bypass router blocks, loading assets quickly for static pages.
