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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var currentList1 = list1;
  var currentList2 = list2;

  var standNode = new ListNode(null, null);
  var prevNode = standNode;

  while (currentList1 || currentList2) {
    if (currentList1 && currentList2) {
      if (currentList1.val <= currentList2.val) {
        prevNode.next = currentList1;

        prevNode = currentList1;
        currentList1 = currentList1.next;
      } else {
        prevNode.next = currentList2;

        prevNode = currentList2;
        currentList2 = currentList2.next;
      }
    } else if (currentList1) {
      prevNode.next = currentList1;
      prevNode = currentList1;
      currentList1 = currentList1.next;
    } else if (currentList2) {
      prevNode.next = currentList2;
      prevNode = currentList2;
      currentList2 = currentList2.next;
    }
  }

  return standNode.next;
};
