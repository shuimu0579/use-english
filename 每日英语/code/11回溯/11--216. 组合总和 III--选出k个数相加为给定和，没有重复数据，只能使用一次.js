/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  var result = [];
  var nums = Array.from({ length: 9 }, (_, i) => i + 1);

  function backTrack(list, count, m, path) {
    if (count === k && m === n) {
      result.push([...path]);
      return;
    }

    // 剪枝
    if (m > n) {
      return;
    }

    for (let i = 0; i < list.length; i++) {
      let num = list[i];
      path.push(num);

      let arr = list.slice(i + 1);
      backTrack(arr, count + 1, m + num, path);

      path.pop();
    }
  }
  backTrack(nums, 0, 0, []);

  return result;
};
