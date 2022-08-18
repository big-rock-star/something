// 一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为
// 一个操作中含有大量的分支语句，而且这些分支语句依赖于该对象的状态

// 优点
// 定义了状态与行为之间的关系，封装在一个类里，更直观清晰，增改方便
// 状态与状态间，行为与行为间彼此独立互不干扰
// 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然

// 缺点
// 会在系统中定义许多状态类
// 逻辑分散

class State {
  constructor(state) {
    this.state = state;
  }
  handle(context) {
    console.log(`${this.state} handle ${context}`);
    context.setState(this);
  }
}
class Context {
  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

let context = new Context();
let weak = new State("weak");
let strong = new State("strong");
let off = new State("off");
weak.handle(context);
console.log(context.getState());

strong.handle(context);
console.log(context.getState());
