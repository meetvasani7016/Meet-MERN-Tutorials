# .env (Save in project root folder - ignore in git)
PORT=5000
DATABASE_URL="mongodb://localhost:27017/mydb"

# app.js
require('dotenv').config(); // Load variables
const port = process.env.PORT || 3000;
console.log("Running server on port:", port);
console.log("Connecting database:", process.env.DATABASE_URL);