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
 * @return {void} Do not return anything, modify root in-place instead.
 */

```
这个算法使用后序遍历的方式将二叉树展开为链表。

以下是算法的主要步骤:
1、首先处理基本情况:如果根节点为空,直接返回。
2、递归地展平左子树和右子树。这确保了所有子树都被正确展平。
3、保存当前节点的右子树,因为我们稍后需要它。
4、将左子树设置为新的右子树,并将左子树置空。这是展平过程的关键步骤。
5、遍历新的右子树(原左子树)直到末端。
6、将原来的右子树接到新右子树的末端。
7. 返回根节点。

这个算法的时间复杂度是O(n),其中n是树中的节点数,因为每个节点都被访问一次。空间复杂度是O(h),其中h是树的高度,这是由于递归调用栈的深度。
这种方法巧妙地利用了树的结构,通过重新连接节点来实现原地展平,不需要额外的空间来存储展平后的结果。
```;
var flatten = function (root) {
  // 基本情况:如果根节点为空,直接返回
  if (!root) return null;

  // 递归展平左子树
  flatten(root.left);
  // 递归展平右子树
  flatten(root.right);

  // 保存原来的右子树
  var temp = root.right;
  // 将左子树作为新的右子树
  root.right = root.left;
  // 将左子树置空
  root.left = null;

  // 找到新右子树(原左子树)的末端
  var current = root;
  while (current.right) {
    current = current.right;
  }

  // 将原来的右子树接到新右子树的末端
  current.right = temp;

  return root;
};
