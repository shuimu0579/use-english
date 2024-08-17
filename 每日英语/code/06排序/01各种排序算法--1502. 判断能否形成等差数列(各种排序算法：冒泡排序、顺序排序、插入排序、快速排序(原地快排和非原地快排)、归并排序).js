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

  // 快速排序01--下面的实现 是原地排序算法
  // ```
  // 快速排序的核心思想和实现步骤如下：
  // 1、选择基准值（Pivot）：
  //   在这个实现中，我们选择数组的最后一个元素作为基准值。
  // 2、分区（Partition）过程：
  //   partition 函数负责将数组分成两部分，使得左边的元素都小于或等于基准值，右边的元素都大于基准值。
  //   使用两个指针 i 和 j：
  //     i 指向小于等于基准值的最后一个元素的位置。
  //     j 用于遍历数组。
  //   当 arr[j] <= pivot 时，增加 i 并交换 arr[i] 和 arr[j]。
  //   最后，将基准值放到正确的位置（i + 1）。
  // 3、 递归排序：
  // 对基准值左右两边的子数组递归应用快速排序。
  // 4、基本情况：
  // 当子数组的长度为 1 或 0 时，停止递归。
  // ```;
  var quickSortList = function (arr = [], left = 0, right = arr.length - 1) {
    if (left < right) {
      var pivot = getPivot(arr, left, right);
      quickSortList(arr, left, pivot - 1);
      quickSortList(arr, pivot + 1, right);
    }

    return arr;
  };
  function getPivot(arr, left, right) {
    var pivot = arr[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      // [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    return i + 1;
  }
  var quickSort = quickSortList(arr);
  console.log(quickSort);

  // 快速排序02--取中法--下面的实现不是原地排序算法
  // var quickSortList = function (arr = []) {
  //   if (arr && arr.length <= 1) {
  //     return arr;
  //   }

  //   var polit = arr[Math.floor(arr.length / 2)];
  //   var leftArr = arr.filter((i) => i < polit);
  //   var middleArr = arr.filter((i) => i === polit);
  //   var rightArr = arr.filter((i) => i > polit);

  //   return [
  //     ...quickSortList(leftArr),
  //     ...middleArr,
  //     ...quickSortList(rightArr),
  //   ];
  // };
  // var quickSort = quickSortList(arr);

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
