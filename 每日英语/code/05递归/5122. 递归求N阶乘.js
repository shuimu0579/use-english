/**
 * @param {number} n
 * @returns {number}
 */
var factorial = function (n) {
  if (n === 1) {
    return 1;
  }
  return (factorial(n - 1) * n) % 7777777;
};
