var progress = 0;
function render() {
  progress += 1;
  console.log("progress====", progress);
  if (progress < 100) {
    window.requestAnimationFrame(render);
  }
}

window.requestAnimationFrame(render);
