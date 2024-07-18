// 为了实现这个系统，我们可以使用两个队列来分别存储狗和猫的信息。
// 每个队列中的元素都是一个对象，包含动物的编号和进入收容所的时间戳。
// 我们还需要一个变量来记录当前的时间戳，以便在领养动物时比较它们的进入时间。

class AnimalShelf {
  /**
   * @param {number} shelfSize
   */
  constructor(shelfSize) {
    this.shelfSize = shelfSize;
    this.dogQueue = [];
    this.catQueue = [];
    this.timestamp = 0;
  }

  /**
   * @param {number} dogID
   * @returns {boolean}
   */
  enqueueDog(dogID) {
    if (this.dogQueue.length + this.catQueue.length === this.shelfSize)
      return false;

    this.dogQueue.push({
      id: dogID,
      timestamp: this.timestamp,
    });
    this.timestamp++;

    return true;
  }

  /**
   * @param {number} catID
   * @returns {boolean}
   */
  enqueueCat(catID) {
    if (this.dogQueue.length + this.catQueue.length === this.shelfSize)
      return false;

    this.catQueue.push({
      id: catID,
      timestamp: this.timestamp,
    });
    this.timestamp++;

    return true;
  }

  /**
   * @returns {number}
   */
  dequeueAny() {
    if (this.dogQueue.length === 0 && this.catQueue.length === 0) return -1;

    var peek;
    if (this.dogQueue.length === 0) {
      peek = this.catQueue.shift();
      return peek.id;
    }

    if (this.catQueue.length === 0) {
      peek = this.dogQueue.shift();
      return peek.id;
    }

    var dogPeek = this.dogQueue[0];
    var catPeek = this.catQueue[0];
    if (dogPeek.timestamp < catPeek.timestamp) {
      peek = this.dogQueue.shift();
    } else {
      peek = this.catQueue.shift();
    }

    return peek.id;
  }

  /**
   * @returns {number}
   */
  dequeueDog() {
    if (this.dogQueue.length === 0) return -1;

    var peek = this.dogQueue.shift();

    return peek.id;
  }

  /**
   * @returns {number}
   */
  dequeueCat() {
    if (this.catQueue.length === 0) return -1;

    var peek = this.catQueue.shift();

    return peek.id;
  }
}
