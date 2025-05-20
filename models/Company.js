const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Company = sequelize.define('Company', {
  name: { type: DataTypes.STRING, allowNull: false },
  contact_person: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  crop_activities: { type: DataTypes.STRING }
});
module.exports = Company;