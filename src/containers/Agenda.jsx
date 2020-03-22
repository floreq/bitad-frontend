import React from "react";
import SmallHero from "../components/SmallHero";
import Timeline from "../components/Timeline";
import ListOfEvents from "../components/ListOfEvents";
import Footer from "../components/Footer";

const agenda = [
  {
    categoryId: 1,
    categoryTitle: "Wykłady",
    events: [
      {
        id: 1,
        title: "",
        description: "",
        room: "",
        name: "",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "green",
        startDate: new Date(2020, 0, 1, 8, 0),
        endDate: new Date(2020, 0, 1, 8, 30)
      },
      {
        id: 2,
        title: "",
        description: "",
        room: "",
        name: "",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "purple",
        startDate: new Date(2020, 0, 1, 8, 30),
        endDate: new Date(2020, 0, 1, 9, 20)
      },
      {
        id: 3,
        title: "",
        description: "",
        room: "",
        name: "",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "pink",
        startDate: new Date(2020, 0, 1, 9, 30),
        endDate: new Date(2020, 0, 1, 10, 30)
      },
      {
        id: 4,
        title: "",
        description: "",
        room: "",
        name: "",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "pink",
        startDate: new Date(2020, 0, 1, 12, 30),
        endDate: new Date(2020, 0, 1, 13, 30)
      },
      {
        id: 5,
        title: "",
        description: "",
        room: "",
        name: "",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "green",
        startDate: new Date(2020, 0, 1, 14, 0),
        endDate: new Date(2020, 0, 1, 15, 0)
      }
    ]
  },
  {
    categoryId: 2,
    categoryTitle: "Warsztaty",
    events: [
      {
        id: 1,
        title: "",
        description: "",
        room: "",
        name: "",
        surname: "",
        image: "/images/organisers/sebastian-kowalski.jpg",
        alt: "Sebastian Kowalski",
        color: "green",
        startDate: new Date(2020, 0, 1, 9, 30),
        endDate: new Date(2020, 0, 1, 10, 0)
      }
    ]
  }
];

function Agenda() {
  return (
    <React.Fragment>
      <SmallHero />
      <main>
        <section>
          <div className="container center">
            <h1>Agenda</h1>
            <div className="agenda">
              <Timeline agenda={agenda} />
              <ListOfEvents />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Agenda;
