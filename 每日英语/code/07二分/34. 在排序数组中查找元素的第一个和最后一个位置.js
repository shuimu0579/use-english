```
这种解法之所以显得奇妙，主要是因为它巧妙地结合了以下几点：

- 问题分解：将"找区间"转化为"找左边界"和"找右边界"两个子问题。
- 二分查找的变体：常规二分查找在找到目标值后就停止，而这里的变体在找到目标值后仍继续搜索，以定位边界。
- 代码复用：通过一个布尔参数来控制搜索方向，使得同一个函数可以用于查找左右两个边界。
- 结果的渐进式更新：在搜索过程中，我们不断更新可能的结果，确保即使在最后一次迭代中找到边界，我们也能捕获到它。
```;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  function search(nums, target, isLeft) {
    var left = 0;
    var right = nums.length - 1;
    var result = -1;

    while (left <= right) {
      var mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        if (isLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }

  var leftIndex = search(nums, target, true);
  if (leftIndex === -1) {
    return [-1, -1];
  }
  var rightIndex = search(nums, target, false);

  return [leftIndex, rightIndex];
};
