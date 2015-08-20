module.exports = function (msg, mult = msg.length, transform = m => "!".repeat(m) ) {
  return `${msg}${transform(mult)}`
};
