var inputs = process.argv.slice(2);
var result = inputs.map((str) => str[0])
                   .reduce((s, ns) => s + ns );

console.log(result);
