var express = require('express'),
    app = express();

app.get('/home', function(req, res){
  res.end('Hello World!');
});