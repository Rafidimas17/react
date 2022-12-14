import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home, Register, Login } from "../../pages";
// import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import MainApp from "../../pages/MainApp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
