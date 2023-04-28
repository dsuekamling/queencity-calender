import { useState, useEffect, useContext, useRef } from 'react';
import { checkLoggedIn, login, logout } from '../../../../server/auth';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../api/axios';
import AuthContext from '../../../../context/AuthProvider';

const LOGIN_URL = '/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <section>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              // readOnly={Boolean(email)}
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
          {isLoggedIn ? (
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button type="submit">Login</button>
          )}
          {loginStatus && (
            <p ref={errRef} className="errmsg" aria-live="assertive">
              {loginStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Login;
