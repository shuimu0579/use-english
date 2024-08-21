/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
  this.hashMap = new Map();
  for (var i of book) {
    if (this.hashMap.has(i)) {
      this.hashMap.set(i, this.hashMap.get(i) + 1);
    } else {
      this.hashMap.set(i, 1);
    }
  }
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
  return this.hashMap.get(word) || 0;
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */
