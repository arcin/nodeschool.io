module.exports = function arrayMap (collection, fn) {
  return collection.reduce(function enqueueTransformed(stack, item, index, collection) {
    return stack.concat([fn(item)])
  }, [])
}
