var fs = require('fs');
var path = require('path');
var directory = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(directory, sortFiles);

function sortFiles(err, files) {
  for (var i = 0; i < files.length; i++) {
    if ( path.extname(files[i]) === '.'+fileExtension ) {
      console.log(files[i]);
    }
  }
}