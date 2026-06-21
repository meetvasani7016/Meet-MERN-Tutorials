# Capstone Project 5: Mini-Ecommerce Store

## Architecture Overview
A MERN stack educational catalogue page supporting search filters, category maps, cart quantity changes, and price totals without live checkout systems.

## Folder Structure
```text
ecommerce-store/
├── client/
│   ├── src/
│   │   ├── components/  # ProductGrid, CartPanel, SearchFilter
│   │   └── App.jsx
│   └── package.json
└── server/
    ├── models/      # Product.js (name, price, image, category)
    ├── routes/      # productRoutes.js
    └── server.js    # Entry file
```

## Feature Checklist
*   ✅ Responsive product catalog grid showing titles and prices.
*   ✅ Search and category tags filter sorting items.
*   ✅ Interactive cart panel managing item additions and quantities.
*   ✅ Quantity adjustment buttons (+/-) recomputing cart parameters.
*   ✅ Full price summary displaying total checkout prices.

## Step-by-Step Build Roadmap
1.  **Phase 1**: Define the Mongoose Product schema with name, price, description, and category.
2.  **Phase 2**: Build Express endpoints for /api/products.
3.  **Phase 3**: Scaffold the React page layout showing product grids and cart lists.
4.  **Phase 4**: Connect product search inputs and category dropdown filters.
5.  **Phase 5**: Implement shopping cart quantity logic and calculate total prices.

## Suggested Improvements
*   Add a local storage backup for the shopping cart state.
*   Build a product details modal displaying description profiles.

## Deployment Guide
*   Deploy backend to Render. Configure Atlas connection details.
*   Deploy React client to Vercel, configuring API route URLs.
