/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) return true;

  var left = 0;
  var right = Math.floor(num / 2);

  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);

    if (mid * mid === num) {
      return true;
    } else if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    }
  }

  return false;
};
