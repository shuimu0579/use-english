// https://leetcode.cn/problems/unique-paths-ii/description/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

    for(let i = 0; i < m; i++){
        dp[i][0] = 1;
        if(obstacleGrid[i][0] === 1){
            for(let j = i; j < m; j++){
                dp[j][0] = 0;
            }
            break;
        }
    }
    for(let i = 0; i < n; i++){
        dp[0][i] = 1;
        if(obstacleGrid[0][i] === 1){
            for(let j = i; j < m; j++){
                dp[0][j] = 0;
            }
            break;
        }
    }

    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            if(obstacleGrid[i][j-1] === 1){
                dp[i][j-1] = 0;
            }
            if(obstacleGrid[i-1][j] === 1){
                dp[i-1][j] = 0;
            }
            dp[i][j] = dp[i][j-1] + dp[i-1][j];
        }
    }

    return obstacleGrid[m-1][n-1] === 1 ? 0 : dp[m-1][n-1];
};
