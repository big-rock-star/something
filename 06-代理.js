// 是为一个对象提供一个代用品或占位符，以便控制对它的访问
// 优点
// 代理模式能将代理对象与被调用对象分离，降低了系统的耦合度。
// 代理模式在客户端和目标对象之间起到一个中介作用，这样可以起到保护目标对象的作用
// 代理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；

// 缺点
// 处理请求速度可能有差别，非直接访问存在开销

// 装饰者模式实现上和代理模式类似

// 装饰者模式： 扩展功能，原有功能不变且可直接使用
// 代理模式： 显示原有功能，但是经过限制之后的

let Flower = function () {};

let xiaoming = {
  sendFlower: function (target) {
    let flower = new Flower();
    target.receiveFlower(flower);
  },
};

let B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(() => {
      A.receiveFlower(flower);
    });
  },
};

let A = {
  receiveFlower: function (flower) {
    console.log("收到花", flower);
  },

  listenGoodMood: function (fn) {
    setTimeout(() => {
      fn();
    }, 1000);
  },
};

xiaoming.sendFlower(B);
