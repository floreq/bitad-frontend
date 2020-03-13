import React from "react";
import { Link } from "react-router-dom";

function ListOfSponsors(props) {
  const listSponsors = props.listSponsors;
  const sponsors = categoryId =>
    listSponsors[categoryId - 1].sponsors.map(e => {
      return (
        <Link key={e.id} to={e.link}>
          <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
        </Link>
      );
    });
  const list = listSponsors.map(e => {
    return (
      <React.Fragment key={e.categoryId}>
        <h3>{e.categoryTitle}</h3>
        <div className="list sponsors">{sponsors(e.categoryId)}</div>
      </React.Fragment>
    );
  });

  return <div className="list-of-sponsors">{list}</div>;
}

export default ListOfSponsors;
