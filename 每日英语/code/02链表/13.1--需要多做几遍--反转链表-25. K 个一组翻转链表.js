/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next) return head;
  if (k === 1) return head;

  var current = head;
  var size = 0;
  while (current) {
    size++;
    current = current.next;
  }

  var dummy = new ListNode(0, head);
  var prev = dummy;

  while (Math.floor(size / k) > 0) {
    var start = prev.next;
    var then = start.next;
    // for(var i = 0; i < k; i++){
    for (var i = 0; i < k - 1; i++) {
      // start.next = then.next;
      then.next = prev.next;
      prev.next = then;
      then = start.next;
    }
    prev = start;

    size = size - k; // size 必须要更新
  }

  return dummy.next;
};
