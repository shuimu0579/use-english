/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  var result = [];
  // 1.排序
  var sortList = candidates.sort((a, b) => a - b);

  function backTrack(list, k, path) {
    if (k === target) {
      result.push(Array.from(path));
      return;
    }

    //  2.提前剪枝
    if (k > target) {
      return;
    }

    var hashMap = new Map();
    for (let i = 0; i < list.length; i++) {
      // 3.去重
      if (hashMap.has(list[i])) {
        continue;
      } else {
        hashMap.set(list[i], 1);
      }

      var num = list[i];
      path.push(num);

      var arr = list.slice(i + 1);
      backTrack(arr, k + num, path);

      path.pop();
    }
  }
  backTrack(sortList, 0, []);

  return result;
};
