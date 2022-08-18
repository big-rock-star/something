// 优
// 划分命令空间 ， 减少全局变量
// 增强模块 单一位置
// 只会实例化一次 简化代码和维护

// 劣
// 单点访问 强耦合 不利于单元测试

class LoginForm {
  constructor() {
    this.state = "hide";
  }

  show() {
    if (this.state === "show") {
      console("已显示");
      return;
    }

    this.state = "show";
    console.log("显示成功");
  }

  hide() {
    if (this.state) {
      alert("已经隐藏");
      return;
    }
    this.state = "hide";
    console.log("隐藏成功");
  }
}

LoginForm.getInstance = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = new LoginForm();
    }
    return instance;
  };
})();

let a = LoginForm.getInstance();
let b = LoginForm.getInstance();
console.log(a === b);
