// Import Express for creating the router
    const express = require('express');
    // Import Sequelize for database queries
    const sequelize = require('sequelize');
    // Create a new router instance
    const router = express.Router();
    // Import RecruitmentLog model for database operations
    const RecruitmentLog = require('../models/RecruitmentLog');

    // GET /api/recruitment-logs: Retrieve all recruitment logs
    router.get('/', async (req, res) => {
      const logs = await RecruitmentLog.findAll();
      res.json(logs);
    });

    // POST /api/recruitment-logs: Create a new recruitment log
    router.post('/', async (req, res) => {
      try {
        const log = await RecruitmentLog.create(req.body);
        res.status(201).json(log);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    });

    // GET /api/recruitment-logs/by-activity: Count logs grouped by activity
    router.get('/by-activity', async (req, res) => {
      const activities = await RecruitmentLog.findAll({
        attributes: ['activity', [sequelize.fn('COUNT', sequelize.col('activity')), 'count']],
        group: ['activity']
      });
      res.json(activities);
    });

    // Export the router for use in index.js
    module.exports = router;