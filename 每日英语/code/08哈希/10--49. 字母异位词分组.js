/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 使用排序后的字符串作为 key 值
var groupAnagrams = function (strs) {
  var hashMap = new Map();

  for (var str of strs) {
    var key = str.split("").sort().join();

    if (!hashMap.has(key)) {
      hashMap.set(key, []);
    }
    // else{
    //     hashMap.get(key).push(str);
    // }

    hashMap.get(key).push(str);
  }

  return Array.from(hashMap.values());
};
