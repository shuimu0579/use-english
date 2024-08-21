/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// new Map() 解法
// var intersection = function (nums1, nums2) {
//   var arr = [];

//   var hashMap1 = new Map();
//   for (var num1 of nums1) {
//     hashMap1.set(num1, 1);
//   }

//   var hashMap2 = new Map();
//   for (var num2 of nums2) {
//     // hashMap2.set(nums2, 1);
//     hashMap2.set(num2, 1);
//   }

//   for (var i1 of hashMap1.keys()) {
//     if (hashMap2.has(i1)) {
//       arr.push(i1);
//     }
//   }

//   return arr;
// };

// new Set() 解法
var intersection = function (nums1, nums2) {
  // 将nums1转换为Set,去除重复元素
  const set1 = new Set(nums1);
  // 用于存储交集的Set
  const intersectionSet = new Set();

  // 遍历nums2,检查每个元素是否在set1中
  for (let num of nums2) {
    if (set1.has(num)) {
      intersectionSet.add(num);
    }
  }

  // 将Set转换为数组并返回
  return Array.from(intersectionSet);
};
