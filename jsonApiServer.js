var http = require('http'),
    url = require('url'),
    port = process.argv[2];


// Serves Json data when receiving a GET request to '/api/parsetime'.
// request will contain query string with iso key.

// The JSON I serve should include only hour, minute, and second properties.

// Second endpoint returns UNIX epoch time in json.
// ex {"unixtime": 1376136615474}

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
  var urlProperties = url.parse(req.url, true);
  var iso = urlProperties.query.iso;
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.method !== 'GET'){
    return res.end("send me a get request");
  }
  if (urlProperties.pathname === '/api/parsetime'){
    res.end(JSON.stringify(parseTime(iso)));
  }
  if (urlProperties.pathname === '/api/unixtime'){
    res.end(JSON.stringify(toUnixTime(iso)));
  }
});

server.listen(port);