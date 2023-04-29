import { useState, useEffect, useContext, useRef } from 'react';
import { checkLoggedIn, login, logout } from '../../../../server/auth';

import './Login.css';
import ClientNavbar from '../../../bars/client-navbar/ClientNavbar';
import Footer from '../../../bars/foot/footer';
import { Link } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';
import axios from '../../../../api/axios';
import AuthContext from '../../../../context/AuthProvider';
export default Login;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LOGIN_URL = '/auth';


  const [email, setEmail] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const user = checkLoggedIn(authToken);
      if (user) {
        setEmail(user.email);
        setIsLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const { accessToken, roles } = response?.data;
      setAuth({ email, password, roles, accessToken });
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    } catch (err) {
      if (!err?.response) {
        setLoginStatus('No Server Response');
      } else if (err.response?.status === 400) {
        setLoginStatus('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setLoginStatus('Unauthorized');
      } else {
        setLoginStatus('Login Failed');
      }
      errRef.current.focus();
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <>
      <ClientNavbar />
      <section>
        <div className="background">
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div className="forgot-password">
                <Link to='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODY4OTM1MGY0OGY5ZmJhZjZmMGM1NjlkYzBmNmFmNzM5ZWRkMjc4MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xUA7aM09ByyR1w5YWc/giphy.gif'>Forgot your password?</Link>
                <br></br>
                <br></br>
                <Link to='/AccountCreation'>New? Create an Account</Link>
              </div>
              <br></br>
              <button type="submit">Login</button>
            </form>

          </div>
        </div>
      </section>
      <Footer />


    </>

  );
}


