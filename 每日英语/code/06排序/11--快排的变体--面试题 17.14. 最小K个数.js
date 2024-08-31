/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 快排;
// var smallestK = function (arr, k) {
//   function quickSort(arr = []) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     var povitIndex = Math.floor(arr.length / 2);
//     var left = arr.filter((i) => i < arr[povitIndex]);
//     var mid = arr.filter((i) => i === arr[povitIndex]);
//     var right = arr.filter((i) => i > arr[povitIndex]);
//     return [...quickSort(left), ...mid, ...quickSort(right)];
//   }
//   var sortList = quickSort(arr);
//   return sortList.slice(0, k);
// };

// 归并排序
// var smallestK = function (arr, k) {
//   function mergeSort(arr = []) {
//     if (arr.length <= 1) return arr;
//     var povit = Math.floor(arr.length / 2);
//     var left = mergeSort(arr.slice(0, povit));
//     var right = mergeSort(arr.slice(povit));
//     return merge(left, right);
//   }
//   function merge(left = [], right = []) {
//     var result = [];
//     var leftIndex = 0;
//     var rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] < right[rightIndex]) {
//         result.push(left[leftIndex]);
//         leftIndex++;
//       } else {
//         result.push(right[rightIndex]);
//         rightIndex++;
//       }
//     }
//     // if(leftIndex < left.length){
//     //     result.push(left[leftIndex]);
//     // }
//     // if(rightIndex < right.length){
//     //     result.push(right[rightIndex]);
//     // }
//     result = [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
//     return result;
//   }
//   var sortList = mergeSort(arr);
//   return sortList.slice(0, k);
// };

// 快速选择排序的变体
var smallestK = function (arr, k) {
  if (k === 0 || arr.length === 0) return [];

  quickSelect(arr, 0, arr.length - 1, k);

  // return arr.slice(k);
  return arr.slice(0, k);
};

function quickSelect(arr, left, right, k) {
  if (left === right) return;

  var povit = getPovit(arr, left, right);
  var count = povit - left + 1;

  if (count === k) return;
  if (count > k) {
    quickSelect(arr, left, povit - 1, k);
  } else {
    quickSelect(arr, povit + 1, right, k - count);
  }
}

function getPovit(arr, left, right) {
  var povit = arr[right];
  var i = left - 1;

  // for(var j = left; j <= right; j++){
  for (var j = left; j < right; j++) {
    // if(arr[j] < povit){
    if (arr[j] <= povit) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  // [arr[i+1], povit] = [povit, arr[i+1]];
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

  return i + 1;
}
