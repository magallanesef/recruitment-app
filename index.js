// Import Express to create the server
    const express = require('express');
    // Import CORS to allow frontend (localhost:3000) to access backend (localhost:5000)
    const cors = require('cors');
    // Import Sequelize for database connection
    const sequelize = require('./config/database');
    // Import route handlers for companies and recruitment logs
    const companyRoutes = require('./routes/companies');
    const recruitmentLogRoutes = require('./routes/recruitmentLogs');
    // Import models for database tables
    const Company = require('./models/Company');
    const RecruitmentLog = require('./models/RecruitmentLog');

    // Initialize Express app
    const app = express();

    // Enable CORS to allow cross-origin requests from the frontend
    app.use(cors());
    // Parse incoming JSON requests
    app.use(express.json());

    // Mount API routes for companies and recruitment logs
    app.use('/api/companies', companyRoutes);
    app.use('/api/recruitment-logs', recruitmentLogRoutes);

    // Sync database models with SQLite (force: false preserves existing data)
    sequelize.sync({ force: false }).then(() => {
      console.log('Database synced');
      // Start server on port 5000
      app.listen(5000, () => console.log('Server running on http://localhost:5000'));
    });