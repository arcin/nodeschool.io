var fs = require('fs');

function run (generator) {
  var it = generator(go);

  function go (err, result) {
    // go here is simply a callback passed to fs.readdir. Which is async.
    if (err) return it.throw(err); // throw to trigger generators try/catch
    it.next(result); // Allow the generator to handle results. Masks async.
  }

  go();
}

run(function* (done) {
  var firstFile;
  try {
    var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null;
  }

  console.log(firstFile);
});
