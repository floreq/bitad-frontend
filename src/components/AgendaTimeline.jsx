import React from "react";
import { Link } from "react-router-dom";

function AgendaTimeline(props) {
  const agenda = [
    {
      id: 1,
      category: "Warsztaty",
      timeline: [
        { id: 1, title: "", description: "", room: "", name: "", surname: "" }
      ]
    },
    {
      id: 2,
      category: "Warsztaty",
      timeline: [
        { id: 1, title: "", description: "", room: "", name: "", surname: "" }
      ]
    }
  ];
  const timeline = listId =>
    listSponsors[listId - 1].sponsors.map(e => {
      return (
        <Link key={e.id} to={e.link}>
          <img src={process.env.PUBLIC_URL + e.location} alt={e.alt} />
        </Link>
      );
    });
  const list = listSponsors.map(e => {
    return (
      <React.Fragment key={e.id}>
        <h3>{e.title}</h3>
        <div className="list">{sponsors(e.id)}</div>
      </React.Fragment>
    );
  });

  return <div className="list-of-sponsors">{list}</div>;
}

export default AgendaTimeline;
