const Sequelize = require('sequelize');
const db = require('../db');

const Measurement = db.define('measurement', {
  value: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: true
    }
  },
  dateEntered: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.NOW
  }
}, { timestamps: false });

module.exports = Measurement;
