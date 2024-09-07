/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var result = [];

  function backTrack(left, right, path) {
    if (path.length === 2 * n) {
      result.push(path.join(""));
      return;
    }

    if (left < n) {
      path.push("(");
      backTrack(left + 1, right, path);
      path.pop();
    }

    if (right < left) {
      path.push(")");
      backTrack(left, right + 1, path);
      path.pop();
    }
  }
  backTrack(0, 0, []);

  return result;
};
