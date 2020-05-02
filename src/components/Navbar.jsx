import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ResetLogo from "./../assets/images/reset-logo.svg";

function Navbar() {
  const [ifOpen, setOpen] = useState(false);
  const noScroll = (e) => {
    const html = document.querySelector("html");
    if (e) {
      html.className = "no-scroll";
    } else {
      html.className = "";
    }
  };
  const onClickLink = () => {
    if (ifOpen) {
      setOpen(false);
      noScroll(!ifOpen);
    }
  };
  return (
    <nav className={ifOpen ? "open" : ""}>
      <div className="container">
        <NavLink
          to={process.env.PUBLIC_URL + "/"}
          className="nav-link"
          onClick={onClickLink}
        >
          <img src={ResetLogo} alt="Reset logo" />
        </NavLink>
        <div>
          <div className="nav-links">
            <NavLink
              exact
              to={process.env.PUBLIC_URL + "/"}
              className="nav-link"
              onClick={onClickLink}
            >
              O konferencji
            </NavLink>

            <HashLink
              to={process.env.PUBLIC_URL + "/#sponsors"}
              className="nav-link"
              onClick={onClickLink}
            >
              Sponsorzy
            </HashLink>

            <NavLink
              to={process.env.PUBLIC_URL + "/agenda"}
              className="nav-link"
              onClick={onClickLink}
            >
              Agenda
            </NavLink>

            <NavLink
              to={process.env.PUBLIC_URL + "/rejestracja"}
              className="nav-link button"
              onClick={onClickLink}
            >
              Rejestracja
            </NavLink>
          </div>
          <div
            className="hambuerger"
            onClick={() => {
              setOpen(!ifOpen);
              noScroll(!ifOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
