var http = require('http'),
    urlOne = process.argv[2],
    urlTwo = process.argv[3],
    async = require('async');

async.series({
  requestOne: function(done){
    http.get(urlOne, function(res){
      var body = '';
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        done(null, body);
      });
      res.on('error', function(err){
        done(err);
      });
    });
  },
  requestTwo: function(done){
    http.get(urlTwo, function(res){
      var body = '';
      res.on('data', function(chunk){
        body += chunk.toString();
      });
      res.on('end', function(){
        done(null, body);
      });
      res.on('error', function(err){
        done(err);
      });
    });
  }
}, function(err, results){
  if (err) return console.error(err);
  console.log(results);
});