// https://leetcode.cn/problems/triangle/description/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var m = triangle.length;
    var n = triangle[m-1].length;
    var dp = new Array(m).fill(null).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));

    dp[0][0] = triangle[0][0];
    for(let i = 1; i < m; i++){
        dp[i][0] = dp[i-1][0] + triangle[i][0];
    }


    for(let i = 1; i < m; i++){
        for(let j = 1; j <=i;j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + triangle[i][j];  
        }
    }

    // return dp[m-1][n-1];
    var min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        min = Math.min(min, dp[m-1][i]);
    }
    return min;
};
