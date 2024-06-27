/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var fast = head;
  var slow = head;

  while (fast && fast.next) {
    // 下面两行代码一定要放在这里
    slow = slow.next;
    fast = fast.next.next;

    if (slow.val === fast.val) {
      return true;
    }
    // slow = slow.next;
    // fast = fast.next.next;
  }

  return false;
};
