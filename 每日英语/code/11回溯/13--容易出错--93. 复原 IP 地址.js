/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  var result = [];

  function backTrack(str, k, index, path) {
    if (k === 4 && index === s.length) {
      result.push(path.join("."));
      return;
    }

    // 剪枝
    if (k === 4 || index >= s.length) {
      return;
    }

    for (let i = 1; i <= 3 && index + i <= s.length; i++) {
      let segment = str.slice(index, index + i);

      if (i > 1 && segment.startsWith("0")) continue;
      if (i === 3 && Number(segment) > 255) continue;

      path.push(segment);
      backTrack(str, k + 1, index + i, path);
      path.pop();
    }
  }

  backTrack(s, 0, 0, []);

  return result;
};
