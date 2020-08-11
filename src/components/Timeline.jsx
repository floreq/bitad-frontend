import React from "react";
import { HashLink } from "react-router-hash-link";

function Timeline(props) {
  // np. Wed Jan 01 2020 8:00:00 GMT+0100 -> 08:00
  const dateToTimelineTime = (d) => {
    const h = d.getHours();
    const m = d.getMinutes();
    return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;
  };

  // np. 08:00 -> Wed Jan 01 2020 8:00:00 GMT+0100
  const timelineTimeToDate = (t) => {
    const splitT = t.split(":");
    const d = new Date(2020, 0, 1, Number(splitT[0]), Number(splitT[1]));
    return d;
  };

  const eventPosition = (countReferenceDate, countDateTo) => {
    const referenceH = countReferenceDate.getHours();
    const referenceM = countReferenceDate.getMinutes();
    const negateDay = new Date(countDateTo); // Zanegowanie znaczenia daty (dzien, miesiac, rok nie powinny miec znaczenia)
    negateDay.setHours(referenceH);
    negateDay.setMinutes(referenceM);
    return (countDateTo - negateDay) / 600000 + 1;
  };

  const event = (startTimeline, event) => {
    return event.map((e) => {
      const gridStart = eventPosition(
        timelineTimeToDate(startTimeline),
        e.startDate
      );
      const gridEnd = eventPosition(
        timelineTimeToDate(startTimeline),
        e.endDate
      );
      const eventStyle = {
        gridColumnStart: gridStart,
        gridColumnEnd: gridEnd,
      };
      return (
        <HashLink
          to={process.env.PUBLIC_URL + "/agenda#" + e.id}
          key={e.id}
          className={`event ${e.color}${gridStart < 0 ? " break-right" : ""}${
            // Dlaczego 27? - w css, klasa timeline-events ma "grid-template-columns: repeat(27, 1fr)"
            gridEnd > 27 + 1 ? " break-left" : ""
          }`}
          style={eventStyle}
        >
          <div className={`image-wrapper ${e.color}`}>
            <img src={process.env.PUBLIC_URL + e.image} alt={e.alt} />
          </div>
        </HashLink>
      );
    });
  };

  const timeDistribution = (events) => {
    let timeDistribution = [
      {
        groupedId: 1,
        startTimeline: "8:00",
        endTimeline: "12:30",
        timedEvents: [],
      },
      {
        groupedId: 2,
        startTimeline: "12:30",
        endTimeline: "17:00",
        timedEvents: [],
      },
      {
        groupedId: 3,
        startTimeline: "17:00",
        endTimeline: "21:30",
        timedEvents: [],
      },
    ];

    events.forEach((e) => {
      for (let i = 0; i < timeDistribution.length; i++) {
        if (
          dateToTimelineTime(e.startDate) < timeDistribution[i].endTimeline &&
          dateToTimelineTime(e.endDate) <= timeDistribution[i].endTimeline
        ) {
          timeDistribution[i].timedEvents.push(e);
          break;
        } else if (
          dateToTimelineTime(e.startDate) < timeDistribution[i].endTimeline
        ) {
          timeDistribution[i].timedEvents.push(e);
        }
      }
    });
    return timeDistribution;
  };

  const timelineTime = (startTimeline, endTimeline) => {
    let startDate = timelineTimeToDate(startTimeline).getTime();
    const endDate = timelineTimeToDate(endTimeline).getTime();
    let time = [];
    for (startDate; startDate <= endDate; startDate += 30 * 60000) {
      time.push(dateToTimelineTime(new Date(startDate)));
    }
    return time.map((e, i) => {
      i *= 2;
      let timeStyle = {
        gridColumnStart: i,
        gridColumnEnd: i + 2,
      };
      return (
        <span style={timeStyle} key={e}>
          {e}
        </span>
      );
    });
  };

  const timeline = (events) => {
    return timeDistribution(events).map((e) => {
      return e.timedEvents.length > 0 ? (
        <React.Fragment key={e.groupedId}>
          <div className="timeline-time">
            {timelineTime(e.startTimeline, e.endTimeline)}
          </div>
          <div className="timeline-events">
            {event(e.startTimeline, e.timedEvents)}
          </div>
        </React.Fragment>
      ) : null;
    });
  };

  const timelineWrapper = props.agenda.map((e) => {
    return (
      <React.Fragment key={e.categoryId}>
        <h3>{e.categoryTitle}</h3>
        <div className="timeline">
          <div className="timeline-scroll">{timeline(e.events)}</div>
        </div>
      </React.Fragment>
    );
  });

  return <div className="timeline-wrapper">{timelineWrapper}</div>;
}

export default Timeline;
