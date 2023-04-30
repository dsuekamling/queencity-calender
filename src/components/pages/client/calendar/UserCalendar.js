import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './Calendar.css'

const UserCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleEventClick = (clickInfo) => {
    alert(clickInfo.event.title);
  };
  console.log(events);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events.map((event) => ({
        id: event.id,
        title: event.title,
        start: event.start,
        end: event.end,
        url: event.url
      }))}
      eventClick={handleEventClick}
    />
  );
};

export default UserCalendar;


  