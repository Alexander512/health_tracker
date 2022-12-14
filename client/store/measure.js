import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_MEASURES = 'GET_MEASURES';
const CREATE_MEASURE = 'CREATE_MEASURE';
const DELETE_MEASURE = 'DELETE_MEASURE';
const UPDATE_MEASURE = 'UPDATE_MEASURE';

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

const _updateMeasure = (measure) => {
  return {
    type: UPDATE_MEASURE,
    measure
  };
};

/**
 * THUNK CREATORS
 */
export const getMeasures = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/measures', {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    const measures = response.data;
    dispatch(_getMeasures(measures));
  };
};

export const createMeasure = (measure, history) => {
  return async (dispatch) => {
    const response = await axios.post('/api/measures', measure, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    const newMeasure = response.data;
    dispatch(_createMeasure(newMeasure));
    history.push('/measures');
  };
};

export const deleteMeasure = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/measures/${id}`, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    dispatch(_deleteMeasure(id));
  };
};

export const updateMeasure = (measure, history) => {
  return async (dispatch) => {
    const response = await axios.put(`/api/measures/${measure.id}`, measure, {
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    });
    const updatedMeasure = response.data;
    dispatch(_updateMeasure(updatedMeasure));
    history.push('/measures');
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
    case UPDATE_MEASURE:
      const measures = state.filter((measure) => measure.id !== action.measure.id);
      return [ ...measures, action.measure ];
    default:
      return state;
  }
}
