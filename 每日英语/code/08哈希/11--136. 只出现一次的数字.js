/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var hashMap = new Map();

  for (var num of nums) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  // for(var (key, value) of hashMap){
  for (var [key, value] of hashMap) {
    if (value === 1) {
      return key;
    }
  }

  return null;
};
