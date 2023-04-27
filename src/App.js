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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import ClientNavbar from './components/bars/client-navbar/ClientNavbar';
import Footer from './components/bars/foot/footer';
import UserCalendar from './components/pages/client/calendar/UserCalendar';
import AdminCalendar from './components/pages/admin/admin-calendar/AdminCalendar';

function App() {
  const [role, setRole] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <ClientNavbar />

        <Routes>
          <Route path="/" element={<Casa />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/contact" element={<Contact />} />

          {role === "user" && (
            <>
              <Route path="/forum" element={<Forum />} />
              <Route path="/calendar" element={<UserCalendar />} />
            </>
          )}

          {role === "admin" && (
            <>
              <Route path="/admin/forum" element={<Adminforum />} />
              <Route path="/admin/home" element={<Adminhome />} />
              <Route path="/admin/account-creation" element={<AccountCreation />} />
              <Route path="/admin/calendar" element={<AdminCalendar />} />
            </>
          )}

          {!role && (
            <>
              <Route path="/forum" element={<Forum />} />
              <Route path="/calendar" element={<UserCalendar />} />
              <Route path="/login" element={<Login setRole={setRole} />} />
            </>
          )}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
