import React from "react";
import { Link } from "react-router-dom";

function ListOfElements() {
  const listElements = [
    {
      id: 1,
      icon: "/images/gift.svg",
      alt: "Prezent",
      title: "Powitalnej paczki",
      text:
        "Dlatego każdy z Was zaraz po potwierdzeniu swojej obecności na konferencji będzie czekała powitalna paczka.",
      fintOutMore: "/"
    },
    {
      id: 2,
      icon: "/images/keyboard.svg",
      alt: "Prezent",
      title: "Warsztatów",
      text:
        "Warsztaty mają na celu zaprezentowanie podstaw tematów będących na czasie w praktyce.",
      fintOutMore: "/"
    },
    {
      id: 3,
      icon: "/images/gamepad.svg",
      alt: "Prezent",
      title: "Gry QR Code",
      text:
        "Baw się z nami i zdobywaj punkty podczas udziału w prelekcjach i warsztatach. ",
      fintOutMore: "/"
    }
  ];
  const list = listElements.map(e => {
    return (
      <div key={e.id} className="element shadow">
        <div>
          <img src={process.env.PUBLIC_URL + e.icon} alt={e.alt} />
          <h2>{e.title}</h2>
          <p>{e.text}</p>
        </div>
        <Link to={e.fintOutMore}>Dowiedz się więcej</Link>
      </div>
    );
  });

  return <div className="list-of-elements">{list}</div>;
}

export default ListOfElements;
