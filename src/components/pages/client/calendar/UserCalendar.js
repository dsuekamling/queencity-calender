// import React, { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// // import eventBritePlugin from '@fullcalendar/eventbrite';

// function Calendar() {

//   // Define any necessary state variables using hooks
//   const [events, setEvents] = useState([]);

//   // Define any necessary functions for manipulating state variables
//   function handleEventAdd(event) {
//     setEvents(prevEvents => [...prevEvents, event]);
//   }

//   // Fetch events from the Eventbrite API using an effect hook
//   useEffect(() => {
//     const apiKey = 'YOUR_API_KEY_HERE';
//     const apiUrl = `https://www.eventbriteapi.com/v3/events/search/?q=Charlotte&token=${UKZ7AD4FD66P5223IIME}`;

//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         setEvents(data.events);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   // Render the calendar with the events data
//   return (
//     <FullCalendar
//       plugins={[ dayGridPlugin, eventBritePlugin ]}
//       events={events}
//       eventClick={handleEventAdd}
//     />
//   );
// }

// export default Calendar;
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

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

  