import React from "react";
import { Link } from "react-router-dom";

function ListOfOrganisers(props) {
  const list = props.listOrganisers.map(e => {
    return (
      <div key={e.id} className="organiser shadow">
        <div className="profile">
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + e.location} alt={e.alt} />
          </div>
          <div>
            <p className="small-p">{e.degree}</p>
            <h3>{`${e.name} ${e.surname}`}</h3>
          </div>
        </div>
        <p className="small-p">{e.description}</p>
        <Link to="/">Więcej</Link>
      </div>
    );
  });

  return <div className="list list-of-organisers">{list}</div>;
}

export default ListOfOrganisers;
