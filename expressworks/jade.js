var express = require('express'),
    app = express(),
    port = process.argv[2],
    jadeTemplate = process.argv[3];



app.get('/home', function(req, res){
  res.render(jadeTemplate, {date: new Date().toDateString()});
});