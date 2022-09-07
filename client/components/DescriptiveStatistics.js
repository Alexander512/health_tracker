import React from 'react';
import startDate from '../helper/startDate.js';
import arrayOfValues from '../helper/arrayOfValues.js';
import { minimum, maximum, mean } from '../helper/Statistics.js';

const DescriptiveStatistics = ({ measurements }) => {
console.log(measurements);
  const filterDate = startDate();
console.log(filterDate);
  const dataset = arrayOfValues(measurements, filterDate);
console.log(dataset);
  return (
    <div>
      <h2>Descriptive Statistics</h2>
      <ul>
        {
          dataset.map((data, index) => {
            return (
              <li key={index}>{data}</li>
            );
          })
        }
      </ul>
    </div> 
  );
};

export default DescriptiveStatistics;
