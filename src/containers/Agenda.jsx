import React from "react";
import SmallHero from "../components/SmallHero";
import Timeline from "../components/Timeline";
import ListOfEvents from "../components/ListOfEvents";
import Footer from "../components/Footer";

const agenda = [
  // Usunac wszyelkie info o prowadzacym, zostawic tylko jego dowiazanie (id)
  {
    categoryId: 1,
    categoryTitle: "Wykłady",
    events: [
      {
        id: 1,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Reset",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "green",
        startDate: new Date(2020, 0, 1, 8, 0),
        endDate: new Date(2020, 0, 1, 8, 30),
      },
      {
        id: 2,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Sebastian",
        surname: "Kowalski",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "purple",
        startDate: new Date(2020, 0, 1, 8, 30),
        endDate: new Date(2020, 0, 1, 9, 20),
      },
      {
        id: 3,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Sebastian",
        surname: "Kowalski",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "pink",
        startDate: new Date(2020, 0, 1, 9, 30),
        endDate: new Date(2020, 0, 1, 10, 30),
      },
      {
        id: 4,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Sebastian",
        surname: "Kowalski",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "pink",
        startDate: new Date(2020, 0, 1, 11, 30),
        endDate: new Date(2020, 0, 1, 13, 0),
      },
      {
        id: 5,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Sebastian",
        surname: "Kowalski",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "green",
        startDate: new Date(2020, 0, 1, 13, 30),
        endDate: new Date(2020, 0, 1, 14, 20),
      },
    ],
  },
  {
    categoryId: 2,
    categoryTitle: "Warsztaty",
    events: [
      {
        id: 1,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Sebastian",
        surname: "Kowalski",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "green",
        startDate: new Date(2020, 0, 1, 8, 30),
        endDate: new Date(2020, 0, 1, 10, 0),
      },
      {
        id: 2,
        title: "Potwierdzenie swoją obecność na konferencji",
        description: "",
        room: "L107",
        name: "Sebastian",
        surname: "Kowalski",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "pink",
        startDate: new Date(1970, 10, 5, 9, 30),
        endDate: new Date(1970, 10, 5, 11, 0),
      },
    ],
  },
];

function Agenda() {
  return (
    <React.Fragment>
      <SmallHero />
      <main>
        <section id="timeline">
          <div className="container center">
            <h1>Agenda</h1>
            <div className="agenda">
              <Timeline agenda={agenda} />
              <ListOfEvents agenda={agenda} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Agenda;
