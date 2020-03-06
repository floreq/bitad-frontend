import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ListOfElements from "../components/ListOfElements";
import Lectures from "./../assets/images/lectures.jpg";
import Workshop from "./../assets/images/workshop.jpg";

function Conference() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <main>
        <section>
          <div className="container two-columns">
            <div>
              <h1>
                Spotykamy się już
                <br />
                kolejny, 10 raz
              </h1>
              <p>
                Podjęliśmy się organizacji konferencji Beskid IT Academic Day na
                Akademii Techniczno-Humanistycznej w Bielsku-Białej.
              </p>
              <p>
                Nieustannie staramy się rozwijać nasz event, jednocześnie dbając
                o to, aby uczestnicy, zarówno profesjonaliści, jak i amatorzy,
                wynieśli z tego dnia ogromne pokłady wiedzy.
              </p>
              <p>
                Jak i motywacji do jej dalszego poszerzania. Dodatkowo dbamy o
                to, aby to piątkowe spotkanie.
              </p>
            </div>
            <div className="image-container">
              <img src={Lectures} className="shadow" alt="Wyklady" />
              <div className="bg"></div>
            </div>
          </div>
        </section>
        <section className="half-gray center">
          <div className="container">
            <h1>Możesz się u nas spodziewać*</h1>
            <p className="half-right">
              *Oczywiście również o wiele, wiele więcej.
            </p>
            <ListOfElements />
          </div>
        </section>
        <section>
          <div className="container center">
            <h1>Ciągle rozwijamy się dla Ciebie</h1>
            <p>
              Jak i motywacji do jej dalszego poszerzania. Dodatkowo dbamy o to,
              aby to piątkowe spotkanie było przede wszystkim. Mile spędzonym
              czasem, dlatego wzbogaciliśmy konferencję o dodatkowe atrakcje.
            </p>
            <img src={Workshop} className="shadow" alt="Warsztaty" />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Conference;
