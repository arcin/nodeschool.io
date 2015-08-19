function Spy(target, method) {
  var unobservedFunction = target[method]

  var spy = {
    count: 0
  }

  target[method] = function stuff() {
    spy.count += 1;
    return unobservedMethod.apply(null, arguments)
  }
  return spy
}

module.exports = Spy
