import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <NavBar />
            <Checkout />
          </Route>
          <Route path="/login">
            <NavBar />
            <Login />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
