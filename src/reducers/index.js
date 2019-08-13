import { combineReducers } from 'redux';

import restaurantsReducer from './searchRestaurantsReducer';
import restaurantDetailReducer from './getRestaurantDetailReducer';

export default combineReducers({
  restaurantsReducer,
  restaurantDetailReducer,
});