// !!不是 const value = this.head.value, 而是const value = this.head.val

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {number} value
   */
  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * @returns {boolean}
   */
  dequeue() {
    if (this.head === null) {
      return -1;
    }
    // const value = this.head.value;
    const value = this.head.val;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return value;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }
}

var a = new LinkedQueue();
a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.dequeue();
a.dequeue();
a.dequeue();
var b = a.isEmpty();
console.log("a", a);
console.log("b", b);
