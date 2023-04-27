import React, { useState } from 'react';
import './Login.css';
import ClientNavbar from '../../../bars/client-navbar/ClientNavbar';
import Footer from '../../../bars/foot/footer';
import { Link } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send login data to backend or perform other actions here
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
                    <a src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODY4OTM1MGY0OGY5ZmJhZjZmMGM1NjlkYzBmNmFmNzM5ZWRkMjc4MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/xUA7aM09ByyR1w5YWc/giphy.gif">Forgot your password?</a>
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
