import './App.css';
import Casa from './components/pages/client/home/Casa';
import About from './components/pages/client/about/About';
import Meet from './components/pages/client/meet/Meet';
import Forum from './components/pages/client/forum/Forum';
import Contact from './components/pages/client/contact/Contact';
import Adminforum from './components/pages/admin/admin-forum/Adminforum';
import Adminhome from './components/pages/admin/admin-home/Adminhome';
import AccountCreation from './components/pages/admin/admin-account/AccountCreation';
import AdminAbout from './components/pages/admin/admin-about/AdminAbout';
import DiscSymph from './components/pages/client/forum/discussion/DiscSymph/DiscSymph';
import { UserProvider } from './context/UserContext';
import Login from './components/pages/client/login/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ClientNavbar from './components/bars/client-navbar/ClientNavbar';
import Footer from './components/bars/foot/footer';
import UserCalendar from './components/pages/client/calendar/UserCalendar';
import AdminCalendar from './components/pages/admin/admin-calendar/AdminCalendar';

function App() {
  const [role, setRole] = useState([]);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole[0].split(','));
    }
  }, []);

  return (
    <div className="App">
      <ClientNavbar />
      <Routes>
        <Route path="/" element={<Casa />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/DiscSymph" element={<DiscSymph />} />
        <Route path='/login' element={<Login />}/>

        {role === 'user' && (
          <>
            <Route path="/forum" element={<Forum />} />
            <Route path="/calendar" element={<UserCalendar />} />
          </>
        )}

        {role === 'admin' && (
          <>
            <Route path="/adminforum" element={<Adminforum />} />
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/adminaccount-creation" element={<AccountCreation />} />
            <Route path="/admincalendar" element={<AdminCalendar />} />
          </>
        )}

        {!role && (
          <>
            <Route path="/forum" element={<Forum />} />
            <Route path="/calendar" element={<UserCalendar />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
