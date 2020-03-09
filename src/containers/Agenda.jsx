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
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Agenda;
