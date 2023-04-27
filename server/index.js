const express = require("express");
const mysql = require("mysql2");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
  }));

const corsOptions = {
	origin: ['http://localhost:3000', 'https://example.com']
  };
  
  app.use(cors(corsOptions));
  

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "Capstone",
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
app.get("/login",(req,res) =>{
	if (req.session.user) {
		res.send({loggedIn: true, user: req.session.user});
	} else{
		res.send({loggedIn: false});
	}
})

app.post('/login', (req,res)=>{
	const email = req.body.email;
	const password = req.body.password;

	db.query(
		"SELECT * FROM users WHERE email = ? AND password = ?",
		[email, password],
		(err, result)=>{
			if (err) {
				res.send({err: err});
			} 



				if(result.length > 0) {
					res.send(result)
				} else
				res.send({message: "Wrong email/password combination"});
			
		}
	);
})


app.listen(3001, ()=>{
	console.log("running server")
})