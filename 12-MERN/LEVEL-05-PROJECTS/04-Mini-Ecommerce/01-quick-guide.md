# MERN Mini-Ecommerce Project

## 1. What is it?
The Mini-Ecommerce Project is an educational MERN stack application displaying a product catalog with local client search, category filters, cart quantity updates, and dynamic order summaries.

## 2. Why do we use it?
It teaches core MERN stack concepts—specifically React state management, arrays filtering, child-to-parent callbacks, API data integration, and NoSQL query filtering—without the added complexity of setting up external payment gateways (like Stripe or PayPal) or complex real checkout systems.

## 3. How does it work?
- **Backend API**: Express exposes endpoints (`GET /api/products`) querying a MongoDB database with parameters for category filters and search text query strings.
- **Frontend React**: Fetches products, stores them in component state, and handles user inputs for searching and category drops.
- **Shopping Cart**: An array state hook tracking selected items, dynamically updating item quantity counts, and calculating order totals using arithmetic accumulators (`reduce()`).

## 4. Where is it used?
- Used as a benchmark practice task for full-stack developers to learn shopping cart CRUD state workflows and database search pipelines.

## 5. How do we build with it?
We build this application in two main steps:
1. Set up the Mongoose Schema & API routes on the backend.
2. Build the React UI matching search input values to filter lists, handling add-to-cart clicks, quantity updates, and rendering invoice summaries.

- **Expected Output**: Fully interactive store grid layout, reactive cart sidebars, dynamic order calculations updating on click events.
- **Best Practice**: Perform cart logic and calculations in client state for instant reactivity, but validate pricing on the server side when submitting orders.
