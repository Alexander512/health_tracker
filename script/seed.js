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
  const user1 = await User.create({ username: 'alexander', firstName: 'Alexander', lastName: 'Stoisolovich', password: '123' })
  const user2 = await User.create({ username: 'jim', firstName: 'Jim', lastName: 'Smith', password: '123' })

  // Creating Measures
  const measures = await Promise.all([
    Measure.create({ name: 'heart rate', unit: 'bpm', userId: user1.id }),
    Measure.create({ name: 'test', unit: 'test', userId: user2.id })
  ]);

  // Creating Measurements
  const measurements = await Promise.all([
    Measurement.create({ value: 73, dateEntered: '2022-08-06', measureId: measures[0].id }),
    Measurement.create({ value: 68, dateEntered: '2022-08-07', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-08-08', measureId: measures[0].id }),
    Measurement.create({ value: 68, dateEntered: '2022-08-09', measureId: measures[0].id }),
    Measurement.create({ value: 71, dateEntered: '2022-08-10', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-08-11', measureId: measures[0].id }),
    Measurement.create({ value: 74, dateEntered: '2022-08-12', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-08-13', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-08-14', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-08-15', measureId: measures[0].id }),
    Measurement.create({ value: 77, dateEntered: '2022-08-16', measureId: measures[0].id }),
    Measurement.create({ value: 76, dateEntered: '2022-08-17', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-08-18', measureId: measures[0].id }),
    Measurement.create({ value: 75, dateEntered: '2022-08-19', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-08-20', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-08-21', measureId: measures[0].id }),
    Measurement.create({ value: 74, dateEntered: '2022-08-22', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-08-23', measureId: measures[0].id }),
    Measurement.create({ value: 68, dateEntered: '2022-08-24', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-08-25', measureId: measures[0].id }),
    Measurement.create({ value: 70, dateEntered: '2022-08-26', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-08-27', measureId: measures[0].id }),
    Measurement.create({ value: 64, dateEntered: '2022-08-28', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-08-29', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-08-30', measureId: measures[0].id }),
    Measurement.create({ value: 71, dateEntered: '2022-08-31', measureId: measures[0].id }),
    Measurement.create({ value: 62, dateEntered: '2022-09-01', measureId: measures[0].id }),
    Measurement.create({ value: 69, dateEntered: '2022-09-02', measureId: measures[0].id }),
    Measurement.create({ value: 73, dateEntered: '2022-09-03', measureId: measures[0].id }),
    Measurement.create({ value: 67, dateEntered: '2022-09-04', measureId: measures[0].id }),
    Measurement.create({ value: 66, dateEntered: '2022-09-05', measureId: measures[0].id })
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
