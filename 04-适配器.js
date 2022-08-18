// 优
// 两个没有关联的类一起运行
// 提高了类的复用
// 适配对象 适配库

// 劣
// 额外对象的创建 非直接调用 存在一定的开销 尽量完善文档

// 适配器模式： 提供一个不同的接口（如不同版本的插头）
// 代理模式： 提供一模一样的接口

class Plug {
  getName() {
    return "iphone充电头";
  }
}

class Target {
  constructor() {
    this.plug = new Plug();
  }
  getName() {
    console.log(this.plug.getName() + "*** 充电头");
    return this.plug.getName() + "*** 充电头";
  }
}

let target = new Target();
target.getName();

// -------------------------------  例  -----------------------------

// 自己封装的ajax， 使用方式如下
// ajax({
//   url: '/getData',
//   type: 'Post',
//   dataType: 'json',
//   data: {
//       test: 111
//   }
// }).done(function() {})
// // 因为历史原因，代码中全都是：
// // $.ajax({....})

// // 做一层适配器
// var $ = {
//   ajax: function (options) {
//       return ajax(options)
//   }
// }
