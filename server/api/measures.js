const router = require('express').Router();
const { models: { Measure }} = require('../db');
module.exports = router;

/* GET all measures */
router.get('/', async (req, res, next) => {
  try {
    const measures = await Measure.findAll();
    res.json(measures);
  } catch(err) {
    next(err);
  }
});

/* GET a measure by primary key */
router.get('/:id', async (req, res, next) => {
  try {
    const measure = await Measure.findByPk(req.params.id);
    res.json(measure);
  } catch(err) {
    next(err);
  }
});
