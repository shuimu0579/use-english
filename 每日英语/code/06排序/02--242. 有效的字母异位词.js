
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 更好的解法?  使用 map 表 key-value对 计数

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;

  const obj = {};
  for(i of s){
      obj[i] =  (obj[i] || 0) + 1;
  }

  for(j of t){
      if(!obj[j]){
          return false;
      }
      obj[j]--;
  }

  return Object.values(obj).every(i => i === 0);
};


// 这个时间复杂度太高
 var isAnagram = function(s, t) {
  if(!s && !t) return false;

  var SArr = [...s];
  var TArr = [...t];

  for(var i = 0; i < SArr.length; i++){
      for(var j = 0; j < TArr.length; j++){
          if(SArr[i] === TArr[j]){
              TArr.splice(j, 1);
              break;
          }
      }
  }

  return s.length === t.length && TArr.length === 0;
};

var s = "aacc"
var t = "ccac"
isAnagram(s, t);
