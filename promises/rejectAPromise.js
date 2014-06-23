var q = require('q'),
    defer = q.defer();


var onError = function(error){
  console.log(error.message);
};

// pass in null as the first argument because the first
// argument is onFulfilled
defer.promise.then(null, onError);

// pass an error object on rejection
setTimeout(defer.reject, 300, new Error('REJECTED!'));