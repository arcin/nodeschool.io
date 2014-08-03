function reduce(arr, fn, initial) {
  var prev = initial,
      curr = arr[0];

  if (arr.length === 0) return initial;
  initial = fn(prev, curr);
  return reduce(arr.slice(1), fn, initial);
}

module.exports = reduce;