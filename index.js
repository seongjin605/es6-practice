const a = [
  ['a', 'b'],
  ['c', 'z'],
  ['d', 'e', 'f']
];
a.sort((a, b) => {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] < b[1] ? -1 : 1;
  }
});
console.log(a);
