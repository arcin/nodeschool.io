var http = require('http'),
    fs = require('fs'),
    async = require('async'),
    filePath = process.argv[2];


async.waterfall([
  function(cb){
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data){
      if (err) return cb(err);
      cb(null, data);
    });
  },
  function(data, cb){
    var body = '';
    http.get(data, function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        cb(null, body);
      });
      res.on('error', function(err){
        cb(err);
      });
    });
  }], function (err, result){
    if (err) return console.error(err);
    console.log(result);
  });
