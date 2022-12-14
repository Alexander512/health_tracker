const router = require('express').Router()
const { models: { User }} = require('../db')
const { isLoggedIn } = require('./middleware.js')
module.exports = router

router.get('/', isLoggedIn, async (req, res, next) => {
  try {
    if (req.user) {
      const users = await User.findAll({
        // explicitly select only the id and username fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'username']
    })
    res.json(users)
    } else {
      throw 'error'
    }
  } catch (err) {
    next(err)
  }
})
