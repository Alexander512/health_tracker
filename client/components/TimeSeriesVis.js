import React from 'react';
import { VegaLite } from 'react-vega';

const TimeSeriesVis = ({ measurements }) => {

  const spec = {
    layer: [
      {
        height: 300,
        width: 'container',
        mark: { type: 'point', filled: true, tooltip: true },
        encoding: {
          x: { field: 'id', type: 'nominal' },
          y: { field: 'value', type: 'quantitative', scale: { domain: [ 0, 200 ] }},
          color: {
            value: 'blue'
          }
        },
        data: { name: 'measurements' }
      },
      {
        data: { values: [{}] },
        mark: { type: 'rule', color: 'grey', size: 2 },
        encoding: {
          y: { datum: 60 }
        }
      },
      {
        data: { values: [{}] },
        mark: { type: 'rule', color: 'grey', size: 2 },
        encoding: {
          y: { datum: 100 }
        }
      }
    ]
  };

  const measurementData = {
    measurements: measurements
  };

  return (
    <div id='timeSeriesVis'>
      <h2>Time Series Visualization</h2>
      <VegaLite spec={spec} data={measurementData} />
    </div>
  );
};

export default TimeSeriesVis;
