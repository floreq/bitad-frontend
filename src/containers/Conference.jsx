import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ListOfElements from "../components/ListOfElements";
import ListOfSponsors from "../components/ListOfSponsors";
import ListOfOrganizers from "../components/ListOfOrganizers";
import Lectures from "./../assets/images/lectures.jpg";
import Workshop from "./../assets/images/workshop.jpg";

function Conference() {
  const listElements = [
    {
      id: 1,
      image: "/images/gift.svg",
      alt: "Prezent",
      title: "Powitalnej paczki",
      description:
        "Dlatego każdy z Was zaraz po potwierdzeniu swojej obecności na konferencji będzie czekała powitalna paczka.",
      fintOutMore: "/details#gift",
    },
    {
      id: 2,
      image: "/images/keyboard.svg",
      alt: "Klawiatura",
      title: "Warsztatów",
      description:
        "Warsztaty mają na celu zaprezentowanie podstaw tematów będących na czasie w praktyce.",
      fintOutMore: "/details#workshops",
    },
    {
      id: 3,
      image: "/images/gamepad.svg",
      alt: "Kontroler",
      title: "Gry QR Code",
      description:
        "Baw się z nami i zdobywaj punkty podczas udziału w prelekcjach i warsztatach. ",
      fintOutMore: "/details#game",
    },
  ];
  const listOrganisers = [
    {
      id: 1,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organizers/sebastian-kowalski.jpg",
      alt: "",
    },
    {
      id: 2,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organizers/sebastian-kowalski.jpg",
      alt: "",
    },
    {
      id: 3,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organizers/sebastian-kowalski.jpg",
      alt: "",
    },
    {
      id: 4,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organizers/sebastian-kowalski.jpg",
      alt: "",
    },
    {
      id: 5,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organizers/sebastian-kowalski.jpg",
      alt: "",
    },
    {
      id: 6,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organizers/sebastian-kowalski.jpg",
      alt: "",
    },
  ];

  // Organizers
  const [organizersError, setOrganizersError] = useState(null);
  const [isOrganizersLoaded, setIsOrganizersLoaded] = useState(false);
  const [organizers, setOrganizers] = useState([]);
  // Pull from API
  useEffect(() => {
    fetch(
      process.env.REACT_APP_BACKEND + "wp-json/wp/v2/organizers?per_page=100"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setOrganizers(result);
          setIsOrganizersLoaded(true);
        },
        (error) => {
          setOrganizersError(error);
          setIsOrganizersLoaded(true);
        }
      );
  }, []);
  // Fetch Sponsors
  const [sponsorsError, setSponsorsError] = useState(null);
  const [isSponsorsLoaded, setIsSponsorsLoaded] = useState(false);
  const [sponsors, setSponsors] = useState([]);
  // Pull from API
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "wp-json/wp/v2/sponsors?per_page=100")
      .then((res) => res.json())
      .then(
        (result) => {
          setSponsors(result);
          setIsSponsorsLoaded(true);
        },
        (error) => {
          setSponsorsError(error);
          setIsSponsorsLoaded(true);
        }
      );
  }, []);

  return (
    <React.Fragment>
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
            <div className="image-indicator">
              <img src={Lectures} className="shadow" alt="Wyklady" />
              <div className="indicator"></div>
            </div>
          </div>
        </section>
        <section className="half-gray center">
          <div className="container">
            <h1>Możesz się u nas spodziewać*</h1>
            <p className="half-right">
              *Oczywiście również o wiele, wiele więcej.
            </p>
            <ListOfElements listElements={listElements} />
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
        <section id="sponsors" className="half-neutral">
          <div className="container two-columns reverse">
            <div>
              <ListOfSponsors
                sponsors={sponsors}
                error={sponsorsError}
                isLoaded={isSponsorsLoaded}
              />
            </div>
            <div>
              <h1>
                Konferencja jest
                <br />
                możliwa dzięki Nim!
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
          </div>
        </section>
        <section className="center">
          <div className="container">
            <h1>Organizatorzy</h1>
            <p>
              Jak i motywacji do jej dalszego poszerzania. Dodatkowo dbamy o to,
              aby to piątkowe spotkanie było przede wszystkim. Mile spędzonym
              czasem, dlatego wzbogaciliśmy konferencję o dodatkowe atrakcje.
            </p>
            <ListOfOrganizers
              listOrganisers={listOrganisers}
              organizers={organizers}
              error={organizersError}
              isLoaded={isOrganizersLoaded}
            />
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Conference;
