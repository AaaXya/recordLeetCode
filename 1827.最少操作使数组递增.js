/*
 * @lc app=leetcode.cn id=1827 lang=javascript
 *
 * [1827] 最少操作使数组递增
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    let res = 0;
    nums.reduce((a, b) => (a++ < b ? b : ((res += a - b), a)));
    return res;
};
// @lc code=end
