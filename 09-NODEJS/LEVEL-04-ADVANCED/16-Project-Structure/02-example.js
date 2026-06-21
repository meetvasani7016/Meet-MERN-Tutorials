/* Backend modular separation responsibility:
- config/      : Database and security environment files.
- controllers/ : Express request logic handlers.
- models/      : Database mongoose model schemas.
- routes/      : URL path matching files.
- app.js       : Instantiates Express, mounts middlewares.
- server.js    : Entry script initiating port listener loop.
*/
const express = require('express');
const app = express();

// Modular router imports
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);