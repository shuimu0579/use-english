/**
 * @param {string} s
 * @returns {boolean}
 */
var isValid = function (s) {
  var obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  var leftStack = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      leftStack.push(s[i]);
    } else {
      if (leftStack.length) {
        var peek = leftStack[leftStack.length - 1];
        if (obj[peek] === s[i]) {
          leftStack.pop();
        }
      }
    }
    // i++
  }

  return leftStack.length === 0;
};
