import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ResetLogo from "./../assets/images/reset-logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <NavLink to={process.env.PUBLIC_URL + "/"} className="nav-link">
          <img src={ResetLogo} alt="Reset logo" />
        </NavLink>
        <div>
          <NavLink exact to={process.env.PUBLIC_URL + "/"} className="nav-link">
            O konferencji
          </NavLink>
          <HashLink
            to={process.env.PUBLIC_URL + "/#sponsors"}
            className="nav-link"
          >
            Sponsorzy
          </HashLink>
          <NavLink to={process.env.PUBLIC_URL + "/agenda"} className="nav-link">
            Agenda
          </NavLink>
          <NavLink
            to={process.env.PUBLIC_URL + "/rejestracja"}
            className="nav-link button"
          >
            Rejestracja
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
