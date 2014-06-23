var q = require('q'),
    defer = q.defer();

defer.promise.then(console.log, console.log);