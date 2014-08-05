// Generated by CoffeeScript 1.7.1
(function() {
  var async, http, numbers, url;

  url = process.argv[2];

  http = require('http');

  async = require('async');

  numbers = ['one', 'two', 'three'];

  async.reduce(numbers, 0, function(memo, item, callback) {
    http.get("" + url + "?number=" + item, function(res) {
      var body;
      body = '';
      res.on('data', function(chunk) {
        return body += chunk.toString();
      });
      res.on('end', function() {
        return callback(null, memo + parseInt(body));
      });
    }).on('error', function(e) {
      return callback(e);
    });
  }, function(err, result) {
    if (err) {
      return console.log(err);
    }
    return console.log(result);
  });

}).call(this);
