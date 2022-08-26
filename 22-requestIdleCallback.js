// requestIdleCallback 的回调则不一定，有空闲时间才执行，属于低优先级任务。

requestIdleCallback(myWork);

// 一个任务队列
let tasks = [
  function t1() {
    console.log("执行任务1");
  },
  function t2() {
    console.log("执行任务2");
  },
  function t3() {
    console.log("执行任务3");
  },
  function t4() {
    console.log("执行任务4");
  },
  function t5() {
    console.log("执行任务5");
  },
  function t6() {
    console.log("执行任务6");
  },
];

// deadline是requestIdleCallback返回的一个对象
function myWork(deadline) {
  console.log(`当前帧剩余时间: ${deadline.timeRemaining()}`);
  // 查看当前帧的剩余时间是否大于0 && 是否还有剩余任务
  if (deadline.timeRemaining() > 0 && tasks.length) {
    // 在这里做一些事情
    const task = tasks.shift();
    task();
  }
  // 如果还有任务没有被执行，那就放到下一帧调度中去继续执行，类似递归
  if (tasks.length) {
    requestIdleCallback(myWork);
  }
}
