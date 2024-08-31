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
var sortList = function (head) {
  if (!head || (head && !head.next)) return head;

  var slow = head;
  var fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  var mid = slow.next;
  slow.next = null;

  let left = sortList(head);
  let right = sortList(mid);

  return merge(left, right);
};

function merge(left, right) {
  var dummy = new ListNode(0);
  var current = dummy;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }

    current = current.next;
  }

  if (left) {
    current.next = left;
  }
  if (right) {
    current.next = right;
  }

  return dummy.next;
}
