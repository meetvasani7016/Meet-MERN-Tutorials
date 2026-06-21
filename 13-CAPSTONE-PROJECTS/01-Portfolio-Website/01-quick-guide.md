# Capstone Project 1: Portfolio Website

## Architecture Overview
A React & Tailwind CSS static frontend page integrated with an Express & MongoDB backend API to capture visitor contact emails securely.

## Folder Structure
```text
portfolio-website/
├── client/
│   ├── src/
│   │   ├── components/  # Navbar, Bio, SkillBar, ContactForm
│   │   └── App.jsx
│   └── package.json
└── server/
    ├── models/      # Contact.js (Mongoose Schema)
    ├── routes/      # api.js (POST /api/contact)
    └── server.js    # Entry file
```

## Feature Checklist
*   ✅ Responsive bio landing page with custom CSS transitions.
*   ✅ Dynamic skills progress bars using animated Tailwind widths.
*   ✅ Contact form sending details via HTTP POST to the backend.
*   ✅ Mongoose schema validating client email formats.
*   ✅ CORS configuration whitelisting client ports.

## Step-by-Step Build Roadmap
1.  **Phase 1**: Scaffold directories using `client/` and `server/` folders.
2.  **Phase 2**: Build the frontend bio page in React using Tailwind CSS spacing, grids, and border utilities.
3.  **Phase 3**: Implement the Express contact router saving logs to local MongoDB.
4.  **Phase 4**: Connect form submissions using fetch APIs.
5.  **Phase 5**: Deploy the database to Atlas, server to Render, and page to Vercel.

## Suggested Improvements
*   Add an admin login route to let you view submitted contact forms.
*   Integrate Nodemailer to forward contact emails directly to your inbox.

## Deployment Guide
*   **Database**: Set up an Atlas cluster, copy the URI string, and whitelist all IPs (`0.0.0.0/0`).
*   **Backend**: Deploy the server directory to Render, adding the MONGODB_URI environment variable.
*   **Frontend**: Deploy the client directory to Vercel, referencing the live Render API endpoint.
