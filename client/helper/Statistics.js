/* function for calculating the minimum value */
function minimum(...values) {
  let minimumValue = Infinity;
  for (let i = 0; i < values.length; i++) {
    if (values[i] < minimumValue) minimumValue = values[i];
  }
  return minimumValue;
}

/* function for calculating the maximum value */
function maximum(...values) {
  let maximumValue = -Infinity;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > maximumValue) maximumValue = values[i];
  }
  return maximumValue;
}

/* function for calculating the mean value */
function mean(...values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}

module.exports = {
  minimum,
  maximum,
  mean
};
