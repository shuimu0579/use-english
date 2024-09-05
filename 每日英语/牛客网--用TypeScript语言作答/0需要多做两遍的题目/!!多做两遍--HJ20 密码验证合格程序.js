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
  var list = [];
  for (let i of arr) {
    var isUpper = /[A-Z]/.test(i);
    var isLower = /[a-z]/.test(i);
    var isDigit = /[0-9]/.test(i);
    var special = /![A-Za-z0-9]/.test(i);
    var fliterList = [isUpper, isLower, isDigit, special].filter(Boolean) || [];

    var isRepeat = false;
    for (var m = 0; m < i.length - 2; m++) {
      for (var n = m + 3; n <= i.length; n++) {
        var str = i.slice(m, n);
        if (i.indexOf(str, n) > -1) {
          isRepeat = true;
          break;
        }
      }
    }

    if (i.length <= 8 || fliterList.length < 3 || isRepeat) {
      list.push("NG");
    } else {
      list.push("OK");
    }
  }

  for (let i of list) {
    console.log(i);
  }
});
