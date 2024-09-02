```
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
```;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var fast = head;
  var slow = head;

  var dummy = new ListNode(0, head);
  var prev = dummy;

  for (var i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    prev = prev.next;
    fast = fast.next;
  }

  prev.next = slow.next;
  slow.next = null;

  return dummy.next;
};
