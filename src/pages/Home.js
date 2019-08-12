import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchRestaurant } from '../actions';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import RestaurantList from '../components/RestaurantList';



const propTypes = {
  onSearchRestaurant: PropTypes.func.isRequired,
}


const Home = ({ restaurants, onSearchRestaurant }) => {
  const { businesses } = restaurants.data;

  const filterShopsbyPrice = (price) => {
    return businesses.filter(shop => shop.price === price)
  }
  return (
    <div>
      <Header />
      <SearchBar searchTermChange={onSearchRestaurant} />

      {businesses &&
        <>
          <h3>Low Price</h3>
          <RestaurantList restaurants={filterShopsbyPrice('$')} />
        </>
      }
      {businesses &&
        <>
          <h3>Medium Price</h3>
          <RestaurantList restaurants={filterShopsbyPrice('$$')} />
        </>
      }
      {businesses &&
        <>
          <h3>High Price</h3>
          <RestaurantList restaurants={filterShopsbyPrice('$$$')} />
        </>
      }
      <Footer />
    </div>
  )
}

Home.propTypes = propTypes;

const mapStateToProps = (state) => {
  console.log('Central State', state);
  return {
    restaurants: state.restaurantsReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchRestaurant: term => dispatch(searchRestaurant(term)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
