import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import '../../client/calendar/Calendar.css'
import AdminNavbar from "../../../bars/admin-navbar/AdminNavbar";
import Footer from "../../../bars/foot/footer";

const AdminCalendar = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => console.error(error));
  }, []);

 
//   console.log(events);

  return (
	<>
	<AdminNavbar />
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
    //   eventClick={handleEventClick}
    />
	<Footer />
	</>
  );
};

export default AdminCalendar;
