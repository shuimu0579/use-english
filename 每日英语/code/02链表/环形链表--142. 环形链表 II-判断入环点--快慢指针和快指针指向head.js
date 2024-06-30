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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var fast = head;
  var slow = head;
  var hasCycle = false;

  while (fast && fast.next) {
    // 下面两行代码一定要放在这里
    slow = slow.next;
    fast = fast.next.next;

    if (fast.val === slow.val) {
      hasCycle = true;
      break;
    }
    // slow = slow.next;
    // fast = fast.next.next;
  }

  if (hasCycle) {
    fast = head;
    while (fast) {
      if (fast.val === slow.val) {
        return fast;
      }
      slow = slow.next;
      fast = fast.next;
    }
  }

  return null;
};
