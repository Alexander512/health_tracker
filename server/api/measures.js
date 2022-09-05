const router = require('express').Router();
const { models: { Measure }} = require('../db');
const { isLoggedIn } = require('./middleware.js');
module.exports = router;

/* GET all measures */
router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measures = await Measure.findAll();
      res.json(measures);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});

/* GET a measure by primary key */
router.get('/:id', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measure = await Measure.findByPk(req.params.id);
      res.json(measure);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});

/* POST a new measure */
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measure = await Measure.create(req.body);
      res.json(measure);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});

/* PUT a measure - update */
router.put('/:id', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measure = await Measure.findByPk(req.params.id);
      await measure.update(req.body);
      res.json(measure);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});

/* DELETE a measure */
router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const measure = await Measure.findByPk(req.params.id);
      await measure.destroy();
      res.sendStatus(204);
    } else {
      throw 'error';
    }
  } catch(err) {
    next(err);
  }
});
