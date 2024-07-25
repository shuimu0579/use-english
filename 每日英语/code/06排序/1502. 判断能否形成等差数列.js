/**
 * @param {number[]} arr
 
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
  if(arr.length === 2) return true;

  // 冒泡排序
  // for(var i = 0; i < arr.length; i++){
  //     for(var j = 0; j < arr.length - i; j++){
  //         if(arr[j] > arr[j+1]){
  //             [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
  //         }
  //     }
  // }

  // 选择排序
  for(var i = 0; i < arr.length; i++){
      var minIndex = i;
      for(var j = i + 1; j < arr.length; j++){
          if(arr[j] < arr[minIndex]){
              minIndex = j
          }
      }

      if(minIndex !== i){
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      }
  }

  var diff = arr[1] - arr[0];
  for(var i = 0; i < arr.length - 1; i++){
      if((arr[i + 1] || 0) - arr[i] !== diff){
          return false;
      }
  }

  return true;
};
