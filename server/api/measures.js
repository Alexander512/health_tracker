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

/* POST a new measure */
router.post('/', async (req, res, next) => {
  try {
    const measure = await Measure.create(req.body);
    res.json(measure);
  } catch(err) {
    next(err);
  }
});

/* PUT a measure - update */
router.put('/:id', async (req, res, next) => {
  try {
    const measure = await Measure.findByPk(req.params.id);
    await measure.update(req.body);
    res.json(measure);
  } catch(err) {
    next(err);
  }
});

/* DELETE a measure */
router.delete('/:id', async (req, res, next) => {
  try {
    const measure = await Measure.findByPk(req.params.id);
    await measure.destroy();
    res.sendStatus(204);
  } catch(err) {
    next(err);
  }
});
