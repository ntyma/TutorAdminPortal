const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

var db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'tutoradminportal'
});
 
app.post('/tutors', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNum = req.body.phoneNum;
  db.query("INSERT INTO tutors (first_name, last_name, email, phone_num) VALUES (?, ?, ?, ?)", [firstName, lastName, email, phoneNum], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send({firstName: firstName})
    }
  })
})

app.listen(8081, () => {
    console.log("listening");
})