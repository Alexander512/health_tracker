import axios from 'axios';

/**
 * ACTION TYPES
 */
const GET_MEASURES = 'GET_MEASURES';

/**
 * ACTION CREATORS
 */
const _getMeasures = (measures) => {
  return {
    type: GET_MEASURES,
    measures
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

/**
 * REDUCER
 */
export default function(state = [], action) {
  switch (action.type) {
    case GET_MEASURES:
      return action.measures;
    default:
      return state;
  }
}
