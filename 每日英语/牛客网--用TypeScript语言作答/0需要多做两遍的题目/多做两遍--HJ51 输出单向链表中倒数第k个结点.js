const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var arr = [];
rl.on("line", function (line) {
  arr.push(line);
});

rl.on("close", function () {
  for (let i = 0; i < arr.length; i = i + 3) {
    var k = arr[i + 2];
    var link = arr.slice(i + 1, i + 2)[0].split(" ");
    var index = link.length - k;
    console.log(link[index]);
  }
});
