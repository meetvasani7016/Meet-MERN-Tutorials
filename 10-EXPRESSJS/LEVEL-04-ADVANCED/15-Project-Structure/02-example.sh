/* Production Express Layout:
├── config/             # Database connection setups
├── controllers/        # Request handlers
│   └── userController.js
├── models/             # Schema definitions
│   └── User.js
├── routes/             # Route configurations
│   └── userRoutes.js
├── middlewares/        # Custom filters
│   └── auth.js
├── app.js              # Mounts middlewares and app settings
└── server.js           # Binds server port listener
*/