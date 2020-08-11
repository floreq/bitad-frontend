import React from "react";
import { Link } from "react-router-dom";

function ListOfEvents(props) {
  const agenda = props.agenda;
  const events = (categoryId) =>
    agenda[categoryId - 1].events.map((e) => {
      return (
        <div id={e.id} key={e.id} className="event shadow">
          <div className="coordinate">
            <span className="small-span">
              Sala
              <br />
              {e.room}
            </span>
            <span className="small-span">08:00-09:00</span>
          </div>
          <p className="bold">{e.title}</p>
          <div className={`credentials light-${e.color}`}>
            <div className={`image-wrapper ${e.color}`}>
              <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
            </div>
            <div>
              <span>{`${e.name} ${e.surname}`}</span>
              <span className="small-span">Organizatorzy</span>
            </div>
          </div>
          <Link to="/">Dowiedz się więcej</Link>
        </div>
      );
    });
  const list = agenda.map((e) => {
    return (
      <React.Fragment key={e.categoryId}>
        <h3>{e.categoryTitle}</h3>
        <div className="list list-of-events">{events(e.categoryId)}</div>
      </React.Fragment>
    );
  });
  return <div>{list}</div>;
}

export default ListOfEvents;
