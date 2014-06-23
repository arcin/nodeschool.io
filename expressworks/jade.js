var express = require('express'),
    app = express(),
    port = process.argv[2],
    jadeTemplate = process.argv[3];

// this is how you configure your view engine.
app.set('view engine', 'jade');

app.get('/home', function(req, res){
  // res.render to render templates in express
  res.render(jadeTemplate, {date: new Date().toDateString()});
});

app.listen(port);