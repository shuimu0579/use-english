const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var list = line.split(" ");
  var arr = list.slice(2);
  var deleteNode = arr.pop();
  var nodeList = [];
  for (var i = 0; i < arr.length; i = i + 2) {
    nodeList.push([arr[i], arr[i + 1]]);
  }

  var linkList = new Array(arr.length / 2).fill(null);
  linkList[0] = list[1];

  for (let i = 0; i < nodeList.length; i++) {
    var index = linkList.findIndex((j) => j === nodeList[i][1]);
    for (var j = linkList.length - 1; j > index; j--) {
      linkList[j + 1] = linkList[j];
    }
    linkList[index + 1] = nodeList[i][0];
  }

  var deleteList = linkList.filter((i) => i !== deleteNode);
  var str = deleteList.join(" ");
  console.log(str);
});
