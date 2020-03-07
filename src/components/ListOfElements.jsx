import React from "react";
import { Link } from "react-router-dom";

function ListOfElements(props) {
  const list = props.listElements.map(e => {
    return (
      <div key={e.id} className="element shadow">
        <div>
          <img src={process.env.PUBLIC_URL + e.location} alt={e.alt} />
          <h2>{e.title}</h2>
          <p className="small-p">{e.description}</p>
        </div>
        <Link to={e.fintOutMore}>Dowiedz się więcej</Link>
      </div>
    );
  });

  return <div className="list list-of-elements">{list}</div>;
}

export default ListOfElements;
