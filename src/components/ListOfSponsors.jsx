import React from "react";
import { Link } from "react-router-dom";

function ListOfSponsors(props) {
  const sponsors = listId =>
    props.listSponsors[listId - 1].sponsors.map(e => {
      return (
        <Link key={e.id} to={e.link}>
          <img src={process.env.PUBLIC_URL + e.location} alt={e.alt} />
        </Link>
      );
    });
  const list = props.listSponsors.map(e => {
    return (
      <React.Fragment key={e.id}>
        <h3>{e.title}</h3>
        <div className="list sponsors">{sponsors(e.id)}</div>
      </React.Fragment>
    );
  });

  return <div className="list-of-sponsors">{list}</div>;
}

export default ListOfSponsors;
