var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var parseTime = function(iso){
  var parsedISODate = new Date(iso);
  return {
    hour: parsedISODate.getHours(),
    minute: parsedISODate.getMinutes(),
    second: parsedISODate.getSeconds()
  };
};

var toUnixTime = function(iso){
  var parsedISODate = new Date(iso);
  return { unixtime: parsedISODate.getTime() };
};


var server = http.createServer(function(req, res){
  var urlProps = url.parse(req.url, true);
  var iso = urlProps.query.iso;

  if (urlProps.pathname === '/api/unixtime' || urlProps.pathname === '/api/parsetime'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
  } else {
    res.writeHead(404);
    res.end();
  }
  if (urlProps.pathname === '/api/parsetime'){
    res.end(JSON.stringify(parseTime(iso)));
  }
  if (urlProps.pathname === '/api/unixtime'){
    res.end(JSON.stringify(toUnixTime(iso)));
  }
});

server.listen(port);