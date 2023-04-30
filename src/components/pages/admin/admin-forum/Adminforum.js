import React, { useState } from 'react';
import axios from 'axios';
import './Adminforum.css';
import AdminNavbar from "../../../bars/admin-navbar/AdminNavbar";
import Footer from '../../../bars/foot/footer';

function Adminforum() {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [url, setUrl] = useState('');
  const [color, setColor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/events', {
      title,
      start,
      end,
      url,
      color
    }, {
      withCredentials: true
    })
    .then(response => {
      setMessage('Event created successfully');
    })
    .catch(error => {
      console.log(error);
    });
  };
  

  return (
    <>
      <AdminNavbar />
      <section className="forum-section">
        <h2>Create a New Event</h2>
        <div className="forum-container">
          <div className="forum-post">
            <label htmlFor="event-title">Event Title:</label>
            <input type="text" id="event-title" name="event-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter Event Title" required />
            <label htmlFor="event-start">Event Start:</label>
            <input type="datetime-local" id="event-start" name="event-start" value={start} onChange={(event) => setStart(event.target.value)} required />
            <label htmlFor="event-end">Event End:</label>
            <input type="datetime-local" id="event-end" name="event-end" value={end} onChange={(event) => setEnd(event.target.value)} required />
            <label htmlFor="event-url">Event URL:</label>
            <input type="text" id="event-url" name="event-url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Enter Event URL" />
            <label htmlFor="event-color">Event Color:</label>
            <input type="color" id="event-color" name="event-color" value={color} onChange={(event) => setColor(event.target.value)} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            {message && <p>{message}</p>}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Adminforum;
