import React from "react";
import SmallHero from "../components/SmallHero";
import Footer from "../components/Footer";

function Agenda() {
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
                  <div className="timeline-elements"></div>
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
