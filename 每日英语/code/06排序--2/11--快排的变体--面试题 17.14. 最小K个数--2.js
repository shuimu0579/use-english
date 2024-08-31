```
设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
```;

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 快速选择排序的变体
var smallestK = function (arr, k) {
  // if(arr.length === 0 || k = 0) return [];
  if (arr.length === 0 || k === 0) return [];

  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      var pivot = getPivot(arr, left, right);
      if (pivot === k - 1) {
        return;
      } else if (pivot > k - 1) {
        quickSort(arr, left, pivot - 1);
      } else {
        quickSort(arr, pivot + 1, right);
      }
    }
  }
  function getPivot(arr, left, right) {
    var current = arr[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
      if (arr[j] <= current) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    return i + 1;
  }
  quickSort(arr);

  return arr.slice(0, k);
};
