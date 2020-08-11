import React from "react";
import { Link } from "react-router-dom";

function ListOfPatrons(props) {
  const list = props.listPatrons.map(e => {
    return (
      <Link key={e.id} to={e.link}>
        <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
      </Link>
    );
  });
  return <div className="list list-of-patrons">{list}</div>;
}

export default ListOfPatrons;
