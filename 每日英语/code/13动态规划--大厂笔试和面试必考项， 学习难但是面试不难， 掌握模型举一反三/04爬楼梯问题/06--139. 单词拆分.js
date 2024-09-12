/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// 一个单词一个单词的匹配，这样好理解一些
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var n = s.length;
  var dp = new Array(n + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= n; i++) {
    for (let word of wordDict) {
      let len = word.length;
      let start = i - len;
      if (start >= 0 && s.startsWith(word, start) && dp[i - len]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[n];
};

// 下面这种方式一个字符一个字符的匹配，是很不好理解的。
```
为什么是  for(let j = 0; j < i; j++)

目的：
这个循环的目的是检查字符串 s 的所有可能的前缀子串，看它们是否可以被拆分为字典中的单词。

索引含义：
i 表示当前考虑的子串的结束位置（不包含）。
j 表示可能的分割点，也就是前缀子串的结束位置（不包含）。

循环范围：
j 从 0 开始，因为我们需要考虑从字符串开头开始的所有可能性。
j < i，因为我们要检查的是 [0, j) 和 [j, i) 这两部分。

子串划分：
[0, j) 部分由 dp[j] 表示其是否可拆分。
[j, i) 部分我们直接检查是否在字典中。

```;

// 这种方式就可以
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var n = s.length;
  var dp = new Array(n + 1).fill(false);

  dp[0] = true;
  // dp[1] = wordDict.includes(s[0]);
  for (let i = 1; i <= n; i++) {
    var isValid = false;
    // for(let j = 1; j <= i; i++){
    // for(let j = 1; j <= i; j++){
    for (let j = 0; j < i; j++) {
      // let subStr = s.slice(i-j, i+1);
      // if(dp[i-j] && wordDict.includes(subStr)){
      //     isValid = true;
      //     break;
      // }
      let subStr = s.slice(j, i);
      if (dp[j] && wordDict.includes(subStr)) {
        isValid = true;
        break;
      }
    }
    dp[i] = isValid;
  }

  return dp[n];
};

// 下面这种方式有点问题
// var wordBreak = function (s, wordDict) {
//   var n = s.length;
//   var dp = new Array(n + 1).fill(false);

//   dp[0] = true;
//   dp[1] = wordDict.includes(s[0]);
//   for (let i = 2; i <= n; i++) {
//     var isValid = false;
//     // for(let j = 1; j <= i; i++){
//     for (let j = 1; j <= i; j++) {
//       let subStr = s.slice(i - j, i + 1);
//       if (wordDict.includes(subStr)) {
//         // isValid = dp[i-j-1];
//         isValid = dp[i - j];
//       }
//     }
//     dp[i] = isValid;
//   }

//   return dp[n];
// };
