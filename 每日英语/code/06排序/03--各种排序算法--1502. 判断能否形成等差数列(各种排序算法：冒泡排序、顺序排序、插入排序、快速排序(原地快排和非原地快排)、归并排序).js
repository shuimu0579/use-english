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

  // 插入排序算法
  var quickSort = arr;
  for (var i = 1; i < quickSort.length; i++) {
    // 当前要插入的元素
    var current = quickSort[i];
    // j 指向已排序部分的最后一个元素
    var j = i - 1;

    // 将比 current 大的元素向右移动
    while (j >= 0 && quickSort[j] >= current) {
      quickSort[j + 1] = quickSort[j];
      j--;
    }

    // 在正确的位置插入 current
    quickSort[j + 1] = current;
  }

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
  // 快速排序--原地排序
  function quickSortList(arr, left, right) {
    // left < right  递归中终止条件, 一定要添加
    if (left < right) {
      var povit = getPovit(arr, left, right);

      quickSortList(arr, left, povit - 1);
      quickSortList(arr, povit + 1, right);
    }
  }
  function getPovit(arr, left, right) {
    var povit = arr[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
      if (arr[j] <= povit) {
        i++;
        // arr[i] = arr[j];
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    // [arr[i+1], povit] = [povit, arr[i+1]];
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    return i + 1;
  }
  quickSortList(arr, 0, arr.length - 1);
  var quickSort = arr;

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
  var mergeSortList = function (arr = []) {
    if (arr.length <= 1) return arr;

    var mid = arr.length / 2;
    var leftList = arr.slice(0, mid);
    var rightList = arr.slice(mid);

    // return merge(leftList, rightList);
    return merge(mergeSortList(leftList), mergeSortList(rightList));
  };
  function merge(leftList, rightList) {
    var result = [];

    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftList.length && rightIndex < rightList.length) {
      if (leftList[leftIndex] < rightList[rightIndex]) {
        result.push(leftList[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightList[rightIndex]);
        rightIndex++;
      }
    }

    // if(leftIndex < leftList.length){
    //     result.push(leftList[leftIndex]);
    // }
    while (leftIndex < leftList.length) {
      result.push(leftList[leftIndex]);
      leftIndex++;
    }
    // if(rightIndex < rightList.length){
    //     result.push(rightList[rightIndex]);
    // }
    while (rightIndex < rightList.length) {
      result.push(rightList[rightIndex]);
      rightIndex++;
    }

    return result;
  }
  var quickSort = mergeSortList(arr);

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
