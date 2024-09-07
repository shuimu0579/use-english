/**
 * @param {string} digits
 * @return {string[]}
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  var obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  var result = [];

  function backTrack(strs, k, path) {
    if (k === strs.length) {
      result.push(path.join(""));
      return;
    }

    var num = digits[k];
    var str = obj[num];
    for (let i of str) {
      path.push(i);

      // 为什么这里不能 subStr = strs.slice(1)
      // var subStr = strs.slice(1);
      // backTrack(subStr, k+1, path);
      backTrack(strs, k + 1, path);

      path.pop();
    }
  }
  backTrack(digits, 0, []);

  return result;
};
