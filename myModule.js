var fs = require('fs');
var path = require('path');

function logFiles(dirname, filext, callback){
  var fList = [];
  fs.readdir(dirname, function(err, files){
    if (err) return callback(err);

    // My module does the necessary work here
    for (var i = 0; i < files.length; i++) {
      if(path.extname(files[i]) === '.'+filext){
        fList.push(files[i]);
      }
    }

    // hand control to the callback, passing in the filtered data
    callback(null, fList);
  });
}

module.exports = logFiles;