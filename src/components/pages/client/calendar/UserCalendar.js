import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import './Calendar.css'

const UserCalendar = ({ events }) => {
  const handleEventClick = (clickInfo) => {
    alert(clickInfo.event.title);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventClick={handleEventClick}
    />
  );
};

export default UserCalendar;

  