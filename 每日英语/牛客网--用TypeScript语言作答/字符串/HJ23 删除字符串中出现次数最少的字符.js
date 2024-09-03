const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var list = line.split("");
  var hashMap = new Map();
  for (var i of list) {
    if (hashMap.has(i)) {
      hashMap.set(i, hashMap.get(i) + 1);
    } else {
      hashMap.set(i, 1);
    }
  }

  var arr = Array.from(hashMap).sort((a, b) => a[1] - b[1]);
  var arr1 = arr.filter((i) => i[1] === arr[0][1]).map((i) => i[0]);
  var filterList = list.filter((i) => !arr1.includes(i));

  console.log(filterList.join(""));
});
