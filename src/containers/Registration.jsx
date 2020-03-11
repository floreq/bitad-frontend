import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import BitadLogo from "./../assets/images/bitad-logo.svg";
import Footer from "../components/Footer";

function Registration() {
  return (
    <React.Fragment>
      <section id="registration" className="registration">
        <div className="container two-columns">
          <div>
            <div className="introduction">
              <h3 className="subtitle">
                20 marca 2020, na terenie uczelni ATH w Bielsku-Białej
              </h3>
              <h1>Rejestracja na konferencję</h1>
            </div>
            <form action="">
              <div className="name">
                <label>
                  Imię
                  <input type="text" />
                </label>
                <label>
                  Nazwisko
                  <input type="text" />
                </label>
              </div>
              <div className="email">
                <label>
                  Adres e-mail
                  <input type="text" />
                </label>
              </div>
              <div className="password">
                <label>
                  Hasło
                  <Link to="/">(Dlaczego prosimy Ciebie o podanie hasła?)</Link>
                  <input type="text" />
                </label>
              </div>
              <div className="password">
                <label>
                  Powtórz hasło
                  <input type="text" />
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </label>
              </div>
              {/* <div class="checkbox">
                <input type="checkbox" id="checkbox_1" />
                <label for="checkbox_1">Pure CSS Checkbox</label>
              </div> */}
              <button className="button">Potwierdź rejestracje</button>
            </form>
          </div>
          <img src={BitadLogo} alt="Bitad logo" />
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Registration;
