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


function App() {
  return (
    <div className= 'App'>
    <BrowserRouter>
    <Routes>
    <Route path= '/' element={<Casa />} />
    <Route path= '/about' element={<About />} />
    <Route path= '/meet' element={<Meet />} />
    <Route path= '/forum' element={<Forum />} />
    <Route path= '/contact' element={<Contact />} />
    <Route path= '/login' element={<Login />} />
    <Route path= '/AccountCreation' element={<AccountCreation />} />
    <Route path= '/Adminhome' element={<Adminhome />} />
    <Route path= '/Adminforum' element={<Adminforum />} />


    
    </Routes>
    </BrowserRouter>
  </div>

  );
}

export default App;




