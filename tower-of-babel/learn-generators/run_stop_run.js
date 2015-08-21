function *range(from, to) {
  yield from;
  while (from < to)
    yield from += 1;
}

for (var r of range(5, 10)) {
  console.log( r );
}
