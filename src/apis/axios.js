import axios from 'axios';

const KEY = '2T1ZBJhp6cTSngeHsa2YkY6eucpJpH6BNk3OoRkri6et3rYtQLZvIugElFhScez332InjFYq9GEj4sW1UGe5nhh_AM0MWVdrrjwYukhHNuWVvr0CaQuNt2KNa_VQXXYx';

export default axios.create({
  baseURL: 'http://localhost:8080/https://api.yelp.com/v3/businesses',
  headers: { 'Authorization': `Bearer ${KEY}` }
});