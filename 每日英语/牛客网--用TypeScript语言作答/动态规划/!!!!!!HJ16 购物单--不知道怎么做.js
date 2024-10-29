const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
let n; // 预算（以元为单位）
let m; // 物品数量
let money = []; // 物品价格
let important = []; // 物品重要度
let id = []; // 物品类型（主件或附件）

rl.on("line", function (line) {
  arr.push(line);
});

rl.on("close", function () {
  // 解析输入
  [n, m] = arr[0].split(" ").map(Number);
  n /= 10; // 预算转为以10元为单位

  for (let i = 1; i <= m; i++) {
    const [v, p, q] = arr[i].split(" ").map(Number);
    money.push(v / 10); // 转换为以10元为单位
    important.push(p);
    id.push(q);
  }

  console.log(getMax(m, n, money, important, id));
});

function getMax(m, n, money, important, id) {
  // 创建二维动态规划数组
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (id[i] === 0) {
        // 主件
        if (j >= money[i]) {
          dp[i + 1][j] = Math.max(
            dp[i][j],
            dp[i][j - money[i]] + money[i] * important[i]
          );
        } else {
          dp[i + 1][j] = dp[i][j];
        }
      } else {
        // 附件
        const mainId = id[i] - 1; // 获取主件的索引
        if (j >= money[i] + money[mainId]) {
          dp[i + 1][j] = Math.max(
            dp[i][j], // 不选当前附件
            dp[i][j - money[i]] + money[i] * important[i] // 选当前附件
          );
        } else {
          dp[i + 1][j] = dp[i][j];
        }
      }
    }
  }

  return dp[m][n]; // 返回最大满意度
}
