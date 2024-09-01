```
题目：
给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。

插入排序 算法的步骤:

插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。
下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

对链表进行插入排序。
```;

/**
 * 链表排序的时候, 其实是新建了一个链表， 与 head 没有任何引用短息。
 * dummy 哨兵节点千万不能 var dummy = new ListNode(0, head);
 * 而是 var dummy = new ListNode(0);
 *
 * 一般对链表的删除操作，就需要在前面添加哨兵节点，比如 dummy = new ListNode(0, head);
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
var insertionSortList = function (head) {
  var dummy = new ListNode(0, null);
  var prev = dummy;
  var current = head;
  var next = null;

  while (current) {
    next = current.next;

    while (prev.next && prev.next.val < current.val) {
      prev = prev.next;
    }

    current.next = prev.next;
    prev.next = current;

    prev = dummy;
    current = next;
  }

  return dummy.next;
};
