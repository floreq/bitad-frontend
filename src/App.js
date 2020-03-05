import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Conference from "./containers/Conference";
import Agenda from "./containers/Agenda";
import Registration from "./containers/Registration";
import "./stylesheets/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Conference} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/rejestracja" component={Registration} />
        </Switch>
      </Router>
    );
  }
}

export default App;
