import React, { useState } from "react";
import { Link } from "react-router-dom";

function ListOfOrganizers(props) {
  const [ifShowMore, setIfShowMore] = useState("");
  const test = (e) => {
    if (ifShowMore === "") {
      console.log(e.target.parentElement.id);
      setIfShowMore(e.target.parentElement.id);
    }
  };
  let list = [];
  if (props.error) {
    console.warn("Error ", props.error.message);
  } else if (props.isLoaded) {
    list = props.organizers.map((e) => {
      // console.log(e);
      return (
        <div key={e.id} id={e.id} className="organizer shadow">
          <div>
            <div className="profile">
              <div className="image-wrapper">
                <img
                  src={
                    e.details.image
                      ? e.details.image.url
                      : process.env.PUBLIC_URL +
                        "/images/organizers/default-organizer-image.jpg"
                  }
                  alt={
                    e.details.image ? e.details.image.alt : "Organizer's image"
                  }
                />
              </div>
              <div>
                <p className="small-p">{e.details.degree}</p>
                <h3>{e.title.rendered}</h3>
              </div>
            </div>
            <p className={`small-p descritpion ${ifShowMore}`}>
              {e.details.description}
            </p>
          </div>
          <button className="show-more" onClick={test}>
            Więcej
          </button>
        </div>
      );
    });
  }

  // const list = props.listOrganisers.map((e) => {
  //   return (
  //     <div key={e.id} className="organiser shadow">
  //       <div className="profile">
  //         <div className="image-wrapper">
  //           <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
  //         </div>
  //         <div>
  //           <p className="small-p">{e.degree}</p>
  //           <h3>{`${e.name} ${e.surname}`}</h3>
  //         </div>
  //       </div>
  //       <p className="small-p">{e.description}</p>
  //       <Link to="/">Więcej</Link>
  //     </div>
  //   );
  // });

  return <div className="list list-of-organizers">{list}</div>;
}

export default ListOfOrganizers;
