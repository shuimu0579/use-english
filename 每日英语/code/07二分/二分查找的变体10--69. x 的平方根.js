/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;

  var left = 0;
  var right = x / 2;

  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);

    if (Math.floor(mid) * Math.floor(mid) === x) {
      return Math.floor(mid);
      // } else if(Math.floor(mid) * Math.floor(mid) < x && Math.ceil(mid) * Math.ceil(mid) > x){
    } else if (
      Math.floor(mid) * Math.floor(mid) < x &&
      Math.floor(mid + 1) * Math.floor(mid + 1) > x
    ) {
      return Math.floor(mid);
    } else if (x < Math.floor(mid) * Math.floor(mid)) {
      right = mid - 1;
    } else if (x > Math.ceil(mid) * Math.ceil(mid)) {
      left = mid + 1;
    }
  }
};
