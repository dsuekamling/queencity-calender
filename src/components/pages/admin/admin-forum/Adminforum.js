import React from 'react';
import './Adminforum.css';
import AdminNavbar from "../../../bars/admin-navbar/AdminNavbar";
import Footer from '../../../bars/foot/footer';

function Adminforum() {
  return (
    <>
      <AdminNavbar />
      <section className="forum-section">
        <h2>Create a New Event</h2>
        <div className="forum-container">
          <div className="forum-post">
            <label htmlFor="event-date">Event Name:</label>
            <input type="text" placeholder="Event Name" />
            <label htmlFor="event-date">Host:</label>
            <input type="text" placeholder="Host" />
            <label htmlFor="event-date">Location:</label>
            <input type="text" placeholder="Location" />
            <label htmlFor="event-date">Event Date:</label>
            <input type="date" id="event-date" name="event-date" />
            <label htmlFor="event-date">Event Information:</label>
            <textarea placeholder="Post Content" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Adminforum;
