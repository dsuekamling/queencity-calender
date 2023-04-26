import './App.css';
import Navbar from './components/bars/nav/Navbar';
import Footer from './components/bars/foot/footer';
import Casa from './components/pages/client/home/Casa';
import About from './components/pages/client/about/About';
import Meet from './components/pages/client/meet/Meet';
import Forum from './components/pages/client/forum/Forum';
import Contact from './components/pages/client/contact/Contact';
import Login from './components/pages/client/login/Login';
import Adminforum from './components/pages/admin/admin-forum/Adminforum';
import Adminhome from './components/pages/admin/admin-home/Adminhome';
import AccountCreation from './components/pages/admin/admin-account/AccountCreation';

function App() {
  return (
    <>
      <Navbar />
      <Casa />
      <Footer />
      <About />
      <Meet />
      <Forum />
      <Contact />
      <Login />
      <Adminforum />
      <Adminhome />
      <AccountCreation />
      

     
      

      

    
    
    
    </>
  );
}

export default App;
