// --- routes/userRoutes.js ---
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("User list"));
router.post('/', (req, res) => res.send("Create user"));

module.exports = router;

// --- server.js ---
// const express = require('express');
// const app = express();
// const userRouter = require('./routes/userRoutes');
// app.use('/api/users', userRouter); // Mount router