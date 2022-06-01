function increaser(a, index) {
  if (a > index) {
    a += index;
  }

  return a;
}

let x = 20;
console.log(increaser(x, 10));

console.log(x);
