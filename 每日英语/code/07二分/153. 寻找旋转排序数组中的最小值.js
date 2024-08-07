/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  var left = 0;
  var right = nums.length - 1;
  // 说明数组没有旋转
  if (nums[right] > nums[0]) {
    return nums[0];
  }

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    // 决定是从左还是从右找 最小值
    if (nums[0] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
