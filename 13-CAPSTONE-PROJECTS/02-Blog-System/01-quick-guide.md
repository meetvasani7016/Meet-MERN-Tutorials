# Capstone Project 2: Blog System

## Architecture Overview
A MERN stack blog supporting posts creation, category sorting, and comment logs.

## Folder Structure
```text
blog-system/
├── client/
│   ├── src/
│   │   ├── pages/       # Home, BlogPost, CreatePost
│   │   └── App.jsx
│   └── package.json
└── server/
    ├── models/      # Post.js (title, body, comments array)
    ├── routes/      # postRoutes.js
    └── server.js    # Entry file
```

## Feature Checklist
*   ✅ Main feed listing all posts with short body previews.
*   ✅ Dynamic blog post view displaying full text and comments.
*   ✅ Create Post form saving custom markdown content.
*   ✅ Comments array nested directly inside the Post document model.
*   ✅ Tag categories sorting.

## Step-by-Step Build Roadmap
1.  **Phase 1**: Define the Mongoose Post schema with title, body, tags, and comments.
2.  **Phase 2**: Build Express routes for GET /api/posts, GET /api/posts/:id, and POST /api/posts.
3.  **Phase 3**: Build the React homepage fetching and displaying the posts grid.
4.  **Phase 4**: Implement the detailed blog post page showing the nested comments list.
5.  **Phase 5**: Connect comments submission triggers to the backend router.

## Suggested Improvements
*   Add a rich text editor inside the Create Post form.
*   Implement simple search filters on the homepage grid.

## Deployment Guide
*   Deploy backend to Render. Link env configurations to MongoDB Atlas.
*   Deploy React client to Vercel, pointing API queries to the live Render domain URL.
