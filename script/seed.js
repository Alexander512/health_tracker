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
  const users = await Promise.all([
    User.create({ username: 'alexander', firstName: 'Alexander', lastName: 'Stoisolovich', password: '123' })
  ])

  // Creating Measures
  const measures = await Promise.all([
    Measure.create({ name: 'heart rate', unit: 'bpm', lowerLimit: 60, upperLimit: 100, userId: users[0].id })
  ]);

  // Creating Measurements
  const measurements = await Promise.all([
    Measurement.create({ value: 68, measureId: measures[0].id }),
    Measurement.create({ value: 67, measureId: measures[0].id }),
    Measurement.create({ value: 68, measureId: measures[0].id }),
    Measurement.create({ value: 71, measureId: measures[0].id }),
    Measurement.create({ value: 70, measureId: measures[0].id }),
    Measurement.create({ value: 74, measureId: measures[0].id }),
    Measurement.create({ value: 70, measureId: measures[0].id }),
    Measurement.create({ value: 70, measureId: measures[0].id }),
    Measurement.create({ value: 66, measureId: measures[0].id }),
    Measurement.create({ value: 77, measureId: measures[0].id }),
    Measurement.create({ value: 76, measureId: measures[0].id }),
    Measurement.create({ value: 69, measureId: measures[0].id }),
    Measurement.create({ value: 75, measureId: measures[0].id }),
    Measurement.create({ value: 69, measureId: measures[0].id }),
    Measurement.create({ value: 67, measureId: measures[0].id }),
    Measurement.create({ value: 74, measureId: measures[0].id }),
    Measurement.create({ value: 66, measureId: measures[0].id }),
    Measurement.create({ value: 68, measureId: measures[0].id }),
    Measurement.create({ value: 69, measureId: measures[0].id }),
    Measurement.create({ value: 70, measureId: measures[0].id }),
    Measurement.create({ value: 66, measureId: measures[0].id }),
    Measurement.create({ value: 64, measureId: measures[0].id }),
    Measurement.create({ value: 67, measureId: measures[0].id }),
    Measurement.create({ value: 67, measureId: measures[0].id }),
    Measurement.create({ value: 71, measureId: measures[0].id }),
    Measurement.create({ value: 62, measureId: measures[0].id }),
    Measurement.create({ value: 69, measureId: measures[0].id }),
    Measurement.create({ value: 73, measureId: measures[0].id }),
    Measurement.create({ value: 67, measureId: measures[0].id }),
    Measurement.create({ value: 66, measureId: measures[0].id })
  ]);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
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
