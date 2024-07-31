/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 冒泡排序
  // for(var i = 0; i <= nums.length - 1; i++){
  //     for(var j = 0; j <= nums.length - 1 - i; j++){
  //         if(nums[j] >nums[j + 1]){
  //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
  //         }
  //     }
  // }

  // 选择排序
  // for(var i = 0; i <= nums.length -1; i++){
  //     var minIndex = i;

  //     for(var j = i + 1; j <= nums.length -1; j++){
  //         if(nums[j] < nums[minIndex]){
  //             minIndex = j;
  //         }
  //     }

  //     if(minIndex !== i){
  //         [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
  //     }
  // }

  // 插入排序-- 扑克排序一样
  for (var i = 1; i <= nums.length - 1; i++) {
    // 当前要插入的值
    var current = nums[i];
    // 已经排好序的数组最后一个值
    var j = i - 1;

    while (j >= 0 && nums[j] > current) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }

  return nums;
};
