import React from "react";
import { HashLink } from "react-router-hash-link";

function Timeline(props) {
  const interval = 600000;

  const dateToTimelineTime = d => {
    const h = d.getHours();
    const m = d.getMinutes();
    return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}`;
  };

  const timelineTimeToDate = t => {
    const splitT = t.split(":");
    const d = new Date(2020, 0, 1, Number(splitT[0]), Number(splitT[1]));
    return d;
  };

  const eventPosition = (countReferenceDate, countDateTo) => {
    return (countDateTo - countReferenceDate) / interval + 1;
  };

  const event = (startTimeline, event) => {
    return event.map(e => {
      const eventStyle = {
        gridColumnStart: eventPosition(
          timelineTimeToDate(startTimeline),
          e.startDate
        ),
        gridColumnEnd: eventPosition(
          timelineTimeToDate(startTimeline),
          e.endDate
        )
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
  };

  const timeDistribution = events => {
    let timeDistribution = [
      {
        groupedId: 1,
        startTimeline: "8:00",
        endTimeline: "12:30",
        timedEvents: []
      },
      {
        groupedId: 2,
        startTimeline: "12:30",
        endTimeline: "17:00",
        timedEvents: []
      }
    ];

    events.forEach(e => {
      for (let i = 0; i < timeDistribution.length; i++) {
        if (dateToTimelineTime(e.startDate) < timeDistribution[i].endTimeline) {
          timeDistribution[i].timedEvents.push(e);
          break;
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
        gridColumnEnd: i + 2
      };
      return (
        <span style={timeStyle} key={e}>
          {e}
        </span>
      );
    });
  };

  const timeline = events => {
    return timeDistribution(events).map(e => {
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

  const timelineWrapper = props.agenda.map(e => {
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
