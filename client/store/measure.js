import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_MEASURES = 'GET_MEASURES';
const CREATE_MEASURE = 'CREATE_MEASURE';
const DELETE_MEASURE = 'DELETE_MEASURE';

/**
 * ACTION CREATORS
 */
const _getMeasures = (measures) => {
  return {
    type: GET_MEASURES,
    measures
  };
};

const _createMeasure = (measure) => {
  return {
    type: CREATE_MEASURE,
    measure
  };
};

const _deleteMeasure = (id) => {
  return {
    type: DELETE_MEASURE,
    id
  };
};

/**
 * THUNK CREATORS
 */
export const getMeasures = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/measures');
    const measures = response.data;
    dispatch(_getMeasures(measures));
  };
};

export const createMeasure = (measure) => {
  return async (dispatch) => {
    const response = await axios.post('/api/measures', measure);
    const newMeasure = response.data;
    dispatch(_createMeasure(newMeasure));
  };
};

export const deleteMeasure = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/measures/${id}`);
    dispatch(_deleteMeasure(id));
  };
};

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_MEASURES:
      return action.measures;
    case CREATE_MEASURE:
      return [ ...state, action.measure ];
    case DELETE_MEASURE:
      return state.filter((measure) => measure.id !== action.id);
    default:
      return state;
  }
}
