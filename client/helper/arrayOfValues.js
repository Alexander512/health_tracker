const startDate = require('./startDate.js');

const measurements = [
  { id: 1, value: 0, dateEntered: '2022-09-01', measureId: 1 },
  { id: 2, value: 1, dateEntered: '2022-09-02', measureId: 2 },
  { id: 3, value: 2, dateEntered: '2022-09-03', measureId: 3 },
  { id: 4, value: 3, dateEntered: '2022-09-04', measureId: 4 },
  { id: 5, value: 4, dateEntered: '2022-09-05', measureId: 5 }
];

function arrayOfValues(array, date) {
console.log(date);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].dateEntered >= date) {
      let value = array[i].value;
      newArray.push(value);
    }
  }
  return newArray;
}

const filterDate = '2022-09-08';
const values = arrayOfValues(measurements, filterDate);

console.log(values);
