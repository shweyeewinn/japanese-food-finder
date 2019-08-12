import React from 'react';
import { Link } from "react-router-dom";

const restaurantsListShow = (restaurants) => {
  if (restaurants) {
    return restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <Link to={`/restaurant/${restaurant.id}`}>
          <h3>{restaurant.name}</h3>
          <img style={{ width: '200px' }} alt={restaurant.alias} src={restaurant.image_url} />
        </Link>
      </li>
    ))
  }
}
const RestaurantList = (props) => {
  const { restaurants } = props;
  return (
    <div>
      <ul>{restaurantsListShow(restaurants)}</ul>
    </div>
  );
}
export default RestaurantList;