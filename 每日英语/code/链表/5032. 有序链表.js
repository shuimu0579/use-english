/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}

/**
 * @param {ListNode} head
 * @param {number} value
 * @returns {ListNode}
 */
var insert = function (head, value) {
    if (!head) return new ListNode(value, null);

    var newHead = new ListNode(null, head);
    var prev = newHead;
    var node = head;
    var a;
    while (node) {
        if (prev.val <= value && node.val >= value) {
            break;
        }
        prev = node;

        node = node.next;
    }
    if (!node) {
        a = new ListNode(value, node);
        prev.next = a;
    }

    a = new ListNode(value, node);
    prev.next = a;

    return newHead.next;
};

var head = { val: 1, next: { val: 5, next: null } };
// var head = null;
var value = 5;

var insert01 = insert(head, value);
console.log(insert01);
