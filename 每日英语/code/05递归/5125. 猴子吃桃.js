/**
 * @param {number} nDays
 * @returns {number}
 */
var eatPeaches = function (nDays) {
  // f(n-1) = 1/2 * f(n) - 1
  // f(n) = 2 * f(n - 1) + 2;
  // f(1) = 1
  // f(2) = 4;
  // f(3) = 10;

  if (nDays === 1) {
    return 1;
  }
  return 2 * eatPeaches(nDays - 1) + 2;
};
