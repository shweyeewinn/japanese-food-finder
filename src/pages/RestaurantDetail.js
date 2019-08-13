import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRestaurantDetail } from '../actions/getRestaurantDetailAction';

const propTypes = {
  getShopDetail: PropTypes.func.isRequired,
}

class RestaurantDetail extends Component {

  componentDidMount() {
    const { getShopDetail, match } = this.props;

    getShopDetail(match.params.id);
  }

  render() {
    const { restaurantDetail } = this.props;
    return (
      <div>
        <h2>RestaurantDetail</h2>
        <p>{restaurantDetail.data.name}</p>
      </div>
    )
  }
}
RestaurantDetail.propTypes = propTypes;

const mapStateToProps = (state) => {
  console.log('State in detail page:', state);
  return {
    restaurantDetail: state.restaurantDetailReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getShopDetail: id => dispatch(getRestaurantDetail(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantDetail);