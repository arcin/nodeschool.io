var q = require('q'),
    defer = q.defer();

defer.promise.then(onError);

var onError = function(error){
  console.log(error);
};
setTimeout(defer.reject, 300, new Error('REJECTED!'));