// 给定一个单链表的头节点 head ，倒序遍历输出单链表中的节点值。链表中的节点定义为 ListNode，其中包含 print() 函数用来打印节点。你不需要自己去定义 ListNode 类和实现 print() 函数，直接使用即可。

// 示例
// 输入：head=[3, 1, 4]
// 输出：[4, 1, 3]

/**
 * 审题关键
 * 并不是将链表倒序输出，而是将链表的节点值倒序输出。
 * 如果是倒置链表，仅仅用递归是不可以的。
 */

/**
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 *     print() {
 *         console.log(this.val + " ");
 *     }
 * }
 */
/**
 * @param {ListNode} head
 */
var reversePrint = function (head) {
  if (!head) return;

  reversePrint(head.next);

  head.print();
};
