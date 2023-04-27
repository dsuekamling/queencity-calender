import React, { useEffect, useState } from 'react';
import './Login.css';
import Axios from 'axios'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState("")
  Axios.defaults.withCredentials = true;
  const login = () =>{
    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password,
    }).then((response)=>{
      
      if(response.data.message){
        setLoginStatus(response.data.message)
      } else{
        setLoginStatus(response.data[0].email)
      }
    });
  };
  useEffect(()=>(
    Axios.get('http://localhost:3001/login').then((response)=>{
      if (response.data.loggedIn == true){
        setLoginStatus(response.data.user[0].email)
      }
    })
  ),[])

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
          <button type="submit" onClick={login}>Login</button>
        </form>
      </div>
      {/* <h1>{loginStatus}</h1> */}
    </section>
  );
}

export default Login;
