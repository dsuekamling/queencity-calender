import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const AdminCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleDateSelect = (selectInfo) => {
    const title = prompt("Enter a title for your event");
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        },
      ]);
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      selectable={true}
      dateClick={handleDateSelect}
      events={events}
    />
  );
};

export default AdminCalendar;
