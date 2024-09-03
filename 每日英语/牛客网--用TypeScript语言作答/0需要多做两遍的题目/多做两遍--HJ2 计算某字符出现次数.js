const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr = [];
rl.on("line", function (line) {
  arr.push(line);
});

var hashMap = new Map();
rl.on("close", function () {
  var line = arr[0];
  var strs = line.toUpperCase();
  var s = arr[1];

  for (var str of strs) {
    if (hashMap.has(str)) {
      hashMap.set(str, hashMap.get(str) + 1);
    } else {
      hashMap.set(str, 1);
    }
  }
  if (hashMap.has(s.toUpperCase())) {
    console.log(hashMap.get(s.toUpperCase()));
  } else {
    console.log(0); // 这一行很重要
  }
});
