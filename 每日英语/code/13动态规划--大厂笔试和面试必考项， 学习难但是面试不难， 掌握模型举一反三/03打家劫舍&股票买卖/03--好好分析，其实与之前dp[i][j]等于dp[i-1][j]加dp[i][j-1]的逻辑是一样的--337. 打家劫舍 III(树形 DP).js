// 本质上与打家劫舍I 的逻辑是一样的。
```
一个节点中有头和不偷两个状态
先确定第一行的状态， dp[0][0] = 0; dp[0][1] = nums[0];
然后 确定递推公式
if (j === 0) {
  dp[i][j] = Math.max(dp[i - 1][0], dp[i - 1][1]);
} else {
  dp[i][j] = dp[i - 1][0] + nums[i];
}
```;

```
而树形打家劫舍
也是每个节点都有偷和不偷两种状态
通过后序遍历，确定叶子节点的左右子节点的状态(为[0,0]), 然后确定递推公式
let money = [0, 0];
money[0] =
  Math.max(leftMoney[0], leftMoney[1]) +
  Math.max(rightMoney[0], rightMoney[1]);
money[1] = leftMoney[0] + rightMoney[0] + root.val;
return money;
```;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  if (!root) {
    let arr = [0, 0];
    return Math.max(arr[0], arr[1]);
  }

  function dfs(root) {
    if (!root) {
      return [0, 0];
    }

    let leftMoney = dfs(root.left);
    let rightMoney = dfs(root.right);

    let money = [0, 0];
    money[0] =
      Math.max(leftMoney[0], leftMoney[1]) +
      Math.max(rightMoney[0], rightMoney[1]);
    money[1] = leftMoney[0] + rightMoney[0] + root.val;

    return money;
  }
  let money = dfs(root);

  return Math.max(money[0], money[1]);
};
