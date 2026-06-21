# CDN Basics

## 1. What is it?
CDNs (Content Delivery Networks) are distributed servers globally that cache static assets closer to users.

## 2. Why do we use it?
To cache static files (CSS, images, JS) on globally distributed edge servers, minimizing physical distances and network travel delays for users.

## 3. How does it work?
- **Analogy**: A chain of local convenience stores. Instead of driving to the central warehouse (original server) for milk, you buy it at the local store (CDN edge server).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Global asset deliveries, websites static routing, and media stores.

## 5. How do we build with it?
```js
Hosting React styling files or images on Cloudflare edge servers.
```

- **Expected Output**: Drastically speeds up page load times for global users.
- **Best Practice / Rule**: Only use CDNs for static assets (images, css, js files), never for dynamic API database records.
