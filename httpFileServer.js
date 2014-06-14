var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];

var connectionHandler = function(req, res){
  res.writeHead(200, { 'content-type': 'text/plain'});
  fs.createReadStream(file).pipe(res);
};

var server = http.createServer(connectionHandler);

server.listen(port);
