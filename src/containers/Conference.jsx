import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ListOfElements from "../components/ListOfElements";
import ListOfSponsors from "../components/ListOfSponsors";
import ListOfOrganisers from "../components/ListOfOrganisers";
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
      fintOutMore: "/"
    },
    {
      id: 2,
      image: "/images/keyboard.svg",
      alt: "Prezent",
      title: "Warsztatów",
      description:
        "Warsztaty mają na celu zaprezentowanie podstaw tematów będących na czasie w praktyce.",
      fintOutMore: "/"
    },
    {
      id: 3,
      image: "/images/gamepad.svg",
      alt: "Prezent",
      title: "Gry QR Code",
      description:
        "Baw się z nami i zdobywaj punkty podczas udziału w prelekcjach i warsztatach. ",
      fintOutMore: "/"
    }
  ];
  const listSponsors = [
    {
      categoryId: 1,
      categoryTitle: "Diamentowi sponsorzy",
      sponsors: [
        {
          id: 1,
          image: "/images/sponsors/next.svg",
          alt: "next",
          link: "/"
        },
        {
          id: 2,
          image: "/images/sponsors/iteo.svg",
          alt: "iteo",
          link: "/"
        },
        {
          id: 3,
          image: "/images/sponsors/4experience.svg",
          alt: "4experience",
          link: "/"
        }
      ]
    },
    {
      categoryId: 2,
      categoryTitle: "Złoci sponsorzy",
      sponsors: [
        {
          id: 1,
          image: "/images/sponsors/rekord.svg",
          alt: "rekord",
          link: "/"
        },
        {
          id: 2,
          image: "/images/sponsors/nav24.svg",
          alt: "nav24",
          link: "/"
        }
      ]
    },
    {
      categoryId: 3,
      categoryTitle: "Srebrni sponsorzy",
      sponsors: [
        {
          id: 1,
          image: "/images/sponsors/imgnpro.svg",
          alt: "imgnpro",
          link: "/"
        },
        {
          id: 2,
          image: "/images/sponsors/helion.svg",
          alt: "helion",
          link: "/"
        }
      ]
    }
  ];
  const listOrganisers = [
    {
      id: 1,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organisers/sebastian-kowalski.jpg",
      alt: ""
    },
    {
      id: 2,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organisers/sebastian-kowalski.jpg",
      alt: ""
    },
    {
      id: 3,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organisers/sebastian-kowalski.jpg",
      alt: ""
    },
    {
      id: 4,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organisers/sebastian-kowalski.jpg",
      alt: ""
    },
    {
      id: 5,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organisers/sebastian-kowalski.jpg",
      alt: ""
    },
    {
      id: 6,
      degree: "mgr inż.",
      name: "Sebastian",
      surname: "Kowalski",
      description: "Opiekun koła Reset oraz prelegent w lokalnej bibliotece.",
      image: "/images/organisers/sebastian-kowalski.jpg",
      alt: ""
    }
  ];
  return (
    <React.Fragment>
      <Hero />
      <main id="conference">
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
          <div className="container two-columns">
            <div>
              <ListOfSponsors listSponsors={listSponsors} />
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
            <ListOfOrganisers listOrganisers={listOrganisers} />
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Conference;
