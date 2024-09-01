```
给定一个已排序的链表的头 head ， 删除所有重复的元素，
使每个元素只出现一次 。
返回 已排序的链表 。
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;

  var hashMap = new Map();
  var dummy = new ListNode(0, head);
  var prev = dummy;
  var current = head;
  while (current) {
    if (!hashMap.has(current.val)) {
      hashMap.set(current.val, current);
      prev = prev.next;
      current = current.next;
    } else {
      prev.next = current.next;
      current = current.next;
    }
  }

  return dummy.next;
};
