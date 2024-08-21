/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  var hashMap = new Map();

  for (var i of s) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) + 1);
    } else {
      hashMap.set(i, 1);
    }
    // hashMap.set(i, 1);
  }

  for (var j of t) {
    if (hashMap.has(j)) {
      hashMap.set(j, hashMap.get(j) - 1);
    } else {
      return false;
    }
  }

  return [...hashMap.values()].every((i) => !i);
};
