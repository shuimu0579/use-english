// ```
// 现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。

// https://leetcode.cn/problems/jian-sheng-zi-lcof/description/
// ```;

/**
 * @param {number} bamboo_len
 * @return {number}
 */

var cuttingBamboo = function(bamboo_len) {
    if(bamboo_len === 2) return 1;
    if(bamboo_len === 3) return 2;

    var n = bamboo_len;
    var dp = new Array(n+1).fill(1);

    dp[0] = 1;

    for(let i = 1; i < n+1; i++){
        var max = Number.MIN_SAFE_INTEGER;
        for(let j = 1; j <= i; j++){
            max =  Math.max(max, j * dp[i-j]);
        }
        dp[i] = max; 
    }

    return dp[n];
};
