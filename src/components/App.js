import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <p>Checkout Page</p>
          </Route>
          <Route path="/login">
            <p>Login Page</p>
          </Route>
          <Route path="/">
            <p>Home page</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
