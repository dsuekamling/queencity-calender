import { useState, useEffect} from 'react';
// import { checkLoggedIn, login, logout } from '../../../../server/auth';

import './Login.css';
import ClientNavbar from '../../../bars/client-navbar/ClientNavbar';
import Footer from '../../../bars/foot/footer';
import { Link, useNavigate, useLocation } from 'react-router-dom';


// import { useNavigate } from 'react-router-dom';
import axios from '../../../../api/axios';
// import AuthContext from '../../../../context/AuthProvider';

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
  
    if (userRole === "admin") {
      return (
        <div className="login-container">
          {user.email} is logged in as admin
          <button onClick={handleLogout}>logout</button>
          <Link to="/adminhome">Go to Admin Page</Link>
        </div>
      );
    } else {
      return (
        <div className="login-container">
          {user.email} is logged in
          <button onClick={handleLogout}>logout</button>
          <Link to="/">Go to Home Page</Link>
        </div>
      );
    }
  }
  
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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


export default Login;