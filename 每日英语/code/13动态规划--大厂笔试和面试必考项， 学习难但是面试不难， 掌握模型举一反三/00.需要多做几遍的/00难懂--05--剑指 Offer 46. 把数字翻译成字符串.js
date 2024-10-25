// dp[i] = dp[i-1] + dp[i-2](必须是可翻译的，06就不可翻译)
// 想想 506 这种情况  预期为 1
// Number(str) <= 25 && Number(str) >= 10 才能说明 str是可翻译的
// str = 06, 这个 06是不可翻译的。
/**
 * @param {number} ciphertext
 * @return {number}
 */

// 状态定义：dp[i]表示strings(长度为i)转化为字母有多少种方法
var crackNumber = function (ciphertext) {
  var strings = ciphertext.toString();
  var n = strings.length;
  var dp = new Array(n + 1).fill(0);

  // 空字符串有1种解密方式(虽然实际上是无意义的)
  dp[0] = 1;
  // 只有一个数字时,只有1种解密方式
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let str = strings.slice(i - 2, i);
    if (Number(str) <= 25 && Number(str) >= 10) {
      // 如果两个数字可以组成有效的字母(10-25),则增加解密方式
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      // 单个数字总是可以解密
      dp[i] = dp[i - 1];
    }
  }

  return dp[n];
};
