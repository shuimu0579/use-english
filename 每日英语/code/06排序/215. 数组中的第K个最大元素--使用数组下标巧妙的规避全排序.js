/**
 * 这个过程实际上是在模拟从大到小排序的过程，但不需要真正对数组进行排序。我们只需要知道每个数字出现了多少次，然后从最大的数开始"数"，直到数到第 k 个。
 * 这种方法之所以高效，是因为它避免了实际的排序操作，而是利用计数的方式在线性时间内找到了答案。对于任何 k 值，这个过程的时间复杂度都是 O(n + m)，其中 n 是数组长度，m 是数值范围。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  var maxIndex = 10000;
  var counts = new Array(2 * maxIndex + 1).fill(0);

  // for(num of nums){
  for (let num of nums) {
    counts[num + maxIndex]++;
  }

  var remain = k;
  // for(var i = nums.length - 1; i >=0; i--){
  for (var i = counts.length - 1; i >= 0; i--) {
    remain = remain - counts[i];
    if (remain <= 0) {
      return i - maxIndex;
    }
  }

  return null;
}
