var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, readBack);

function readBack(err, data){
  var stringsWithoutNewline = 1;
  if(!err) {
    var splitData = data.toString().split('\n');
    console.log(splitData.length - stringsWithoutNewline);
  }
}

