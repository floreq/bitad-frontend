import React from "react";
import BitadLogo from "./../assets/images/bitad-logo.svg";
import { Link } from "react-router-dom";

function SmallHero() {
  return (
    <header className="small-hero">
      <div className="container two-columns">
        <div>
          <h3 className="subtitle">
            20 marca 2020, na terenie uczelni ATH w Bielsku-Białej
          </h3>
          <h1 className="title">Konferencja Informatyczna</h1>
          <Link to="/rejestracja" className="hero-button">
            Zapisz się już teraz!
          </Link>
        </div>
        <img src={BitadLogo} alt="Bitad logo" />
      </div>
    </header>
  );
}

export default SmallHero;
