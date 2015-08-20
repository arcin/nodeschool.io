var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if( val !== '' ) args.push(+val)
  })
})

function avg(...nums) {
  return nums.reduce((result, num) => result + num) / nums.length
}

console.log(avg(...args))
