/**
 * https://leetcode.cn/problems/sorted-merge-lcci/
 */

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  var Aindex = m - 1;
  var Bindex = n - 1;
  var index = m + n - 1;

  while (Aindex >= 0 && Bindex >= 0) {
    if (A[Aindex] >= B[Bindex]) {
      A[index] = A[Aindex];
      Aindex--;
      index--;
    } else {
      A[index] = B[Bindex];
      Bindex--;
      index--;
    }
  }

  // B 里面有剩余元素
  while (Bindex >= 0) {
    A[index] = B[Bindex];
    Bindex--;
    index--;
  }

  // A 里面有剩余元素, 就在原地， 不用管。
};
