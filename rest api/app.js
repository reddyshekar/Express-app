var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.get('/', function (req, res) {
  
  res.send('welcome to home page!');
});

app.get('/generateGreeting/:value', function (req, res) {
  var string = req.params.value;
  res.send('Hello ' + string);
});

// app.listen(9000, function () {
//   console.log('Example app listening on port 9000!');
// });
var server = app.listen(9000, function () {
    console.log('Example app listening on port 9000!');
  });
module.exports = server;
