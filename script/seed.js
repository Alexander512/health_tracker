'use strict'

const {db, models: {User, Measure, Measurement} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const user1 = await User.create({ username: 'alexander', password: 'password1234' })
  const user2 = await User.create({ username: 'jimSmith', password: 'password5678' })

  // Creating Measures
  const measures = await Promise.all([
    Measure.create({ name: 'Resting heart rate', unit: 'bpm', userId: user1.id }),
    Measure.create({ name: 'Step count', unit: 'number of steps', userId: user2.id })
  ]);

  // Creating Measurements
  const measurements = await Promise.all([
    Measurement.create({ value: 68, dateEntered: '2022-10-01', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-10-02', measureId: measures[0].id }),
    Measurement.create({ value: 68, dateEntered: '2022-10-03', measureId: measures[0].id }),
    Measurement.create({ value: 71, dateEntered: '2022-10-04', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-10-05', measureId: measures[0].id }),
    Measurement.create({ value: 74, dateEntered: '2022-10-06', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-10-07', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-10-08', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-10-09', measureId: measures[0].id }),
    Measurement.create({ value: 77, dateEntered: '2022-10-10', measureId: measures[0].id }),
    Measurement.create({ value: 76, dateEntered: '2022-10-11', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-10-12', measureId: measures[0].id }),
    Measurement.create({ value: 75, dateEntered: '2022-10-13', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-10-14', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-10-15', measureId: measures[0].id }),
    Measurement.create({ value: 74, dateEntered: '2022-10-16', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-10-17', measureId: measures[0].id }),
    Measurement.create({ value: 68, dateEntered: '2022-10-18', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-10-19', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-10-20', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-10-21', measureId: measures[0].id }),
    Measurement.create({ value: 64, dateEntered: '2022-10-22', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-10-23', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-10-24', measureId: measures[0].id }),
    Measurement.create({ value: 71, dateEntered: '2022-10-25', measureId: measures[0].id }),
    Measurement.create({ value: 62, dateEntered: '2022-10-26', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-10-27', measureId: measures[0].id }),
    Measurement.create({ value: 73, dateEntered: '2022-10-28', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-10-29', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-10-30', measureId: measures[0].id }),
    Measurement.create({ value: 8473, dateEntered: '2022-10-01', measureId: measures[1].id }),
    Measurement.create({ value: 7482, dateEntered: '2022-10-02', measureId: measures[1].id }),
    Measurement.create({ value: 7380, dateEntered: '2022-10-03', measureId: measures[1].id }),
    Measurement.create({ value: 8454, dateEntered: '2022-10-04', measureId: measures[1].id }),
    Measurement.create({ value: 6904, dateEntered: '2022-10-05', measureId: measures[1].id }),
    Measurement.create({ value: 7568, dateEntered: '2022-10-06', measureId: measures[1].id }),
    Measurement.create({ value: 6982, dateEntered: '2022-10-07', measureId: measures[1].id }),
    Measurement.create({ value: 7139, dateEntered: '2022-10-08', measureId: measures[1].id }),
    Measurement.create({ value: 7366, dateEntered: '2022-10-09', measureId: measures[1].id }),
    Measurement.create({ value: 6874, dateEntered: '2022-10-10', measureId: measures[1].id }),
    Measurement.create({ value: 7491, dateEntered: '2022-10-11', measureId: measures[1].id }),
    Measurement.create({ value: 7091, dateEntered: '2022-10-12', measureId: measures[1].id }),
    Measurement.create({ value: 7928, dateEntered: '2022-10-13', measureId: measures[1].id }),
    Measurement.create({ value: 7730, dateEntered: '2022-10-14', measureId: measures[1].id }),
    Measurement.create({ value: 7777, dateEntered: '2022-10-15', measureId: measures[1].id }),
    Measurement.create({ value: 7474, dateEntered: '2022-10-16', measureId: measures[1].id }),
    Measurement.create({ value: 7536, dateEntered: '2022-10-17', measureId: measures[1].id }),
    Measurement.create({ value: 6275, dateEntered: '2022-10-18', measureId: measures[1].id }),
    Measurement.create({ value: 7740, dateEntered: '2022-10-19', measureId: measures[1].id }),
    Measurement.create({ value: 7385, dateEntered: '2022-10-20', measureId: measures[1].id }),
    Measurement.create({ value: 7547, dateEntered: '2022-10-21', measureId: measures[1].id }),
    Measurement.create({ value: 7318, dateEntered: '2022-10-22', measureId: measures[1].id }),
    Measurement.create({ value: 8132, dateEntered: '2022-10-23', measureId: measures[1].id }),
    Measurement.create({ value: 7859, dateEntered: '2022-10-24', measureId: measures[1].id }),
    Measurement.create({ value: 6769, dateEntered: '2022-10-25', measureId: measures[1].id }),
    Measurement.create({ value: 7868, dateEntered: '2022-10-26', measureId: measures[1].id }),
    Measurement.create({ value: 7592, dateEntered: '2022-10-27', measureId: measures[1].id }),
    Measurement.create({ value: 7487, dateEntered: '2022-10-28', measureId: measures[1].id }),
    Measurement.create({ value: 7923, dateEntered: '2022-10-29', measureId: measures[1].id }),
    Measurement.create({ value: 7784, dateEntered: '2022-10-30', measureId: measures[1].id })
  ]);

}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
