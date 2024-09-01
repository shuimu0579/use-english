```
给定两个以 有序链表 形式记录的训练计划 l1、l2，分别记录了两套核心肌群训练项目编号，请合并这两个训练计划，按训练项目编号 升序 记录于链表并返回。

注意：新链表是通过拼接给定的两个链表的所有节点组成的。
```;

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
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  var dummy = new ListNode(0);
  var prev = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
      prev = prev.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
      prev = prev.next;
    }
  }
  while (l1) {
    prev.next = l1;
    l1 = l1.next;
    prev = prev.next;
  }
  while (l2) {
    prev.next = l2;
    l2 = l2.next;
    prev = prev.next;
  }

  return dummy.next;
};
