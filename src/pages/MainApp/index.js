import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Header from "../../components/molecules/Header";
import Footer from "../../components/molecules/Footer";
import "./mainApp.scss";
const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />

      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/detail-blog">
            <DetailBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default MainApp;
