/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var dummy = new ListNode(0);
  var prev = dummy;
  var temp = 0;

  while (l1 && l2) {
    var node = new ListNode((temp + l1.val + l2.val) % 10);
    prev.next = node;

    temp = Math.floor((temp + l1.val + l2.val) / 10);

    l1 = l1.next;
    l2 = l2.next;
    prev = prev.next;
  }

  while (l1) {
    var node = new ListNode((temp + l1.val) % 10);
    prev.next = node;

    temp = Math.floor((temp + l1.val) / 10);

    l1 = l1.next;
    prev = prev.next;
  }
  while (l2) {
    var node = new ListNode((temp + l2.val) % 10);
    prev.next = node;

    temp = Math.floor((temp + l2.val) / 10);

    l2 = l2.next;
    prev = prev.next;
  }

  if (temp === 1) {
    var node = new ListNode(temp % 10);
    prev.next = node;
  }

  return dummy.next;
};
