/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一
var twoSum = function (nums, target) {
  var hashMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    // var a = hashMap.get(nums[i]);
    var a = nums[i];
    if (hashMap.has(target - a)) {
      return [hashMap.get(target - a), i];
    }
    hashMap.set(nums[i], i);
  }
};

// 方法二
// var twoSum = function (nums, target) {
//   var hashMap = new Map();
//   for (var i = 0; i < nums.length; i++) {
//     var a = target - nums[i];
//     if (hashMap.has(a)) {
//       return [hashMap.get(a), i];
//     }
//     hashMap.set(nums[i], i);
//   }
// };
