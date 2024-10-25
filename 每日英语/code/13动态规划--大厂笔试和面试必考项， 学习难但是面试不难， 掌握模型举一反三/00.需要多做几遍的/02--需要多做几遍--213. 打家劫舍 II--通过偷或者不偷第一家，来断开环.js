/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 例外的条件
    var len = nums.length;
    if(len === 1) return nums[0];
    if(len === 2) return Math.max(nums[0], nums[1]);
    if(len === 3) return Math.max(nums[0], Math.max(nums[1], nums[2]));

    // 没偷第一家。除此之外，其他家同rob_raw之前逻辑
    var a = rob_raw(nums.slice(1));
    // 偷了第一家，那么第二家和最后一家，都不能偷。除此之外，其他家同rob_raw之前逻辑。
    var b = rob_raw(nums.slice(2, nums.length - 1)) + nums[0];

    return Math.max(a, b);
};

function rob_raw(nums){
    var m = nums.length;
    var n = 2;
    var dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

    // 0不偷，1偷
    dp[0][0] = 0;
    dp[0][1] = nums[0];

    for(let i = 1; i < m; i++){
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]);
        dp[i][1] = dp[i-1][0] + nums[i];
    }

    return Math.max(dp[m-1][0], dp[m-1][1]);
}
