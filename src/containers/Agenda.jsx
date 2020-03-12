import React from "react";
import SmallHero from "../components/SmallHero";
import Footer from "../components/Footer";

function Agenda() {
  const time = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30"
  ];
  const agendaTime = time.map((e, i) => {
    i *= 2;
    let timeStyle = {
      gridColumnStart: i,
      gridColumnEnd: i + 2
    };
    return (
      <span style={timeStyle} key={e}>
        {e}
      </span>
    );
  });

  return (
    <React.Fragment>
      <SmallHero />
      <main>
        <section>
          <div className="container center">
            <h1>Agenda</h1>
            <div className="agenda">
              <h3>Wykłady</h3>
              <div className="timeline">
                <div className="timeline-scroll">
                  <div className="timeline-time">{agendaTime}</div>
                  <div className="timeline-elements">
                    <div className="element"></div>
                    <div className="element element1"></div>
                    <div className="element element2"></div>
                    <div className="element element3"></div>
                  </div>
                  <div className="timeline-time">{agendaTime}</div>
                  <div className="timeline-elements">
                    <div className="element"></div>
                    <div className="element element1"></div>
                    <div className="element element3"></div>
                  </div>
                  <div className="timeline-time">{agendaTime}</div>
                  <div className="timeline-elements">
                    <div className="element"></div>
                    <div className="element element1"></div>
                    <div className="element element3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Agenda;
