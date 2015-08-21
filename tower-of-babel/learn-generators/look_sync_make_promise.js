function askFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

function run (generator) {
  iterator = generator(askFoo())
}

run(function* () {
  var foo;
  try {
    foo = yield askFoo();
  } catch (e) {
    foo = null
  }

  console.log(foo);
})
