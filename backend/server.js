const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors())

var db  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '6wh&EaY$q@AH',
  database        : 'tutoradminportal'
});
 
app.get('/', (req, res) => {
  db.query("INSERT INTO tutors (first_name, last_name, email, phone_num) VALUES ('test', 'test', 'test', '123')", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
    }
  })
})

app.listen(8081, () => {
    console.log("listening");
})