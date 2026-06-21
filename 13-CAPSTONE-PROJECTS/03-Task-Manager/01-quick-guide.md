# Capstone Project 3: Collaborative Task Manager

## Architecture Overview
A MERN stack collaborative task tracker supporting priorities, assignments, and status toggles.

## Folder Structure
```text
task-manager/
├── client/
│   ├── src/
│   │   ├── components/  # TaskCard, ColumnContainer, TaskForm
│   │   └── App.jsx
│   └── package.json
└── server/
    ├── models/      # Task.js (title, assignee, status, priority)
    ├── routes/      # taskRoutes.js
    └── server.js    # Entry file
```

## Feature Checklist
*   ✅ Dynamic board grouping tasks into columns (Todo, In Progress, Done).
*   ✅ Task creation form setting priorities (Low, Medium, High).
*   ✅ Status toggle updating task state parameters on the backend.
*   ✅ Assignee profile tags mapping team members.
*   ✅ Delete button removing cards permanently from MongoDB.

## Step-by-Step Build Roadmap
1.  **Phase 1**: Build the Mongoose Task model with title, description, status, priority, and assignee.
2.  **Phase 2**: Build Express CRUD endpoints for /api/tasks.
3.  **Phase 3**: Build the React interface displaying tasks in separate priority/status columns.
4.  **Phase 4**: Connect CRUD actions (create, status toggle, delete) using fetch API calls.
5.  **Phase 5**: Validate CORS headers and test production deployment steps.

## Suggested Improvements
*   Add a search bar to filter tasks by title or assignee.
*   Implement drag-and-drop animations for task column transitions.

## Deployment Guide
*   Store connection keys in .env. Setup production variables on Vercel/Render.
*   Deploy database to Atlas cloud cluster.
