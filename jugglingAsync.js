var http = require('http'),
    bl = require('bl'),
    urlCount = process.argv.length - 2,
    results = [],
    count = 0;

var logAllResults = function (results) {
  for (var i = 0; i < urlCount; i++) {
    console.log(results[i]);
  }
};

var handleRequests = function(requestFunction){
  for (var i = 0; i < 3; i++) {
    requestFunction(i);
  }
};

var httpGet = function (index) {
  http.get(process.argv[2 + index], function (stream) {
    stream.pipe(bl(function (err, content) {
      if (err) {
        return console.error(content);
      }

      results[index] = content.toString();
      count++;

      if (count > 2) {
        logAllResults(results);
      }
    }));
  });
};


handleRequests(httpGet);