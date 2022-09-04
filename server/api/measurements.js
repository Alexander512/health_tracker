const router = require('express').Router();
const { models: { Measurement }} = require('../db');
module.exports = router;

/* GET measurements */
router.get('/', async (req, res, next) => {
  try {
    const measurements = await Measurement.findAll();
    res.json(measurements);
  } catch(err) {
    next(err);
  }
});

/* POST a measurement */
router.post('/', async (req, res, next) => {
  try {
    const measurement = await Measurement.create(req.body);
    res.json(measurement);
  } catch(err) {
    next(err);
  }
});
