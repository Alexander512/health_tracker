import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_MEASUREMENTS = 'GET_MEASUREMENTS';
const CREATE_MEASUREMENT = 'CREATE_MEASUREMENT';

/**
 * ACTION CREATORS
 */
const _getMeasurements = (measurements) => {
  return {
    type: GET_MEASUREMENTS,
    measurements
  };
};

const _createMeasurement = (measurement) => {
  return {
    type: CREATE_MEASUREMENT,
    measurement
  };
};

/**
 * THUNK CREATORS
 */
export const getMeasurements = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/measurements/${id}`);
    const measurements = response.data;
    dispatch(_getMeasurements(measurements));
  };
};

export const createMeasurement = (measurement) => {
  return async (dispatch) => {
    const response = await axios.post('/api/measurements', measurement);
    const newMeasurement = response.data;
    dispatch(_createMeasurement(newMeasurement));
  };
};

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_MEASUREMENTS:
      return action.measurements;
    case CREATE_MEASUREMENT:
      return [ ...state, action.measurement ];
    default:
      return state;
  }
}
