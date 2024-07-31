/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * 超出时间限制
 */
var merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  var quickSortList = function (intervals = []) {
    // 递归终止条件
    if (intervals.length <= 1) {
      return intervals;
    }

    var polit = intervals[Math.floor(intervals.length / 2)];
    var leftArr = intervals.filter((i) => i[0] < polit[0]) || [];
    var middleArr = intervals.filter((i) => i[0] === polit[0]);
    var rightArr = intervals.filter((i) => i[0] > polit[0]) || [];

    return [
      ...quickSortList(leftArr),
      ...middleArr,
      ...quickSortList(rightArr),
    ];
  };
  var quickSort = quickSortList(intervals);

  var result = [quickSort[0]];
  for (var i = 1; i < quickSort.length; i++) {
    if (quickSort[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        quickSort[i][1]
      );
    } else {
      result.push(quickSort[i]);
    }
  }
  return result;
};

var intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals));
