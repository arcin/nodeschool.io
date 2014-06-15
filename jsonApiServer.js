var http = require('http'),
    url = require('url'),
    port = process.argv[2];


// Serves Json data when receiving a GET request to '/api/parsetime'.
// request will contain query string with iso key.

// The JSON I serve should include only hour, minute, and second properties.

// Second endpoint returns UNIX epoch time in json.
// ex {"unixtime": 1376136615474}

var server = http.createServer(function(req, res){
  if (req.method !== 'GET'){
    return res.end("send me a get request");
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var urlProperties = url.parse(req.url, true);

  var parsedISODate = new Date(urlProperties.query.iso);
  var parseTime = {
    hour: parsedISODate.getHours(),
    minute: parsedISODate.getMinutes(),
    second: parsedISODate.getSeconds()
  };
  console.log(parseTime);
});

server.listen(port);