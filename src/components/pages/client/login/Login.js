import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css'

const LOGIN_URL = 'http://localhost:3001/login';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      // Check user role and redirect to appropriate route
      if (foundUser.role === "admin") {
        navigate("/adminhome");
      } else if (foundUser.role === "user") {
        navigate("/");
      }
    }
  }, []);

  // logout the user
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3001/logout', { withCredentials: true });
      setUser(null);
      setEmail("");
      setPassword("");
      localStorage.clear();
      navigate('/login', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify(user),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      setUser(response?.data);
      localStorage.setItem("user", JSON.stringify(response?.data));
      // Check user role and redirect to appropriate route
      if (response?.data?.role === "admin") {
        navigate("/adminhome");
      } else if (response?.data?.role === "user") {
        navigate("/");
      } else {
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
    }
  };
  
  if (user) {
    const userRole = user.role;
  
    if (userRole === 'admin') {
      return (
        <div>
          {user.email} is logged in as admin
          <button onClick={handleLogout}>logout</button>
          <Link to="/adminhome">Go to Admin Page</Link>
        </div>
      );
    } else {
      return (
        <div>
          {user.email} is logged in
          <button onClick={handleLogout}>logout</button>
          <Link to="/">Go to Home Page</Link>
        </div>
      );
    }
  }
  
  return (
    <section className='login-container'>
      <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?<br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
}
export default Login
