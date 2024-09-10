// https://www.nowcoder.com/practice/81d2608fdd644982801ae8ce88bd10a9?sourceQid=36848&sourceTpId=37

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  // 一定要先将数组中的数字字符转为数字
  var nums = line.split(" ").map((i) => Number(i));

  var n = nums.length;
  var dp = new Array(n).fill(Number.MIN_SAFE_INTEGER);

  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }

    if (max !== Number.MIN_SAFE_INTEGER) {
      dp[i] = max + 1;
    } else {
      dp[i] = 1;
    }
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, dp[i]);
  }

  console.log(max);
});
