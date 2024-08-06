// ```
// 首先，我们检查一个特殊情况：如果目标字符大于或等于数组中的最后一个字符，我们应该返回数组的第一个字符（因为数组是循环的）。
// 我们使用二分查找的变体来找到大于 target 的最小字符：

// 初始化 left 指向数组开始，right 指向数组结束。
// 当 left < right 时，我们继续查找：
//   计算中间索引 mid。

//   如果 letters[mid] <= target，我们知道答案在右半部分，所以将 left 移到 mid + 1。
//   否则，答案可能是 mid 或在左半部分，所以我们将 right 移到 mid。

// 循环结束后，left 指向的就是我们要找的字符。
// ```;

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// 使用 left < right 的版本
var nextGreatestLetter = function (letters, target) {
  if (target >= letters[letters.length - 1]) return letters[0];

  var left = 0;
  var right = letters.length - 1;
  // while(left <= right){
  while (left < right) {
    var mid = Math.floor((left + right) / 2);

    // if(letters[mid] < target){
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      // right = mid - 1
      right = mid;
    }
  }

  return letters[left];
};

// 使用 left <= right 的版本（为了比较）
function nextGreatestLetterAlternative(letters, target) {
  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }

  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return letters[left % letters.length];
}
