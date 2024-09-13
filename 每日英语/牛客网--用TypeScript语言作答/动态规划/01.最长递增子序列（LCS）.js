// https://www.nowcoder.com/practice/81d2608fdd644982801ae8ce88bd10a9?sourceQid=36848&sourceTpId=37

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var nums = line.split(" ").map(Number);
  var n = nums.length;
  var dp = new Array(n).fill(1);

  dp[0] = 1;
  for (let i = 1; i <= n - 1; i++) {
    var max = Number.MIN_SAFE_INTEGER;
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

  var count = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= n - 1; i++) {
    count = Math.max(count, dp[i]);
  }
  console.log(count);
});
