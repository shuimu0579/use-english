/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var m = nums.length;
    var n = 2;
    var dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // 0代表不偷, 1代表偷
    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for(let i = 1; i < m; i++){
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]);
        dp[i][1] = dp[i-1][0] + nums[i];
    }

    return Math.max(dp[m-1][0], dp[m-1][1]);
};
