import React from "react";

function Timeline(props) {
  const referenceDate = new Date(2020, 0, 1, 8, 0);
  const interval = 600000;

  const time = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30"
  ];

  const timelineTime = time.map((e, i) => {
    i *= 2;
    let timeStyle = {
      gridColumnStart: i,
      gridColumnEnd: i + 2
    };
    return (
      <span style={timeStyle} key={e}>
        {e}
      </span>
    );
  });
  const agenda = [
    {
      categoryId: 1,
      categoryTitle: "Wykłady",
      timeline: [
        {
          id: 1,
          title: "",
          description: "",
          room: "",
          name: "",
          surname: "",
          location: "/images/organisers/sebastian-kowalski.jpg",
          alt: "Sebastian Kowalski",
          startDate: new Date(2020, 0, 1, 8, 0),
          endDate: new Date(2020, 0, 1, 8, 30)
        },
        {
          id: 2,
          title: "",
          description: "",
          room: "",
          name: "",
          surname: "",
          location: "/images/organisers/sebastian-kowalski.jpg",
          alt: "Sebastian Kowalski",
          startDate: new Date(2020, 0, 1, 8, 30),
          endDate: new Date(2020, 0, 1, 9, 20)
        },
        {
          id: 3,
          title: "",
          description: "",
          room: "",
          name: "",
          surname: "",
          location: "/images/organisers/sebastian-kowalski.jpg",
          alt: "Sebastian Kowalski",
          startDate: new Date(2020, 0, 1, 9, 30),
          endDate: new Date(2020, 0, 1, 10, 30)
        }
      ]
    },
    {
      categoryId: 2,
      categoryTitle: "Warsztaty",
      timeline: [
        {
          id: 1,
          title: "",
          description: "",
          room: "",
          name: "",
          surname: "",
          location: "/images/organisers/sebastian-kowalski.jpg",
          alt: "Sebastian Kowalski",
          startDate: new Date(2020, 0, 1, 9, 3),
          endDate: new Date(2020, 0, 1, 10, 0)
        }
      ]
    }
  ];

  const eventPosition = (countReferenceDate, countDateTo) => {
    return (countDateTo - countReferenceDate) / interval + 1;
  };
  const event = categoryId =>
    agenda[categoryId - 1].timeline.map(e => {
      const eventStyle = {
        gridColumnStart: eventPosition(referenceDate, e.startDate),
        gridColumnEnd: eventPosition(referenceDate, e.endDate)
      };
      return (
        <div key={e.id} className="element" style={eventStyle}>
          <div className="image-wrapper">
            <img src={process.env.PUBLIC_URL + e.location} alt={e.alt} />
          </div>
        </div>
      );
    });
  const timeline = agenda.map(e => {
    return (
      <React.Fragment key={e.categoryId}>
        <h3>{e.categoryTitle}</h3>
        <div className="timeline">
          <div className="timeline-scroll">
            <div className="timeline-time">{timelineTime}</div>
            <div className="timeline-elements">{event(e.categoryId)}</div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className="timeline-wrapper">{timeline}</div>;
}

export default Timeline;
