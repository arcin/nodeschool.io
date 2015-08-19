var inputs = process.argv.slice(2)
var result = inputs.map(string => string[0])
                   .reduce( (final, current) => final + current );

console.log(`[${inputs}] becomes "${result}"`)


