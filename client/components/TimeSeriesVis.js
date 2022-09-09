import React from 'react';
import { VegaLite } from 'react-vega';
import startDate from '../helper/startDate.js';
import endDate from '../helper/endDate.js';

const TimeSeriesVis = ({ measure, measurements }) => {

  const startDateScale = startDate(); 
  const endDateScale = endDate();

  const measurementData = {
    measurements: measurements
  };

  const spec = {
    data: { name: 'measurements' },
    mark: { type: 'point', clip: true, filled: true },
    height: 300,
    width: 'container',
    encoding: {
      x: { 
        field: 'dateEntered', 
        type: 'temporal',
        title: 'date',
        scale: { type: 'utc', nice: 'day', domain: [ startDateScale, endDateScale ], padding: 10 },
        axis: { grid: true, tickCount: { interval: 'day', step: 1 } }
      },
      y: { 
        field: 'value', 
        type: 'quantitative', 
        title: `value (${measure.unit})`,
        scale: { padding: 100 }
      },
      color: { value: '#00008B' },
      size: { value: 50},
      tooltip: [
        { field: 'value', type: 'quantitative' },
        { field: 'dateEntered', type: 'temporal', scale: { type: 'utc' } }
      ]
    },
    title: { text: `${measure.name} for the last 30 days`, fontSize: 16 }
  };

  return (
    <VegaLite actions={false} data={measurementData} spec={spec} />
  );
};

export default TimeSeriesVis;
