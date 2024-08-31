```
详细解释：
首先，我们检查数组长度。如果数组长度小于等于 1，直接返回原数组。

找出数组中的最大值和最小值。这一步是为了确定计数数组的范围。

创建计数数组 countArray。其长度为 max - min + 1，初始化所有元素为 0。

遍历原数组，统计每个元素的出现次数。我们使用 arr[i] - min 作为索引，这样可以处理负数或不从 0 开始的数据。

重建排序后的数组。我们遍历计数数组，对于每个元素，根据其计数将对应的值添加到排序后的数组中。

计数排序的特点：
时间复杂度：O(n + k)，其中 n 是数组长度，k 是数值范围。
空间复杂度：O(k)，需要额外的计数数组。
稳定性：计数排序是稳定的，相等元素的相对顺序不会改变。
适用场景：适合对整数或在有限范围内的数据进行排序，特别是当数据范围不是很大时效率很高。

计数排序的优点是在特定情况下可以达到线性时间复杂度，非常高效。但它也有一些限制，比如只适用于整数或有限范围内的数据，且当数据范围很大时，空间复杂度会变高。

在实际应用中，计数排序常用于对年龄、成绩等范围有限的数据进行排序，或作为基数排序的一个步骤。
```;

function countingSort(arr) {
  if (arr.length <= 1) return arr;

  // 步骤 1: 找出数组中的最大值和最小值
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  // 步骤 2: 创建计数数组
  const range = max - min + 1;
  const countArray = new Array(range).fill(0);

  // 步骤 3: 统计每个元素的出现次数
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i] - min]++;
  }

  // 步骤 4: 根据计数数组重建排序后的数组
  const sortedArray = [];
  for (let i = 0; i < range; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i + min);
      countArray[i]--;
    }
  }

  return sortedArray;
}

// 使用示例
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // 输出: [1, 2, 2, 3, 3, 4, 8]
