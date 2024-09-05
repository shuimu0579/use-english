// 防抖--500ms后才执行一次
function douce(fn, delay) {
  var timer;
  return function (e) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(e);
    }, delay);
  };
}

function getSize(e) {
  console.log(e);
}
window.addEventListener("resize", douce(getSize, 500));
