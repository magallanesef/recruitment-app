// Import Sequelize's DataTypes for defining model fields
    const { DataTypes } = require('sequelize');
    // Import Sequelize instance for database connection
    const sequelize = require('../config/database');

    // Define RecruitmentLog model for the recruitment_logs table
    const RecruitmentLog = sequelize.define('RecruitmentLog', {
      // Date field (required, stored as string, e.g., "2025-05-20")
      date: { type: DataTypes.STRING, allowNull: false },
      // Foreman field (optional, string, e.g., "Juan Carlos")
      foreman: { type: DataTypes.STRING },
      // Activity field (optional, string, e.g., "Weeding")
      activity: { type: DataTypes.STRING },
      // Location field (optional, string, e.g., "Soledad")
      location: { type: DataTypes.STRING },
      // Crew size field (optional, integer, e.g., 24)
      crew_size: { type: DataTypes.INTEGER },
      // Vehicle field (optional, string, e.g., "Blue Truck")
      vehicle: { type: DataTypes.STRING },
      // Miles field (optional, float, e.g., 10.5)
      miles: { type: DataTypes.FLOAT }
    });

    // Export the RecruitmentLog model for use in routes
    module.exports = RecruitmentLog;