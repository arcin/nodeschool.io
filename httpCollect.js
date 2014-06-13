var http = require('http'),
    url = process.argv[2];

http.get(url, function(res){
  res.setEncoding('utf-8');
  var chars = '';
  res.on('data', function(data){
    chars = chars + data;
  });
  res.on('end', function(){
    console.log(chars.length);
    console.log(chars);
  });
});
