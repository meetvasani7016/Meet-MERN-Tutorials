# Full-Stack Deployment Basics

## 1. What is it?
Full-Stack Deployment Basics involves publishing your local React front-end app to a static host server (Vercel or GitHub Pages), hosting your Express API server on a web service provider (Render), and hosting your MongoDB database on a cloud database cluster (MongoDB Atlas).

## 2. Why do we use it?
Deploying turns your local development codebase into a public web app that anyone with an internet connection can access. Understanding how to host code is a critical skill for any developer building portfolio projects.

## 3. How does it work?
- **React Frontend**: Compiled into HTML/CSS/JS static bundles (using `npm run build`), hosted on Vercel or GitHub Pages, which deliver them quickly to users over CDN networks.
- **Express Backend**: Uploaded to Render, which runs a continuous Node.js background environment process, opening port numbers to listen for incoming client API requests.
- **Database (Atlas)**: Remains in the cloud, whitelists traffic from the Render server, and processes CRUD queries over secure URI strings.

## 4. Where is it used?
- Hosting professional portfolios, student capstone projects, SaaS applications, and software demos on the public web.

## 5. How do we build with it?

### Step-by-Step Hosting Workflow

#### Step 1: Database Setup (MongoDB Atlas)
1. Go to your Atlas dashboard.
2. In **Network Access**, ensure you add `0.0.0.0/0` to allow connections from Render's dynamic hosting IPs.
3. Copy your Connection String URI.

#### Step 2: Backend Host (Render)
1. Push your server code to a GitHub repository.
2. Create a new **Web Service** on Render and connect your GitHub repository.
3. Configure the commands:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Under **Environment Variables**, add:
   - `MONGODB_URI`: *[Your Atlas connection string]*
   - `NODE_ENV`: `production`
   - `JWT_SECRET`: *[A secure secret key]*
5. Render will deploy and give you a public API URL (e.g. `https://my-api.onrender.com`).

#### Step 3: Frontend Host (Vercel)
1. Create a `vercel.json` file in your client root folder to handle React Router client redirects:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
2. Link your GitHub repository to Vercel and import your client directory.
3. Set your React build variables to point to the live Render URL.
4. Deploy the frontend to obtain your live app URL (e.g. `https://my-app.vercel.app`).
5. **Crucial**: Go back to your Render environment variables and update your CORS settings to whitelist your new Vercel domain!

- **Expected Output**: Client accesses frontend web page, fetches data successfully from Express, and saves records directly in the cloud Atlas cluster.
- **Best Practice**: Never check in production `.env` files to Git. Set them up securely inside Vercel/Render settings dashboards.
