/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  // 如果根节点为空,直接返回
  if (!root) return root;

  // 创建一个虚拟头节点
  var dummy = new Node(0);
  var current = dummy;

  // 定义中序遍历函数
  function dfs(root) {
    if (!root) return null;

    // 先遍历左子树
    dfs(root.left);

    // 将当前节点连接到链表中
    current.right = root;
    root.left = current;
    current = root;

    // 再遍历右子树
    dfs(root.right);
  }

  // 执行中序遍历
  dfs(root);

  // 找到链表的最后一个节点
  var node = dummy;
  while (node.right) {
    node = node.right;
  }

  // 将链表首尾相连,形成循环双向链表
  node.right = dummy.right;
  dummy.right.left = node;

  // 返回链表的头节点(跳过虚拟头节点)
  return dummy.right;
};
