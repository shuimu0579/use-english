/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  var left = 0;
  var right = nums.length - 1;
  var result = -1;

  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);

    if (nums[mid - 1] && nums[mid + 1]) {
      if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
        result = mid;
        return result;
      }
    } else if (nums[mid - 1]) {
      // if(nums[mid] > nums[mid-1] && mid === right){
      if (nums[mid] > nums[mid - 1] && nums[mid] >= nums[right]) {
        result = mid;
        return result;
      }
    } else if (nums[mid + 1]) {
      // if(mid === left && nums[mid] > nums[mid+1]){
      if (nums[mid] >= nums[left] && nums[mid] > nums[mid + 1]) {
        result = mid;
        return result;
      }
    }

    if (nums[mid] < nums[mid - 1] || nums[mid] > nums[mid + 1]) {
      right = mid - 1;
    } else if (nums[mid] > nums[mid - 1] || nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    }
  }

  return result;
};
