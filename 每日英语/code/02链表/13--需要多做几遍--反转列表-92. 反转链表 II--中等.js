/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head || !head.next) return head;

  var dummy = new ListNode(0, head);
  var prev = dummy;
  for (var i = 1; i < left; i++) {
    prev = prev.next;
  }
  var start = prev.next;
  var then = start.next;
  for (var i = 0; i < right - left; i++) {
    start.next = then.next;

    then.next = prev.next;
    prev.next = then;

    then = start.next;
  }

  return dummy.next;
};
