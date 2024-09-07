/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  var result = [];

  function backTrack(str, k, path) {
    if (k === str.length) {
      result.push([...path]);
      return;
    }

    for (let i = k; i < str.length; i++) {
      // let subStr = str.slice(0, i + 1);
      let subStr = str.slice(k, i + 1);
      if (isValidStr(subStr, 0, subStr.length - 1)) {
        path.push(subStr);
        backTrack(str, i + 1, path);
        path.pop();
      }
    }
  }
  // 判断是否为回文串
  function isValidStr(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  }
  backTrack(s, 0, []);

  return result;
};
