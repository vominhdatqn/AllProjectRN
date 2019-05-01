const express = require('express');
const app = express();

const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({type:'application/json'});
const Port = 3001;
const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(jsonParser);
app.use(urlencodedParser);

// parse application/x-www-form-urlencoded
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected Successfully!")
  });
app.post('/user/login', jsonParser, function (req, res) {

     const {email,password} = req.body;
    
       
    if (email && password) {
      con.query('SELECT * FROM users WHERE Email= ? AND PassWord=?', [email, password], function(error, results, fields) {
        if (results.length > 0) {
            res.json({"success":1,data:results})
        } else {
          res.json({"success":0})
        }			
        res.end();
      });
    } else {
      // res.send('Please enter Username and Password!');
      res.json({"success":2});
      res.end();
    }
});
var server = app.listen(Port,function(){
    // var host = server.address().address
    // var port = server.address().port
    console.log(`Server đang lắng nghe port ${Port}`);
});
