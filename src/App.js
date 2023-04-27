import './App.css';
import ClientNavbar from './components/bars/client-navbar/ClientNavbar';
import Footer from './components/bars/foot/footer';
import Casa from './components/pages/client/home/Casa';
import About from './components/pages/client/about/About';
import Meet from './components/pages/client/meet/Meet';
import Forum from './components/pages/client/forum/Forum';
import Contact from './components/pages/client/contact/Contact';
import Adminforum from './components/pages/admin/admin-forum/Adminforum';
import Adminhome from './components/pages/admin/admin-home/Adminhome';
import AccountCreation from './components/pages/admin/admin-account/AccountCreation';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Login from './components/pages/client/login/Login';

function App() {
  const [role, setRole]= useState("");
  Axios.defaults.withCredentials = true;

  useEffect(()=>(
    Axios.get('http://localhost:3001/login').then((response)=>{
      if (response.data.loggedIn === true){
        setRole(response.data.user[0].role);
      }
    })
  ),[]);

  return (
    <>
      {role === "user" && (
        <>
          <ClientNavbar />
          <Casa />
          <Footer />
          <About />
          <Meet />
          <Forum />
          <Contact />
        </>
      )}

      {role === "admin" && (
        <>
          <ClientNavbar />
          <Adminforum />  
          <Adminhome />  
          <AccountCreation />  
        </>
      )}

      {!role && (
        <>
          <ClientNavbar />
          <Casa />
          <Footer />
          <About />
          <Meet />
          <Forum />
          <Contact />
          <Login />
        </>
      )}

      {role && <></>}
    </>
  );
}

export default App;

