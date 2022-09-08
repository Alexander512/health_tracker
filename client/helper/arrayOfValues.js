function arrayOfValues(array, date) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].dateEntered >= date) {
      let value = array[i].value;
      newArray.push(value);
    }
  }
  return newArray;
}

export default arrayOfValues;
