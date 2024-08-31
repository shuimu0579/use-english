/**
 * @param {number[]} record
 * @return {number}
 */

// 如下这种方式：时间复杂度：O(n^2)， 时间上会超限
var reversePairs = function (record) {
  if (record.length <= 1) return [];

  var result = 0;
  for (var i = 0; i < record.length; i++) {
    for (var j = i + 1; j < record.length; j++) {
      if (record[j] < record[i]) {
        result++;
      }
    }
  }

  return result;
};

// 更好的方式--归并排序
var reversePairs = function (record) {
  // 如果数组长度小于等于1，没有逆序对
  if (record.length <= 1) return 0;

  // 创建一个辅助数组来存储排序结果
  const temp = new Array(record.length);

  // 调用归并排序函数，并返回逆序对数量
  return mergeSort(record, temp, 0, record.length - 1);
};

function mergeSort(arr, temp, left, right) {
  // 如果左边界大于等于右边界，返回0
  if (left >= right) return 0;

  // 计算中间点
  const mid = Math.floor((left + right) / 2);

  // 递归处理左半部分，并累加逆序对数量
  let inversions = mergeSort(arr, temp, left, mid);

  // 递归处理右半部分，并累加逆序对数量
  inversions += mergeSort(arr, temp, mid + 1, right);

  // 合并两个有序数组，并统计跨越中点的逆序对
  inversions += merge(arr, temp, left, mid, right);

  return inversions;
}

function merge(arr, temp, left, mid, right) {
  // 初始化左右两部分的起始索引
  let i = left,
    j = mid + 1,
    k = left;
  let inversions = 0;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      // 如果左边元素小于等于右边元素，不构成逆序对
      temp[k++] = arr[i++];
    } else {
      // 如果左边元素大于右边元素，构成逆序对
      // 当前左边剩余的所有元素都会和arr[j]构成逆序对
      inversions += mid - i + 1;
      temp[k++] = arr[j++];
    }
  }

  // 处理剩余的元素
  while (i <= mid) temp[k++] = arr[i++];
  while (j <= right) temp[k++] = arr[j++];

  // 将排序后的结果复制回原数组
  for (let p = left; p <= right; p++) {
    arr[p] = temp[p];
  }

  return inversions;
}
