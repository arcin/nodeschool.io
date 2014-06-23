var q = require('q'),
    defer = q.defer();

defer.promise.then(console.log, console.log);

// a promise cannot be changed once it has been either resolved or rejected.
// In this case, "I DID NOT FIRE" will never be logged, because the promise was already
// resolved.
defer.resolve('I FIRED');
defer.reject("I DID NOT FIRE");