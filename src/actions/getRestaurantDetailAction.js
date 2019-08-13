import {
  GET_RESTAURANT_DETAIL_PENDING,
  GET_RESTAURANT_DETAIL_SUCCESS,
  GET_RESTAURANT_DETAIL_FAIL,
} from './types';

import axios from '../apis/axios';

const getRestaurantDetailStart = () => ({
  type: GET_RESTAURANT_DETAIL_PENDING,
});

const getRestaurantDetailSuccess = (data) => ({
  type: GET_RESTAURANT_DETAIL_SUCCESS,
  payload: data,
});

const getRestaurantDetailFail = (error) => ({
  type: GET_RESTAURANT_DETAIL_FAIL,
  payload: error,
})

export const getRestaurantDetail = id => async dispatch => {
  dispatch(getRestaurantDetailStart());
  try {
    const { data } = await axios.get(`/${id}`);
    dispatch(getRestaurantDetailSuccess(data));
  } catch (error) {
    dispatch(getRestaurantDetailFail(error.message));
  }
}

