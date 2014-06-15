var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

var server = http.createServer(function(req, res){
  if (req.method != 'POST'){
    return res.end('Only accepting post requests here.');
  }
  req.pipe(map(function(chunck){
    return chunck.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port);

