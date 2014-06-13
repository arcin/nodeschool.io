var directory = process.argv[2],
    fileExtension = process.argv[3],
    logger = require('./myModule');

logger(directory, fileExtension, function(err, filtered){
  if (err) {
    console.log("there was an error:", err);
    return;
  }

  for (var j = 0; j < filtered.length; j++){
    console.log(filtered[j]);
  }
});