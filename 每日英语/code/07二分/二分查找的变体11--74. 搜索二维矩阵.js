// 二维转一维，二分查找

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  var arr = [];
  for (var i = 0; i < matrix.length; i++) {
    arr.push(...matrix[i]);
  }

  if (arr.length === 1) return arr[0] === target;

  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return false;
};
