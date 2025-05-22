// Import Express to create the server
      const express = require('express');
      // Import CORS to allow frontend to access backend
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

      // Enable CORS to allow cross-origin requests
      app.use(cors());
      // Parse incoming JSON requests
      app.use(express.json());

      // Mount API routes for companies and recruitment logs
      app.use('/api/companies', companyRoutes);
      app.use('/api/recruitment-logs', recruitmentLogRoutes);

      // Use dynamic port from environment (Render) or default to 5000 locally
      const port = process.env.PORT || 5000;

      // Sync database models with SQLite (force: false preserves data)
      sequelize.sync({ force: false }).then(() => {
        console.log('Database synced');
        // Start server on the assigned port
        app.listen(port, () => console.log(`Server running on port ${port}`));
      });