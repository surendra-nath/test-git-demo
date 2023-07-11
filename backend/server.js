const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');

const jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.json());
const cors = require("cors");
app.use(cors());

// app.get('/', function(req, res)  {
//   res.sendFile(__dirname, '/index.html');
// });

app.post('/api/login',jsonParser, function(req, res)  { 
  const { username, password } = req.body;  
  if (username == 'admin' && password == 'admin') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/api/users', async (req, res) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    res.send(await resp.json() );
});


 //app.get('/users', (req, res) => {
 //  res.sendFile(path.join(__dirname, '../frontend/users.html'));
 //});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
