/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  if (!tree) return null; // 如果树为空，返回null

  var list = []; // 用于存储每层节点链表的数组

  var queue = [tree]; // 初始化队列，包含根节点
  while (queue.length > 0) {
    // 当队列不为空时循环
    var dummy = new ListNode(0); // 创建虚拟头节点
    var current = dummy; // 当前指针指向虚拟头节点
    var queueLength = queue.length; // 当前层的节点数

    for (var i = 0; i < queueLength; i++) {
      // 遍历当前层的所有节点
      var peak = queue.shift(); // 取出队列头部的节点
      var node = new ListNode(peak.val, null); // 创建新的链表节点

      current.next = node; // 将新节点连接到链表
      current = node; // 移动当前指针

      if (peak.left) queue.push(peak.left); // 如果有左子节点，加入队列
      if (peak.right) queue.push(peak.right); // 如果有右子节点，加入队列
    }

    list.push(dummy.next); // 将当前层的链表（去掉虚拟头节点）加入结果数组
  }

  return list; // 返回结果数组
};
