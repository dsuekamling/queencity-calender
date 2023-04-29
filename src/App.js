import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Casa from './components/pages/client/home/Casa';
import About from './components/pages/client/about/About';
import Meet from './components/pages/client/meet/Meet';
import Forum from './components/pages/client/forum/Forum';
import Contact from './components/pages/client/contact/Contact';
import Login from './components/pages/client/login/Login';
import Adminforum from './components/pages/admin/admin-forum/Adminforum';
import Adminhome from './components/pages/admin/admin-home/Adminhome';
import AccountCreation from './components/pages/admin/admin-account/AccountCreation';
import UserCalendar from './components/pages/client/calendar/UserCalendar';
import AdminCalendar from './components/pages/admin/admin-calendar/AdminCalendar';
import RequireAuth from './components/RequireAuth';

function App() {
  const [user, setUser] = useState('');
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Casa />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth allowedRoles={'user'} />}>
          <Route path="/forum" element={<Forum />} />
          <Route path="/calendar" element={<UserCalendar />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={'admin'} />}>
          <Route path="/adminforum" element={<Adminforum />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/adminaccount-creation" element={<AccountCreation />} />
          <Route path="/admincalendar" element={<AdminCalendar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
