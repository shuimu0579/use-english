/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyTreeOrder = function (postorder) {
  if (postorder.length === 0) return true;

  var val = postorder[postorder.length - 1];
  var index = postorder.findIndex((i) => i > val);

  var leftPostorder = postorder.slice(0, index);
  var rightPostorder = postorder.slice(index, postorder.length - 1);
  var leftValid = leftPostorder.every((i) => i < val);
  var rightValid = rightPostorder.every((i) => i > val);

  return (
    leftValid &&
    rightValid &&
    verifyTreeOrder(leftPostorder) &&
    verifyTreeOrder(rightPostorder)
  );
};
