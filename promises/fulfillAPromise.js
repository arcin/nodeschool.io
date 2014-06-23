var q = require('q'),
    defer = q.defer();

// console.log will be executed when the promise is fulfilled.
defer.promise.then(console.log);

// here the promise is being fulfilled and "RESOLVED!" is being passed as an argument to console.log.
setTimeout(defer.resolve, 300, "RESOLVED!");