/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  // 如果根节点为空,直接返回null
  if (!root) return null;

  // 创建一个虚拟头节点
  var dummy = new TreeNode(0);
  // current指针用于追踪当前链表的末尾
  var current = dummy;

  // 定义中序遍历函数(这里命名为bfs可能有误,实际上是中序遍历)
  function bfs(root) {
    if (!root) return null;

    // 先处理左子树
    bfs(root.left);

    // 处理当前节点:
    // 将当前节点的左指针置空
    root.left = null;
    // 将当前节点连接到链表末尾
    current.right = root;
    // 移动current指针到新的链表末尾
    current = root;

    // 最后处理右子树
    bfs(root.right);
  }

  // 开始遍历
  bfs(root);

  // 返回转换后的链表头节点(跳过虚拟头节点)
  return dummy.right;
};
