const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var arr = [];
  for (var i = 0; i < Math.ceil(line.length / 8); i++) {
    arr.push(line.slice(i * 8, (i + 1) * 8));
  }
  for (let str of arr) {
    var s = str.length < 8 ? str.padEnd(8, "0") : str;
    console.log(s);
  }
});
