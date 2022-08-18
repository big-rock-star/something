Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this; // 原函数的引用
  let res = context.fn(...[...arguments].slice(1));
  delete context.fn;
  return res;
};

Function.prototype.myApply = function (context, arr) {
  context = context || window;
  context.fn = this;
  let res;
  if (arr) {
    res = context.fn(...arr);
    delete context.fn;
  } else {
    res = context.fn();
    delete context.fn;
  }
  return res;
};

Function.prototype.myBind = function (context) {
  let _me = this;
  return function () {
    return _me.apply(context, [...arguments]);
  };
};

var a = 1,
  b = 2;
var obj3 = { a: 10, b: 20 };
function test(key1, key2) {
  console.log(this[key1] + this[key2]);
}
var fn = test.myBind(obj3);
console.log("fn==", fn);
fn("a", "b"); // 30

// let obj = {
//   name: 12356,
// };

// function test() {
//   console.log(this.name, arguments);
// }

// test.myCall(obj, 1, 2, 3);

// let obj1 = {
//   a: function () {
//     var b = () => {
//       console.log(this);
//     };
//     b();
//   },
// };

// obj1.a();
