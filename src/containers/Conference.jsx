import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ListOfElements from "../components/ListOfElements";
import ListOfSponsors from "../components/ListOfSponsors";
import Lectures from "./../assets/images/lectures.jpg";
import Workshop from "./../assets/images/workshop.jpg";

function Conference() {
  const listElements = [
    {
      id: 1,
      location: "/images/gift.svg",
      alt: "Prezent",
      title: "Powitalnej paczki",
      text:
        "Dlatego każdy z Was zaraz po potwierdzeniu swojej obecności na konferencji będzie czekała powitalna paczka.",
      fintOutMore: "/"
    },
    {
      id: 2,
      location: "/images/keyboard.svg",
      alt: "Prezent",
      title: "Warsztatów",
      text:
        "Warsztaty mają na celu zaprezentowanie podstaw tematów będących na czasie w praktyce.",
      fintOutMore: "/"
    },
    {
      id: 3,
      location: "/images/gamepad.svg",
      alt: "Prezent",
      title: "Gry QR Code",
      text:
        "Baw się z nami i zdobywaj punkty podczas udziału w prelekcjach i warsztatach. ",
      fintOutMore: "/"
    }
  ];
  const listSponsors = [
    {
      id: 1,
      title: "Diamentowi sponsorzy",
      sponsors: [
        {
          id: 1,
          location: "/images/sponsors/next.svg",
          alt: "next",
          link: "/"
        },
        {
          id: 2,
          location: "/images/sponsors/iteo.svg",
          alt: "iteo",
          link: "/"
        },
        {
          id: 3,
          location: "/images/sponsors/4experience.svg",
          alt: "4experience",
          link: "/"
        }
      ]
    },
    {
      id: 2,
      title: "Złoci sponsorzy",
      sponsors: [
        {
          id: 1,
          location: "/images/sponsors/rekord.svg",
          alt: "rekord",
          link: "/"
        },
        {
          id: 2,
          location: "/images/sponsors/nav24.svg",
          alt: "nav24",
          link: "/"
        }
      ]
    },
    {
      id: 3,
      title: "Srebrni sponsorzy",
      sponsors: [
        {
          id: 1,
          location: "/images/sponsors/imgnpro.svg",
          alt: "imgnpro",
          link: "/"
        },
        {
          id: 2,
          location: "/images/sponsors/helion.svg",
          alt: "helion",
          link: "/"
        }
      ]
    }
  ];
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
        <section id="sponsors" className="helf-neutral">
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
          <h1>Organizatorzy</h1>
          <p>
            {" "}
            Jak i motywacji do jej dalszego poszerzania. Dodatkowo dbamy o to,
            aby to piątkowe spotkanie było przede wszystkim. Mile spędzonym
            czasem, dlatego wzbogaciliśmy konferencję o dodatkowe atrakcje.{" "}
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Conference;
