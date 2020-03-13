import React from "react";
import BitadLogo from "./../assets/images/bitad-logo.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <img src={BitadLogo} alt="Bitad logo" />
        <h3 className="subtitle">{process.env.REACT_APP_SUBTITLE}</h3>
        <h1 className="title">{process.env.REACT_APP_TITLE}</h1>
        <Link
          to={process.env.PUBLIC_URL + "/rejestracja"}
          className="hero-button"
        >
          Zapisz się już teraz!
        </Link>
      </div>
    </header>
  );
}

export default Hero;
