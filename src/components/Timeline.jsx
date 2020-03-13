import React from "react";
import { HashLink } from "react-router-hash-link";

function Timeline(props) {
  const agenda = props.agenda;
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
        <HashLink
          to={process.env.PUBLIC_URL + "/agenda#" + e.id}
          key={e.id}
          className={`event ${e.color}`}
          style={eventStyle}
        >
          <div className={`image-wrapper ${e.color}`}>
            <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
          </div>
        </HashLink>
      );
    });
  const timeline = agenda.map(e => {
    return (
      <React.Fragment key={e.categoryId}>
        <h3>{e.categoryTitle}</h3>
        <div className="timeline">
          <div className="timeline-scroll">
            <div className="timeline-time">{timelineTime}</div>
            <div className="timeline-events">{event(e.categoryId)}</div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className="timeline-wrapper">{timeline}</div>;
}

export default Timeline;
