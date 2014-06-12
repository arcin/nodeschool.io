var fs = require('fs');

fs.readFile(process.argv[2], readBack);

function readBack(err, data){
  var stringsWithoutNewline = 1;
  if(!err) {
    var splitData = data.toString().split('\n');
    console.log(splitData.length - stringsWithoutNewline);
  }
}

