/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n, pick) {
  var left = 1;
  var right = n;

  while (left <= right) {
    var num = Math.floor((left + right) / 2);
    var guessNumber = guess(num, pick);

    if (guessNumber === 0) return num;

    if (guessNumber === 1) {
      left = num + 1;
    } else if (guessNumber === -1) {
      right = num - 1;
    }
  }

  return -1;
};

function guess(num, pick) {
  if (num > pick) return -1;
  if (num === pick) return 0;
  if (num < pick) return 1;
}
