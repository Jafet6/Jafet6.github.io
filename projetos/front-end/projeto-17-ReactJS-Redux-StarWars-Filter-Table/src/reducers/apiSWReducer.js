import {
  API_REQUEST,
  API_RECEIVE_SUCCESS,
  API_RECEIVE_FAILURE,
} from '../actions/apiSWAction';

const INITIAL_STATE = {
  data: [],
  loading: true,
};

const apiSWReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_RECEIVE_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        loading: false,
      };
    case API_RECEIVE_FAILURE:
      return {
        ...state,
        error: action.errorMessage,
        loading: false,
      };
    default:
      return state;
  }
};

export default apiSWReducer;
