var http = require('http'),
    async = require('async'),
    urlOne = process.argv[2],
    urlTwo = process.argv[3];

async.each([urlOne, urlTwo], function(item, done){
  http.get(item, function(res){
    var body = '';
    res.on('data', function(chunk){ });
    res.on('end', function(){ done(); });
  }).on('error', function(e){ done(e); });
},
function(err){
    if (err) console.log(err);
});