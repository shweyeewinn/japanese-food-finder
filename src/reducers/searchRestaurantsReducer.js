import {
  FETCH_SEARCH_RESTAURANTS_PENDING,
  FETCH_SEARCH_RESTAURANTS_SUCCESS,
  FETCH_SEARCH_RESTAURANTS_FAIL,
} from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESTAURANTS_PENDING:
      return {
        ...state,
        data: [],
        loading: true,
        error: null,
      };
    case FETCH_SEARCH_RESTAURANTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_SEARCH_RESTAURANTS_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};