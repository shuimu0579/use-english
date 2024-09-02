/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 链接：https://leetcode.cn/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  var dummy = new ListNode(0);
  var prev = dummy;
  var current1 = list1;
  var current2 = list2;
  while (current1 && current2) {
    if (current1.val < current2.val) {
      prev.next = current1;
      prev = prev.next;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = prev.next;
      current2 = current2.next;
    }
  }
  while (current1) {
    prev.next = current1;
    prev = prev.next;
    current1 = current1.next;
  }
  while (current2) {
    prev.next = current2;
    prev = prev.next;
    current2 = current2.next;
  }

  return dummy.next;
};
