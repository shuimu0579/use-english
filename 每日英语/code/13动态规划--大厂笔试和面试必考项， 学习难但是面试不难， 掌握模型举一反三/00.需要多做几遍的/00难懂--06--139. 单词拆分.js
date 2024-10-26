```
使用两层循环：外层遍历字符串的每个位置，内层寻找可能的切分点。

这句话应该怎么理解呢？

外层循环 (i)

  目的：遍历字符串中的每个位置（从1到字符串长度）
  含义：对于每个位置i，我们在问："到位置i为止的子串能否被拆分成字典中的单词？"


内层循环 (j)

  目的：尝试在当前位置i之前的所有可能切分点j
  含义：对于当前位置i，我们尝试所有可能的j，检查：

    dp[j]是否为true（j位置之前的子串是否可以被拆分）
    s.substring(j, i)是否在字典中

```;

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var n = s.length;
  var dp = new Array(n + 1).fill(false);

  dp[0] = true;
  for (let i = 1; i < n + 1; i++) {
    // for(let j = 1; j <= i; j++){
    for (let j = 0; j < i; j++) {
      // if(dp[i-j] === true && wordDict.includes(s.slice(j, i))){
      if (dp[j] === true && wordDict.includes(s.slice(j, i))) {
        dp[i] = true;
      }
    }
  }

  return dp[n];
};
