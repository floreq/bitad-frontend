import React, { Component } from "react";
import BitadLogo from "./../assets/images/bitad-logo.svg";
import Footer from "../components/Footer";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: {
          value: "",
        },
        surname: {
          value: "",
        },
        email: {
          value: "",
        },
        password: {
          value: "",
        },
        rpassword: {
          value: "",
        },
        terms: {
          value: false,
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = name === "terms" ? target.checked : target.value;
    this.setState({
      form: {
        ...this.state.form,
        [name]: {
          ...this.state.form[name],
          value,
        },
      },
    });
  };
  handleSubmit(event) {
    console.log(this.state.form);
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <main>
          <section className="registration">
            <div className="container two-columns">
              <div>
                <div className="introduction">
                  <h1>Rejestracja na konferencję</h1>
                  <p>{process.env.REACT_APP_SUBTITLE}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="personal-info">
                    <div className="field-wrapper">
                      <label>
                        Imię
                        <input
                          type="text"
                          name="name"
                          value={this.state.form.name.value}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label>
                        Nazwisko
                        <input
                          type="text"
                          name="surname"
                          value={this.state.form.surname.value}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div className="field-wrapper full-size-field">
                      <label>
                        Adres e-mail
                        <input
                          type="email"
                          name="email"
                          value={this.state.form.email.value}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div className="field-wrapper">
                      <label>
                        Hasło
                        <input
                          type="password"
                          name="password"
                          value={this.state.form.password.value}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label>
                        Powtórz hasło
                        <input
                          type="password"
                          name="rpassword"
                          value={this.state.form.rpassword.value}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="terms">
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="terms"
                        checked={this.state.form.terms.value}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="checkbox1">
                        Zapoznałem/am się z Polityką Prywatności oraz z
                        Regulaminem.
                      </label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        name="terms"
                        checked={this.state.form.terms.value}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="checkbox2">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych
                        dla potrzeb niezbędnych do udziału w konferencji.
                      </label>
                    </div>
                  </div>
                  <input className="button" type="submit" value="Zapisz się" />
                </form>
              </div>
              <img
                className="registration-image"
                src={BitadLogo}
                alt="Bitad logo"
              />
            </div>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Registration;
