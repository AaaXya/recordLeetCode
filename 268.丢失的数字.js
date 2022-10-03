/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    return (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b, 0);
};
// @lc code=end
