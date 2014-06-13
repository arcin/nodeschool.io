var http = require('http'),
    url = process.argv[2];

http.get(url, function(res){
  res.setEncoding('utf-8');
});
