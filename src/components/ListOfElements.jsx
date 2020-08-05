import React from "react";
import { HashLink } from "react-router-hash-link";

function ListOfElements(props) {
  const list = props.listElements.map((e) => {
    return (
      <div key={e.id} className="element shadow">
        <div>
          <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
          <h2>{e.title}</h2>
          <p className="small-p">{e.description}</p>
        </div>
        <HashLink to={process.env.PUBLIC_URL + e.fintOutMore}>
          Dowiedz się więcej
        </HashLink>
      </div>
    );
  });

  return <div className="list list-of-elements">{list}</div>;
}

export default ListOfElements;
