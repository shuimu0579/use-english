// !!循环队列,使用 this.size 才是关键！！！！

class CircularQueue {
  /**
   * @param {number} queueSize
   */
  constructor(queueSize) {
    this.queueSize = queueSize;
    this.queueList = new Array(queueSize).fill(null);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  /**
   * @param {number} value
   * @returns {boolean}
   */
  enqueue(item) {
    if (this.size === this.queueSize) return false;

    this.queueList[this.tail] = item;
    this.tail = (this.tail + 1 + this.queueSize) % this.queueSize;
    this.size++;

    return true;
  }

  /**
   * @returns {number}
   */
  dequeue() {
    if (this.size === 0) return -1;

    var top = this.queueList[this.head];
    this.queueList[this.head] = null;
    this.head = (this.head + 1 + this.queueSize) % this.queueSize;
    this.size--;

    return top;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }
}

var a = new CircularQueue(3);
a.enqueue(1);
a.enqueue(2);
a.enqueue(3);
a.enqueue(4);
a.dequeue();
a.dequeue();
a.dequeue();
a.dequeue();
var b = a.isEmpty();
console.log("a", a);
console.log("b", b);
