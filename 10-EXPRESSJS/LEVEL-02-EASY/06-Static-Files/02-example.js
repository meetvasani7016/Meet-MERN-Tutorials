const express = require('express');
const path = require('path');
const app = express();

// Serve static assets from the 'public' directory safely
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);