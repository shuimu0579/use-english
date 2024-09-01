```
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) return head;

  var prev = null;
  var current = head;
  var next = null;
  while (current) {
    var next = current.next;

    current.next = prev;
    prev = current;

    current = next;
  }

  return prev;
};
