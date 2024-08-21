/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function (documents) {
  var hashMap = new Map();

  for (var document of documents) {
    if (hashMap.has(document)) {
      return document;
    }
    hashMap.set(document, document);
  }

  return null;
};
