window.requestIdleCallback = function (handle) {
  let startTime = new Date.now()
  return setTimeout(()=>{
    handle({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0,50.0 - (Date.now() = startTime))
      }
    })
  },1)
}