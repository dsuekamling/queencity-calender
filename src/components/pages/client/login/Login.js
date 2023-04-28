import React, { useState, useEffect } from 'react';
import { checkLoggedIn, login, logout } from '../../../../server/auth';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // <-- new state
  const navigate = useNavigate();

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
    const user = checkLoggedIn();
    if (user && user.email) {
      setEmail(user.email);
      setPassword('********');
      setIsLoggedIn(true);
    }
  }, []);
  

  const handleLogin = () => {
    login(email, password)
      .then((user) => {
        if (user) {
          setEmail(user.email);
          localStorage.setItem('authToken', user.token);
          setIsLoggedIn(true);
          navigate('/');
        } else {
          setLoginStatus('Incorrect email or password');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  const handleLogout = () => {
    logout();
    localStorage.removeItem('authToken');
    setEmail('');
    setIsLoggedIn(false);
  };
  
  return (
    <section>
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              readOnly={Boolean(email)}
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
            <a href="./haha.html">Forgot your password?</a>
          </div>
          {isLoggedIn ? ( // <-- check the isLoggedIn state
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

export default Login;
