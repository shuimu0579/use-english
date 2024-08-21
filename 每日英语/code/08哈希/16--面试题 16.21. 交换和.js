/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function (array1, array2) {
  var hashMap1 = new Map();
  var hashMap2 = new Map();
  for (var i1 of array1) {
    if (hashMap1.has(i1)) {
      hashMap1.set(i1, hashMap1.get(i1) + 1);
    } else {
      hashMap1.set(i1, 1);
    }
  }
  for (var i2 of array2) {
    if (hashMap2.has(i2)) {
      hashMap2.set(i2, hashMap2.get(i2) + 1);
    } else {
      hashMap2.set(i2, 1);
    }
  }

  var sum1 = array1.reduce((x, y) => x + y, 0) || 0;
  var sum2 = array2.reduce((x, y) => x + y, 0) || 0;
  var count;
  if (sum1 < sum2) {
    var count = (sum2 - sum1) / 2;
    for (var [key1, value1] of hashMap1) {
      // for(var i1 of hashMap1){
      if (hashMap2.has(key1 + count)) {
        return [key1, key1 + count];
      }
    }
  } else if (sum1 > sum2) {
    var count = (sum1 - sum2) / 2;
    // for(var i2 of hashMap2){
    for (var [key2, value2] of hashMap2) {
      if (hashMap1.has(key2 + count)) {
        return [key2 + count, key2];
      }
    }
  }

  return [];
};
