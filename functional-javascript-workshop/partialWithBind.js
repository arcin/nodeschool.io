var slice = Array.prototype.slice

function logger(namespace) {
  return function () {
    console.log(slice.call(arguments).join(' '))
  }.bind(null, namespace)
}

module.exports = logger
