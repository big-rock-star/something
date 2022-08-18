function* gen() {
  console.log("start");
  let a = yield 11;
  console.log(a);
  let b = yield 22;
  console.log(b);
}

let g = gen();
let first = g.next();
let second = g.next("11111");
let third = g.next("22222");
console.log("first", first, second, third);
// g.next();
// g.next();
// g.next();
