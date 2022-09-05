const router = require('express').Router();
const { models: { Measurement }} = require('../db');
const { isLoggedIn } = require('./middleware.js');
module.exports = router;

/* GET measurements */
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measurements = await Measurement.findAll();
      res.json(measurements);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});

/* POST a measurement */
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measurement = await Measurement.create(req.body);
      res.json(measurement);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});
