```
给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
```;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
      // 选择一个枢轴并进行分区
      var pivot = getPovit(nums, left, right);
      if (pivot === nums.length - k) {
        return;
      } else if (pivot < nums.length - k) {
        quickSort(nums, pivot + 1, right);
      } else if (pivot > nums.length - k) {
        quickSort(nums, left, pivot - 1);
      }
    }
  }
  function getPovit(nums, left, right) {
    var current = nums[right];
    var i = left - 1;

    for (var j = left; j < right; j++) {
      if (nums[j] <= current) {
        i++;
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    [nums[i + 1], nums[right]] = [nums[right], nums[i + 1]];

    return i + 1;
  }
  quickSort(nums);

  return nums[nums.length - k];
}

// 用堆排序来处理,时间复杂度 O(n*logK)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(key) {
    this.heap.push(key);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyDown(i) {
    let minIndex = i;
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
      minIndex = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
      minIndex = right;
    }

    if (minIndex !== i) {
      this.swap(i, minIndex);
      this.heapifyDown(minIndex);
    }
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

function findKthLargest(nums, k) {
  const minHeap = new MinHeap();

  // 将前k个元素加入最小堆
  for (let i = 0; i < k; i++) {
    minHeap.insert(nums[i]);
  }

  // 对于剩余的元素，如果大于堆顶，则替换堆顶
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.extractMin();
      minHeap.insert(nums[i]);
    }
  }

  // 堆顶元素就是第K个最大元素
  return minHeap.peek();
}

// 测试
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // 应输出 5

```
这个算法的工作原理如下：
我们创建一个最小堆，大小为K。
将数组的前K个元素插入堆中。

3. 对于剩余的元素，我们比较它们与堆顶元素：
如果当前元素大于堆顶元素，我们就移除堆顶元素，并插入当前元素。
如果当前元素小于或等于堆顶元素，我们就忽略它。
遍历完所有元素后，堆顶元素就是第K个最大元素。
时间复杂度分析：
构建大小为K的堆需要O(K)时间。
对于剩余的(N-K)个元素，每个元素我们都需要进行一次比较，可能还需要一次删除操作和一次插入操作。每次这样的操作的时间复杂度是O(logK)。
因此，总的时间复杂度是O(K + (N-K)logK)，这可以简化为O(NlogK)。
这个方法的优点是它只需要O(K)的额外空间，而且可以处理流数据（你不需要一次性获得所有数据）。
对于本题来说，当K远小于N时，这个方法比快速选择算法更有效。但是，如果K接近N，那么快速选择算法可能会更快，因为它的平均时间复杂度是O(N)。
```;
