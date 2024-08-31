```
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
```;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
      var pivot = getPovit(nums, left, right);
      if (pivot === nums.length - k) {
        return;
      } else if (pivot < nums.length - k) {
        quickSort(nums, pivot + 1, right);
      } else if (pivot > nums.length - k) {
        quickSort(nums, left, pivot - 1);
      }
    }
  }
  function getPovit(nums, left, right) {
    var current = nums[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
      if (nums[j] <= current) {
        i++;
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];

    return i + 1;
  }
  quickSort(nums);

  return nums[nums.length - k];
}
