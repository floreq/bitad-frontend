import React from "react";
import BitadLogo from "./../assets/images/bitad-logo.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <img src={BitadLogo} alt="Bitad logo" />
        <h3 className="subtitle">
          20 marca 2020, na terenie uczelni ATH w Bielsku-Białej
        </h3>
        <h1 className="title">Konferencja Informatyczna</h1>
        <Link to="/rejestracja" className="hero-button">
          Zapisz się już teraz!
        </Link>
      </div>
    </header>
  );
}

export default Hero;
