import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import ResetLogo from "./../assets/images/reset-logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/" className="nav-link">
          <img src={ResetLogo} alt="Reset logo" />
        </NavLink>
        <div>
          <NavLink exact to="/" className="nav-link">
            O konferencji
          </NavLink>
          <Link to="/#sponsors" className="nav-link">
            Sponsorzy
          </Link>
          <NavLink to="/agenda" className="nav-link">
            Agenda
          </NavLink>
          <NavLink to="/rejestracja" className="nav-link button">
            Rejestracja
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
