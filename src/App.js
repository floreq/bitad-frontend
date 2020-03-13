import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Conference from "./containers/Conference";
import Agenda from "./containers/Agenda";
import Registration from "./containers/Registration";
import "./stylesheets/main.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Conference />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/agenda"}>
          <Agenda />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/rejestracja"}>
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
