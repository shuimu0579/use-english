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
 * @param {number} cnt
 * @return {number}
 */

// ```
// 这个解决方案的工作原理如下：

// 我们定义了一个计数器 count 和一个 result 变量来存储结果。
// reverseInorder 函数实现了反向中序遍历：

// 首先检查节点是否为空或者是否已经找到结果。如果是，直接返回。
// 先遍历右子树。
// 增加计数器，并检查是否已经找到第k大的值。如果是，设置结果并返回。
// 最后遍历左子树。

// 我们从根节点开始调用 reverseInorder 函数。
// 最后返回找到的结果。

// 这个解决方案的优点：

// 时间复杂度仍然是 O(n)，但在平均情况下，我们可能不需要遍历整棵树。
// 空间复杂度降低到 O(h)，其中 h 是树的高度。这是因为我们只使用了递归调用栈，而不是存储所有节点值。
// 一旦找到目标节点，就立即停止遍历，提高了效率。

// 这个方法特别适合于大型树或者当 k 相对较小时。它避免了不必要的遍历和存储，使得解决方案更加高效。
// ```;

// 更优化的解法
var findTargetNode = function (root, cnt) {
  var result = null;
  var count = 0;

  function reverseDFS(root) {
    // if(!root || !result) return false;
    if (!root || result !== null) return false;

    reverseDFS(root.right);

    count++;
    if (count === cnt) {
      result = root.val;
      return false;
    }

    reverseDFS(root.left);
  }
  reverseDFS(root);

  return result;
};

// 递归中序遍历解法
var findTargetNode = function (root, cnt) {
  var list = [];

  function dfs(node) {
    if (!node) return null;

    dfs(node.left);
    list.push(node.val);
    dfs(node.right);
  }
  dfs(root);

  return list[list.length - cnt];
};
