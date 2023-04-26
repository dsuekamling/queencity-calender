import React, { useState } from "react";
// import ReactDOM from "react-dom";
import Axios from 'axios'

import "./App.css";

function App() {

  const [emailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  const register = () =>{
    Axios.post('http://localhost:3001/register', {
      email: emailReg,
      password: passwordReg,
    }).then((response)=>{

      
      console.log(response)
    })
  }

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
      console.log(response.data)
    })
  }

  return(
  <div className="App">
    <div className="registration">
      <h1>Registration</h1>
      <label>email</label>
      <input type="text" 
      onChange={(e)=>{
        setEmailReg(e.target.value);
      }}
      />
      <label>Password</label>
      <input type="text"
          onChange={(e)=>{
            setPasswordReg(e.target.value);
          }}
      />
      <button onClick={register}>Register</button>
    </div>



    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder="email..." onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <input type="password" placeholder="Password..." onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <button onClick={login}>Login</button>
    </div>
    <h1>{loginStatus}</h1>
  </div>
  )
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       email: "user1",
//       password: "pass1"
//     },
//     {
//       email: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid email",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.email === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // email not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>email </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
}

export default App;
