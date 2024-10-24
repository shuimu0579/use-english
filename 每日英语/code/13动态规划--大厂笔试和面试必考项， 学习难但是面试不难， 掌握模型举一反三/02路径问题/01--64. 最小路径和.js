/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

    dp[0][0] = grid[0][0];
    for(let i = 1; i < n; i++){
        dp[0][i] = dp[0][i-1] + grid[0][i];
    }
    for(let j = 1; j < m; j++){
        dp[j][0] = dp[j-1][0] + grid[j][0];
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];  
        }
    }

    return dp[m-1][n-1];
};
