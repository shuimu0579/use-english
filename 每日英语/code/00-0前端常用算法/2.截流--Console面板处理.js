function throttle(fn, delay) {
  let runFlag = false; // 这个给runFlag 仅仅是设置初始默认值为false,在以后的throttle调用中会覆盖这个初始默认值。
  return function (e) {
    // 判断之前的调用是否完成, 如果为false ,说明调用完成了。
    if (runFlag) {
      return false;
    }
    runFlag = true;
    setTimeout(() => {
      fn(e);
      runFlag = false; // delay时间之后，重置 runFlag 为 false
    }, delay);
  };
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener("resize", throttle(sayHi, 5000));
