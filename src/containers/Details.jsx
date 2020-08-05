import React from "react";
import SmallHero from "../components/SmallHero";
import Footer from "../components/Footer";
import { HashLink } from "react-router-hash-link";

function Details() {
  return (
    <React.Fragment>
      <SmallHero />
      <main className="details">
        <section id="gift">
          <div className="container">
            <h1>Powitalna paczka</h1>
            <p>
              Podjęliśmy się organizacji konferencji Beskid IT Academic Day na
              Akademii Techniczno-Humanistycznej w Bielsku-Białej. Nieustannie
              staramy się rozwijać nasz event, jednocześnie dbając o to, aby
              uczestnicy, zarówno profesjonaliści, jak i amatorzy, wynieśli z
              tego dnia ogromne pokłady wiedzy.
            </p>
            <p>
              Jak i motywacji do jej dalszego poszerzania. Dodatkowo dbamy o to,
              aby to piątkowe spotkanie. Podjęliśmy się organizacji konferencji
              Beskid IT Academic Day na Akademii Techniczno-Humanistycznej w
              Bielsku-Białej. Nieustannie staramy się rozwijać nasz event,
              jednocześnie dbając.
            </p>
            <h2>Między innymi</h2>
            <ul>
              <li>
                Zaopatrzysz się w koszulkę o rozmiarze jaki wybierzesz podczas
                rejestracji (s/m/l/xl/xxl).
              </li>
              <li>
                Możesz się spodziewać wielu różności i ciekawych rzeczy jak
                zeszytu, długopisów lub nawet smyczy.
              </li>
              <li>
                Nieustannie staramy się rozwijać nasz event, jednocześnie
                dbając.
              </li>
            </ul>
          </div>
        </section>
        <section id="workshops">
          <div className="container">
            <h1>Warsztaty</h1>
            <p>
              Podjęliśmy się organizacji konferencji Beskid IT Academic Day na
              Akademii Techniczno-Humanistycznej w Bielsku-Białej. Nieustannie
              staramy się rozwijać nasz event, jednocześnie dbając o to, aby
              uczestnicy, zarówno profesjonaliści, jak i amatorzy, wynieśli z
              tego dnia ogromne pokłady wiedzy. Jak i motywacji do jej dalszego
              poszerzania. Dodatkowo dbamy o to, aby to piątkowe spotkanie.
            </p>
            <HashLink to={process.env.PUBLIC_URL + "/agenda#timeline"}>
              Link do Agenda
            </HashLink>
          </div>
        </section>
        <section id="game">
          <div className="container">
            <h1>Gra QR Code</h1>
            <p>
              Podjęliśmy się organizacji konferencji Beskid IT Academic Day na
              Akademii Techniczno-Humanistycznej w Bielsku-Białej. Nieustannie
              staramy się rozwijać nasz event, jednocześnie dbając o to, aby
              uczestnicy, zarówno profesjonaliści, jak i amatorzy, wynieśli z
              tego dnia ogromne pokłady wiedzy. Jak i motywacji do jej dalszego
              poszerzania. Dodatkowo dbamy o to, aby to piątkowe spotkanie.
            </p>
            <h2>Między innymi</h2>
            <ul>
              <li>
                Zaopatrzysz się w koszulkę o rozmiarze jaki wybierzesz podczas
                rejestracji (s/m/l/xl/xxl).
              </li>
              <li>
                Możesz się spodziewać wielu różności i ciekawych rzeczy jak
                zeszytu, długopisów lub nawet smyczy.
              </li>
              <li>
                Nieustannie staramy się rozwijać nasz event, jednocześnie
                dbając.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <h1>Regulamin</h1>
            <p>
              Podjęliśmy się organizacji konferencji Beskid IT Academic Day na
              Akademii Techniczno-Humanistycznej w Bielsku-Białej. Nieustannie
              staramy się rozwijać nasz event, jednocześnie dbając o to, aby
              uczestnicy, zarówno profesjonaliści, jak i amatorzy, wynieśli z
              tego dnia ogromne pokłady wiedzy. Jak i motywacji do jej dalszego
              poszerzania. Dodatkowo dbamy o to, aby to piątkowe spotkanie.
            </p>
            <HashLink to={process.env.PUBLIC_URL + "/agenda#timeline"}>
              Link do Regulaminu
            </HashLink>
          </div>
        </section>
        <section>
          <div className="container">
            <h1>Polityka Prywatności</h1>
            <p>
              Podjęliśmy się organizacji konferencji Beskid IT Academic Day na
              Akademii Techniczno-Humanistycznej w Bielsku-Białej. Nieustannie
              staramy się rozwijać nasz event, jednocześnie dbając o to, aby
              uczestnicy, zarówno profesjonaliści, jak i amatorzy, wynieśli z
              tego dnia ogromne pokłady wiedzy. Jak i motywacji do jej dalszego
              poszerzania. Dodatkowo dbamy o to, aby to piątkowe spotkanie.
            </p>
            <HashLink to={process.env.PUBLIC_URL + "/agenda#timeline"}>
              Link do Polityki Prywatności
            </HashLink>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Details;
