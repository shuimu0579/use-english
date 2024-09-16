const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];
rl.on("line", function (line) {
  arr.push(line);
});
rl.on("close", function () {
  // 要加密的密码
  var s1 = arr[0];
  // 要解密的密码
  var s2 = arr[1];

  var s1After = "";
  for (let i = 0; i < s1.length; i++) {
    let charCode = s1[i].charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      if (charCode === 122) {
        s1After += String.fromCharCode(97).toUpperCase();
      } else {
        s1After += String.fromCharCode(charCode + 1).toUpperCase();
      }
    } else if (charCode >= 65 && charCode <= 90) {
      if (charCode === 90) {
        s1After += String.fromCharCode(65).toLowerCase();
      } else {
        s1After += String.fromCharCode(charCode + 1).toLowerCase();
      }
    } else if (charCode >= 48 && charCode <= 57) {
      if (charCode === 57) {
        s1After += String.fromCharCode(48);
      } else {
        s1After += String.fromCharCode(charCode + 1);
      }
    }
  }

  var s2After = "";
  for (let i = 0; i < s2.length; i++) {
    let charCode = s2[i].charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      if (charCode === 97) {
        s2After += String.fromCharCode(122).toUpperCase();
      } else {
        s2After += String.fromCharCode(charCode - 1).toUpperCase();
      }
    } else if (charCode >= 65 && charCode <= 90) {
      if (charCode === 65) {
        s2After += String.fromCharCode(90).toLowerCase();
      } else {
        s2After += String.fromCharCode(charCode - 1).toLowerCase();
      }
    } else if (charCode >= 48 && charCode <= 57) {
      if (charCode === 48) {
        s2After += String.fromCharCode(57);
      } else {
        s2After += String.fromCharCode(charCode - 1);
      }
    }
  }

  console.log(s1After);
  console.log(s2After);
  // '9'.charCodeAt(0)
  // a-z => 97 - 122
  // A-Z => 65 - 90
  // 0-9 => 48 - 57

  // String.fromCharCode(97)
  // 97 => a
});
