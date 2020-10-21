import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Checkout from "./Checkout";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
