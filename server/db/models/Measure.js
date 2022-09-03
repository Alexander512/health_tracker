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
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true
    }
  },
  intermediateLimit: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true
    }
  },
  upperLimit: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: true
    }
  }
});

module.exports = Measure;
