
import {
  FETCH_SEARCH_RESTAURANTS_PENDING,
  FETCH_SEARCH_RESTAURANTS_SUCCESS,
  FETCH_SEARCH_RESTAURANTS_FAIL,
} from './types';
import axios from '../apis/axios';

const fetchRestaurantStart = () => ({
  type: FETCH_SEARCH_RESTAURANTS_PENDING,
});

const fetchRestaurantSuccess = (data) => ({
  type: FETCH_SEARCH_RESTAURANTS_SUCCESS,
  payload: data,
});

const fetchRestaurantFail = (error) => ({
  type: FETCH_SEARCH_RESTAURANTS_FAIL,
  payload: error,
})

export const searchRestaurant = searchTerm => async dispatch => {
  dispatch(fetchRestaurantStart());
  try {
    const { data } = await axios.get(`/search`, {
      params: {
        location: 'Singapore',
        term: searchTerm,
        limit: 50
      }
    });
    dispatch(fetchRestaurantSuccess(data));
  } catch (error) {
    dispatch(fetchRestaurantFail(error.message));
  }
}