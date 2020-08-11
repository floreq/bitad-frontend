import React from "react";

function ListOfOrganizers(props) {
  let list = [];
  if (props.error) {
    console.warn("Error ", props.error.message);
  } else if (props.isLoaded) {
    list = props.organizers.map((e) => {
      return (
        <div key={e.id} id={e.id} className="organizer shadow">
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
          <p className="small-p descritpion">{e.details.description}</p>
        </div>
      );
    });
  }

  // const list = props.listOrganisers.map((e) => {
  //   return (
  //     <div key={e.id} className="organizer shadow">
  //       <div className="profile">
  //         <div className="image-wrapper">
  //           <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
  //         </div>
  //         <div>
  //           <p className="small-p">{e.degree}</p>
  //           <h3>{`${e.name} ${e.surname}`}</h3>
  //         </div>
  //       </div>
  //       <p className="small-p descritpion">{e.description}</p>
  //     </div>
  //   );
  // });

  return <div className="list list-of-organizers">{list}</div>;
}

export default ListOfOrganizers;
