import React from 'react';
import startDate from '../helper/startDate.js';
import arrayOfValues from '../helper/arrayOfValues.js';
import { minimum, maximum, mean } from '../helper/Statistics.js';

const DescriptiveStatistics = ({ measurements }) => {

  const filterDate = startDate();
  const dataset = arrayOfValues(measurements, filterDate);

  const minValue = minimum(...dataset);
  const maxValue = maximum(...dataset);
  const meanValue = mean(...dataset);

  return (
    <div id='flexContainerStatistics'>
      <span className='flexItemStatistics'>
        <strong>Minimum:&nbsp;</strong> 
        {minValue !== Infinity ? minValue.toFixed(2) : 'no data'}
      </span>
      <span className='flexItemStatistics'>
        <strong>Maximum:&nbsp;</strong> 
        {maxValue !== -Infinity ? maxValue.toFixed(2) : 'no data'}
      </span>
      <span className='flexItemStatistics'>
        <strong>Mean:&nbsp;</strong> 
        {!Number.isNaN(meanValue) ? meanValue.toFixed(2) : 'no data'}
      </span>
    </div> 
  );
};

export default DescriptiveStatistics;
