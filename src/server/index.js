const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(session({
  secret: 'mysecret',
  resave: true,
  saveUninitialized: true
}));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "Capstone",
});

app.get("/login", (req, res) => {
  const email = req.query.email || req.body.email;
  const password = req.query.password || req.body.password;

  if (!email || !password) {
    res.status(400).send({ message: "Email and password are required" });
  } else {
    db.query(
      "SELECT id, email, role FROM users WHERE email = ? AND password = ?",
      [email, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }

        if (result.length > 0) {
          req.session.user = result[0];
          res.send({
            loggedIn: true,
            user: {
              id: result[0].id,
              email: result[0].email,
              role: result[0].role
            }
          });
        } else {
          res.send({ message: "Wrong email/password combination" });
        }
      }
    );
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie('connect.sid', { path: '/' });
      res.send('Logout successful');
    }
  });
});

app.listen(3001, () => {
  console.log("running server");
});

// app.post('/register', (req, res)=>{
// 	const email = req.body.email;
// 	const password = req.body.password;

// 	db.query(
// 		"INSERT INTO users (email, password) VALUES (?,?)",
// 		[email, password],
// 		(err, result)=>{
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log(result);
// 			}
// 		}
// 	);
// });