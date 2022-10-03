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
    for (let i = 0; i < nums.length + 1; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
};
// @lc code=end
