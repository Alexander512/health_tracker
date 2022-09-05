const Sequelize = require('sequelize');
const db = require('../db');

const Measure= db.define('measure', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  unit: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lowerLimit: {
    type: Sequelize.FLOAT
  },
  intermediateLimit: {
    type: Sequelize.FLOAT
  },
  upperLimit: {
    type: Sequelize.FLOAT
  }
});

module.exports = Measure;
