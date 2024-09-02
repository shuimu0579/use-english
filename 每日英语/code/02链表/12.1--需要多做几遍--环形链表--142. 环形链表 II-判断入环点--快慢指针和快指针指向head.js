```
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

https://leetcode.cn/problems/linked-list-cycle-ii/description/
```;

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  var slow = head;
  // var fast = head.next;
  var fast = head;
  var hasCircle = false;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      hasCircle = true;
      break; // 这一行很重要， 不然会超时
    }
    // slow = slow.next;
    // fast = fast.next.next;
  }

  if (hasCircle) {
    var current = head;
    while (current) {
      if (current === slow) {
        return current;
      }
      current = current.next;
      slow = slow.next;
    }
  }

  return null;
};
