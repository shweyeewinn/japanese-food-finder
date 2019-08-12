import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/restaurant/:id" component={RestaurantDetail} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
