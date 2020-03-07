import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import ResetLogo from "./../assets/images/reset-logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">
          <img src={ResetLogo} alt="Reset logo" />
        </NavLink>
        <div>
          <NavLink exact to="/">
            O konferencji
          </NavLink>
          <Link to="/#sponsors">Sponsorzy</Link>
          <NavLink to="/agenda">Agenda</NavLink>
          <NavLink to="/rejestracja" className="button">
            Rejestracja
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
