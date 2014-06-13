var fs = require('fs');
var path = require('path');

function logFiles(dirname, filext, callback){
  var fList = [];
  fs.readdir(dirname, function(err, files){
    if (err) return callback(err);

    for (var i = 0; i < files.length; i++) {
      if(path.extname(files[i]) === '.'+filext){
        fList.push(files[i]);
      }
    }

    callback(null, fList);
  });
}

module.exports = logFiles;