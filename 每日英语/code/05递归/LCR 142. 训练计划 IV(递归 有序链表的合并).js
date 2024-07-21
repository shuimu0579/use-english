/**
 * 注意：本题与主站 21 题相同：https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

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
var trainningPlan = function (l1, l2) {
  // 基本情况：如果其中一个链表为空，返回另一个链表
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  // 比较当前节点的值，并递归
  if (l1.val <= l2.val) {
    l1.next = trainningPlan(l1.next, l2);
    return l1;
  } else {
    l2.next = trainningPlan(l1, l2.next);
    return l2;
  }
};
