// requestAnimationFrame 比起 setTimeout、setInterval 的优势主要有两点
// requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒 60 帧。
// 在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然就意味着更少的的 cpu，gpu 和内存使用量。

// requestAnimationFrame 的回调会在每一帧确定执行，属于高优先级任务

var progress = 0;
function render() {
  progress += 1;
  console.log("progress====", progress);
  if (progress < 100) {
    window.requestAnimationFrame(render);
  }
}

window.requestAnimationFrame(render);
