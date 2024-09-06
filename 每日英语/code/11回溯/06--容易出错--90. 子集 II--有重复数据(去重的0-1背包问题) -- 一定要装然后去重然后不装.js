/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  var result = [];
  var sortList = nums.sort((a, b) => a - b);

  function backTrack(list, k, path) {
    if (k === nums.length) {
      result.push([...path]);
      return;
    }

    // 装
    path.push(list[k]);
    backTrack(list, k + 1, path);
    path.pop();

    // 去重
    while (k + 1 < nums.length && list[k] === list[k + 1]) {
      k++;
    }
    // 不装
    backTrack(list, k + 1, path);
  }
  backTrack(sortList, 0, []);

  return result;
};
