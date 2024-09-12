/**
 * @param {number} ciphertext
 * @return {number}
 */

// dp[i] = dp[i-1] + dp[i-2](必须是可翻译的，06就不可翻译)
// 想想 506 这种情况  预期为 1
// Number(str) <= 25 && Number(str) >= 10 才能说明 str是可翻译的
// str = 06, 这个 06是不可翻译的。所以只能max = Math.max(max, dp[i - 1])

var crackNumber = function (ciphertext) {
  var strings = ciphertext.toString();
  var n = strings.length;
  // var dp = new Array(n+1).fill(1);
  var dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    var max = 0;
    for (let j = 1; j <= i; j++) {
      if (j + 1 <= i) {
        // let str = ciphertext.slice(j, j+2);
        let str = strings.slice(i - 2, i);
        // 想想 506 这种情况  预期为 1
        // Number(str) <= 25 && Number(str) >= 10 才能说明 str是可翻译的
        // str = 06, 这个 06是不可翻译的。所以只能max = Math.max(max, dp[i - 1])

        // if(Number(str) <= 25){
        if (Number(str) <= 25 && Number(str) >= 10) {
          max = Math.max(max, dp[i - 1] + dp[i - 2]);
        } else {
          max = Math.max(max, dp[i - 1]);
        }
      } else {
        max = Math.max(max, dp[i - 1]);
      }
    }
    dp[i] = max;
  }

  return dp[n];
};
