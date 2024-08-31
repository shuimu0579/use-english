/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  function sort(arr = []) {
    if (arr.length <= 1) return arr;

    var mid = arr.length / 2;
    var leftList = arr.slice(0, mid);
    var rightList = arr.slice(mid);

    return listMerge(sort(leftList), sort(rightList));
  }
  function listMerge(left, right) {
    var arr = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      // if (left[leftIndex] <= right[rightIndex]) {
      if (left[leftIndex][0] <= right[rightIndex][0]) {
        arr.push(left[leftIndex]);
        leftIndex++;
      } else {
        arr.push(right[rightIndex]);
        rightIndex++;
      }
    }
    while (leftIndex < left.length) {
      arr.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      arr.push(right[rightIndex]);
      rightIndex++;
    }

    return arr;
  }
  var list = sort(intervals);
  console.log(list);

  var result = [list[0]];
  for (var i = 1; i < list.length; i++) {
    if (list[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        list[i][1]
      );
    } else {
      result.push(list[i]);
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
