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

// create a new contact
app.post('/contacts', (req, res) => {
	const { firstName, lastName, email, message } = req.body;
	db.query(
	  "INSERT INTO ContactFormSubmissions (firstName, lastName, email, message) VALUES (?, ?, ?, ?)",
	  [firstName, lastName, email, message],
	  (err, result) => {
		if (err) {
		  console.log(err);
		  res.status(500).send('Error creating contact');
		} else {
		  const newContact = {
			id: result.insertId,
			firstName,
			lastName,
			email,
			message
		  };
		  res.status(200).send(newContact);
		}
	  }
	);
  });
  

// Your admin role code here
const isAdmin = (req, res, next) => {
  // Check if the user is an admin
  if (req.session.user && req.session.user.role === 'admin') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

// retrieve events with color
app.get('/events', (req, res) => {
	db.query(
	  "SELECT id, title, start, end, url, color FROM events",
	  (err, result) => {
		if (err) {
		  console.log(err);
		  res.status(500).send('Error retrieving events');
		} else {
		  const events = result.map(event => ({
			id: event.id,
			title: event.title,
			start: event.start.toISOString(),
			end: event.end.toISOString(),
			url: event.url,
			color: event.color
		  }));
		  res.status(200).send(events);
		}
	  }
	);
  });
  
  // create a new event, only accessible to admins
  app.post('/events', (req, res) => {
	const { title, start, end, url, color } = req.body;
	db.query(
	  "INSERT INTO events (title, start, end, url, color) VALUES (?, ?, ?, ?, ?)",
	  [title, start, end, url, color],
	  (err, result) => {
		if (err) {
		  console.log(err);
		  res.status(500).send('Error creating event');
		} else {
		  const newEvent = {
			id: result.insertId,
			title,
			start,
			end,
			url,
			color,
		  };
		  res.status(200).send(newEvent);
		}
	  }
	);
  });

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        req.session.user = result[0];
        res.send(result);
      } else {
        res.send({ message: "Wrong email/password combination" });
      }
    }
  );
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