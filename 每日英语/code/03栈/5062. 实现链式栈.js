/**
 * class ListNode {
 *     constructor(val) {
 *         this.val = val;
 *         this.next = null;
 *     }
 * }
 */
class LinkedStack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  /**
   * @param {number} value
   */
  push(val) {
    var node = new ListNode(val);

    node.next = this.top;
    this.top = node;

    this.size++;
  }

  /**
   * @returns {number}
   */
  pop() {
    if (this.isEmpty()) return -1;

    var node = this.top;
    this.top = this.top.next;

    this.size--;

    return node.val;
  }

  /**
   * @returns {number}
   */
  peek() {
    if (this.isEmpty()) return -1;

    var node = this.top;

    return node.val;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
}
