/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  var left = 0;
  var right = arr.length - 1;
  var result = -1;

  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);

    // if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      result = mid;
      return result;
    }

    if (arr[mid] < arr[mid - 1] || arr[mid] > arr[mid + 1]) {
      right = mid - 1;
    } else if (arr[mid] > arr[mid - 1] || arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    }
  }

  return result;
};
