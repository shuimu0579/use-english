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

  // 判断是不是等差数列
  var diff = quickSort[1] - quickSort[0];
  for (var i = 0; i < quickSort.length - 1; i++) {
    if ((quickSort[i + 1] || 0) - quickSort[i] !== diff) {
      return false;
    }
  }

  return true;
};

const arr = [1, 2, 4];

console.log(canMakeArithmeticProgression(arr));
