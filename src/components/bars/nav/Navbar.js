import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://d368g9lw5ileu7.cloudfront.net/races/race68999-fulllogo.bDhJNM.png"
            alt="crown icon"
            className="crownimg"
          />
        </div>
        <div className="links-container">
          <a href="./index.html" className="active">
            Home
          </a>
          <a href="./about.html">About</a>
          <a href="./meet.html">Meet the Team</a>
          <a href="./calendar.html">Calendar</a>
          <a href="./forum-page.html">Forum</a>
          <a href="./contact.html">Contact</a>
          <a href="login.html">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
