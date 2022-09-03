//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Measure = require('./models/Measure')
const Measurement = require('./models/Measurement')

//associations could go here!
Measure.belongsTo(User)
User.hasMany(Measure)

Measurement.belongsTo(Measure)
Measure.hasMany(Measurement)

module.exports = {
  db,
  models: {
    User,
    Measure,
    Measurement
  },
}
