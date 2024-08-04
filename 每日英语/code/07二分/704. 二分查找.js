/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找--递归方式实现
var search = function (nums, target) {
  if (nums.length === 0) return -1;

  var index = briany(nums, 0, nums.length - 1, target);

  return index;
};

function briany(nums, left, right, target) {
  if (left > right) return -1;

  //   var index = Math.floor((right - left) / 2);
  var index = Math.floor((right + left) / 2);
  if (nums[index] === target) {
    return index;
  } else if (nums[index] > target) {
    // briany(nums, left, index, target);
    // return briany(nums, left, index, target);
    return briany(nums, left, index - 1, target);
  } else {
    // briany(nums, index, right, target);
    // return briany(nums, index, right, target);
    return briany(nums, index + 1, right, target);
  }
}

// 二分查找--迭代方式实现
var search = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  // var mid = Math.floor((left + right) / 2);

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
