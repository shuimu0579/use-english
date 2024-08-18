/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var hashMap = new Map();
  var arr = [];
  var stringMap = new Map();

  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      var complete = 0 - nums[i] - nums[j];

      if (hashMap.has(complete)) {
        var item = [complete, nums[i], nums[j]].sort((a, b) => a - b);
        var string = item.join(",");
        if (stringMap.has(string)) {
          continue;
        } else {
          stringMap.set(string, item);
          arr.push(item);
        }
      }
    }

    hashMap.set(nums[i], i);
  }

  return arr;
};
