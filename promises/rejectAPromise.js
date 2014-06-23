var q = require('q'),
    defer = q.defer(),
    e = new Error('REJECTED!');

defer.promise.then(console.log);
