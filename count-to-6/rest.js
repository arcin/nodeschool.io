module.exports = function average (...args) {
  return args.reduce((memo, num) => memo + num) / args.length;
}
