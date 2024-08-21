/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  var hashMap = new Map();

  for (var i1 of s1) {
    if (hashMap.has(i1)) {
      hashMap.set(i1, hashMap.get(i1) + 1);
    } else {
      hashMap.set(i1, 1);
    }
  }
  for (var i2 of s2) {
    if (hashMap.has(i2)) {
      hashMap.set(i2, hashMap.get(i2) - 1);
    } else {
      return false;
    }
  }

  // return hashMap.values.every(i => !i);
  // return [...hashMap.values].every(i => !i);
  // return hashMap.values().every(i => !i);
  return [...hashMap.values()].every((i) => !i);
};
