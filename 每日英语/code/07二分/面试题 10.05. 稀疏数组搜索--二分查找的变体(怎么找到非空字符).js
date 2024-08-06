// ```
// 让我解释一下这个算法的思路和实现：

// 基本框架：我们使用二分查找的基本框架，但需要处理空字符串的特殊情况。

// 处理空字符串：
// 如果中间元素是空字符串，我们需要向两边扩展，找到最近的非空字符串。
// 我们使用 left_temp 和 right_temp 两个指针，分别向左和向右搜索。
// 如果找到非空字符串，我们更新 mid 指向这个非空字符串。
// 如果两个指针都超出了搜索范围且没有找到非空字符串，我们返回 -1。

// 比较和调整：
// 一旦我们有了非空的中间元素，我们就可以像普通二分查找一样比较和调整搜索范围。

// 返回结果：
// 如果找到目标字符串，返回其索引。
// 如果搜索结束仍未找到，返回 -1。

// 这个算法的关键点在于如何处理空字符串。我们不能简单地跳过空字符串，因为这可能会打乱二分查找的平衡。相反，我们需要找到最近的非空字符串来进行比较。
// ```

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  var left = 0;
  var right = words.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (words[mid] === "") {
      var leftIndex = mid - 1;
      var rightIndex = mid + 1;
      while (true) {
        if (leftIndex < left && rightIndex > right) {
          return -1;
        }
        // else if(words[leftIndex] < s && words[leftIndex] !== ''){
        //     mid = leftIndex;
        //     break;
        // }else if(words[rightIndex] > s && words[rightIndex] !== ''){
        //     mid = rightIndex;
        //     break;
        // }
        else if (leftIndex >= left && words[leftIndex] !== "") {
          mid = leftIndex;
          break;
        } else if (rightIndex <= right && words[rightIndex] !== "") {
          mid = rightIndex;
          break;
        }

        leftIndex--;
        rightIndex++;
      }
    }

    if (words[mid] === s) {
      return mid;
    } else if (words[mid] < s) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
