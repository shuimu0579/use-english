/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  var arrLeft = [];
  var arrRight = [];

  var hashMap1 = new Map();

  var hashMap2 = new Map();
  for (var i2 of arr2) {
    hashMap2.set(i2, 1);
  }

  for (var i1 of arr1) {
    if (hashMap1.has(i1)) {
      hashMap1.set(i1, hashMap1.get(i1) + 1);
    } else {
      hashMap1.set(i1, 1);
    }

    if (!hashMap2.has(i1)) {
      arrRight.push(i1);
    }
  }

  for (var i2 of arr2) {
    if (hashMap1.has(i2)) {
      arrLeft.push(...new Array(hashMap1.get(i2)).fill(i2));
    }
  }

  // return [...arrLeft, ...arrRight.sort()];
  return [...arrLeft, ...arrRight.sort((a, b) => a - b)];
};
