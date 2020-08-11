import React from "react";
import { Link } from "react-router-dom";

function ListOfSponsors(props) {
  const listSponsors = [
    {
      categoryId: 1,
      category: "diamond",
      categoryTitle: "Diamentowi sponsorzy",
      sponsors: [],
    },
    {
      categoryId: 2,
      category: "gold",
      categoryTitle: "Złoci sponsorzy",
      sponsors: [],
    },
    {
      categoryId: 3,
      category: "silver",
      categoryTitle: "Srebrni sponsorzy",
      sponsors: [],
    },
  ];
  if (props.error) {
    console.warn("Error ", props.error.message);
  } else if (props.isLoaded) {
    props.sponsors.forEach((e) => {
      const category = e.details.category;
      listSponsors.forEach((v, i) => {
        if (v.category === category) {
          listSponsors[i].sponsors.push(e);
          return;
        }
      });
    });
  }
  // const listSponsors = props.listSponsors;
  const sponsors = (categoryId) =>
    listSponsors[categoryId - 1].sponsors.map((e) => {
      return (
        <Link key={e.id} to={e.details.website_url}>
          <img src={e.details.image.url} alt={e.details.image.alt} />
        </Link>
      );
    });
  const list = listSponsors.map((e) => {
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
