import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function ClientNavbar() {
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
          <ul>
            <li>
              <Link to='/' className='active'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/Meet'>Meet</Link>
            </li>
            <li>
              <Link to='/calendar'>Calendar</Link>
            </li>
            <li>
              <Link to='/forum'>Forum</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/Login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ClientNavbar;




/* <a href="./index.html" className="active">
            Home
          </a>
          <a href="./about.html">About</a>
          <a href="./meet.html">Meet the Team</a>
          <a href="./calendar.html">Calendar</a>
          <a href="./forum-page.html">Forum</a>
          <a href="./contact.html">Contact</a>
          <a href="login.html">Login</a>
        </div> */