function countWords(inputWords) {
  return inputWords.reduce(function(object, current){
    object[current] = ++object[current] || 1;
    return object;
  }, {});
}

module.exports = countWords;