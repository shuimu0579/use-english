/**
 * 反转列表的迭代做法：反转列表-206. 反转链表--简单
 */

/**
 *  让我解释一下这个递归实现的关键部分：
    基本情况：
    如果链表为空（head === null）或只有一个节点（head.next === null），直接返回头节点。这是递归的终止条件。

    递归步骤：
    调用 reverseList(head.next)，这会反转当前节点之后的所有节点。
    递归调用返回后，head.next 指向的节点现在是反转后子链表的最后一个节点。

    反转指针：
    将 head.next.next 设置为 head，这样原来的下一个节点现在指向当前节点。
    将 head.next 设置为 null，切断原来的链接。

    返回新的头节点：
    返回 reversedSublist，它是原链表的最后一个节点，现在成为新的头节点。

    这个递归方法的优点是代码简洁，逻辑清晰。但也有一些注意事项：
    时间复杂度是 O(n)，其中 n 是链表的长度。
    空间复杂度是 O(n)，因为递归调用会使用栈空间。
    对于非常长的链表（比如超过几千个节点），可能会导致栈溢出。
 *
 */

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
var trainningPlan = function (head) {
  if (head === null || head.next === null) return head;

  const node = trainningPlan(head.next);

  head.next.next = head;
  head.next = null;

  return node;
};
