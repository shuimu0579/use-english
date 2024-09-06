/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var result = [];

  function backTrack(list, k, path) {
    if (k === nums.length) {
      result.push([...path]);
      return;
    }

    // 装
    path.push(list[k]);
    backTrack(list, k + 1, path);
    path.pop();

    // 不装
    backTrack(list, k + 1, path);
  }
  backTrack(nums, 0, []);

  return result;
};
