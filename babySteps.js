var args = process.argv;
for (var i = 2, sum = 0; i < args.length; i++) {
  sum = sum + Number(args[i]);
}
console.log(sum);