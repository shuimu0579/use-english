/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var hashMap = new Map();

  var currentA = headA;
  var currentB = headB;
  while (currentA) {
    hashMap.set(currentA, currentA);

    currentA = currentA.next;
  }

  while (currentB) {
    if (hashMap.has(currentB)) {
      return currentB;
    }

    currentB = currentB.next;
  }

  return null;
};
