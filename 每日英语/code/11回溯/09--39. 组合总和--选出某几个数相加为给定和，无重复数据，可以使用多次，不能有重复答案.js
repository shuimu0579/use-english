/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var result = [];

  function backTrack(list, k, path) {
    if (k === target) {
      result.push(Array.from(path));
      return;
    }

    // 1.剪枝
    if (k > target) {
      return;
    }

    for (let i = 0; i < list.length; i++) {
      var num = list[i];
      path.push(num);

      //2. 下标为i的数字 可以重复利用
      var arr = list.slice(i);
      // var arr = list.slice(i+1);
      // var arr = Array.from(list);

      backTrack(arr, k + num, path);

      path.pop();
    }
  }
  backTrack(candidates, 0, []);

  return result;
};
