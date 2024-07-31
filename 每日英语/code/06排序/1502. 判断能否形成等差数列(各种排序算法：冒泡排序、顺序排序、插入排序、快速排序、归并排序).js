/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  if (arr.length === 2) return true;

  // 冒泡排序
  // var quickSort = arr;
  // for(var i = 0; i < quickSort.length; i++){
  //     for(var j = 0; j < quickSort.length - i; j++){
  //         if(quickSort[j] > quickSort[j+1]){
  //             [quickSort[j], quickSort[j+1]] = [quickSort[j+1], quickSort[j]]
  //         }
  //     }
  // }

  // 选择排序
  // var quickSort = arr;
  //   for(var i = 0; i < quickSort.length; i++){
  //       var minIndex = i;
  //       for(var j = i + 1; j < quickSort.length; j++){
  //           if(quickSort[j] < quickSort[minIndex]){
  //               minIndex = j
  //           }
  //       }

  //       if(minIndex !== i){
  //           [quickSort[i], quickSort[minIndex]] = [quickSort[minIndex], quickSort[i]]
  //       }
  //   }

  // 插入排序
  // var quickSort = arr;
  // for(var i = 1; i < quickSort.length; i++){
  //     var current = quickSort[i];
  //     var j = i - 1;

  //     while(j >= 0 && quickSort[j] > current){
  //         quickSort[j+1] = quickSort[j];
  //         j--;
  //     }

  //     quickSort[j+1] = current;
  // }

  // 快速排序--取中法
  var quickSortList = function (arr = []) {
    if (arr && arr.length <= 1) {
      return arr;
    }

    var polit = arr[Math.floor(arr.length / 2)];
    var leftArr = arr.filter((i) => i < polit);
    var middleArr = arr.filter((i) => i === polit);
    var rightArr = arr.filter((i) => i > polit);

    return [
      ...quickSortList(leftArr),
      ...middleArr,
      ...quickSortList(rightArr),
    ];
  };
  var quickSort = quickSortList(arr);

  // 归并排序
  // var mergeSortList = function (arr = []) {
  //   if (arr.length <= 1) {
  //     return arr;
  //   }

  //   var middle = Math.floor(arr.length / 2);
  //   var leftArr = arr.slice(0, middle);
  //   var rightArr = arr.slice(middle);

  //   return merge(mergeSortList(leftArr), mergeSortList(rightArr));
  // };
  // function merge(left = [], right = []) {
  //   var result = [];
  //   var leftIndex = 0;
  //   var rightIndex = 0;

  //   while (leftIndex < left.length && rightIndex < right.length) {
  //     if (left[leftIndex] < right[rightIndex]) {
  //       result.push(left[leftIndex]);
  //       leftIndex++;
  //     } else {
  //       result.push(right[rightIndex]);
  //       rightIndex++;
  //     }
  //   }

  //   result = [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];

  //   return result;
  // }
  // var quickSort = mergeSortList(arr);

  // 判断是不是等差数列
  var diff = quickSort[1] - quickSort[0];
  for (var i = 0; i < quickSort.length - 1; i++) {
    if ((quickSort[i + 1] || 0) - quickSort[i] !== diff) {
      return false;
    }
  }

  return true;
};

// const arr = [1, 2, 4];
const arr = [1, 3, 5];

console.log(canMakeArithmeticProgression(arr));
